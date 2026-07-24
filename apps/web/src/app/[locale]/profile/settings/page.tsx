'use client';

import { useParams } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { getDictionary } from '@/i18n/dictionaries';
import { API_BASE, isLocale, type Locale } from '@/lib/utils';

export default function SettingsPage() {
  const params = useParams<{ locale: string }>();
  const locale = (isLocale(params.locale) ? params.locale : 'fa') as Locale;
  const dict = getDictionary(locale);
  const p = dict.profile;
  const { setTheme: setUiTheme } = useTheme();
  const [displayName, setDisplayName] = useState('');
  const [theme, setTheme] = useState('dark');
  const [email, setEmail] = useState('');
  const [emailVerified, setEmailVerified] = useState(false);
  const [emailCode, setEmailCode] = useState('');
  const [emailDev, setEmailDev] = useState<string | undefined>();
  const [msg, setMsg] = useState('');
  const [verifyEnabled, setVerifyEnabled] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('mj_token');
    if (!token) return;
    void fetch(`${API_BASE}/auth/me`, { headers: { Authorization: `Bearer ${token}` } })
      .then((r) => r.json())
      .then((u) => {
        setDisplayName(u.displayName ?? '');
        const nextTheme = u.theme === 'light' ? 'light' : 'dark';
        setTheme(nextTheme);
        setUiTheme(nextTheme);
        setEmail(u.email ?? '');
        setEmailVerified(Boolean(u.emailVerified));
      });
    void fetch(`${API_BASE}/auth/my-account-policy`)
      .then((r) => (r.ok ? r.json() : null))
      .then((pol) => setVerifyEnabled(Boolean(pol?.emailVerification?.enabled)))
      .catch(() => undefined);
  }, [setUiTheme]);

  async function save() {
    const token = localStorage.getItem('mj_token');
    if (!token) return;
    const nextTheme = theme === 'light' ? 'light' : 'dark';
    const res = await fetch(`${API_BASE}/me/settings`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ displayName, theme: nextTheme, locale }),
    });
    if (res.ok) {
      setUiTheme(nextTheme);
      setMsg(dict.saved);
    } else {
      setMsg(dict.error);
    }
  }

  async function requestEmail() {
    const token = localStorage.getItem('mj_token');
    if (!token) return;
    const res = await fetch(`${API_BASE}/auth/email/request`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    if (!res.ok) {
      setMsg(data.message ?? dict.error);
      return;
    }
    setEmailVerified(false);
    setEmailDev(data.devCode);
    if (data.devCode) setEmailCode(String(data.devCode));
    setMsg(p.emailCodeSent);
  }

  async function verifyEmail() {
    const token = localStorage.getItem('mj_token');
    if (!token) return;
    const res = await fetch(`${API_BASE}/auth/email/verify`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code: emailCode }),
    });
    const data = await res.json();
    if (!res.ok) {
      setMsg(data.message ?? dict.error);
      return;
    }
    setEmailVerified(true);
    setMsg(p.emailVerifiedOk);
  }

  return (
    <div className="max-w-lg space-y-5">
      <h1 className="font-display text-3xl font-bold">{p.settings}</h1>
      <label className="grid gap-1 text-sm">
        {p.displayName}
        <input
          className="h-11 rounded-xl border border-[var(--mj-border)] bg-[var(--mj-card)] px-3"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
      </label>
      <label className="grid gap-1 text-sm">
        {p.theme}
        <select
          className="h-11 rounded-xl border border-[var(--mj-border)] bg-[var(--mj-card)] px-3"
          value={theme}
          onChange={(e) => {
            const next = e.target.value === 'light' ? 'light' : 'dark';
            setTheme(next);
            setUiTheme(next);
          }}
        >
          <option value="dark">{p.themeDark}</option>
          <option value="light">{p.themeLight}</option>
        </select>
      </label>
      <button
        type="button"
        onClick={() => void save()}
        className="h-11 cursor-pointer rounded-xl bg-[var(--mj-accent)] px-4 font-semibold text-[var(--mj-accent-fg)]"
      >
        {dict.save}
      </button>

      <section className="space-y-3 rounded-2xl border border-[var(--mj-border)] bg-[var(--mj-accent-soft)] p-4">
        <div className="flex items-center justify-between gap-3">
          <h2 className="font-display text-lg font-semibold">{p.emailSection}</h2>
          <span
            className={`rounded-lg px-2 py-1 text-xs font-bold ${
              emailVerified
                ? 'bg-emerald-100 text-emerald-800'
                : 'bg-amber-100 text-amber-900'
            }`}
          >
            {emailVerified ? p.emailVerified : p.emailUnverified}
          </span>
        </div>
        {!verifyEnabled ? (
          <p className="text-sm text-[var(--mj-muted-fg)]">{p.emailVerifyDisabled}</p>
        ) : (
          <>
            <label className="grid gap-1 text-sm">
              {p.email}
              <input
                className="h-11 rounded-xl border border-[var(--mj-border)] bg-[var(--mj-card)] px-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                dir="ltr"
              />
            </label>
            <button
              type="button"
              onClick={() => void requestEmail()}
              className="h-10 cursor-pointer rounded-xl border border-[var(--mj-border)] bg-[var(--mj-card)] px-4 text-sm font-semibold"
            >
              {p.sendEmailCode}
            </button>
            {emailDev ? (
              <p className="font-mono text-xs text-[var(--mj-muted-fg)]">DEV: {emailDev}</p>
            ) : null}
            <label className="grid gap-1 text-sm">
              {p.emailCode}
              <input
                className="h-11 rounded-xl border border-[var(--mj-border)] bg-[var(--mj-card)] px-3 font-mono"
                value={emailCode}
                onChange={(e) => setEmailCode(e.target.value)}
                dir="ltr"
              />
            </label>
            <button
              type="button"
              onClick={() => void verifyEmail()}
              className="h-10 cursor-pointer rounded-xl bg-[var(--mj-accent)] px-4 text-sm font-semibold text-[var(--mj-accent-fg)]"
            >
              {p.confirmEmail}
            </button>
          </>
        )}
      </section>

      {msg ? <p className="text-sm text-[var(--mj-muted-fg)]">{msg}</p> : null}
      <div className="rounded-xl border border-[var(--mj-border)] p-4 text-sm text-[var(--mj-muted-fg)]">
        {p.settingsHint}
      </div>
      <a
        href={`/${locale}/profile/support`}
        className="inline-flex text-sm font-medium underline-offset-4 hover:underline"
      >
        {p.needHelp}
      </a>
    </div>
  );
}
