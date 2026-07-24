import { NextResponse } from 'next/server';
import { urlsetXml, xmlResponse, type SitemapUrlInput } from '@/lib/sitemap-xml';

const API = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:4000/api';

export async function serveTypedSitemap(type: string) {
  try {
    const res = await fetch(`${API}/public/sitemap/${type}`, {
      next: { revalidate: 3600, tags: ['sitemap', `sitemap:${type}`] },
    });
    if (!res.ok) {
      return new NextResponse('Not found', { status: 404 });
    }
    const data = await res.json();
    if (data.settings?.sitemap === false) {
      return new NextResponse('Sitemaps disabled', { status: 404 });
    }
    const xml = urlsetXml((data.urls ?? []) as SitemapUrlInput[], {
      hreflang: data.settings?.sitemapHreflang !== false,
      images: data.settings?.sitemapIncludeImages !== false,
    });
    return xmlResponse(xml);
  } catch {
    return xmlResponse(urlsetXml([]), 60);
  }
}
