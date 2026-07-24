'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Button, Collapse, PageEnter } from '@/components/ui/motion';
import { useAdminLocale } from '@/i18n/locale-context';

const API = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:4000/api';

export default function AdminLoginPage() {
  const { locale, dict, setLocale, dir } = useAdminLocale();
  const [phone, setPhone] = useState('+989120000000');
  const [code, setCode] = useState('');
  const [devCode, setDevCode] = useState<string>();
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function requestOtp() {
    setBusy(true);
    setError(null);
    try {
      const res = await fetch(`${API}/auth/otp/request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(
          typeof data.message === 'string'
            ? data.message
            : locale === 'fa'
              ? 'ارسال کد ناموفق بود — API را چک کنید (پورت ۴۰۰۰)'
              : 'OTP request failed — is the API running on :4000?',
        );
        return;
      }
      setDevCode(data.devCode);
      if (data.devCode) setCode(String(data.devCode));
    } catch {
      setError(
        locale === 'fa'
          ? 'API در دسترس نیست. در ترمینال: pnpm --filter @megajs/api dev'
          : 'API unreachable. Run: pnpm --filter @megajs/api dev',
      );
    } finally {
      setBusy(false);
    }
  }

  async function verify() {
    setBusy(true);
    setError(null);
    try {
      const res = await fetch(`${API}/auth/otp/verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, code }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(typeof data.message === 'string' ? data.message : dict.error);
        return;
      }
      const meRes = await fetch(`${API}/auth/me`, {
        headers: { Authorization: `Bearer ${data.accessToken}` },
      });
      if (!meRes.ok) {
        setError(locale === 'fa' ? 'نشست نامعتبر است' : 'Invalid session');
        return;
      }
      const me = await meRes.json();
      if (!['super_admin', 'editor', 'instructor', 'support', 'analyst'].includes(me.role)) {
        setError(
          locale === 'fa' ? 'این حساب دسترسی ادمین ندارد' : 'This account has no admin access',
        );
        return;
      }
      localStorage.setItem('mj_admin_token', data.accessToken);
      window.location.assign('/');
    } catch {
      setError(locale === 'fa' ? 'خطا در ارتباط با سرور' : 'Could not reach the API');
    } finally {
      setBusy(false);
    }
  }

  return (
    <PageEnter>
      <div
        dir={dir}
        lang={locale}
        className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-[#0c0c0c] px-4 text-[var(--mj-canvas-fg)]"
      >
        <div className="pointer-events-none absolute inset-0 mj-code-plane opacity-60" aria-hidden />
        <div className="relative z-10 w-full max-w-md space-y-5 rounded-[var(--mj-radius-lg)] border border-white/10 bg-[#121212]/95 p-6 shadow-[0_0_0_1px_color-mix(in_oklab,var(--mj-yellow)_20%,transparent)] backdrop-blur-sm sm:p-8">
          <div className="flex items-center justify-between gap-3">
            <Image src="/logo.svg" alt="MEGA JS" width={160} height={36} className="h-9 w-auto" />
            <button
              type="button"
              className="mj-btn h-9 cursor-pointer rounded-md border border-white/15 px-3 font-mono text-xs"
              onClick={() => setLocale(locale === 'fa' ? 'en' : 'fa')}
            >
              {locale === 'fa' ? 'EN' : 'فا'}
            </button>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--mj-yellow)]">
              ops console
            </p>
            <h1 className="mt-2 font-display text-3xl font-bold tracking-tight">{dict.login.title}</h1>
            <p className="mt-2 text-sm text-white/55">{dict.login.subtitle}</p>
            <p className="mt-1 font-mono text-xs text-white/40" dir="ltr">
              {dict.login.hint}
            </p>
          </div>
          <label className="grid gap-1 text-sm">
            {dict.login.phone}
            <input
              className="h-12 rounded-md border border-white/15 bg-black/40 px-3 font-mono transition-[border-color,box-shadow] duration-[var(--mj-motion-fast)] focus:border-[var(--mj-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--mj-accent)]/40"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              dir="ltr"
            />
          </label>
          <Button loading={busy} onClick={() => void requestOtp()} className="w-full">
            {dict.login.send}
          </Button>
          <Collapse open={Boolean(devCode)}>
            <p className="rounded-md border border-[var(--mj-yellow)]/30 bg-[var(--mj-yellow)]/10 px-3 py-2 font-mono text-sm text-[var(--mj-yellow)]" dir="ltr">
              DEV OTP: {devCode}
            </p>
          </Collapse>
          <label className="grid gap-1 text-sm">
            {dict.login.code}
            <input
              className="h-12 rounded-md border border-white/15 bg-black/40 px-3 font-mono transition-[border-color,box-shadow] duration-[var(--mj-motion-fast)] focus:border-[var(--mj-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--mj-accent)]/40"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              dir="ltr"
              placeholder="OTP"
            />
          </label>
          <Button variant="secondary" loading={busy} onClick={() => void verify()} className="w-full">
            {dict.login.submit}
          </Button>
          {error ? <p className="mj-slide-down text-sm text-[var(--mj-danger)]">{error}</p> : null}
        </div>
      </div>
    </PageEnter>
  );
}
