'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { useAdminLocale } from '@/i18n/locale-context';

export default function WooCommerceHomePage() {
  const { locale, dict } = useAdminLocale();
  const d = dict.wp;
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    void adminFetch('/admin/wp/woocommerce/home').then(setData).catch((e) => setError(e.message));
  }, []);
  if (!data) return <p className="text-sm text-[var(--mj-muted-fg)]">{error || dict.loading}</p>;
  const cards = [
    { label: d.netSales, value: `${((data.netSalesCents ?? 0) / 10).toLocaleString(locale === 'fa' ? 'fa-IR' : 'en-US')} IRT`, href: '/orders' },
    { label: d.processing, value: data.ordersProcessing, href: '/orders?status=processing' },
    { label: d.onHold, value: data.ordersOnHold, href: '/orders?status=on_hold' },
    { label: d.completedMonth, value: data.ordersCompletedMonth, href: '/orders' },
    { label: d.customers, value: data.customers, href: '/customers' },
    { label: d.products, value: data.products, href: '/catalog' },
  ];
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold">{d.wooTitle}</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.wooSubtitle}</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {cards.map((c) => (
          <Link key={c.label} href={c.href} className="rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-4 hover:border-[var(--mj-accent)]">
            <div className="text-xs text-[var(--mj-muted-fg)]">{c.label}</div>
            <div className="mt-2 font-display text-2xl font-bold" dir="ltr">{c.value}</div>
          </Link>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 text-sm">
        {[
          ['/orders', d.orders],
          ['/customers', d.customers],
          ['/coupons', d.coupons],
          ['/reports', d.reports],
          ['/woocommerce/settings', d.wooSettings],
          ['/woocommerce/status', d.systemStatus],
        ].map(([href, label]) => (
          <Link key={href} href={href} className="rounded-md border border-[var(--mj-border)] px-3 py-1.5 hover:border-[var(--mj-accent)]">{label}</Link>
        ))}
      </div>
    </div>
  );
}
