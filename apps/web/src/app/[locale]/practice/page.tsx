import { notFound } from 'next/navigation';
import { PracticeClient, type PracticeChallenge } from '@/components/practice-client';
import { getDictionary } from '@/i18n/dictionaries';
import { jsonLdScript, absoluteUrl, localePath } from '@/lib/seo';
import { API_BASE, isLocale, type Locale } from '@/lib/utils';

async function fetchChallenges(locale: string): Promise<PracticeChallenge[]> {
  try {
    const res = await fetch(`${API_BASE}/practice/challenges?locale=${locale}`, {
      next: { revalidate: 120, tags: ['practice'] },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export default async function PracticePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const challenges = await fetchChallenges(locale);

  const listSchema = jsonLdScript({
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: dict.practice.title,
    description: dict.practice.subtitle,
    itemListElement: challenges.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.title,
      url: absoluteUrl(localePath(locale, '/practice')) + `#${c.slug}`,
    })),
  });

  return (
    <>
      {listSchema ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: listSchema }} />
      ) : null}
      <PracticeClient dict={dict} challenges={challenges} />
    </>
  );
}
