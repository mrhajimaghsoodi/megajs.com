import { notFound } from 'next/navigation';
import { getDictionary } from '@/i18n/dictionaries';
import { API_BASE, isLocale, type Locale } from '@/lib/utils';

async function getChallenges(locale: Locale) {
  try {
    const res = await fetch(`${API_BASE}/catalog/challenges?locale=${locale}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    return res.json();
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
  const challenges = await getChallenges(locale);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-4xl font-bold">{dict.nav.practice}</h1>
      <p className="mt-3 max-w-2xl text-[var(--mj-muted-fg)]">{dict.sections.dailyBody}</p>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {challenges.map((c: any) => (
          <article
            key={c.id}
            className="rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-5"
          >
            <div className="mb-2 flex items-center justify-between gap-3">
              <h2 className="font-display text-xl font-semibold">{c.title}</h2>
              <span className="font-mono text-xs">{c.points} pts</span>
            </div>
            <p className="text-sm text-[var(--mj-muted-fg)]">{c.prompt}</p>
            <pre className="mt-4 overflow-x-auto rounded-[var(--mj-radius-sm)] bg-[var(--mj-ink)] p-4 text-[var(--mj-yellow)]">
              <code>{c.starterCode}</code>
            </pre>
          </article>
        ))}
      </div>
    </div>
  );
}
