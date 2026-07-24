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
    title: dict.podcasts.title,
    description: dict.podcasts.subtitle,
    path: '/podcasts',
  });
}

export default async function PodcastsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const p = dict.podcasts;

  return (
    <>
      <MarketingHero
        title={p.title}
        subtitle={p.subtitle}
        actions={
          <CtaLink href={`/${locale}/live`} primary>
            {p.ctaLive}
          </CtaLink>
        }
      />
      <ContentSection>
        <div className="mj-scale-in rounded-[var(--mj-radius-md)] border border-dashed border-[var(--mj-border)] bg-[var(--mj-card)] p-8 text-sm text-[var(--mj-muted-fg)]">
          {p.empty}
        </div>
      </ContentSection>
    </>
  );
}
