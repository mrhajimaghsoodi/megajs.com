'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAdminLocale } from '@/i18n/locale-context';

function statusVariant(status: string) {
  if (status === 'active') return 'default' as const;
  if (status === 'suspended') return 'secondary' as const;
  return 'destructive' as const;
}

export default function UsersAdminPage() {
  const { dict, locale } = useAdminLocale();
  const d = dict.users;
  const [rows, setRows] = useState<any[]>([]);
  const [q, setQ] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function load() {
    setBusy(true);
    try {
      const params = new URLSearchParams();
      if (q.trim()) params.set('q', q.trim());
      if (role) params.set('role', role);
      if (status) params.set('status', status);
      const qs = params.toString();
      const data = await adminFetch(`/admin/users${qs ? `?${qs}` : ''}`);
      setRows(data);
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : dict.error);
    } finally {
      setBusy(false);
    }
  }

  useEffect(() => {
    void load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-display text-3xl font-bold">{d.title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{d.subtitle}</p>
      </div>

      <form
        className="flex flex-wrap gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          void load();
        }}
      >
        <Input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={d.searchPh}
          className="h-11 min-w-64 flex-1"
        />
        <select
          className="h-11 rounded-md border border-border bg-card px-3 font-mono text-sm"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          dir="ltr"
          aria-label={d.filterRole}
        >
          <option value="">{d.all}</option>
          {['user', 'instructor', 'editor', 'support', 'analyst', 'super_admin'].map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
        <select
          className="h-11 rounded-md border border-border bg-card px-3 text-sm"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          aria-label={d.filterStatus}
        >
          <option value="">{d.all}</option>
          {(['active', 'suspended', 'banned'] as const).map((s) => (
            <option key={s} value={s}>
              {d.statuses[s]}
            </option>
          ))}
        </select>
        <Button type="submit" disabled={busy} className="h-11">
          {dict.search}
        </Button>
      </form>

      {error ? <p className="text-sm text-destructive">{error}</p> : null}

      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full min-w-[980px] text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="p-3 text-start">{d.user}</th>
              <th className="p-3 text-start">{d.status}</th>
              <th className="p-3 text-start">{d.role}</th>
              <th className="p-3 text-start">{d.token}</th>
              <th className="p-3 text-start">{d.enrollments}</th>
              <th className="p-3 text-start">{d.orders}</th>
              <th className="p-3 text-start">{d.providers}</th>
              <th className="p-3 text-start" />
            </tr>
          </thead>
          <tbody>
            {rows.map((u) => (
              <tr key={u.id} className="border-t border-border">
                <td className="p-3">
                  <div className="font-medium">{u.displayName ?? dict.none}</div>
                  <div className="font-mono text-xs text-muted-foreground" dir="ltr">
                    {u.phone ?? u.email ?? u.id.slice(0, 10)}
                  </div>
                </td>
                <td className="p-3">
                  <Badge variant={statusVariant(u.status ?? 'active')}>
                    {d.statuses[(u.status as 'active' | 'suspended' | 'banned') ?? 'active'] ??
                      u.status}
                  </Badge>
                </td>
                <td className="p-3 font-mono text-xs" dir="ltr">
                  {u.role}
                </td>
                <td className="p-3 font-mono">{u.wallet?.balance ?? 0}</td>
                <td className="p-3">{u._count?.enrollments ?? 0}</td>
                <td className="p-3">{u._count?.orders ?? 0}</td>
                <td className="p-3 font-mono text-xs" dir="ltr">
                  {(u.identities ?? []).map((i: { provider: string }) => i.provider).join(', ') ||
                    '—'}
                </td>
                <td className="p-3">
                  <Button asChild size="sm" variant="outline">
                    <Link href={`/users/${u.id}`}>{d.open}</Link>
                  </Button>
                </td>
              </tr>
            ))}
            {rows.length === 0 ? (
              <tr>
                <td colSpan={8} className="p-6 text-center text-muted-foreground">
                  {dict.none}
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
      <p className="font-mono text-[11px] text-muted-foreground" dir="ltr">
        locale={locale} · showing {rows.length}
      </p>
    </div>
  );
}
