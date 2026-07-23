import Link from 'next/link';
import type { ReactNode } from 'react';

export function MarketingHero({
  title,
  subtitle,
  actions,
}: {
  title: string;
  subtitle: string;
  actions?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden border-b border-[var(--mj-border)]">
      <div
        className="mj-hero-wash pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(900px 420px at 10% -20%, color-mix(in oklab, var(--mj-accent) 28%, transparent), transparent 55%), linear-gradient(180deg, color-mix(in oklab, var(--mj-muted) 65%, transparent), transparent)',
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="mj-fade-up max-w-3xl space-y-4">
          <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl">{title}</h1>
          <p className="max-w-2xl text-base text-[var(--mj-muted-fg)] sm:text-lg">{subtitle}</p>
          {actions ? <div className="flex flex-wrap gap-3 pt-2">{actions}</div> : null}
        </div>
      </div>
    </header>
  );
}

export function ContentSection({
  title,
  children,
  className = '',
}: {
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto max-w-6xl px-4 py-12 sm:px-6 ${className}`}>
      {title ? <h2 className="font-display mb-6 text-2xl font-bold sm:text-3xl">{title}</h2> : null}
      {children}
    </section>
  );
}

export function CtaLink({
  href,
  children,
  primary,
}: {
  href: string;
  children: ReactNode;
  primary?: boolean;
}) {
  return (
    <Link
      href={href}
      className={
        primary
          ? 'mj-btn mj-btn--primary inline-flex h-12 items-center rounded-[var(--mj-radius-md)] bg-[var(--mj-accent)] px-5 text-sm font-semibold text-[var(--mj-accent-fg)]'
          : 'mj-btn inline-flex h-12 items-center rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] px-5 text-sm font-semibold'
      }
    >
      {children}
    </Link>
  );
}
