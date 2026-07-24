import Link from 'next/link';
import { resolveMediaUrl } from '@/lib/media-url';
import type { Locale } from '@/lib/utils';
import { cn } from '@/lib/utils';

export type TermCardData = {
  id: string;
  slug: string;
  name: string;
  description?: string;
  imageUrl?: string | null;
  parentId?: string | null;
  count?: number;
  children?: TermCardData[];
};

const TILE = [
  'from-[#1a1a1a] to-[#2a2410]',
  'from-[#0f172a] to-[#1e293b]',
  'from-[#14532d] to-[#166534]',
  'from-[#292524] to-[#44403c]',
];

export function TermCard({
  term,
  locale,
  hrefBase,
  index = 0,
  showChildren = false,
}: {
  term: TermCardData;
  locale: Locale;
  hrefBase: string;
  index?: number;
  showChildren?: boolean;
}) {
  const href = `${hrefBase}/${term.slug}`;
  const gradient = TILE[index % TILE.length];

  return (
    <div className="group flex flex-col overflow-hidden border border-border bg-card transition hover:-translate-y-0.5 hover:border-primary/40">
      <Link href={href} className="relative block aspect-[16/10] overflow-hidden">
        {term.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={resolveMediaUrl(term.imageUrl)}
            alt=""
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className={cn('h-full w-full bg-gradient-to-br', gradient)} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4 text-white">
          <h3 className="font-display text-xl font-bold">{term.name}</h3>
          {typeof term.count === 'number' ? (
            <p className="mt-1 text-xs text-white/70">{term.count}</p>
          ) : null}
        </div>
      </Link>
      {term.description ? (
        <p className="line-clamp-2 p-4 text-sm text-muted-foreground">{term.description}</p>
      ) : null}
      {showChildren && term.children?.length ? (
        <div className="flex flex-wrap gap-2 border-t border-border px-4 py-3">
          {term.children.map((child) => (
            <Link
              key={child.id}
              href={`${hrefBase}/${child.slug}`}
              className="text-xs font-semibold text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
            >
              {child.name}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function TermCardsGrid({
  terms,
  locale,
  hrefBase,
  showChildren,
}: {
  terms: TermCardData[];
  locale: Locale;
  hrefBase: string;
  showChildren?: boolean;
}) {
  const roots = terms.filter((t) => !t.parentId);
  const kids = new Map<string, TermCardData[]>();
  for (const t of terms) {
    if (!t.parentId) continue;
    const list = kids.get(t.parentId) ?? [];
    list.push(t);
    kids.set(t.parentId, list);
  }
  const withChildren = (roots.length ? roots : terms).map((t) => ({
    ...t,
    children: kids.get(t.id) ?? t.children,
  }));

  return (
    <div className="mj-stagger grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {withChildren.map((term, i) => (
        <TermCard
          key={term.id}
          term={term}
          locale={locale}
          hrefBase={hrefBase}
          index={i}
          showChildren={showChildren}
        />
      ))}
    </div>
  );
}
