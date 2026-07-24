'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Collapse, PageEnter, Spinner } from '@/components/ui/motion';
import { getDictionary } from '@/i18n/dictionaries';
import { API_BASE, isLocale, type Locale } from '@/lib/utils';

type CaptchaState = {
  enabled: boolean;
  id?: string;
  question?: string;
};

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
  const [captcha, setCaptcha] = useState<CaptchaState>({ enabled: false });
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [emailVerifyOpen, setEmailVerifyOpen] = useState(false);
  const [verifyEmail, setVerifyEmail] = useState('');
  const [emailCode, setEmailCode] = useState('');
  const [emailMsg, setEmailMsg] = useState<string | null>(null);
  const [policy, setPolicy] = useState<{
    emailVerification?: { enabled?: boolean; blockLogin?: boolean };
  } | null>(null);

  async function refreshCaptcha() {
    const res = await fetch(`${API_BASE}/auth/captcha`);
    const data = await res.json();
    setCaptcha({
      enabled: Boolean(data.enabled),
      id: data.id,
      question: data.question,
    });
    setCaptchaAnswer('');
  }

  useEffect(() => {
    void refreshCaptcha().catch(() => undefined);
    void fetch(`${API_BASE}/auth/my-account-policy`)
      .then((r) => (r.ok ? r.json() : null))
      .then((p) => setPolicy(p))
      .catch(() => undefined);
  }, []);

  function captchaPayload() {
    if (!captcha.enabled) return {};
    return { captchaId: captcha.id, captchaAnswer };
  }

  async function requestOtp() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/auth/otp/request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, ...captchaPayload() }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message ?? dict.error);
      setDevCode(data.devCode);
      if (data.devCode) setCode(String(data.devCode));
      await refreshCaptcha();
    } catch (e) {
      setError(e instanceof Error ? e.message : dict.error);
      await refreshCaptcha();
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
        body: JSON.stringify({ phone, code, ...captchaPayload() }),
      });
      const data = await res.json();
      if (!res.ok) {
        const msg = Array.isArray(data.message)
          ? data.message.join(', ')
          : data.message ?? dict.error;
        if (String(msg).toLowerCase().includes('email')) {
          setEmailVerifyOpen(true);
        }
        throw new Error(msg);
      }
      setToken(data.accessToken);
      localStorage.setItem('mj_token', data.accessToken);
      await refreshCaptcha();
    } catch (e) {
      setError(e instanceof Error ? e.message : dict.error);
      await refreshCaptcha();
    } finally {
      setLoading(false);
    }
  }

  async function sendEmailCode() {
    setEmailMsg(null);
    const res = await fetch(`${API_BASE}/auth/email/request-public`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: verifyEmail }),
    });
    const data = await res.json();
    if (!res.ok) {
      setEmailMsg(data.message ?? dict.error);
      return;
    }
    if (data.devCode) setEmailCode(String(data.devCode));
    setEmailMsg(l.emailCodeSent);
  }

  async function confirmEmailCode() {
    setEmailMsg(null);
    const res = await fetch(`${API_BASE}/auth/email/verify-public`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: verifyEmail, code: emailCode }),
    });
    const data = await res.json();
    if (!res.ok) {
      setEmailMsg(data.message ?? dict.error);
      return;
    }
    setEmailMsg(l.emailVerifiedOk);
  }

  return (
    <PageEnter className="mx-auto flex max-w-md flex-col gap-6 px-4 py-16 sm:px-6">
      <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--mj-shadow-sm)]">
        <div className="flex flex-col gap-2">
          <h1 className="font-display text-3xl font-bold">{l.title}</h1>
          <p className="text-sm text-muted-foreground">{l.subtitle}</p>
        </div>
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="phone">{l.phone}</Label>
            <Input
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="h-12 rounded-xl font-mono"
              dir="ltr"
            />
          </div>
          {captcha.enabled ? (
            <div className="flex flex-col gap-2">
              <Label htmlFor="captcha">
                {l.captcha} — {captcha.question}
              </Label>
              <Input
                id="captcha"
                value={captchaAnswer}
                onChange={(e) => setCaptchaAnswer(e.target.value)}
                className="h-12 rounded-xl font-mono"
                dir="ltr"
              />
            </div>
          ) : null}
          <Button disabled={loading} onClick={() => void requestOtp()} className="h-12 w-full rounded-xl" size="lg">
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
              className="h-12 rounded-xl font-mono"
              dir="ltr"
            />
          </div>
          <Button
            variant="secondary"
            disabled={loading}
            onClick={() => void verifyOtp()}
            className="h-12 w-full rounded-xl"
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
              <AlertDescription>
                {l.success}{' '}
                <Link href={`/${locale}/profile`} className="font-semibold underline">
                  {dict.nav.profile}
                </Link>
              </AlertDescription>
            </Alert>
          </Collapse>
        </div>
      </div>

      {(policy?.emailVerification?.enabled || emailVerifyOpen) && (
        <div className="rounded-2xl border border-border bg-card p-5 shadow-[var(--mj-shadow-sm)]">
          <button
            type="button"
            className="flex w-full items-center justify-between text-start font-display text-lg font-semibold"
            onClick={() => setEmailVerifyOpen((v) => !v)}
          >
            {l.verifyEmailTitle}
            <span>{emailVerifyOpen ? '▾' : '▸'}</span>
          </button>
          <Collapse open={emailVerifyOpen}>
            <div className="mt-4 space-y-3">
              <p className="text-sm text-muted-foreground">{l.verifyEmailBody}</p>
              <Input
                value={verifyEmail}
                onChange={(e) => setVerifyEmail(e.target.value)}
                placeholder={l.email}
                className="h-11 rounded-xl"
                dir="ltr"
              />
              <Button variant="outline" className="w-full rounded-xl" onClick={() => void sendEmailCode()}>
                {l.sendEmailCode}
              </Button>
              <Input
                value={emailCode}
                onChange={(e) => setEmailCode(e.target.value)}
                placeholder={l.emailCode}
                className="h-11 rounded-xl font-mono"
                dir="ltr"
              />
              <Button className="w-full rounded-xl" onClick={() => void confirmEmailCode()}>
                {l.confirmEmail}
              </Button>
              {emailMsg ? <p className="text-sm text-muted-foreground">{emailMsg}</p> : null}
            </div>
          </Collapse>
        </div>
      )}

      <Button variant="ghost" className="justify-start px-0" onClick={() => setMoreOpen((v) => !v)}>
        {moreOpen ? '▾' : '▸'} {locale === 'fa' ? 'روش‌های دیگر' : 'Other methods'}
      </Button>
      <Collapse open={moreOpen}>
        <div className="grid gap-2 pb-1">
          <Button variant="outline" disabled className="w-full rounded-xl opacity-60">
            Google
          </Button>
          <Button variant="outline" disabled className="w-full rounded-xl opacity-60">
            GitHub
          </Button>
        </div>
      </Collapse>
    </PageEnter>
  );
}
