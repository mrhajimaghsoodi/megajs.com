'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAdminLocale } from '@/i18n/locale-context';

function titleOf(row: any, locale: string) {
  return row.i18n?.find((x: any) => x.locale === locale)?.title ?? row.i18n?.[0]?.title ?? row.slug;
}

export default function PagesAdminPage() {
  const { locale, dict } = useAdminLocale();
  const d = dict.cms;
  const [rows, setRows] = useState<any[]>([]);
  const [q, setQ] = useState('');
  const [error, setError] = useState<string | null>(null);

  const load = () => {
    const params = new URLSearchParams();
    if (q) params.set('q', q);
    void adminFetch(`/admin/cms/pages?${params}`)
      .then(setRows)
      .catch((e) => setError(e.message));
  };

  useEffect(() => { load(); }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-3xl font-bold">{d.pagesTitle}</h1>
          <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.pagesSubtitle}</p>
        </div>
        <Button asChild className="cursor-pointer"><Link href="/pages/new">{d.newPage}</Link></Button>
      </div>
      <div className="flex gap-2">
        <Input className="max-w-xs" placeholder={dict.search} value={q} onChange={(e) => setQ(e.target.value)} />
        <Button type="button" variant="outline" className="cursor-pointer" onClick={load}>{dict.filter}</Button>
      </div>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
      <div className="overflow-x-auto rounded-[var(--mj-radius-md)] border border-[var(--mj-border)]">
        <table className="w-full min-w-[640px] text-sm">
          <thead className="bg-[var(--mj-muted)]"><tr>
            <th className="p-3 text-start">{d.titleCol}</th>
            <th className="p-3 text-start">slug</th>
            <th className="p-3 text-start">{d.status}</th>
            <th className="p-3 text-start">{d.template}</th>
            <th className="p-3 text-start" />
          </tr></thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-t border-[var(--mj-border)]">
                <td className="p-3 font-medium">{titleOf(row, locale)}</td>
                <td className="p-3 font-mono text-xs" dir="ltr">{row.slug}</td>
                <td className="p-3"><Badge variant="secondary">{row.status}</Badge></td>
                <td className="p-3 font-mono text-xs">{row.template}</td>
                <td className="p-3"><Link className="underline-offset-4 hover:underline" href={`/pages/${row.id}`}>{d.edit}</Link></td>
              </tr>
            ))}
            {!rows.length ? <tr><td className="p-6 text-[var(--mj-muted-fg)]" colSpan={5}>{dict.none}</td></tr> : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}
