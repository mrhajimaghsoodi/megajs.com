'use client';

import { useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAdminLocale } from '@/i18n/locale-context';

export default function CouponsAdminPage() {
  const { dict } = useAdminLocale();
  const d = dict.commerce;
  const [rows, setRows] = useState<any[]>([]);
  const [code, setCode] = useState('');
  const [discountType, setDiscountType] = useState('percent');
  const [amount, setAmount] = useState('10');
  const [maxUses, setMaxUses] = useState('');
  const [error, setError] = useState<string | null>(null);

  const load = () => {
    void adminFetch('/admin/commerce/coupons').then(setRows).catch((e) => setError(e.message));
  };
  useEffect(() => { load(); }, []);

  const create = async () => {
    try {
      await adminFetch('/admin/commerce/coupons', {
        method: 'POST',
        body: JSON.stringify({
          code,
          discountType,
          amount: Number(amount),
          maxUses: maxUses ? Number(maxUses) : null,
          active: true,
        }),
      });
      setCode(''); setAmount('10'); setMaxUses('');
      load();
    } catch (e: any) {
      setError(e.message);
    }
  };

  const toggle = async (row: any) => {
    await adminFetch(`/admin/commerce/coupons/${row.id}`, {
      method: 'PATCH',
      body: JSON.stringify({ active: !row.active }),
    });
    load();
  };

  const remove = async (id: string) => {
    if (!confirm(dict.cms.confirmDelete)) return;
    await adminFetch(`/admin/commerce/coupons/${id}`, { method: 'DELETE' });
    load();
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold">{d.couponsTitle}</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.couponsSubtitle}</p>
      </div>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
      <div className="grid max-w-xl gap-3 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-4">
        <div className="space-y-2"><Label>{d.code}</Label><Input dir="ltr" value={code} onChange={(e) => setCode(e.target.value)} /></div>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="space-y-2">
            <Label>{d.discountType}</Label>
            <select className="h-10 w-full rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] px-3 text-sm" value={discountType} onChange={(e) => setDiscountType(e.target.value)}>
              <option value="percent">percent</option>
              <option value="fixed">fixed</option>
            </select>
          </div>
          <div className="space-y-2"><Label>{d.amount}</Label><Input dir="ltr" value={amount} onChange={(e) => setAmount(e.target.value)} /></div>
          <div className="space-y-2"><Label>{d.maxUses}</Label><Input dir="ltr" value={maxUses} onChange={(e) => setMaxUses(e.target.value)} /></div>
        </div>
        <Button className="cursor-pointer" onClick={() => void create()}>{d.addCoupon}</Button>
      </div>
      <div className="overflow-x-auto rounded-[var(--mj-radius-md)] border border-[var(--mj-border)]">
        <table className="w-full min-w-[720px] text-sm">
          <thead className="bg-[var(--mj-muted)]"><tr>
            <th className="p-3 text-start">{d.code}</th>
            <th className="p-3 text-start">{d.discountType}</th>
            <th className="p-3 text-start">{d.amount}</th>
            <th className="p-3 text-start">{d.used}</th>
            <th className="p-3 text-start">{d.status}</th>
            <th className="p-3 text-start" />
          </tr></thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-t border-[var(--mj-border)]">
                <td className="p-3 font-mono font-semibold" dir="ltr">{row.code}</td>
                <td className="p-3 font-mono text-xs">{row.discountType}</td>
                <td className="p-3 font-mono" dir="ltr">{row.amount}</td>
                <td className="p-3 font-mono">{row.usedCount}{row.maxUses != null ? ` / ${row.maxUses}` : ''}</td>
                <td className="p-3"><Badge variant="secondary">{row.active ? 'active' : 'off'}</Badge></td>
                <td className="p-3 flex gap-2">
                  <Button size="sm" variant="outline" className="cursor-pointer" onClick={() => void toggle(row)}>{row.active ? d.disable : d.enable}</Button>
                  <Button size="sm" variant="destructive" className="cursor-pointer" onClick={() => void remove(row.id)}>{dict.cms.delete}</Button>
                </td>
              </tr>
            ))}
            {!rows.length ? <tr><td className="p-6 text-[var(--mj-muted-fg)]" colSpan={6}>{dict.none}</td></tr> : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}
