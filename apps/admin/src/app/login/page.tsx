'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useAdminLocale } from '@/i18n/locale-context';

const API = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:4000/api';

export default function AdminLoginPage() {
  const router = useRouter();
  const { locale, dict, setLocale, dir } = useAdminLocale();
  const [phone, setPhone] = useState('+989120000000');
  const [code, setCode] = useState('');
  const [devCode, setDevCode] = useState<string>();
  const [error, setError] = useState<string | null>(null);

  async function requestOtp() {
    setError(null);
    const res = await fetch(`${API}/auth/otp/request`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone }),
    });
    const data = await res.json();
    if (!res.ok) return setError(data.message ?? dict.error);
    setDevCode(data.devCode);
  }

  async function verify() {
    setError(null);
    const res = await fetch(`${API}/auth/otp/verify`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone, code }),
    });
    const data = await res.json();
    if (!res.ok) return setError(data.message ?? dict.error);
    const meRes = await fetch(`${API}/auth/me`, {
      headers: { Authorization: `Bearer ${data.accessToken}` },
    });
    const me = await meRes.json();
    if (!['super_admin', 'editor', 'instructor', 'support', 'analyst'].includes(me.role)) {
      setError(
        locale === 'fa' ? 'این حساب دسترسی ادمین ندارد' : 'This account has no admin access',
      );
      return;
    }
    localStorage.setItem('mj_admin_token', data.accessToken);
    router.replace('/');
  }

  return (
    <div dir={dir} lang={locale} className="mx-auto flex min-h-dvh max-w-md flex-col justify-center gap-4 px-4">
      <div className="flex items-center justify-between gap-3">
        <Image src="/logo.svg" alt="MEGA JS" width={160} height={36} className="h-9 w-auto" />
        <button
          type="button"
          className="h-9 cursor-pointer rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] px-3 text-sm"
          onClick={() => setLocale(locale === 'fa' ? 'en' : 'fa')}
        >
          {locale === 'fa' ? 'EN' : 'فا'}
        </button>
      </div>
      <h1 className="font-display text-3xl font-bold">{dict.login.title}</h1>
      <p className="text-sm text-[var(--mj-muted-fg)]">{dict.login.subtitle}</p>
      <p className="text-sm text-[var(--mj-muted-fg)]">{dict.login.hint}</p>
      <label className="grid gap-1 text-sm">
        {dict.login.phone}
        <input
          className="h-12 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] px-3 font-mono"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          dir="ltr"
        />
      </label>
      <button
        type="button"
        onClick={() => void requestOtp()}
        className="h-11 cursor-pointer rounded-[var(--mj-radius-md)] bg-[var(--mj-accent)] font-semibold text-[var(--mj-accent-fg)]"
      >
        {dict.login.send}
      </button>
      {devCode ? (
        <p className="font-mono text-sm" dir="ltr">
          DEV: {devCode}
        </p>
      ) : null}
      <label className="grid gap-1 text-sm">
        {dict.login.code}
        <input
          className="h-12 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] px-3 font-mono"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          dir="ltr"
          placeholder="OTP"
        />
      </label>
      <button
        type="button"
        onClick={() => void verify()}
        className="h-11 cursor-pointer rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] font-semibold hover:bg-[var(--mj-muted)]"
      >
        {dict.login.submit}
      </button>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
    </div>
  );
}
