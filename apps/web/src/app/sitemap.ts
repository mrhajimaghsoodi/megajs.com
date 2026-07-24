import type { MetadataRoute } from 'next';

const API = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:4000/api';
const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const locales = ['fa', 'en'] as const;
  const staticPaths = ['', '/learn', '/articles', '/pricing', '/about', '/contact'];

  const entries: MetadataRoute.Sitemap = [];
  for (const locale of locales) {
    for (const path of staticPaths) {
      entries.push({
        url: `${SITE}/${locale}${path}`,
        changeFrequency: 'weekly',
        priority: path === '' ? 1 : 0.7,
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
              url: `${SITE}/${locale}/articles/${a.slug}`,
              lastModified: a.updatedAt,
              changeFrequency: 'weekly',
              priority: 0.8,
            });
          }
          for (const p of data.pages ?? []) {
            entries.push({
              url: `${SITE}/${locale}/p/${p.slug}`,
              lastModified: p.updatedAt,
              changeFrequency: 'monthly',
              priority: 0.6,
            });
          }
          for (const c of data.courses ?? []) {
            entries.push({
              url: `${SITE}/${locale}/learn/course/${c.slug}`,
              lastModified: c.updatedAt,
              changeFrequency: 'weekly',
              priority: 0.8,
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
