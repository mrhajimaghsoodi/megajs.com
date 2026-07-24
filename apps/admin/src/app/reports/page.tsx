'use client';

import { useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { useAdminLocale } from '@/i18n/locale-context';

export default function ReportsAdminPage() {
  const { locale, dict } = useAdminLocale();
  const d = dict.commerce;
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    void adminFetch('/admin/commerce/reports').then(setData).catch((e) => setError(e.message));
  }, []);

  if (error) return <p className="text-sm text-[var(--mj-danger)]">{error}</p>;
  if (!data) return <p className="text-sm text-[var(--mj-muted-fg)]">{dict.loading}</p>;

  const cards = [
    { label: d.revenue, value: `${((data.revenueCompletedCents ?? 0) / 10).toLocaleString()} IRT` },
    { label: d.ordersTotal, value: data.ordersTotal },
    { label: d.ordersToday, value: data.ordersToday },
    { label: d.ordersWeek, value: data.ordersWeek },
    { label: d.ordersMonth, value: data.ordersMonth },
    { label: d.activeSubs, value: data.activeSubs },
    { label: d.newUsersMonth, value: data.newUsersMonth },
    { label: d.articlesPublished, value: data.articlesPublished },
    { label: d.pagesPublished, value: data.pagesPublished },
    { label: d.couponsUsed, value: data.couponsUsed },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl font-bold">{d.reportsTitle}</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.reportsSubtitle}</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {cards.map((c) => (
          <div key={c.label} className="rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-4">
            <div className="text-xs text-[var(--mj-muted-fg)]">{c.label}</div>
            <div className="mt-2 font-display text-2xl font-bold" dir="ltr">{c.value}</div>
          </div>
        ))}
      </div>
      <section>
        <h2 className="font-display text-xl font-semibold">{d.byStatus}</h2>
        <div className="mt-3 overflow-x-auto rounded-[var(--mj-radius-md)] border border-[var(--mj-border)]">
          <table className="w-full text-sm"><thead className="bg-[var(--mj-muted)]"><tr><th className="p-3 text-start">{d.status}</th><th className="p-3 text-start">{d.count}</th></tr></thead>
            <tbody>{(data.byStatus ?? []).map((r: any) => (
              <tr key={r.status} className="border-t border-[var(--mj-border)]"><td className="p-3 font-mono">{r.status}</td><td className="p-3 font-mono">{r._count}</td></tr>
            ))}</tbody>
          </table>
        </div>
      </section>
      <section>
        <h2 className="font-display text-xl font-semibold">{d.topCourses}</h2>
        <div className="mt-3 overflow-x-auto rounded-[var(--mj-radius-md)] border border-[var(--mj-border)]">
          <table className="w-full text-sm"><thead className="bg-[var(--mj-muted)]"><tr><th className="p-3 text-start">{d.product}</th><th className="p-3 text-start">{d.count}</th></tr></thead>
            <tbody>{(data.topCourses ?? []).map((r: any) => {
              const title = r.course?.i18n?.find((x: any) => x.locale === locale)?.title ?? r.course?.slug ?? r.courseId;
              return (
                <tr key={r.courseId} className="border-t border-[var(--mj-border)]"><td className="p-3">{title}</td><td className="p-3 font-mono">{r._count}</td></tr>
              );
            })}</tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
