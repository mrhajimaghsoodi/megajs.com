import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getDictionary } from '@/i18n/dictionaries';
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
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
      <h1 className="font-display text-4xl font-bold tracking-tight">
        {dict.articles?.title ?? 'Articles'}
      </h1>
      <p className="mt-3 max-w-2xl text-[var(--mj-muted-fg)]">
        {dict.articles?.subtitle}
      </p>
      <div className="mt-10 space-y-4">
        {articles.map((a: any) => (
          <Link
            key={a.id}
            href={`/${locale}/articles/${a.slug}`}
            className="block rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-5 transition hover:border-[var(--mj-accent)]"
          >
            <h2 className="font-display text-xl font-semibold">{a.title}</h2>
            <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{a.summary}</p>
          </Link>
        ))}
        {!articles.length ? (
          <p className="text-sm text-[var(--mj-muted-fg)]">
            {dict.articles?.empty ?? 'No published articles yet.'}
          </p>
        ) : null}
      </div>
    </div>
  );
}
