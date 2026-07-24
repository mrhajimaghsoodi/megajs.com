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
    <header className="relative overflow-hidden border-b border-[var(--mj-border)] bg-[var(--mj-ink)] text-[var(--mj-canvas-fg)]">
      <div
        className="pointer-events-none absolute inset-0 opacity-40 mj-code-plane"
        aria-hidden
      />
      <div
        className="mj-hero-wash pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(700px 360px at 85% 0%, color-mix(in oklab, var(--mj-yellow) 22%, transparent), transparent 60%)',
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mj-fade-up max-w-3xl space-y-4">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--mj-yellow)]">
            MEGA JS
          </p>
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="max-w-2xl text-base text-white/65 sm:text-lg">{subtitle}</p>
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
      {title ? (
        <h2 className="font-display mb-6 text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      ) : null}
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
