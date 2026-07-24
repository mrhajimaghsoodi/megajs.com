'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAdminLocale } from '@/i18n/locale-context';

export default function OrdersAdminPage() {
  const { locale, dict } = useAdminLocale();
  const d = dict.commerce;
  const [rows, setRows] = useState<any[]>([]);
  const [q, setQ] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);

  const load = () => {
    const params = new URLSearchParams();
    if (q) params.set('q', q);
    if (status) params.set('status', status);
    void adminFetch(`/admin/commerce/orders?${params}`).then(setRows).catch((e) => setError(e.message));
  };
  useEffect(() => { load(); }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold">{d.ordersTitle}</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.ordersSubtitle}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        <Input className="max-w-xs" placeholder={dict.search} value={q} onChange={(e) => setQ(e.target.value)} />
        <select className="h-10 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] px-3 text-sm" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">{d.allStatuses}</option>
          {['pending','processing','completed','on_hold','cancelled','refunded','failed'].map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <Button variant="outline" className="cursor-pointer" onClick={load}>{dict.filter}</Button>
      </div>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
      <div className="overflow-x-auto rounded-[var(--mj-radius-md)] border border-[var(--mj-border)]">
        <table className="w-full min-w-[900px] text-sm">
          <thead className="bg-[var(--mj-muted)]"><tr>
            <th className="p-3 text-start">{d.order}</th>
            <th className="p-3 text-start">{d.customer}</th>
            <th className="p-3 text-start">{d.type}</th>
            <th className="p-3 text-start">{d.amount}</th>
            <th className="p-3 text-start">{d.status}</th>
            <th className="p-3 text-start">{d.date}</th>
            <th className="p-3 text-start" />
          </tr></thead>
          <tbody>
            {rows.map((o) => (
              <tr key={o.id} className="border-t border-[var(--mj-border)]">
                <td className="p-3 font-mono text-xs" dir="ltr">#{o.id.slice(0, 8)}</td>
                <td className="p-3">{o.user?.displayName || o.user?.phone || o.userId.slice(0, 8)}</td>
                <td className="p-3 font-mono text-xs">{o.kind}</td>
                <td className="p-3 font-mono" dir="ltr">{(o.amountCents / 10).toLocaleString()} {o.currency}</td>
                <td className="p-3"><Badge variant="secondary">{o.status}</Badge></td>
                <td className="p-3 text-xs" dir="ltr">{new Date(o.createdAt).toLocaleString(locale === 'fa' ? 'fa-IR' : 'en-US')}</td>
                <td className="p-3"><Link className="underline-offset-4 hover:underline" href={`/orders/${o.id}`}>{d.view}</Link></td>
              </tr>
            ))}
            {!rows.length ? <tr><td className="p-6 text-[var(--mj-muted-fg)]" colSpan={7}>{dict.none}</td></tr> : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}
