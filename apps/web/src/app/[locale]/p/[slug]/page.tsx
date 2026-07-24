import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ElementorRenderer } from '@/components/elementor-renderer';
import type { BuilderDoc } from '@/components/elementor-types';
import { MarkdownBody } from '@/components/markdown-body';
import { resolveMediaUrl } from '@/lib/media-url';
import { buildPublicMetadata } from '@/lib/seo';
import { isLocale, type Locale } from '@/lib/utils';

const API = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:4000/api';

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
  return buildPublicMetadata({
    locale: raw,
    fallbackTitle: page.i18nSelected?.title || slug,
    fallbackDescription: page.i18nSelected?.summary,
    seo: page.seo,
    defaultPath: `/p/${slug}`,
    ogImageFallback: page.coverUrl || page.bannerUrl,
  });
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
  const banner = page.bannerUrl || page.coverUrl;

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
    <article>
      {banner ? (
        <div className="relative isolate min-h-[12rem] w-full overflow-hidden bg-[#0c0c0c] sm:min-h-[16rem]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={resolveMediaUrl(banner)}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      ) : null}
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <h1 className="font-display text-4xl font-bold tracking-tight">{title}</h1>
        {page.i18nSelected?.summary ? (
          <p className="mt-4 text-lg text-muted-foreground">{page.i18nSelected.summary}</p>
        ) : null}
        {page.coverUrl && page.bannerUrl && page.coverUrl !== page.bannerUrl ? (
          <div className="mt-8 overflow-hidden border border-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={resolveMediaUrl(page.coverUrl)}
              alt=""
              className="h-auto w-full object-cover"
            />
          </div>
        ) : null}
        <div className="mt-10">
          <MarkdownBody content={page.i18nSelected?.bodyMdx ?? ''} />
        </div>
      </div>
    </article>
  );
}
