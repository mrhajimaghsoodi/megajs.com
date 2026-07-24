'use client';

import { useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { Badge } from '@/components/ui/badge';
import { useAdminLocale } from '@/i18n/locale-context';

export default function WooStatusPage() {
  const { dict } = useAdminLocale();
  const d = dict.wp;
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    void adminFetch('/admin/wp/system-status').then(setData).catch((e) => setError(e.message));
  }, []);
  if (!data) return <p className="text-sm text-[var(--mj-muted-fg)]">{error || dict.loading}</p>;
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold">{d.systemStatus}</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.systemStatusDesc}</p>
      </div>
      <section className="rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-4">
        <h2 className="font-display text-lg font-semibold">{d.environment}</h2>
        <pre className="mt-3 overflow-x-auto font-mono text-xs" dir="ltr">{JSON.stringify(data.environment, null, 2)}</pre>
      </section>
      <section className="rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-4">
        <h2 className="font-display text-lg font-semibold">{d.theme}</h2>
        <p className="mt-2 text-sm">{data.theme.name} · <span className="font-mono" dir="ltr">{data.theme.version}</span></p>
        <p className="text-xs text-[var(--mj-muted-fg)]">{data.theme.parent}</p>
      </section>
      <section className="rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-4">
        <h2 className="font-display text-lg font-semibold">{d.activePlugins}</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {data.activePlugins.map((p: string) => <Badge key={p} variant="secondary">{p}</Badge>)}
        </div>
      </section>
      <section className="rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-4">
        <h2 className="font-display text-lg font-semibold">{d.database}</h2>
        <table className="mt-3 w-full text-sm">
          <tbody>
            {Object.entries(data.counts).map(([k, v]) => (
              <tr key={k} className="border-t border-[var(--mj-border)]">
                <td className="py-2 font-mono">{k}</td>
                <td className="py-2 font-mono" dir="ltr">{String(v)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
