import fs from 'node:fs';
import path from 'node:path';
import { listDocSlugs, listTechIds } from '@/lib/docs/loader';
import { urlsetXml, xmlResponse, type SitemapUrlInput } from '@/lib/sitemap-xml';

export const dynamic = 'force-dynamic';
export const revalidate = 3600;

/** Filesystem docs sitemap — each content/docs/{tech}/{locale} page */
export async function GET() {
  const urls: SitemapUrlInput[] = [{ path: '/docs', priority: 0.9, changefreq: 'weekly' }];
  const now = new Date().toISOString();

  for (const tech of listTechIds()) {
    urls.push({
      path: `/docs/${tech}`,
      priority: 0.8,
      changefreq: 'weekly',
      lastmod: now,
    });
    // Prefer FA slugs as canonical path list (EN mirrors same slugs)
    const slugs = listDocSlugs(tech, 'fa');
    const enSlugs = new Set(listDocSlugs(tech, 'en'));
    for (const slug of slugs) {
      if (!enSlugs.has(slug)) continue;
      let lastmod = now;
      try {
        const file = path.join(process.cwd(), 'content/docs', tech, 'fa', `${slug}.md`);
        lastmod = fs.statSync(file).mtime.toISOString();
      } catch {
        /* keep now */
      }
      urls.push({
        path: `/docs/${tech}/${slug}`,
        priority: 0.7,
        changefreq: 'weekly',
        lastmod,
      });
    }
  }

  return xmlResponse(urlsetXml(urls, { hreflang: true, images: false }));
}
