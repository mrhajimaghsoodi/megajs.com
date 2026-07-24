'use client';

import { useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { Badge } from '@/components/ui/badge';
import { useAdminLocale } from '@/i18n/locale-context';

export default function UpdatesPage() {
  const { dict } = useAdminLocale();
  const d = dict.wp;
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    void adminFetch('/admin/wp/updates').then(setData).catch((e) => setError(e.message));
  }, []);
  if (!data) return <p className="text-sm text-[var(--mj-muted-fg)]">{error || dict.loading}</p>;
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold">{d.updatesTitle}</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.updatesSubtitle}</p>
      </div>
      <section className="rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-4">
        <h2 className="font-display text-lg font-semibold">{d.core}</h2>
        <div className="mt-2 flex items-center gap-2 text-sm">
          <span className="font-mono" dir="ltr">{data.core.current}</span>
          <Badge variant="secondary">{data.core.updateAvailable ? d.updateAvailable : d.upToDate}</Badge>
        </div>
      </section>
      <section className="rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-4">
        <h2 className="font-display text-lg font-semibold">{d.plugins}</h2>
        <ul className="mt-3 space-y-2">
          {data.plugins.map((p: any) => (
            <li key={p.slug} className="flex items-center justify-between gap-3 border-t border-[var(--mj-border)] pt-2 text-sm">
              <span>{p.name}</span>
              <span className="font-mono text-xs" dir="ltr">{p.version}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className="rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-4">
        <h2 className="font-display text-lg font-semibold">{d.themes}</h2>
        <ul className="mt-3 space-y-2">
          {data.themes.map((t: any) => (
            <li key={t.slug} className="flex items-center justify-between gap-3 text-sm">
              <span>{t.name}</span>
              <span className="font-mono text-xs" dir="ltr">{t.version}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
