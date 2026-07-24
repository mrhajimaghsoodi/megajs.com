'use client';

import { useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useAdminLocale } from '@/i18n/locale-context';
import { formatTehranDateTime } from '@/lib/tehran-time';

export default function WpRocketPluginPage() {
  const { dict } = useAdminLocale();
  const d = dict.plugins;
  const [settings, setSettings] = useState<any>(null);
  const [purgedAt, setPurgedAt] = useState<string | null>(null);
  const [msg, setMsg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [revalidate, setRevalidate] = useState<any>(null);

  const load = () => {
    void adminFetch('/admin/plugins/wprocket')
      .then((res) => {
        setSettings(res.settings);
        setPurgedAt(res.purgedAt);
      })
      .catch((e) => setError(e.message));
  };
  useEffect(() => {
    load();
  }, []);

  const save = async () => {
    try {
      const next = await adminFetch('/admin/plugins/wprocket/settings', {
        method: 'PUT',
        body: JSON.stringify(settings),
      });
      setSettings(next);
      setMsg(d.saved);
      setError(null);
    } catch (e: any) {
      setError(e.message);
    }
  };

  const purge = async () => {
    try {
      const res = await adminFetch('/admin/plugins/wprocket/purge', { method: 'POST' });
      setPurgedAt(res.purgedAt);
      setRevalidate(res.revalidate ?? null);
      setMsg(d.purged);
      setError(null);
    } catch (e: any) {
      setError(e.message);
    }
  };

  if (!settings) return <p className="text-sm text-[var(--mj-muted-fg)]">{error || dict.loading}</p>;

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold">{d.rocketTitle}</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.rocketSubtitle}</p>
      </div>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
      {msg ? <p className="text-sm text-emerald-700">{msg}</p> : null}

      <section className="space-y-3 rounded-2xl border border-[var(--mj-border)] bg-[var(--mj-card)] p-4">
        <p className="text-sm text-[var(--mj-muted-fg)]">{d.rocketSeoHint}</p>
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={Boolean(settings.enabled)}
            onChange={(e) => setSettings({ ...settings, enabled: e.target.checked })}
          />
          {d.enabled}
        </label>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="space-y-2">
            <Label>{d.htmlCache}</Label>
            <Input
              dir="ltr"
              value={String(settings.htmlCacheSeconds)}
              onChange={(e) =>
                setSettings({ ...settings, htmlCacheSeconds: Number(e.target.value) })
              }
            />
          </div>
          <div className="space-y-2">
            <Label>{d.browserCache}</Label>
            <Input
              dir="ltr"
              value={String(settings.browserCacheSeconds)}
              onChange={(e) =>
                setSettings({ ...settings, browserCacheSeconds: Number(e.target.value) })
              }
            />
          </div>
          <div className="space-y-2">
            <Label>{d.staleWhileRevalidate}</Label>
            <Input
              dir="ltr"
              value={String(settings.staleWhileRevalidateSeconds ?? 86400)}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  staleWhileRevalidateSeconds: Number(e.target.value),
                })
              }
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label>{d.preloadPaths}</Label>
          <Textarea
            rows={3}
            dir="ltr"
            value={(settings.preloadPaths || []).join('\n')}
            onChange={(e) =>
              setSettings({
                ...settings,
                preloadPaths: e.target.value
                  .split('\n')
                  .map((x) => x.trim())
                  .filter(Boolean),
              })
            }
          />
        </div>
        <div className="space-y-2">
          <Label>{d.excludePaths}</Label>
          <Textarea
            rows={3}
            dir="ltr"
            value={(settings.excludePaths || []).join('\n')}
            onChange={(e) =>
              setSettings({
                ...settings,
                excludePaths: e.target.value
                  .split('\n')
                  .map((x) => x.trim())
                  .filter(Boolean),
              })
            }
          />
        </div>
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={Boolean(settings.minifyCss)}
            onChange={(e) => setSettings({ ...settings, minifyCss: e.target.checked })}
          />
          minify CSS
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={Boolean(settings.lazyRender)}
            onChange={(e) => setSettings({ ...settings, lazyRender: e.target.checked })}
          />
          lazy render
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={Boolean(settings.exposeDebugHeaders)}
            onChange={(e) =>
              setSettings({ ...settings, exposeDebugHeaders: e.target.checked })
            }
          />
          {d.exposeDebugHeaders}
        </label>
        <div className="flex flex-wrap gap-2">
          <Button className="cursor-pointer" onClick={() => void save()}>
            {dict.save}
          </Button>
          <Button variant="outline" className="cursor-pointer" onClick={() => void purge()}>
            {d.purgeCache}
          </Button>
        </div>
        {purgedAt ? (
          <p className="text-xs text-[var(--mj-muted-fg)]">
            {d.lastPurge}: {formatTehranDateTime(purgedAt)}
          </p>
        ) : null}
        {revalidate ? (
          <pre className="overflow-auto rounded-xl bg-[var(--mj-muted)] p-3 text-xs" dir="ltr">
            {JSON.stringify(revalidate, null, 2)}
          </pre>
        ) : null}
      </section>
    </div>
  );
}
