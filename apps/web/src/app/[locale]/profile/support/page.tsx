'use client';

import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getDictionary } from '@/i18n/dictionaries';
import { API_BASE, isLocale, type Locale } from '@/lib/utils';

const CATEGORY_IDS = ['billing', 'technical', 'content', 'account', 'live', 'other'] as const;
const PRIORITY_IDS = ['low', 'normal', 'high', 'urgent'] as const;

export default function SupportTicketsPage() {
  const params = useParams<{ locale: string }>();
  const router = useRouter();
  const locale = (isLocale(params.locale) ? params.locale : 'fa') as Locale;
  const dict = getDictionary(locale);
  const s = dict.support;
  const [token, setToken] = useState<string | null>(null);
  const [tickets, setTickets] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [subject, setSubject] = useState('');
  const [category, setCategory] = useState('other');
  const [priority, setPriority] = useState('normal');
  const [body, setBody] = useState('');
  const [busy, setBusy] = useState(false);

  async function load(t: string) {
    const res = await fetch(`${API_BASE}/support/tickets`, {
      headers: { Authorization: `Bearer ${t}` },
    });
    if (!res.ok) throw new Error(s.loadError);
    setTickets(await res.json());
  }

  useEffect(() => {
    const t = localStorage.getItem('mj_token');
    setToken(t);
    if (!t) return;
    void load(t).catch((e) => setError(e.message));
  }, []);

  if (token === null) {
    return <div className="text-sm text-[var(--mj-muted-fg)]">{dict.loading}</div>;
  }

  if (!token) {
    return (
      <div>
        <h1 className="font-display text-3xl font-bold">{s.title}</h1>
        <p className="mt-3 text-[var(--mj-muted-fg)]">{s.loginNeeded}</p>
        <Link
          href={`/${locale}/login`}
          className="mt-4 inline-flex h-11 items-center rounded-[var(--mj-radius-md)] bg-[var(--mj-accent)] px-4 font-semibold text-[var(--mj-accent-fg)]"
        >
          {dict.nav.login}
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl font-bold">{s.title}</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{s.subtitle}</p>
      </div>

      <section className="rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-5">
        <h2 className="font-display text-xl font-semibold">{s.newTicket}</h2>
        <form
          className="mt-4 grid gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            setBusy(true);
            setError(null);
            void fetch(`${API_BASE}/support/tickets`, {
              method: 'POST',
              headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ subject, category, priority, body }),
            })
              .then(async (r) => {
                if (!r.ok) throw new Error(await r.text());
                return r.json();
              })
              .then((ticket) => {
                setSubject('');
                setBody('');
                router.push(`/${locale}/profile/support/${ticket.id}`);
              })
              .catch((err) => setError(err.message))
              .finally(() => setBusy(false));
          }}
        >
          <input
            required
            minLength={3}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder={s.subject}
            className="h-11 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-bg)] px-3"
          />
          <div className="grid gap-3 sm:grid-cols-2">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="h-11 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-bg)] px-3"
            >
              {CATEGORY_IDS.map((id) => (
                <option key={id} value={id}>
                  {s.category[id]}
                </option>
              ))}
            </select>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="h-11 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-bg)] px-3"
            >
              {PRIORITY_IDS.map((id) => (
                <option key={id} value={id}>
                  {s.priority[id]}
                </option>
              ))}
            </select>
          </div>
          <textarea
            required
            minLength={5}
            rows={5}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder={s.message}
            className="rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-bg)] px-3 py-2"
          />
          <button
            type="submit"
            disabled={busy}
            className="h-11 cursor-pointer rounded-[var(--mj-radius-md)] bg-[var(--mj-accent)] px-4 font-semibold text-[var(--mj-accent-fg)] disabled:opacity-60"
          >
            {busy ? dict.loading : s.submit}
          </button>
        </form>
      </section>

      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold">{s.myTickets}</h2>
        {tickets.length === 0 ? (
          <p className="text-sm text-[var(--mj-muted-fg)]">{s.none}</p>
        ) : (
          tickets.map((t) => (
            <Link
              key={t.id}
              href={`/${locale}/profile/support/${t.id}`}
              className="block rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-4 transition-colors hover:border-[var(--mj-accent)]"
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <div className="font-semibold">{t.subject}</div>
                  <div className="mt-1 text-xs text-[var(--mj-muted-fg)]">
                    {s.category[t.category as keyof typeof s.category] ?? t.category} ·{' '}
                    {s.priority[t.priority as keyof typeof s.priority] ?? t.priority} ·{' '}
                    {t._count?.messages ?? 0} {s.msgs}
                  </div>
                </div>
                <span className="rounded-full bg-[var(--mj-muted)] px-2 py-1 text-xs font-medium">
                  {s.status[t.status as keyof typeof s.status] ?? t.status}
                </span>
              </div>
              {t.messages?.[0] ? (
                <p className="mt-3 line-clamp-2 text-sm text-[var(--mj-muted-fg)]">
                  {t.messages[0].body}
                </p>
              ) : null}
            </Link>
          ))
        )}
      </section>
    </div>
  );
}
