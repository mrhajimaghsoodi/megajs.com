import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getDictionary } from '@/i18n/dictionaries';
import { API_BASE, isLocale, type Locale } from '@/lib/utils';

async function getTracks(locale: Locale) {
  try {
    const res = await fetch(`${API_BASE}/catalog/tracks?locale=${locale}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    return (await res.json()) as Array<{
      slug: string;
      yearPlan: number;
      status: string;
      title: string;
      summary: string;
      courses: Array<{
        slug: string;
        title: string;
        summary: string;
        status: string;
        accessTier: string;
      }>;
    }>;
  } catch {
    return [];
  }
}

export default async function LearnPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const tracks = await getTracks(locale);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-4xl font-bold">{dict.nav.learn}</h1>
      <p className="mt-3 max-w-2xl text-[var(--mj-muted-fg)]">{dict.sections.roadmapBody}</p>
      <div className="mt-10 space-y-10">
        {tracks.map((track) => (
          <section key={track.slug} className="border-t border-[var(--mj-border)] pt-8">
            <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="font-mono text-xs text-[var(--mj-muted-fg)]">Y{track.yearPlan}</p>
                <h2 className="font-display text-2xl font-bold">{track.title}</h2>
                <p className="text-sm text-[var(--mj-muted-fg)]">{track.summary}</p>
              </div>
              {track.status === 'coming_soon' ? (
                <span className="rounded-full bg-[var(--mj-muted)] px-3 py-1 text-xs">
                  {dict.sections.comingSoon}
                </span>
              ) : null}
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {track.courses.map((course) => (
                <Link
                  key={course.slug}
                  href={`/${locale}/learn/course/${course.slug}`}
                  className="cursor-pointer rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-4 transition-colors hover:bg-[var(--mj-muted)]"
                >
                  <h3 className="font-semibold">{course.title}</h3>
                  <p className="mt-1 text-sm text-[var(--mj-muted-fg)]">{course.summary}</p>
                  <p className="mt-3 font-mono text-xs uppercase tracking-wide text-[var(--mj-muted-fg)]">
                    {course.accessTier}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
