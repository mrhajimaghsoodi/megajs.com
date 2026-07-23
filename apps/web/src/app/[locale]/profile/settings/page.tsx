'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getDictionary } from '@/i18n/dictionaries';
import { API_BASE, isLocale, type Locale } from '@/lib/utils';

export default function SettingsPage() {
  const params = useParams<{ locale: string }>();
  const locale = (isLocale(params.locale) ? params.locale : 'fa') as Locale;
  const dict = getDictionary(locale);
  const p = dict.profile;
  const [displayName, setDisplayName] = useState('');
  const [theme, setTheme] = useState('light');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('mj_token');
    if (!token) return;
    void fetch(`${API_BASE}/auth/me`, { headers: { Authorization: `Bearer ${token}` } })
      .then((r) => r.json())
      .then((u) => {
        setDisplayName(u.displayName ?? '');
        setTheme(u.theme ?? 'light');
      });
  }, []);

  async function save() {
    const token = localStorage.getItem('mj_token');
    if (!token) return;
    const res = await fetch(`${API_BASE}/me/settings`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ displayName, theme, locale }),
    });
    setMsg(res.ok ? dict.saved : dict.error);
  }

  return (
    <div className="max-w-lg space-y-4">
      <h1 className="font-display text-3xl font-bold">{p.settings}</h1>
      <label className="grid gap-1 text-sm">
        {p.displayName}
        <input
          className="h-11 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] px-3"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
      </label>
      <label className="grid gap-1 text-sm">
        {p.theme}
        <select
          className="h-11 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] px-3"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >
          <option value="light">{p.themeLight}</option>
          <option value="dark">{p.themeDark}</option>
        </select>
      </label>
      <button
        type="button"
        onClick={() => void save()}
        className="h-11 cursor-pointer rounded-[var(--mj-radius-md)] bg-[var(--mj-accent)] px-4 font-semibold text-[var(--mj-accent-fg)]"
      >
        {dict.save}
      </button>
      {msg ? <p className="text-sm text-[var(--mj-muted-fg)]">{msg}</p> : null}
      <div className="rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-4 text-sm text-[var(--mj-muted-fg)]">
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
