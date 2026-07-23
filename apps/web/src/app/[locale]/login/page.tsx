'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import { API_BASE, isLocale, type Locale } from '@/lib/utils';

export default function LoginPage() {
  const params = useParams<{ locale: string }>();
  const locale = (isLocale(params.locale) ? params.locale : 'fa') as Locale;
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
      if (!res.ok) throw new Error(data.message ?? 'OTP request failed');
      setDevCode(data.devCode);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Error');
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
      if (!res.ok) throw new Error(data.message ?? 'OTP verify failed');
      setToken(data.accessToken);
      localStorage.setItem('mj_token', data.accessToken);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto flex max-w-md flex-col gap-6 px-4 py-16 sm:px-6">
      <h1 className="font-display text-3xl font-bold">
        {locale === 'fa' ? 'ورود با کد پیامک' : 'Log in with SMS code'}
      </h1>
      <p className="text-sm text-[var(--mj-muted-fg)]">
        {locale === 'fa'
          ? 'شماره موبایل ستون ورود در وب، موبایل و دسکتاپ است. Google و GitHub قابل لینک‌اند.'
          : 'Phone OTP is the universal login across web, mobile, and desktop. Google and GitHub can be linked.'}
      </p>
      <label className="grid gap-2 text-sm">
        <span>{locale === 'fa' ? 'شماره موبایل' : 'Phone'}</span>
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
        {locale === 'fa' ? 'ارسال کد' : 'Send code'}
      </button>
      {devCode ? (
        <p className="font-mono text-sm text-[var(--mj-muted-fg)]">DEV CODE: {devCode}</p>
      ) : null}
      <label className="grid gap-2 text-sm">
        <span>{locale === 'fa' ? 'کد تأیید' : 'Verification code'}</span>
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
        {locale === 'fa' ? 'تأیید و ورود' : 'Verify & enter'}
      </button>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
      {token ? (
        <p className="rounded-[var(--mj-radius-md)] bg-[var(--mj-muted)] p-3 text-sm">
          {locale === 'fa' ? 'ورود موفق — توکن ذخیره شد.' : 'Logged in — token stored.'}
        </p>
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
