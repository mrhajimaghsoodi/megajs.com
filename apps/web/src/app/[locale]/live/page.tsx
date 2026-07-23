'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getDictionary } from '@/i18n/dictionaries';
import { API_BASE, isLocale, type Locale } from '@/lib/utils';

export default function LiveIndexPage() {
  const params = useParams<{ locale: string }>();
  const locale = (isLocale(params.locale) ? params.locale : 'fa') as Locale;
  const dict = getDictionary(locale);
  const lv = dict.live;
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    void fetch(`${API_BASE}/live?locale=${locale}`)
      .then((r) => r.json())
      .then((d) => setEvents(Array.isArray(d) ? d : []));
  }, [locale]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-4xl font-bold">{lv.title}</h1>
      <p className="mt-3 max-w-2xl text-[var(--mj-muted-fg)]">{lv.subtitle}</p>
      <div className="mt-10 space-y-4">
        {events.map((event) => (
          <Link
            key={event.id}
            href={`/${locale}/live/${event.slug}`}
            className="block rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-5 transition-colors hover:bg-[var(--mj-muted)]"
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
          </Link>
        ))}
      </div>
    </div>
  );
}
