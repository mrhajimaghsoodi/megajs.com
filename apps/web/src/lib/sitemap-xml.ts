import { SITE_URL, absoluteUrl } from '@/lib/seo';

const LOCALES = ['fa', 'en'] as const;

export type SitemapUrlInput = {
  path: string;
  lastmod?: string | Date | null;
  changefreq?: string;
  priority?: number;
  image?: string | null;
};

function esc(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function toIso(value?: string | Date | null) {
  if (!value) return null;
  const d = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(d.getTime())) return null;
  return d.toISOString();
}

function localeUrl(locale: string, path: string) {
  const p = path === '' || path === '/' ? '' : path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}/${locale}${p}`;
}

export function sitemapIndexXml(
  items: Array<{ loc: string; lastmod?: string | null }>,
) {
  const body = items
    .map((item) => {
      const last = item.lastmod ? `\n    <lastmod>${esc(item.lastmod)}</lastmod>` : '';
      return `  <sitemap>\n    <loc>${esc(item.loc)}</loc>${last}\n  </sitemap>`;
    })
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</sitemapindex>\n`;
}

export function urlsetXml(
  urls: SitemapUrlInput[],
  opts?: { hreflang?: boolean; images?: boolean },
) {
  const hreflang = opts?.hreflang !== false;
  const images = opts?.images !== false;
  const rows: string[] = [];

  for (const item of urls) {
    for (const locale of LOCALES) {
      const loc = localeUrl(locale, item.path);
      const last = toIso(item.lastmod);
      const parts = [`    <loc>${esc(loc)}</loc>`];
      if (last) parts.push(`    <lastmod>${esc(last)}</lastmod>`);
      if (item.changefreq) parts.push(`    <changefreq>${esc(item.changefreq)}</changefreq>`);
      if (typeof item.priority === 'number') {
        parts.push(`    <priority>${item.priority.toFixed(1)}</priority>`);
      }
      if (hreflang) {
        for (const alt of LOCALES) {
          parts.push(
            `    <xhtml:link rel="alternate" hreflang="${alt}" href="${esc(localeUrl(alt, item.path))}"/>`,
          );
        }
        parts.push(
          `    <xhtml:link rel="alternate" hreflang="x-default" href="${esc(localeUrl('fa', item.path))}"/>`,
        );
      }
      if (images && item.image) {
        const img = absoluteUrl(item.image);
        parts.push(`    <image:image>\n      <image:loc>${esc(img)}</image:loc>\n    </image:image>`);
      }
      rows.push(`  <url>\n${parts.join('\n')}\n  </url>`);
    }
  }

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${rows.join('\n')}\n</urlset>\n`;
}

export function xmlResponse(xml: string, revalidate = 3600) {
  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': `public, s-maxage=${revalidate}, stale-while-revalidate=86400`,
      'X-Robots-Tag': 'noindex',
    },
  });
}

export const SITEMAP_FILE_MAP: Record<string, string> = {
  'post-sitemap.xml': 'post',
  'page-sitemap.xml': 'page',
  'category-sitemap.xml': 'category',
  'post_tag-sitemap.xml': 'post_tag',
  'product-sitemap.xml': 'product',
  'product_cat-sitemap.xml': 'product_cat',
  'live-sitemap.xml': 'live',
  'podcast-sitemap.xml': 'podcast',
  'tunnel-sitemap.xml': 'tunnel',
  'misc-sitemap.xml': 'misc',
};
