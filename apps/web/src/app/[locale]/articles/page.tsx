import { notFound } from 'next/navigation';
import { ContentSection, CtaLink, MarketingHero } from '@/components/marketing';
import { getDictionary } from '@/i18n/dictionaries';
import { isLocale, type Locale } from '@/lib/utils';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : 'fa';
  const dict = getDictionary(locale);
  return {
    title: dict.articles.title,
    description: dict.articles.subtitle,
    alternates: {
      canonical: `/${locale}/articles`,
      languages: { fa: '/fa/articles', en: '/en/articles' },
    },
  };
}

export default async function ArticlesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const a = dict.articles;

  return (
    <>
      <MarketingHero
        title={a.title}
        subtitle={a.subtitle}
        actions={
          <CtaLink href={`/${locale}/learn`} primary>
            {a.ctaLearn}
          </CtaLink>
        }
      />
      <ContentSection title={a.topicsTitle}>
        <p className="mb-6 text-sm text-[var(--mj-muted-fg)]">{a.empty}</p>
        <ul className="mj-stagger grid gap-3 md:grid-cols-2">
          {a.topics.map((topic) => (
            <li
              key={topic}
              className="mj-card-motion rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] px-4 py-4 text-sm"
            >
              {topic}
            </li>
          ))}
        </ul>
      </ContentSection>
    </>
  );
}
