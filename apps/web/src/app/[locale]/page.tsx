import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BlogTeaser } from '@/components/woodmart/blog-teaser';
import { BenefitsStrip } from '@/components/woodmart/benefits';
import { CategoryGrid } from '@/components/woodmart/category-grid';
import { JsonLd } from '@/components/json-ld';
import { ProductCard } from '@/components/woodmart/product-card';
import { PromoBanners } from '@/components/woodmart/promo-banners';
import { WoodContainer, WoodSectionTitle } from '@/components/woodmart/section-title';
import { Button } from '@/components/ui/button';
import { getDictionary } from '@/i18n/dictionaries';
import { fetchArticles, fetchTracks, flattenCourses } from '@/lib/catalog';
import {
  organizationJsonLd,
  pageMetadata,
  websiteJsonLd,
} from '@/lib/seo';
import { isLocale, type Locale } from '@/lib/utils';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : 'fa';
  const dict = getDictionary(locale);
  return pageMetadata({
    locale,
    title: dict.brand,
    description: dict.tagline,
    path: '/',
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const w = dict.woodmart;
  const [tracks, articles] = await Promise.all([
    fetchTracks(locale),
    fetchArticles(locale, 3),
  ]);
  const courses = flattenCourses(tracks).slice(0, 8);
  const featured = courses.slice(0, 4);
  const bestsellers = courses.slice(4, 8).length
    ? courses.slice(4, 8)
    : courses.slice(0, 4);

  const productLabels = {
    view: w.product.view,
    wishlist: w.product.wishlist,
    enroll: w.product.enroll,
    free: w.product.free,
    sale: w.product.hot,
    comingSoon: dict.sections.comingSoon,
  };

  return (
    <>
      <JsonLd data={organizationJsonLd(locale)} />
      <JsonLd data={websiteJsonLd(locale, { name: dict.brand, description: dict.tagline })} />
      {/* Full-bleed WoodMart hero — brand first, one CTA group, one visual plane */}
      <section className="relative isolate min-h-[min(88vh,52rem)] overflow-hidden bg-[#0c0c0c] text-white">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(115deg, #0c0c0c 0%, #16140a 42%, #1a1608 68%, #0c0c0c 100%)',
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,212,0,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,212,0,0.07) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -end-24 top-1/4 size-[36rem] rounded-full bg-primary/20 blur-3xl mj-hero-glow"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -start-20 bottom-0 size-[28rem] rounded-full bg-[#ffd400]/10 blur-3xl"
          aria-hidden
        />

        <WoodContainer className="relative z-10 flex min-h-[min(88vh,52rem)] flex-col justify-center py-20">
          <div className="mj-fade-up max-w-3xl">
            <p className="font-display text-[clamp(3.25rem,11vw,6.5rem)] font-bold leading-[0.9] tracking-tight text-primary">
              {dict.brand}
            </p>
            <h1 className="mt-6 max-w-2xl text-2xl font-medium leading-snug text-white sm:text-3xl lg:text-4xl">
              {w.hero.headline}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
              {w.hero.support}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-12 rounded-none px-7 text-sm font-bold">
                <Link href={`/${locale}/learn`}>{w.hero.ctaShop}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-none border-white/20 bg-transparent px-7 text-sm font-semibold text-white hover:bg-white/5 hover:text-white"
              >
                <Link href={`/${locale}/login`}>{dict.ctaStart}</Link>
              </Button>
            </div>
          </div>
        </WoodContainer>
      </section>

      {/* Benefits strip */}
      <BenefitsStrip items={w.benefits} />

      {/* Categories */}
      <section className="border-b border-border bg-background py-16 sm:py-20">
        <WoodContainer>
          <WoodSectionTitle
            kicker={w.categories.kicker}
            title={w.categories.title}
            body={w.categories.body}
            actionHref={`/${locale}/learn`}
            actionLabel={w.viewAll}
          />
          <CategoryGrid
            tracks={tracks}
            locale={locale}
            courseLabel={w.categories.courseCount}
          />
          {!tracks.length ? (
            <p className="text-sm text-muted-foreground">{dict.empty}</p>
          ) : null}
        </WoodContainer>
      </section>

      {/* Featured products */}
      <section className="border-b border-border bg-muted/20 py-16 sm:py-20">
        <WoodContainer>
          <WoodSectionTitle
            kicker={w.featured.kicker}
            title={w.featured.title}
            body={w.featured.body}
            actionHref={`/${locale}/learn`}
            actionLabel={w.viewAll}
          />
          <div className="mj-stagger grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((course) => (
              <ProductCard
                key={course.slug}
                course={course}
                locale={locale}
                labels={productLabels}
              />
            ))}
          </div>
          {!featured.length ? (
            <p className="text-sm text-muted-foreground">{w.featured.empty}</p>
          ) : null}
        </WoodContainer>
      </section>

      {/* Promo banners */}
      <section className="border-b border-border bg-background py-16 sm:py-20">
        <WoodContainer>
          <PromoBanners
            locale={locale}
            items={w.promos.map((p) => ({
              ...p,
              href: p.href.replace('{locale}', locale),
            }))}
          />
        </WoodContainer>
      </section>

      {/* Bestsellers */}
      <section className="border-b border-border bg-background py-16 sm:py-20">
        <WoodContainer>
          <WoodSectionTitle
            kicker={w.bestsellers.kicker}
            title={w.bestsellers.title}
            body={w.bestsellers.body}
            actionHref={`/${locale}/pricing`}
            actionLabel={dict.nav.pricing}
          />
          <div className="mj-stagger grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {bestsellers.map((course) => (
              <ProductCard
                key={`best-${course.slug}`}
                course={course}
                locale={locale}
                labels={productLabels}
              />
            ))}
          </div>
        </WoodContainer>
      </section>

      {/* Blog */}
      <section className="border-b border-border bg-muted/20 py-16 sm:py-20">
        <WoodContainer>
          <WoodSectionTitle
            kicker={w.blog.kicker}
            title={w.blog.title}
            body={w.blog.body}
            actionHref={`/${locale}/articles`}
            actionLabel={w.viewAll}
          />
          <BlogTeaser
            articles={articles}
            locale={locale}
            emptyTopics={dict.articles.topics}
            emptyLabel={dict.articles.empty}
            readMore={w.blog.readMore}
          />
        </WoodContainer>
      </section>
    </>
  );
}
