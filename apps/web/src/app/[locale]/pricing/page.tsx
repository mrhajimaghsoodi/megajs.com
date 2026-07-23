import { notFound } from 'next/navigation';
import { ContentSection, CtaLink, MarketingHero } from '@/components/marketing';
import { getDictionary } from '@/i18n/dictionaries';
import { isLocale, type Locale } from '@/lib/utils';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : 'fa';
  const dict = getDictionary(locale);
  return {
    title: dict.pricing.title,
    description: dict.sections.pricingTitle,
    alternates: {
      canonical: `/${locale}/pricing`,
      languages: { fa: '/fa/pricing', en: '/en/pricing' },
    },
  };
}

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const pr = dict.pricing;

  const tiers = [
    { name: dict.sections.free, price: pr.freePrice, body: pr.freeDesc },
    { name: dict.sections.sub, price: pr.subPrice, body: pr.subDesc },
    { name: dict.sections.paid, price: pr.paidPrice, body: pr.paidDesc },
  ];

  return (
    <>
      <MarketingHero
        title={pr.title}
        subtitle={dict.sections.pricingTitle}
        actions={
          <CtaLink href={`/${locale}/login`} primary>
            {pr.cta}
          </CtaLink>
        }
      />
      <ContentSection>
        <div className="mj-stagger grid gap-4 lg:grid-cols-3">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className="mj-card-motion rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-6"
            >
              <h2 className="font-display text-2xl font-bold">{tier.name}</h2>
              <p className="mt-3 font-mono text-sm">{tier.price}</p>
              <p className="mt-4 text-sm text-[var(--mj-muted-fg)]">{tier.body}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-[var(--mj-muted-fg)]">
          <a href={`/${locale}/tokens`} className="underline-offset-4 hover:underline">
            {dict.nav.tokens}
          </a>
        </p>
      </ContentSection>
    </>
  );
}
