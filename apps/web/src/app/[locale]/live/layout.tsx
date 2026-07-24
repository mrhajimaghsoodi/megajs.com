import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { getDictionary } from '@/i18n/dictionaries';
import { pageMetadata } from '@/lib/seo';
import { isLocale } from '@/lib/utils';

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
    title: dict.live.title,
    description: dict.live.subtitle,
    path: '/live',
  });
}

export default function LiveLayout({ children }: { children: ReactNode }) {
  return children;
}
