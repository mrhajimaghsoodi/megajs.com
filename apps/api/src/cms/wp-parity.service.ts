import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class WpParityService {
  constructor(private readonly prisma: PrismaService) {}

  // ——— Site Health (Tools → Site Health) ———
  async siteHealth() {
    const checks: Array<{
      id: string;
      status: 'good' | 'recommended' | 'critical';
      label: string;
      detail: string;
    }> = [];

    const push = (
      id: string,
      status: 'good' | 'recommended' | 'critical',
      label: string,
      detail: string,
    ) => checks.push({ id, status, label, detail });

    push(
      'runtime',
      process.env.NODE_ENV === 'production' ? 'good' : 'recommended',
      'Environment',
      `NODE_ENV=${process.env.NODE_ENV ?? 'development'}`,
    );

    try {
      await this.prisma.$queryRaw`SELECT 1`;
      push('db', 'good', 'Database', 'SQLite/Prisma connection OK');
    } catch {
      push('db', 'critical', 'Database', 'Cannot query database');
    }

    const [users, articles, courses, orders, redirects, media] =
      await Promise.all([
        this.prisma.user.count(),
        this.prisma.article.count({ where: { status: 'published' } }),
        this.prisma.course.count({ where: { status: 'published' } }),
        this.prisma.order.count(),
        this.prisma.redirect.count(),
        this.prisma.mediaItem.count(),
      ]);

    push(
      'content',
      articles + courses > 0 ? 'good' : 'recommended',
      'Published content',
      `${articles} posts, ${courses} products/courses, ${media} media`,
    );
    push(
      'commerce',
      orders >= 0 ? 'good' : 'recommended',
      'Commerce',
      `${orders} orders recorded · ${users} users`,
    );
    push(
      'redirects',
      'good',
      'Redirects',
      `${redirects} redirect rules (Rank Math / SEO)`,
    );

    const settings = await this.prisma.siteSetting.findMany();
    const keys = new Set(settings.map((s) => s.key));
    for (const required of [
      'general',
      'reading',
      'discussion',
      'payments',
      'permalinks',
      'writing',
      'privacy',
      'woocommerce',
    ]) {
      if (!keys.has(required)) {
        push(
          `setting_${required}`,
          'recommended',
          `Settings → ${required}`,
          'Not configured yet — defaults will be used.',
        );
      }
    }

    const score =
      checks.filter((c) => c.status === 'good').length * 10 -
      checks.filter((c) => c.status === 'critical').length * 25 -
      checks.filter((c) => c.status === 'recommended').length * 3;

    return {
      score: Math.max(0, Math.min(100, 70 + score)),
      checks,
      info: {
        node: process.version,
        platform: process.platform,
        uptimeSec: Math.floor(process.uptime()),
        users,
        articles,
        courses,
        orders,
        media,
      },
    };
  }

  // ——— Export / Import (Tools) ———
  async exportSite() {
    const [
      articles,
      pages,
      terms,
      media,
      redirects,
      settings,
      plans,
      coupons,
      attributes,
      menus,
      widgets,
    ] = await Promise.all([
      this.prisma.article.findMany({
        include: { i18n: true, taxonomies: true, seo: true },
      }),
      this.prisma.page.findMany({ include: { i18n: true, seo: true } }),
      this.prisma.term.findMany({ include: { i18n: true } }),
      this.prisma.mediaItem.findMany(),
      this.prisma.redirect.findMany(),
      this.prisma.siteSetting.findMany(),
      this.prisma.plan.findMany(),
      this.prisma.coupon.findMany(),
      this.prisma.productAttribute.findMany({ include: { terms: true } }),
      this.prisma.navMenu.findMany({ include: { items: true } }),
      this.prisma.widgetArea.findMany(),
    ]);

    return {
      format: 'megajs-wp-export',
      version: 1,
      exportedAt: new Date().toISOString(),
      data: {
        articles,
        pages,
        terms,
        media,
        redirects,
        settings,
        plans,
        coupons,
        attributes,
        menus,
        widgets,
      },
    };
  }

  async importSite(payload: {
    data?: {
      terms?: any[];
      redirects?: any[];
      settings?: any[];
      media?: any[];
      attributes?: any[];
    };
  }) {
    if (!payload?.data) throw new BadRequestException('data required');
    const result = { terms: 0, redirects: 0, settings: 0, media: 0, attributes: 0 };

    for (const t of payload.data.terms ?? []) {
      const existing = await this.prisma.term.findFirst({
        where: { taxonomy: t.taxonomy, slug: t.slug },
      });
      if (!existing) {
        await this.prisma.term.create({
          data: {
            taxonomy: t.taxonomy,
            slug: t.slug,
            sortOrder: t.sortOrder ?? 0,
            i18n: {
              create: (t.i18n ?? [{ locale: 'fa', name: t.slug, description: '' }]).map(
                (i: any) => ({
                  locale: i.locale,
                  name: i.name,
                  description: i.description ?? '',
                }),
              ),
            },
          },
        });
        result.terms++;
      }
    }

    for (const r of payload.data.redirects ?? []) {
      const existing = await this.prisma.redirect.findUnique({
        where: { fromPath: r.fromPath },
      });
      if (!existing) {
        await this.prisma.redirect.create({
          data: {
            fromPath: r.fromPath,
            toPath: r.toPath,
            code: r.code ?? 301,
          },
        });
        result.redirects++;
      }
    }

    for (const s of payload.data.settings ?? []) {
      await this.prisma.siteSetting.upsert({
        where: { key: s.key },
        create: { key: s.key, valueJson: s.valueJson },
        update: { valueJson: s.valueJson },
      });
      result.settings++;
    }

    for (const m of payload.data.media ?? []) {
      const existing = await this.prisma.mediaItem.findFirst({
        where: { url: m.url },
      });
      if (!existing) {
        await this.prisma.mediaItem.create({
          data: {
            url: m.url,
            filename: m.filename ?? 'file',
            mimeType: m.mimeType ?? 'application/octet-stream',
            sizeBytes: m.sizeBytes ?? 0,
            alt: m.alt ?? '',
            title: m.title ?? '',
          },
        });
        result.media++;
      }
    }

    for (const a of payload.data.attributes ?? []) {
      const existing = await this.prisma.productAttribute.findUnique({
        where: { slug: a.slug },
      });
      if (!existing) {
        await this.prisma.productAttribute.create({
          data: {
            slug: a.slug,
            name: a.name,
            type: a.type ?? 'select',
            terms: {
              create: (a.terms ?? []).map((t: any, idx: number) => ({
                slug: t.slug,
                name: t.name,
                description: t.description ?? '',
                sortOrder: t.sortOrder ?? idx,
              })),
            },
          },
        });
        result.attributes++;
      }
    }

    return { ok: true, imported: result };
  }

  // ——— Product attributes ———
  listAttributes() {
    return this.prisma.productAttribute.findMany({
      include: { terms: { orderBy: { sortOrder: 'asc' } }, _count: { select: { terms: true } } },
      orderBy: { name: 'asc' },
    });
  }

  async createAttribute(body: {
    name?: string;
    slug?: string;
    type?: string;
    hasArchives?: boolean;
  }) {
    if (!body.name?.trim()) throw new BadRequestException('name required');
    const slug =
      body.slug?.trim() ||
      body.name
        .trim()
        .toLowerCase()
        .replace(/[^\w\u0600-\u06FF]+/g, '-')
        .replace(/^-+|-+$/g, '');
    return this.prisma.productAttribute.create({
      data: {
        name: body.name.trim(),
        slug,
        type: body.type ?? 'select',
        hasArchives: body.hasArchives ?? false,
      },
      include: { terms: true },
    });
  }

  async updateAttribute(
    id: string,
    body: Partial<{ name: string; slug: string; type: string; hasArchives: boolean }>,
  ) {
    return this.prisma.productAttribute.update({
      where: { id },
      data: body,
      include: { terms: true },
    });
  }

  async deleteAttribute(id: string) {
    await this.prisma.productAttribute.delete({ where: { id } });
    return { ok: true };
  }

  async createAttributeTerm(
    attributeId: string,
    body: { name?: string; slug?: string; description?: string; sortOrder?: number },
  ) {
    if (!body.name?.trim()) throw new BadRequestException('name required');
    const slug =
      body.slug?.trim() ||
      body.name
        .trim()
        .toLowerCase()
        .replace(/[^\w\u0600-\u06FF]+/g, '-')
        .replace(/^-+|-+$/g, '');
    return this.prisma.productAttributeTerm.create({
      data: {
        attributeId,
        name: body.name.trim(),
        slug,
        description: body.description ?? '',
        sortOrder: body.sortOrder ?? 0,
      },
    });
  }

  async deleteAttributeTerm(id: string) {
    await this.prisma.productAttributeTerm.delete({ where: { id } });
    return { ok: true };
  }

  // ——— Widgets ———
  listWidgets() {
    return this.prisma.widgetArea.findMany({ orderBy: { location: 'asc' } });
  }

  async upsertWidgetArea(body: {
    location?: string;
    name?: string;
    widgets?: unknown[];
  }) {
    const location = body.location ?? 'sidebar';
    const name = body.name ?? location;
    return this.prisma.widgetArea.upsert({
      where: { location },
      create: {
        location,
        name,
        widgetsJson: JSON.stringify(body.widgets ?? []),
      },
      update: {
        name,
        widgetsJson: JSON.stringify(body.widgets ?? []),
      },
    });
  }

  // ——— Create user (Users → Add New) ———
  async createUser(body: {
    phone?: string;
    displayName?: string;
    email?: string;
    role?: string;
    locale?: string;
  }) {
    if (!body.phone?.trim()) throw new BadRequestException('phone required');
    const phone = body.phone.replace(/\s+/g, '');
    const existing = await this.prisma.user.findUnique({ where: { phone } });
    if (existing) throw new BadRequestException('Phone already registered');
    return this.prisma.user.create({
      data: {
        phone,
        phoneVerified: true,
        displayName: body.displayName ?? `User ${phone.slice(-4)}`,
        email: body.email || null,
        role: body.role ?? 'user',
        locale: body.locale ?? 'fa',
        identities: {
          create: { provider: 'phone', providerUserId: phone },
        },
        wallet: { create: { balance: 0 } },
      },
    });
  }

  // ——— WooCommerce home stats ———
  async wooHome() {
    const now = new Date();
    const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    const [
      netSales,
      ordersProcessing,
      ordersOnHold,
      ordersCompletedMonth,
      customers,
      products,
      lowStock,
    ] = await Promise.all([
      this.prisma.order.aggregate({
        where: { status: 'completed', createdAt: { gte: monthAgo } },
        _sum: { amountCents: true },
      }),
      this.prisma.order.count({ where: { status: 'processing' } }),
      this.prisma.order.count({ where: { status: 'on_hold' } }),
      this.prisma.order.count({
        where: { status: 'completed', createdAt: { gte: monthAgo } },
      }),
      this.prisma.user.count({ where: { role: 'user' } }),
      this.prisma.course.count({ where: { status: 'published' } }),
      this.prisma.course.count({ where: { status: 'draft' } }),
    ]);

    return {
      netSalesCents: netSales._sum.amountCents ?? 0,
      ordersProcessing,
      ordersOnHold,
      ordersCompletedMonth,
      customers,
      products,
      drafts: lowStock,
    };
  }

  // ——— System status (Woo → Status) ———
  async systemStatus() {
    const health = await this.siteHealth();
    const tables = [
      'User',
      'Article',
      'Page',
      'Course',
      'Order',
      'Coupon',
      'MediaItem',
      'Term',
      'ProductAttribute',
    ];
    const counts: Record<string, number> = {};
    counts.User = await this.prisma.user.count();
    counts.Article = await this.prisma.article.count();
    counts.Page = await this.prisma.page.count();
    counts.Course = await this.prisma.course.count();
    counts.Order = await this.prisma.order.count();
    counts.Coupon = await this.prisma.coupon.count();
    counts.MediaItem = await this.prisma.mediaItem.count();
    counts.Term = await this.prisma.term.count();
    counts.ProductAttribute = await this.prisma.productAttribute.count();

    return {
      environment: health.info,
      health,
      tables,
      counts,
      activePlugins: [
        'rankmath',
        'wordfence',
        'wprocket',
        'smush',
        'elementor',
        'woocommerce-core',
      ],
      theme: {
        name: 'MEGA JS Design Tokens',
        version: '0.1.0',
        parent: 'Next.js App Router',
      },
    };
  }

  async getSettingGroup(key: string, defaults: Record<string, unknown>) {
    const row = await this.prisma.siteSetting.findUnique({ where: { key } });
    if (!row) return defaults;
    try {
      return { ...defaults, ...JSON.parse(row.valueJson) };
    } catch {
      return defaults;
    }
  }

  async saveSettingGroup(key: string, value: Record<string, unknown>) {
    await this.prisma.siteSetting.upsert({
      where: { key },
      create: { key, valueJson: JSON.stringify(value) },
      update: { valueJson: JSON.stringify(value) },
    });
    return value;
  }

  async allWpSettings() {
    const [
      general,
      writing,
      reading,
      discussion,
      media,
      permalinks,
      privacy,
      woocommerce,
      emails,
      accounts,
    ] = await Promise.all([
      this.getSettingGroup('general', {
        siteName: 'MEGA JS',
        tagline: '',
        adminEmail: '',
        timezone: 'Asia/Tehran',
        dateFormat: 'Y/m/d',
        timeFormat: 'H:i',
        startOfWeek: 6,
        siteLanguage: 'fa',
      }),
      this.getSettingGroup('writing', {
        defaultPostCategory: '',
        defaultPostFormat: 'standard',
        requireNameEmail: true,
      }),
      this.getSettingGroup('reading', {
        postsPerPage: 10,
        homepage: 'latest',
        homepagePageId: '',
        postsPageId: '',
        searchEngineVisible: true,
      }),
      this.getSettingGroup('discussion', {
        commentsOpen: true,
        moderateNew: true,
        commentOrder: 'asc',
        threadComments: true,
        threadDepth: 3,
      }),
      this.getSettingGroup('media', {
        thumbnailWidth: 150,
        thumbnailHeight: 150,
        mediumWidth: 300,
        mediumHeight: 300,
        largeWidth: 1024,
        largeHeight: 1024,
        uploadsOrganize: true,
      }),
      this.getSettingGroup('permalinks', {
        structure: '/%category%/%postname%/',
        categoryBase: '',
        tagBase: 'tag',
        productBase: 'product',
      }),
      this.getSettingGroup('privacy', {
        policyPageId: '',
        policyPageSlug: 'privacy',
      }),
      this.getSettingGroup('woocommerce', {
        storeAddress: '',
        storeCity: 'Tehran',
        storeCountry: 'IR',
        currency: 'IRT',
        currencyPos: 'left',
        thousandSep: ',',
        decimalSep: '.',
        numDecimals: 0,
        sellTo: 'all',
        enableTaxes: false,
        calcTaxes: false,
      }),
      this.getSettingGroup('emails', {
        fromName: 'MEGA JS',
        fromAddress: 'noreply@megajs.com',
        headerImage: '',
        footerText: 'MEGA JS Academy',
        newOrder: true,
        cancelledOrder: true,
        failedOrder: true,
        customerInvoice: true,
      }),
      this.getSettingGroup('accounts', {
        guestCheckout: false,
        accountCreation: true,
        loginReminder: true,
      }),
    ]);

    return {
      general,
      writing,
      reading,
      discussion,
      media,
      permalinks,
      privacy,
      woocommerce,
      emails,
      accounts,
    };
  }

  async updatesStatus() {
    return {
      core: { current: '0.1.0', latest: '0.1.0', updateAvailable: false },
      plugins: [
        { slug: 'rankmath', name: 'Rank Math SEO', version: '1.0.0', updateAvailable: false },
        { slug: 'wordfence', name: 'Wordfence Security', version: '1.0.0', updateAvailable: false },
        { slug: 'wprocket', name: 'WP Rocket', version: '1.0.0', updateAvailable: false },
        { slug: 'smush', name: 'Smush', version: '1.0.0', updateAvailable: false },
        { slug: 'elementor', name: 'Elementor', version: '1.0.0', updateAvailable: false },
        { slug: 'woocommerce', name: 'WooCommerce', version: '1.0.0', updateAvailable: false },
      ],
      themes: [
        { slug: 'megajs', name: 'MEGA JS', version: '0.1.0', updateAvailable: false },
      ],
      checkedAt: new Date().toISOString(),
    };
  }

  async getProfile(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }
}
