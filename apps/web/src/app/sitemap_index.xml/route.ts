import { SITE_URL } from '@/lib/seo';
import { sitemapIndexXml, xmlResponse } from '@/lib/sitemap-xml';

const API = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:4000/api';

const FILE_BY_TYPE: Record<string, string> = {
  misc: 'misc-sitemap.xml',
  post: 'post-sitemap.xml',
  page: 'page-sitemap.xml',
  category: 'category-sitemap.xml',
  post_tag: 'post_tag-sitemap.xml',
  product: 'product-sitemap.xml',
  product_cat: 'product_cat-sitemap.xml',
  live: 'live-sitemap.xml',
  podcast: 'podcast-sitemap.xml',
};

export const dynamic = 'force-dynamic';
export const revalidate = 3600;

export async function GET() {
  try {
    const res = await fetch(`${API}/public/sitemap/index`, {
      next: { revalidate: 3600, tags: ['sitemap'] },
    });
    if (!res.ok) {
      return xmlResponse(
        sitemapIndexXml([{ loc: `${SITE_URL}/misc-sitemap.xml` }]),
        300,
      );
    }
    const data = await res.json();
    if (!data.enabled) {
      return new Response('Sitemaps disabled', { status: 404 });
    }
    const items = (data.sitemaps ?? []).map(
      (s: { type: string; lastmod?: string | null }) => ({
        loc: `${SITE_URL}/${FILE_BY_TYPE[s.type] ?? `${s.type}-sitemap.xml`}`,
        lastmod: s.lastmod ?? null,
      }),
    );
    return xmlResponse(
      sitemapIndexXml(
        items.length ? items : [{ loc: `${SITE_URL}/misc-sitemap.xml` }],
      ),
    );
  } catch {
    return xmlResponse(sitemapIndexXml([{ loc: `${SITE_URL}/misc-sitemap.xml` }]), 60);
  }
}
