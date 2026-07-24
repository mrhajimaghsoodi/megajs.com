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

      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: 'var(--mj-hero-wash)' }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -end-24 top-10 size-[28rem] rounded-full bg-[var(--mj-yellow)]/20 blur-3xl mj-soft-pulse"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -start-16 bottom-0 size-[22rem] rounded-full bg-black/20 blur-3xl dark:bg-white/5"
          aria-hidden
        />

        <WoodContainer className="relative z-10 grid min-h-[min(82vh,44rem)] items-center gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div className="mj-fade-up max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1 text-xs font-semibold shadow-[var(--mj-shadow-sm)]">
              <span className="size-2 rounded-full bg-[var(--mj-yellow)]" />
              {w.hero.badge}
            </p>
            <p className="mt-6 font-display text-[clamp(2.75rem,9vw,5.25rem)] font-bold leading-[0.95] tracking-tight text-foreground">
              <span className="text-[var(--mj-yellow)] drop-shadow-sm">{dict.brand.split(' ')[0]}</span>{' '}
              <span className="bg-[var(--mj-yellow)] px-2 text-[var(--mj-ink)]">
                {dict.brand.split(' ').slice(1).join(' ') || 'JS'}
              </span>
            </p>
            <h1 className="mt-6 max-w-xl text-xl font-medium leading-snug text-foreground sm:text-2xl lg:text-[1.75rem]">
              {w.hero.headline}
            </h1>
            <p className="mt-4 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">
              {w.hero.support}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-12 rounded-2xl px-7 text-sm font-bold shadow-[var(--mj-shadow-md)]">
                <Link href={`/${locale}/learn`}>{w.hero.ctaShop}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-2xl border-border bg-card/70 px-7 text-sm font-semibold backdrop-blur-sm"
              >
                <Link href={`/${locale}/login`}>{dict.ctaStart}</Link>
              </Button>
            </div>
          </div>

          <div className="mj-hero-float relative mx-auto hidden w-full max-w-md lg:block">
            <div className="absolute -inset-4 rounded-[2rem] bg-[var(--mj-yellow)]/15 blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-card p-6 shadow-[var(--mj-shadow-lg)]">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-bold text-[var(--mj-yellow)]">{w.hero.visualKicker}</span>
                <span className="rounded-lg bg-[var(--mj-yellow)] px-2 py-1 text-[10px] font-bold text-[var(--mj-ink)]">
                  MEGA
                </span>
              </div>
              <div className="space-y-3">
                {w.hero.visualLines.map((line) => (
                  <div
                    key={line}
                    className="rounded-xl border border-border bg-muted/50 px-4 py-3 text-sm font-medium"
                  >
                    {line}
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl bg-[var(--mj-yellow)] px-4 py-4 text-sm font-semibold text-[var(--mj-ink)]">
                {w.hero.visualCta}
              </div>
            </div>
          </div>
        </WoodContainer>
      </section>

      <BenefitsStrip items={w.benefits} />

      <section className="bg-background py-16 sm:py-20">
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

      <section className="bg-card py-16 sm:py-20">
        <WoodContainer>
          <WoodSectionTitle
            kicker={w.featured.kicker}
            title={w.featured.title}
            body={w.featured.body}
            actionHref={`/${locale}/learn`}
            actionLabel={w.viewAll}
          />
          <div className="mj-stagger grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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

      <section className="bg-background py-16 sm:py-20">
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

      <section className="bg-card py-16 sm:py-20">
        <WoodContainer>
          <WoodSectionTitle
            kicker={w.bestsellers.kicker}
            title={w.bestsellers.title}
            body={w.bestsellers.body}
            actionHref={`/${locale}/pricing`}
            actionLabel={dict.nav.pricing}
          />
          <div className="mj-stagger grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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

      <section className="bg-background py-16 sm:py-20">
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
