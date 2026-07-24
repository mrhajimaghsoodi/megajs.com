'use client';

import { useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { Button } from '@/components/ui/button';
import { useAdminLocale } from '@/i18n/locale-context';

export default function ExportPage() {
  const { dict } = useAdminLocale();
  const d = dict.wp;
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const run = async () => {
    setBusy(true);
    setError(null);
    try {
      const data = await adminFetch('/admin/wp/export');
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `megajs-export-${Date.now()}.json`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold">{d.export}</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.exportDesc}</p>
      </div>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
      <Button className="cursor-pointer" disabled={busy} onClick={() => void run()}>
        {busy ? dict.loading : d.downloadExport}
      </Button>
    </div>
  );
}
