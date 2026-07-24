import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { isLocale, type Locale } from '@/lib/utils';

const API = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:4000/api';
const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

async function fetchArticle(slug: string, locale: string) {
  const res = await fetch(`${API}/public/articles/${slug}?locale=${locale}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) return null;
  return res.json();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) return {};
  const article = await fetchArticle(slug, raw);
  if (!article) return {};
  const title = article.seo?.metaTitle || article.i18nSelected?.title || slug;
  const description =
    article.seo?.metaDescription || article.i18nSelected?.summary || undefined;
  const canonical =
    article.seo?.canonicalPath || `/${raw}/articles/${slug}`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE}${canonical}` },
    openGraph: {
      title,
      description,
      images: article.seo?.ogImageUrl ? [article.seo.ogImageUrl] : undefined,
    },
    robots: article.seo?.noIndex ? { index: false, follow: false } : undefined,
  };
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const article = await fetchArticle(slug, locale);
  if (!article) notFound();

  const title = article.i18nSelected?.title ?? slug;
  const body = article.i18nSelected?.bodyMdx ?? '';
  const schema =
    article.seo?.schemaJson && article.seo.schemaJson !== '{}'
      ? article.seo.schemaJson
      : JSON.stringify(article.seoScore?.schemaSuggestion ?? {});

  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schema }}
      />
      {article.breadcrumbs ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(article.breadcrumbs) }}
        />
      ) : null}

      <nav className="mb-6 text-sm text-[var(--mj-muted-fg)]">
        <Link href={`/${locale}`} className="underline-offset-4 hover:underline">
          Home
        </Link>
        {' / '}
        <Link href={`/${locale}/articles`} className="underline-offset-4 hover:underline">
          Articles
        </Link>
        {' / '}
        <span>{title}</span>
      </nav>

      <h1 className="font-display text-4xl font-bold tracking-tight">{title}</h1>
      {article.i18nSelected?.summary ? (
        <p className="mt-4 text-lg text-[var(--mj-muted-fg)]">{article.i18nSelected.summary}</p>
      ) : null}

      <div className="prose prose-neutral mt-10 max-w-none whitespace-pre-wrap dark:prose-invert">
        {body}
      </div>
    </article>
  );
}
