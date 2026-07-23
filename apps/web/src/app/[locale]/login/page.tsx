'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import { getDictionary } from '@/i18n/dictionaries';
import { API_BASE, isLocale, type Locale } from '@/lib/utils';

export default function LoginPage() {
  const params = useParams<{ locale: string }>();
  const locale = (isLocale(params.locale) ? params.locale : 'fa') as Locale;
  const dict = getDictionary(locale);
  const l = dict.login;
  const [phone, setPhone] = useState('+98912');
  const [code, setCode] = useState('');
  const [devCode, setDevCode] = useState<string | undefined>();
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function requestOtp() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/auth/otp/request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message ?? dict.error);
      setDevCode(data.devCode);
    } catch (e) {
      setError(e instanceof Error ? e.message : dict.error);
    } finally {
      setLoading(false);
    }
  }

  async function verifyOtp() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/auth/otp/verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, code }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message ?? dict.error);
      setToken(data.accessToken);
      localStorage.setItem('mj_token', data.accessToken);
    } catch (e) {
      setError(e instanceof Error ? e.message : dict.error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto flex max-w-md flex-col gap-6 px-4 py-16 sm:px-6">
      <h1 className="font-display text-3xl font-bold">{l.title}</h1>
      <p className="text-sm text-[var(--mj-muted-fg)]">{l.subtitle}</p>
      <label className="grid gap-2 text-sm">
        <span>{l.phone}</span>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="h-12 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] px-3"
          dir="ltr"
        />
      </label>
      <button
        type="button"
        disabled={loading}
        onClick={requestOtp}
        className="h-12 cursor-pointer rounded-[var(--mj-radius-md)] bg-[var(--mj-accent)] font-semibold text-[var(--mj-accent-fg)] disabled:opacity-60"
      >
        {loading ? dict.loading : l.sendCode}
      </button>
      {devCode ? (
        <>
          <p className="font-mono text-sm text-[var(--mj-muted-fg)]">DEV CODE: {devCode}</p>
          <p className="text-xs text-[var(--mj-muted-fg)]">{l.hint}</p>
        </>
      ) : null}
      <label className="grid gap-2 text-sm">
        <span>{l.code}</span>
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="h-12 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] px-3"
          dir="ltr"
        />
      </label>
      <button
        type="button"
        disabled={loading}
        onClick={verifyOtp}
        className="h-12 cursor-pointer rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] font-semibold hover:bg-[var(--mj-muted)] disabled:opacity-60"
      >
        {loading ? dict.loading : l.verify}
      </button>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
      {token ? (
        <p className="rounded-[var(--mj-radius-md)] bg-[var(--mj-muted)] p-3 text-sm">{l.success}</p>
      ) : null}
      <div className="grid gap-2">
        <button
          type="button"
          className="h-11 cursor-pointer rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] text-sm opacity-60"
          disabled
        >
          Google (phase M1 wiring)
        </button>
        <button
          type="button"
          className="h-11 cursor-pointer rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] text-sm opacity-60"
          disabled
        >
          GitHub (phase M1 wiring)
        </button>
      </div>
    </div>
  );
}
