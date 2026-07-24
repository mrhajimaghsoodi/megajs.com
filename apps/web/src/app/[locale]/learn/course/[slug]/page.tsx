import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/json-ld';
import { getDictionary } from '@/i18n/dictionaries';
import { breadcrumbJsonLd, courseJsonLd, pageMetadata } from '@/lib/seo';
import { API_BASE, isLocale, type Locale } from '@/lib/utils';

async function getCourse(slug: string, locale: Locale) {
  try {
    const res = await fetch(`${API_BASE}/catalog/courses/${slug}?locale=${locale}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale = (isLocale(raw) ? raw : 'fa') as Locale;
  const course = await getCourse(slug, locale);
  const title = course?.i18n?.[0]?.title ?? slug;
  const summary = course?.i18n?.[0]?.summary ?? '';
  return pageMetadata({
    locale,
    title,
    description: summary || undefined,
    path: `/learn/course/${slug}`,
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
  const course = await getCourse(slug, locale);
  if (!course) notFound();

  const title = course.i18n?.[0]?.title ?? course.slug;
  const summary = course.i18n?.[0]?.summary ?? '';

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <JsonLd
        data={courseJsonLd({
          locale,
          name: title,
          description: summary,
          path: `/learn/course/${slug}`,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd(locale, [
          { name: 'Home', path: '/' },
          { name: dict.nav.learn, path: '/learn' },
          { name: title, path: `/learn/course/${slug}` },
        ])}
      />
      <Link href={`/${locale}/learn`} className="text-sm text-[var(--mj-muted-fg)] hover:underline">
        ← {dict.nav.learn}
      </Link>
      <h1 className="font-display mt-4 text-4xl font-bold">{title}</h1>
      <p className="mt-3 text-[var(--mj-muted-fg)]">{summary}</p>
      <p className="mt-2 font-mono text-xs uppercase tracking-wide text-[var(--mj-muted-fg)]">
        {course.accessTier}
      </p>
      <div className="mt-10 space-y-8">
        {(course.modules ?? []).map((mod: any) => (
          <section key={mod.id}>
            <h2 className="font-display text-xl font-semibold">
              {mod.i18n?.[0]?.title ?? mod.slug}
            </h2>
            <ul className="mt-3 space-y-2">
              {(mod.lessons ?? []).map((lesson: any) => (
                <li key={lesson.id}>
                  <div className="flex items-center justify-between gap-3 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] px-4 py-3">
                    <span>{lesson.i18n?.[0]?.title ?? lesson.slug}</span>
                    {lesson.isFreePreview ? (
                      <span className="rounded-full bg-[var(--mj-accent)] px-2 py-0.5 text-xs font-semibold text-[var(--mj-accent-fg)]">
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
  );
}
