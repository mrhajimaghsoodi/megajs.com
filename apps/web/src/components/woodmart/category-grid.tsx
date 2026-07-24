import Link from 'next/link';
import type { CatalogTrack } from '@/lib/catalog';
import type { Locale } from '@/lib/utils';
import { cn } from '@/lib/utils';

const TILE_BG = [
  'bg-[#1a1a1a] text-white',
  'bg-[#242424] text-white',
  'bg-primary text-[var(--mj-ink)]',
  'bg-[#0f172a] text-white',
  'bg-[#292524] text-white',
  'bg-[#14532d] text-white',
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
    <div className="mj-stagger grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {tracks.map((track, i) => (
        <Link
          key={track.slug}
          href={`/${locale}/learn#${track.slug}`}
          className={cn(
            'group relative flex min-h-[9.5rem] flex-col justify-between overflow-hidden p-5 transition-transform duration-300 hover:-translate-y-0.5',
            TILE_BG[i % TILE_BG.length],
          )}
        >
          <div
            className="pointer-events-none absolute -end-6 -top-6 size-24 rounded-full bg-white/10 transition-transform duration-500 group-hover:scale-125"
            aria-hidden
          />
          <div>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] opacity-70">
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
