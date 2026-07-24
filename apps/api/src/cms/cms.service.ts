import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  ALLOWED_IMAGE_MIME,
  MAX_UPLOAD_BYTES,
  deleteStoredFile,
  writeUploadedFile,
} from './upload.util';

const CONTENT_STATUSES = ['draft', 'published', 'archived'] as const;
const COMMENT_STATUSES = ['pending', 'approved', 'spam', 'trash'] as const;
const TAXONOMIES = [
  'post_category',
  'product_category',
  'post_tag',
  'product_tag',
] as const;

@Injectable()
export class CmsService {
  constructor(private readonly prisma: PrismaService) {}

  private async audit(
    actorId: string | null,
    action: string,
    entity: string,
    entityId: string | null,
    meta: Record<string, unknown> = {},
  ) {
    await this.prisma.auditLog.create({
      data: {
        actorId,
        action,
        entity,
        entityId,
        metaJson: JSON.stringify(meta),
      },
    });
  }

  private slugify(input: string) {
    return input
      .trim()
      .toLowerCase()
      .replace(/[^\w\u0600-\u06FF]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 80);
  }

  // ——— Articles (Posts) ———

  listArticles(q?: string, status?: string) {
    return this.prisma.article.findMany({
      where: {
        ...(status ? { status } : {}),
        ...(q
          ? {
              OR: [
                { slug: { contains: q } },
                { i18n: { some: { title: { contains: q } } } },
              ],
            }
          : {}),
      },
      include: {
        i18n: true,
        taxonomies: { include: { term: { include: { i18n: true } } } },
        _count: { select: { comments: true } },
      },
      orderBy: { updatedAt: 'desc' },
      take: 200,
    });
  }

  async getArticle(id: string) {
    const article = await this.prisma.article.findUnique({
      where: { id },
      include: {
        i18n: true,
        seo: true,
        taxonomies: { include: { term: { include: { i18n: true } } } },
        comments: { orderBy: { createdAt: 'desc' }, take: 50 },
      },
    });
    if (!article) throw new NotFoundException('Article not found');
    return article;
  }

  async createArticle(
    actorId: string,
    body: {
      slug?: string;
      status?: string;
      coverUrl?: string;
      bannerUrl?: string;
      commentStatus?: string;
      focusKeyword?: string;
      locale?: string;
      title?: string;
      summary?: string;
      bodyMdx?: string;
      termIds?: string[];
    },
  ) {
    const locale = body.locale ?? 'fa';
    const title = body.title?.trim() || 'Untitled';
    const slug = body.slug?.trim() || this.slugify(title) || `post-${Date.now()}`;
    const status = CONTENT_STATUSES.includes(body.status as any)
      ? body.status!
      : 'draft';

    const article = await this.prisma.article.create({
      data: {
        slug,
        status,
        coverUrl: body.coverUrl,
        bannerUrl: body.bannerUrl,
        commentStatus: body.commentStatus ?? 'open',
        focusKeyword: body.focusKeyword ?? '',
        authorId: actorId,
        publishedAt: status === 'published' ? new Date() : null,
        i18n: {
          create: {
            locale,
            title,
            summary: body.summary ?? '',
            bodyMdx: body.bodyMdx ?? '',
          },
        },
        ...(body.termIds?.length
          ? {
              taxonomies: {
                create: body.termIds.map((termId) => ({ termId })),
              },
            }
          : {}),
      },
      include: { i18n: true, taxonomies: true },
    });
    await this.audit(actorId, 'article.create', 'Article', article.id, { slug });
    return article;
  }

