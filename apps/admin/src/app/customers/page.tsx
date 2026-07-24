'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useAdminLocale } from '@/i18n/locale-context';
import { formatTehranDate } from '@/lib/datetime';

export default function CustomersPage() {
  const { locale, dict } = useAdminLocale();
  const d = dict.wp;
  const [rows, setRows] = useState<any[]>([]);
  const [q, setQ] = useState('');
  const [error, setError] = useState<string | null>(null);

  const load = () => {
    const params = new URLSearchParams({ role: 'user' });
    if (q) params.set('q', q);
    void adminFetch(`/admin/users?${params}`).then(setRows).catch((e) => setError(e.message));
  };
  useEffect(() => { load(); }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold">{d.customersTitle}</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.customersSubtitle}</p>
      </div>
      <div className="flex gap-2">
        <Input className="max-w-xs" placeholder={dict.search} value={q} onChange={(e) => setQ(e.target.value)} />
        <Button variant="outline" className="cursor-pointer" onClick={load}>{dict.filter}</Button>
      </div>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
      <div className="overflow-x-auto rounded-[var(--mj-radius-md)] border border-[var(--mj-border)]">
        <table className="w-full min-w-[720px] text-sm">
          <thead className="bg-[var(--mj-muted)]"><tr>
            <th className="p-3 text-start">{d.customer}</th>
            <th className="p-3 text-start">{d.email}</th>
            <th className="p-3 text-start">{d.orders}</th>
            <th className="p-3 text-start">{d.status}</th>
            <th className="p-3 text-start">{d.registered}</th>
            <th className="p-3 text-start" />
          </tr></thead>
          <tbody>
            {rows.map((u) => (
              <tr key={u.id} className="border-t border-[var(--mj-border)]">
                <td className="p-3">{u.displayName || u.phone}</td>
                <td className="p-3 font-mono text-xs" dir="ltr">{u.email || '—'}</td>
                <td className="p-3 font-mono">{u._count?.orders ?? '—'}</td>
                <td className="p-3"><Badge variant="secondary">{u.status}</Badge></td>
                <td className="p-3 text-xs" dir="ltr">{formatTehranDate(u.createdAt)}</td>
                <td className="p-3"><Link className="underline-offset-4 hover:underline" href={`/users/${u.id}`}>{d.view}</Link></td>
              </tr>
            ))}
            {!rows.length ? <tr><td className="p-6 text-[var(--mj-muted-fg)]" colSpan={6}>{dict.none}</td></tr> : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}
