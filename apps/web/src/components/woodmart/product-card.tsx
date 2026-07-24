import Link from 'next/link';
import { Eye, Heart, ShoppingBag } from 'lucide-react';
import { formatPrice, type CatalogCourse } from '@/lib/catalog';
import type { Locale } from '@/lib/utils';
import { cn } from '@/lib/utils';

const ACCENTS = [
  'from-[#1a1a1a] via-[#2a2410] to-[#ffd400]/35',
  'from-[#0f172a] via-[#1e293b] to-[#ffd400]/25',
  'from-[#171717] via-[#262626] to-[#fbbf24]/30',
  'from-[#111827] via-[#1f2937] to-[#eab308]/28',
];

function hashSlug(slug: string) {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h + slug.charCodeAt(i) * (i + 1)) % ACCENTS.length;
  return h;
}

export function ProductCard({
  course,
  locale,
  labels,
  className,
}: {
  course: CatalogCourse;
  locale: Locale;
  labels: {
    view: string;
    wishlist: string;
    enroll: string;
    free: string;
    sale?: string;
    comingSoon: string;
  };
  className?: string;
}) {
  const href = `/${locale}/learn/course/${course.slug}`;
  const accent = ACCENTS[hashSlug(course.slug)];
  const isPaid = course.accessTier === 'paid' || course.accessTier === 'subscription';
  const isSoon = course.status === 'coming_soon';
  const priceLabel =
    course.accessTier === 'subscription'
      ? 'Pro'
      : formatPrice(locale, course.accessTier, course.priceCents, labels.free);

  return (
    <article
      className={cn(
        'group relative flex flex-col overflow-hidden border border-border bg-card transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.45)]',
        className,
      )}
    >
      <div className={cn('relative aspect-[4/3] overflow-hidden bg-gradient-to-br', accent)}>
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
          aria-hidden
        />
        <div className="absolute inset-0 flex items-end p-4">
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
            {course.accessTier}
          </span>
        </div>
        {isPaid ? (
          <span className="absolute start-3 top-3 bg-primary px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--mj-ink)]">
            {labels.sale ?? 'Hot'}
          </span>
        ) : null}
        {isSoon ? (
          <span className="absolute end-3 top-3 bg-black/70 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-white">
            {labels.comingSoon}
          </span>
        ) : null}

        {/* WoodMart-style hover actions */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex translate-y-3 justify-center gap-2 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
          <div className="mb-4 flex gap-1.5 bg-background/95 p-1.5 shadow-lg backdrop-blur-sm">
            <Link
              href={href}
              className="inline-flex size-9 items-center justify-center text-foreground transition-colors hover:bg-primary hover:text-[var(--mj-ink)]"
              title={labels.view}
              aria-label={labels.view}
            >
              <Eye className="size-4" />
            </Link>
            <Link
              href={`/${locale}/learn`}
              className="inline-flex size-9 items-center justify-center text-foreground transition-colors hover:bg-primary hover:text-[var(--mj-ink)]"
              title={labels.wishlist}
              aria-label={labels.wishlist}
            >
              <Heart className="size-4" />
            </Link>
            <Link
              href={isSoon ? `/${locale}/learn` : href}
              className="inline-flex size-9 items-center justify-center text-foreground transition-colors hover:bg-primary hover:text-[var(--mj-ink)]"
              title={labels.enroll}
              aria-label={labels.enroll}
            >
              <ShoppingBag className="size-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <Link href={href} className="font-display text-base font-semibold leading-snug hover:text-primary">
          {course.title}
        </Link>
        <p className="line-clamp-2 flex-1 text-sm leading-6 text-muted-foreground">{course.summary}</p>
        <div className="mt-1 flex items-center justify-between gap-2 border-t border-border pt-3">
          <span className="font-display text-sm font-bold text-foreground">{priceLabel}</span>
          <Link
            href={href}
            className="text-xs font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:text-primary"
          >
            {labels.view}
          </Link>
        </div>
      </div>
    </article>
  );
}
