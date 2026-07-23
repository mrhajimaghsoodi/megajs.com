'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { PageEnter, SkeletonPanel, Stagger } from '@/components/ui/motion';
import { useAdminLocale } from '@/i18n/locale-context';

type Dash = {
  users: number;
  courses: number;
  publishedLessons: number;
  orders: number;
  activeSubs: number;
  challenges: number;
  liveScheduled: number;
  liveNow: number;
  totalTokensInWallets: number;
  ticketsOpen: number;
};

export default function AdminDashboard() {
  const { dict } = useAdminLocale();
  const d = dict.dashboard;
  const [data, setData] = useState<Dash | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    void adminFetch('/admin/dashboard')
      .then(setData)
      .catch((e) => setError(e.message));
  }, []);

  if (!data && !error) {
    return <SkeletonPanel cards={9} />;
  }

  const cards = data
    ? [
        [d.users, data.users],
        [d.courses, data.courses],
        [d.publishedLessons, data.publishedLessons],
        [d.orders, data.orders],
        [d.activeSubs, data.activeSubs],
        [d.challenges, data.challenges],
        [d.liveScheduled, data.liveScheduled],
        [d.liveNow, data.liveNow],
        [d.tokens, data.totalTokensInWallets],
        [d.ticketsOpen, data.ticketsOpen],
      ]
    : [];

  return (
    <PageEnter className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-3xl font-bold">{d.title}</h1>
          <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.subtitle}</p>
        </div>
        <Link
          href="/support"
          className="mj-btn inline-flex h-10 items-center rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] px-3 text-sm hover:border-[var(--mj-accent)]"
        >
          {d.ticketsInbox}
          {data ? (
            <span className="ms-2 rounded-full bg-[var(--mj-accent)] px-2 py-0.5 font-mono text-xs font-bold text-[var(--mj-accent-fg)]">
              {data.ticketsOpen}
            </span>
          ) : null}
        </Link>
      </div>
      {error ? <p className="mj-slide-down text-sm text-[var(--mj-danger)]">{error}</p> : null}
      <Stagger className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {cards.map(([label, value]) => (
          <article
            key={String(label)}
            className="mj-card-motion rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-5"
          >
            <div className="text-sm text-[var(--mj-muted-fg)]">{label}</div>
            <div className="mt-2 font-mono text-3xl font-bold">{value}</div>
          </article>
        ))}
      </Stagger>
    </PageEnter>
  );
}
