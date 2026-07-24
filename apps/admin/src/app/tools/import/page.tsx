'use client';

import { useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useAdminLocale } from '@/i18n/locale-context';

export default function ImportPage() {
  const { dict } = useAdminLocale();
  const d = dict.wp;
  const [json, setJson] = useState('');
  const [msg, setMsg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const run = async () => {
    setError(null);
    try {
      const payload = JSON.parse(json);
      const res = await adminFetch('/admin/wp/import', {
        method: 'POST',
        body: JSON.stringify(payload),
      });
      setMsg(JSON.stringify(res.imported));
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold">{d.import}</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.importDesc}</p>
      </div>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
      {msg ? <p className="text-sm text-emerald-700" dir="ltr">{msg}</p> : null}
      <Textarea rows={16} dir="ltr" className="font-mono text-xs" value={json} onChange={(e) => setJson(e.target.value)} placeholder='{"format":"megajs-wp-export","data":{...}}' />
      <Button className="cursor-pointer" onClick={() => void run()}>{d.runImport}</Button>
    </div>
  );
}
