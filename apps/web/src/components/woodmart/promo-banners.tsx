import Link from 'next/link';
import type { Locale } from '@/lib/utils';
import { cn } from '@/lib/utils';

export function PromoBanners({
  locale,
  items,
}: {
  locale: Locale;
  items: Array<{
    title: string;
    body: string;
    cta: string;
    href: string;
    tone: 'dark' | 'accent' | 'slate';
  }>;
}) {
  const tones: Record<string, string> = {
    dark: 'bg-[#1e1e1e] text-white',
    accent: 'bg-primary text-primary-foreground',
    slate: 'bg-[var(--mj-accent-soft)] text-foreground',
  };

  return (
    <div className="mj-stagger grid gap-4 lg:grid-cols-3">
      {items.map((item) => (
        <Link
          key={item.title}
          href={item.href.startsWith('/') ? item.href : `/${locale}${item.href}`}
          className={cn(
            'mj-lift group relative min-h-[12rem] overflow-hidden rounded-2xl p-6 shadow-[var(--mj-shadow-sm)]',
            tones[item.tone],
          )}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                'radial-gradient(420px 180px at 100% 0%, rgba(255,212,0,0.35), transparent 55%)',
            }}
            aria-hidden
          />
          <div className="relative z-10 flex h-full flex-col justify-between gap-4">
            <div>
              <h3 className="font-display text-xl font-bold leading-snug">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 opacity-80">{item.body}</p>
            </div>
            <span className="inline-flex w-fit rounded-xl bg-white/15 px-3 py-1.5 text-xs font-bold group-hover:bg-white/25">
              {item.cta}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
