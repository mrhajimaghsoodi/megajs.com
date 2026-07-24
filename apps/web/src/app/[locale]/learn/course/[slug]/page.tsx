import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/json-ld';
import { MarkdownBody } from '@/components/markdown-body';
import { MediaImage } from '@/components/media-image';
import { Button } from '@/components/ui/button';
import { getDictionary } from '@/i18n/dictionaries';
import {
  effectivePriceCents,
  formatDuration,
  formatMoney,
  formatPrice,
} from '@/lib/catalog';
import { breadcrumbJsonLd, buildPublicMetadata, courseJsonLd } from '@/lib/seo';
import { API_BASE, isLocale, type Locale } from '@/lib/utils';

async function getCourse(slug: string, locale: Locale) {
  try {
    const res = await fetch(`${API_BASE}/catalog/courses/${slug}?locale=${locale}`, {
      next: { revalidate: 120, tags: ['catalog', 'courses'] },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

function termName(term: any, locale: string) {
  return (
    term?.i18n?.find((x: any) => x.locale === locale)?.name ??
    term?.i18n?.[0]?.name ??
    term?.slug
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale = (isLocale(raw) ? raw : 'fa') as Locale;
  const course = await getCourse(slug, locale);
  if (!course) return {};
  const title = course.title || course.i18n?.[0]?.title || slug;
  const summary = course.summary || course.i18n?.[0]?.summary || '';
  return buildPublicMetadata({
    locale,
    fallbackTitle: title,
    fallbackDescription: summary,
    seo: course.seo,
    defaultPath: `/learn/course/${slug}`,
    ogImageFallback: course.coverUrl || course.bannerUrl,
  });
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const p = dict.woodmart.product;
  const course = await getCourse(slug, locale);
  if (!course) notFound();

  const title = course.title || course.i18n?.[0]?.title || course.slug;
  const summary = course.summary || course.i18n?.[0]?.summary || '';
  const description = course.description || course.i18n?.[0]?.description || '';
  const banner = course.bannerUrl || course.coverUrl;
  const showCoverSeparate = Boolean(
    course.coverUrl && course.bannerUrl && course.coverUrl !== course.bannerUrl,
  );
  const gallery: string[] = Array.isArray(course.gallery) ? course.gallery : [];
  const onSale =
    course.accessTier !== 'free' &&
    course.salePriceCents != null &&
    course.salePriceCents > 0 &&
    course.salePriceCents < (course.priceCents ?? 0);
  const priceLabel = formatPrice(
    locale,
    course.accessTier,
    course.priceCents,
    p.free,
    course.salePriceCents,
  );
  const regularLabel = onSale ? formatMoney(locale, course.priceCents) : null;
  const duration = formatDuration(locale, course.estimatedMinutes);
  const moduleCount = course.modules?.length ?? 0;
  const lessonCount = course.lessonCount ?? 0;
  const cats = (course.taxonomies ?? [])
    .map((t: any) => t.term)
    .filter((t: any) => t?.taxonomy === 'product_category');
  const tags = (course.taxonomies ?? [])
    .map((t: any) => t.term)
    .filter((t: any) => t?.taxonomy === 'product_tag');
  const isSoon = course.status === 'coming_soon';
  const enrollHref =
    course.accessTier === 'free'
      ? `/${locale}/login`
      : `/${locale}/pricing`;

  return (
    <article>
      <JsonLd
        data={courseJsonLd({
          locale,
          name: title,
          description: summary,
          path: `/learn/course/${slug}`,
          image: course.coverUrl || course.bannerUrl,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd(locale, [
          { name: 'Home', path: '/' },
          { name: dict.nav.learn, path: '/learn' },
          { name: title, path: `/learn/course/${slug}` },
        ])}
      />

      {banner ? (
        <div className="relative isolate min-h-[14rem] w-full overflow-hidden bg-[#0c0c0c] sm:min-h-[18rem]">
          <MediaImage
            src={banner}
            alt=""
            fill
            priority
            sizes="100vw"
            className="opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
        </div>
      ) : null}

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div>
          <nav className="mb-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
            <Link href={`/${locale}/learn`} className="underline-offset-4 hover:underline">
              {dict.nav.learn}
            </Link>
            {cats.slice(0, 1).map((c: any) => (
              <span key={c.id}>
                {' / '}
                <Link
                  href={`/${locale}/learn/category/${c.slug}`}
                  className="underline-offset-4 hover:underline"
                >
                  {termName(c, locale)}
                </Link>
              </span>
            ))}
            {' / '}
            <span>{title}</span>
          </nav>

          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
          {summary ? (
            <p className="mt-4 text-lg leading-8 text-muted-foreground">{summary}</p>
          ) : null}

          <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide">
            {course.level ? (
              <span className="border border-border px-2 py-1">
                {p.level}: {course.level}
              </span>
            ) : null}
            {duration ? (
              <span className="border border-border px-2 py-1">
                {p.duration}: {duration}
              </span>
            ) : null}
            <span className="border border-border px-2 py-1">
              {moduleCount} {p.modules} · {lessonCount} {p.lessons}
            </span>
            <span className="border border-border px-2 py-1">{course.accessTier}</span>
          </div>

          {cats.length || tags.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {cats.map((c: any) => (
                <Link
                  key={c.id}
                  href={`/${locale}/learn/category/${c.slug}`}
                  className="border border-border px-2 py-1 text-xs font-semibold uppercase tracking-wide hover:border-primary hover:text-primary"
                >
                  {termName(c, locale)}
                </Link>
              ))}
              {tags.map((t: any) => (
                <span key={t.id} className="text-xs text-muted-foreground">
                  #{termName(t, locale)}
                </span>
              ))}
            </div>
          ) : null}

          {showCoverSeparate ? (
            <div className="relative mt-8 aspect-[16/9] overflow-hidden border border-border">
              <MediaImage
                src={course.coverUrl}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 48rem"
              />
            </div>
          ) : null}

          {gallery.length ? (
            <div className="mt-8">
              <h2 className="font-display text-lg font-semibold">{p.gallery}</h2>
              <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {gallery.map((url) => (
                  <div
                    key={url}
                    className="relative aspect-square overflow-hidden border border-border"
                  >
                    <MediaImage src={url} alt="" fill sizes="200px" />
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {description ? (
            <div className="mt-10">
              <h2 className="font-display text-2xl font-bold tracking-tight">{p.description}</h2>
              <div className="mt-4">
                <MarkdownBody content={description} />
              </div>
            </div>
          ) : null}

          <div className="mt-12 space-y-8">
            <h2 className="font-display text-2xl font-bold tracking-tight">{p.curriculum}</h2>
            {(course.modules ?? []).map((mod: any) => (
              <section key={mod.id}>
                <h3 className="font-display text-xl font-semibold">
                  {mod.i18n?.[0]?.title ?? mod.slug}
                </h3>
                <ul className="mt-3 space-y-2">
                  {(mod.lessons ?? []).map((lesson: any) => (
                    <li key={lesson.id}>
                      <div className="flex items-center justify-between gap-3 rounded-[var(--mj-radius-md)] border border-border px-4 py-3">
                        <span>{lesson.i18n?.[0]?.title ?? lesson.slug}</span>
                        {lesson.isFreePreview ? (
                          <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-semibold text-primary-foreground">
                            {dict.sections.free}
                          </span>
                        ) : null}
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>

        <aside className="h-fit space-y-4 lg:sticky lg:top-28">
          <div className="rounded-2xl border border-border bg-card p-5 shadow-[var(--mj-shadow-sm)]">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {p.details}
            </p>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="font-display text-2xl font-bold text-[var(--mj-yellow)]">
                {priceLabel}
              </span>
              {regularLabel ? (
                <span className="text-sm text-muted-foreground line-through">{regularLabel}</span>
              ) : null}
            </div>
            <p className="mt-1 font-mono text-[11px] text-muted-foreground" dir="ltr">
              {effectivePriceCents(course)} · {course.sku || course.slug}
            </p>
            {isSoon ? (
              <p className="mt-4 text-sm text-muted-foreground">{p.comingSoonNote}</p>
            ) : (
              <Button asChild className="mt-5 w-full cursor-pointer font-bold">
                <Link href={enrollHref}>{p.enrollCta}</Link>
              </Button>
            )}
            <p className="mt-3 text-center text-xs text-muted-foreground">{p.loginToEnroll}</p>
          </div>
        </aside>
      </div>
    </article>
  );
}
