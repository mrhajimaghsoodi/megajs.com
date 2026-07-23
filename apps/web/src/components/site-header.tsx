import Link from 'next/link';
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
  const base = `/${locale}`;
  const links = [
    { href: `${base}/learn`, label: dict.nav.learn },
    { href: `${base}/practice`, label: dict.nav.practice },
    { href: `${base}/live`, label: dict.nav.live },
    { href: `${base}/pricing`, label: dict.nav.pricing },
  ];

  const other = locale === 'fa' ? 'en' : 'fa';

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--mj-border)] bg-[color-mix(in_oklab,var(--mj-bg)_88%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo href={base} priority />
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="cursor-pointer rounded-[var(--mj-radius-md)] px-3 py-2 text-sm font-medium text-[var(--mj-muted-fg)] transition-colors duration-[var(--mj-motion-base)] hover:bg-[var(--mj-muted)] hover:text-[var(--mj-fg)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href={`/${other}`}
            className="inline-flex h-11 cursor-pointer items-center rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] px-3 text-sm font-medium transition-colors hover:bg-[var(--mj-muted)]"
          >
            {other.toUpperCase()}
          </Link>
          <ThemeToggle />
          <Link
            href={`${base}/login`}
            className="inline-flex h-11 cursor-pointer items-center rounded-[var(--mj-radius-md)] bg-[var(--mj-accent)] px-4 text-sm font-semibold text-[var(--mj-accent-fg)] transition-opacity hover:opacity-90"
          >
            {dict.nav.login}
          </Link>
        </div>
      </div>
    </header>
  );
}