  async updateArticle(
    id: string,
    actorId: string,
    body: {
      slug?: string;
      status?: string;
      coverUrl?: string | null;
      bannerUrl?: string | null;
      commentStatus?: string;
      focusKeyword?: string;
      locale?: string;
      title?: string;
      summary?: string;
      bodyMdx?: string;
      termIds?: string[];
      seo?: {
        metaTitle?: string;
        metaDescription?: string;
        canonicalPath?: string;
        ogImageUrl?: string;
        noIndex?: boolean;
      };
    },
  ) {
    const existing = await this.prisma.article.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException('Article not found');

    const status = body.status
      ? CONTENT_STATUSES.includes(body.status as any)
        ? body.status
        : existing.status
      : existing.status;

    const locale = body.locale ?? 'fa';

    await this.prisma.$transaction(async (tx) => {
      await tx.article.update({
        where: { id },
        data: {
          ...(body.slug ? { slug: body.slug.trim() } : {}),
          status,
          coverUrl: body.coverUrl === undefined ? undefined : body.coverUrl,
          bannerUrl: body.bannerUrl === undefined ? undefined : body.bannerUrl,
          commentStatus: body.commentStatus,
          focusKeyword:
            body.focusKeyword === undefined ? undefined : body.focusKeyword,
          publishedAt:
            status === 'published'
              ? existing.publishedAt ?? new Date()
              : status === 'draft'
                ? null
                : existing.publishedAt,
        },
      });

      if (
        body.title !== undefined ||
        body.summary !== undefined ||
        body.bodyMdx !== undefined
      ) {
        const cur = await tx.articleI18n.findUnique({
          where: { articleId_locale: { articleId: id, locale } },
        });
        if (cur) {
          await tx.articleI18n.update({
            where: { id: cur.id },
            data: {
              title: body.title ?? cur.title,
              summary: body.summary ?? cur.summary,
              bodyMdx: body.bodyMdx ?? cur.bodyMdx,
            },
          });
        } else {
          await tx.articleI18n.create({
            data: {
              articleId: id,
              locale,
              title: body.title ?? 'Untitled',
              summary: body.summary ?? '',
              bodyMdx: body.bodyMdx ?? '',
            },
          });
        }
      }

      if (body.termIds) {
        await tx.articleTerm.deleteMany({ where: { articleId: id } });
        if (body.termIds.length) {
          await tx.articleTerm.createMany({
            data: body.termIds.map((termId) => ({ articleId: id, termId })),
          });
        }
      }

      if (body.seo) {
        const seoData = {
          locale,
          entityType: 'article',
          entityId: id,
          metaTitle: body.seo.metaTitle ?? body.title ?? existing.slug,
          metaDescription: body.seo.metaDescription ?? '',
          canonicalPath: body.seo.canonicalPath,
          ogImageUrl: body.seo.ogImageUrl,
          noIndex: body.seo.noIndex ?? false,
          articleId: id,
        };
        const existingSeo = await tx.seoMeta.findUnique({ where: { articleId: id } });
        if (existingSeo) {
          await tx.seoMeta.update({ where: { id: existingSeo.id }, data: seoData });
        } else {
          await tx.seoMeta.create({ data: seoData });
        }
      }
    });

    await this.audit(actorId, 'article.update', 'Article', id, body);
    return this.getArticle(id);
  }

  async deleteArticle(id: string, actorId: string) {
    await this.prisma.article.delete({ where: { id } });
    await this.audit(actorId, 'article.delete', 'Article', id);
    return { ok: true };
  }

  // ——— Pages ———

  listPages(q?: string, status?: string) {
    return this.prisma.page.findMany({
      where: {
        ...(status ? { status } : {}),
        ...(q
          ? {
              OR: [
                { slug: { contains: q } },
                { i18n: { some: { title: { contains: q } } } },
              ],
            }
          : {}),
      },
      include: { i18n: true, parent: { include: { i18n: true } } },
      orderBy: [{ sortOrder: 'asc' }, { updatedAt: 'desc' }],
      take: 200,
    });
  }

  async getPage(id: string) {
    const page = await this.prisma.page.findUnique({
      where: { id },
      include: { i18n: true, seo: true, children: true },
    });
    if (!page) throw new NotFoundException('Page not found');
    return page;
  }

