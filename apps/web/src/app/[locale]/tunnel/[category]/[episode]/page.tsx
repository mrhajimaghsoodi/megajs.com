import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound, permanentRedirect } from 'next/navigation';
import { MarkdownBody } from '@/components/markdown-body';
import { MediaImage } from '@/components/media-image';
import { TunnelVideoPlayer } from '@/components/tunnel-video';
import { getDictionary } from '@/i18n/dictionaries';
import { buildPublicMetadata, jsonLdScript, localePath } from '@/lib/seo';
import { isLocale, type Locale } from '@/lib/utils';

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
  params: Promise<{ locale: string; category: string; episode: string }>;
}): Promise<Metadata> {
  const { locale: raw, episode } = await params;
  if (!isLocale(raw)) return {};
  const data = await fetchEpisode(episode, raw);
  if (!data) return {};
  return buildPublicMetadata({
    locale: raw,
    fallbackTitle: data.title,
    fallbackDescription: data.summary,
    seo: data.seo,
    defaultPath: data.path || `/tunnel/e/${episode}`,
    ogImageFallback: data.coverUrl || data.bannerUrl || data.videoPosterUrl,
    type: 'article',
    publishedTime: data.publishedAt,
  });
}

export default async function TunnelEpisodePage({
  params,
}: {
  params: Promise<{ locale: string; category: string; episode: string }>;
}) {
  const { locale: raw, category, episode } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const data = await fetchEpisode(episode, locale);
  if (!data) notFound();

  // Canonical series path if URL category mismatches
  if (data.seriesSlug && data.seriesSlug !== category) {
    permanentRedirect(localePath(locale, `/tunnel/${data.seriesSlug}/${data.slug}`));
  }

  const banner = data.bannerUrl || data.coverUrl;
  const schema = jsonLdScript(data.seo?.schemaJson);
  const seriesHref = data.seriesSlug
    ? localePath(locale, `/tunnel/${data.seriesSlug}`)
    : `/${locale}/tunnel`;

  return (
    <article>
      {schema ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      ) : null}

      {banner ? (
        <div className="relative isolate min-h-[12rem] w-full overflow-hidden bg-[#0c0c0c] sm:min-h-[16rem]">
          <MediaImage
            src={banner}
            alt=""
            fill
            priority
            sizes="100vw"
            className="opacity-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
        </div>
      ) : null}

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <nav className="mb-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
          <Link href={`/${locale}/tunnel`} className="underline-offset-4 hover:underline">
            {dict.tunnel.title}
          </Link>
          {data.seriesName ? (
            <>
              {' / '}
              <Link href={seriesHref} className="underline-offset-4 hover:underline">
                {data.seriesName}
              </Link>
            </>
          ) : null}
          {' / '}
          <span>{data.seo?.breadcrumbTitle || data.title}</span>
        </nav>

        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {dict.tunnel.episodeKicker}
        </p>
        <h1 className="mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          {data.title}
        </h1>
        {data.summary ? (
          <p className="mt-4 text-lg leading-8 text-muted-foreground">{data.summary}</p>
        ) : null}

        <div className="mt-8">
          <TunnelVideoPlayer
            videoSource={data.videoSource}
            aparatUrl={data.aparatUrl}
            vodUrl={data.vodUrl}
            videoUrl={data.videoUrl}
            videoPosterUrl={data.videoPosterUrl}
            title={data.title}
          />
        </div>

        {data.bodyMdx ? (
          <div className="mt-10">
            <MarkdownBody content={data.bodyMdx} />
          </div>
        ) : null}

        <nav
          className="mt-14 flex flex-wrap items-stretch justify-between gap-4 border-t border-border pt-8"
          aria-label={dict.tunnel.navParts}
        >
          {data.prev ? (
            <Link
              href={localePath(
                locale,
                data.seriesSlug
                  ? `/tunnel/${data.seriesSlug}/${data.prev.slug}`
                  : data.prev.path,
              )}
              className="group max-w-[48%] space-y-1"
            >
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                {dict.tunnel.prev}
              </span>
              <span className="block font-display text-base font-bold group-hover:underline">
                {data.prev.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {data.next ? (
            <Link
              href={localePath(
                locale,
                data.seriesSlug
                  ? `/tunnel/${data.seriesSlug}/${data.next.slug}`
                  : data.next.path,
              )}
              className="group max-w-[48%] space-y-1 text-end ms-auto"
            >
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                {dict.tunnel.next}
              </span>
              <span className="block font-display text-base font-bold group-hover:underline">
                {data.next.title}
              </span>
            </Link>
          ) : null}
        </nav>

        <p className="mt-8 text-sm">
          <Link href={seriesHref} className="underline-offset-4 hover:underline">
            ← {dict.tunnel.backToRoadmap}
          </Link>
        </p>
      </div>
    </article>
  );
}
