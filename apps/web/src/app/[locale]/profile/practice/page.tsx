'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getDictionary } from '@/i18n/dictionaries';
import { API_BASE, isLocale, type Locale } from '@/lib/utils';

export default function MyPracticePage() {
  const params = useParams<{ locale: string }>();
  const locale = (isLocale(params.locale) ? params.locale : 'fa') as Locale;
  const dict = getDictionary(locale);
  const p = dict.profile;
  const [rows, setRows] = useState<any[]>([]);

  useEffect(() => {
    const token = localStorage.getItem('mj_token');
    if (!token) return;
    void fetch(`${API_BASE}/me/submissions`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((r) => r.json())
      .then((d) => setRows(Array.isArray(d) ? d : []));
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="font-display text-3xl font-bold">{p.practiceHistory}</h1>
      <div className="space-y-2">
        {rows.map((s) => (
          <div key={s.id} className="rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-4 text-sm">
            <div className="flex justify-between gap-3">
              <span>
                {s.challenge?.i18n?.find((x: any) => x.locale === locale)?.title ?? s.challengeId}
              </span>
              <span className="font-mono text-xs">
                {s.passed ? 'PASS' : 'FAIL'} · {s.score} pts · +{s.tokensEarned} tok
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
