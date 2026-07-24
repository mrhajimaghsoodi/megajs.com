'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useAdminLocale } from '@/i18n/locale-context';

export default function OrderDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { locale, dict } = useAdminLocale();
  const d = dict.commerce;
  const [order, setOrder] = useState<any>(null);
  const [status, setStatus] = useState('pending');
  const [note, setNote] = useState('');
  const [refundNote, setRefundNote] = useState('');
  const [msg, setMsg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    const row = await adminFetch(`/admin/commerce/orders/${id}`);
    setOrder(row);
    setStatus(row.status);
  }, [id]);

  useEffect(() => { void load().catch((e) => setError(e.message)); }, [load]);

  const saveStatus = async () => {
    await adminFetch(`/admin/commerce/orders/${id}/status`, { method: 'PATCH', body: JSON.stringify({ status }) });
    setMsg(d.saved);
    await load();
  };
  const addNote = async () => {
    await adminFetch(`/admin/commerce/orders/${id}/notes`, { method: 'POST', body: JSON.stringify({ body: note }) });
    setNote('');
    await load();
  };
  const refund = async () => {
    await adminFetch(`/admin/commerce/orders/${id}/refund`, { method: 'POST', body: JSON.stringify({ note: refundNote }) });
    setRefundNote('');
    setMsg(d.refunded);
    await load();
  };

  if (!order) return <p className="text-sm text-[var(--mj-muted-fg)]">{error || dict.loading}</p>;

  const productTitle =
    order.product?.i18n?.find((x: any) => x.locale === locale)?.title ??
    order.product?.slug ??
    order.plan?.code ??
    '—';

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <Link href="/orders" className="text-sm underline-offset-4 hover:underline">← {d.back}</Link>
        <h1 className="mt-2 font-display text-3xl font-bold">{d.orderDetail} #{order.id.slice(0, 8)}</h1>
      </div>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
      {msg ? <p className="text-sm text-emerald-700">{msg}</p> : null}

      <div className="grid gap-4 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-4 sm:grid-cols-2">
        <div><div className="text-xs text-[var(--mj-muted-fg)]">{d.customer}</div><div className="font-medium">{order.user?.displayName || order.user?.phone}</div>
          <Link className="text-xs underline-offset-4 hover:underline" href={`/users/${order.userId}`}>{d.viewCustomer}</Link></div>
        <div><div className="text-xs text-[var(--mj-muted-fg)]">{d.status}</div><Badge variant="secondary">{order.status}</Badge></div>
        <div><div className="text-xs text-[var(--mj-muted-fg)]">{d.type}</div><div className="font-mono text-sm">{order.kind}</div></div>
        <div><div className="text-xs text-[var(--mj-muted-fg)]">{d.product}</div><div>{productTitle}</div></div>
        <div><div className="text-xs text-[var(--mj-muted-fg)]">{d.amount}</div><div className="font-mono" dir="ltr">{(order.amountCents / 10).toLocaleString()} {order.currency}</div></div>
        <div><div className="text-xs text-[var(--mj-muted-fg)]">{d.discount}</div><div className="font-mono" dir="ltr">{order.discountCents}</div></div>
        <div><div className="text-xs text-[var(--mj-muted-fg)]">{d.refund}</div><div className="font-mono" dir="ltr">{order.refundCents}</div></div>
        <div><div className="text-xs text-[var(--mj-muted-fg)]">{d.date}</div><div className="text-sm" dir="ltr">{new Date(order.createdAt).toLocaleString(locale === 'fa' ? 'fa-IR' : 'en-US')}</div></div>
      </div>

      <div className="grid gap-3 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-4">
        <Label>{d.updateStatus}</Label>
        <div className="flex flex-wrap gap-2">
          <select className="h-10 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] px-3 text-sm" value={status} onChange={(e) => setStatus(e.target.value)}>
            {['pending','processing','completed','on_hold','cancelled','refunded','failed'].map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          <Button className="cursor-pointer" onClick={() => void saveStatus()}>{dict.save}</Button>
        </div>
      </div>

      <div className="grid gap-3 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-4">
        <Label>{d.refundOrder}</Label>
        <Input value={refundNote} onChange={(e) => setRefundNote(e.target.value)} placeholder={d.refundNotePh} />
        <Button variant="destructive" className="w-fit cursor-pointer" onClick={() => void refund()}>{d.refund}</Button>
      </div>

      <div className="grid gap-3 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-4">
        <Label>{d.orderNotes}</Label>
        <Textarea value={note} onChange={(e) => setNote(e.target.value)} rows={3} />
        <Button className="w-fit cursor-pointer" onClick={() => void addNote()}>{d.addNote}</Button>
        <div className="space-y-2">
          {(order.notes ?? []).map((n: any) => (
            <div key={n.id} className="rounded-md bg-[var(--mj-muted)] p-3 text-sm">
              <div className="text-xs text-[var(--mj-muted-fg)]" dir="ltr">{new Date(n.createdAt).toLocaleString()}</div>
              <div className="mt-1 whitespace-pre-wrap">{n.body}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
