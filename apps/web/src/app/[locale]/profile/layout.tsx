'use client';

import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { getDictionary } from '@/i18n/dictionaries';
import { isLocale, type Locale } from '@/lib/utils';

export default function ProfileLayout({ children }: { children: ReactNode }) {
  const params = useParams<{ locale: string }>();
  const pathname = usePathname();
  const locale = (isLocale(params.locale) ? params.locale : 'fa') as Locale;
  const dict = getDictionary(locale);
  const p = dict.profile;

  const links = [
    { href: `/${locale}/profile`, label: p.overview },
    { href: `/${locale}/profile/learning`, label: p.learning },
    { href: `/${locale}/profile/wallet`, label: p.wallet },
    { href: `/${locale}/profile/orders`, label: p.orders },
    { href: `/${locale}/profile/practice`, label: p.practice },
    { href: `/${locale}/profile/live`, label: p.live },
    { href: `/${locale}/profile/support`, label: p.support },
    { href: `/${locale}/profile/settings`, label: p.settings },
  ];

  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[220px_1fr]">
      <aside className="h-fit rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-3">
        <div className="px-2 pb-3 text-sm font-semibold">{p.panel}</div>
        <nav className="flex flex-col gap-1">
          {links.map((l) => {
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
