import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

const CONTENT_STATUSES = ['draft', 'published', 'archived'] as const;
const VIDEO_SOURCES = ['none', 'aparat', 'vod', 'upload'] as const;

@Injectable()
export class TunnelService {
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
      .replace(/\s+/g, '-')
      .replace(/[^\w\u0600-\u06FF-]+/g, '')
      .slice(0, 80);
  }

  listEpisodes(q?: string, status?: string) {
    return this.prisma.tunnelEpisode.findMany({
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
        seriesTerm: { include: { i18n: true } },
        taxonomies: { include: { term: { include: { i18n: true } } } },
        seo: true,
      },
      orderBy: [{ sortOrder: 'asc' }, { updatedAt: 'desc' }],
      take: 200,
    });
  }

  async getEpisode(id: string) {
    const row = await this.prisma.tunnelEpisode.findUnique({
      where: { id },
      include: {
        i18n: true,
        seriesTerm: { include: { i18n: true } },
        taxonomies: { include: { term: { include: { i18n: true } } } },
        seo: true,
      },
    });
    if (!row) throw new NotFoundException('Tunnel episode not found');
    return row;
  }

  async createEpisode(
    actorId: string,
    body: {
      slug?: string;
      status?: string;
      coverUrl?: string;
      bannerUrl?: string;
      sticky?: boolean;
      focusKeyword?: string;
      sortOrder?: number;
      seriesTermId?: string | null;
      videoSource?: string;
      aparatUrl?: string | null;
      vodUrl?: string | null;
      videoUrl?: string | null;
      videoPosterUrl?: string | null;
      locale?: string;
      title?: string;
      summary?: string;
      bodyMdx?: string;
      termIds?: string[];
      seo?: Record<string, unknown>;
    },
  ) {
    const locale = body.locale ?? 'fa';
    const title = body.title?.trim() || 'Untitled';
    const slug = body.slug?.trim() || this.slugify(title) || `tunnel-${Date.now()}`;
    const status = CONTENT_STATUSES.includes(body.status as any)
      ? body.status!
      : 'draft';
    const videoSource = VIDEO_SOURCES.includes(body.videoSource as any)
      ? body.videoSource!
      : 'none';

    let termIds = body.termIds ?? [];
    let seriesTermId = body.seriesTermId ?? null;
    if (!termIds.length) {
      const def = await this.prisma.term.findFirst({
        where: { taxonomy: 'tunnel_category', isDefault: true },
      });
      if (def) {
        termIds = [def.id];
        seriesTermId = seriesTermId ?? def.id;
      }
    }
    if (!seriesTermId && termIds.length) {
      const primary = await this.prisma.term.findFirst({
        where: { id: { in: termIds }, taxonomy: 'tunnel_category' },
      });
      seriesTermId = primary?.id ?? null;
    }

    const episode = await this.prisma.tunnelEpisode.create({
      data: {
        slug,
        status,
        coverUrl: body.coverUrl,
        bannerUrl: body.bannerUrl,
        sticky: body.sticky ?? false,
        focusKeyword: body.focusKeyword ?? '',
        sortOrder: body.sortOrder ?? 0,
        seriesTermId,
        videoSource,
        aparatUrl: body.aparatUrl,
        vodUrl: body.vodUrl,
        videoUrl: body.videoUrl,
        videoPosterUrl: body.videoPosterUrl,
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
        ...(termIds.length
          ? {
              taxonomies: {
                create: termIds.map((termId) => ({ termId })),
              },
            }
          : {}),
      },
    });

    if (body.seo) {
      await this.upsertEpisodeSeo(episode.id, locale, slug, title, body);
    }

    await this.audit(actorId, 'tunnel.create', 'TunnelEpisode', episode.id, { slug });
    return this.getEpisode(episode.id);
  }

  async updateEpisode(
    id: string,
    actorId: string,
    body: {
      slug?: string;
      status?: string;
      coverUrl?: string | null;
      bannerUrl?: string | null;
      sticky?: boolean;
      focusKeyword?: string;
      sortOrder?: number;
      seriesTermId?: string | null;
      videoSource?: string;
      aparatUrl?: string | null;
      vodUrl?: string | null;
      videoUrl?: string | null;
      videoPosterUrl?: string | null;
      locale?: string;
      title?: string;
      summary?: string;
      bodyMdx?: string;
      termIds?: string[];
      seo?: Record<string, unknown>;
    },
  ) {
    const existing = await this.prisma.tunnelEpisode.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException('Tunnel episode not found');
    const locale = body.locale ?? 'fa';

    await this.prisma.$transaction(async (tx) => {
      const nextStatus = body.status ?? existing.status;
      let seriesTermId =
        body.seriesTermId === undefined ? existing.seriesTermId : body.seriesTermId;
      if (body.termIds?.length && !seriesTermId) {
        const primary = await tx.term.findFirst({
          where: { id: { in: body.termIds }, taxonomy: 'tunnel_category' },
        });
        seriesTermId = primary?.id ?? seriesTermId;
      }

      await tx.tunnelEpisode.update({
        where: { id },
        data: {
          slug: body.slug?.trim(),
          status: body.status,
          coverUrl: body.coverUrl === undefined ? undefined : body.coverUrl,
          bannerUrl: body.bannerUrl === undefined ? undefined : body.bannerUrl,
          sticky: body.sticky,
          focusKeyword: body.focusKeyword,
          sortOrder: body.sortOrder,
          seriesTermId,
          videoSource: body.videoSource,
          aparatUrl: body.aparatUrl === undefined ? undefined : body.aparatUrl,
          vodUrl: body.vodUrl === undefined ? undefined : body.vodUrl,
          videoUrl: body.videoUrl === undefined ? undefined : body.videoUrl,
          videoPosterUrl:
            body.videoPosterUrl === undefined ? undefined : body.videoPosterUrl,
          publishedAt:
            nextStatus === 'published' && !existing.publishedAt
              ? new Date()
              : nextStatus !== 'published' && body.status
                ? null
                : undefined,
        },
      });

      if (
        body.title !== undefined ||
        body.summary !== undefined ||
        body.bodyMdx !== undefined
      ) {
        const cur = await tx.tunnelEpisodeI18n.findUnique({
          where: { episodeId_locale: { episodeId: id, locale } },
        });
        if (cur) {
          await tx.tunnelEpisodeI18n.update({
            where: { id: cur.id },
            data: {
              title: body.title ?? cur.title,
              summary: body.summary ?? cur.summary,
              bodyMdx: body.bodyMdx ?? cur.bodyMdx,
            },
          });
        } else {
          await tx.tunnelEpisodeI18n.create({
            data: {
              episodeId: id,
              locale,
              title: body.title ?? 'Untitled',
              summary: body.summary ?? '',
              bodyMdx: body.bodyMdx ?? '',
            },
          });
        }
      }

      if (body.termIds) {
        await tx.tunnelEpisodeTerm.deleteMany({ where: { episodeId: id } });
        if (body.termIds.length) {
          await tx.tunnelEpisodeTerm.createMany({
            data: body.termIds.map((termId) => ({ episodeId: id, termId })),
          });
        }
      }
    });

    if (body.seo) {
      const slug = body.slug?.trim() || existing.slug;
      await this.upsertEpisodeSeo(id, locale, slug, body.title || existing.slug, body);
    }

    await this.audit(actorId, 'tunnel.update', 'TunnelEpisode', id, body as any);
    return this.getEpisode(id);
  }

  private async upsertEpisodeSeo(
    episodeId: string,
    locale: string,
    slug: string,
    title: string,
    body: {
      coverUrl?: string | null;
      bannerUrl?: string | null;
      seo?: Record<string, unknown>;
    },
  ) {
    const seo = body.seo ?? {};
    const seoData = {
      locale,
      entityType: 'tunnel_episode',
      entityId: episodeId,
      tunnelEpisodeId: episodeId,
      metaTitle: String(seo.metaTitle ?? title),
      metaDescription: String(seo.metaDescription ?? ''),
      canonicalPath: String(seo.canonicalPath || `/tunnel/e/${slug}`),
      ogImageUrl:
        (seo.ogImageUrl as string | undefined) ||
        body.coverUrl ||
        body.bannerUrl ||
        undefined,
      noIndex: Boolean(seo.noIndex),
      noFollow: Boolean(seo.noFollow),
      breadcrumbTitle: String(seo.breadcrumbTitle ?? ''),
      schemaJson: String(seo.schemaJson ?? '{}'),
    };
    const existing = await this.prisma.seoMeta.findUnique({
      where: { tunnelEpisodeId: episodeId },
    });
    if (existing) {
      await this.prisma.seoMeta.update({ where: { id: existing.id }, data: seoData });
    } else {
      await this.prisma.seoMeta.create({ data: seoData });
    }
  }

  async deleteEpisode(id: string, actorId: string) {
    await this.prisma.tunnelEpisode.delete({ where: { id } });
    await this.audit(actorId, 'tunnel.delete', 'TunnelEpisode', id);
    return { ok: true };
  }

  /** Public: list published episodes, optional category filter */
  async publicList(locale: string, category?: string) {
    const where: any = { status: 'published' };
    if (category) {
      where.OR = [
        { seriesTerm: { slug: category } },
        {
          taxonomies: {
            some: { term: { taxonomy: 'tunnel_category', slug: category } },
          },
        },
      ];
    }
    const rows = await this.prisma.tunnelEpisode.findMany({
      where,
      include: {
        i18n: true,
        seriesTerm: { include: { i18n: true } },
        taxonomies: { include: { term: { include: { i18n: true } } } },
        seo: true,
      },
      orderBy: [{ sortOrder: 'asc' }, { publishedAt: 'desc' }],
      take: 200,
    });
    return rows.map((row) => this.mapPublicEpisode(row, locale));
  }

  async publicGetBySlug(slug: string, locale: string) {
    const row = await this.prisma.tunnelEpisode.findFirst({
      where: { slug, status: 'published' },
      include: {
        i18n: true,
        seriesTerm: { include: { i18n: true } },
        taxonomies: { include: { term: { include: { i18n: true } } } },
        seo: true,
      },
    });
    if (!row) throw new NotFoundException('Episode not found');

    const seriesId = row.seriesTermId;
    let prev: any = null;
    let next: any = null;
    if (seriesId) {
      const siblings = await this.prisma.tunnelEpisode.findMany({
        where: { status: 'published', seriesTermId: seriesId },
        include: { i18n: true },
        orderBy: [{ sortOrder: 'asc' }, { publishedAt: 'asc' }],
      });
      const idx = siblings.findIndex((s) => s.id === row.id);
      const seriesSlug = row.seriesTerm?.slug;
      if (idx > 0) {
        prev = this.mapPublicEpisodeLite(siblings[idx - 1], locale, seriesSlug);
      }
      if (idx >= 0 && idx < siblings.length - 1) {
        next = this.mapPublicEpisodeLite(siblings[idx + 1], locale, seriesSlug);
      }
    }

    return {
      ...this.mapPublicEpisode(row, locale),
      prev,
      next,
    };
  }

  async publicCategory(slug: string, locale: string) {
    const term = await this.prisma.term.findFirst({
      where: { taxonomy: 'tunnel_category', slug },
      include: {
        i18n: true,
        seo: true,
        children: { include: { i18n: true } },
      },
    });
    if (!term) throw new NotFoundException('Tunnel category not found');

    const episodes = await this.prisma.tunnelEpisode.findMany({
      where: {
        status: 'published',
        OR: [
          { seriesTermId: term.id },
          { taxonomies: { some: { termId: term.id } } },
        ],
      },
      include: {
        i18n: true,
        seriesTerm: { include: { i18n: true } },
        taxonomies: { include: { term: { include: { i18n: true } } } },
      },
      orderBy: [{ sortOrder: 'asc' }, { publishedAt: 'asc' }],
    });

    const i18n =
      term.i18n.find((x) => x.locale === locale) ?? term.i18n[0] ?? null;

    return {
      id: term.id,
      slug: term.slug,
      imageUrl: term.imageUrl,
      coverUrl: term.coverUrl,
      bannerUrl: term.bannerUrl,
      name: i18n?.name ?? term.slug,
      description: i18n?.description ?? '',
      landingMdx: i18n?.landingMdx ?? '',
      seo: term.seo,
      path: `/tunnel/${term.slug}`,
      episodes: episodes.map((e, i) => ({
        ...this.mapPublicEpisode(e, locale),
        partNumber: i + 1,
      })),
    };
  }

  async publicCategories(locale: string) {
    const terms = await this.prisma.term.findMany({
      where: { taxonomy: 'tunnel_category' },
      include: {
        i18n: true,
        _count: { select: { tunnelEpisodes: true, seriesEpisodes: true } },
      },
      orderBy: { sortOrder: 'asc' },
    });
    return terms.map((t) => {
      const i18n = t.i18n.find((x) => x.locale === locale) ?? t.i18n[0];
      return {
        id: t.id,
        slug: t.slug,
        imageUrl: t.imageUrl,
        coverUrl: t.coverUrl,
        bannerUrl: t.bannerUrl,
        name: i18n?.name ?? t.slug,
        description: i18n?.description ?? '',
        count: Math.max(t._count.tunnelEpisodes ?? 0, t._count.seriesEpisodes ?? 0),
        path: `/tunnel/${t.slug}`,
      };
    });
  }

  private mapPublicEpisodeLite(row: any, locale: string, seriesSlug?: string | null) {
    return {
      id: row.id,
      slug: row.slug,
      title:
        row.i18n?.find((x: any) => x.locale === locale)?.title ??
        row.i18n?.[0]?.title ??
        row.slug,
      sortOrder: row.sortOrder,
      path: seriesSlug
        ? `/tunnel/${seriesSlug}/${row.slug}`
        : `/tunnel/e/${row.slug}`,
    };
  }

  private mapPublicEpisode(row: any, locale: string) {
    const i18n =
      row.i18n?.find((x: any) => x.locale === locale) ?? row.i18n?.[0];
    const seriesSlug = row.seriesTerm?.slug;
    return {
      id: row.id,
      slug: row.slug,
      status: row.status,
      publishedAt: row.publishedAt,
      coverUrl: row.coverUrl,
      bannerUrl: row.bannerUrl,
      sticky: row.sticky,
      sortOrder: row.sortOrder,
      seriesTermId: row.seriesTermId,
      seriesSlug,
      seriesName:
        row.seriesTerm?.i18n?.find((x: any) => x.locale === locale)?.name ??
        row.seriesTerm?.i18n?.[0]?.name ??
        seriesSlug,
      videoSource: row.videoSource,
      aparatUrl: row.aparatUrl,
      vodUrl: row.vodUrl,
      videoUrl: row.videoUrl,
      videoPosterUrl: row.videoPosterUrl,
      title: i18n?.title ?? row.slug,
      summary: i18n?.summary ?? '',
      bodyMdx: i18n?.bodyMdx ?? '',
      i18nSelected: i18n,
      taxonomies: row.taxonomies,
      seo: row.seo,
      path: seriesSlug
        ? `/tunnel/${seriesSlug}/${row.slug}`
        : `/tunnel/e/${row.slug}`,
    };
  }
}
