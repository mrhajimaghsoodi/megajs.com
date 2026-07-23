'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { API_BASE, isLocale, type Locale } from '@/lib/utils';

export default function ProfileOverviewPage() {
  const params = useParams<{ locale: string }>();
  const locale = (isLocale(params.locale) ? params.locale : 'fa') as Locale;
  const fa = locale === 'fa';
  const [token, setToken] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setToken(localStorage.getItem('mj_token'));
  }, []);

  useEffect(() => {
    if (!token) return;
    void fetch(`${API_BASE}/me/dashboard`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(async (r) => {
        if (!r.ok) throw new Error('Unauthorized');
        setData(await r.json());
      })
      .catch((e) => setError(e.message));
  }, [token]);

  if (token === null) {
    return <div className="text-sm text-[var(--mj-muted-fg)]">…</div>;
  }

  if (!token) {
    return (
      <div>
        <h1 className="font-display text-3xl font-bold">{fa ? 'پنل من' : 'My panel'}</h1>
        <p className="mt-3 text-[var(--mj-muted-fg)]">{fa ? 'برای ادامه وارد شوید.' : 'Please log in.'}</p>
        <Link
          href={`/${locale}/login`}
          className="mt-4 inline-flex h-11 items-center rounded-[var(--mj-radius-md)] bg-[var(--mj-accent)] px-4 font-semibold text-[var(--mj-accent-fg)]"
        >
          {fa ? 'ورود' : 'Log in'}
        </Link>
      </div>
    );
  }

  const stats = data?.stats;
  const user = data?.user;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold">{fa ? 'نمای کلی' : 'Overview'}</h1>
        <p className="mt-2 text-[var(--mj-muted-fg)]">{user?.displayName ?? user?.phone ?? '—'}</p>
      </div>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {[
          [fa ? 'درس تکمیل‌شده' : 'Completed lessons', stats?.lessonsCompleted ?? '—'],
          [fa ? 'استریک (تقریبی)' : 'Streak (approx)', stats?.streakPlaceholder ?? '—'],
          [fa ? 'توکن' : 'Tokens', user?.wallet?.balance ?? '—'],
          [fa ? 'ثبت‌نام دوره' : 'Enrollments', stats?.enrollments ?? '—'],
          [fa ? 'ارسال تمرین' : 'Submissions', stats?.submissions ?? '—'],
          [fa ? 'لایو ثبت‌شده' : 'Live regs', stats?.liveRegistrations ?? '—'],
          [fa ? 'تیکت باز' : 'Open tickets', stats?.openTickets ?? '—'],
        ].map(([label, value]) => (
          <article
            key={String(label)}
            className="rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-4"
          >
            <div className="text-sm text-[var(--mj-muted-fg)]">{label}</div>
            <div className="mt-2 font-mono text-2xl font-bold">{value}</div>
          </article>
        ))}
      </div>
      <section className="rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-5">
        <h2 className="font-display text-xl font-semibold">{fa ? 'اشتراک فعال' : 'Active plan'}</h2>
        {(user?.subscriptions ?? []).length === 0 ? (
          <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{fa ? 'اشتراکی ندارید.' : 'No subscription.'}</p>
        ) : (
          user.subscriptions.map((s: any) => (
            <p key={s.id} className="mt-2 text-sm">
              {s.plan?.code} · {new Date(s.endsAt).toLocaleDateString(fa ? 'fa-IR' : 'en-US')}
            </p>
          ))
        )}
      </section>
      <section className="grid gap-3 sm:grid-cols-2">
        <Link
          href={`/${locale}/profile/support`}
          className="rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-5 transition-colors hover:border-[var(--mj-accent)]"
        >
          <h2 className="font-display text-lg font-semibold">{fa ? 'پشتیبانی' : 'Support'}</h2>
          <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">
            {fa
              ? `${stats?.openTickets ?? 0} تیکت باز — ثبت و پیگیری درخواست`
              : `${stats?.openTickets ?? 0} open — create and track tickets`}
          </p>
        </Link>
        <Link
          href={`/${locale}/profile/learning`}
          className="rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-5 transition-colors hover:border-[var(--mj-accent)]"
        >
          <h2 className="font-display text-lg font-semibold">{fa ? 'ادامه یادگیری' : 'Continue learning'}</h2>
          <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">
            {fa ? 'دوره‌ها و پیشرفت شما' : 'Your courses and progress'}
          </p>
        </Link>
      </section>
    </div>
  );
}
