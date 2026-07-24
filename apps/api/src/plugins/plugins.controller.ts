import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  Headers,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  UnauthorizedException,
} from '@nestjs/common';
import {
  buildArticlePermalink,
  indexTerms,
  matchCategoryPath,
  normalizePath,
  type PermalinkTerm,
  termPermalinkPath,
} from '../cms/article-permalink';
import { AuthService } from '../auth/auth.service';
import { PrismaService } from '../prisma/prisma.service';
import { RankMathService } from './rankmath.service';
import { SmushService } from './smush.service';
import { WordfenceService } from './wordfence.service';
import { WpRocketService } from './wprocket.service';

@Controller('admin/plugins')
export class PluginsAdminController {
  constructor(
    private readonly auth: AuthService,
    private readonly prisma: PrismaService,
    private readonly rankmath: RankMathService,
    private readonly wordfence: WordfenceService,
    private readonly rocket: WpRocketService,
    private readonly smush: SmushService,
  ) {}

  private async requireStaff(authorization?: string) {
    const userId = this.auth.userIdFromAuthHeader(authorization);
    if (!userId) throw new UnauthorizedException();
    const me = await this.auth.getMe(userId);
    if (!['super_admin', 'editor', 'instructor', 'support', 'analyst'].includes(me.role)) {
      throw new ForbiddenException('Staff only');
    }
    return me;
  }

  private requireSuper(me: { role: string }) {
    if (me.role !== 'super_admin') throw new ForbiddenException('super_admin only');
  }

  // ——— RankMath ———
  @Post('rankmath/analyze')
  async analyze(
    @Headers('authorization') authorization?: string,
    @Body() body?: Record<string, any>,
  ) {
    await this.requireStaff(authorization);
    if (body?.type === 'term' || body?.entityType === 'term') {
      return this.rankmath.analyzeTerm(body ?? {});
    }
    return this.rankmath.analyze(body ?? {});
  }

  @Get('rankmath/settings')
  async rankSettings(@Headers('authorization') authorization?: string) {
    await this.requireStaff(authorization);
    const row = await this.prisma.siteSetting.findUnique({ where: { key: 'rankmath' } });
    const defaults = {
      enabled: true,
      sitemap: true,
      breadcrumbs: true,
      og: true,
      schema: true,
      robotsNoIndexSearch: true,
    };
    if (!row) return defaults;
    try {
      return { ...defaults, ...JSON.parse(row.valueJson) };
    } catch {
      return defaults;
    }
  }

  @Put('rankmath/settings')
  async saveRankSettings(
    @Headers('authorization') authorization?: string,
    @Body() body?: Record<string, unknown>,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireSuper(me);
    const current = await this.rankSettings(authorization);
    const next = { ...current, ...(body ?? {}) };
    await this.prisma.siteSetting.upsert({
      where: { key: 'rankmath' },
      create: { key: 'rankmath', valueJson: JSON.stringify(next) },
      update: { valueJson: JSON.stringify(next) },
    });
    return next;
  }

  @Get('rankmath/sitemap-preview')
  async sitemapPreview(@Headers('authorization') authorization?: string) {
    await this.requireStaff(authorization);
    const [articles, pages, courses] = await Promise.all([
      this.prisma.article.findMany({
        where: { status: 'published' },
        select: { slug: true, updatedAt: true },
      }),
      this.prisma.page.findMany({
        where: { status: 'published' },
        select: { slug: true, updatedAt: true },
      }),
      this.prisma.course.findMany({
        where: { status: 'published' },
        select: { slug: true, updatedAt: true },
      }),
    ]);
    return { articles, pages, courses };
  }

  // ——— Wordfence ———
  @Get('wordfence')
  async wordfenceDash(@Headers('authorization') authorization?: string) {
    await this.requireStaff(authorization);
    return this.wordfence.dashboard();
  }

  @Put('wordfence/settings')
  async wordfenceSettings(
    @Headers('authorization') authorization?: string,
    @Body() body?: Record<string, unknown>,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireSuper(me);
    const dash = await this.wordfence.dashboard();
    const next = { ...dash.settings, ...(body ?? {}) };
    await this.prisma.siteSetting.upsert({
      where: { key: 'wordfence' },
      create: { key: 'wordfence', valueJson: JSON.stringify(next) },
      update: { valueJson: JSON.stringify(next) },
    });
    return next;
  }

