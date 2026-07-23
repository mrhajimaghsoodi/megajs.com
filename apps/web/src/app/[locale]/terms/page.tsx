import { notFound } from 'next/navigation';
import { ContentSection, MarketingHero } from '@/components/marketing';
import { getDictionary } from '@/i18n/dictionaries';
import { isLocale, type Locale } from '@/lib/utils';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : 'fa';
  const dict = getDictionary(locale);
  return {
    title: dict.terms.title,
    description: dict.terms.updated,
    alternates: { canonical: `/${locale}/terms`, languages: { fa: '/fa/terms', en: '/en/terms' } },
  };
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const t = dict.terms;

  return (
    <>
      <MarketingHero title={t.title} subtitle={t.updated} />
      <ContentSection>
        <ol className="mj-stagger space-y-4">
          {t.body.map((item, i) => (
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
