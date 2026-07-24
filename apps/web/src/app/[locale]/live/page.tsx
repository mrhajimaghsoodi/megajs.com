import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getDictionary } from '@/i18n/dictionaries';
import { pageMetadata, jsonLdScript, absoluteUrl, localePath } from '@/lib/seo';
import { formatTehranDateTime } from '@/lib/tehran-time';
import { API_BASE, isLocale, type Locale } from '@/lib/utils';

async function fetchEvents(locale: string) {
  try {
    const res = await fetch(`${API_BASE}/live?locale=${locale}`, {
      next: { revalidate: 60, tags: ['live'] },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const dict = getDictionary(raw as Locale);
  return pageMetadata({
    locale: raw,
    title: dict.live.title,
    description: dict.live.subtitle,
    path: '/live',
  });
}

export default async function LiveIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const lv = dict.live;
  const events = await fetchEvents(locale);

  const itemList = jsonLdScript({
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: lv.title,
    itemListElement: events.map((event: any, i: number) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: absoluteUrl(localePath(locale, `/live/${event.slug}`)),
      name: event.title,
    })),
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      {itemList ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: itemList }} />
      ) : null}
      <h1 className="font-display text-4xl font-bold">{lv.title}</h1>
      <p className="mt-3 max-w-2xl text-[var(--mj-muted-fg)]">{lv.subtitle}</p>
      <div className="mt-10 space-y-4">
        {!events.length ? (
          <p className="text-sm text-muted-foreground">{dict.empty}</p>
        ) : null}
        {events.map((event: any) => (
          <Link
            key={event.id}
            href={`/${locale}/live/${event.slug}`}
            className="block rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-5 transition-colors hover:bg-[var(--mj-muted)]"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="font-display text-2xl font-semibold">{event.title}</h2>
              <span className="rounded-full bg-[var(--mj-accent)] px-3 py-1 text-xs font-semibold text-[var(--mj-accent-fg)]">
                {event.status}
              </span>
            </div>
            <p className="mt-2 text-[var(--mj-muted-fg)]">{event.summary}</p>
            <p className="mt-3 font-mono text-xs text-[var(--mj-muted-fg)]">
              {formatTehranDateTime(event.startsAt)}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {(event.destinations ?? []).map((d: string) => (
                <span
                  key={d}
                  className="rounded-full border border-[var(--mj-border)] px-3 py-1 text-xs uppercase"
                >
                  {d}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
