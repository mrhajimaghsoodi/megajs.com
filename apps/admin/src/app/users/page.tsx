'use client';

import { useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { useAdminLocale } from '@/i18n/locale-context';

export default function UsersAdminPage() {
  const { dict } = useAdminLocale();
  const d = dict.users;
  const [rows, setRows] = useState<any[]>([]);
  const [q, setQ] = useState('');
  const [error, setError] = useState<string | null>(null);

  async function load(query = q) {
    try {
      const data = await adminFetch(`/admin/users${query ? `?q=${encodeURIComponent(query)}` : ''}`);
      setRows(data);
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : dict.error);
    }
  }

  useEffect(() => {
    void load('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold">{d.title}</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.subtitle}</p>
      </div>
      <form
        className="flex flex-wrap gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          void load(q);
        }}
      >
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={d.searchPh}
          className="h-11 min-w-64 flex-1 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] px-3"
        />
        <button
          type="submit"
          className="h-11 cursor-pointer rounded-[var(--mj-radius-md)] bg-[var(--mj-accent)] px-4 font-semibold text-[var(--mj-accent-fg)]"
        >
          {dict.search}
        </button>
      </form>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
      <div className="overflow-x-auto rounded-[var(--mj-radius-md)] border border-[var(--mj-border)]">
        <table className="w-full min-w-[900px] text-sm">
          <thead className="bg-[var(--mj-muted)]">
            <tr>
              <th className="p-3 text-start">{d.user}</th>
              <th className="p-3 text-start">{d.role}</th>
              <th className="p-3 text-start">{d.token}</th>
              <th className="p-3 text-start">{d.enrollments}</th>
              <th className="p-3 text-start">{d.submissions}</th>
              <th className="p-3 text-start">{d.providers}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((u) => (
              <tr key={u.id} className="border-t border-[var(--mj-border)]">
                <td className="p-3">
                  <div className="font-medium">{u.displayName ?? dict.none}</div>
                  <div className="font-mono text-xs text-[var(--mj-muted-fg)]" dir="ltr">
                    {u.phone ?? u.email ?? u.id.slice(0, 8)}
                  </div>
                </td>
                <td className="p-3">
                  <select
                    className="rounded border border-[var(--mj-border)] bg-[var(--mj-card)] px-2 py-1 font-mono"
                    defaultValue={u.role}
                    dir="ltr"
                    onChange={(e) => {
                      void adminFetch(`/admin/users/${u.id}/role`, {
                        method: 'PATCH',
                        body: JSON.stringify({ role: e.target.value }),
                      }).then(() => load());
                    }}
                  >
                    {['user', 'instructor', 'editor', 'support', 'analyst', 'super_admin'].map(
                      (r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ),
                    )}
                  </select>
                </td>
                <td className="p-3 font-mono">{u.wallet?.balance ?? 0}</td>
                <td className="p-3">{u._count?.enrollments ?? 0}</td>
                <td className="p-3">{u._count?.submissions ?? 0}</td>
                <td className="p-3 font-mono text-xs" dir="ltr">
                  {(u.identities ?? []).map((i: any) => i.provider).join(', ')}
                </td>
              </tr>
            ))}
            {rows.length === 0 ? (
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
