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
    title: dict.apps.title,
    description: dict.apps.subtitle,
    path: '/apps',
  });
}

export default async function AppsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const a = dict.apps;
  const cards = [
    { title: a.webTitle, body: a.webBody },
    { title: a.mobileTitle, body: a.mobileBody },
    { title: a.desktopTitle, body: a.desktopBody },
  ];

  return (
    <>
      <MarketingHero
        title={a.title}
        subtitle={a.subtitle}
        actions={
          <CtaLink href={`/${locale}`} primary>
            {a.cta}
          </CtaLink>
        }
      />
      <ContentSection>
        <div className="mj-stagger grid gap-4 lg:grid-cols-3">
          {cards.map((c) => (
            <article
              key={c.title}
              className="mj-card-motion rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-6"
            >
              <h2 className="font-display text-xl font-bold">{c.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--mj-muted-fg)]">{c.body}</p>
            </article>
          ))}
        </div>
      </ContentSection>
    </>
  );
}
