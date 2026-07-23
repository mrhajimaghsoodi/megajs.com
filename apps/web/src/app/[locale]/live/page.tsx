import { notFound } from 'next/navigation';
import { getDictionary } from '@/i18n/dictionaries';
import { API_BASE, isLocale, type Locale } from '@/lib/utils';

async function getLive(locale: Locale) {
  try {
    const res = await fetch(`${API_BASE}/catalog/live?locale=${locale}`, {
      next: { revalidate: 30 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export default async function LivePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const events = await getLive(locale);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-4xl font-bold">{dict.nav.live}</h1>
      <p className="mt-3 max-w-2xl text-[var(--mj-muted-fg)]">
        {locale === 'fa'
          ? 'پخش هم‌زمان در سایت، یوتیوب، آپارات و اینستاگرام'
          : 'Simulcast on site, YouTube, Aparat, and Instagram'}
      </p>
      <div className="mt-10 space-y-4">
        {events.map((event: any) => (
          <article
            key={event.id}
            className="rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-5"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="font-display text-2xl font-semibold">{event.title}</h2>
              <span className="rounded-full bg-[var(--mj-accent)] px-3 py-1 text-xs font-semibold text-[var(--mj-accent-fg)]">
                {event.status}
              </span>
            </div>
            <p className="mt-2 text-[var(--mj-muted-fg)]">{event.summary}</p>
            <p className="mt-3 font-mono text-xs text-[var(--mj-muted-fg)]">
              {new Date(event.startsAt).toLocaleString(locale === 'fa' ? 'fa-IR' : 'en-US')}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {(event.destinations ?? []).map((d: string) => (
                <span
                  key={d}
                  className="rounded-full border border-[var(--mj-border)] px-3 py-1 text-xs uppercase"
                >
                  {d}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
