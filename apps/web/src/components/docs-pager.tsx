import Link from 'next/link';
import type { DocsTechMeta, DocsTrackMeta } from '@/lib/docs/types';
import { flattenNav, localizeTitle } from '@/lib/docs/types';
import type { Locale } from '@/lib/utils';

export function DocsPager({
  locale,
  tech,
  currentSlug,
  track,
}: {
  locale: Locale;
  tech: DocsTechMeta;
  /** Full slug including track, e.g. learn/headings */
  currentSlug: string;
  track?: DocsTrackMeta | null;
}) {
  const flat = track
    ? flattenNav(track.nav).map((x) => ({
        ...x,
        fullSlug: `${track.id}/${x.slug}`,
      }))
    : flattenNav(tech.nav ?? []).map((x) => ({ ...x, fullSlug: x.slug }));

  const idx = flat.findIndex((x) => x.fullSlug === currentSlug);
  const prev = idx > 0 ? flat[idx - 1] : null;
  const next = idx >= 0 && idx < flat.length - 1 ? flat[idx + 1] : null;

  return (
    <nav
      className="mt-14 flex flex-wrap items-stretch justify-between gap-4 border-t border-border pt-8"
      aria-label={locale === 'fa' ? 'صفحات مجاور' : 'Adjacent pages'}
    >
      {prev ? (
        <Link
          href={`/${locale}/docs/${tech.id}/${prev.fullSlug}`}
          className="group max-w-[48%] space-y-1"
        >
          <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            {locale === 'fa' ? 'قبلی' : 'Previous'}
          </span>
          <span className="block font-display text-base font-bold group-hover:underline">
            {localizeTitle(prev.title, locale)}
          </span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={`/${locale}/docs/${tech.id}/${next.fullSlug}`}
          className="group ms-auto max-w-[48%] space-y-1 text-end"
        >
          <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            {locale === 'fa' ? 'بعدی' : 'Next'}
          </span>
          <span className="block font-display text-base font-bold group-hover:underline">
            {localizeTitle(next.title, locale)}
          </span>
        </Link>
      ) : null}
    </nav>
  );
}
