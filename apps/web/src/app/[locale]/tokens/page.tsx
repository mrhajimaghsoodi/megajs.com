import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ContentSection, CtaLink, MarketingHero } from '@/components/marketing';
import { getDictionary } from '@/i18n/dictionaries';
import { pageMetadata } from '@/lib/seo';
import { isLocale, type Locale } from '@/lib/utils';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : 'fa';
  const dict = getDictionary(locale);
  return pageMetadata({
    locale,
    title: dict.tokens.title,
    description: dict.tokens.subtitle,
    path: '/tokens',
  });
}

export default async function TokensPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const t = dict.tokens;

  return (
    <>
      <MarketingHero
        title={t.title}
        subtitle={t.subtitle}
        actions={
          <CtaLink href={`/${locale}/practice`} primary>
            {t.cta}
          </CtaLink>
        }
      />
      <ContentSection>
        <div className="mj-stagger grid gap-4 md:grid-cols-2">
          <article className="mj-card-motion rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-6">
            <h2 className="font-display text-xl font-bold">{t.ruleTitle}</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--mj-muted-fg)]">{t.ruleBody}</p>
          </article>
          <article className="mj-card-motion rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-6">
            <h2 className="font-display text-xl font-bold">{t.loopTitle}</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--mj-muted-fg)]">{t.loopBody}</p>
          </article>
        </div>
      </ContentSection>
    </>
  );
}
