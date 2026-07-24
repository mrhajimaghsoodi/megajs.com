import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ContentSection, MarketingHero } from '@/components/marketing';
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
    title: dict.privacy.title,
    description: dict.privacy.updated,
    path: '/privacy',
  });
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const p = dict.privacy;

  return (
    <>
      <MarketingHero title={p.title} subtitle={p.updated} />
      <ContentSection>
        <ol className="mj-stagger space-y-4">
          {p.body.map((item, i) => (
            <li
              key={i}
              className="rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-5 text-sm leading-7 text-[var(--mj-muted-fg)]"
            >
              <span className="me-2 font-mono text-xs text-[var(--mj-fg)]">{i + 1}.</span>
              {item}
            </li>
          ))}
        </ol>
      </ContentSection>
    </>
  );
}
