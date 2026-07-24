import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArticleCard } from '@/components/article-card';
import { TermCardsGrid } from '@/components/term-card';
import { getDictionary } from '@/i18n/dictionaries';
import { pageMetadata } from '@/lib/seo';
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

async function fetchCategories(locale: string) {
  try {
    const res = await fetch(
      `${API}/public/terms?taxonomy=post_category&locale=${locale}`,
      { next: { revalidate: 60 } },
    );
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
  return pageMetadata({
    locale: raw as Locale,
    title: dict.articles?.title ?? 'Articles',
    description: dict.articles?.subtitle,
    path: '/articles',
  });
}

export default async function ArticlesPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ view?: string }>;
}) {
  const { locale: raw } = await params;
  const { view } = await searchParams;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const [articles, categories] = await Promise.all([
    fetchArticles(locale),
    fetchCategories(locale),
  ]);
  const variant = view === 'list' ? 'list' : 'grid';

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-4xl font-bold tracking-tight">
            {dict.articles?.title ?? 'Articles'}
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">{dict.articles?.subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-2 text-sm">
          <Link
            href={`/${locale}/articles`}
            className={
              variant === 'grid'
                ? 'bg-primary px-3 py-1.5 font-semibold text-[var(--mj-ink)]'
                : 'border border-border px-3 py-1.5'
            }
          >
            {dict.articles.viewGrid}
          </Link>
          <Link
            href={`/${locale}/articles?view=list`}
            className={
              variant === 'list'
                ? 'bg-primary px-3 py-1.5 font-semibold text-[var(--mj-ink)]'
                : 'border border-border px-3 py-1.5'
            }
          >
            {dict.articles.viewList}
          </Link>
          <Link
            href={`/${locale}/articles/categories`}
            className="border border-border px-3 py-1.5 hover:border-primary"
          >
            {dict.articles.allCategories}
          </Link>
        </div>
      </div>

      {categories.length ? (
        <div className="mt-8 flex flex-wrap gap-2">
          {categories
            .filter((c: any) => !c.parentId)
            .slice(0, 12)
            .map((c: any) => (
              <Link
                key={c.id}
                href={`/${locale}/articles/category/${c.slug}`}
                className="border border-border px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition hover:border-primary hover:text-primary"
              >
                {c.name}
              </Link>
            ))}
        </div>
      ) : null}

      <div
        className={
          variant === 'list'
            ? 'mt-10 space-y-4'
            : 'mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'
        }
      >
        {articles.map((a: any) => (
          <ArticleCard key={a.id} article={a} locale={locale} variant={variant} />
        ))}
      </div>

      {!articles.length ? (
        <div className="mt-10 space-y-4">
          <p className="text-sm text-muted-foreground">
            {dict.articles?.empty ?? 'No published articles yet.'}
          </p>
          {categories.length ? (
            <TermCardsGrid
              terms={categories}
              locale={locale}
              hrefBase={`/${locale}/articles/category`}
              showChildren
            />
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
