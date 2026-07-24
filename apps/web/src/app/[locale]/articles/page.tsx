import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getDictionary } from '@/i18n/dictionaries';
import { resolveMediaUrl } from '@/lib/media-url';
import { isLocale, type Locale } from '@/lib/utils';

const API = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:4000/api';

async function fetchArticles(locale: string) {
  try {
    const res = await fetch(`${API}/public/articles?locale=${locale}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const dict = getDictionary(raw as Locale);
  return {
    title: dict.articles?.title ?? 'Articles',
    description: dict.articles?.subtitle,
  };
}

function termLabel(term: any, locale: string) {
  return (
    term?.i18n?.find((x: any) => x.locale === locale)?.name ??
    term?.i18n?.[0]?.name ??
    term?.slug ??
    ''
  );
}

export default async function ArticlesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const articles = await fetchArticles(locale);

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <h1 className="font-display text-4xl font-bold tracking-tight">
        {dict.articles?.title ?? 'Articles'}
      </h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">{dict.articles?.subtitle}</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((a: any) => {
          const cats = (a.taxonomies ?? [])
            .map((t: any) => t.term)
            .filter((t: any) => t?.taxonomy === 'post_category');
          return (
            <Link
              key={a.id}
              href={`/${locale}/articles/${a.slug}`}
              className="group flex flex-col overflow-hidden border border-border bg-card transition hover:border-primary/40"
            >
              <div className="aspect-[16/10] bg-muted">
                {a.coverUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={resolveMediaUrl(a.coverUrl)}
                    alt=""
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                  />
                ) : (
                  <div
                    className="h-full w-full bg-gradient-to-br from-[#1a1a1a] via-[#2a2410] to-primary/40"
                    aria-hidden
                  />
                )}
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                {cats.length ? (
                  <div className="flex flex-wrap gap-2">
                    {cats.slice(0, 2).map((c: any) => (
                      <span
                        key={c.id}
                        className="font-mono text-[10px] uppercase tracking-wider text-primary"
                      >
                        {termLabel(c, locale)}
                      </span>
                    ))}
                  </div>
                ) : null}
                <h2 className="font-display text-xl font-semibold leading-snug group-hover:text-primary">
                  {a.title}
                </h2>
                <p className="line-clamp-3 flex-1 text-sm text-muted-foreground">{a.summary}</p>
                {a.publishedAt ? (
                  <time className="pt-1 font-mono text-[11px] text-muted-foreground" dateTime={a.publishedAt}>
                    {new Date(a.publishedAt).toLocaleDateString(
                      locale === 'fa' ? 'fa-IR' : 'en-US',
                    )}
                  </time>
                ) : null}
              </div>
            </Link>
          );
        })}
      </div>

      {!articles.length ? (
        <div className="mt-10 space-y-3">
          <p className="text-sm text-muted-foreground">
            {dict.articles?.empty ?? 'No published articles yet.'}
          </p>
          <Link
            href={`/${locale}/learn`}
            className="text-sm font-semibold underline-offset-4 hover:underline"
          >
            {dict.articles?.ctaLearn}
          </Link>
        </div>
      ) : null}
    </div>
  );
}
