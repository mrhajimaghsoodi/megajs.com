import Link from 'next/link';
import { notFound } from 'next/navigation';
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

const HERO_CODE = `const mega = {
  track: "javascript",
  day: 1,
  streak: true,
};

await learn(mega);
// → next challenge unlocked`;

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
  const fallbackTracks: TrackCard[] = [
    {
      slug: 'language-core',
      yearPlan: 1,
      status: 'published',
      title: locale === 'fa' ? 'هسته زبان' : 'Language Core',
      summary: 'HTML · CSS · JS · TS · React · Next',
      courses: [],
    },
  ];

  return (
    <>
      {/* Hero: one composition — brand + line + support + CTA on full-bleed code plane */}
      <section className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden mj-code-plane mj-scanline">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          aria-hidden
          style={{
            background:
              'radial-gradient(900px 520px at 70% 20%, color-mix(in oklab, var(--mj-yellow) 28%, transparent), transparent 62%)',
          }}
        />
        <pre
          className="pointer-events-none absolute inset-0 overflow-hidden p-6 font-mono text-[11px] leading-6 text-[color-mix(in_oklab,var(--mj-yellow)_22%,transparent)] sm:p-10 sm:text-xs md:text-sm md:leading-7"
          aria-hidden
        >
          {Array.from({ length: 18 })
            .map((_, i) => `${String(i + 1).padStart(2, '0')}  ${HERO_CODE.split('\n')[i % 6] ?? ''}`)
            .join('\n')}
        </pre>

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4rem)] max-w-6xl flex-col justify-end px-4 pb-16 pt-24 sm:px-6 sm:pb-20 lg:justify-center lg:pb-24">
          <div className="mj-fade-up max-w-3xl space-y-6">
            <p className="font-display text-[clamp(3.25rem,12vw,7.5rem)] font-bold leading-[0.9] tracking-[-0.06em] text-[var(--mj-yellow)]">
              {dict.brand}
              <span className="mj-caret" aria-hidden />
            </p>
            <h1 className="max-w-2xl font-display text-2xl font-semibold leading-snug text-[var(--mj-canvas-fg)] sm:text-3xl lg:text-4xl">
              {dict.tagline}
            </h1>
            <p className="max-w-xl text-base leading-7 text-white/65 sm:text-lg">{dict.heroSupport}</p>
            <div className="flex flex-wrap gap-3 pt-1">
              <CtaLink href={`/${locale}/login`} primary>
                {dict.ctaStart}
              </CtaLink>
              <Link
                href={`/${locale}/curriculum`}
                className="mj-btn inline-flex h-12 items-center rounded-[var(--mj-radius-md)] border border-white/20 bg-transparent px-5 text-sm font-semibold text-[var(--mj-canvas-fg)] hover:border-[var(--mj-yellow)] hover:text-[var(--mj-yellow)]"
              >
                {dict.ctaPath}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--mj-border)] bg-[var(--mj-bg)]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mb-10 max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--mj-muted-fg)]">
              curriculum
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {dict.sections.roadmapTitle}
            </h2>
            <p className="mt-4 text-[var(--mj-muted-fg)]">{dict.sections.roadmapBody}</p>
          </div>
          <div className="mj-stagger divide-y divide-[var(--mj-border)] border-y border-[var(--mj-border)]">
            {(tracks.length ? tracks : fallbackTracks).map((track) => (
              <Link
                key={track.slug}
                href={`/${locale}/learn`}
                className="group grid cursor-pointer gap-2 py-6 transition-colors hover:bg-[var(--mj-muted)]/40 sm:grid-cols-[5rem_1fr_auto] sm:items-baseline sm:gap-6 sm:px-2"
              >
                <span className="font-mono text-sm text-[var(--mj-muted-fg)]">Y{track.yearPlan}</span>
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight group-hover:text-[color-mix(in_oklab,var(--mj-fg)_88%,var(--mj-yellow))] sm:text-2xl">
                    {track.title}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--mj-muted-fg)]">{track.summary}</p>
                </div>
                <span className="font-mono text-xs text-[var(--mj-muted-fg)] opacity-0 transition-opacity group-hover:opacity-100 sm:justify-self-end">
                  {track.status === 'coming_soon' ? dict.sections.comingSoon : '→'}
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <CtaLink href={`/${locale}/curriculum`}>{dict.nav.curriculum}</CtaLink>
          </div>
        </div>
      </section>

      <section className="bg-[var(--mj-ink)] text-[var(--mj-canvas-fg)]">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-3">
          {[
            {
              kicker: '01',
              title: dict.sections.dailyTitle,
              body: dict.sections.dailyBody,
              href: `/${locale}/practice`,
            },
            {
              kicker: '02',
              title: dict.sections.contentTitle,
              body: dict.sections.contentBody,
              href: `/${locale}/articles`,
            },
            {
              kicker: '03',
              title: dict.sections.pricingTitle,
              body: `${dict.sections.free} · ${dict.sections.sub} · ${dict.sections.paid}`,
              href: `/${locale}/pricing`,
            },
          ].map((item) => (
            <Link key={item.kicker} href={item.href} className="mj-fade-up group block space-y-3">
              <span className="font-mono text-xs text-[var(--mj-yellow)]">{item.kicker}</span>
              <h2 className="font-display text-2xl font-bold tracking-tight group-hover:text-[var(--mj-yellow)]">
                {item.title}
              </h2>
              <p className="text-sm leading-7 text-white/60">{item.body}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-8 border border-[var(--mj-border)] bg-[var(--mj-card)] p-8 sm:p-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight">{dict.sections.whyTitle}</h2>
            <p className="mt-4 max-w-xl text-[var(--mj-muted-fg)]">{dict.sections.whyBody}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <CtaLink href={`/${locale}/about`} primary>
              {dict.nav.about}
            </CtaLink>
            <CtaLink href={`/${locale}/apps`}>{dict.nav.apps}</CtaLink>
          </div>
        </div>
      </section>
    </>
  );
}
