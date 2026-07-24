import { IBM_Plex_Sans, JetBrains_Mono, Vazirmatn } from 'next/font/google';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { LocaleDocument } from '@/components/locale-document';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { getDictionary } from '@/i18n/dictionaries';
import { dirFor, isLocale, type Locale } from '@/lib/utils';

/** UI/UX Pro Max Developer Mono: JetBrains display+code, IBM Plex body */
const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

const ibmPlex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
});

const vazirmatn = Vazirmatn({
  subsets: ['arabic', 'latin'],
  variable: '--font-persian',
});

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
      style={{ ['--font-display' as string]: 'var(--font-mono)' }}
      className={`${jetbrains.variable} ${ibmPlex.variable} ${vazirmatn.variable} flex min-h-dvh flex-col bg-background text-foreground`}
    >
      <LocaleDocument locale={locale} />
      <SiteHeader locale={locale} dict={dict} />
      <main className="flex-1">{children}</main>
      <SiteFooter locale={locale} dict={dict} />
    </div>
  );
}
