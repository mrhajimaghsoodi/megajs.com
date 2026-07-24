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
    dark: 'bg-[#1a1a1a] text-white',
    accent: 'bg-primary text-[var(--mj-ink)]',
    slate: 'bg-[#0f172a] text-white',
  };

  return (
    <div className="mj-stagger grid gap-4 lg:grid-cols-3">
      {items.map((item) => (
        <Link
          key={item.title}
          href={item.href.startsWith('/') ? item.href : `/${locale}${item.href}`}
          className={cn(
            'group relative min-h-[11rem] overflow-hidden p-6 transition-transform duration-300 hover:-translate-y-0.5',
            tones[item.tone],
          )}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
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
            <span className="text-xs font-bold uppercase tracking-[0.16em] underline-offset-4 group-hover:underline">
              {item.cta}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
