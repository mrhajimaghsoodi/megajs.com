'use client';

import {
  useEffect,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
} from 'react';
import { cn } from '@/lib/utils';

/* ---------- Skeleton ---------- */

export function Skeleton({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return <div className={cn('mj-skeleton', className)} style={style} aria-hidden />;
}

export function SkeletonText({ lines = 3, className }: { lines?: number; className?: string }) {
  return (
    <div className={cn('space-y-2', className)} aria-hidden>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className="h-3"
          style={{ width: `${i === lines - 1 ? 62 : 100 - (i % 3) * 8}%` }}
        />
      ))}
    </div>
  );
}

export function SkeletonCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-5',
        className,
      )}
      aria-hidden
    >
      <Skeleton className="mb-4 h-5 w-2/5" />
      <SkeletonText lines={3} />
      <div className="mt-4 flex gap-2">
        <Skeleton className="h-9 w-24" />
        <Skeleton className="h-9 w-20" />
      </div>
    </div>
  );
}

export function SkeletonPanel({
  cards = 6,
  className,
}: {
  cards?: number;
  className?: string;
}) {
  return (
    <div className={cn('mj-stagger space-y-6', className)} role="status" aria-busy="true">
      <div className="space-y-2">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-4 w-72 max-w-full" />
      </div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: cards }).map((_, i) => (
          <div
            key={i}
            className="rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-4"
          >
            <Skeleton className="mb-3 h-3 w-24" />
            <Skeleton className="h-8 w-16" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Spinner ---------- */

export function Spinner({ className }: { className?: string }) {
  return <span className={cn('mj-spinner', className)} aria-hidden />;
}

/* ---------- Button ---------- */

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
  loading?: boolean;
};

export function Button({
  className,
  variant = 'primary',
  loading,
  disabled,
  children,
  onClick,
  type = 'button',
  ...rest
}: ButtonProps) {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setRipples((r) => [...r, { id, x: e.clientX - rect.left, y: e.clientY - rect.top }]);
    window.setTimeout(() => {
      setRipples((r) => r.filter((x) => x.id !== id));
    }, 520);
    onClick?.(e);
  }

  const variants = {
    primary:
      'mj-btn--primary bg-[var(--mj-accent)] text-[var(--mj-accent-fg)] font-semibold',
    secondary:
      'border border-[var(--mj-border)] bg-[var(--mj-card)] font-semibold hover:bg-[var(--mj-muted)]',
    ghost: 'hover:bg-[var(--mj-muted)] font-medium',
  };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={handleClick}
      className={cn(
        'mj-btn inline-flex h-11 cursor-pointer items-center justify-center gap-2 rounded-[var(--mj-radius-md)] px-4 text-sm',
        variants[variant],
        className,
      )}
      {...rest}
    >
      {ripples.map((r) => (
        <span
          key={r.id}
          className="mj-btn__ripple"
          style={{ left: r.x, top: r.y }}
        />
      ))}
      {loading ? <Spinner /> : null}
      <span className="relative z-[1] inline-flex items-center gap-2">{children}</span>
    </button>
  );
}

/* ---------- Reveal on scroll / mount ---------- */

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn('mj-reveal', inView && 'is-in', className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

export function Stagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn('mj-stagger', className)}>{children}</div>;
}

/* ---------- Collapse / accordion ---------- */

export function Collapse({
  open,
  children,
  className,
}: {
  open: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('mj-collapse', open && 'is-open', className)} aria-hidden={!open}>
      <div className="mj-collapse__inner">
        <div className={cn('mj-collapse__content', className)}>{children}</div>
      </div>
    </div>
  );
}

export function Disclosure({
  title,
  children,
  defaultOpen = false,
  className,
}: {
  title: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div
      className={cn(
        'rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)]',
        className,
      )}
    >
      <button
        type="button"
        className="mj-btn flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-3 text-start text-sm font-semibold"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{title}</span>
        <span
          className="inline-block transition-transform duration-[var(--mj-motion-base)] ease-[var(--mj-ease)]"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
          aria-hidden
        >
          ▾
        </span>
      </button>
      <Collapse open={open}>
        <div className="border-t border-[var(--mj-border)] px-4 py-3 text-sm text-[var(--mj-muted-fg)]">
          {children}
        </div>
      </Collapse>
    </div>
  );
}

export function PageEnter({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn('mj-fade-up', className)}>{children}</div>;
}
