'use client';

import { useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAdminLocale } from '@/i18n/locale-context';

const TITLES: Record<string, { fa: string; en: string }> = {
  post_category: { fa: 'دسته‌بندی مقالات', en: 'Post categories' },
  post_tag: { fa: 'برچسب مقالات', en: 'Post tags' },
  product_category: { fa: 'دسته‌بندی محصولات', en: 'Product categories' },
  product_tag: { fa: 'برچسب محصولات', en: 'Product tags' },
};

export function TermsAdmin({ taxonomy }: { taxonomy: string }) {
  const { locale, dict } = useAdminLocale();
  const d = dict.cms;
  const [rows, setRows] = useState<any[]>([]);
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [msg, setMsg] = useState<string | null>(null);

  const load = () => {
    void adminFetch(`/admin/cms/terms?taxonomy=${taxonomy}`)
      .then(setRows)
      .catch((e) => setError(e.message));
  };

  useEffect(() => {
    load();
  }, [taxonomy]);

  const create = async () => {
    setMsg(null);
    try {
      await adminFetch('/admin/cms/terms', {
        method: 'POST',
        body: JSON.stringify({ taxonomy, name, slug, description, locale }),
      });
      setName('');
      setSlug('');
      setDescription('');
      setMsg(d.saved);
      load();
    } catch (e: any) {
      setError(e.message);
    }
  };

  const remove = async (id: string) => {
    if (!confirm(d.confirmDelete)) return;
    await adminFetch(`/admin/cms/terms/${id}`, { method: 'DELETE' });
    load();
  };

  const title = TITLES[taxonomy]?.[locale] ?? taxonomy;
  const termName = (t: any) =>
    t.i18n?.find((x: any) => x.locale === locale)?.name ?? t.i18n?.[0]?.name ?? t.slug;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold">{title}</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.termsSubtitle}</p>
      </div>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
      {msg ? <p className="text-sm text-emerald-700">{msg}</p> : null}

      <div className="grid max-w-xl gap-3 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-4">
        <div className="space-y-2">
          <Label>{d.name}</Label>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label>slug</Label>
          <Input dir="ltr" value={slug} onChange={(e) => setSlug(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label>{d.description}</Label>
          <Input value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <Button className="cursor-pointer" onClick={() => void create()}>
          {d.addTerm}
        </Button>
      </div>

      <div className="overflow-x-auto rounded-[var(--mj-radius-md)] border border-[var(--mj-border)]">
        <table className="w-full min-w-[560px] text-sm">
          <thead className="bg-[var(--mj-muted)]">
            <tr>
              <th className="p-3 text-start">{d.name}</th>
              <th className="p-3 text-start">slug</th>
              <th className="p-3 text-start">{d.count}</th>
              <th className="p-3 text-start" />
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-t border-[var(--mj-border)]">
                <td className="p-3 font-medium">{termName(row)}</td>
                <td className="p-3 font-mono text-xs" dir="ltr">
                  {row.slug}
                </td>
                <td className="p-3 font-mono">
                  {(row._count?.articles ?? 0) + (row._count?.courses ?? 0)}
                </td>
                <td className="p-3">
                  <Button
                    variant="destructive"
                    size="sm"
                    className="cursor-pointer"
                    onClick={() => void remove(row.id)}
                  >
                    {d.delete}
                  </Button>
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
    </div>
  );
}
