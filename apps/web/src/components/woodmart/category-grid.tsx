import Link from 'next/link';
import type { CatalogTrack } from '@/lib/catalog';
import type { Locale } from '@/lib/utils';
import { cn } from '@/lib/utils';

const TILE_BG = [
  'bg-[var(--mj-accent-soft)] text-foreground',
  'bg-card text-foreground border border-border',
  'bg-primary text-primary-foreground',
  'bg-[color-mix(in_oklab,var(--mj-brand)_35%,white)] text-[var(--mj-ink)]',
  'bg-[#ececf3] text-foreground',
  'bg-[#1e1e1e] text-white',
];

export function CategoryGrid({
  tracks,
  locale,
  courseLabel,
}: {
  tracks: CatalogTrack[];
  locale: Locale;
  courseLabel: string;
}) {
  if (!tracks.length) return null;

  return (
    <div className="mj-stagger grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {tracks.map((track, i) => (
        <Link
          key={track.slug}
          href={`/${locale}/learn#${track.slug}`}
          className={cn(
            'mj-lift group relative flex min-h-[10rem] flex-col justify-between overflow-hidden rounded-2xl p-5 shadow-[var(--mj-shadow-sm)]',
            TILE_BG[i % TILE_BG.length],
          )}
        >
          <div
            className="pointer-events-none absolute -end-6 -top-6 size-24 rounded-full bg-white/25 transition-transform duration-500 group-hover:scale-125"
            aria-hidden
          />
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] opacity-70">
              Y{track.yearPlan}
            </p>
            <h3 className="mt-2 font-display text-lg font-bold leading-snug">{track.title}</h3>
          </div>
          <p className="relative z-10 text-xs font-medium opacity-80">
            {track.courses.length} {courseLabel}
          </p>
        </Link>
      ))}
    </div>
  );
}
