'use client';

import { useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';

export default function AuditAdminPage() {
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
        <h1 className="font-display text-3xl font-bold">Audit Log</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">تغییر نقش، عملیات حساس</p>
      </div>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
      <div className="overflow-x-auto rounded-[var(--mj-radius-md)] border border-[var(--mj-border)]">
        <table className="w-full min-w-[700px] text-sm">
          <thead className="bg-[var(--mj-muted)]">
            <tr>
              <th className="p-3 text-start">زمان</th>
              <th className="p-3 text-start">Action</th>
              <th className="p-3 text-start">Entity</th>
              <th className="p-3 text-start">Meta</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t border-[var(--mj-border)]">
                <td className="p-3 text-xs">{new Date(r.createdAt).toLocaleString('fa-IR')}</td>
                <td className="p-3 font-mono text-xs">{r.action}</td>
                <td className="p-3 font-mono text-xs">
                  {r.entity}:{r.entityId?.slice(0, 8)}
                </td>
                <td className="p-3 font-mono text-xs">{r.metaJson}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
