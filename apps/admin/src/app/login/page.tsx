'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button, Collapse, PageEnter } from '@/components/ui/motion';
import { useAdminLocale } from '@/i18n/locale-context';

const API = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:4000/api';

export default function AdminLoginPage() {
  const router = useRouter();
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
      const data = await res.json();
      if (!res.ok) {
        setError(data.message ?? dict.error);
        return;
      }
      setDevCode(data.devCode);
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
      const data = await res.json();
      if (!res.ok) {
        setError(data.message ?? dict.error);
        return;
      }
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
    } finally {
      setBusy(false);
    }
  }

  return (
    <PageEnter>
      <div
        dir={dir}
        lang={locale}
        className="mx-auto flex min-h-dvh max-w-md flex-col justify-center gap-4 px-4"
      >
        <div className="flex items-center justify-between gap-3">
          <Image src="/logo.svg" alt="MEGA JS" width={160} height={36} className="h-9 w-auto" />
          <button
            type="button"
            className="mj-btn h-9 cursor-pointer rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] px-3 text-sm"
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
            className="h-12 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] px-3 font-mono transition-[border-color,box-shadow] duration-[var(--mj-motion-fast)] focus:border-[var(--mj-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--mj-accent)]/40"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            dir="ltr"
          />
        </label>
        <Button loading={busy} onClick={() => void requestOtp()} className="w-full">
          {dict.login.send}
        </Button>
        <Collapse open={Boolean(devCode)}>
          <p className="pb-1 font-mono text-sm" dir="ltr">
            DEV: {devCode}
          </p>
        </Collapse>
        <label className="grid gap-1 text-sm">
          {dict.login.code}
          <input
            className="h-12 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] px-3 font-mono transition-[border-color,box-shadow] duration-[var(--mj-motion-fast)] focus:border-[var(--mj-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--mj-accent)]/40"
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
    </PageEnter>
  );
}
