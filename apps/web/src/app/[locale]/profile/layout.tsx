'use client';

import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { isLocale, type Locale } from '@/lib/utils';

const links = (locale: Locale, fa: boolean) => [
  { href: `/${locale}/profile`, label: fa ? 'نمای کلی' : 'Overview' },
  { href: `/${locale}/profile/learning`, label: fa ? 'یادگیری' : 'Learning' },
  { href: `/${locale}/profile/wallet`, label: fa ? 'کیف توکن' : 'Wallet' },
  { href: `/${locale}/profile/orders`, label: fa ? 'سفارش‌ها' : 'Orders' },
  { href: `/${locale}/profile/practice`, label: fa ? 'تمرین‌ها' : 'Practice' },
  { href: `/${locale}/profile/live`, label: fa ? 'لایوها' : 'Live' },
  { href: `/${locale}/profile/support`, label: fa ? 'پشتیبانی' : 'Support' },
  { href: `/${locale}/profile/settings`, label: fa ? 'تنظیمات' : 'Settings' },
];

export default function ProfileLayout({ children }: { children: ReactNode }) {
  const params = useParams<{ locale: string }>();
  const pathname = usePathname();
  const locale = (isLocale(params.locale) ? params.locale : 'fa') as Locale;
  const fa = locale === 'fa';

  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[220px_1fr]">
      <aside className="h-fit rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-3">
        <div className="px-2 pb-3 text-sm font-semibold">{fa ? 'پنل من' : 'My panel'}</div>
        <nav className="flex flex-col gap-1">
          {links(locale, fa).map((l) => {
          const active =
              pathname === l.href ||
              (l.href !== `/${locale}/profile` && pathname.startsWith(l.href + '/'));
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`cursor-pointer rounded-[var(--mj-radius-md)] px-3 py-2 text-sm transition-colors ${
                  active
                    ? 'bg-[var(--mj-accent)] font-semibold text-[var(--mj-accent-fg)]'
                    : 'hover:bg-[var(--mj-muted)]'
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </aside>
      <div className="min-w-0">{children}</div>
    </div>
  );
}
