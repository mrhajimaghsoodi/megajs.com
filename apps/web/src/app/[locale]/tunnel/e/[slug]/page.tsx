import type { Metadata } from 'next';
import { notFound, permanentRedirect } from 'next/navigation';
import { buildPublicMetadata, localePath } from '@/lib/seo';
import { isLocale } from '@/lib/utils';

const API = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:4000/api';

async function fetchEpisode(slug: string, locale: string) {
  try {
    const res = await fetch(
      `${API}/public/tunnel/episodes/${encodeURIComponent(slug)}?locale=${locale}`,
      { next: { revalidate: 120, tags: ['tunnel'] } },
    );
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) return {};
  const data = await fetchEpisode(slug, raw);
  if (!data) return {};
  return buildPublicMetadata({
    locale: raw,
    fallbackTitle: data.title,
    fallbackDescription: data.summary,
    seo: data.seo,
    defaultPath: data.path || `/tunnel/e/${slug}`,
    ogImageFallback: data.coverUrl || data.bannerUrl || data.videoPosterUrl,
    type: 'article',
    publishedTime: data.publishedAt,
  });
}

/** Short permalink `/tunnel/e/:slug` → canonical series path when available. */
export default async function TunnelEpisodeShortPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const data = await fetchEpisode(slug, raw);
  if (!data) notFound();

  const target =
    data.seriesSlug && data.slug
      ? `/tunnel/${data.seriesSlug}/${data.slug}`
      : data.path || `/tunnel/e/${slug}`;

  permanentRedirect(localePath(raw, target));
}
