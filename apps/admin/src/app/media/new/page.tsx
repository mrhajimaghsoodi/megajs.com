'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAdminLocale } from '@/i18n/locale-context';

export default function AddMediaPage() {
  const router = useRouter();
  const { dict } = useAdminLocale();
  const d = dict.wp;
  const [url, setUrl] = useState('');
  const [filename, setFilename] = useState('');
  const [alt, setAlt] = useState('');
  const [title, setTitle] = useState('');
  const [mimeType, setMimeType] = useState('image/jpeg');
  const [error, setError] = useState<string | null>(null);

  const save = async () => {
    try {
      await adminFetch('/admin/cms/media', {
        method: 'POST',
        body: JSON.stringify({ url, filename, alt, title, mimeType }),
      });
      router.push('/media');
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <div className="mx-auto max-w-xl space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold">{d.addMedia}</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.addMediaDesc}</p>
      </div>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
      <div className="grid gap-3">
        <div className="space-y-2"><Label>URL</Label><Input dir="ltr" value={url} onChange={(e) => setUrl(e.target.value)} /></div>
        <div className="space-y-2"><Label>{dict.cms.filename}</Label><Input dir="ltr" value={filename} onChange={(e) => setFilename(e.target.value)} /></div>
        <div className="space-y-2"><Label>MIME</Label><Input dir="ltr" value={mimeType} onChange={(e) => setMimeType(e.target.value)} /></div>
        <div className="space-y-2"><Label>Alt</Label><Input value={alt} onChange={(e) => setAlt(e.target.value)} /></div>
        <div className="space-y-2"><Label>{dict.cms.titleCol}</Label><Input value={title} onChange={(e) => setTitle(e.target.value)} /></div>
        <Button className="cursor-pointer" onClick={() => void save()}>{dict.save}</Button>
      </div>
    </div>
  );
}
