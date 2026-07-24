'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { ContentEditor } from '@/components/content-editor';
import { MediaImageField } from '@/components/media-image-field';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAdminLocale } from '@/i18n/locale-context';

export default function NewPageAdmin() {
  const router = useRouter();
  const { locale, dict } = useAdminLocale();
  const d = dict.cms;
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [summary, setSummary] = useState('');
  const [bodyMdx, setBodyMdx] = useState('');
  const [status, setStatus] = useState('draft');
  const [template, setTemplate] = useState('default');
  const [coverUrl, setCoverUrl] = useState('');
  const [bannerUrl, setBannerUrl] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const save = async () => {
    setBusy(true);
    try {
      const row = await adminFetch('/admin/cms/pages', {
        method: 'POST',
        body: JSON.stringify({
          title,
          slug,
          summary,
          bodyMdx,
          status,
          template,
          coverUrl: coverUrl || undefined,
          bannerUrl: bannerUrl || undefined,
          locale,
        }),
      });
      router.push(`/pages/${row.id}`);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <h1 className="font-display text-3xl font-bold">{d.newPage}</h1>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="grid gap-4">
          <div className="space-y-2">
            <Label>{d.titleCol}</Label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label>slug</Label>
              <Input dir="ltr" value={slug} onChange={(e) => setSlug(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label>{d.template}</Label>
              <Input value={template} onChange={(e) => setTemplate(e.target.value)} />
            </div>
          </div>
          <div className="space-y-2">
            <Label>{d.summary}</Label>
            <Input value={summary} onChange={(e) => setSummary(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>{d.body}</Label>
            <ContentEditor
              value={bodyMdx}
              onChange={setBodyMdx}
              dir={locale === 'fa' ? 'rtl' : 'ltr'}
            />
          </div>
          <Button className="cursor-pointer" disabled={busy} onClick={() => void save()}>
            {busy ? dict.loading : dict.save}
          </Button>
        </div>

        <aside className="space-y-4">
          <div className="space-y-3 rounded-md border border-[var(--mj-border)] p-3">
            <Label>{d.publishBox}</Label>
            <select
              className="h-10 w-full rounded-md border border-[var(--mj-border)] bg-[var(--mj-card)] px-3 text-sm"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="draft">draft</option>
              <option value="published">published</option>
              <option value="archived">archived</option>
            </select>
          </div>
          <MediaImageField
            label={d.featuredImage}
            help={d.featuredImageHelp}
            value={coverUrl}
            onChange={setCoverUrl}
          />
          <MediaImageField
            label={d.bannerImage}
            help={d.bannerImageHelp}
            value={bannerUrl}
            onChange={setBannerUrl}
          />
        </aside>
      </div>
    </div>
  );
}
