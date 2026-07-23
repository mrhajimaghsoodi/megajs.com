'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';

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
  const [data, setData] = useState<Dash | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    void adminFetch('/admin/dashboard')
      .then(setData)
      .catch((e) => setError(e.message));
  }, []);

  const cards = data
    ? [
        ['کاربران', data.users],
        ['دوره‌ها', data.courses],
        ['درس‌های منتشر', data.publishedLessons],
        ['سفارش‌ها', data.orders],
        ['اشتراک فعال', data.activeSubs],
        ['چالش‌ها', data.challenges],
        ['لایو برنامه‌ریزی', data.liveScheduled],
        ['الان Live', data.liveNow],
        ['مجموع توکن کیف‌ها', data.totalTokensInWallets],
        ['تیکت باز پشتیبانی', data.ticketsOpen],
      ]
    : [];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-3xl font-bold">داشبورد عملیات</h1>
          <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">
            نمای یک‌نگاه از رشد، فروش، Practice، لایو و پشتیبانی
          </p>
        </div>
        <Link
          href="/support"
          className="inline-flex h-10 items-center rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] px-3 text-sm hover:border-[var(--mj-accent)]"
        >
          صندوق تیکت‌ها
          {data ? (
            <span className="ms-2 rounded-full bg-[var(--mj-accent)] px-2 py-0.5 font-mono text-xs font-bold text-[var(--mj-accent-fg)]">
              {data.ticketsOpen}
            </span>
          ) : null}
        </Link>
      </div>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {cards.map(([label, value]) => (
          <article
            key={String(label)}
            className="rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-5"
          >
            <div className="text-sm text-[var(--mj-muted-fg)]">{label}</div>
            <div className="mt-2 font-mono text-3xl font-bold">{value}</div>
          </article>
        ))}
      </div>
    </div>
  );
}
