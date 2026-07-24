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
  const isHome = pathname === base || pathname === `${base}/`;
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
    <header
      className={`sticky top-0 z-40 border-b ${
        isHome
          ? 'border-white/10 bg-[#0c0c0c]/80 text-[var(--mj-canvas-fg)] backdrop-blur-md'
          : 'border-[var(--mj-border)] bg-[color-mix(in_oklab,var(--mj-bg)_88%,transparent)] backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Logo href={base} priority className={isHome ? 'brightness-110' : undefined} />
        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {primary.map((link) => {
            const active = pathname === link.href || pathname?.startsWith(link.href + '/');
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`mj-nav-item cursor-pointer rounded-md px-2.5 py-2 text-sm font-medium ${
                  active
                    ? isHome
                      ? 'bg-white/10 text-[var(--mj-yellow)]'
                      : 'bg-[var(--mj-muted)] text-[var(--mj-fg)]'
                    : isHome
                      ? 'text-white/65 hover:bg-white/5 hover:text-white'
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
            className={`mj-btn inline-flex h-10 cursor-pointer items-center rounded-md border px-3 font-mono text-xs font-medium uppercase tracking-wider ${
              isHome ? 'border-white/15 text-white/80' : 'border-[var(--mj-border)]'
            }`}
          >
            {other === 'fa' ? 'فا' : 'EN'}
          </Link>
          <ThemeToggle />
          {authed ? (
            <Link
              href={`${base}/profile`}
              className="mj-btn mj-btn--primary hidden h-10 items-center rounded-md bg-[var(--mj-accent)] px-4 text-sm font-semibold text-[var(--mj-accent-fg)] sm:inline-flex"
            >
              {dict.nav.profile}
            </Link>
          ) : (
            <Link
              href={`${base}/login`}
              className="mj-btn mj-btn--primary hidden h-10 items-center rounded-md bg-[var(--mj-accent)] px-4 text-sm font-semibold text-[var(--mj-accent-fg)] sm:inline-flex"
            >
              {dict.nav.login}
            </Link>
          )}
          <button
            type="button"
            className={`mj-btn inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border text-sm font-bold lg:hidden ${
              isHome ? 'border-white/15' : 'border-[var(--mj-border)]'
            }`}
            aria-expanded={open}
            aria-label={open ? dict.close : dict.menu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? '×' : '☰'}
          </button>
        </div>
      </div>

      <div
        className={`mj-collapse border-t lg:hidden ${open ? 'is-open' : ''} ${
          isHome ? 'border-white/10' : 'border-[var(--mj-border)]'
        }`}
      >
        <div className="mj-collapse__inner">
          <div className="mj-collapse__content mx-auto grid max-w-6xl gap-1 px-4 py-3 sm:px-6">
            {[...primary, ...more].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`mj-nav-item rounded-md px-3 py-2.5 text-sm font-medium ${
                  isHome ? 'hover:bg-white/5' : 'hover:bg-[var(--mj-muted)]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={authed ? `${base}/profile` : `${base}/login`}
              className="mj-btn mj-btn--primary mt-2 inline-flex h-11 items-center justify-center rounded-md bg-[var(--mj-accent)] px-4 text-sm font-semibold text-[var(--mj-accent-fg)]"
            >
              {authed ? dict.nav.profile : dict.nav.login}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
