import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { DocsPager } from '@/components/docs-pager';
import { DocsSidebar } from '@/components/docs-sidebar';
import { MarkdownBody } from '@/components/markdown-body';
import { getDictionary } from '@/i18n/dictionaries';
import { getDocsPage, getTechMeta, listDocSlugs, listTechIds } from '@/lib/docs/loader';
import { localizeTitle } from '@/lib/docs/types';
import {
  absoluteUrl,
  breadcrumbJsonLd,
  jsonLdScript,
  localePath,
  pageMetadata,
} from '@/lib/seo';
import { isLocale, type Locale } from '@/lib/utils';

export async function generateStaticParams() {
  const locales: Locale[] = ['fa', 'en'];
  const params: Array<{ locale: string; tech: string; slug: string[] }> = [];
  for (const locale of locales) {
    for (const tech of listTechIds()) {
      for (const s of listDocSlugs(tech, locale)) {
        params.push({ locale, tech, slug: s.split('/') });
      }
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; tech: string; slug: string[] }>;
}): Promise<Metadata> {
  const { locale: raw, tech: techId, slug } = await params;
  if (!isLocale(raw)) return {};
  const page = getDocsPage(techId, raw as Locale, slug);
  if (!page) return {};
  const tech = getTechMeta(techId);
  const techLabel = tech ? localizeTitle(tech.title, raw as Locale) : techId;
  const seoTitle =
    page.frontmatter.seoTitle?.trim() ||
    (raw === 'fa'
      ? `${page.frontmatter.title} | آموزش ${techLabel} — مستندات MEGA JS`
      : `${page.frontmatter.title} | ${techLabel} Tutorial — MEGA JS Docs`);
  const seoDescription =
    page.frontmatter.seoDescription?.trim() || page.frontmatter.description;
  const keywords = page.frontmatter.keywords
    ?.split(',')
    .map((k) => k.trim())
    .filter(Boolean);

  const base = pageMetadata({
    locale: raw as Locale,
    title: seoTitle,
    description: seoDescription,
    path: `/docs/${techId}/${slug.join('/')}`,
    type: 'article',
    tags: keywords,
  });

  return {
    ...base,
    title: { absolute: seoTitle },
    keywords: keywords?.length ? keywords : undefined,
  };
}

/** Drop a leading markdown H1 that duplicates the page title (single H1 for Google). */
function stripDuplicateTitle(body: string, title: string) {
  const lines = body.split(/\r?\n/);
  if (!lines.length) return body;
  const first = lines[0].trim();
  if (first.startsWith('# ') && first.slice(2).trim() === title.trim()) {
    return lines.slice(1).join('\n').replace(/^\s+/, '');
  }
  return body;
}

export default async function DocsArticlePage({
  params,
}: {
  params: Promise<{ locale: string; tech: string; slug: string[] }>;
}) {
  const { locale: raw, tech: techId, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const tech = getTechMeta(techId);
  if (!tech) notFound();
  const page = getDocsPage(techId, locale, slug);
  if (!page) notFound();

  const dir = locale === 'fa' ? 'rtl' : 'ltr';
  const currentSlug = slug.join('/');
  const path = `/docs/${tech.id}/${currentSlug}`;
  const body = stripDuplicateTitle(page.body, page.frontmatter.title);

  const crumbs = jsonLdScript(
    breadcrumbJsonLd(locale, [
      { name: dict.docs.title, path: '/docs' },
      { name: localizeTitle(tech.title, locale), path: `/docs/${tech.id}` },
      { name: page.frontmatter.title, path },
    ]),
  );
  const article = jsonLdScript({
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: page.frontmatter.title,
    description: page.frontmatter.seoDescription || page.frontmatter.description,
    keywords: page.frontmatter.keywords || undefined,
    inLanguage: locale === 'fa' ? 'fa-IR' : 'en-US',
    mainEntityOfPage: absoluteUrl(localePath(locale, path)),
    author: { '@type': 'Organization', name: 'MEGA JS' },
    publisher: {
      '@type': 'Organization',
      name: 'MEGA JS',
      logo: { '@type': 'ImageObject', url: absoluteUrl('/logo-mark.svg') },
    },
    about: localizeTitle(tech.title, locale),
    isPartOf: {
      '@type': 'CreativeWork',
      name: localizeTitle(tech.seoTitle ?? tech.title, locale),
      url: absoluteUrl(localePath(locale, `/docs/${tech.id}`)),
    },
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14" dir={dir}>
      {crumbs ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: crumbs }} />
      ) : null}
      {article ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: article }} />
      ) : null}
      <div className="grid gap-10 lg:grid-cols-[15rem_minmax(0,1fr)]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="mb-4 text-sm">
            <Link href={`/${locale}/docs`} className="underline-offset-4 hover:underline">
              ← {dict.docs.title}
            </Link>
          </p>
          <DocsSidebar locale={locale} tech={tech} />
        </div>

        <article>
          <nav className="mb-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
            <Link href={`/${locale}/docs`} className="underline-offset-4 hover:underline">
              {dict.docs.title}
            </Link>
            {' / '}
            <Link
              href={`/${locale}/docs/${tech.id}`}
              className="underline-offset-4 hover:underline"
            >
              {localizeTitle(tech.title, locale)}
            </Link>
            {' / '}
            <span>{page.frontmatter.title}</span>
          </nav>

          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            {dict.docs.articleKicker}
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {page.frontmatter.title}
          </h1>
          {page.frontmatter.description ? (
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              {page.frontmatter.description}
            </p>
          ) : null}

          {(page.frontmatter.sources?.length || tech.sources?.length) ? (
            <p className="mt-4 text-xs text-muted-foreground" dir="ltr">
              {dict.docs.basedOn}{' '}
              {(page.frontmatter.sources ?? tech.sources)
                .map((s) => s.name)
                .join(' · ')}
            </p>
          ) : null}

          <div className="mt-10">
            <MarkdownBody content={body} demoteH1 />
          </div>

          <DocsPager locale={locale} tech={tech} currentSlug={currentSlug} />
        </article>
      </div>
    </div>
  );
}