  async createPage(
    actorId: string,
    body: {
      slug?: string;
      status?: string;
      template?: string;
      coverUrl?: string;
      bannerUrl?: string;
      parentId?: string | null;
      sortOrder?: number;
      locale?: string;
      title?: string;
      summary?: string;
      bodyMdx?: string;
    },
  ) {
    const locale = body.locale ?? 'fa';
    const title = body.title?.trim() || 'Untitled page';
    const slug = body.slug?.trim() || this.slugify(title) || `page-${Date.now()}`;
    const status = CONTENT_STATUSES.includes(body.status as any)
      ? body.status!
      : 'draft';

    const page = await this.prisma.page.create({
      data: {
        slug,
        status,
        template: body.template ?? 'default',
        coverUrl: body.coverUrl,
        bannerUrl: body.bannerUrl,
        parentId: body.parentId ?? null,
        sortOrder: body.sortOrder ?? 0,
        publishedAt: status === 'published' ? new Date() : null,
        i18n: {
          create: {
            locale,
            title,
            summary: body.summary ?? '',
            bodyMdx: body.bodyMdx ?? '',
          },
        },
      },
      include: { i18n: true },
    });
    await this.audit(actorId, 'page.create', 'Page', page.id, { slug });
    return page;
  }

  async updatePage(
    id: string,
    actorId: string,
    body: {
      slug?: string;
      status?: string;
      template?: string;
      coverUrl?: string | null;
      bannerUrl?: string | null;
      builderJson?: string | Record<string, unknown>;
      parentId?: string | null;
      sortOrder?: number;
      locale?: string;
      title?: string;
      summary?: string;
      bodyMdx?: string;
      seo?: {
        metaTitle?: string;
        metaDescription?: string;
        canonicalPath?: string;
        ogImageUrl?: string;
        noIndex?: boolean;
      };
    },
  ) {
    const existing = await this.prisma.page.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException('Page not found');
    const locale = body.locale ?? 'fa';
    const status = body.status ?? existing.status;
    const builderJson =
      body.builderJson === undefined
        ? undefined
        : typeof body.builderJson === 'string'
          ? body.builderJson
          : JSON.stringify(body.builderJson);

    await this.prisma.$transaction(async (tx) => {
      await tx.page.update({
        where: { id },
        data: {
          slug: body.slug?.trim(),
          status,
          template: body.template,
          coverUrl: body.coverUrl === undefined ? undefined : body.coverUrl,
          bannerUrl: body.bannerUrl === undefined ? undefined : body.bannerUrl,
          builderJson,
          parentId: body.parentId === undefined ? undefined : body.parentId,
          sortOrder: body.sortOrder,
          publishedAt:
            status === 'published'
              ? existing.publishedAt ?? new Date()
              : status === 'draft'
                ? null
                : existing.publishedAt,
        },
      });

      if (
        body.title !== undefined ||
        body.summary !== undefined ||
        body.bodyMdx !== undefined
      ) {
        const cur = await tx.pageI18n.findUnique({
          where: { pageId_locale: { pageId: id, locale } },
        });
        if (cur) {
          await tx.pageI18n.update({
            where: { id: cur.id },
            data: {
              title: body.title ?? cur.title,
              summary: body.summary ?? cur.summary,
              bodyMdx: body.bodyMdx ?? cur.bodyMdx,
            },
          });
        } else {
          await tx.pageI18n.create({
            data: {
              pageId: id,
              locale,
              title: body.title ?? 'Untitled',
              summary: body.summary ?? '',
              bodyMdx: body.bodyMdx ?? '',
            },
          });
        }
      }

      if (body.seo) {
        const seoData = {
          locale,
          entityType: 'page',
          entityId: id,
          metaTitle: body.seo.metaTitle ?? body.title ?? existing.slug,
          metaDescription: body.seo.metaDescription ?? '',
          canonicalPath: body.seo.canonicalPath,
          ogImageUrl: body.seo.ogImageUrl,
          noIndex: body.seo.noIndex ?? false,
          pageId: id,
        };
        const existingSeo = await tx.seoMeta.findUnique({ where: { pageId: id } });
        if (existingSeo) {
          await tx.seoMeta.update({ where: { id: existingSeo.id }, data: seoData });
        } else {
          await tx.seoMeta.create({ data: seoData });
        }
      }
    });

    await this.audit(actorId, 'page.update', 'Page', id, body);
    return this.getPage(id);
  }

