import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { getTechMeta } from '@/lib/docs/loader';
import { localizeTitle } from '@/lib/docs/types';
import { pageMetadata } from '@/lib/seo';
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
        ? `آموزش ${label} کامل و قدم‌به‌قدم | مستندات MEGA JS`
        : `${label} Tutorial — Complete Step-by-Step Guide | MEGA JS Docs`;
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

/** Tech landing → first nav page (usually introduction) */
export default async function DocsTechIndexPage({
  params,
}: {
  params: Promise<{ locale: string; tech: string }>;
}) {
  const { locale: raw, tech: techId } = await params;
  if (!isLocale(raw)) notFound();
  const tech = getTechMeta(techId);
  if (!tech) notFound();
  const first = tech.nav[0]?.slug ?? 'introduction';
  // Prefer first leaf if first item is a section with children
  const leaf = tech.nav[0]?.children?.[0]?.slug ?? first;
  redirect(`/${raw}/docs/${techId}/${leaf}`);
}
