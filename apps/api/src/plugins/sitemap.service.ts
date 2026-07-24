import { Injectable } from '@nestjs/common';
import {
  buildArticlePermalink,
  indexTerms,
  termPermalinkPath,
  type PermalinkTerm,
} from '../cms/article-permalink';
import { PrismaService } from '../prisma/prisma.service';

export type SitemapUrl = {
  path: string;
  lastmod?: string | Date | null;
  changefreq?: string;
  priority?: number;
  image?: string | null;
};

export type SitemapType =
  | 'post'
  | 'page'
  | 'category'
  | 'post_tag'
  | 'product'
  | 'product_cat'
  | 'live'
  | 'podcast'
  | 'misc';

export const SITEMAP_TYPES: SitemapType[] = [
  'misc',
  'post',
  'page',
  'category',
  'post_tag',
  'product',
  'product_cat',
  'live',
  'podcast',
];

const RANK_SITEMAP_DEFAULTS = {
  enabled: true,
  sitemap: true,
  breadcrumbs: true,
  og: true,
  schema: true,
  robotsNoIndexSearch: true,
  sitemapPosts: true,
  sitemapPages: true,
  sitemapCategories: true,
  sitemapTags: true,
  sitemapProducts: true,
  sitemapProductCategories: true,
  sitemapLives: true,
  sitemapPodcasts: true,
  sitemapMisc: true,
  sitemapIncludeImages: true,
  sitemapHreflang: true,
};

@Injectable()
export class SitemapService {
  constructor(private readonly prisma: PrismaService) {}

  async getRankSettings() {
    const row = await this.prisma.siteSetting.findUnique({ where: { key: 'rankmath' } });
    if (!row) return { ...RANK_SITEMAP_DEFAULTS };
    try {
      return { ...RANK_SITEMAP_DEFAULTS, ...JSON.parse(row.valueJson) };
    } catch {
      return { ...RANK_SITEMAP_DEFAULTS };
    }
  }

  private async noIndexIds(field: 'articleId' | 'pageId' | 'courseId' | 'termId' | 'liveId' | 'podcastId') {
    const rows = await this.prisma.seoMeta.findMany({
      where: { noIndex: true, [field]: { not: null } },
      select: { [field]: true } as any,
    });
    return new Set(
      rows.map((r: any) => r[field]).filter((id: string | null | undefined): id is string => Boolean(id)),
    );
  }

  async buildIndex() {
    const settings = await this.getRankSettings();
    if (!settings.sitemap) return { enabled: false, sitemaps: [] as Array<{ type: SitemapType; lastmod: string | null }> };

    const types = await this.enabledTypes(settings);
    const lastmods = await Promise.all(
      types.map(async (type) => {
        const urls = await this.buildType(type, settings);
        const latest = urls
          .map((u) => (u.lastmod ? new Date(u.lastmod).getTime() : 0))
          .reduce((a, b) => Math.max(a, b), 0);
        return {
          type,
          lastmod: latest ? new Date(latest).toISOString() : null,
          count: urls.length,
        };
      }),
    );
    return {
      enabled: true,
      settings,
      sitemaps: lastmods.filter((s) => s.count > 0 || s.type === 'misc'),
    };
  }

  async buildType(type: SitemapType, settingsInput?: Awaited<ReturnType<SitemapService['getRankSettings']>>) {
    const settings = settingsInput ?? (await this.getRankSettings());
    if (!settings.sitemap) return [] as SitemapUrl[];
    const enabled = await this.enabledTypes(settings);
    if (!enabled.includes(type)) return [];

    switch (type) {
      case 'misc':
        return this.miscUrls();
      case 'post':
        return this.postUrls(settings.sitemapIncludeImages);
      case 'page':
        return this.pageUrls();
      case 'category':
        return this.categoryUrls();
      case 'post_tag':
        return this.tagUrls();
      case 'product':
        return this.productUrls(settings.sitemapIncludeImages);
      case 'product_cat':
        return this.productCatUrls();
      case 'live':
        return this.liveUrls();
      case 'podcast':
        return this.podcastUrls();
      default:
        return [];
    }
  }

