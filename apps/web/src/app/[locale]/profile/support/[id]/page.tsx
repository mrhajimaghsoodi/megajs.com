'use client';

import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { getDictionary } from '@/i18n/dictionaries';
import { API_BASE, isLocale, type Locale } from '@/lib/utils';

export default function SupportTicketDetailPage() {
  const params = useParams<{ locale: string; id: string }>();
  const router = useRouter();
  const locale = (isLocale(params.locale) ? params.locale : 'fa') as Locale;
  const dict = getDictionary(locale);
  const s = dict.support;
  const [token, setToken] = useState<string | null>(null);
  const [ticket, setTicket] = useState<any>(null);
  const [reply, setReply] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const load = useCallback(
    async (t: string) => {
      const res = await fetch(`${API_BASE}/support/tickets/${params.id}`, {
        headers: { Authorization: `Bearer ${t}` },
      });
      if (!res.ok) throw new Error(s.notFound);
      setTicket(await res.json());
    },
    [params.id, s.notFound],
  );

  useEffect(() => {
    const t = localStorage.getItem('mj_token');
    setToken(t);
    if (!t) return;
    void load(t).catch((e) => setError(e.message));
  }, [load]);

  if (!token) {
    return (
      <div>
        <Link href={`/${locale}/login`} className="underline">
          {dict.nav.login}
        </Link>
      </div>
    );
  }

  if (!ticket && !error) {
    return <div className="text-sm text-[var(--mj-muted-fg)]">{dict.loading}</div>;
  }

  if (error && !ticket) {
    return <p className="text-sm text-[var(--mj-danger)]">{error}</p>;
  }

  const closed = ticket.status === 'closed';

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <Link
            href={`/${locale}/profile/support`}
            className="text-sm text-[var(--mj-muted-fg)] underline-offset-4 hover:underline"
          >
            ← {s.allTickets}
          </Link>
          <h1 className="mt-2 font-display text-3xl font-bold">{ticket.subject}</h1>
          <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">
            {s.category[ticket.category as keyof typeof s.category] ?? ticket.category} ·{' '}
            {s.priority[ticket.priority as keyof typeof s.priority] ?? ticket.priority} ·{' '}
            {s.status[ticket.status as keyof typeof s.status] ?? ticket.status}
          </p>
        </div>
        {!closed ? (
          <button
            type="button"
            className="h-10 cursor-pointer rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] px-3 text-sm"
            onClick={() => {
              setBusy(true);
              void fetch(`${API_BASE}/support/tickets/${ticket.id}/close`, {
                method: 'PATCH',
                headers: { Authorization: `Bearer ${token}` },
              })
                .then(() => load(token))
                .catch((e) => setError(e.message))
                .finally(() => setBusy(false));
            }}
          >
            {s.close}
          </button>
        ) : null}
      </div>

      <div className="space-y-3">
        {(ticket.messages ?? []).map((m: any) => (
          <article
            key={m.id}
            className={`rounded-[var(--mj-radius-md)] border p-4 ${
              m.isStaff
                ? 'border-[var(--mj-accent)]/40 bg-[var(--mj-accent)]/10'
                : 'border-[var(--mj-border)] bg-[var(--mj-card)]'
            }`}
          >
            <div className="flex justify-between gap-2 text-xs text-[var(--mj-muted-fg)]">
              <span>
                {m.isStaff ? s.staff : s.you}
                {m.author?.displayName ? ` · ${m.author.displayName}` : ''}
              </span>
              <time dir="ltr">
                {new Date(m.createdAt).toLocaleString(locale === 'fa' ? 'fa-IR' : 'en-US')}
              </time>
            </div>
            <p className="mt-2 whitespace-pre-wrap text-sm leading-7">{m.body}</p>
          </article>
        ))}
      </div>

      {!closed ? (
        <form
          className="space-y-3 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-4"
          onSubmit={(e) => {
            e.preventDefault();
            setBusy(true);
            setError(null);
            void fetch(`${API_BASE}/support/tickets/${ticket.id}/messages`, {
              method: 'POST',
              headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ body: reply }),
            })
              .then(async (r) => {
                if (!r.ok) throw new Error(await r.text());
                setReply('');
                return load(token);
              })
              .catch((err) => setError(err.message))
              .finally(() => setBusy(false));
          }}
        >
          <textarea
            required
            rows={4}
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            placeholder={s.yourReply}
            className="w-full rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-bg)] px-3 py-2"
          />
          <button
            type="submit"
            disabled={busy}
            className="h-11 cursor-pointer rounded-[var(--mj-radius-md)] bg-[var(--mj-accent)] px-4 font-semibold text-[var(--mj-accent-fg)] disabled:opacity-60"
          >
            {s.sendReply}
          </button>
        </form>
      ) : (
        <p className="text-sm text-[var(--mj-muted-fg)]">
          {s.closed}
          <button
            type="button"
            className="ms-2 underline"
            onClick={() => router.push(`/${locale}/profile/support`)}
          >
            {s.newOne}
          </button>
        </p>
      )}

      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
    </div>
  );
}
