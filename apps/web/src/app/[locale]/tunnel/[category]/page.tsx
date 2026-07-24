import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MarkdownBody } from '@/components/markdown-body';
import { MediaImage } from '@/components/media-image';
import { getDictionary } from '@/i18n/dictionaries';
import { buildPublicMetadata, jsonLdScript, localePath } from '@/lib/seo';
import { isLocale, type Locale } from '@/lib/utils';

const API = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:4000/api';

async function fetchCategory(slug: string, locale: string) {
  try {
    const res = await fetch(
      `${API}/public/tunnel/categories/${encodeURIComponent(slug)}?locale=${locale}`,
      { next: { revalidate: 120, tags: ['tunnel', 'terms'] } },
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
  params: Promise<{ locale: string; category: string }>;
}): Promise<Metadata> {
  const { locale: raw, category } = await params;
  if (!isLocale(raw)) return {};
  const data = await fetchCategory(category, raw);
  if (!data) return {};
  return buildPublicMetadata({
    locale: raw,
    fallbackTitle: data.name,
    fallbackDescription: data.description,
    seo: data.seo,
    defaultPath: data.path || `/tunnel/${category}`,
    ogImageFallback: data.coverUrl || data.bannerUrl || data.imageUrl,
  });
}

export default async function TunnelCategoryPage({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}) {
  const { locale: raw, category } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const data = await fetchCategory(category, locale);
  if (!data) notFound();

  const banner = data.bannerUrl || data.coverUrl || data.imageUrl;
  const schema = jsonLdScript(data.seo?.schemaJson);

  return (
    <div>
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-4xl px-4 pb-8 sm:px-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/70">
              {dict.tunnel.roadmap}
            </p>
            <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
              {data.name}
            </h1>
          </div>
        </div>
      ) : (
        <div className="mx-auto max-w-4xl px-4 pt-14 sm:px-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {dict.tunnel.roadmap}
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {data.name}
          </h1>
        </div>
      )}

      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
        <nav className="mb-8 text-sm text-muted-foreground" aria-label="Breadcrumb">
          <Link href={`/${locale}`} className="underline-offset-4 hover:underline">
            Home
          </Link>
          {' / '}
          <Link href={`/${locale}/tunnel`} className="underline-offset-4 hover:underline">
            {dict.tunnel.title}
          </Link>
          {' / '}
          <span>{data.name}</span>
        </nav>

        {data.description ? (
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground">{data.description}</p>
        ) : null}

        {data.landingMdx ? (
          <div className="mt-8">
            <MarkdownBody content={data.landingMdx} />
          </div>
        ) : null}

        <section className="mt-14">
          <h2 className="font-display text-2xl font-bold tracking-tight">
            {dict.tunnel.pathTitle}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">{dict.tunnel.pathSubtitle}</p>

          {!data.episodes?.length ? (
            <p className="mt-8 text-muted-foreground">{dict.tunnel.emptyParts}</p>
          ) : (
            <ol className="relative mt-10 space-y-0 border-s-2 border-[#ffd400]/70 ps-8">
              {data.episodes.map((ep: any, i: number) => {
                const href = localePath(locale, ep.path || `/tunnel/${category}/${ep.slug}`);
                return (
                  <li key={ep.id} className="relative pb-10 last:pb-0">
                    <span
                      className="absolute -start-[2.15rem] top-1 flex size-6 items-center justify-center rounded-full border-2 border-[#ffd400] bg-background font-mono text-[10px] font-bold"
                      aria-hidden
                    >
                      {ep.partNumber ?? i + 1}
                    </span>
                    <Link href={href} className="group block space-y-1">
                      <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                        {dict.tunnel.partLabel.replace('{n}', String(ep.partNumber ?? i + 1))}
                      </p>
                      <h3 className="font-display text-xl font-bold tracking-tight group-hover:underline">
                        {ep.title}
                      </h3>
                      {ep.summary ? (
                        <p className="line-clamp-2 text-sm leading-6 text-muted-foreground">
                          {ep.summary}
                        </p>
                      ) : null}
                    </Link>
                  </li>
                );
              })}
            </ol>
          )}
        </section>
      </div>
    </div>
  );
}
