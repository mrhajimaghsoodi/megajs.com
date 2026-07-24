'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Collapse, PageEnter, Spinner } from '@/components/ui/motion';
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
  const [moreOpen, setMoreOpen] = useState(false);

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
      if (data.devCode) setCode(String(data.devCode));
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
    <PageEnter className="mx-auto flex max-w-md flex-col gap-6 px-4 py-16 sm:px-6">
      <div className="flex flex-col gap-2">
        <h1 className="font-display text-3xl font-bold">{l.title}</h1>
        <p className="text-sm text-muted-foreground">{l.subtitle}</p>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="phone">{l.phone}</Label>
        <Input
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="h-12 font-mono"
          dir="ltr"
        />
      </div>
      <Button disabled={loading} onClick={() => void requestOtp()} className="h-12 w-full" size="lg">
        {loading ? <Spinner /> : null}
        {l.sendCode}
      </Button>
      <Collapse open={Boolean(devCode)}>
        <div className="flex flex-col gap-2 pb-1">
          <p className="font-mono text-sm text-muted-foreground">DEV CODE: {devCode}</p>
          <p className="text-xs text-muted-foreground">{l.hint}</p>
        </div>
      </Collapse>
      <div className="flex flex-col gap-2">
        <Label htmlFor="code">{l.code}</Label>
        <Input
          id="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="h-12 font-mono"
          dir="ltr"
        />
      </div>
      <Button
        variant="secondary"
        disabled={loading}
        onClick={() => void verifyOtp()}
        className="h-12 w-full"
        size="lg"
      >
        {loading ? <Spinner /> : null}
        {l.verify}
      </Button>
      {error ? (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ) : null}
      <Collapse open={Boolean(token)}>
        <Alert>
          <AlertDescription>{l.success}</AlertDescription>
        </Alert>
      </Collapse>

      <Button variant="ghost" className="justify-start px-0" onClick={() => setMoreOpen((v) => !v)}>
        {moreOpen ? '▾' : '▸'} {locale === 'fa' ? 'روش‌های دیگر' : 'Other methods'}
      </Button>
      <Collapse open={moreOpen}>
        <div className="grid gap-2 pb-1">
          <Button variant="outline" disabled className="w-full opacity-60">
            Google
          </Button>
          <Button variant="outline" disabled className="w-full opacity-60">
            GitHub
          </Button>
        </div>
      </Collapse>
    </PageEnter>
  );
}
