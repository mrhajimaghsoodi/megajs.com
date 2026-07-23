'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getDictionary } from '@/i18n/dictionaries';
import { API_BASE, isLocale, type Locale } from '@/lib/utils';

export default function OrdersPage() {
  const params = useParams<{ locale: string }>();
  const locale = (isLocale(params.locale) ? params.locale : 'fa') as Locale;
  const dict = getDictionary(locale);
  const p = dict.profile;
  const [rows, setRows] = useState<any[]>([]);

  useEffect(() => {
    const token = localStorage.getItem('mj_token');
    if (!token) return;
    void fetch(`${API_BASE}/me/orders`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((r) => r.json())
      .then((d) => setRows(Array.isArray(d) ? d : []));
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="font-display text-3xl font-bold">{p.orders}</h1>
      <div className="space-y-2">
        {rows.length === 0 ? (
          <p className="text-sm text-[var(--mj-muted-fg)]">{dict.empty}</p>
        ) : (
          rows.map((o) => (
            <div key={o.id} className="rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-4 text-sm">
              <div className="flex justify-between gap-3">
                <span>{o.kind}</span>
                <span className="font-mono">{o.status}</span>
              </div>
              <div className="mt-1 text-xs text-[var(--mj-muted-fg)]">
                {new Date(o.createdAt).toLocaleString(locale === 'fa' ? 'fa-IR' : 'en-US')} ·{' '}
                {o.amountCents?.toLocaleString?.()} + {o.tokenSpent} {dict.profile.tokens}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
