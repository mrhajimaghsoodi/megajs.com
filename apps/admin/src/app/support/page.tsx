'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';

const STATUS_LABEL: Record<string, string> = {
  open: 'باز',
  pending: 'منتظر کاربر',
  answered: 'پاسخ داده‌شده',
  resolved: 'حل‌شده',
  closed: 'بسته',
};

export default function AdminSupportPage() {
  const [rows, setRows] = useState<any[]>([]);
  const [stats, setStats] = useState<any>(null);
  const [status, setStatus] = useState('');
  const [category, setCategory] = useState('');
  const [q, setQ] = useState('');
  const [error, setError] = useState<string | null>(null);

  async function load() {
    try {
      const qs = new URLSearchParams();
      if (status) qs.set('status', status);
      if (category) qs.set('category', category);
      if (q.trim()) qs.set('q', q.trim());
      const [list, s] = await Promise.all([
        adminFetch(`/admin/support/tickets?${qs.toString()}`),
        adminFetch('/admin/support/stats'),
      ]);
      setRows(list);
      setStats(s);
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Error');
    }
  }

  useEffect(() => {
    void load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold">پشتیبانی / تیکت‌ها</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">
          صندوق تیکت کاربران — پاسخ، اولویت، وضعیت و ارجاع
        </p>
      </div>

      {stats ? (
        <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-6">
          {[
            ['باز', stats.open],
            ['منتظر', stats.pending],
            ['پاسخ‌داده‌', stats.answered],
            ['حل‌شده', stats.resolved],
            ['بسته', stats.closed],
            ['فوری فعال', stats.urgent],
          ].map(([label, value]) => (
            <article
              key={String(label)}
              className="rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-4"
            >
              <div className="text-xs text-[var(--mj-muted-fg)]">{label}</div>
              <div className="mt-1 font-mono text-2xl font-bold">{value}</div>
            </article>
          ))}
        </div>
      ) : null}

      <form
        className="flex flex-wrap gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          void load();
        }}
      >
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="جستجو موضوع / موبایل / نام"
          className="h-11 min-w-56 flex-1 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] px-3"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="h-11 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] px-3"
        >
          <option value="">همه وضعیت‌ها</option>
          {Object.entries(STATUS_LABEL).map(([k, v]) => (
            <option key={k} value={k}>
              {v}
            </option>
          ))}
        </select>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="h-11 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] px-3"
        >
          <option value="">همه دسته‌ها</option>
          {['billing', 'technical', 'content', 'account', 'live', 'other'].map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="h-11 cursor-pointer rounded-[var(--mj-radius-md)] bg-[var(--mj-accent)] px-4 font-semibold text-[var(--mj-accent-fg)]"
        >
          فیلتر
        </button>
      </form>

      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}

      <div className="overflow-x-auto rounded-[var(--mj-radius-md)] border border-[var(--mj-border)]">
        <table className="w-full min-w-[960px] text-sm">
          <thead className="bg-[var(--mj-muted)]">
            <tr>
              <th className="p-3 text-start">موضوع</th>
              <th className="p-3 text-start">کاربر</th>
              <th className="p-3 text-start">دسته</th>
              <th className="p-3 text-start">اولویت</th>
              <th className="p-3 text-start">وضعیت</th>
              <th className="p-3 text-start">پیام</th>
              <th className="p-3 text-start">به‌روز</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((t) => (
              <tr key={t.id} className="border-t border-[var(--mj-border)]">
                <td className="p-3">
                  <Link
                    href={`/support/${t.id}`}
                    className="font-medium underline-offset-4 hover:underline"
                  >
                    {t.subject}
                  </Link>
                  <div className="mt-1 line-clamp-1 text-xs text-[var(--mj-muted-fg)]">
                    {t.messages?.[0]?.body}
                  </div>
                </td>
                <td className="p-3">
                  <div>{t.user?.displayName ?? '—'}</div>
                  <div className="font-mono text-xs text-[var(--mj-muted-fg)]" dir="ltr">
                    {t.user?.phone ?? t.user?.email ?? ''}
                  </div>
                </td>
                <td className="p-3">{t.category}</td>
                <td className="p-3">{t.priority}</td>
                <td className="p-3">{STATUS_LABEL[t.status] ?? t.status}</td>
                <td className="p-3 font-mono">{t._count?.messages ?? 0}</td>
                <td className="p-3 text-xs" dir="ltr">
                  {new Date(t.updatedAt).toLocaleString('fa-IR')}
                </td>
              </tr>
            ))}
            {rows.length === 0 ? (
              <tr>
                <td colSpan={7} className="p-6 text-center text-[var(--mj-muted-fg)]">
                  تیکتی پیدا نشد
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}