  async deletePage(id: string, actorId: string) {
    await this.prisma.page.delete({ where: { id } });
    await this.audit(actorId, 'page.delete', 'Page', id);
    return { ok: true };
  }

  // ——— Terms (categories & tags) ———

  listTerms(taxonomy?: string) {
    return this.prisma.term.findMany({
      where: taxonomy ? { taxonomy } : undefined,
      include: {
        i18n: true,
        parent: { include: { i18n: true } },
        _count: { select: { articles: true, courses: true } },
      },
      orderBy: [{ sortOrder: 'asc' }, { slug: 'asc' }],
    });
  }

  async createTerm(
    actorId: string,
    body: {
      taxonomy?: string;
      slug?: string;
      parentId?: string | null;
      sortOrder?: number;
      locale?: string;
      name?: string;
      description?: string;
    },
  ) {
    const taxonomy = body.taxonomy ?? 'post_category';
    if (!TAXONOMIES.includes(taxonomy as any)) {
      throw new BadRequestException(`Invalid taxonomy: ${taxonomy}`);
    }
    const locale = body.locale ?? 'fa';
    const name = body.name?.trim() || 'Untitled';
    const slug = body.slug?.trim() || this.slugify(name) || `term-${Date.now()}`;

    const term = await this.prisma.term.create({
      data: {
        taxonomy,
        slug,
        parentId: body.parentId ?? null,
        sortOrder: body.sortOrder ?? 0,
        i18n: {
          create: {
            locale,
            name,
            description: body.description ?? '',
          },
        },
      },
      include: { i18n: true },
    });
    await this.audit(actorId, 'term.create', 'Term', term.id, { taxonomy, slug });
    return term;
  }

  async updateTerm(
    id: string,
    actorId: string,
    body: {
      slug?: string;
      parentId?: string | null;
      sortOrder?: number;
      locale?: string;
      name?: string;
      description?: string;
    },
  ) {
    const existing = await this.prisma.term.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException('Term not found');
    const locale = body.locale ?? 'fa';

    await this.prisma.$transaction(async (tx) => {
      await tx.term.update({
        where: { id },
        data: {
          slug: body.slug?.trim(),
          parentId: body.parentId === undefined ? undefined : body.parentId,
          sortOrder: body.sortOrder,
        },
      });
      if (body.name !== undefined || body.description !== undefined) {
        const cur = await tx.termI18n.findUnique({
          where: { termId_locale: { termId: id, locale } },
        });
        if (cur) {
          await tx.termI18n.update({
            where: { id: cur.id },
            data: {
              name: body.name ?? cur.name,
              description: body.description ?? cur.description,
            },
          });
        } else {
          await tx.termI18n.create({
            data: {
              termId: id,
              locale,
              name: body.name ?? 'Untitled',
              description: body.description ?? '',
            },
          });
        }
      }
    });
    await this.audit(actorId, 'term.update', 'Term', id, body);
    return this.prisma.term.findUnique({
      where: { id },
      include: { i18n: true, _count: { select: { articles: true, courses: true } } },
    });
  }

  async deleteTerm(id: string, actorId: string) {
    await this.prisma.term.delete({ where: { id } });
    await this.audit(actorId, 'term.delete', 'Term', id);
    return { ok: true };
  }

  // ——— Media ———

  listMedia(q?: string) {
    return this.prisma.mediaItem.findMany({
      where: q
        ? {
            OR: [
              { filename: { contains: q } },
              { title: { contains: q } },
              { alt: { contains: q } },
              { url: { contains: q } },
            ],
          }
        : undefined,
      orderBy: { createdAt: 'desc' },
      take: 200,
    });
  }

  async createMedia(
    actorId: string,
    body: {
      url?: string;
      filename?: string;
      mimeType?: string;
      sizeBytes?: number;
      width?: number;
      height?: number;
      alt?: string;
      title?: string;
      storageKey?: string;
    },
  ) {
    if (!body.url?.trim()) throw new BadRequestException('url required');
    const item = await this.prisma.mediaItem.create({
      data: {
        url: body.url.trim(),
        storageKey: body.storageKey,
        filename: body.filename?.trim() || body.url.split('/').pop() || 'file',
        mimeType: body.mimeType ?? 'application/octet-stream',
        sizeBytes: body.sizeBytes ?? 0,
        originalBytes: body.sizeBytes ?? 0,
        width: body.width,
        height: body.height,
        alt: body.alt ?? '',
        title: body.title ?? '',
        uploadedById: actorId,
      },
    });
    await this.audit(actorId, 'media.create', 'MediaItem', item.id);
    return item;
  }

