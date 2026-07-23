'use client';

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
      ]
    : [];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold">داشبورد عملیات</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">
          نمای یک‌نگاه از رشد، فروش، Practice و لایو
        </p>
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
