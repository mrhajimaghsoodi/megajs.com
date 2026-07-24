'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Collapse, PageEnter, Spinner } from '@/components/ui/motion';
import { Textarea } from '@/components/ui/textarea';
import type { Dictionary } from '@/i18n/dictionaries';
import { API_BASE } from '@/lib/utils';

export type PracticeChallenge = {
  id: string;
  slug: string;
  title: string;
  prompt: string;
  starterCode: string;
  points: number;
  difficulty: string;
};

export function PracticeClient({
  dict,
  challenges,
}: {
  dict: Dictionary;
  challenges: PracticeChallenge[];
}) {
  const pr = dict.practice;
  const [active, setActive] = useState<PracticeChallenge | null>(challenges[0] ?? null);
  const [code, setCode] = useState(challenges[0]?.starterCode ?? '');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

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
    <PageEnter className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-4xl font-bold">{pr.title}</h1>
      <p className="mt-3 max-w-2xl text-[var(--mj-muted-fg)]">{pr.subtitle}</p>

      {!challenges.length ? (
        <p className="mt-8 text-sm text-muted-foreground">{dict.empty}</p>
      ) : (
        <div className="mt-8 grid gap-6 lg:grid-cols-[280px_1fr]">
          <aside className="mj-stagger space-y-2">
            {challenges.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => {
                  setActive(c);
                  setCode(c.starterCode);
                  setResult('');
                }}
                className={`mj-btn w-full cursor-pointer rounded-[var(--mj-radius-md)] border px-3 py-3 text-start ${
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

          <section className="mj-scale-in space-y-4">
            {active ? (
              <>
                <h2 className="font-display text-2xl font-semibold">{active.title}</h2>
                <p className="text-[var(--mj-muted-fg)]">{active.prompt}</p>
                <Textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  aria-label={pr.yourCode}
                  className="min-h-56 w-full bg-[var(--mj-ink)] font-mono text-sm text-primary"
                  dir="ltr"
                  spellCheck={false}
                />
                <Button disabled={loading} onClick={() => void submit()} size="lg">
                  {loading ? <Spinner /> : null}
                  {pr.runSubmit}
                </Button>
                <Collapse open={Boolean(result)}>
                  <pre
                    className="overflow-x-auto rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-muted)] p-4 text-xs"
                    dir="ltr"
                  >
                    {result}
                  </pre>
                </Collapse>
              </>
            ) : null}
          </section>
        </div>
      )}
    </PageEnter>
  );
}
