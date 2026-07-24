import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { DocsPager } from '@/components/docs-pager';
import { DocsSidebar } from '@/components/docs-sidebar';
import { MarkdownBody } from '@/components/markdown-body';
import { getDictionary } from '@/i18n/dictionaries';
import { getDocsPage, getTechMeta, listDocSlugs, listTechIds } from '@/lib/docs/loader';
import { localizeTitle } from '@/lib/docs/types';
import { pageMetadata } from '@/lib/seo';
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
  return pageMetadata({
    locale: raw as Locale,
    title: page.frontmatter.title,
    description: page.frontmatter.description,
    path: `/docs/${techId}/${slug.join('/')}`,
  });
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

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14" dir={dir}>
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
            <MarkdownBody content={page.body} />
          </div>

          <DocsPager locale={locale} tech={tech} currentSlug={currentSlug} />
        </article>
      </div>
    </div>
  );
}
