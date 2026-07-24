import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

const API = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:4000/api';

const STATIC_PATHS: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[0]['changeFrequency'] }> = [
  { path: '', priority: 1, changeFrequency: 'daily' },
  { path: '/learn', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/learn/categories', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/articles', priority: 0.9, changeFrequency: 'daily' },
  { path: '/articles/categories', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/pricing', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/curriculum', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/practice', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/live', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/podcasts', priority: 0.6, changeFrequency: 'weekly' },
  { path: '/apps', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/tokens', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const locales = ['fa', 'en'] as const;
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const item of STATIC_PATHS) {
      entries.push({
        url: `${SITE_URL}/${locale}${item.path}`,
        changeFrequency: item.changeFrequency,
        priority: item.priority,
      });
    }
  }

  try {
    const res = await fetch(`${API}/public/sitemap`, { next: { revalidate: 300 } });
    if (res.ok) {
      const data = await res.json();
      if (data.rankSettings?.sitemap !== false) {
        for (const locale of locales) {
          for (const a of data.articles ?? []) {
            entries.push({
              url: `${SITE_URL}/${locale}${a.permalink || `/articles/${a.slug}`}`,
              lastModified: a.updatedAt,
              changeFrequency: 'weekly',
              priority: 0.8,
            });
          }
          for (const p of data.pages ?? []) {
            entries.push({
              url: `${SITE_URL}/${locale}/p/${p.slug}`,
              lastModified: p.updatedAt,
              changeFrequency: 'monthly',
              priority: 0.6,
            });
          }
          for (const c of data.courses ?? []) {
            entries.push({
              url: `${SITE_URL}/${locale}/learn/course/${c.slug}`,
              lastModified: c.updatedAt,
              changeFrequency: 'weekly',
              priority: 0.8,
            });
          }
          for (const t of data.postCategories ?? []) {
            entries.push({
              url: `${SITE_URL}/${locale}${t.path || `/articles/category/${t.slug}`}`,
              lastModified: t.updatedAt,
              changeFrequency: 'weekly',
              priority: 0.65,
            });
          }
          for (const t of data.postTags ?? []) {
            entries.push({
              url: `${SITE_URL}/${locale}${t.path || `/articles/tag/${t.slug}`}`,
              lastModified: t.updatedAt,
              changeFrequency: 'weekly',
              priority: 0.55,
            });
          }
          for (const t of data.productCategories ?? []) {
            entries.push({
              url: `${SITE_URL}/${locale}/learn/category/${t.slug}`,
              lastModified: t.updatedAt,
              changeFrequency: 'weekly',
              priority: 0.65,
            });
          }
          for (const live of data.lives ?? []) {
            entries.push({
              url: `${SITE_URL}/${locale}/live/${live.slug}`,
              lastModified: live.updatedAt,
              changeFrequency: 'weekly',
              priority: 0.6,
            });
          }
        }
      }
    }
  } catch {
    /* sitemap still returns static entries */
  }

  return entries;
}
