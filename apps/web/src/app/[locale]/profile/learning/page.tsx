'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { API_BASE, isLocale, type Locale } from '@/lib/utils';

export default function LearningPage() {
  const params = useParams<{ locale: string }>();
  const locale = (isLocale(params.locale) ? params.locale : 'fa') as Locale;
  const fa = locale === 'fa';
  const [rows, setRows] = useState<any[]>([]);
  const [enrollments, setEnrollments] = useState<any[]>([]);

  useEffect(() => {
    const token = localStorage.getItem('mj_token');
    if (!token) return;
    const h = { Authorization: `Bearer ${token}` };
    void Promise.all([
      fetch(`${API_BASE}/me/progress`, { headers: h }).then((r) => r.json()),
      fetch(`${API_BASE}/me/enrollments`, { headers: h }).then((r) => r.json()),
    ]).then(([p, e]) => {
      setRows(Array.isArray(p) ? p : []);
      setEnrollments(Array.isArray(e) ? e : []);
    });
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl font-bold">{fa ? 'یادگیری من' : 'My learning'}</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">
          {fa ? 'دوره‌ها و پیشرفت درس‌ها' : 'Courses and lesson progress'}
        </p>
      </div>
      <section>
        <h2 className="font-display text-xl font-semibold">{fa ? 'دوره‌های من' : 'My courses'}</h2>
        <div className="mt-3 space-y-2">
          {enrollments.length === 0 ? (
            <p className="text-sm text-[var(--mj-muted-fg)]">{fa ? 'هنوز دوره‌ای ندارید.' : 'No enrollments yet.'}</p>
          ) : (
            enrollments.map((e) => (
              <div key={e.id} className="rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-4">
                <div className="font-semibold">
                  {e.course?.i18n?.find((x: any) => x.locale === locale)?.title ?? e.course?.slug}
                </div>
                <div className="text-xs text-[var(--mj-muted-fg)]">{e.source}</div>
              </div>
            ))
          )}
        </div>
      </section>
      <section>
        <h2 className="font-display text-xl font-semibold">{fa ? 'پیشرفت اخیر' : 'Recent progress'}</h2>
        <div className="mt-3 space-y-2">
          {rows.map((r) => (
            <div key={r.id} className="flex items-center justify-between rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-3 text-sm">
              <span>
                {r.lesson?.i18n?.find((x: any) => x.locale === locale)?.title ?? r.lessonId}
              </span>
              <span className="font-mono text-xs">{r.progressPct}% {r.completed ? '✓' : ''}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