  @Post('wordfence/block')
  async blockIp(
    @Headers('authorization') authorization?: string,
    @Body() body?: { ip?: string; reason?: string; hours?: number },
  ) {
    const me = await this.requireStaff(authorization);
    this.requireSuper(me);
    if (!body?.ip) throw new BadRequestException('ip required');
    return this.wordfence.blockIp(body.ip, body.reason ?? '', me.id, body.hours);
  }

  @Delete('wordfence/block/:ip')
  async unblock(
    @Param('ip') ip: string,
    @Headers('authorization') authorization?: string,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireSuper(me);
    return this.wordfence.unblockIp(decodeURIComponent(ip));
  }

  @Post('wordfence/scan')
  async scan(@Headers('authorization') authorization?: string) {
    await this.requireStaff(authorization);
    return this.wordfence.runScan();
  }

  // ——— WP Rocket ———
  @Get('wprocket')
  async rocketStatus(@Headers('authorization') authorization?: string) {
    await this.requireStaff(authorization);
    return this.rocket.status();
  }

  @Put('wprocket/settings')
  async rocketSettings(
    @Headers('authorization') authorization?: string,
    @Body() body?: Record<string, unknown>,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireSuper(me);
    return this.rocket.saveSettings(body ?? {});
  }

  @Post('wprocket/purge')
  async rocketPurge(@Headers('authorization') authorization?: string) {
    const me = await this.requireStaff(authorization);
    this.requireSuper(me);
    return this.rocket.purge();
  }

  // ——— Smush ———
  @Get('smush')
  async smushStats(@Headers('authorization') authorization?: string) {
    await this.requireStaff(authorization);
    return this.smush.stats();
  }

  @Put('smush/settings')
  async smushSettings(
    @Headers('authorization') authorization?: string,
    @Body() body?: Record<string, unknown>,
  ) {
    const me = await this.requireStaff(authorization);
    this.requireSuper(me);
    return this.smush.saveSettings(body ?? {});
  }

  @Post('smush/optimize/:id')
  async smushOne(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
  ) {
    await this.requireStaff(authorization);
    return this.smush.optimizeOne(id);
  }

  @Post('smush/optimize-bulk')
  async smushBulk(
    @Headers('authorization') authorization?: string,
    @Body() body?: { limit?: number },
  ) {
    await this.requireStaff(authorization);
    return this.smush.optimizeBulk(body?.limit ?? 50);
  }

  // ——— Elementor ———
  @Get('elementor/pages/:id')
  async getBuilder(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
  ) {
    await this.requireStaff(authorization);
    const page = await this.prisma.page.findUnique({
      where: { id },
      include: { i18n: true },
    });
    if (!page) throw new BadRequestException('Page not found');
    let builder: unknown = { version: 1, sections: [] };
    try {
      builder = JSON.parse(page.builderJson);
    } catch {
      /* keep default */
    }
    return { ...page, builder };
  }

  @Put('elementor/pages/:id')
  async saveBuilder(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
    @Body() body?: { builder?: unknown; template?: string },
  ) {
    const me = await this.requireStaff(authorization);
    if (!['super_admin', 'editor'].includes(me.role)) {
      throw new ForbiddenException('Editor required');
    }
    const page = await this.prisma.page.update({
      where: { id },
      data: {
        builderJson: JSON.stringify(body?.builder ?? { version: 1, sections: [] }),
        template: body?.template ?? 'elementor',
      },
      include: { i18n: true },
    });
    return page;
  }
}

