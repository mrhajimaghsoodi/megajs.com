'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';

const STATUS_LABEL: Record<string, string> = {
  open: 'باز',
  pending: 'منتظر کاربر',
  answered: 'پاسخ داده‌شده',
  resolved: 'حل‌شده',
  closed: 'بسته',
};

export default function AdminSupportTicketPage() {
  const params = useParams<{ id: string }>();
  const [ticket, setTicket] = useState<any>(null);
  const [reply, setReply] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const load = useCallback(async () => {
    const data = await adminFetch(`/admin/support/tickets/${params.id}`);
    setTicket(data);
  }, [params.id]);

  useEffect(() => {
    void load().catch((e) => setError(e.message));
  }, [load]);

  if (!ticket && !error) {
    return <div className="text-sm text-[var(--mj-muted-fg)]">در حال بارگذاری…</div>;
  }
  if (error && !ticket) {
    return <p className="text-sm text-[var(--mj-danger)]">{error}</p>;
  }

  return (
    <div className="space-y-6">
      <div>
        <Link href="/support" className="text-sm text-[var(--mj-muted-fg)] hover:underline">
          ← صندوق تیکت‌ها
        </Link>
        <h1 className="mt-2 font-display text-3xl font-bold">{ticket.subject}</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">
          {ticket.user?.displayName ?? '—'} ·{' '}
          <span dir="ltr">{ticket.user?.phone ?? ticket.user?.email}</span>
        </p>
      </div>

      <div className="grid gap-3 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-4 sm:grid-cols-3">
        <label className="text-sm">
          <span className="text-[var(--mj-muted-fg)]">وضعیت</span>
          <select
            className="mt-1 h-10 w-full rounded border border-[var(--mj-border)] bg-[var(--mj-bg)] px-2"
            value={ticket.status}
            onChange={(e) => {
              void adminFetch(`/admin/support/tickets/${ticket.id}`, {
                method: 'PATCH',
                body: JSON.stringify({ status: e.target.value }),
              })
                .then(load)
                .catch((err) => setError(err.message));
            }}
          >
            {Object.entries(STATUS_LABEL).map(([k, v]) => (
              <option key={k} value={k}>
                {v}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm">
          <span className="text-[var(--mj-muted-fg)]">اولویت</span>
          <select
            className="mt-1 h-10 w-full rounded border border-[var(--mj-border)] bg-[var(--mj-bg)] px-2"
            value={ticket.priority}
            onChange={(e) => {
              void adminFetch(`/admin/support/tickets/${ticket.id}`, {
                method: 'PATCH',
                body: JSON.stringify({ priority: e.target.value }),
              })
                .then(load)
                .catch((err) => setError(err.message));
            }}
          >
            {['low', 'normal', 'high', 'urgent'].map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm">
          <span className="text-[var(--mj-muted-fg)]">دسته</span>
          <select
            className="mt-1 h-10 w-full rounded border border-[var(--mj-border)] bg-[var(--mj-bg)] px-2"
            value={ticket.category}
            onChange={(e) => {
              void adminFetch(`/admin/support/tickets/${ticket.id}`, {
                method: 'PATCH',
                body: JSON.stringify({ category: e.target.value }),
              })
                .then(load)
                .catch((err) => setError(err.message));
            }}
          >
            {['billing', 'technical', 'content', 'account', 'live', 'other'].map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
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
            <div className="flex justify-between text-xs text-[var(--mj-muted-fg)]">
              <span>
                {m.isStaff ? 'پشتیبانی' : 'کاربر'}
                {m.author?.displayName ? ` · ${m.author.displayName}` : ''}
                {m.author?.role ? ` (${m.author.role})` : ''}
              </span>
              <time dir="ltr">{new Date(m.createdAt).toLocaleString('fa-IR')}</time>
            </div>
            <p className="mt-2 whitespace-pre-wrap text-sm leading-7">{m.body}</p>
          </article>
        ))}
      </div>

      <form
        className="space-y-3 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-4"
        onSubmit={(e) => {
          e.preventDefault();
          setBusy(true);
          setError(null);
          void adminFetch(`/admin/support/tickets/${ticket.id}/messages`, {
            method: 'POST',
            body: JSON.stringify({ body: reply }),
          })
            .then(() => {
              setReply('');
              return load();
            })
            .catch((err) => setError(err.message))
            .finally(() => setBusy(false));
        }}
      >
        <textarea
          required
          rows={5}
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          placeholder="پاسخ پشتیبانی…"
          className="w-full rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-bg)] px-3 py-2"
        />
        <button
          type="submit"
          disabled={busy || ticket.status === 'closed'}
          className="h-11 cursor-pointer rounded-[var(--mj-radius-md)] bg-[var(--mj-accent)] px-4 font-semibold text-[var(--mj-accent-fg)] disabled:opacity-60"
        >
          ارسال پاسخ
        </button>
      </form>

      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
    </div>
  );
}
