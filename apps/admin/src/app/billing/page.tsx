'use client';

import { useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { useAdminLocale } from '@/i18n/locale-context';

export default function BillingAdminPage() {
  const { locale, dict } = useAdminLocale();
  const d = dict.billing;
  const [orders, setOrders] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    void adminFetch('/admin/orders')
      .then(setOrders)
      .catch((e) => setError(e.message));
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold">{d.title}</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.subtitle}</p>
      </div>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
      <div className="overflow-x-auto rounded-[var(--mj-radius-md)] border border-[var(--mj-border)]">
        <table className="w-full min-w-[800px] text-sm">
          <thead className="bg-[var(--mj-muted)]">
            <tr>
              <th className="p-3 text-start">{d.time}</th>
              <th className="p-3 text-start">{d.user}</th>
              <th className="p-3 text-start">{d.type}</th>
              <th className="p-3 text-start">{d.amount}</th>
              <th className="p-3 text-start">{d.token}</th>
              <th className="p-3 text-start">{d.status}</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="border-t border-[var(--mj-border)]">
                <td className="p-3 text-xs" dir="ltr">
                  {new Date(o.createdAt).toLocaleString(locale === 'fa' ? 'fa-IR' : 'en-US')}
                </td>
                <td className="p-3 font-mono text-xs" dir="ltr">
                  {o.user?.phone ?? o.userId.slice(0, 8)}
                </td>
                <td className="p-3 font-mono" dir="ltr">
                  {o.kind}
                </td>
                <td className="p-3 font-mono" dir="ltr">
                  {o.amountCents?.toLocaleString?.(locale === 'fa' ? 'fa-IR' : 'en-US')}
                </td>
                <td className="p-3 font-mono">{o.tokenSpent}</td>
                <td className="p-3 font-mono" dir="ltr">
                  {o.status}
                </td>
              </tr>
            ))}
            {orders.length === 0 ? (
              <tr>
                <td colSpan={6} className="p-6 text-center text-[var(--mj-muted-fg)]">
                  {dict.none}
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}
