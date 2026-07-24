import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ElementorRenderer } from '@/components/elementor-renderer';
import type { BuilderDoc } from '@/components/elementor-types';
import { isLocale, type Locale } from '@/lib/utils';

const API = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:4000/api';
const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

async function fetchPage(slug: string, locale: string) {
  const res = await fetch(`${API}/public/pages/${slug}?locale=${locale}`, {
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
  const page = await fetchPage(slug, raw);
  if (!page) return {};
  const title = page.seo?.metaTitle || page.i18nSelected?.title || slug;
  const description = page.seo?.metaDescription || page.i18nSelected?.summary;
  return {
    title,
    description,
    alternates: {
      canonical: `${SITE}${page.seo?.canonicalPath || `/${raw}/p/${slug}`}`,
    },
    openGraph: {
      title,
      description,
      images: page.seo?.ogImageUrl ? [page.seo.ogImageUrl] : undefined,
    },
  };
}

export default async function CmsPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const page = await fetchPage(slug, locale);
  if (!page) notFound();

  const title = page.i18nSelected?.title ?? slug;
  const isElementor = page.template === 'elementor';
  const builder = (page.builder ?? { version: 1, sections: [] }) as BuilderDoc;

  if (isElementor && builder.sections?.length) {
    return (
      <div>
        <div className="sr-only">
          <h1>{title}</h1>
        </div>
        <ElementorRenderer doc={builder} />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="font-display text-4xl font-bold tracking-tight">{title}</h1>
      {page.i18nSelected?.summary ? (
        <p className="mt-4 text-lg text-[var(--mj-muted-fg)]">{page.i18nSelected.summary}</p>
      ) : null}
      <div className="prose prose-neutral mt-10 max-w-none whitespace-pre-wrap dark:prose-invert">
        {page.i18nSelected?.bodyMdx}
      </div>
    </div>
  );
}
