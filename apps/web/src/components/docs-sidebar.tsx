'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { DocsNavItem, DocsTechMeta } from '@/lib/docs/types';
import { localizeTitle } from '@/lib/docs/types';
import type { Locale } from '@/lib/utils';
import { cn } from '@/lib/utils';

function NavLinks({
  items,
  locale,
  techId,
  depth = 0,
}: {
  items: DocsNavItem[];
  locale: Locale;
  techId: string;
  depth?: number;
}) {
  const pathname = usePathname();
  return (
    <ul className={cn('space-y-1', depth > 0 && 'ms-3 border-s border-border ps-3')}>
      {items.map((item) => {
        const href = `/${locale}/docs/${techId}/${item.slug}`;
        const active = pathname === href || pathname?.endsWith(`/docs/${techId}/${item.slug}`);
        return (
          <li key={item.slug}>
            <Link
              href={href}
              className={cn(
                'block rounded-md px-2 py-1.5 text-sm transition-colors',
                active
                  ? 'bg-[#ffd400]/25 font-semibold text-foreground'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground',
              )}
            >
              {localizeTitle(item.title, locale)}
            </Link>
            {item.children?.length ? (
              <NavLinks items={item.children} locale={locale} techId={techId} depth={depth + 1} />
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
}: {
  locale: Locale;
  tech: DocsTechMeta;
}) {
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
      <nav aria-label="Docs sidebar">
        <NavLinks items={tech.nav} locale={locale} techId={tech.id} />
      </nav>
      {tech.sources?.length ? (
        <div className="border-t border-border pt-4">
          <p className="mb-2 text-xs font-medium text-muted-foreground">
            {locale === 'fa' ? 'منابع مرجع' : 'Reference sources'}
          </p>
          <ul className="space-y-1 text-xs">
            {tech.sources.map((s) => (
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
