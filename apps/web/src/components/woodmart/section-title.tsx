import Link from 'next/link';
import type { ReactNode } from 'react';

export function WoodSectionTitle({
  kicker,
  title,
  body,
  actionHref,
  actionLabel,
  align = 'start',
}: {
  kicker?: string;
  title: string;
  body?: string;
  actionHref?: string;
  actionLabel?: string;
  align?: 'start' | 'center';
}) {
  return (
    <div
      className={
        align === 'center'
          ? 'mx-auto mb-10 max-w-2xl text-center'
          : 'mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'
      }
    >
      <div className={align === 'center' ? '' : 'max-w-2xl'}>
        {kicker ? (
          <p className="text-xs font-bold tracking-wide text-primary">{kicker}</p>
        ) : null}
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-[2rem]">
          {title}
        </h2>
        {body ? (
          <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">{body}</p>
        ) : null}
      </div>
      {actionHref && actionLabel && align !== 'center' ? (
        <Link
          href={actionHref}
          className="inline-flex shrink-0 items-center rounded-xl bg-[var(--mj-accent-soft)] px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          {actionLabel}
        </Link>
      ) : null}
      {actionHref && actionLabel && align === 'center' ? (
        <div className="mt-4">
          <Link
            href={actionHref}
            className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            {actionLabel}
          </Link>
        </div>
      ) : null}
    </div>
  );
}

export function WoodContainer({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
  );
}