/** Public read APIs for web sitemap, articles, pages, plugin configs */
@Controller('public')
export class PublicContentController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly rocket: WpRocketService,
    private readonly smush: SmushService,
    private readonly rankmath: RankMathService,
  ) {}

  private async loadPostCategoryIndex() {
    const terms = await this.prisma.term.findMany({
      where: { taxonomy: 'post_category' },
      select: {
        id: true,
        slug: true,
        parentId: true,
        taxonomy: true,
        isDefault: true,
        sortOrder: true,
      },
    });
    return indexTerms(terms as PermalinkTerm[]);
  }

  private articlePermalinkFromRow(
    slug: string,
    taxonomies: Array<{ term: PermalinkTerm }>,
    byId: Map<string, PermalinkTerm>,
  ) {
    const assigned = taxonomies.map((t) => t.term).filter(Boolean);
    return buildArticlePermalink(slug, assigned, byId);
  }

  @Get('sitemap')
  async sitemap() {
    const [articleRows, pages, courses, redirects, catIndex] = await Promise.all([
      this.prisma.article.findMany({
        where: { status: 'published' },
        select: {
          slug: true,
          updatedAt: true,
          publishedAt: true,
          taxonomies: { include: { term: true } },
        },
      }),
      this.prisma.page.findMany({
        where: { status: 'published' },
        select: { slug: true, updatedAt: true, publishedAt: true },
      }),
      this.prisma.course.findMany({
        where: { status: 'published' },
        select: { slug: true, updatedAt: true },
      }),
      this.prisma.redirect.findMany(),
      this.loadPostCategoryIndex(),
    ]);
    const articles = articleRows.map((a) => ({
      slug: a.slug,
      updatedAt: a.updatedAt,
      publishedAt: a.publishedAt,
      permalink: this.articlePermalinkFromRow(
        a.slug,
        a.taxonomies as Array<{ term: PermalinkTerm }>,
        catIndex,
      ),
    }));
    const rank = await this.prisma.siteSetting.findUnique({ where: { key: 'rankmath' } });
    let rankSettings = { sitemap: true };
    if (rank) {
      try {
        rankSettings = { ...rankSettings, ...JSON.parse(rank.valueJson) };
      } catch {
        /* ignore */
      }
    }
    return { articles, pages, courses, redirects, rankSettings };
  }

  @Get('articles')
  async articles(
    @Query('locale') locale = 'fa',
    @Query('category') category?: string,
    @Query('tag') tag?: string,
  ) {
    let termFilter: { taxonomies: { some: { termId?: { in: string[] }; term?: { taxonomy: string; slug: string } } } } | undefined;

    if (category) {
      const root = await this.prisma.term.findFirst({
        where: { taxonomy: 'post_category', slug: category },
      });
      if (root) {
        const ids = await this.collectDescendantIds(root.id);
        termFilter = { taxonomies: { some: { termId: { in: ids } } } };
      } else {
        termFilter = {
          taxonomies: {
            some: { term: { taxonomy: 'post_category', slug: category } },
          },
        };
      }
    } else if (tag) {
      termFilter = {
        taxonomies: { some: { term: { taxonomy: 'post_tag', slug: tag } } },
      };
    }

    const [rows, catIndex] = await Promise.all([
      this.prisma.article.findMany({
        where: {
          status: 'published',
          ...termFilter,
        },
        include: {
          i18n: true,
          seo: true,
          taxonomies: { include: { term: { include: { i18n: true } } } },
        },
        orderBy: [{ sticky: 'desc' }, { publishedAt: 'desc' }],
        take: 50,
      }),
      this.loadPostCategoryIndex(),
    ]);
    return rows.map((row) => {
      const permalink = this.articlePermalinkFromRow(
        row.slug,
        row.taxonomies as Array<{ term: PermalinkTerm }>,
        catIndex,
      );
      return {
        ...row,
        permalink,
        title:
          row.i18n.find((x) => x.locale === locale)?.title ??
          row.i18n[0]?.title ??
          row.slug,
        summary:
          row.i18n.find((x) => x.locale === locale)?.summary ??
          row.i18n[0]?.summary ??
          '',
        coverUrl: row.coverUrl,
        bannerUrl: row.bannerUrl,
        sticky: row.sticky,
      };
    });
  }

  @Get('courses')
  async courses(
    @Query('locale') locale = 'fa',
    @Query('category') category?: string,
    @Query('tag') tag?: string,
  ) {
    let termFilter:
      | { taxonomies: { some: { termId?: { in: string[] }; term?: { taxonomy: string; slug: string } } } }
      | undefined;

    if (category) {
      const root = await this.prisma.term.findFirst({
        where: { taxonomy: 'product_category', slug: category },
      });
      if (root) {
        const ids = await this.collectDescendantIds(root.id);
        termFilter = { taxonomies: { some: { termId: { in: ids } } } };
      }
    } else if (tag) {
      termFilter = {
        taxonomies: { some: { term: { taxonomy: 'product_tag', slug: tag } } },
      };
    }

    const rows = await this.prisma.course.findMany({
      where: {
        status: { in: ['published', 'coming_soon'] },
        ...termFilter,
      },
      include: {
        i18n: true,
        taxonomies: { include: { term: { include: { i18n: true } } } },
      },
      orderBy: [{ featured: 'desc' }, { sortOrder: 'asc' }],
      take: 100,
    });
    return rows.map((row) => ({
      ...row,
      title:
        row.i18n.find((x) => x.locale === locale)?.title ??
        row.i18n[0]?.title ??
        row.slug,
      summary:
        row.i18n.find((x) => x.locale === locale)?.summary ??
        row.i18n[0]?.summary ??
        '',
    }));
  }

  /** Layered category: term + all descendants */
  private async collectDescendantIds(rootId: string): Promise<string[]> {
    const all = await this.prisma.term.findMany({
      select: { id: true, parentId: true },
    });
    const kids = new Map<string | null, string[]>();
    for (const t of all) {
      const k = t.parentId ?? null;
      const list = kids.get(k) ?? [];
      list.push(t.id);
      kids.set(k, list);
    }
    const out: string[] = [];
    const walk = (id: string) => {
      out.push(id);
      for (const c of kids.get(id) ?? []) walk(c);
    };
    walk(rootId);
    return out;
  }

  @Get('terms')
  async terms(
    @Query('taxonomy') taxonomy = 'post_category',
    @Query('slug') slug?: string,
    @Query('locale') locale = 'fa',
  ) {
    if (slug) {
      const term = await this.prisma.term.findFirst({
        where: { taxonomy, slug },
        include: {
          i18n: true,
          seo: true,
          parent: { include: { i18n: true } },
          children: {
            include: { i18n: true, _count: { select: { articles: true, courses: true } } },
            orderBy: { sortOrder: 'asc' },
          },
          _count: { select: { articles: true, courses: true } },
        },
      });
      if (!term) throw new BadRequestException('Term not found');
      const name =
        term.i18n.find((x) => x.locale === locale)?.name ??
        term.i18n[0]?.name ??
        term.slug;
      const description =
        term.i18n.find((x) => x.locale === locale)?.description ??
        term.i18n[0]?.description ??
        '';
      let path = taxonomy === 'post_tag' ? `/articles/tag/${term.slug}` : `/${term.slug}`;
      if (taxonomy === 'post_category') {
        const catIndex = await this.loadPostCategoryIndex();
        path = termPermalinkPath(term.id, catIndex) || `/${term.slug}`;
      }
      const itemCount = (term._count?.articles ?? 0) + (term._count?.courses ?? 0);
      const seoScore = this.rankmath.analyzeTerm({
        name,
        metaTitle: term.seo?.metaTitle,
        metaDescription: term.seo?.metaDescription,
        slug: term.slug,
        description,
        focusKeyword: term.focusKeyword,
        canonicalPath: term.seo?.canonicalPath || path,
        ogImageUrl: term.seo?.ogImageUrl || term.imageUrl || undefined,
        itemCount,
        taxonomy,
        locale,
      });
      const crumbs = [
        { name: 'Home', path: `/${locale}` },
        { name: 'Articles', path: `/${locale}/articles` },
        {
          name: term.seo?.breadcrumbTitle || name,
          path: `/${locale}${path}`,
        },
      ];
      return {
        ...term,
        name,
        description,
        path,
        seoScore,
        breadcrumbs: this.rankmath.breadcrumbs(crumbs, locale),
        itemList: this.rankmath.itemListSchema(name, [], locale),
      };
    }
    const rows = await this.prisma.term.findMany({
      where: { taxonomy },
      include: {
        i18n: true,
        seo: true,
        parent: true,
        children: true,
        _count: { select: { articles: true, courses: true } },
      },
      orderBy: [{ sortOrder: 'asc' }, { slug: 'asc' }],
    });
    const catIndex =
      taxonomy === 'post_category'
        ? indexTerms(
            rows.map((t) => ({
              id: t.id,
              slug: t.slug,
              parentId: t.parentId,
              taxonomy: t.taxonomy,
              isDefault: t.isDefault,
              sortOrder: t.sortOrder,
            })),
          )
        : null;
    return rows.map((t) => ({
      ...t,
      name:
        t.i18n.find((x) => x.locale === locale)?.name ??
        t.i18n[0]?.name ??
        t.slug,
      description:
        t.i18n.find((x) => x.locale === locale)?.description ??
        t.i18n[0]?.description ??
        '',
      count: (t._count?.articles ?? 0) + (t._count?.courses ?? 0),
      path:
        taxonomy === 'post_tag'
          ? `/articles/tag/${t.slug}`
          : catIndex != null
            ? termPermalinkPath(t.id, catIndex) || `/${t.slug}`
            : `/${t.slug}`,
    }));
  }

  /** Resolve hierarchical path: parent/category/post-slug or parent/category */
  @Get('resolve')
  async resolvePath(
    @Query('path') path = '',
    @Query('locale') locale = 'fa',
  ) {
    const normalized = normalizePath(path);
    if (!normalized) throw new BadRequestException('path required');
    const segments = normalized.split('/');
    const catIndex = await this.loadPostCategoryIndex();
    const allCats = [...catIndex.values()];

    // Try article: last segment = post slug, preceding = category chain
    if (segments.length >= 2) {
      const postSlug = segments[segments.length - 1]!;
      const article = await this.prisma.article.findFirst({
        where: { slug: postSlug, status: 'published' },
        include: {
          i18n: true,
          seo: true,
          taxonomies: { include: { term: { include: { i18n: true } } } },
          comments: { where: { status: 'approved' }, orderBy: { createdAt: 'desc' } },
        },
      });
      if (article) {
        const permalink = this.articlePermalinkFromRow(
          article.slug,
          article.taxonomies as Array<{ term: PermalinkTerm }>,
          catIndex,
        );
        const expected = normalizePath(permalink);
        if (expected !== normalized) {
          return { type: 'redirect' as const, permalink, locale };
        }
        return {
          type: 'article' as const,
          permalink,
          article: await this.shapeArticle(article as any, locale, permalink),
        };
      }
    }

    // Category archive: full path is category chain
    const term = matchCategoryPath(segments, allCats);
    if (term) {
      const pathStr = termPermalinkPath(term.id, catIndex) || `/${term.slug}`;
      const full = await this.prisma.term.findFirst({
        where: { id: term.id },
        include: {
          i18n: true,
          seo: true,
          parent: { include: { i18n: true } },
          children: {
            include: { i18n: true, _count: { select: { articles: true, courses: true } } },
            orderBy: { sortOrder: 'asc' },
          },
          _count: { select: { articles: true, courses: true } },
        },
      });
      if (!full) throw new NotFoundException('Not found');
      const name =
        full.i18n.find((x) => x.locale === locale)?.name ??
        full.i18n[0]?.name ??
        full.slug;
      const description =
        full.i18n.find((x) => x.locale === locale)?.description ??
        full.i18n[0]?.description ??
        '';
      const children = (full.children ?? []).map((c) => ({
        ...c,
        name:
          c.i18n.find((x) => x.locale === locale)?.name ??
          c.i18n[0]?.name ??
          c.slug,
        path: termPermalinkPath(c.id, catIndex) || `/${c.slug}`,
        count: (c._count?.articles ?? 0) + (c._count?.courses ?? 0),
      }));
      const seoScore = this.rankmath.analyzeTerm({
        name,
        metaTitle: full.seo?.metaTitle,
        metaDescription: full.seo?.metaDescription,
        slug: full.slug,
        description,
        focusKeyword: full.focusKeyword,
        canonicalPath: full.seo?.canonicalPath || pathStr,
        ogImageUrl: full.seo?.ogImageUrl || full.imageUrl || undefined,
        itemCount: (full._count?.articles ?? 0) + (full._count?.courses ?? 0),
        taxonomy: full.taxonomy,
        locale,
      });
      return {
        type: 'category' as const,
        permalink: pathStr,
        term: {
          ...full,
          name,
          description,
          path: pathStr,
          children,
          seoScore,
        },
      };
    }

    throw new NotFoundException('Not found');
  }

  private async shapeArticle(
    row: {
      slug: string;
      seo: { metaTitle: string | null; metaDescription: string | null; canonicalPath: string | null; ogImageUrl: string | null; schemaJson: string | null; noIndex: boolean } | null;
      coverUrl: string | null;
      focusKeyword: string | null;
      i18n: Array<{ locale: string; title: string; summary: string | null; bodyMdx: string | null }>;
      taxonomies: Array<{ term: { taxonomy: string; slug: string; i18n: Array<{ locale: string; name: string }> } }>;
      [key: string]: unknown;
    },
    locale: string,
    permalink: string,
  ) {
    const i18n = row.i18n.find((x) => x.locale === locale) ?? row.i18n[0];
    const analysis = this.rankmath.analyze({
      title: i18n?.title,
      metaTitle: row.seo?.metaTitle ?? undefined,
      metaDescription: row.seo?.metaDescription ?? undefined,
      slug: row.slug,
      body: i18n?.bodyMdx ?? undefined,
      focusKeyword: row.focusKeyword ?? undefined,
      canonicalPath: row.seo?.canonicalPath ?? permalink,
      ogImageUrl: row.seo?.ogImageUrl ?? row.coverUrl ?? undefined,
      imageUrl: row.coverUrl ?? undefined,
      publishedAt: (row as any).publishedAt ?? undefined,
      modifiedAt: (row as any).updatedAt ?? undefined,
      locale,
      siteName: 'MEGA JS',
    });
    const catCrumbs = normalizePath(permalink).split('/').slice(0, -1);
    const crumbs: Array<{ name: string; path: string }> = [
      { name: 'Home', path: `/${locale}` },
      { name: 'Articles', path: `/${locale}/articles` },
    ];
    let acc = '';
    for (const seg of catCrumbs) {
      acc += `/${seg}`;
      crumbs.push({ name: seg, path: `/${locale}${acc}` });
    }
    const crumbTitle =
      (row.seo as any)?.breadcrumbTitle || i18n?.title || row.slug;
    crumbs.push({
      name: crumbTitle,
      path: `/${locale}${permalink.startsWith('/') ? permalink : `/${permalink}`}`,
    });
    return {
      ...row,
      permalink,
      i18nSelected: i18n,
      seoScore: analysis,
      breadcrumbs: this.rankmath.breadcrumbs(crumbs, locale),
    };
  }

  @Get('articles/:slug')
  async article(
    @Param('slug') slug: string,
    @Query('locale') locale = 'fa',
  ) {
    const [row, catIndex] = await Promise.all([
      this.prisma.article.findFirst({
        where: { slug, status: 'published' },
        include: {
          i18n: true,
          seo: true,
          taxonomies: { include: { term: { include: { i18n: true } } } },
          comments: { where: { status: 'approved' }, orderBy: { createdAt: 'desc' } },
        },
      }),
      this.loadPostCategoryIndex(),
    ]);
    if (!row) throw new BadRequestException('Not found');
    const permalink = this.articlePermalinkFromRow(
      row.slug,
      row.taxonomies as Array<{ term: PermalinkTerm }>,
      catIndex,
    );
    return this.shapeArticle(row as any, locale, permalink);
  }

  @Get('pages/:slug')
  async page(@Param('slug') slug: string, @Query('locale') locale = 'fa') {
    const row = await this.prisma.page.findFirst({
      where: { slug, status: 'published' },
      include: { i18n: true, seo: true },
    });
    if (!row) throw new BadRequestException('Not found');
    const i18n = row.i18n.find((x) => x.locale === locale) ?? row.i18n[0];
    let builder: unknown = { version: 1, sections: [] };
    try {
      builder = JSON.parse(row.builderJson);
    } catch {
      /* ignore */
    }
    return { ...row, i18nSelected: i18n, builder };
  }

  @Get('redirects')
  async redirects() {
    return this.prisma.redirect.findMany();
  }

  @Get('perf')
  async perf() {
    const [rocket, smush] = await Promise.all([
      this.rocket.status(),
      this.smush.getSettings(),
    ]);
    return { rocket, smush };
  }

  @Get('cache-headers')
  async cacheHeaders(@Query('path') path = '/') {
    return this.rocket.cacheHeaders(path);
  }
}
