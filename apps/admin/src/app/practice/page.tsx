'use client';

import { useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { useAdminLocale } from '@/i18n/locale-context';

export default function PracticeAdminPage() {
  const { locale, dict } = useAdminLocale();
  const d = dict.practice;
  const [rows, setRows] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    void adminFetch('/admin/challenges')
      .then(setRows)
      .catch((e) => setError(e.message));
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold">{d.title}</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.subtitle}</p>
      </div>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
      <div className="overflow-x-auto rounded-[var(--mj-radius-md)] border border-[var(--mj-border)]">
        <table className="w-full min-w-[720px] text-sm">
          <thead className="bg-[var(--mj-muted)]">
            <tr>
              <th className="p-3 text-start">{d.slug}</th>
              <th className="p-3 text-start">{d.titleCol}</th>
              <th className="p-3 text-start">{d.difficulty}</th>
              <th className="p-3 text-start">{d.points}</th>
              <th className="p-3 text-start">{d.tests}</th>
              <th className="p-3 text-start">{d.submissions}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((c) => (
              <tr key={c.id} className="border-t border-[var(--mj-border)]">
                <td className="p-3 font-mono text-xs" dir="ltr">
                  {c.slug}
                </td>
                <td className="p-3">
                  {c.i18n?.find((x: any) => x.locale === locale)?.title ??
                    c.i18n?.[0]?.title ??
                    dict.none}
                </td>
                <td className="p-3 font-mono" dir="ltr">
                  {c.difficulty}
                </td>
                <td className="p-3 font-mono">{c.points}</td>
                <td className="p-3">{c._count?.tests ?? 0}</td>
                <td className="p-3">{c._count?.submissions ?? 0}</td>
              </tr>
            ))}
            {rows.length === 0 ? (
              <tr>
                <td colSpan={6} className="p-6 text-center text-[var(--mj-muted-fg)]">
                  {dict.none}
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}
