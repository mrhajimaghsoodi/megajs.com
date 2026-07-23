'use client';

import { useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';

export default function PracticeAdminPage() {
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
        <h1 className="font-display text-3xl font-bold">چالش‌ها و Practice</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">
          امتیاز → توکن · نرخ پیش‌فرض ۱۰۰ امتیاز = ۱ توکن
        </p>
      </div>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
      <div className="overflow-x-auto rounded-[var(--mj-radius-md)] border border-[var(--mj-border)]">
        <table className="w-full min-w-[720px] text-sm">
          <thead className="bg-[var(--mj-muted)]">
            <tr>
              <th className="p-3 text-start">Slug</th>
              <th className="p-3 text-start">عنوان</th>
              <th className="p-3 text-start">سختی</th>
              <th className="p-3 text-start">امتیاز</th>
              <th className="p-3 text-start">تست‌ها</th>
              <th className="p-3 text-start">ارسال‌ها</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((c) => (
              <tr key={c.id} className="border-t border-[var(--mj-border)]">
                <td className="p-3 font-mono text-xs">{c.slug}</td>
                <td className="p-3">{c.i18n?.find((x: any) => x.locale === 'fa')?.title}</td>
                <td className="p-3">{c.difficulty}</td>
                <td className="p-3 font-mono">{c.points}</td>
                <td className="p-3">{c._count?.tests ?? 0}</td>
                <td className="p-3">{c._count?.submissions ?? 0}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
