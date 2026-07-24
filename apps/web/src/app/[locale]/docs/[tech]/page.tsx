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
  const tech = getTechMeta(techId);
  if (!tech) return {};
  return pageMetadata({
    locale: raw as Locale,
    title: localizeTitle(tech.title, raw as Locale),
    description: localizeTitle(tech.description, raw as Locale),
    path: `/docs/${techId}`,
  });
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
  redirect(`/${raw}/docs/${techId}/${first}`);
}
