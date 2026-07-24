'use client';

import { useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAdminLocale } from '@/i18n/locale-context';

type Item = { url: string; labelFa: string; labelEn: string; type: string };

export default function MenusAdminPage() {
  const { dict } = useAdminLocale();
  const d = dict.cms;
  const [location, setLocation] = useState('header');
  const [name, setName] = useState('Header');
  const [items, setItems] = useState<Item[]>([{ url: '/', labelFa: 'خانه', labelEn: 'Home', type: 'custom' }]);
  const [msg, setMsg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    void adminFetch('/admin/cms/menus')
      .then((menus: any[]) => {
        const menu = menus.find((m) => m.location === location) ?? menus[0];
        if (!menu) return;
        setLocation(menu.location);
        setName(menu.name);
        setItems(
          (menu.items ?? []).map((it: any) => {
            let labels: any = {};
            try { labels = JSON.parse(it.labelJson || '{}'); } catch {}
            return {
              url: it.url,
              labelFa: labels.fa ?? '',
              labelEn: labels.en ?? '',
              type: it.type ?? 'custom',
            };
          }),
        );
      })
      .catch((e) => setError(e.message));
  }, [location]);

  const save = async () => {
    try {
      await adminFetch('/admin/cms/menus', {
        method: 'PUT',
        body: JSON.stringify({
          location,
          name,
          items: items.map((it, idx) => ({
            type: it.type,
            url: it.url,
            labelJson: JSON.stringify({ fa: it.labelFa, en: it.labelEn }),
            sortOrder: idx,
          })),
        }),
      });
      setMsg(d.saved);
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold">{d.menusTitle}</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.menusSubtitle}</p>
      </div>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
      {msg ? <p className="text-sm text-emerald-700">{msg}</p> : null}
      <div className="grid max-w-3xl gap-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-2">
            <Label>{d.location}</Label>
            <select className="h-10 w-full rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] px-3 text-sm" value={location} onChange={(e) => setLocation(e.target.value)}>
              <option value="header">header</option>
              <option value="footer">footer</option>
              <option value="mobile">mobile</option>
            </select>
          </div>
          <div className="space-y-2"><Label>{d.name}</Label><Input value={name} onChange={(e) => setName(e.target.value)} /></div>
        </div>
        <div className="space-y-3">
          {items.map((it, idx) => (
            <div key={idx} className="grid gap-2 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-3 sm:grid-cols-4">
              <Input placeholder="URL" dir="ltr" value={it.url} onChange={(e) => setItems((prev) => prev.map((x, i) => i === idx ? { ...x, url: e.target.value } : x))} />
              <Input placeholder="FA label" value={it.labelFa} onChange={(e) => setItems((prev) => prev.map((x, i) => i === idx ? { ...x, labelFa: e.target.value } : x))} />
              <Input placeholder="EN label" value={it.labelEn} onChange={(e) => setItems((prev) => prev.map((x, i) => i === idx ? { ...x, labelEn: e.target.value } : x))} />
              <Button variant="outline" className="cursor-pointer" onClick={() => setItems((prev) => prev.filter((_, i) => i !== idx))}>{d.delete}</Button>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="cursor-pointer" onClick={() => setItems((prev) => [...prev, { url: '/', labelFa: '', labelEn: '', type: 'custom' }])}>{d.addItem}</Button>
          <Button className="cursor-pointer" onClick={() => void save()}>{dict.save}</Button>
        </div>
      </div>
    </div>
  );
}
