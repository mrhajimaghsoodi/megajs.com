import Link from 'next/link';
import { Eye, Heart, ShoppingBag } from 'lucide-react';
import { formatPrice, type CatalogCourse } from '@/lib/catalog';
import type { Locale } from '@/lib/utils';
import { cn } from '@/lib/utils';

const ACCENTS = [
  'from-[#704fe6] via-[#8b74f0] to-[#ffd400]/70',
  'from-[#5b3fd4] via-[#704fe6] to-[#c4b5fd]',
  'from-[#1e1e1e] via-[#3f3f55] to-[#704fe6]/60',
  'from-[#ffd400] via-[#ffe566] to-[#704fe6]/50',
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
        'group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--mj-shadow-sm)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--mj-shadow-md)]',
        className,
      )}
    >
      <div className={cn('relative aspect-[4/3] overflow-hidden bg-gradient-to-br', accent)}>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35), transparent 45%)',
          }}
          aria-hidden
        />
        <div className="absolute inset-0 flex items-end p-4">
          <span className="rounded-lg bg-white/90 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-foreground">
            {course.accessTier}
          </span>
        </div>
        {isPaid ? (
          <span className="absolute start-3 top-3 rounded-lg bg-[var(--mj-brand)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--mj-ink)]">
            {labels.sale ?? 'Hot'}
          </span>
        ) : null}
        {isSoon ? (
          <span className="absolute end-3 top-3 rounded-lg bg-black/70 px-2.5 py-1 text-[10px] uppercase tracking-wider text-white">
            {labels.comingSoon}
          </span>
        ) : null}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex translate-y-3 justify-center gap-2 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
          <div className="mb-4 flex gap-1.5 rounded-xl bg-card/95 p-1.5 shadow-lg backdrop-blur-sm">
            <Link
              href={href}
              className="inline-flex size-9 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              title={labels.view}
              aria-label={labels.view}
            >
              <Eye className="size-4" />
            </Link>
            <Link
              href={`/${locale}/learn`}
              className="inline-flex size-9 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              title={labels.wishlist}
              aria-label={labels.wishlist}
            >
              <Heart className="size-4" />
            </Link>
            <Link
              href={isSoon ? `/${locale}/learn` : href}
              className="inline-flex size-9 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
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
          <span className="font-display text-sm font-bold text-primary">{priceLabel}</span>
          <Link
            href={href}
            className="text-xs font-semibold text-muted-foreground transition-colors hover:text-primary"
          >
            {labels.view}
          </Link>
        </div>
      </div>
    </article>
  );
}