  async uploadMediaFile(
    actorId: string,
    file: Express.Multer.File | undefined,
    meta: { alt?: string; title?: string } = {},
  ) {
    if (!file) throw new BadRequestException('file required');
    if (!ALLOWED_IMAGE_MIME.has(file.mimetype)) {
      throw new BadRequestException('Only jpeg, png, webp, gif images allowed');
    }
    if (file.size > MAX_UPLOAD_BYTES) {
      throw new BadRequestException('File too large (max 5MB)');
    }
    const saved = writeUploadedFile({
      originalname: file.originalname,
      mimetype: file.mimetype,
      buffer: file.buffer,
      size: file.size,
    });
    return this.createMedia(actorId, {
      url: saved.url,
      storageKey: saved.storageKey,
      filename: saved.filename,
      mimeType: saved.mimeType,
      sizeBytes: saved.sizeBytes,
      alt: meta.alt,
      title: meta.title || saved.filename,
    });
  }

  async updateMedia(
    id: string,
    actorId: string,
    body: { alt?: string; title?: string; url?: string },
  ) {
    const item = await this.prisma.mediaItem.update({
      where: { id },
      data: body,
    });
    await this.audit(actorId, 'media.update', 'MediaItem', id, body);
    return item;
  }

  async deleteMedia(id: string, actorId: string) {
    const existing = await this.prisma.mediaItem.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException('Media not found');
    deleteStoredFile(existing.storageKey);
    await this.prisma.mediaItem.delete({ where: { id } });
    await this.audit(actorId, 'media.delete', 'MediaItem', id);
    return { ok: true };
  }

  // ——— Comments ———

  listComments(status?: string, articleId?: string) {
    return this.prisma.comment.findMany({
      where: {
        ...(status ? { status } : {}),
        ...(articleId ? { articleId } : {}),
      },
      include: {
        article: { include: { i18n: true } },
      },
      orderBy: { createdAt: 'desc' },
      take: 200,
    });
  }

  async setCommentStatus(id: string, status: string, actorId: string) {
    if (!COMMENT_STATUSES.includes(status as any)) {
      throw new BadRequestException('Invalid comment status');
    }
    const comment = await this.prisma.comment.update({
      where: { id },
      data: { status },
    });
    await this.audit(actorId, 'comment.status', 'Comment', id, { status });
    return comment;
  }

  async deleteComment(id: string, actorId: string) {
    await this.prisma.comment.delete({ where: { id } });
    await this.audit(actorId, 'comment.delete', 'Comment', id);
    return { ok: true };
  }

  // ——— Menus ———

  listMenus() {
    return this.prisma.navMenu.findMany({
      include: {
        items: { orderBy: { sortOrder: 'asc' } },
      },
    });
  }

  async upsertMenu(
    actorId: string,
    body: {
      location?: string;
      name?: string;
      items?: Array<{
        id?: string;
        type?: string;
        refId?: string | null;
        url?: string;
        labelJson?: string;
        parentId?: string | null;
        sortOrder?: number;
      }>;
    },
  ) {
    const location = body.location ?? 'header';
    const name = body.name ?? location;

    const menu = await this.prisma.navMenu.upsert({
      where: { location },
      create: { location, name },
      update: { name },
    });

    if (body.items) {
      await this.prisma.navMenuItem.deleteMany({ where: { menuId: menu.id } });
      for (const [idx, item] of body.items.entries()) {
        await this.prisma.navMenuItem.create({
          data: {
            menuId: menu.id,
            type: item.type ?? 'custom',
            refId: item.refId ?? null,
            url: item.url ?? '',
            labelJson: item.labelJson ?? '{}',
            parentId: null,
            sortOrder: item.sortOrder ?? idx,
          },
        });
      }
    }

    await this.audit(actorId, 'menu.upsert', 'NavMenu', menu.id, { location });
    return this.prisma.navMenu.findUnique({
      where: { id: menu.id },
      include: { items: { orderBy: { sortOrder: 'asc' } } },
    });
  }

