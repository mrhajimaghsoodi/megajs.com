import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArticleCard } from '@/components/article-card';
import { getDictionary } from '@/i18n/dictionaries';
import { buildPublicMetadata, jsonLdScript } from '@/lib/seo';
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
  if (!term) return { title: slug };
  // Rank Math best practice: thin tags often noindex — respect stored robots
  return buildPublicMetadata({
    locale: raw,
    fallbackTitle: `#${term.name}`,
    fallbackDescription: term.description || `Posts tagged ${term.name}`,
    seo: term.seo,
    defaultPath: term.path || `/articles/tag/${slug}`,
    ogImageFallback: term.imageUrl,
    type: 'website',
  });
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

  const schema =
    term.seo?.schemaJson && term.seo.schemaJson !== '{}'
      ? jsonLdScript(term.seo.schemaJson)
      : jsonLdScript(term.seoScore?.schemaSuggestion);
  const crumbs = jsonLdScript(term.breadcrumbs);

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      {schema ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      ) : null}
      {crumbs ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: crumbs }} />
      ) : null}

      <nav className="mb-4 text-sm text-muted-foreground" aria-label="Breadcrumb">
        <Link href={`/${locale}/articles`} className="hover:underline">
          {dict.articles.title}
        </Link>
        {' / '}
        <span>#{term.seo?.breadcrumbTitle || term.name}</span>
      </nav>
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
        {dict.articles.tagArchive}
      </p>
      <h1 className="mt-2 font-display text-4xl font-bold tracking-tight">
        #{term.seo?.breadcrumbTitle || term.name}
      </h1>
      {term.description ? (
        <p className="mt-3 max-w-2xl text-muted-foreground">{term.description}</p>
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
