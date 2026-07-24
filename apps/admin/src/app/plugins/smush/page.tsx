'use client';

import { useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAdminLocale } from '@/i18n/locale-context';

export default function SmushPluginPage() {
  const { dict } = useAdminLocale();
  const d = dict.plugins;
  const [stats, setStats] = useState<any>(null);
  const [msg, setMsg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const load = () => {
    void adminFetch('/admin/plugins/smush').then(setStats).catch((e) => setError(e.message));
  };
  useEffect(() => { load(); }, []);

  const save = async () => {
    const settings = await adminFetch('/admin/plugins/smush/settings', {
      method: 'PUT',
      body: JSON.stringify(stats.settings),
    });
    setStats({ ...stats, settings });
    setMsg(d.saved);
  };

  const bulk = async () => {
    const res = await adminFetch('/admin/plugins/smush/optimize-bulk', {
      method: 'POST',
      body: JSON.stringify({ limit: 50 }),
    });
    setMsg(`${d.optimized}: ${res.optimized}`);
    load();
  };

  if (!stats) return <p className="text-sm text-[var(--mj-muted-fg)]">{error || dict.loading}</p>;
  const s = stats.settings;

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold">{d.smushTitle}</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.smushSubtitle}</p>
      </div>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
      {msg ? <p className="text-sm text-emerald-700">{msg}</p> : null}

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: d.mediaTotal, value: stats.total },
          { label: d.mediaOptimized, value: stats.optimized },
          { label: d.mediaPending, value: stats.pending },
          { label: d.bytesSaved, value: `${Math.round(stats.saved / 1024)} KB` },
        ].map((c) => (
          <div key={c.label} className="rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-4">
            <div className="text-xs text-[var(--mj-muted-fg)]">{c.label}</div>
            <div className="mt-2 font-display text-xl font-bold" dir="ltr">{c.value}</div>
          </div>
        ))}
      </div>

      <div className="space-y-3 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-4">
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={Boolean(s.enabled)} onChange={(e) => setStats({ ...stats, settings: { ...s, enabled: e.target.checked } })} /> {d.enabled}</label>
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={Boolean(s.lazyLoad)} onChange={(e) => setStats({ ...stats, settings: { ...s, lazyLoad: e.target.checked } })} /> lazy-load</label>
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={Boolean(s.webpRewrite)} onChange={(e) => setStats({ ...stats, settings: { ...s, webpRewrite: e.target.checked } })} /> WebP rewrite</label>
        <div className="space-y-2"><Label>{d.quality}</Label><Input dir="ltr" value={String(s.compressionQuality)} onChange={(e) => setStats({ ...stats, settings: { ...s, compressionQuality: Number(e.target.value) } })} /></div>
        <div className="flex flex-wrap gap-2">
          <Button className="cursor-pointer" onClick={() => void save()}>{dict.save}</Button>
          <Button variant="outline" className="cursor-pointer" onClick={() => void bulk()}>{d.bulkOptimize}</Button>
        </div>
      </div>
    </div>
  );
}
