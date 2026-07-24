import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArticleCard } from '@/components/article-card';
import { TermCardsGrid } from '@/components/term-card';
import { getDictionary } from '@/i18n/dictionaries';
import { isLocale, type Locale } from '@/lib/utils';

const API = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:4000/api';

async function fetchTerm(slug: string, locale: string) {
  const res = await fetch(
    `${API}/public/terms?taxonomy=post_category&slug=${encodeURIComponent(slug)}&locale=${locale}`,
    { next: { revalidate: 60 } },
  );
  if (!res.ok) return null;
  return res.json();
}

async function fetchArticles(locale: string, slug: string) {
  const res = await fetch(
    `${API}/public/articles?locale=${locale}&category=${encodeURIComponent(slug)}`,
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

export default async function CategoryArchivePage({
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
  const childTerms = (term.children ?? []).map((c: any) => ({
    ...c,
    name:
      c.i18n?.find((x: any) => x.locale === locale)?.name ??
      c.i18n?.[0]?.name ??
      c.slug,
    count: (c._count?.articles ?? 0) + (c._count?.courses ?? 0),
  }));

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href={`/${locale}/articles`} className="hover:underline">
          {dict.articles.title}
        </Link>
        {' / '}
        <Link href={`/${locale}/articles/categories`} className="hover:underline">
          {dict.articles.allCategories}
        </Link>
        {' / '}
        <span>{term.name}</span>
      </nav>
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
        {dict.articles.categoryArchive}
      </p>
      <h1 className="mt-2 font-display text-4xl font-bold tracking-tight">{term.name}</h1>
      {term.description ? (
        <p className="mt-3 max-w-2xl text-muted-foreground">{term.description}</p>
      ) : null}

      {childTerms.length ? (
        <div className="mt-8">
          <h2 className="mb-4 font-display text-lg font-bold">{dict.articles.subcategories}</h2>
          <TermCardsGrid
            terms={childTerms}
            locale={locale}
            hrefBase={`/${locale}/articles/category`}
          />
        </div>
      ) : null}

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((a: any) => (
          <ArticleCard key={a.id} article={a} locale={locale} />
        ))}
      </div>
      {!articles.length ? (
        <p className="mt-8 text-sm text-muted-foreground">{dict.empty}</p>
      ) : null}
    </div>
  );
}
