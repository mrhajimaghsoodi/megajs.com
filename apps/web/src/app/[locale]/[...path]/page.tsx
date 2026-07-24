import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound, permanentRedirect } from 'next/navigation';
import { ArticleCard } from '@/components/article-card';
import { MarkdownBody } from '@/components/markdown-body';
import { TermCardsGrid } from '@/components/term-card';
import { getDictionary } from '@/i18n/dictionaries';
import { resolveMediaUrl } from '@/lib/media-url';
import { buildPublicMetadata, jsonLdScript, localePath } from '@/lib/seo';
import { isLocale, type Locale } from '@/lib/utils';

const API = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:4000/api';

/** Reserved first segments handled by dedicated App Router folders */
const RESERVED = new Set([
  'about',
  'apps',
  'articles',
  'contact',
  'curriculum',
  'learn',
  'live',
  'login',
  'p',
  'podcasts',
  'practice',
  'pricing',
  'privacy',
  'profile',
  'terms',
  'tokens',
]);

async function resolve(path: string, locale: string) {
  const res = await fetch(
    `${API}/public/resolve?path=${encodeURIComponent(path)}&locale=${locale}`,
    { next: { revalidate: 60 } },
  );
  if (res.status === 404) return null;
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
  params: Promise<{ locale: string; path: string[] }>;
}): Promise<Metadata> {
  const { locale: raw, path } = await params;
  if (!isLocale(raw) || !path?.length || RESERVED.has(path[0]!)) return {};
  const joined = path.join('/');
  const data = await resolve(joined, raw);
  if (!data || data.type === 'redirect') return {};
  if (data.type === 'article') {
    const article = data.article;
    const title = article.i18nSelected?.title || article.slug;
    return buildPublicMetadata({
      locale: raw,
      fallbackTitle: title,
      fallbackDescription: article.i18nSelected?.summary,
      seo: article.seo,
      defaultPath: data.permalink || `/${joined}`,
      ogImageFallback: article.coverUrl || article.bannerUrl,
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
    });
  }
  if (data.type === 'category') {
    const term = data.term;
    return buildPublicMetadata({
      locale: raw,
      fallbackTitle: term.name,
      fallbackDescription: term.description,
      seo: term.seo,
      defaultPath: data.permalink || `/${joined}`,
      ogImageFallback: term.imageUrl,
      type: 'website',
    });
  }
  return {};
}

export default async function HierarchicalPermalinkPage({
  params,
}: {
  params: Promise<{ locale: string; path: string[] }>;
}) {
  const { locale: raw, path } = await params;
  if (!isLocale(raw) || !path?.length) notFound();
  if (RESERVED.has(path[0]!)) notFound();
  const locale = raw as Locale;
  const joined = path.join('/');
  const data = await resolve(joined, locale);
  if (!data) notFound();
  if (data.type === 'redirect' && data.permalink) {
    permanentRedirect(localePath(locale, data.permalink));
  }

  if (data.type === 'article') {
    const article = data.article;
    const title = article.i18nSelected?.title ?? article.slug;
    const body = article.i18nSelected?.bodyMdx ?? '';
    const summary = article.i18nSelected?.summary ?? '';
    const banner = article.bannerUrl || article.coverUrl;
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
          <nav className="mb-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
            <Link href={`/${locale}`} className="underline-offset-4 hover:underline">
              Home
            </Link>
            {' / '}
            <Link href={`/${locale}/articles`} className="underline-offset-4 hover:underline">
              Articles
            </Link>
            {' / '}
            <span>{article.seo?.breadcrumbTitle || title}</span>
          </nav>
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
          {summary ? (
            <p className="mt-4 text-lg leading-8 text-muted-foreground">{summary}</p>
          ) : null}
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
          <div className="mt-10">
            <MarkdownBody content={body} />
          </div>
        </div>
      </article>
    );
  }

  if (data.type === 'category') {
    const dict = getDictionary(locale);
    const term = data.term;
    const artsRes = await fetch(
      `${API}/public/articles?locale=${locale}&category=${encodeURIComponent(term.slug)}`,
      { next: { revalidate: 60 } },
    );
    const articles = artsRes.ok ? await artsRes.json() : [];
    const childTerms = (term.children ?? []).map((c: any) => ({
      ...c,
      name: c.name ?? c.slug,
      count: c.count ?? (c._count?.articles ?? 0) + (c._count?.courses ?? 0),
    }));
    const schema =
      term.seo?.schemaJson && term.seo.schemaJson !== '{}'
        ? jsonLdScript(term.seo.schemaJson)
        : null;

    return (
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        {schema ? (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
        ) : null}
        <nav className="mb-4 text-sm text-muted-foreground">
          <Link href={`/${locale}/articles`} className="hover:underline">
            {dict.articles.title}
          </Link>
          {' / '}
          <span>{term.seo?.breadcrumbTitle || term.name}</span>
        </nav>
        <h1 className="font-display text-4xl font-bold tracking-tight">
          {term.seo?.breadcrumbTitle || term.name}
        </h1>
        {term.description ? (
          <p className="mt-3 max-w-2xl text-muted-foreground">{term.description}</p>
        ) : null}
        {childTerms.length ? (
          <div className="mt-8">
            <TermCardsGrid
              terms={childTerms}
              locale={locale}
              hrefBase={`/${locale}${data.permalink || ''}`}
            />
          </div>
        ) : null}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a: any) => (
            <ArticleCard key={a.id} article={a} locale={locale} />
          ))}
        </div>
      </div>
    );
  }

  notFound();
}
