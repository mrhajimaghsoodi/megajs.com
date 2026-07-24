'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Collapse, PageEnter, Spinner } from '@/components/ui/motion';
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
        <div className="relative z-10 flex w-full max-w-md flex-col gap-5 rounded-xl border border-white/10 bg-card/95 p-6 shadow-[0_0_0_1px_color-mix(in_oklab,var(--mj-accent)_25%,transparent)] backdrop-blur-sm sm:p-8">
          <div className="flex items-center justify-between gap-3">
            <Image src="/logo.svg" alt="MEGA JS" width={160} height={36} className="h-9 w-auto" />
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="border-white/15 bg-transparent font-mono text-xs"
              onClick={() => setLocale(locale === 'fa' ? 'en' : 'fa')}
            >
              {locale === 'fa' ? 'EN' : 'فا'}
            </Button>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
              ops console
            </p>
            <h1 className="font-display text-3xl font-bold tracking-tight">{dict.login.title}</h1>
            <p className="text-sm text-muted-foreground">{dict.login.subtitle}</p>
            <p className="font-mono text-xs text-muted-foreground" dir="ltr">
              {dict.login.hint}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="admin-phone">{dict.login.phone}</Label>
            <Input
              id="admin-phone"
              className="h-12 border-white/15 bg-black/40 font-mono"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              dir="ltr"
            />
          </div>
          <Button disabled={busy} onClick={() => void requestOtp()} className="h-12 w-full" size="lg">
            {busy ? <Spinner /> : null}
            {dict.login.send}
          </Button>
          <Collapse open={Boolean(devCode)}>
            <Alert className="border-primary/30 bg-primary/10 text-primary">
              <AlertDescription className="font-mono" dir="ltr">
                DEV OTP: {devCode}
              </AlertDescription>
            </Alert>
          </Collapse>
          <div className="flex flex-col gap-2">
            <Label htmlFor="admin-code">{dict.login.code}</Label>
            <Input
              id="admin-code"
              className="h-12 border-white/15 bg-black/40 font-mono"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              dir="ltr"
              placeholder="OTP"
            />
          </div>
          <Button
            variant="secondary"
            disabled={busy}
            onClick={() => void verify()}
            className="h-12 w-full"
            size="lg"
          >
            {busy ? <Spinner /> : null}
            {dict.login.submit}
          </Button>
          {error ? (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          ) : null}
        </div>
      </div>
    </PageEnter>
  );
}
