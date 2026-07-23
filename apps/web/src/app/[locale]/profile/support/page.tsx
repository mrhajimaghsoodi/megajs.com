'use client';

import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { API_BASE, isLocale, type Locale } from '@/lib/utils';

const CATEGORIES = [
  { id: 'billing', fa: 'پرداخت / اشتراک', en: 'Billing' },
  { id: 'technical', fa: 'فنی / سایت', en: 'Technical' },
  { id: 'content', fa: 'محتوا / دوره', en: 'Content' },
  { id: 'account', fa: 'حساب کاربری', en: 'Account' },
  { id: 'live', fa: 'لایو / وبینار', en: 'Live' },
  { id: 'other', fa: 'سایر', en: 'Other' },
] as const;

const STATUS_FA: Record<string, string> = {
  open: 'باز',
  pending: 'در انتظار پاسخ شما',
  answered: 'پاسخ پشتیبانی',
  resolved: 'حل‌شده',
  closed: 'بسته',
};

export default function SupportTicketsPage() {
  const params = useParams<{ locale: string }>();
  const router = useRouter();
  const locale = (isLocale(params.locale) ? params.locale : 'fa') as Locale;
  const fa = locale === 'fa';
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
    if (!res.ok) throw new Error(fa ? 'خطا در دریافت تیکت‌ها' : 'Failed to load tickets');
    setTickets(await res.json());
  }

  useEffect(() => {
    const t = localStorage.getItem('mj_token');
    setToken(t);
    if (!t) return;
    void load(t).catch((e) => setError(e.message));
  }, []);

  if (token === null) {
    return <div className="text-sm text-[var(--mj-muted-fg)]">…</div>;
  }

  if (!token) {
    return (
      <div>
        <h1 className="font-display text-3xl font-bold">{fa ? 'پشتیبانی' : 'Support'}</h1>
        <p className="mt-3 text-[var(--mj-muted-fg)]">
          {fa ? 'برای ثبت تیکت وارد شوید.' : 'Log in to open a ticket.'}
        </p>
        <Link
          href={`/${locale}/login`}
          className="mt-4 inline-flex h-11 items-center rounded-[var(--mj-radius-md)] bg-[var(--mj-accent)] px-4 font-semibold text-[var(--mj-accent-fg)]"
        >
          {fa ? 'ورود' : 'Log in'}
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl font-bold">{fa ? 'پشتیبانی' : 'Support'}</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">
          {fa
            ? 'تیکت بسازید، پیگیری کنید و پاسخ تیم پشتیبانی را ببینید.'
            : 'Open tickets, track status, and reply to support.'}
        </p>
      </div>

      <section className="rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-5">
        <h2 className="font-display text-xl font-semibold">
          {fa ? 'تیکت جدید' : 'New ticket'}
        </h2>
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
            placeholder={fa ? 'موضوع' : 'Subject'}
            className="h-11 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-bg)] px-3"
          />
          <div className="grid gap-3 sm:grid-cols-2">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="h-11 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-bg)] px-3"
            >
              {CATEGORIES.map((c) => (
                <option key={c.id} value={c.id}>
                  {fa ? c.fa : c.en}
                </option>
              ))}
            </select>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="h-11 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-bg)] px-3"
            >
              <option value="low">{fa ? 'کم' : 'Low'}</option>
              <option value="normal">{fa ? 'عادی' : 'Normal'}</option>
              <option value="high">{fa ? 'بالا' : 'High'}</option>
              <option value="urgent">{fa ? 'فوری' : 'Urgent'}</option>
            </select>
          </div>
          <textarea
            required
            minLength={5}
            rows={5}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder={fa ? 'توضیح کامل مشکل…' : 'Describe your issue…'}
            className="rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-bg)] px-3 py-2"
          />
          <button
            type="submit"
            disabled={busy}
            className="h-11 cursor-pointer rounded-[var(--mj-radius-md)] bg-[var(--mj-accent)] px-4 font-semibold text-[var(--mj-accent-fg)] disabled:opacity-60"
          >
            {busy ? '…' : fa ? 'ارسال تیکت' : 'Submit ticket'}
          </button>
        </form>
      </section>

      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold">
          {fa ? 'تیکت‌های من' : 'My tickets'}
        </h2>
        {tickets.length === 0 ? (
          <p className="text-sm text-[var(--mj-muted-fg)]">
            {fa ? 'هنوز تیکتی ندارید.' : 'No tickets yet.'}
          </p>
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
                    {t.category} · {t.priority} · {t._count?.messages ?? 0}{' '}
                    {fa ? 'پیام' : 'msgs'}
                  </div>
                </div>
                <span className="rounded-full bg-[var(--mj-muted)] px-2 py-1 text-xs font-medium">
                  {fa ? STATUS_FA[t.status] ?? t.status : t.status}
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
