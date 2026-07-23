'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import type { Dictionary } from '@/i18n/dictionaries';
import type { Locale } from '@/lib/utils';
import { Logo } from './logo';
import { ThemeToggle } from './theme-toggle';

export function SiteHeader({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const pathname = usePathname();
  const base = `/${locale}`;
  const primary = [
    { href: `${base}/learn`, label: dict.nav.learn },
    { href: `${base}/curriculum`, label: dict.nav.curriculum },
    { href: `${base}/practice`, label: dict.nav.practice },
    { href: `${base}/live`, label: dict.nav.live },
    { href: `${base}/articles`, label: dict.nav.articles },
    { href: `${base}/pricing`, label: dict.nav.pricing },
  ];
  const more = [
    { href: `${base}/podcasts`, label: dict.nav.podcasts },
    { href: `${base}/tokens`, label: dict.nav.tokens },
    { href: `${base}/apps`, label: dict.nav.apps },
    { href: `${base}/about`, label: dict.nav.about },
    { href: `${base}/contact`, label: dict.nav.contact },
  ];
  const other = locale === 'fa' ? 'en' : 'fa';
  const switchedPath = pathname?.replace(/^\/(fa|en)(?=\/|$)/, `/${other}`) || `/${other}`;
  const [authed, setAuthed] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setAuthed(Boolean(localStorage.getItem('mj_token')));
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--mj-border)] bg-[color-mix(in_oklab,var(--mj-bg)_88%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Logo href={base} priority />
        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {primary.map((link) => {
            const active = pathname === link.href || pathname?.startsWith(link.href + '/');
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`mj-nav-item cursor-pointer rounded-[var(--mj-radius-md)] px-2.5 py-2 text-sm font-medium ${
                  active
                    ? 'bg-[var(--mj-muted)] text-[var(--mj-fg)]'
                    : 'text-[var(--mj-muted-fg)] hover:bg-[var(--mj-muted)] hover:text-[var(--mj-fg)]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href={switchedPath}
            hrefLang={other}
            className="mj-btn inline-flex h-10 cursor-pointer items-center rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] px-3 text-sm font-medium"
          >
            {other === 'fa' ? 'فا' : 'EN'}
          </Link>
          <ThemeToggle />
          {authed ? (
            <Link
              href={`${base}/profile`}
              className="mj-btn mj-btn--primary hidden h-10 items-center rounded-[var(--mj-radius-md)] bg-[var(--mj-accent)] px-4 text-sm font-semibold text-[var(--mj-accent-fg)] sm:inline-flex"
            >
              {dict.nav.profile}
            </Link>
          ) : (
            <Link
              href={`${base}/login`}
              className="mj-btn mj-btn--primary hidden h-10 items-center rounded-[var(--mj-radius-md)] bg-[var(--mj-accent)] px-4 text-sm font-semibold text-[var(--mj-accent-fg)] sm:inline-flex"
            >
              {dict.nav.login}
            </Link>
          )}
          <button
            type="button"
            className="mj-btn inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] text-sm font-bold lg:hidden"
            aria-expanded={open}
            aria-label={open ? dict.close : dict.menu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? '×' : '☰'}
          </button>
        </div>
      </div>

      <div className={`mj-collapse border-t border-[var(--mj-border)] lg:hidden ${open ? 'is-open' : ''}`}>
        <div className="mj-collapse__inner">
          <div className="mj-collapse__content mx-auto grid max-w-6xl gap-1 px-4 py-3 sm:px-6">
            {[...primary, ...more].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="mj-nav-item rounded-[var(--mj-radius-md)] px-3 py-2.5 text-sm font-medium hover:bg-[var(--mj-muted)]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={authed ? `${base}/profile` : `${base}/login`}
              className="mj-btn mj-btn--primary mt-2 inline-flex h-11 items-center justify-center rounded-[var(--mj-radius-md)] bg-[var(--mj-accent)] px-4 text-sm font-semibold text-[var(--mj-accent-fg)]"
            >
              {authed ? dict.nav.profile : dict.nav.login}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
