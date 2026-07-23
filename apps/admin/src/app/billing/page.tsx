'use client';

import { useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';

export default function BillingAdminPage() {
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
        <h1 className="font-display text-3xl font-bold">فروش و سفارش‌ها</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">
          Free / Subscription / Paid + خرج توکن — درگاه واقعی در M2.1
        </p>
      </div>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
      <div className="overflow-x-auto rounded-[var(--mj-radius-md)] border border-[var(--mj-border)]">
        <table className="w-full min-w-[800px] text-sm">
          <thead className="bg-[var(--mj-muted)]">
            <tr>
              <th className="p-3 text-start">زمان</th>
              <th className="p-3 text-start">کاربر</th>
              <th className="p-3 text-start">نوع</th>
              <th className="p-3 text-start">مبلغ</th>
              <th className="p-3 text-start">توکن</th>
              <th className="p-3 text-start">وضعیت</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="border-t border-[var(--mj-border)]">
                <td className="p-3 text-xs">
                  {new Date(o.createdAt).toLocaleString('fa-IR')}
                </td>
                <td className="p-3 font-mono text-xs" dir="ltr">
                  {o.user?.phone ?? o.userId.slice(0, 8)}
                </td>
                <td className="p-3">{o.kind}</td>
                <td className="p-3 font-mono">{o.amountCents?.toLocaleString?.()}</td>
                <td className="p-3 font-mono">{o.tokenSpent}</td>
                <td className="p-3">{o.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
