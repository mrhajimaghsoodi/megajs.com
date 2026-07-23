import { DM_Sans, JetBrains_Mono, Space_Grotesk, Vazirmatn } from 'next/font/google';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { getDictionary } from '@/i18n/dictionaries';
import { dirFor, isLocale, type Locale } from '@/lib/utils';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
});

const vazirmatn = Vazirmatn({
  subsets: ['arabic', 'latin'],
  variable: '--font-persian',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
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
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${vazirmatn.variable} ${jetbrains.variable} flex min-h-dvh flex-col bg-[var(--mj-bg)] text-[var(--mj-fg)]`}
    >
      <SiteHeader locale={locale} dict={dict} />
      <main className="flex-1">{children}</main>
      <SiteFooter locale={locale} dict={dict} />
    </div>
  );
}
