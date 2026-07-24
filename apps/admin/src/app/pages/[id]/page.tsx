'use client';

import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { ContentEditor } from '@/components/content-editor';
import { MediaImageField } from '@/components/media-image-field';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAdminLocale } from '@/i18n/locale-context';

export default function EditPageAdmin() {
  const { id } = useParams<{ id: string }>();
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
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [msg, setMsg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    const row = await adminFetch(`/admin/cms/pages/${id}`);
    const i18n = row.i18n?.find((x: any) => x.locale === locale) ?? row.i18n?.[0];
    setTitle(i18n?.title ?? '');
    setSummary(i18n?.summary ?? '');
    setBodyMdx(i18n?.bodyMdx ?? '');
    setSlug(row.slug);
    setStatus(row.status);
    setTemplate(row.template);
    setCoverUrl(row.coverUrl ?? '');
    setBannerUrl(row.bannerUrl ?? '');
    setMetaTitle(row.seo?.metaTitle ?? '');
    setMetaDescription(row.seo?.metaDescription ?? '');
  }, [id, locale]);

  useEffect(() => {
    void load().catch((e) => setError(e.message));
  }, [load]);

  const save = async () => {
    try {
      await adminFetch(`/admin/cms/pages/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          title,
          slug,
          summary,
          bodyMdx,
          status,
          template,
          coverUrl: coverUrl || null,
          bannerUrl: bannerUrl || null,
          locale,
          seo: {
            metaTitle,
            metaDescription,
            ogImageUrl: coverUrl || bannerUrl || undefined,
          },
        }),
      });
      setMsg(d.saved);
      await load();
    } catch (e: any) {
      setError(e.message);
    }
  };

  const remove = async () => {
    if (!confirm(d.confirmDelete)) return;
    await adminFetch(`/admin/cms/pages/${id}`, { method: 'DELETE' });
    router.push('/pages');
  };

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <Link href="/pages" className="text-sm underline-offset-4 hover:underline">
            ← {d.back}
          </Link>
          <h1 className="mt-2 font-display text-3xl font-bold">{d.editPage}</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="destructive" className="cursor-pointer" onClick={() => void remove()}>
            {d.delete}
          </Button>
          <Button className="cursor-pointer" onClick={() => void save()}>
            {dict.save}
          </Button>
        </div>
      </div>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
      {msg ? <p className="text-sm text-emerald-700">{msg}</p> : null}

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="grid gap-4">
          <div className="space-y-2">
            <Label>{d.titleCol}</Label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="space-y-2">
              <Label>slug</Label>
              <Input dir="ltr" value={slug} onChange={(e) => setSlug(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label>{d.template}</Label>
              <Input value={template} onChange={(e) => setTemplate(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label>{d.status}</Label>
              <select
                className="h-10 w-full rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] px-3 text-sm"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="draft">draft</option>
                <option value="published">published</option>
                <option value="archived">archived</option>
              </select>
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
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label>SEO title</Label>
              <Input value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label>SEO description</Label>
              <Input value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} />
            </div>
          </div>
        </div>
        <aside className="space-y-4">
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
