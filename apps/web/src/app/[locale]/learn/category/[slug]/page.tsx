import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ProductCard } from '@/components/woodmart/product-card';
import { TermCardsGrid } from '@/components/term-card';
import { getDictionary } from '@/i18n/dictionaries';
import { pageMetadata } from '@/lib/seo';
import { isLocale, type Locale } from '@/lib/utils';

const API = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:4000/api';

async function fetchTerm(slug: string, locale: string) {
  const res = await fetch(
    `${API}/public/terms?taxonomy=product_category&slug=${encodeURIComponent(slug)}&locale=${locale}`,
    { next: { revalidate: 120, tags: ["catalog", "courses"] } },
  );
  if (!res.ok) return null;
  return res.json();
}

async function fetchCourses(locale: string, slug: string) {
  const res = await fetch(
    `${API}/public/courses?locale=${locale}&category=${encodeURIComponent(slug)}`,
    { next: { revalidate: 120, tags: ["catalog", "courses"] } },
  );
  if (!res.ok) return [];
  return res.json();
}

async function fetchCategories(locale: string) {
  const res = await fetch(
    `${API}/public/terms?taxonomy=product_category&locale=${locale}`,
    { next: { revalidate: 120, tags: ["catalog", "courses"] } },
  );
  if (!res.ok) return [];
  return res.json();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) return {};
  const term = await fetchTerm(slug, raw);
  return pageMetadata({
    locale: raw,
    title: term?.name ?? slug,
    description: term?.description || undefined,
    path: `/learn/category/${slug}`,
    image: term?.imageUrl || term?.seo?.ogImageUrl,
  });
}

export default async function ProductCategoryPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const w = dict.woodmart;
  const term = await fetchTerm(slug, locale);
  if (!term) notFound();
  const [courses, allCats] = await Promise.all([
    fetchCourses(locale, slug),
    fetchCategories(locale),
  ]);

  const productLabels = {
    view: w.product.view,
    wishlist: w.product.wishlist,
    enroll: w.product.enroll,
    free: w.product.free,
    sale: w.product.sale ?? w.product.hot,
    comingSoon: dict.sections.comingSoon,
  };

  const siblings = allCats.filter(
    (c: any) => c.parentId === term.parentId || (!c.parentId && !term.parentId),
  );

  return (
    <div className="bg-background">
      <div className="border-b border-border bg-[#1a1a1a] text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <nav className="mb-4 text-sm text-white/50">
            <Link href={`/${locale}/learn`} className="hover:text-primary">
              {dict.nav.learn}
            </Link>
            {' / '}
            <span>{term.name}</span>
          </nav>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
            {dict.articles.productCategory}
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {term.name}
          </h1>
          {term.description ? (
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">{term.description}</p>
          ) : null}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {siblings.length > 1 ? (
          <div className="mb-10">
            <TermCardsGrid
              terms={siblings.slice(0, 8)}
              locale={locale}
              hrefBase={`/${locale}/learn/category`}
            />
          </div>
        ) : null}

        <div className="mj-stagger grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {courses.map((course: any) => (
            <ProductCard
              key={course.slug}
              course={{
                slug: course.slug,
                title: course.title,
                summary: course.summary,
                status: course.status,
                accessTier: course.accessTier,
                priceCents: course.priceCents,
                salePriceCents: course.salePriceCents,
                coverUrl: course.coverUrl,
                featured: course.featured,
                level: course.level,
                estimatedMinutes: course.estimatedMinutes,
              }}
              locale={locale}
              labels={productLabels}
            />
          ))}
        </div>
        {!courses.length ? (
          <p className="text-sm text-muted-foreground">{dict.empty}</p>
        ) : null}
      </div>
    </div>
  );
}
