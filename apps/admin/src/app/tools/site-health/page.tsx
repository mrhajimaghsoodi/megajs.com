'use client';

import { useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { Badge } from '@/components/ui/badge';
import { useAdminLocale } from '@/i18n/locale-context';

export default function SiteHealthPage() {
  const { dict } = useAdminLocale();
  const d = dict.wp;
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    void adminFetch('/admin/wp/site-health').then(setData).catch((e) => setError(e.message));
  }, []);
  if (!data) return <p className="text-sm text-[var(--mj-muted-fg)]">{error || dict.loading}</p>;
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold">{d.siteHealth}</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.siteHealthDesc}</p>
      </div>
      <div className="rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-6 text-center">
        <div className="font-display text-5xl font-bold" dir="ltr">{data.score}</div>
        <div className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.healthScore}</div>
      </div>
      <div className="space-y-2">
        {data.checks.map((c: any) => (
          <div key={c.id} className="flex items-start justify-between gap-3 rounded-md border border-[var(--mj-border)] p-3 text-sm">
            <div>
              <div className="font-medium">{c.label}</div>
              <div className="text-[var(--mj-muted-fg)]">{c.detail}</div>
            </div>
            <Badge variant="secondary">{c.status}</Badge>
          </div>
        ))}
      </div>
      <pre className="overflow-x-auto rounded-md bg-[var(--mj-muted)] p-3 font-mono text-xs" dir="ltr">{JSON.stringify(data.info, null, 2)}</pre>
    </div>
  );
}
