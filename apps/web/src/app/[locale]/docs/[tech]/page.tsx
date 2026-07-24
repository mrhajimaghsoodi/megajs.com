import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { getDictionary } from '@/i18n/dictionaries';
import { getTechMeta, listDocSlugs } from '@/lib/docs/loader';
import { flattenNav, localizeTitle } from '@/lib/docs/types';
import {
  absoluteUrl,
  breadcrumbJsonLd,
  jsonLdScript,
  localePath,
  pageMetadata,
} from '@/lib/seo';
import { isLocale, type Locale } from '@/lib/utils';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; tech: string }>;
}): Promise<Metadata> {
  const { locale: raw, tech: techId } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const tech = getTechMeta(techId);
  if (!tech) return {};
  const label = localizeTitle(tech.title, locale);
  const title =
    tech.seoTitle
      ? localizeTitle(tech.seoTitle, locale)
      : locale === 'fa'
        ? `${label} — آموزش، مرجع MDN و مستندات رسمی | MEGA JS`
        : `${label} — Tutorial, MDN Reference & Official Docs | MEGA JS`;
  const description =
    tech.seoDescription
      ? localizeTitle(tech.seoDescription, locale)
      : localizeTitle(tech.description, locale);
  return {
    ...pageMetadata({
      locale,
      title,
      description,
      path: `/docs/${techId}`,
    }),
    title: { absolute: title },
  };
}

export default async function DocsTechIndexPage({
  params,
}: {
  params: Promise<{ locale: string; tech: string }>;
}) {
  const { locale: raw, tech: techId } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const tech = getTechMeta(techId);
  if (!tech) notFound();

  // Legacy single-nav techs: redirect to first page
  if (!tech.tracks?.length) {
    const first = tech.nav?.[0]?.slug ?? listDocSlugs(techId, locale)[0];
    if (!first) notFound();
    redirect(`/${locale}/docs/${techId}/${first}`);
  }

  const crumbs = jsonLdScript(
    breadcrumbJsonLd(locale, [
      { name: dict.docs.title, path: '/docs' },
      { name: localizeTitle(tech.title, locale), path: `/docs/${tech.id}` },
    ]),
  );
  const collection = jsonLdScript({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: localizeTitle(tech.seoTitle ?? tech.title, locale),
    description: localizeTitle(tech.seoDescription ?? tech.description, locale),
    inLanguage: locale === 'fa' ? 'fa-IR' : 'en-US',
    url: absoluteUrl(localePath(locale, `/docs/${tech.id}`)),
    hasPart: tech.tracks.map((t) => ({
      '@type': 'CreativeWork',
      name: localizeTitle(t.title, locale),
      description: localizeTitle(t.description, locale),
      url: absoluteUrl(localePath(locale, `/docs/${tech.id}/${t.id}`)),
    })),
  });

  return (
    <div
      className="mx-auto max-w-6xl px-4 py-14 sm:px-6"
      dir={locale === 'fa' ? 'rtl' : 'ltr'}
    >
      {crumbs ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: crumbs }} />
      ) : null}
      {collection ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: collection }} />
      ) : null}

      <nav className="mb-6 text-sm text-muted-foreground">
        <Link href={`/${locale}/docs`} className="underline-offset-4 hover:underline">
          {dict.docs.title}
        </Link>
        {' / '}
        <span>{localizeTitle(tech.title, locale)}</span>
      </nav>

      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {localizeTitle(tech.title, locale)}
      </p>
      <h1 className="mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">
        {localizeTitle(tech.seoTitle ?? tech.title, locale)}
      </h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">
        {localizeTitle(tech.seoDescription ?? tech.description, locale)}
      </p>

      <ul className="mt-12 grid gap-6 md:grid-cols-3">
        {tech.tracks.map((track) => {
          const firstLeaf =
            flattenNav(track.nav)[0]?.slug ?? track.nav[0]?.slug ?? 'introduction';
          const href = `/${locale}/docs/${tech.id}/${track.id}/${firstLeaf}`;
          const count = flattenNav(track.nav).length;
          return (
            <li key={track.id}>
              <Link
                href={href}
                className="group block h-full space-y-3 border-b border-border pb-5 transition-colors hover:border-[#ffd400]"
              >
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  {track.id}
                  {track.liveEditor
                    ? locale === 'fa'
                      ? ' · ادیتور زنده'
                      : ' · live editor'
                    : ''}
                </p>
                <h2 className="font-display text-2xl font-bold tracking-tight group-hover:underline">
                  {localizeTitle(track.title, locale)}
                </h2>
                <p className="text-sm leading-6 text-muted-foreground">
                  {localizeTitle(track.description, locale)}
                </p>
                <p className="font-mono text-[11px] text-muted-foreground" dir="ltr">
                  {track.source.name} · {count}{' '}
                  {locale === 'fa' ? 'درس/صفحه' : 'pages'}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