  /** Full payload for legacy flat consumers + admin preview */
  async buildAll() {
    const settings = await this.getRankSettings();
    const index = await this.buildIndex();
    const byType: Record<string, SitemapUrl[]> = {};
    for (const type of SITEMAP_TYPES) {
      byType[type] = await this.buildType(type, settings);
    }
    return { settings, index, byType };
  }

  private async enabledTypes(settings: Awaited<ReturnType<SitemapService['getRankSettings']>>): Promise<SitemapType[]> {
    const map: Array<[SitemapType, boolean]> = [
      ['misc', settings.sitemapMisc !== false],
      ['post', settings.sitemapPosts !== false],
      ['page', settings.sitemapPages !== false],
      ['category', settings.sitemapCategories !== false],
      ['post_tag', settings.sitemapTags !== false],
      ['product', settings.sitemapProducts !== false],
      ['product_cat', settings.sitemapProductCategories !== false],
      ['live', settings.sitemapLives !== false],
      ['podcast', settings.sitemapPodcasts !== false],
    ];
    return map.filter(([, on]) => on).map(([t]) => t);
  }

  private miscUrls(): SitemapUrl[] {
    const paths = [
      { path: '', priority: 1, changefreq: 'daily' },
      { path: '/learn', priority: 0.9, changefreq: 'weekly' },
      { path: '/learn/categories', priority: 0.7, changefreq: 'weekly' },
      { path: '/articles', priority: 0.9, changefreq: 'daily' },
      { path: '/articles/categories', priority: 0.7, changefreq: 'weekly' },
      { path: '/pricing', priority: 0.8, changefreq: 'monthly' },
      { path: '/about', priority: 0.6, changefreq: 'monthly' },
      { path: '/contact', priority: 0.5, changefreq: 'monthly' },
      { path: '/curriculum', priority: 0.7, changefreq: 'monthly' },
      { path: '/practice', priority: 0.7, changefreq: 'weekly' },
      { path: '/live', priority: 0.7, changefreq: 'weekly' },
      { path: '/podcasts', priority: 0.6, changefreq: 'weekly' },
      { path: '/apps', priority: 0.5, changefreq: 'monthly' },
      { path: '/tokens', priority: 0.5, changefreq: 'monthly' },
      { path: '/privacy', priority: 0.3, changefreq: 'yearly' },
      { path: '/terms', priority: 0.3, changefreq: 'yearly' },
    ];
    return paths.map((p) => ({
      path: p.path,
      priority: p.priority,
      changefreq: p.changefreq,
      lastmod: new Date().toISOString(),
    }));
  }

  private async postUrls(includeImages: boolean) {
    const blocked = await this.noIndexIds('articleId');
    const terms = await this.prisma.term.findMany({
      where: { taxonomy: 'post_category' },
      select: { id: true, slug: true, parentId: true, taxonomy: true, isDefault: true, sortOrder: true },
    });
    const catIndex = indexTerms(terms as PermalinkTerm[]);
    const rows = await this.prisma.article.findMany({
      where: { status: 'published' },
      select: {
        id: true,
        slug: true,
        updatedAt: true,
        publishedAt: true,
        coverUrl: true,
        taxonomies: { include: { term: true } },
      },
    });
    return rows
      .filter((a) => !blocked.has(a.id))
      .map((a) => ({
        path: buildArticlePermalink(
          a.slug,
          a.taxonomies.map((t) => t.term).filter(Boolean) as PermalinkTerm[],
          catIndex,
        ),
        lastmod: a.updatedAt ?? a.publishedAt,
        changefreq: 'weekly',
        priority: 0.8,
        image: includeImages ? a.coverUrl : null,
      }));
  }

