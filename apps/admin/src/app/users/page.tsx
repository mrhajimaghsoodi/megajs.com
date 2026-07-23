'use client';

import { useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';

export default function UsersAdminPage() {
  const [rows, setRows] = useState<any[]>([]);
  const [q, setQ] = useState('');
  const [error, setError] = useState<string | null>(null);

  async function load(query = q) {
    try {
      const data = await adminFetch(`/admin/users${query ? `?q=${encodeURIComponent(query)}` : ''}`);
      setRows(data);
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Error');
    }
  }

  useEffect(() => {
    void load('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold">کاربران</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">هویت، نقش، کیف‌توکن، ثبت‌نام‌ها</p>
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
          placeholder="جستجو موبایل / ایمیل / نام"
          className="h-11 min-w-64 flex-1 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] px-3"
        />
        <button
          type="submit"
          className="h-11 cursor-pointer rounded-[var(--mj-radius-md)] bg-[var(--mj-accent)] px-4 font-semibold text-[var(--mj-accent-fg)]"
        >
          جستجو
        </button>
      </form>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
      <div className="overflow-x-auto rounded-[var(--mj-radius-md)] border border-[var(--mj-border)]">
        <table className="w-full min-w-[900px] text-sm">
          <thead className="bg-[var(--mj-muted)]">
            <tr>
              <th className="p-3 text-start">کاربر</th>
              <th className="p-3 text-start">نقش</th>
              <th className="p-3 text-start">توکن</th>
              <th className="p-3 text-start">ثبت‌نام</th>
              <th className="p-3 text-start">ارسال‌ها</th>
              <th className="p-3 text-start">Providers</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((u) => (
              <tr key={u.id} className="border-t border-[var(--mj-border)]">
                <td className="p-3">
                  <div className="font-medium">{u.displayName ?? '—'}</div>
                  <div className="font-mono text-xs text-[var(--mj-muted-fg)]" dir="ltr">
                    {u.phone ?? u.email ?? u.id.slice(0, 8)}
                  </div>
                </td>
                <td className="p-3">
                  <select
                    className="rounded border border-[var(--mj-border)] bg-[var(--mj-card)] px-2 py-1"
                    defaultValue={u.role}
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
                <td className="p-3 text-xs">
                  {(u.identities ?? []).map((i: any) => i.provider).join(', ')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
