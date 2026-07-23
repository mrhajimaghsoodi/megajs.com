'use client';

import { useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { useAdminLocale } from '@/i18n/locale-context';

export default function SeoAdminPage() {
  const { dict } = useAdminLocale();
  const d = dict.seo;
  const [rows, setRows] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    void adminFetch('/admin/seo')
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
      {rows.length === 0 ? (
        <div className="rounded-[var(--mj-radius-md)] border border-dashed border-[var(--mj-border)] p-8 text-sm text-[var(--mj-muted-fg)]">
          {d.empty}
        </div>
      ) : (
        <div className="overflow-x-auto rounded-[var(--mj-radius-md)] border border-[var(--mj-border)]">
          <table className="w-full min-w-[800px] text-sm">
            <thead className="bg-[var(--mj-muted)]">
              <tr>
                <th className="p-3 text-start">{d.entity}</th>
                <th className="p-3 text-start">{d.locale}</th>
                <th className="p-3 text-start">{d.titleCol}</th>
                <th className="p-3 text-start">{d.canonical}</th>
                <th className="p-3 text-start">{d.noIndex}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id} className="border-t border-[var(--mj-border)]">
                  <td className="p-3 font-mono text-xs" dir="ltr">
                    {r.entityType}:{r.entityId?.slice(0, 8)}
                  </td>
                  <td className="p-3 font-mono" dir="ltr">
                    {r.locale}
                  </td>
                  <td className="p-3">{r.metaTitle}</td>
                  <td className="p-3 font-mono text-xs" dir="ltr">
                    {r.canonicalPath ?? dict.none}
                  </td>
                  <td className="p-3 font-mono" dir="ltr">
                    {r.noIndex ? d.yes : d.no}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
