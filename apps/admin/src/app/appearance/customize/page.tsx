'use client';

import { useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAdminLocale } from '@/i18n/locale-context';

export default function CustomizePage() {
  const { dict } = useAdminLocale();
  const d = dict.wp;
  const [siteName, setSiteName] = useState('MEGA JS');
  const [tagline, setTagline] = useState('');
  const [accent, setAccent] = useState('#ffd400');
  const [msg, setMsg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    void adminFetch('/admin/wp/settings')
      .then((s) => {
        setSiteName(s.general?.siteName ?? 'MEGA JS');
        setTagline(s.general?.tagline ?? '');
      })
      .catch((e) => setError(e.message));
  }, []);

  const save = async () => {
    try {
      await adminFetch('/admin/wp/settings/general', {
        method: 'PUT',
        body: JSON.stringify({ siteName, tagline }),
      });
      await adminFetch('/admin/cms/settings', {
        method: 'PUT',
        body: JSON.stringify({ customize: { accent } }),
      });
      setMsg(d.saved);
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold">{d.customize}</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.customizeDesc}</p>
      </div>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
      {msg ? <p className="text-sm text-emerald-700">{msg}</p> : null}
      <div className="space-y-3 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-4">
        <div className="space-y-2"><Label>{d.siteTitle}</Label><Input value={siteName} onChange={(e) => setSiteName(e.target.value)} /></div>
        <div className="space-y-2"><Label>{d.tagline}</Label><Input value={tagline} onChange={(e) => setTagline(e.target.value)} /></div>
        <div className="space-y-2"><Label>{d.accentColor}</Label><Input dir="ltr" value={accent} onChange={(e) => setAccent(e.target.value)} /></div>
        <Button className="cursor-pointer" onClick={() => void save()}>{dict.save}</Button>
      </div>
    </div>
  );
}
