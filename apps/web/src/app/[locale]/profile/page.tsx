'use client';

import { useParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { API_BASE, isLocale, type Locale } from '@/lib/utils';

type Me = {
  id: string;
  displayName?: string | null;
  phone?: string | null;
  phoneVerified?: boolean;
  identities?: Array<{ provider: string }>;
  wallet?: { balance: number } | null;
  subscriptions?: Array<{ status: string; endsAt: string; plan?: { code: string } }>;
};

type Ledger = Array<{ id: string; type: string; amount: number; reason: string; createdAt: string }>;

export default function ProfilePage() {
  const params = useParams<{ locale: string }>();
  const locale = (isLocale(params.locale) ? params.locale : 'fa') as Locale;
  const fa = locale === 'fa';

  const [token, setToken] = useState<string | null>(null);
  const [me, setMe] = useState<Me | null>(null);
  const [ledger, setLedger] = useState<Ledger>([]);
  const [plans, setPlans] = useState<Array<{ id: string; code: string; priceCents: number }>>([]);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    setToken(localStorage.getItem('mj_token'));
  }, []);

  const headers = useMemo(() => {
    const h: Record<string, string> = { 'Content-Type': 'application/json' };
    if (token) h.Authorization = `Bearer ${token}`;
    return h;
  }, [token]);

  async function refresh() {
    if (!token) return;
    setError(null);
    try {
      const [meRes, walletRes, ledgerRes, plansRes] = await Promise.all([
        fetch(`${API_BASE}/auth/me`, { headers }),
        fetch(`${API_BASE}/wallet`, { headers }),
        fetch(`${API_BASE}/wallet/ledger`, { headers }),
        fetch(`${API_BASE}/billing/plans`),
      ]);
      if (!meRes.ok) throw new Error('Unauthorized — please log in again');
      const meJson = await meRes.json();
      const walletJson = walletRes.ok ? await walletRes.json() : null;
      setMe({ ...meJson, wallet: walletJson });
      setLedger(ledgerRes.ok ? await ledgerRes.json() : []);
      setPlans(plansRes.ok ? await plansRes.json() : []);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Error');
    }
  }

  useEffect(() => {
    void refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  async function checkoutSubscription() {
    if (!token) return;
    setBusy(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/billing/checkout/subscription`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ planCode: 'pro-monthly', tokenSpend: 0 }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message ?? 'Checkout failed');
      await refresh();
      alert(fa ? `اشتراک فعال شد (stub): ${data.subscriptionId}` : `Subscription active (stub): ${data.subscriptionId}`);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Error');
    } finally {
      setBusy(false);
    }
  }

  if (!token) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 className="font-display text-4xl font-bold">{fa ? 'پنل من' : 'My panel'}</h1>
        <p className="mt-3 text-[var(--mj-muted-fg)]">
          {fa ? 'ابتدا وارد شوید تا کیف‌توکن و اشتراک را ببینید.' : 'Log in to see wallet and subscriptions.'}
        </p>
        <a
          href={`/${locale}/login`}
          className="mt-6 inline-flex h-11 cursor-pointer items-center rounded-[var(--mj-radius-md)] bg-[var(--mj-accent)] px-4 font-semibold text-[var(--mj-accent-fg)]"
        >
          {fa ? 'ورود' : 'Log in'}
        </a>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl space-y-8 px-4 py-12 sm:px-6">
      <div>
        <h1 className="font-display text-4xl font-bold">{fa ? 'پنل من' : 'My panel'}</h1>
        <p className="mt-2 text-[var(--mj-muted-fg)]">
          {me?.displayName ?? me?.phone ?? me?.id}
        </p>
      </div>

      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}

      <section className="rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-5">
        <h2 className="font-display text-xl font-semibold">{fa ? 'هویت' : 'Identity'}</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li>
            {fa ? 'موبایل:' : 'Phone:'} {me?.phone ?? '—'}{' '}
            {me?.phoneVerified ? (fa ? '(تأیید شده)' : '(verified)') : ''}
          </li>
          <li>
            {fa ? 'ارائه‌دهندگان:' : 'Providers:'}{' '}
            {(me?.identities ?? []).map((i) => i.provider).join(', ') || 'phone'}
          </li>
        </ul>
      </section>

      <section className="rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-5">
        <h2 className="font-display text-xl font-semibold">{fa ? 'کیف توکن' : 'Token wallet'}</h2>
        <p className="mt-2 font-mono text-3xl font-bold">{me?.wallet?.balance ?? 0}</p>
        <p className="mt-1 text-sm text-[var(--mj-muted-fg)]">
          {fa ? 'از چالش‌ها امتیاز بگیرید و برای اشتراک/دوره خرج کنید.' : 'Earn from challenges, spend on sub/courses.'}
        </p>
        <div className="mt-4 space-y-2">
          {ledger.slice(0, 8).map((row) => (
            <div key={row.id} className="flex justify-between gap-3 border-t border-[var(--mj-border)] pt-2 text-sm">
              <span>{row.reason}</span>
              <span className="font-mono">{row.amount > 0 ? `+${row.amount}` : row.amount}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-5">
        <h2 className="font-display text-xl font-semibold">{fa ? 'اشتراک' : 'Subscription'}</h2>
        <div className="mt-3 space-y-2 text-sm">
          {(me?.subscriptions ?? []).length === 0 ? (
            <p className="text-[var(--mj-muted-fg)]">{fa ? 'اشتراک فعالی ندارید.' : 'No active subscription.'}</p>
          ) : (
            me?.subscriptions?.map((s, idx) => (
              <p key={idx}>
                {s.plan?.code} · {s.status} · {new Date(s.endsAt).toLocaleDateString(fa ? 'fa-IR' : 'en-US')}
              </p>
            ))
          )}
        </div>
        <button
          type="button"
          disabled={busy}
          onClick={checkoutSubscription}
          className="mt-4 h-11 cursor-pointer rounded-[var(--mj-radius-md)] bg-[var(--mj-accent)] px-4 font-semibold text-[var(--mj-accent-fg)] disabled:opacity-60"
        >
          {fa ? 'فعال‌سازی اشتراک ماهانه (stub)' : 'Activate monthly plan (stub)'}
        </button>
        {plans[0] ? (
          <p className="mt-2 font-mono text-xs text-[var(--mj-muted-fg)]">
            {plans[0].code} · {plans[0].priceCents.toLocaleString()} {fa ? 'ریال' : 'IRT'}
          </p>
        ) : null}
      </section>
    </div>
  );
}
