import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Logo } from '@/components/logo';
import { CtaLink } from '@/components/marketing';
import { getDictionary } from '@/i18n/dictionaries';
import { API_BASE, isLocale, type Locale } from '@/lib/utils';

type TrackCard = {
  slug: string;
  yearPlan: number;
  status: string;
  title: string;
  summary: string;
  courses: Array<{ slug: string; title: string; status: string; accessTier: string }>;
};

async function getTracks(locale: Locale): Promise<TrackCard[]> {
  try {
    const res = await fetch(`${API_BASE}/catalog/tracks?locale=${locale}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : 'fa';
  const dict = getDictionary(locale);
  return {
    title: dict.brand,
    description: dict.tagline,
    alternates: {
      canonical: `/${locale}`,
      languages: { fa: '/fa', en: '/en' },
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const tracks = await getTracks(locale);

  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--mj-border)]">
        <div
          className="mj-hero-wash pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(1200px 500px at 80% -10%, color-mix(in oklab, var(--mj-accent) 35%, transparent), transparent 60%), linear-gradient(180deg, color-mix(in oklab, var(--mj-muted) 70%, transparent), transparent)',
          }}
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="mj-fade-up space-y-6">
            <Logo href={`/${locale}`} className="origin-right scale-110 sm:origin-left" priority />
            <h1 className="font-display max-w-2xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              {dict.tagline}
            </h1>
            <p className="max-w-xl text-base text-[var(--mj-muted-fg)] sm:text-lg">
              {dict.heroSupport}
            </p>
            <div className="flex flex-wrap gap-3">
              <CtaLink href={`/${locale}/login`} primary>
                {dict.ctaStart}
              </CtaLink>
              <CtaLink href={`/${locale}/curriculum`}>{dict.ctaPath}</CtaLink>
            </div>
          </div>
          <div className="mj-fade-up relative min-h-64 overflow-hidden border border-[var(--mj-border)] bg-[var(--mj-ink)] p-6 text-[var(--mj-yellow)] sm:min-h-80">
            <pre className="font-mono text-xs leading-6 sm:text-sm">{`// mega.js — daily learning loop
const today = {
  lesson: "JavaScript · Values",
  streak: 7,
  challenge: "sum(a, b)",
  tokens: 12,
};

learn(today);`}</pre>
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
              style={{
                background:
                  'linear-gradient(transparent, color-mix(in oklab, var(--mj-ink) 90%, black))',
              }}
              aria-hidden
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold">{dict.sections.roadmapTitle}</h2>
            <p className="mt-3 text-[var(--mj-muted-fg)]">{dict.sections.roadmapBody}</p>
          </div>
          <CtaLink href={`/${locale}/curriculum`}>{dict.nav.curriculum}</CtaLink>
        </div>
        <div className="mj-stagger grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {(tracks.length
            ? tracks
            : [
                {
                  slug: 'language-core',
                  yearPlan: 1,
                  status: 'published',
                  title: locale === 'fa' ? 'هسته زبان' : 'Language Core',
                  summary: 'JavaScript · TypeScript',
                  courses: [],
                },
              ]
          ).map((track) => (
            <Link
              key={track.slug}
              href={`/${locale}/learn`}
              className="mj-card-motion group cursor-pointer rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-5"
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <span className="font-mono text-xs text-[var(--mj-muted-fg)]">
                  Y{track.yearPlan}
                </span>
                {track.status === 'coming_soon' ? (
                  <span className="rounded-full bg-[var(--mj-muted)] px-2 py-1 text-xs">
                    {dict.sections.comingSoon}
                  </span>
                ) : null}
              </div>
              <h3 className="font-display text-xl font-semibold group-hover:underline">
                {track.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{track.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--mj-border)] bg-[var(--mj-muted)]">
        <div className="mj-stagger mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-3">
          {[
            { title: dict.sections.dailyTitle, body: dict.sections.dailyBody, href: `/${locale}/practice` },
            { title: dict.sections.contentTitle, body: dict.sections.contentBody, href: `/${locale}/articles` },
            {
              title: dict.sections.pricingTitle,
              body: `${dict.sections.free} · ${dict.sections.sub} · ${dict.sections.paid}`,
              href: `/${locale}/pricing`,
            },
          ].map((item) => (
            <Link key={item.title} href={item.href} className="mj-card-motion block rounded-[var(--mj-radius-md)] p-1">
              <h2 className="font-display text-2xl font-bold">{item.title}</h2>
              <p className="mt-3 text-[var(--mj-muted-fg)]">{item.body}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mj-scale-in grid gap-6 rounded-[var(--mj-radius-lg)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold">{dict.sections.whyTitle}</h2>
            <p className="mt-3 text-[var(--mj-muted-fg)]">{dict.sections.whyBody}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <CtaLink href={`/${locale}/about`} primary>
              {dict.nav.about}
            </CtaLink>
            <CtaLink href={`/${locale}/apps`}>{dict.nav.apps}</CtaLink>
            <CtaLink href={`/${locale}/tokens`}>{dict.nav.tokens}</CtaLink>
          </div>
        </div>
      </section>
    </>
  );
}
