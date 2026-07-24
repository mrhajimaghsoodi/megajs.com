import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MarkdownBody } from '@/components/markdown-body';
import { resolveMediaUrl } from '@/lib/media-url';
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

function termName(term: any, locale: string) {
  return (
    term?.i18n?.find((x: any) => x.locale === locale)?.name ??
    term?.i18n?.[0]?.name ??
    term?.slug
  );
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
  const canonical = article.seo?.canonicalPath || `/${raw}/articles/${slug}`;
  const og =
    article.seo?.ogImageUrl || article.coverUrl || article.bannerUrl || undefined;
  return {
    title,
    description,
    alternates: { canonical: `${SITE}${canonical}` },
    openGraph: {
      title,
      description,
      images: og ? [resolveMediaUrl(og)] : undefined,
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
  const summary = article.i18nSelected?.summary ?? '';
  const banner = article.bannerUrl || article.coverUrl;
  const showCoverSeparate = Boolean(
    article.coverUrl && article.bannerUrl && article.coverUrl !== article.bannerUrl,
  );
  const schema =
    article.seo?.schemaJson && article.seo.schemaJson !== '{}'
      ? article.seo.schemaJson
      : JSON.stringify(article.seoScore?.schemaSuggestion ?? {});

  const cats = (article.taxonomies ?? [])
    .map((t: any) => t.term)
    .filter((t: any) => t?.taxonomy === 'post_category');
  const tags = (article.taxonomies ?? [])
    .map((t: any) => t.term)
    .filter((t: any) => t?.taxonomy === 'post_tag');

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      {article.breadcrumbs ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(article.breadcrumbs) }}
        />
      ) : null}

      {banner ? (
        <div className="relative isolate min-h-[14rem] w-full overflow-hidden bg-[#0c0c0c] sm:min-h-[18rem]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={resolveMediaUrl(banner)}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
        </div>
      ) : null}

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <nav className="mb-6 text-sm text-muted-foreground">
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

        <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>

        {summary ? <p className="mt-4 text-lg leading-8 text-muted-foreground">{summary}</p> : null}

        <div className="mt-4 flex flex-wrap gap-2">
          {cats.map((c: any) => (
            <Link
              key={c.id}
              href={`/${locale}/articles/category/${c.slug}`}
              className="border border-border px-2 py-1 text-xs font-semibold uppercase tracking-wide hover:border-primary hover:text-primary"
            >
              {termName(c, locale)}
            </Link>
          ))}
          {tags.map((t: any) => (
            <Link
              key={t.id}
              href={`/${locale}/articles/tag/${t.slug}`}
              className="text-xs text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
            >
              #{termName(t, locale)}
            </Link>
          ))}
        </div>

        {showCoverSeparate ? (
          <div className="mt-8 overflow-hidden border border-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={resolveMediaUrl(article.coverUrl)}
              alt=""
              className="h-auto w-full object-cover"
            />
          </div>
        ) : null}

        <div className="mt-10">
          <MarkdownBody content={body} />
        </div>
      </div>
    </article>
  );
}
