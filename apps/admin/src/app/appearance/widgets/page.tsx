'use client';

import { useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useAdminLocale } from '@/i18n/locale-context';

type Widget = { id: string; type: string; title: string; content: string };

const AREAS = [
  { location: 'sidebar', name: 'Sidebar' },
  { location: 'footer', name: 'Footer' },
  { location: 'shop_sidebar', name: 'Shop sidebar' },
];

export default function WidgetsPage() {
  const { dict } = useAdminLocale();
  const d = dict.wp;
  const [location, setLocation] = useState('sidebar');
  const [widgets, setWidgets] = useState<Widget[]>([]);
  const [msg, setMsg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    void adminFetch('/admin/wp/widgets')
      .then((rows: any[]) => {
        const area = rows.find((r) => r.location === location);
        if (!area) {
          setWidgets([]);
          return;
        }
        try {
          setWidgets(JSON.parse(area.widgetsJson || '[]'));
        } catch {
          setWidgets([]);
        }
      })
      .catch((e) => setError(e.message));
  }, [location]);

  const save = async () => {
    try {
      const area = AREAS.find((a) => a.location === location)!;
      await adminFetch('/admin/wp/widgets', {
        method: 'PUT',
        body: JSON.stringify({ location, name: area.name, widgets }),
      });
      setMsg(d.saved);
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold">{d.widgets}</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.widgetsDesc}</p>
      </div>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
      {msg ? <p className="text-sm text-emerald-700">{msg}</p> : null}
      <div className="space-y-2">
        <Label>{d.widgetArea}</Label>
        <select className="h-10 w-full rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] px-3 text-sm" value={location} onChange={(e) => setLocation(e.target.value)}>
          {AREAS.map((a) => <option key={a.location} value={a.location}>{a.name}</option>)}
        </select>
      </div>
      <div className="space-y-3">
        {widgets.map((w, idx) => (
          <div key={w.id} className="grid gap-2 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-3">
            <Input value={w.title} onChange={(e) => setWidgets((prev) => prev.map((x, i) => i === idx ? { ...x, title: e.target.value } : x))} placeholder={d.widgetTitle} />
            <Textarea rows={3} value={w.content} onChange={(e) => setWidgets((prev) => prev.map((x, i) => i === idx ? { ...x, content: e.target.value } : x))} />
            <Button variant="outline" size="sm" className="w-fit cursor-pointer" onClick={() => setWidgets((prev) => prev.filter((_, i) => i !== idx))}>{dict.cms.delete}</Button>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <Button variant="outline" className="cursor-pointer" onClick={() => setWidgets((prev) => [...prev, { id: `w_${Date.now()}`, type: 'text', title: 'Text', content: '' }])}>{d.addWidget}</Button>
        <Button className="cursor-pointer" onClick={() => void save()}>{dict.save}</Button>
      </div>
    </div>
  );
}
