import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound, permanentRedirect } from 'next/navigation';
import { MarkdownBody } from '@/components/markdown-body';
import { MediaImage } from '@/components/media-image';
import { publicFetchInit } from '@/lib/public-cache';
import { buildPublicMetadata, jsonLdScript, localePath } from '@/lib/seo';
import { isLocale, type Locale } from '@/lib/utils';

const API = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:4000/api';

async function fetchArticle(slug: string, locale: string) {
  const res = await fetch(
    `${API}/public/articles/${slug}?locale=${locale}`,
    publicFetchInit(['articles']),
  );
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
  const title = article.i18nSelected?.title || slug;
  const tags = (article.taxonomies ?? [])
    .map((t: any) => t.term)
    .filter((t: any) => t?.taxonomy === 'post_tag')
    .map((t: any) => termName(t, raw));
  return buildPublicMetadata({
    locale: raw,
    fallbackTitle: title,
    fallbackDescription: article.i18nSelected?.summary,
    seo: article.seo,
    defaultPath: article.permalink || `/articles/${slug}`,
    ogImageFallback: article.coverUrl || article.bannerUrl,
    type: 'article',
    publishedTime: article.publishedAt,
    modifiedTime: article.updatedAt,
    tags,
  });
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

  // Prefer hierarchical Rank Math permalink: /parent/category/post
  const permalink = article.permalink || `/articles/${slug}`;
  if (permalink !== `/articles/${slug}`) {
    permanentRedirect(localePath(locale, permalink));
  }

  const title = article.i18nSelected?.title ?? slug;
  const body = article.i18nSelected?.bodyMdx ?? '';
  const summary = article.i18nSelected?.summary ?? '';
  const banner = article.bannerUrl || article.coverUrl;
  const showCoverSeparate = Boolean(
    article.coverUrl && article.bannerUrl && article.coverUrl !== article.bannerUrl,
  );
  const schemaRaw =
    article.seo?.schemaJson && article.seo.schemaJson !== '{}'
      ? article.seo.schemaJson
      : JSON.stringify(article.seoScore?.schemaSuggestion ?? {});
  const schema = jsonLdScript(schemaRaw);
  const crumbs = jsonLdScript(article.breadcrumbs);

  const cats = (article.taxonomies ?? [])
    .map((t: any) => t.term)
    .filter((t: any) => t?.taxonomy === 'post_category');
  const tags = (article.taxonomies ?? [])
    .map((t: any) => t.term)
    .filter((t: any) => t?.taxonomy === 'post_tag');

  return (
    <article>
      {schema ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      ) : null}
      {crumbs ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: crumbs }} />
      ) : null}

      {banner ? (
        <div className="relative isolate min-h-[14rem] w-full overflow-hidden bg-[#0c0c0c] sm:min-h-[18rem]">
          <MediaImage
            src={banner}
            alt=""
            fill
            priority
            sizes="100vw"
            className="opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
        </div>
      ) : null}

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <nav className="mb-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
          <Link href={`/${locale}`} className="underline-offset-4 hover:underline">
            Home
          </Link>
          {' / '}
          <Link href={`/${locale}/articles`} className="underline-offset-4 hover:underline">
            Articles
          </Link>
          {cats.slice(0, 2).map((c: any) => (
            <span key={c.id}>
              {' / '}
              <Link
                href={localePath(locale, `/articles/category/${c.slug}`)}
                className="underline-offset-4 hover:underline"
              >
                {article.seo?.breadcrumbTitle && cats[0]?.id === c.id
                  ? termName(c, locale)
                  : termName(c, locale)}
              </Link>
            </span>
          ))}
          {' / '}
          <span>{article.seo?.breadcrumbTitle || title}</span>
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
          <div className="relative mt-8 aspect-[16/9] overflow-hidden border border-border">
            <MediaImage
              src={article.coverUrl}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 48rem"
            />
          </div>
        ) : null}

        <div className="mt-10">
          <MarkdownBody content={body} />
        </div>

        <p className="mt-10 font-mono text-[11px] text-muted-foreground" dir="ltr">
          {permalink}
        </p>
      </div>
    </article>
  );
}
