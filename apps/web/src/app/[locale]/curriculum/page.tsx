import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ContentSection, CtaLink, MarketingHero } from '@/components/marketing';
import { getDictionary } from '@/i18n/dictionaries';
import { isLocale, type Locale } from '@/lib/utils';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : 'fa';
  const dict = getDictionary(locale);
  return {
    title: dict.curriculum.title,
    description: dict.curriculum.subtitle,
    alternates: { canonical: `/${locale}/curriculum`, languages: { fa: '/fa/curriculum', en: '/en/curriculum' } },
  };
}

export default async function CurriculumPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const c = dict.curriculum;
  const years = [
    { n: 1, title: c.y1Title, body: c.y1Body },
    { n: 2, title: c.y2Title, body: c.y2Body },
    { n: 3, title: c.y3Title, body: c.y3Body },
    { n: 4, title: c.y4Title, body: c.y4Body },
  ];

  return (
    <>
      <MarketingHero
        title={c.title}
        subtitle={c.subtitle}
        actions={<CtaLink href={`/${locale}/learn`} primary>{c.cta}</CtaLink>}
      />
      <ContentSection>
        <div className="mj-stagger grid gap-4 md:grid-cols-2">
          {years.map((y) => (
            <article
              key={y.n}
              className="mj-card-motion rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-6"
            >
              <div className="font-mono text-xs text-[var(--mj-muted-fg)]">
                {c.year} {y.n}
              </div>
              <h2 className="font-display mt-3 text-2xl font-bold">{y.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--mj-muted-fg)]">{y.body}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-sm text-[var(--mj-muted-fg)]">
          <Link href={`/${locale}/practice`} className="underline-offset-4 hover:underline">
            {dict.ctaPractice}
          </Link>
          {' · '}
          <Link href={`/${locale}/pricing`} className="underline-offset-4 hover:underline">
            {dict.nav.pricing}
          </Link>
        </p>
      </ContentSection>
    </>
  );
}
