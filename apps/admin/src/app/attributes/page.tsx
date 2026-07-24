'use client';

import { useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAdminLocale } from '@/i18n/locale-context';

export default function AttributesPage() {
  const { dict } = useAdminLocale();
  const d = dict.wp;
  const [rows, setRows] = useState<any[]>([]);
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [termName, setTermName] = useState('');
  const [selected, setSelected] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const load = () => {
    void adminFetch('/admin/wp/attributes').then((r) => {
      setRows(r);
      if (!selected && r[0]) setSelected(r[0].id);
    }).catch((e) => setError(e.message));
  };
  useEffect(() => { load(); }, []);

  const createAttr = async () => {
    await adminFetch('/admin/wp/attributes', { method: 'POST', body: JSON.stringify({ name, slug }) });
    setName(''); setSlug('');
    load();
  };
  const createTerm = async () => {
    if (!selected) return;
    await adminFetch(`/admin/wp/attributes/${selected}/terms`, { method: 'POST', body: JSON.stringify({ name: termName }) });
    setTermName('');
    load();
  };
  const removeAttr = async (id: string) => {
    if (!confirm(dict.cms.confirmDelete)) return;
    await adminFetch(`/admin/wp/attributes/${id}`, { method: 'DELETE' });
    load();
  };
  const removeTerm = async (id: string) => {
    await adminFetch(`/admin/wp/attribute-terms/${id}`, { method: 'DELETE' });
    load();
  };

  const current = rows.find((r) => r.id === selected);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold">{d.attributesTitle}</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.attributesSubtitle}</p>
      </div>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-3 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-4">
          <h2 className="font-display text-lg font-semibold">{d.addAttribute}</h2>
          <div className="space-y-2"><Label>{d.name}</Label><Input value={name} onChange={(e) => setName(e.target.value)} /></div>
          <div className="space-y-2"><Label>slug</Label><Input dir="ltr" value={slug} onChange={(e) => setSlug(e.target.value)} /></div>
          <Button className="cursor-pointer" onClick={() => void createAttr()}>{d.addAttribute}</Button>
          <ul className="space-y-2 pt-2">
            {rows.map((r) => (
              <li key={r.id} className={`flex items-center justify-between rounded-md border px-3 py-2 text-sm ${selected === r.id ? 'border-[var(--mj-accent)]' : 'border-[var(--mj-border)]'}`}>
                <button type="button" className="cursor-pointer text-start" onClick={() => setSelected(r.id)}>{r.name} <span className="font-mono text-xs text-[var(--mj-muted-fg)]">({r._count?.terms ?? 0})</span></button>
                <Button size="sm" variant="destructive" className="cursor-pointer" onClick={() => void removeAttr(r.id)}>{dict.cms.delete}</Button>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-4">
          <h2 className="font-display text-lg font-semibold">{d.terms}</h2>
          {!current ? <p className="text-sm text-[var(--mj-muted-fg)]">{dict.none}</p> : (
            <>
              <div className="flex gap-2">
                <Input value={termName} onChange={(e) => setTermName(e.target.value)} placeholder={d.termName} />
                <Button className="cursor-pointer" onClick={() => void createTerm()}>{d.addTerm}</Button>
              </div>
              <ul className="space-y-2">
                {(current.terms ?? []).map((t: any) => (
                  <li key={t.id} className="flex items-center justify-between border-t border-[var(--mj-border)] pt-2 text-sm">
                    <span>{t.name} <span className="font-mono text-xs text-[var(--mj-muted-fg)]" dir="ltr">{t.slug}</span></span>
                    <Button size="sm" variant="outline" className="cursor-pointer" onClick={() => void removeTerm(t.id)}>{dict.cms.delete}</Button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
