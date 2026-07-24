import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { DocsLiveEditor } from '@/components/docs-live-editor';
import { DocsPager } from '@/components/docs-pager';
import { DocsSidebar } from '@/components/docs-sidebar';
import { MarkdownBody } from '@/components/markdown-body';
import { getDictionary } from '@/i18n/dictionaries';
import { extractFirstHtmlFence } from '@/lib/docs/extract-html';
import { getDocsPage, getTechMeta, listDocSlugs, listTechIds } from '@/lib/docs/loader';
import {
  flattenNav,
  getTrack,
  localizeTitle,
  type DocsTrackId,
} from '@/lib/docs/types';
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
  const locale = raw as Locale;
  const page = getDocsPage(techId, locale, slug);
  if (!page) {
    // Track hub URL like /docs/html/learn — metadata for the track
    const techOnly = getTechMeta(techId);
    const maybeTrack = techOnly && slug.length === 1 ? getTrack(techOnly, slug[0]) : null;
    if (maybeTrack) {
      const title = localizeTitle(maybeTrack.seoTitle ?? maybeTrack.title, locale);
      const description = localizeTitle(
        maybeTrack.seoDescription ?? maybeTrack.description,
        locale,
      );
      return {
        ...pageMetadata({
          locale,
          title,
          description,
          path: `/docs/${techId}/${slug[0]}`,
        }),
        title: { absolute: title },
      };
    }
    return {};
  }
  const tech = getTechMeta(techId);
  const trackId = slug[0] as DocsTrackId | undefined;
  const track = tech && trackId ? getTrack(tech, trackId) : null;
  const techLabel = tech ? localizeTitle(tech.title, locale) : techId;
  const trackLabel = track ? localizeTitle(track.title, locale) : '';

  const seoTitle =
    page.frontmatter.seoTitle?.trim() ||
    (locale === 'fa'
      ? `${page.frontmatter.title} | ${trackLabel || 'مستندات'} ${techLabel} — MEGA JS`
      : `${page.frontmatter.title} | ${techLabel} ${trackLabel || 'Docs'} — MEGA JS`);
  const seoDescription =
    page.frontmatter.seoDescription?.trim() || page.frontmatter.description;
  const keywords = page.frontmatter.keywords
    ?.split(',')
    .map((k) => k.trim())
    .filter(Boolean);

  const base = pageMetadata({
    locale,
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

  // /docs/html/learn → first lesson in learn track
  if (tech.tracks?.length && slug.length === 1) {
    const track = getTrack(tech, slug[0]);
    if (track) {
      const first = flattenNav(track.nav)[0]?.slug ?? track.nav[0]?.slug;
      if (first) redirect(`/${locale}/docs/${techId}/${track.id}/${first}`);
    }
  }

  const page = getDocsPage(techId, locale, slug);
  if (!page) notFound();

  const trackId = slug[0];
  const track = tech.tracks?.length ? getTrack(tech, trackId) : null;
  // If tech has tracks, first segment must be a valid track
  if (tech.tracks?.length && !track) notFound();

  const dir = locale === 'fa' ? 'rtl' : 'ltr';
  const currentSlug = slug.join('/');
  const path = `/docs/${tech.id}/${currentSlug}`;
  const body = stripDuplicateTitle(page.body, page.frontmatter.title);
  const showLiveEditor = Boolean(track?.liveEditor);
  const playgroundHtml =
    page.frontmatter.playground?.trim() || extractFirstHtmlFence(page.body) || null;

  const crumbItems = [
    { name: dict.docs.title, path: '/docs' },
    { name: localizeTitle(tech.title, locale), path: `/docs/${tech.id}` },
  ];
  if (track) {
    crumbItems.push({
      name: localizeTitle(track.title, locale),
      path: `/docs/${tech.id}/${track.id}`,
    });
  }
  crumbItems.push({ name: page.frontmatter.title, path });

  const crumbs = jsonLdScript(breadcrumbJsonLd(locale, crumbItems));
  const schemaType = track?.id === 'reference' ? 'TechArticle' : track?.id === 'official' ? 'TechArticle' : 'LearningResource';
  const article = jsonLdScript({
    '@context': 'https://schema.org',
    '@type': schemaType,
    headline: page.frontmatter.title,
    description: page.frontmatter.seoDescription || page.frontmatter.description,
    keywords: page.frontmatter.keywords || undefined,
    inLanguage: locale === 'fa' ? 'fa-IR' : 'en-US',
    mainEntityOfPage: absoluteUrl(localePath(locale, path)),
    learningResourceType: track?.id === 'learn' ? 'Tutorial' : undefined,
    author: { '@type': 'Organization', name: 'MEGA JS' },
    publisher: {
      '@type': 'Organization',
      name: 'MEGA JS',
      logo: { '@type': 'ImageObject', url: absoluteUrl('/logo-mark.svg') },
    },
    about: localizeTitle(tech.title, locale),
    isPartOf: {
      '@type': 'CreativeWork',
      name: track
        ? localizeTitle(track.seoTitle ?? track.title, locale)
        : localizeTitle(tech.seoTitle ?? tech.title, locale),
      url: absoluteUrl(
        localePath(locale, track ? `/docs/${tech.id}/${track.id}` : `/docs/${tech.id}`),
      ),
    },
    citation: track?.source?.url || page.frontmatter.sources?.[0]?.url,
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
          <DocsSidebar locale={locale} tech={tech} activeTrackId={track?.id} />
        </div>

        <article>
          <nav className="mb-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
            {crumbItems.map((c, i) => (
              <span key={c.path}>
                {i > 0 ? ' / ' : null}
                {i < crumbItems.length - 1 ? (
                  <Link
                    href={localePath(locale, c.path)}
                    className="underline-offset-4 hover:underline"
                  >
                    {c.name}
                  </Link>
                ) : (
                  <span>{c.name}</span>
                )}
              </span>
            ))}
          </nav>

          {track ? (
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              {localizeTitle(track.title, locale)}
              {track.liveEditor
                ? locale === 'fa'
                  ? ' · ادیتور زنده'
                  : ' · live editor'
                : ''}
            </p>
          ) : (
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              {dict.docs.articleKicker}
            </p>
          )}

          <h1 className="mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {page.frontmatter.title}
          </h1>
          {page.frontmatter.description ? (
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              {page.frontmatter.description}
            </p>
          ) : null}

          {(page.frontmatter.sources?.length || track?.source || tech.sources?.length) ? (
            <p className="mt-4 text-xs text-muted-foreground" dir="ltr">
              {dict.docs.basedOn}{' '}
              {(page.frontmatter.sources ??
                (track?.source ? [track.source] : tech.sources))
                .map((s) => s.name)
                .join(' · ')}
            </p>
          ) : null}

          {showLiveEditor && playgroundHtml ? (
            <DocsLiveEditor initialHtml={playgroundHtml} locale={locale} />
          ) : null}

          <div className="mt-10">
            <MarkdownBody content={body} demoteH1 />
          </div>

          <DocsPager
            locale={locale}
            tech={tech}
            currentSlug={currentSlug}
            track={track}
          />
        </article>
      </div>
    </div>
  );
}
