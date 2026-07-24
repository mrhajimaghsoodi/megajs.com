'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { DocsNavItem, DocsTechMeta, DocsTrackMeta } from '@/lib/docs/types';
import { localizeTitle } from '@/lib/docs/types';
import type { Locale } from '@/lib/utils';
import { cn } from '@/lib/utils';

function NavLinks({
  items,
  locale,
  techId,
  trackPrefix,
  depth = 0,
}: {
  items: DocsNavItem[];
  locale: Locale;
  techId: string;
  trackPrefix?: string;
  depth?: number;
}) {
  const pathname = usePathname();
  return (
    <ul className={cn('space-y-1', depth > 0 && 'ms-3 border-s border-border ps-3')}>
      {items.map((item) => {
        const fullSlug = trackPrefix ? `${trackPrefix}/${item.slug}` : item.slug;
        const href = `/${locale}/docs/${techId}/${fullSlug}`;
        const active =
          pathname === href || pathname?.endsWith(`/docs/${techId}/${fullSlug}`);
        return (
          <li key={fullSlug}>
            <Link
              href={href}
              className={cn(
                'block rounded-md px-2 py-1.5 text-sm transition-colors',
                depth === 0 && item.children?.length ? 'font-semibold text-foreground' : '',
                active
                  ? 'bg-[#ffd400]/25 font-semibold text-foreground'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground',
              )}
            >
              {localizeTitle(item.title, locale)}
            </Link>
            {item.children?.length ? (
              <NavLinks
                items={item.children}
                locale={locale}
                techId={techId}
                trackPrefix={trackPrefix}
                depth={depth + 1}
              />
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}

export function DocsSidebar({
  locale,
  tech,
  activeTrackId,
}: {
  locale: Locale;
  tech: DocsTechMeta;
  activeTrackId?: string;
}) {
  const tracks = tech.tracks ?? [];
  const activeTrack: DocsTrackMeta | null =
    tracks.find((t) => t.id === activeTrackId) ?? tracks[0] ?? null;
  const nav = activeTrack?.nav ?? tech.nav ?? [];
  const trackPrefix = activeTrack?.id;

  return (
    <aside className="space-y-4">
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          docs
        </p>
        <Link
          href={`/${locale}/docs/${tech.id}`}
          className="mt-1 block font-display text-lg font-bold tracking-tight hover:underline"
        >
          {localizeTitle(tech.title, locale)}
        </Link>
      </div>

      {tracks.length ? (
        <div className="space-y-1">
          <p className="text-[11px] font-medium text-muted-foreground">
            {locale === 'fa' ? 'نوع مستندات' : 'Doc type'}
          </p>
          <div className="flex flex-col gap-1">
            {tracks.map((t) => {
              const href = `/${locale}/docs/${tech.id}/${t.id}`;
              const active = t.id === activeTrack?.id;
              return (
                <Link
                  key={t.id}
                  href={href}
                  className={cn(
                    'rounded-md px-2 py-1.5 text-sm',
                    active
                      ? 'bg-[#ffd400]/30 font-bold text-foreground'
                      : 'text-muted-foreground hover:bg-muted',
                  )}
                >
                  {localizeTitle(t.title, locale)}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}

      <nav aria-label="Docs sidebar">
        <NavLinks
          items={nav}
          locale={locale}
          techId={tech.id}
          trackPrefix={trackPrefix}
        />
      </nav>

      {(activeTrack?.source ? [activeTrack.source] : tech.sources)?.length ? (
        <div className="border-t border-border pt-4">
          <p className="mb-2 text-xs font-medium text-muted-foreground">
            {locale === 'fa' ? 'منبع مرجع' : 'Reference sources'}
          </p>
          <ul className="space-y-1 text-xs">
            {(activeTrack?.source ? [activeTrack.source] : tech.sources).map((s) => (
              <li key={s.url}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground underline-offset-2 hover:underline"
                  dir="ltr"
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </aside>
  );
}
