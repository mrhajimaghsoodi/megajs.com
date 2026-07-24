'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getDictionary } from '@/i18n/dictionaries';
import { API_BASE, isLocale, type Locale } from '@/lib/utils';
import { formatTehranDateTime } from '@/lib/tehran-time';

export default function MyLivePage() {
  const params = useParams<{ locale: string }>();
  const locale = (isLocale(params.locale) ? params.locale : 'fa') as Locale;
  const dict = getDictionary(locale);
  const p = dict.profile;
  const lv = dict.live;
  const [rows, setRows] = useState<any[]>([]);

  useEffect(() => {
    const token = localStorage.getItem('mj_token');
    if (!token) return;
    void fetch(`${API_BASE}/live/registrations/mine?locale=${locale}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((r) => r.json())
      .then((d) => setRows(Array.isArray(d) ? d : []));
  }, [locale]);

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between gap-3">
        <h1 className="font-display text-3xl font-bold">{p.myLives}</h1>
        <Link href={`/${locale}/live`} className="text-sm underline-offset-4 hover:underline">
          {lv.allEvents}
        </Link>
      </div>
      <div className="space-y-2">
        {rows.length === 0 ? (
          <p className="text-sm text-[var(--mj-muted-fg)]">{p.noRegistrations}</p>
        ) : (
          rows.map((r, idx) => (
            <Link
              key={idx}
              href={`/${locale}/live/${r.event.slug}`}
              className="block rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-4 hover:bg-[var(--mj-muted)]"
            >
              <div className="font-semibold">{r.event.title}</div>
              <div className="text-xs text-[var(--mj-muted-fg)]">
                {r.event.status} · {formatTehranDateTime(r.event.startsAt)}
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