  private async pageUrls() {
    const blocked = await this.noIndexIds('pageId');
    const rows = await this.prisma.page.findMany({
      where: { status: 'published' },
      select: { id: true, slug: true, updatedAt: true, publishedAt: true },
    });
    return rows
      .filter((p) => !blocked.has(p.id))
      .map((p) => ({
        path: `/p/${p.slug}`,
        lastmod: p.updatedAt ?? p.publishedAt,
        changefreq: 'monthly',
        priority: 0.6,
      }));
  }

  private async categoryUrls() {
    const blocked = await this.noIndexIds('termId');
    const terms = await this.prisma.term.findMany({
      where: { taxonomy: 'post_category' },
      select: {
        id: true,
        slug: true,
        parentId: true,
        taxonomy: true,
        isDefault: true,
        sortOrder: true,
        createdAt: true,
      },
    });
    const catIndex = indexTerms(terms as PermalinkTerm[]);
    return terms
      .filter((t) => !blocked.has(t.id))
      .map((t) => ({
        path: termPermalinkPath(t.id, catIndex) || `/articles/category/${t.slug}`,
        lastmod: t.createdAt,
        changefreq: 'weekly',
        priority: 0.65,
      }));
  }

  private async tagUrls() {
    const blocked = await this.noIndexIds('termId');
    const terms = await this.prisma.term.findMany({
      where: { taxonomy: 'post_tag' },
      select: { id: true, slug: true, createdAt: true },
    });
    return terms
      .filter((t) => !blocked.has(t.id))
      .map((t) => ({
        path: `/articles/tag/${t.slug}`,
        lastmod: t.createdAt,
        changefreq: 'weekly',
        priority: 0.55,
      }));
  }

  private async productUrls(includeImages: boolean) {
    const blocked = await this.noIndexIds('courseId');
    const rows = await this.prisma.course.findMany({
      where: { status: 'published' },
      select: { id: true, slug: true, updatedAt: true, coverUrl: true },
    });
    return rows
      .filter((c) => !blocked.has(c.id))
      .map((c) => ({
        path: `/learn/course/${c.slug}`,
        lastmod: c.updatedAt,
        changefreq: 'weekly',
        priority: 0.8,
        image: includeImages ? c.coverUrl : null,
      }));
  }

  private async productCatUrls() {
    const blocked = await this.noIndexIds('termId');
    const terms = await this.prisma.term.findMany({
      where: { taxonomy: 'product_category' },
      select: { id: true, slug: true, createdAt: true },
    });
    return terms
      .filter((t) => !blocked.has(t.id))
      .map((t) => ({
        path: `/learn/category/${t.slug}`,
        lastmod: t.createdAt,
        changefreq: 'weekly',
        priority: 0.65,
      }));
  }

  private async liveUrls() {
    const blocked = await this.noIndexIds('liveId');
    const rows = await this.prisma.liveEvent.findMany({
      where: { status: { in: ['scheduled', 'live', 'ended'] } },
      select: { id: true, slug: true, updatedAt: true },
    });
    return rows
      .filter((l) => !blocked.has(l.id))
      .map((l) => ({
        path: `/live/${l.slug}`,
        lastmod: l.updatedAt,
        changefreq: 'weekly',
        priority: 0.6,
      }));
  }

  private async podcastUrls() {
    const count = await this.prisma.podcastEpisode.count({
      where: { status: 'published' },
    });
    if (!count) return [];
    const latest = await this.prisma.podcastEpisode.findFirst({
      where: { status: 'published' },
      orderBy: { publishedAt: 'desc' },
      select: { publishedAt: true, createdAt: true },
    });
    return [
      {
        path: '/podcasts',
        lastmod: latest?.publishedAt ?? latest?.createdAt ?? new Date(),
        changefreq: 'weekly',
        priority: 0.55,
      },
    ];
  }
}
