'use client';

import { useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAdminLocale } from '@/i18n/locale-context';

export default function PlansAdminPage() {
  const { dict } = useAdminLocale();
  const d = dict.commerce;
  const [rows, setRows] = useState<any[]>([]);
  const [code, setCode] = useState('');
  const [intervalDays, setIntervalDays] = useState('30');
  const [priceCents, setPriceCents] = useState('990000');
  const [error, setError] = useState<string | null>(null);

  const load = () => {
    void adminFetch('/admin/commerce/plans').then(setRows).catch((e) => setError(e.message));
  };
  useEffect(() => { load(); }, []);

  const create = async () => {
    try {
      await adminFetch('/admin/commerce/plans', {
        method: 'POST',
        body: JSON.stringify({ code, intervalDays: Number(intervalDays), priceCents: Number(priceCents), active: true }),
      });
      setCode('');
      load();
    } catch (e: any) {
      setError(e.message);
    }
  };

  const toggle = async (row: any) => {
    await adminFetch(`/admin/commerce/plans/${row.id}`, {
      method: 'PATCH',
      body: JSON.stringify({ active: !row.active }),
    });
    load();
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold">{d.plansTitle}</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.plansSubtitle}</p>
      </div>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
      <div className="grid max-w-xl gap-3 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-4">
        <div className="space-y-2"><Label>{d.code}</Label><Input dir="ltr" value={code} onChange={(e) => setCode(e.target.value)} /></div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-2"><Label>{d.intervalDays}</Label><Input dir="ltr" value={intervalDays} onChange={(e) => setIntervalDays(e.target.value)} /></div>
          <div className="space-y-2"><Label>{d.priceCents}</Label><Input dir="ltr" value={priceCents} onChange={(e) => setPriceCents(e.target.value)} /></div>
        </div>
        <Button className="cursor-pointer" onClick={() => void create()}>{d.addPlan}</Button>
      </div>
      <div className="overflow-x-auto rounded-[var(--mj-radius-md)] border border-[var(--mj-border)]">
        <table className="w-full min-w-[640px] text-sm">
          <thead className="bg-[var(--mj-muted)]"><tr>
            <th className="p-3 text-start">{d.code}</th>
            <th className="p-3 text-start">{d.intervalDays}</th>
            <th className="p-3 text-start">{d.amount}</th>
            <th className="p-3 text-start">{d.subs}</th>
            <th className="p-3 text-start">{d.status}</th>
            <th className="p-3 text-start" />
          </tr></thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-t border-[var(--mj-border)]">
                <td className="p-3 font-mono font-semibold" dir="ltr">{row.code}</td>
                <td className="p-3 font-mono">{row.intervalDays}</td>
                <td className="p-3 font-mono" dir="ltr">{(row.priceCents / 10).toLocaleString()} {row.currency}</td>
                <td className="p-3 font-mono">{row._count?.subscriptions ?? 0}</td>
                <td className="p-3"><Badge variant="secondary">{row.active ? 'active' : 'off'}</Badge></td>
                <td className="p-3"><Button size="sm" variant="outline" className="cursor-pointer" onClick={() => void toggle(row)}>{row.active ? d.disable : d.enable}</Button></td>
              </tr>
            ))}
            {!rows.length ? <tr><td className="p-6 text-[var(--mj-muted-fg)]" colSpan={6}>{dict.none}</td></tr> : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}
