'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { useAdminLocale } from '@/i18n/locale-context';
import { formatTehranDateTime } from '@/lib/datetime';

const STATUS_KEYS = ['open', 'pending', 'answered', 'resolved', 'closed'] as const;

export default function AdminSupportPage() {
  const { locale, dict } = useAdminLocale();
  const d = dict.support;
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
      setError(e instanceof Error ? e.message : dict.error);
    }
  }

  useEffect(() => {
    void load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const statCards = stats
    ? [
        [d.open, stats.open],
        [d.pending, stats.pending],
        [d.answered, stats.answered],
        [d.resolved, stats.resolved],
        [d.closed, stats.closed],
        [d.urgent, stats.urgent],
      ]
    : [];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold">{d.title}</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.subtitle}</p>
      </div>

      {stats ? (
        <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-6">
          {statCards.map(([label, value]) => (
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
          placeholder={d.searchPh}
          className="h-11 min-w-56 flex-1 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] px-3"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="h-11 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] px-3"
        >
          <option value="">{d.allStatuses}</option>
          {STATUS_KEYS.map((k) => (
            <option key={k} value={k}>
              {d.statusLabels[k]}
            </option>
          ))}
        </select>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="h-11 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] px-3 font-mono"
          dir="ltr"
        >
          <option value="">{d.allCategories}</option>
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
          {dict.filter}
        </button>
      </form>

      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}

      <div className="overflow-x-auto rounded-[var(--mj-radius-md)] border border-[var(--mj-border)]">
        <table className="w-full min-w-[960px] text-sm">
          <thead className="bg-[var(--mj-muted)]">
            <tr>
              <th className="p-3 text-start">{d.subject}</th>
              <th className="p-3 text-start">{d.user}</th>
              <th className="p-3 text-start">{d.category}</th>
              <th className="p-3 text-start">{d.priority}</th>
              <th className="p-3 text-start">{d.status}</th>
              <th className="p-3 text-start">{d.messages}</th>
              <th className="p-3 text-start">{d.updated}</th>
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
                  <div>{t.user?.displayName ?? dict.none}</div>
                  <div className="font-mono text-xs text-[var(--mj-muted-fg)]" dir="ltr">
                    {t.user?.phone ?? t.user?.email ?? ''}
                  </div>
                </td>
                <td className="p-3 font-mono" dir="ltr">
                  {t.category}
                </td>
                <td className="p-3 font-mono" dir="ltr">
                  {t.priority}
                </td>
                <td className="p-3">
                  {d.statusLabels[t.status as keyof typeof d.statusLabels] ?? t.status}
                </td>
                <td className="p-3 font-mono">{t._count?.messages ?? 0}</td>
                <td className="p-3 text-xs" dir="ltr">
                  {formatTehranDateTime(t.updatedAt)}
                </td>
              </tr>
            ))}
            {rows.length === 0 ? (
              <tr>
                <td colSpan={7} className="p-6 text-center text-[var(--mj-muted-fg)]">
                  {d.empty}
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}
