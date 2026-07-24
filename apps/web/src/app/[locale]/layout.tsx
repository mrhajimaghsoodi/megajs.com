import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { LocaleDocument } from '@/components/locale-document';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { getDictionary } from '@/i18n/dictionaries';
import { dirFor, isLocale, type Locale } from '@/lib/utils';

export function generateStaticParams() {
  return [{ locale: 'fa' }, { locale: 'en' }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const dir = dirFor(locale);

  return (
    <div
      lang={locale}
      dir={dir}
      data-locale={locale}
      className="flex min-h-dvh flex-col bg-background text-foreground"
    >
      <LocaleDocument locale={locale} />
      <SiteHeader locale={locale} dict={dict} />
      <main className="flex-1">{children}</main>
      <SiteFooter locale={locale} dict={dict} />
    </div>
  );
}
