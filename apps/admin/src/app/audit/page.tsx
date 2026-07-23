'use client';

import { useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { useAdminLocale } from '@/i18n/locale-context';

export default function AuditAdminPage() {
  const { locale, dict } = useAdminLocale();
  const d = dict.audit;
  const [rows, setRows] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    void adminFetch('/admin/audit')
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
        <table className="w-full min-w-[700px] text-sm">
          <thead className="bg-[var(--mj-muted)]">
            <tr>
              <th className="p-3 text-start">{d.time}</th>
              <th className="p-3 text-start">{d.action}</th>
              <th className="p-3 text-start">{d.entity}</th>
              <th className="p-3 text-start">{d.meta}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t border-[var(--mj-border)]">
                <td className="p-3 text-xs" dir="ltr">
                  {new Date(r.createdAt).toLocaleString(locale === 'fa' ? 'fa-IR' : 'en-US')}
                </td>
                <td className="p-3 font-mono text-xs" dir="ltr">
                  {r.action}
                </td>
                <td className="p-3 font-mono text-xs" dir="ltr">
                  {r.entity}:{r.entityId?.slice(0, 8)}
                </td>
                <td className="p-3 font-mono text-xs" dir="ltr">
                  {r.metaJson}
                </td>
              </tr>
            ))}
            {rows.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-6 text-center text-[var(--mj-muted-fg)]">
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