  // ——— Redirects ———

  listRedirects() {
    return this.prisma.redirect.findMany({ orderBy: { fromPath: 'asc' } });
  }

  async createRedirect(
    actorId: string,
    body: { fromPath?: string; toPath?: string; code?: number },
  ) {
    if (!body.fromPath || !body.toPath) {
      throw new BadRequestException('fromPath and toPath required');
    }
    const row = await this.prisma.redirect.create({
      data: {
        fromPath: body.fromPath,
        toPath: body.toPath,
        code: body.code ?? 301,
      },
    });
    await this.audit(actorId, 'redirect.create', 'Redirect', row.id);
    return row;
  }

  async deleteRedirect(id: string, actorId: string) {
    await this.prisma.redirect.delete({ where: { id } });
    await this.audit(actorId, 'redirect.delete', 'Redirect', id);
    return { ok: true };
  }

  // ——— SEO upsert ———

  async upsertSeo(
    actorId: string,
    body: {
      entityType?: string;
      entityId?: string;
      locale?: string;
      metaTitle?: string;
      metaDescription?: string;
      canonicalPath?: string;
      ogImageUrl?: string;
      noIndex?: boolean;
      schemaJson?: string;
    },
  ) {
    if (!body.entityType || !body.entityId) {
      throw new BadRequestException('entityType and entityId required');
    }
    const locale = body.locale ?? 'fa';
    const link: Record<string, string> = {};
    if (body.entityType === 'article') link.articleId = body.entityId;
    if (body.entityType === 'page') link.pageId = body.entityId;
    if (body.entityType === 'course') link.courseId = body.entityId;
    if (body.entityType === 'track') link.trackId = body.entityId;
    if (body.entityType === 'lesson') link.lessonId = body.entityId;
    if (body.entityType === 'podcast') link.podcastId = body.entityId;
    if (body.entityType === 'live') link.liveId = body.entityId;

    const existing = await this.prisma.seoMeta.findFirst({
      where: {
        entityType: body.entityType,
        entityId: body.entityId,
        locale,
      },
    });

    const data = {
      locale,
      entityType: body.entityType,
      entityId: body.entityId,
      metaTitle: body.metaTitle ?? '',
      metaDescription: body.metaDescription ?? '',
      canonicalPath: body.canonicalPath,
      ogImageUrl: body.ogImageUrl,
      noIndex: body.noIndex ?? false,
      schemaJson: body.schemaJson ?? '{}',
      ...link,
    };

    const row = existing
      ? await this.prisma.seoMeta.update({ where: { id: existing.id }, data })
      : await this.prisma.seoMeta.create({ data });

    await this.audit(actorId, 'seo.upsert', 'SeoMeta', row.id, body);
    return row;
  }

  // ——— Settings ———

  async getSettings() {
    const rows = await this.prisma.siteSetting.findMany();
    const out: Record<string, unknown> = {};
    for (const row of rows) {
      try {
        out[row.key] = JSON.parse(row.valueJson);
      } catch {
        out[row.key] = row.valueJson;
      }
    }
    return out;
  }

  async setSetting(actorId: string, key: string, value: unknown) {
    if (!key?.trim()) throw new BadRequestException('key required');
    const row = await this.prisma.siteSetting.upsert({
      where: { key },
      create: { key, valueJson: JSON.stringify(value ?? {}) },
      update: { valueJson: JSON.stringify(value ?? {}) },
    });
    await this.audit(actorId, 'settings.set', 'SiteSetting', key, { value });
    return row;
  }

  async setSettings(actorId: string, body: Record<string, unknown>) {
    for (const [key, value] of Object.entries(body)) {
      await this.setSetting(actorId, key, value);
    }
    return this.getSettings();
  }
}
