import { notFound } from 'next/navigation';
import { ContentSection, CtaLink, MarketingHero } from '@/components/marketing';
import { getDictionary } from '@/i18n/dictionaries';
import { isLocale, type Locale } from '@/lib/utils';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : 'fa';
  const dict = getDictionary(locale);
  return {
    title: dict.about.title,
    description: dict.about.subtitle,
    alternates: { canonical: `/${locale}/about`, languages: { fa: '/fa/about', en: '/en/about' } },
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const a = dict.about;

  const blocks = [
    { title: a.missionTitle, body: a.missionBody },
    { title: a.howTitle, body: a.howBody },
    { title: a.brandTitle, body: a.brandBody },
  ];

  return (
    <>
      <MarketingHero
        title={a.title}
        subtitle={a.subtitle}
        actions={
          <>
            <CtaLink href={`/${locale}/curriculum`} primary>
              {dict.nav.curriculum}
            </CtaLink>
            <CtaLink href={`/${locale}/contact`}>{dict.nav.contact}</CtaLink>
          </>
        }
      />
      <ContentSection>
        <div className="mj-stagger grid gap-4 lg:grid-cols-3">
          {blocks.map((b) => (
            <article
              key={b.title}
              className="mj-card-motion rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-6"
            >
              <h2 className="font-display text-xl font-bold">{b.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--mj-muted-fg)]">{b.body}</p>
            </article>
          ))}
        </div>
      </ContentSection>
    </>
  );
}
