'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { adminFetch, adminUpload } from '@/components/admin-shell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAdminLocale } from '@/i18n/locale-context';

export default function AddMediaPage() {
  const router = useRouter();
  const { dict } = useAdminLocale();
  const d = dict.cms;
  const [url, setUrl] = useState('');
  const [alt, setAlt] = useState('');
  const [title, setTitle] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const upload = async (file: File | null) => {
    if (!file) return;
    setBusy(true);
    setError(null);
    try {
      await adminUpload('/admin/cms/media/upload', file, {
        alt: alt || file.name,
        title: title || file.name,
      });
      router.push('/media');
    } catch (e: any) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  };

  const saveUrl = async () => {
    try {
      await adminFetch('/admin/cms/media', {
        method: 'POST',
        body: JSON.stringify({
          url,
          filename: url.split('/').pop(),
          alt,
          title,
          mimeType: 'image/jpeg',
        }),
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
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.mediaSubtitle}</p>
      </div>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
      <div className="grid gap-3">
        <div className="space-y-2">
          <Label>{d.uploadFile}</Label>
          <Input
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            disabled={busy}
            onChange={(e) => void upload(e.target.files?.[0] ?? null)}
          />
          <p className="text-xs text-[var(--mj-muted-fg)]">{d.uploadHint}</p>
        </div>
        <div className="space-y-2">
          <Label>Alt</Label>
          <Input value={alt} onChange={(e) => setAlt(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label>{d.titleCol}</Label>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="border-t border-[var(--mj-border)] pt-3">
          <p className="mb-2 text-xs text-[var(--mj-muted-fg)]">{d.orRegisterUrl}</p>
          <div className="space-y-2">
            <Label>URL</Label>
            <Input dir="ltr" value={url} onChange={(e) => setUrl(e.target.value)} />
          </div>
          <Button className="mt-3 cursor-pointer" onClick={() => void saveUrl()}>
            {dict.save}
          </Button>
        </div>
      </div>
    </div>
  );
}
