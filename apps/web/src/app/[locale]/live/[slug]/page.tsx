import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { LiveRegisterButton } from '@/components/live-register-button';
import { getDictionary } from '@/i18n/dictionaries';
import {
  absoluteUrl,
  buildPublicMetadata,
  jsonLdScript,
  localePath,
} from '@/lib/seo';
import { formatTehranDateTime } from '@/lib/tehran-time';
import { API_BASE, isLocale, type Locale } from '@/lib/utils';

async function fetchEvent(slug: string, locale: string) {
  try {
    const res = await fetch(`${API_BASE}/live/event/${slug}?locale=${locale}`, {
      next: { revalidate: 60, tags: ['live'] },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) return {};
  const event = await fetchEvent(slug, raw);
  if (!event) return {};
  return buildPublicMetadata({
    locale: raw,
    fallbackTitle: event.title || slug,
    fallbackDescription: event.summary,
    seo: event.seo,
    defaultPath: `/live/${slug}`,
    type: 'website',
  });
}

export default async function LiveDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const lv = dict.live;
  const event = await fetchEvent(slug, locale);
  if (!event) notFound();

  const eventSchema = jsonLdScript({
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    description: event.summary,
    startDate: event.startsAt,
    eventStatus:
      event.status === 'live'
        ? 'https://schema.org/EventScheduled'
        : event.status === 'ended'
          ? 'https://schema.org/EventMovedOnline'
          : 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
    location: {
      '@type': 'VirtualLocation',
      url: absoluteUrl(localePath(locale, `/live/${slug}`)),
    },
    organizer: {
      '@type': 'Organization',
      name: 'MEGA JS',
      url: absoluteUrl(localePath(locale, '/')),
    },
  });

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      {eventSchema ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: eventSchema }} />
      ) : null}
      <Link href={`/${locale}/live`} className="text-sm text-[var(--mj-muted-fg)] hover:underline">
        ← {dict.back}
      </Link>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <h1 className="font-display text-4xl font-bold">{event.title}</h1>
        <span className="rounded-full bg-[var(--mj-accent)] px-3 py-1 text-xs font-semibold text-[var(--mj-accent-fg)]">
          {event.status}
        </span>
      </div>
      <p className="mt-3 text-[var(--mj-muted-fg)]">{event.summary}</p>
      <p className="mt-2 font-mono text-xs text-[var(--mj-muted-fg)]">
        {formatTehranDateTime(event.startsAt)}
      </p>

      <div className="mt-8 aspect-video overflow-hidden rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-ink)] text-[var(--mj-accent)]">
        <div className="grid h-full place-items-center p-6 text-center">
          {event.status === 'live' ? (
            <div>
              <div className="font-display text-2xl font-bold">LIVE</div>
              <p className="mt-2 text-sm opacity-80">
                {event.playbackUrl ?? lv.playerWiring}
              </p>
            </div>
          ) : event.status === 'ended' ? (
            <div>
              <div className="font-display text-2xl font-bold">VOD</div>
              <p className="mt-2 text-sm opacity-80">{event.recordingUrl ?? lv.recordingPending}</p>
            </div>
          ) : (
            <div>
              <div className="font-display text-2xl font-bold">{lv.upcoming}</div>
              <p className="mt-2 text-sm opacity-80">{lv.smsReminder}</p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {(event.destinations ?? []).map((d: string) => (
          <a
            key={d}
            href={event.externalUrls?.[d] ?? '#'}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[var(--mj-border)] px-3 py-1 text-xs uppercase hover:bg-[var(--mj-muted)]"
          >
            {d}
          </a>
        ))}
      </div>

      <LiveRegisterButton
        slug={slug}
        label={lv.registerWebinar}
        loginHint={dict.profile.pleaseLogin}
        errorLabel={dict.error}
        registeredLabel={lv.registered}
      />
    </div>
  );
}
