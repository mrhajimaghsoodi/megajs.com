'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { PageEnter, SkeletonPanel, Stagger } from '@/components/ui/motion';
import { getDictionary } from '@/i18n/dictionaries';
import { API_BASE, isLocale, type Locale } from '@/lib/utils';

export default function ProfileOverviewPage() {
  const params = useParams<{ locale: string }>();
  const locale = (isLocale(params.locale) ? params.locale : 'fa') as Locale;
  const dict = getDictionary(locale);
  const p = dict.profile;
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
        if (!r.ok) throw new Error(dict.error);
        setData(await r.json());
      })
      .catch((e) => setError(e.message));
  }, [token, dict.error]);

  if (token === null) {
    return <SkeletonPanel cards={6} />;
  }

  if (!token) {
    return (
      <PageEnter>
        <h1 className="font-display text-3xl font-bold">{p.panel}</h1>
        <p className="mt-3 text-[var(--mj-muted-fg)]">{p.pleaseLogin}</p>
        <Link
          href={`/${locale}/login`}
          className="mj-btn mj-btn--primary mt-4 inline-flex h-11 items-center rounded-[var(--mj-radius-md)] bg-[var(--mj-accent)] px-4 font-semibold text-[var(--mj-accent-fg)]"
        >
          {dict.nav.login}
        </Link>
      </PageEnter>
    );
  }

  if (!data && !error) {
    return <SkeletonPanel cards={6} />;
  }

  const stats = data?.stats;
  const user = data?.user;

  return (
    <PageEnter className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold">{p.overview}</h1>
        <p className="mt-2 text-[var(--mj-muted-fg)]">{user?.displayName ?? user?.phone ?? '—'}</p>
      </div>
      {error ? <p className="mj-slide-down text-sm text-[var(--mj-danger)]">{error}</p> : null}
      <Stagger className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {[
          [p.completedLessons, stats?.lessonsCompleted ?? '—'],
          [p.streak, stats?.streakPlaceholder ?? '—'],
          [p.tokens, user?.wallet?.balance ?? '—'],
          [p.enrollments, stats?.enrollments ?? '—'],
          [p.submissions, stats?.submissions ?? '—'],
          [p.liveRegs, stats?.liveRegistrations ?? '—'],
          [p.openTickets, stats?.openTickets ?? '—'],
        ].map(([label, value]) => (
          <article
            key={String(label)}
            className="mj-card-motion rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-4"
          >
            <div className="text-sm text-[var(--mj-muted-fg)]">{label}</div>
            <div className="mt-2 font-mono text-2xl font-bold">{value}</div>
          </article>
        ))}
      </Stagger>
      <section className="mj-scale-in rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-5">
        <h2 className="font-display text-xl font-semibold">{p.activePlan}</h2>
        {(user?.subscriptions ?? []).length === 0 ? (
          <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{p.noSub}</p>
        ) : (
          user.subscriptions.map((s: any) => (
            <p key={s.id} className="mt-2 text-sm">
              <span className="font-mono" dir="ltr">
                {s.plan?.code}
              </span>{' '}
              · {new Date(s.endsAt).toLocaleDateString(locale === 'fa' ? 'fa-IR' : 'en-US')}
            </p>
          ))
        )}
      </section>
      <section className="grid gap-3 sm:grid-cols-2">
        <Link
          href={`/${locale}/profile/support`}
          className="mj-card-motion rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-5 hover:border-[var(--mj-accent)]"
        >
          <h2 className="font-display text-lg font-semibold">{p.supportCard}</h2>
          <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">
            {stats?.openTickets ?? 0} — {p.supportCardBody}
          </p>
        </Link>
        <Link
          href={`/${locale}/profile/learning`}
          className="mj-card-motion rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-5 hover:border-[var(--mj-accent)]"
        >
          <h2 className="font-display text-lg font-semibold">{p.continueLearning}</h2>
          <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{p.continueLearningBody}</p>
        </Link>
      </section>
    </PageEnter>
  );
}
