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
    title: dict.contact.title,
    description: dict.contact.subtitle,
    path: '/contact',
  });
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const c = dict.contact;

  return (
    <>
      <MarketingHero title={c.title} subtitle={c.subtitle} />
      <ContentSection>
        <div className="mj-stagger grid gap-4 md:grid-cols-3">
          <article className="mj-card-motion rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-6">
            <h2 className="font-display text-xl font-bold">{c.supportTitle}</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--mj-muted-fg)]">{c.supportBody}</p>
            <div className="mt-5">
              <CtaLink href={`/${locale}/profile/support`} primary>
                {c.supportCta}
              </CtaLink>
            </div>
          </article>
          <article className="mj-card-motion rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-6">
            <h2 className="font-display text-xl font-bold">{c.emailLabel}</h2>
            <p className="mt-3 font-mono text-sm" dir="ltr">
              {c.emailValue}
            </p>
          </article>
          <article className="mj-card-motion rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-6">
            <h2 className="font-display text-xl font-bold">{c.socialTitle}</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--mj-muted-fg)]">{c.socialBody}</p>
          </article>
        </div>
      </ContentSection>
    </>
  );
}
