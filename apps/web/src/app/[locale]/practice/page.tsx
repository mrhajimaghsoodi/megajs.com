'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getDictionary } from '@/i18n/dictionaries';
import { API_BASE, isLocale, type Locale } from '@/lib/utils';

type Challenge = {
  id: string;
  slug: string;
  title: string;
  prompt: string;
  starterCode: string;
  points: number;
  difficulty: string;
};

export default function PracticePage() {
  const params = useParams<{ locale: string }>();
  const locale = (isLocale(params.locale) ? params.locale : 'fa') as Locale;
  const dict = getDictionary(locale);
  const pr = dict.practice;

  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [active, setActive] = useState<Challenge | null>(null);
  const [code, setCode] = useState('');
  const [result, setResult] = useState<string>('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    void (async () => {
      const res = await fetch(`${API_BASE}/practice/challenges?locale=${locale}`);
      if (!res.ok) return;
      const data = (await res.json()) as Challenge[];
      setChallenges(data);
      if (data[0]) {
        setActive(data[0]);
        setCode(data[0].starterCode);
      }
    })();
  }, [locale]);

  async function submit() {
    if (!active) return;
    const token = localStorage.getItem('mj_token');
    if (!token) {
      setResult(dict.profile.pleaseLogin);
      return;
    }
    setLoading(true);
    setResult('');
    try {
      const res = await fetch(`${API_BASE}/practice/challenges/${active.slug}/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ code }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message ?? dict.error);
      setResult(
        JSON.stringify(
          {
            passed: data.passed,
            score: data.score,
            tokensEarned: data.tokensEarned,
            results: data.results,
          },
          null,
          2,
        ),
      );
    } catch (e) {
      setResult(e instanceof Error ? e.message : dict.error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-4xl font-bold">{pr.title}</h1>
      <p className="mt-3 max-w-2xl text-[var(--mj-muted-fg)]">{pr.subtitle}</p>

      <div className="mt-8 grid gap-6 lg:grid-cols-[280px_1fr]">
        <aside className="space-y-2">
          {challenges.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => {
                setActive(c);
                setCode(c.starterCode);
                setResult('');
              }}
              className={`w-full cursor-pointer rounded-[var(--mj-radius-md)] border px-3 py-3 text-start transition-colors ${
                active?.id === c.id
                  ? 'border-[var(--mj-accent)] bg-[var(--mj-accent)] text-[var(--mj-accent-fg)]'
                  : 'border-[var(--mj-border)] bg-[var(--mj-card)] hover:bg-[var(--mj-muted)]'
              }`}
            >
              <div className="font-semibold">{c.title}</div>
              <div className="font-mono text-xs opacity-80">
                {c.difficulty} · {c.points} pts
              </div>
            </button>
          ))}
        </aside>

        <section className="space-y-4">
          {active ? (
            <>
              <h2 className="font-display text-2xl font-semibold">{active.title}</h2>
              <p className="text-[var(--mj-muted-fg)]">{active.prompt}</p>
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                aria-label={pr.yourCode}
                className="min-h-56 w-full rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-ink)] p-4 font-mono text-sm text-[var(--mj-yellow)]"
                dir="ltr"
                spellCheck={false}
              />
              <button
                type="button"
                disabled={loading}
                onClick={submit}
                className="h-11 cursor-pointer rounded-[var(--mj-radius-md)] bg-[var(--mj-accent)] px-5 font-semibold text-[var(--mj-accent-fg)] disabled:opacity-60"
              >
                {loading ? dict.loading : pr.runSubmit}
              </button>
              {result ? (
                <pre className="overflow-x-auto rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-muted)] p-4 text-xs" dir="ltr">
                  {result}
                </pre>
              ) : null}
            </>
          ) : null}
        </section>
      </div>
    </div>
  );
}
