'use client';

import { useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';

export default function SeoAdminPage() {
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
        <h1 className="font-display text-3xl font-bold">SEO Hub</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">
          Meta، canonical، schema و noindex برای موجودیت‌های عمومی — اولویت جذب #۱
        </p>
      </div>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
      {rows.length === 0 ? (
        <div className="rounded-[var(--mj-radius-md)] border border-dashed border-[var(--mj-border)] p-8 text-sm text-[var(--mj-muted-fg)]">
          هنوز SeoMeta ثبت نشده. هنگام انتشار Course/Article/Live از ادمین، رکورد SEO ساخته می‌شود.
          چک‌لیست اجباری: title · description · slug · canonical · OG · schema · index.
        </div>
      ) : (
        <div className="overflow-x-auto rounded-[var(--mj-radius-md)] border border-[var(--mj-border)]">
          <table className="w-full min-w-[800px] text-sm">
            <thead className="bg-[var(--mj-muted)]">
              <tr>
                <th className="p-3 text-start">Entity</th>
                <th className="p-3 text-start">Locale</th>
                <th className="p-3 text-start">Title</th>
                <th className="p-3 text-start">Canonical</th>
                <th className="p-3 text-start">noIndex</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id} className="border-t border-[var(--mj-border)]">
                  <td className="p-3 font-mono text-xs">
                    {r.entityType}:{r.entityId?.slice(0, 8)}
                  </td>
                  <td className="p-3">{r.locale}</td>
                  <td className="p-3">{r.metaTitle}</td>
                  <td className="p-3 font-mono text-xs">{r.canonicalPath ?? '—'}</td>
                  <td className="p-3">{r.noIndex ? 'yes' : 'no'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
