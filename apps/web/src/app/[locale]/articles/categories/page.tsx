import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { TermCardsGrid } from '@/components/term-card';
import { getDictionary } from '@/i18n/dictionaries';
import { pageMetadata } from '@/lib/seo';
import { isLocale, type Locale } from '@/lib/utils';

const API = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:4000/api';

async function fetchCategories(locale: string) {
  const res = await fetch(
    `${API}/public/terms?taxonomy=post_category&locale=${locale}`,
    { next: { revalidate: 120, tags: ["terms", "articles"] } },
  );
  if (!res.ok) return [];
  return res.json();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const dict = getDictionary(raw as Locale);
  return pageMetadata({
    locale: raw as Locale,
    title: dict.articles.allCategories,
    description: dict.articles.categoriesSubtitle,
    path: '/articles/categories',
  });
}

export default async function ArticleCategoriesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const categories = await fetchCategories(locale);

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href={`/${locale}/articles`} className="hover:underline">
          {dict.articles.title}
        </Link>
        {' / '}
        <span>{dict.articles.allCategories}</span>
      </nav>
      <h1 className="font-display text-4xl font-bold tracking-tight">
        {dict.articles.allCategories}
      </h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        {dict.articles.categoriesSubtitle}
      </p>
      <div className="mt-10">
        <TermCardsGrid
          terms={categories}
          locale={locale}
          hrefBase={`/${locale}/articles/category`}
          showChildren
        />
      </div>
      {!categories.length ? (
        <p className="mt-8 text-sm text-muted-foreground">{dict.empty}</p>
      ) : null}
    </div>
  );
}
