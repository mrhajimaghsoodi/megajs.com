'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { useAdminLocale } from '@/i18n/locale-context';
import { formatTehranDate, formatTehranDateTime } from '@/lib/tehran-time';

type Tab =
  | 'profile'
  | 'access'
  | 'wallet'
  | 'learning'
  | 'commerce'
  | 'support'
  | 'activity';

function titleOf(i18n: Array<{ locale: string; title: string }> | undefined, locale: string) {
  return (
    i18n?.find((x) => x.locale === locale)?.title ??
    i18n?.[0]?.title ??
    '—'
  );
}

export default function UserDetailAdminPage() {
  const params = useParams<{ id: string }>();
  const id = params.id;
  const { dict, locale } = useAdminLocale();
  const d = dict.users;
  const [tab, setTab] = useState<Tab>('profile');
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [msg, setMsg] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const [profile, setProfile] = useState({
    displayName: '',
    phone: '',
    email: '',
    phoneVerified: false,
    locale: 'fa',
    theme: 'light',
    avatarUrl: '',
  });
  const [role, setRole] = useState('user');
  const [status, setStatus] = useState('active');
  const [statusReason, setStatusReason] = useState('');
  const [walletAmount, setWalletAmount] = useState('100');
  const [walletReason, setWalletReason] = useState('admin_grant');
  const [courseId, setCourseId] = useState('');
  const [planId, setPlanId] = useState('');
  const [planDays, setPlanDays] = useState('');
  const [note, setNote] = useState('');

  const load = useCallback(async () => {
    try {
      const res = await adminFetch(`/admin/users/${id}`);
      setData(res);
      const u = res.user;
      setProfile({
        displayName: u.displayName ?? '',
        phone: u.phone ?? '',
        email: u.email ?? '',
        phoneVerified: Boolean(u.phoneVerified),
        locale: u.locale ?? 'fa',
        theme: u.theme ?? 'light',
        avatarUrl: u.avatarUrl ?? '',
      });
      setRole(u.role);
      setStatus(u.status ?? 'active');
      setStatusReason(u.suspendedReason ?? '');
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : dict.error);
    }
  }, [id, dict.error]);

  useEffect(() => {
    void load();
  }, [load]);

  async function run(fn: () => Promise<unknown>) {
    setBusy(true);
    setMsg(null);
    setError(null);
    try {
      await fn();
      setMsg(d.saved);
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : dict.error);
    } finally {
      setBusy(false);
    }
  }

  if (!data && !error) {
    return <p className="text-sm text-muted-foreground">{dict.checkingAccess}</p>;
  }
  if (error && !data) {
    return (
      <div className="flex flex-col gap-3">
        <p className="text-sm text-destructive">{error}</p>
        <Button asChild variant="outline">
          <Link href="/users">{d.back}</Link>
        </Button>
      </div>
    );
  }

  const u = data.user;
  const catalogs = data.catalogs ?? { plans: [], courses: [] };
  const tabs: Array<{ id: Tab; label: string }> = [
    { id: 'profile', label: d.tabs.profile },
    { id: 'access', label: d.tabs.access },
    { id: 'wallet', label: d.tabs.wallet },
    { id: 'learning', label: d.tabs.learning },
    { id: 'commerce', label: d.tabs.commerce },
    { id: 'support', label: d.tabs.support },
    { id: 'activity', label: d.tabs.activity },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <Button asChild variant="ghost" size="sm" className="mb-2 px-0">
            <Link href="/users">← {d.back}</Link>
          </Button>
          <h1 className="font-display text-3xl font-bold">{d.detailTitle}</h1>
          <p className="mt-1 font-mono text-xs text-muted-foreground" dir="ltr">
            {u.id}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge>{u.role}</Badge>
          <Badge variant={u.status === 'active' ? 'default' : 'destructive'}>
            {d.statuses[u.status as 'active' | 'suspended' | 'banned'] ?? u.status}
          </Badge>
          <Badge variant="secondary" className="font-mono">
            {u.wallet?.balance ?? 0} tok
          </Badge>
        </div>
      </div>

      <div className="grid gap-1 rounded-lg border border-border bg-card p-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="text-xs text-muted-foreground">{d.profile.displayName}</div>
          <div className="font-medium">{u.displayName ?? '—'}</div>
        </div>
        <div>
          <div className="text-xs text-muted-foreground">{d.profile.phone}</div>
          <div className="font-mono text-sm" dir="ltr">
            {u.phone ?? '—'}
          </div>
        </div>
        <div>
          <div className="text-xs text-muted-foreground">{d.profile.email}</div>
          <div className="font-mono text-sm" dir="ltr">
            {u.email ?? '—'}
          </div>
        </div>
        <div>
          <div className="text-xs text-muted-foreground">{d.profile.createdAt}</div>
          <div className="font-mono text-xs" dir="ltr">
            {formatTehranDateTime(u.createdAt)}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-1 border-b border-border pb-2">
        {tabs.map((t) => (
          <Button
            key={t.id}
            type="button"
            size="sm"
            variant={tab === t.id ? 'default' : 'ghost'}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </Button>
        ))}
      </div>

      {msg ? <p className="text-sm text-primary">{msg}</p> : null}
      {error ? <p className="text-sm text-destructive">{error}</p> : null}

      {tab === 'profile' ? (
        <section className="flex max-w-xl flex-col gap-4">
          <p className="text-sm text-muted-foreground">{d.profile.authNote}</p>
          <div className="grid gap-2">
            <Label>{d.profile.displayName}</Label>
            <Input
              value={profile.displayName}
              onChange={(e) => setProfile((p) => ({ ...p, displayName: e.target.value }))}
            />
          </div>
          <div className="grid gap-2">
            <Label>{d.profile.phone}</Label>
            <Input
              dir="ltr"
              className="font-mono"
              value={profile.phone}
              onChange={(e) => setProfile((p) => ({ ...p, phone: e.target.value }))}
            />
          </div>
          <div className="grid gap-2">
            <Label>{d.profile.email}</Label>
            <Input
              dir="ltr"
              value={profile.email}
              onChange={(e) => setProfile((p) => ({ ...p, email: e.target.value }))}
            />
          </div>
          <div className="grid gap-2">
            <Label>{d.profile.avatarUrl}</Label>
            <Input
              dir="ltr"
              value={profile.avatarUrl}
              onChange={(e) => setProfile((p) => ({ ...p, avatarUrl: e.target.value }))}
            />
          </div>
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={profile.phoneVerified}
                onChange={(e) => setProfile((p) => ({ ...p, phoneVerified: e.target.checked }))}
              />
              {d.profile.phoneVerified}
            </label>
            <select
              className="h-10 rounded-md border border-border bg-card px-3 text-sm"
              value={profile.locale}
              onChange={(e) => setProfile((p) => ({ ...p, locale: e.target.value }))}
            >
              <option value="fa">fa</option>
              <option value="en">en</option>
            </select>
            <select
              className="h-10 rounded-md border border-border bg-card px-3 text-sm"
              value={profile.theme}
              onChange={(e) => setProfile((p) => ({ ...p, theme: e.target.value }))}
            >
              <option value="light">light</option>
              <option value="dark">dark</option>
              <option value="system">system</option>
            </select>
          </div>
          <Button
            disabled={busy}
            onClick={() =>
              void run(() =>
                adminFetch(`/admin/users/${id}`, {
                  method: 'PATCH',
                  body: JSON.stringify({
                    displayName: profile.displayName || null,
                    phone: profile.phone || null,
                    email: profile.email || null,
                    avatarUrl: profile.avatarUrl || null,
                    phoneVerified: profile.phoneVerified,
                    locale: profile.locale,
                    theme: profile.theme,
                  }),
                }),
              )
            }
          >
            {d.profile.save}
          </Button>
          <Separator />
          <div className="font-mono text-xs text-muted-foreground" dir="ltr">
            identities: {(u.identities ?? []).map((i: any) => i.provider).join(', ') || 'none'}
          </div>
        </section>
      ) : null}

      {tab === 'access' ? (
        <section className="grid max-w-3xl gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-3">
            <Label>{d.access.role}</Label>
            <select
              className="h-11 rounded-md border border-border bg-card px-3 font-mono text-sm"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              dir="ltr"
            >
              {['user', 'instructor', 'editor', 'support', 'analyst', 'super_admin'].map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
            <Button
              disabled={busy}
              onClick={() =>
                void run(() =>
                  adminFetch(`/admin/users/${id}/role`, {
                    method: 'PATCH',
                    body: JSON.stringify({ role }),
                  }),
                )
              }
            >
              {d.access.saveRole}
            </Button>
            <Separator />
            <Label>{d.access.status}</Label>
            <select
              className="h-11 rounded-md border border-border bg-card px-3 text-sm"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              {(['active', 'suspended', 'banned'] as const).map((s) => (
                <option key={s} value={s}>
                  {d.statuses[s]}
                </option>
              ))}
            </select>
            <Label>{d.access.reason}</Label>
            <Input value={statusReason} onChange={(e) => setStatusReason(e.target.value)} />
            <Button
              variant="secondary"
              disabled={busy}
              onClick={() =>
                void run(() =>
                  adminFetch(`/admin/users/${id}/status`, {
                    method: 'PATCH',
                    body: JSON.stringify({ status, reason: statusReason }),
                  }),
                )
              }
            >
              {d.access.saveStatus}
            </Button>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between gap-2">
              <h2 className="font-semibold">{d.access.sessions}</h2>
              <Button
                size="sm"
                variant="destructive"
                disabled={busy}
                onClick={() =>
                  void run(() =>
                    adminFetch(`/admin/users/${id}/sessions/revoke-all`, { method: 'POST' }),
                  )
                }
              >
                {d.access.revokeAll}
              </Button>
            </div>
            <div className="overflow-hidden rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="p-2 text-start">{d.access.client}</th>
                    <th className="p-2 text-start">{d.access.expires}</th>
                    <th className="p-2" />
                  </tr>
                </thead>
                <tbody>
                  {(u.sessions ?? []).map((s: any) => (
                    <tr key={s.id} className="border-t border-border">
                      <td className="p-2 font-mono text-xs" dir="ltr">
                        {s.client}
                      </td>
                      <td className="p-2 font-mono text-xs" dir="ltr">
                        {formatTehranDateTime(s.expiresAt)}
                      </td>
                      <td className="p-2 text-end">
                        <Button
                          size="sm"
                          variant="outline"
                          disabled={busy}
                          onClick={() =>
                            void run(() =>
                              adminFetch(`/admin/users/${id}/sessions/${s.id}`, {
                                method: 'DELETE',
                              }),
                            )
                          }
                        >
                          {d.access.revoke}
                        </Button>
                      </td>
                    </tr>
                  ))}
                  {(u.sessions ?? []).length === 0 ? (
                    <tr>
                      <td colSpan={3} className="p-4 text-center text-muted-foreground">
                        {dict.none}
                      </td>
                    </tr>
                  ) : null}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ) : null}

      {tab === 'wallet' ? (
        <section className="flex max-w-3xl flex-col gap-6">
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="text-xs text-muted-foreground">{d.wallet.balance}</div>
            <div className="font-display text-3xl font-bold font-mono">
              {u.wallet?.balance ?? 0}
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-[1fr_1fr_auto] sm:items-end">
            <div className="grid gap-2">
              <Label>{d.wallet.amount}</Label>
              <Input
                dir="ltr"
                className="font-mono"
                value={walletAmount}
                onChange={(e) => setWalletAmount(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label>{d.wallet.reason}</Label>
              <Input value={walletReason} onChange={(e) => setWalletReason(e.target.value)} />
            </div>
            <Button
              disabled={busy}
              onClick={() =>
                void run(() =>
                  adminFetch(`/admin/users/${id}/wallet/adjust`, {
                    method: 'POST',
                    body: JSON.stringify({
                      amount: Number(walletAmount),
                      reason: walletReason,
                    }),
                  }),
                )
              }
            >
              {d.wallet.adjust}
            </Button>
          </div>
          <div>
            <h2 className="mb-2 font-semibold">{d.wallet.ledger}</h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full min-w-[520px] text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="p-2 text-start">type</th>
                    <th className="p-2 text-start">amount</th>
                    <th className="p-2 text-start">reason</th>
                    <th className="p-2 text-start">date</th>
                  </tr>
                </thead>
                <tbody>
                  {(u.wallet?.ledger ?? []).map((e: any) => (
                    <tr key={e.id} className="border-t border-border">
                      <td className="p-2 font-mono text-xs">{e.type}</td>
                      <td className="p-2 font-mono">{e.amount}</td>
                      <td className="p-2 text-xs">{e.reason}</td>
                      <td className="p-2 font-mono text-xs" dir="ltr">
                        {formatTehranDateTime(e.createdAt)}
                      </td>
                    </tr>
                  ))}
                  {(u.wallet?.ledger ?? []).length === 0 ? (
                    <tr>
                      <td colSpan={4} className="p-4 text-center text-muted-foreground">
                        {dict.none}
                      </td>
                    </tr>
                  ) : null}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ) : null}

      {tab === 'learning' ? (
        <section className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-3">
            <h2 className="font-semibold">{d.learning.enrollments}</h2>
            <div className="flex flex-wrap gap-2">
              <select
                className="h-10 min-w-48 flex-1 rounded-md border border-border bg-card px-3 text-sm"
                value={courseId}
                onChange={(e) => setCourseId(e.target.value)}
              >
                <option value="">—</option>
                {(catalogs.courses ?? []).map((c: any) => (
                  <option key={c.id} value={c.id}>
                    {titleOf(c.i18n, locale)} ({c.slug})
                  </option>
                ))}
              </select>
              <Button
                disabled={busy || !courseId}
                onClick={() =>
                  void run(() =>
                    adminFetch(`/admin/users/${id}/enrollments`, {
                      method: 'POST',
                      body: JSON.stringify({ courseId }),
                    }),
                  )
                }
              >
                {d.learning.grantCourse}
              </Button>
            </div>
            <ul className="divide-y divide-border rounded-lg border border-border">
              {(u.enrollments ?? []).map((en: any) => (
                <li key={en.id} className="flex items-center justify-between gap-2 p-3 text-sm">
                  <div>
                    <div className="font-medium">{titleOf(en.course?.i18n, locale)}</div>
                    <div className="font-mono text-xs text-muted-foreground" dir="ltr">
                      {d.learning.source}: {en.source}
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    disabled={busy}
                    onClick={() =>
                      void run(() =>
                        adminFetch(`/admin/users/${id}/enrollments/${en.courseId}`, {
                          method: 'DELETE',
                        }),
                      )
                    }
                  >
                    {d.learning.revoke}
                  </Button>
                </li>
              ))}
              {(u.enrollments ?? []).length === 0 ? (
                <li className="p-4 text-center text-muted-foreground">{dict.none}</li>
              ) : null}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-semibold">{d.learning.subscriptions}</h2>
            <div className="flex flex-wrap gap-2">
              <select
                className="h-10 min-w-40 flex-1 rounded-md border border-border bg-card px-3 text-sm"
                value={planId}
                onChange={(e) => setPlanId(e.target.value)}
                dir="ltr"
              >
                <option value="">—</option>
                {(catalogs.plans ?? []).map((p: any) => (
                  <option key={p.id} value={p.id}>
                    {p.code} · {p.intervalDays}d · {p.priceCents}
                  </option>
                ))}
              </select>
              <Input
                className="h-10 w-28 font-mono"
                dir="ltr"
                placeholder={d.learning.days}
                value={planDays}
                onChange={(e) => setPlanDays(e.target.value)}
              />
              <Button
                disabled={busy || !planId}
                onClick={() =>
                  void run(() =>
                    adminFetch(`/admin/users/${id}/subscriptions`, {
                      method: 'POST',
                      body: JSON.stringify({
                        planId,
                        days: planDays ? Number(planDays) : undefined,
                      }),
                    }),
                  )
                }
              >
                {d.learning.grantPlan}
              </Button>
            </div>
            <ul className="divide-y divide-border rounded-lg border border-border">
              {(u.subscriptions ?? []).map((s: any) => (
                <li key={s.id} className="flex items-center justify-between gap-2 p-3 text-sm">
                  <div>
                    <div className="font-mono font-medium" dir="ltr">
                      {s.plan?.code} · {s.status}
                    </div>
                    <div className="font-mono text-xs text-muted-foreground" dir="ltr">
                      {formatTehranDate(s.startsAt)} →{' '}
                      {formatTehranDate(s.endsAt)}
                    </div>
                  </div>
                  {s.status === 'active' ? (
                    <Button
                      size="sm"
                      variant="outline"
                      disabled={busy}
                      onClick={() =>
                        void run(() =>
                          adminFetch(`/admin/users/${id}/subscriptions/${s.id}/cancel`, {
                            method: 'POST',
                          }),
                        )
                      }
                    >
                      {d.learning.cancel}
                    </Button>
                  ) : null}
                </li>
              ))}
              {(u.subscriptions ?? []).length === 0 ? (
                <li className="p-4 text-center text-muted-foreground">{dict.none}</li>
              ) : null}
            </ul>
            <Separator />
            <h3 className="text-sm font-semibold">{d.learning.progress}</h3>
            <ul className="max-h-64 overflow-auto text-xs">
              {(u.progress ?? []).map((p: any) => (
                <li key={p.id} className="border-b border-border py-2 font-mono" dir="ltr">
                  {titleOf(p.lesson?.i18n, locale)} · {p.progressPct}% ·{' '}
                  {p.completed ? 'done' : 'in progress'}
                </li>
              ))}
              {(u.progress ?? []).length === 0 ? (
                <li className="text-muted-foreground">{dict.none}</li>
              ) : null}
            </ul>
          </div>
        </section>
      ) : null}

      {tab === 'commerce' ? (
        <section>
          <h2 className="mb-3 font-semibold">{d.commerce.orders}</h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[640px] text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-2 text-start">{d.commerce.kind}</th>
                  <th className="p-2 text-start">{d.commerce.amount}</th>
                  <th className="p-2 text-start">{d.commerce.tokens}</th>
                  <th className="p-2 text-start">{d.commerce.status}</th>
                  <th className="p-2 text-start">{d.commerce.date}</th>
                </tr>
              </thead>
              <tbody>
                {(u.orders ?? []).map((o: any) => (
                  <tr key={o.id} className="border-t border-border">
                    <td className="p-2 font-mono text-xs">{o.kind}</td>
                    <td className="p-2 font-mono">
                      {o.amountCents} {o.currency}
                    </td>
                    <td className="p-2 font-mono">{o.tokenSpent}</td>
                    <td className="p-2">{o.status}</td>
                    <td className="p-2 font-mono text-xs" dir="ltr">
                      {formatTehranDateTime(o.createdAt)}
                    </td>
                  </tr>
                ))}
                {(u.orders ?? []).length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-4 text-center text-muted-foreground">
                      {dict.none}
                    </td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
        </section>
      ) : null}

      {tab === 'support' ? (
        <section className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-3 font-semibold">{d.supportTab.tickets}</h2>
            <ul className="divide-y divide-border rounded-lg border border-border">
              {(u.tickets ?? []).map((t: any) => (
                <li key={t.id} className="p-3 text-sm">
                  <Link href={`/support/${t.id}`} className="font-medium hover:underline">
                    {t.subject}
                  </Link>
                  <div className="font-mono text-xs text-muted-foreground" dir="ltr">
                    {t.status} · {t.priority} · {t.category}
                  </div>
                </li>
              ))}
              {(u.tickets ?? []).length === 0 ? (
                <li className="p-4 text-center text-muted-foreground">{dict.none}</li>
              ) : null}
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-semibold">{d.supportTab.notes}</h2>
            <Textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder={d.supportTab.notePh}
            />
            <Button
              disabled={busy || !note.trim()}
              onClick={() =>
                void run(async () => {
                  await adminFetch(`/admin/users/${id}/notes`, {
                    method: 'POST',
                    body: JSON.stringify({ body: note }),
                  });
                  setNote('');
                })
              }
            >
              {d.supportTab.addNote}
            </Button>
            <ul className="divide-y divide-border rounded-lg border border-border">
              {(u.staffNotes ?? []).map((n: any) => (
                <li key={n.id} className="p-3 text-sm">
                  <p>{n.body}</p>
                  <div className="mt-1 font-mono text-[11px] text-muted-foreground" dir="ltr">
                    {formatTehranDateTime(n.createdAt)}
                  </div>
                </li>
              ))}
              {(u.staffNotes ?? []).length === 0 ? (
                <li className="p-4 text-center text-muted-foreground">{dict.none}</li>
              ) : null}
            </ul>
          </div>
        </section>
      ) : null}

      {tab === 'activity' ? (
        <section className="grid gap-8 lg:grid-cols-3">
          <div>
            <h2 className="mb-2 font-semibold">{d.activity.submissions}</h2>
            <ul className="max-h-80 overflow-auto text-xs">
              {(u.submissions ?? []).map((s: any) => (
                <li key={s.id} className="border-b border-border py-2 font-mono" dir="ltr">
                  {titleOf(s.challenge?.i18n, locale)} · {s.passed ? 'pass' : 'fail'} · score{' '}
                  {s.score} · +{s.tokensEarned}
                </li>
              ))}
              {(u.submissions ?? []).length === 0 ? (
                <li className="text-muted-foreground">{dict.none}</li>
              ) : null}
            </ul>
          </div>
          <div>
            <h2 className="mb-2 font-semibold">{d.activity.live}</h2>
            <ul className="max-h-80 overflow-auto text-xs">
              {(u.liveRegs ?? []).map((r: any) => (
                <li key={r.id} className="border-b border-border py-2 font-mono" dir="ltr">
                  {titleOf(r.live?.i18n, locale)} · {formatTehranDateTime(r.createdAt)}
                </li>
              ))}
              {(u.liveRegs ?? []).length === 0 ? (
                <li className="text-muted-foreground">{dict.none}</li>
              ) : null}
            </ul>
          </div>
          <div>
            <h2 className="mb-2 font-semibold">{d.activity.audit}</h2>
            <ul className="max-h-80 overflow-auto text-xs">
              {(data.audit ?? []).map((a: any) => (
                <li key={a.id} className="border-b border-border py-2 font-mono" dir="ltr">
                  {a.action} · {formatTehranDateTime(a.createdAt)}
                </li>
              ))}
              {(data.audit ?? []).length === 0 ? (
                <li className="text-muted-foreground">{dict.none}</li>
              ) : null}
            </ul>
          </div>
        </section>
      ) : null}
    </div>
  );
}
