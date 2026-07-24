'use client';

import { useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAdminLocale } from '@/i18n/locale-context';

export default function SeoAdminPage() {
  const { dict } = useAdminLocale();
  const d = dict.seo;
  const cms = dict.cms;
  const [rows, setRows] = useState<any[]>([]);
  const [redirects, setRedirects] = useState<any[]>([]);
  const [fromPath, setFromPath] = useState('');
  const [toPath, setToPath] = useState('');
  const [error, setError] = useState<string | null>(null);

  const load = () => {
    void Promise.all([adminFetch('/admin/seo'), adminFetch('/admin/cms/redirects')])
      .then(([seo, red]) => {
        setRows(seo);
        setRedirects(red);
      })
      .catch((e) => setError(e.message));
  };

  useEffect(() => {
    load();
  }, []);

  const addRedirect = async () => {
    try {
      await adminFetch('/admin/cms/redirects', {
        method: 'POST',
        body: JSON.stringify({ fromPath, toPath, code: 301 }),
      });
      setFromPath('');
      setToPath('');
      load();
    } catch (e: any) {
      setError(e.message);
    }
  };

  const removeRedirect = async (id: string) => {
    await adminFetch(`/admin/cms/redirects/${id}`, { method: 'DELETE' });
    load();
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl font-bold">{d.title}</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.subtitle}</p>
      </div>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold">{cms.redirects}</h2>
        <div className="grid max-w-2xl gap-3 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-4 sm:grid-cols-[1fr_1fr_auto]">
          <div className="space-y-2">
            <Label>from</Label>
            <Input dir="ltr" value={fromPath} onChange={(e) => setFromPath(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>to</Label>
            <Input dir="ltr" value={toPath} onChange={(e) => setToPath(e.target.value)} />
          </div>
          <div className="flex items-end">
            <Button className="cursor-pointer" onClick={() => void addRedirect()}>
              {cms.addRedirect}
            </Button>
          </div>
        </div>
        <div className="overflow-x-auto rounded-[var(--mj-radius-md)] border border-[var(--mj-border)]">
          <table className="w-full min-w-[560px] text-sm">
            <thead className="bg-[var(--mj-muted)]">
              <tr>
                <th className="p-3 text-start">from</th>
                <th className="p-3 text-start">to</th>
                <th className="p-3 text-start">code</th>
                <th className="p-3 text-start" />
              </tr>
            </thead>
            <tbody>
              {redirects.map((r) => (
                <tr key={r.id} className="border-t border-[var(--mj-border)]">
                  <td className="p-3 font-mono text-xs" dir="ltr">
                    {r.fromPath}
                  </td>
                  <td className="p-3 font-mono text-xs" dir="ltr">
                    {r.toPath}
                  </td>
                  <td className="p-3 font-mono">{r.code}</td>
                  <td className="p-3">
                    <Button
                      size="sm"
                      variant="destructive"
                      className="cursor-pointer"
                      onClick={() => void removeRedirect(r.id)}
                    >
                      {cms.delete}
                    </Button>
                  </td>
                </tr>
              ))}
              {!redirects.length ? (
                <tr>
                  <td className="p-6 text-[var(--mj-muted-fg)]" colSpan={4}>
                    {dict.none}
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold">{d.metaTable}</h2>
        <div className="mt-3 overflow-x-auto rounded-[var(--mj-radius-md)] border border-[var(--mj-border)]">
          <table className="w-full min-w-[720px] text-sm">
            <thead className="bg-[var(--mj-muted)]">
              <tr>
                <th className="p-3 text-start">entity</th>
                <th className="p-3 text-start">locale</th>
                <th className="p-3 text-start">title</th>
                <th className="p-3 text-start">canonical</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id} className="border-t border-[var(--mj-border)]">
                  <td className="p-3 font-mono text-xs">
                    {row.entityType}:{row.entityId?.slice?.(0, 8)}
                  </td>
                  <td className="p-3 font-mono text-xs">{row.locale}</td>
                  <td className="p-3">{row.metaTitle}</td>
                  <td className="p-3 font-mono text-xs" dir="ltr">
                    {row.canonicalPath ?? '—'}
                  </td>
                </tr>
              ))}
              {!rows.length ? (
                <tr>
                  <td className="p-6 text-[var(--mj-muted-fg)]" colSpan={4}>
                    {dict.none}
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
