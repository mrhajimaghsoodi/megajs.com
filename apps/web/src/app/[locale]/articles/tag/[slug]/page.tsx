import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getDictionary } from '@/i18n/dictionaries';
import { resolveMediaUrl } from '@/lib/media-url';
import { isLocale, type Locale } from '@/lib/utils';

const API = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:4000/api';

async function fetchTerm(slug: string, locale: string) {
  const res = await fetch(
    `${API}/public/terms?taxonomy=post_tag&slug=${encodeURIComponent(slug)}&locale=${locale}`,
    { next: { revalidate: 60 } },
  );
  if (!res.ok) return null;
  return res.json();
}

async function fetchArticles(locale: string, slug: string) {
  const res = await fetch(
    `${API}/public/articles?locale=${locale}&tag=${encodeURIComponent(slug)}`,
    { next: { revalidate: 60 } },
  );
  if (!res.ok) return [];
  return res.json();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) return {};
  const term = await fetchTerm(slug, raw);
  return { title: term?.name ?? slug };
}

export default async function TagArchivePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const term = await fetchTerm(slug, locale);
  if (!term) notFound();
  const articles = await fetchArticles(locale, slug);

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href={`/${locale}/articles`} className="hover:underline">
          {dict.articles.title}
        </Link>
        {' / '}
        <span>#{term.name}</span>
      </nav>
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
        {dict.articles.tagArchive}
      </p>
      <h1 className="mt-2 font-display text-4xl font-bold tracking-tight">#{term.name}</h1>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((a: any) => (
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
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-[#1a1a1a] to-primary/30" />
              )}
            </div>
            <div className="space-y-2 p-5">
              <h2 className="font-display text-lg font-semibold group-hover:text-primary">
                {a.title}
              </h2>
              <p className="line-clamp-2 text-sm text-muted-foreground">{a.summary}</p>
            </div>
          </Link>
        ))}
      </div>
      {!articles.length ? (
        <p className="mt-8 text-sm text-muted-foreground">{dict.empty}</p>
      ) : null}
    </div>
  );
}
