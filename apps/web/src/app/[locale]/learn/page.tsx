import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProductCard } from '@/components/woodmart/product-card';
import { WoodContainer, WoodSectionTitle } from '@/components/woodmart/section-title';
import { getDictionary } from '@/i18n/dictionaries';
import { fetchTracks } from '@/lib/catalog';
import { pageMetadata } from '@/lib/seo';
import { isLocale, type Locale } from '@/lib/utils';

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ q?: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const { q } = await searchParams;
  const locale = isLocale(raw) ? raw : 'fa';
  const dict = getDictionary(locale);
  const hasQuery = Boolean((q ?? '').trim());
  return pageMetadata({
    locale,
    title: dict.learn.title,
    description: dict.learn.subtitle,
    path: '/learn',
    // Search result URLs are thin duplicates — keep canonical hub indexable only
    noIndex: hasQuery,
  });
}
export default async function LearnPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ q?: string }>;
}) {
  const { locale: raw } = await params;
  const { q } = await searchParams;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const w = dict.woodmart;
  const tracks = await fetchTracks(locale);
  const query = (q ?? '').trim().toLowerCase();

  const productLabels = {
    view: w.product.view,
    wishlist: w.product.wishlist,
    enroll: w.product.enroll,
    free: w.product.free,
    sale: w.product.sale ?? w.product.hot,
    comingSoon: dict.sections.comingSoon,
  };

  const filtered = tracks
    .map((track) => ({
      ...track,
      courses: query
        ? track.courses.filter(
            (c) =>
              c.title.toLowerCase().includes(query) ||
              c.summary.toLowerCase().includes(query) ||
              track.title.toLowerCase().includes(query),
          )
        : track.courses,
    }))
    .filter((t) => !query || t.courses.length > 0);

  return (
    <div className="bg-background">
      <div className="border-b border-border bg-[#1a1a1a] text-white">
        <WoodContainer className="py-12 sm:py-16">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            {w.shop.kicker}
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {dict.learn.title}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            {dict.learn.subtitle}
          </p>
          <p className="mt-4">
            <a
              href={`/${locale}/learn/categories`}
              className="text-xs font-bold uppercase tracking-wide text-primary underline-offset-4 hover:underline"
            >
              {dict.articles.productCategories}
            </a>
          </p>
          {query ? (
            <p className="mt-4 font-mono text-xs text-primary">
              {w.shop.resultsFor}: “{q}”
            </p>
          ) : null}
        </WoodContainer>
      </div>

      <WoodContainer className="py-12 sm:py-16">
        <div className="space-y-14">
          {filtered.map((track) => (
            <section key={track.slug} id={track.slug} className="scroll-mt-36">
              <WoodSectionTitle
                kicker={`Y${track.yearPlan}`}
                title={track.title}
                body={track.summary}
              />
              <div className="mj-stagger grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {track.courses.map((course) => (
                  <ProductCard
                    key={course.slug}
                    course={course}
                    locale={locale}
                    labels={productLabels}
                  />
                ))}
              </div>
            </section>
          ))}
          {!filtered.length ? (
            <p className="text-sm text-muted-foreground">{dict.empty}</p>
          ) : null}
        </div>
      </WoodContainer>
    </div>
  );
}
