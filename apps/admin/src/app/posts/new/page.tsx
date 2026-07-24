'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { ContentEditor } from '@/components/content-editor';
import { MediaImageField } from '@/components/media-image-field';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAdminLocale } from '@/i18n/locale-context';

export default function NewPostPage() {
  const router = useRouter();
  const { locale, dict } = useAdminLocale();
  const d = dict.cms;
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [summary, setSummary] = useState('');
  const [bodyMdx, setBodyMdx] = useState('');
  const [status, setStatus] = useState('draft');
  const [coverUrl, setCoverUrl] = useState('');
  const [bannerUrl, setBannerUrl] = useState('');
  const [termIds, setTermIds] = useState<string[]>([]);
  const [terms, setTerms] = useState<any[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    void Promise.all([
      adminFetch('/admin/cms/terms?taxonomy=post_category'),
      adminFetch('/admin/cms/terms?taxonomy=post_tag'),
    ])
      .then(([cats, tags]) => setTerms([...cats, ...tags]))
      .catch((e) => setError(e.message));
  }, []);

  const categories = useMemo(
    () => terms.filter((t) => t.taxonomy === 'post_category'),
    [terms],
  );
  const tags = useMemo(() => terms.filter((t) => t.taxonomy === 'post_tag'), [terms]);

  const termName = (t: any) =>
    t.i18n?.find((x: any) => x.locale === locale)?.name ?? t.i18n?.[0]?.name ?? t.slug;

  const toggleTerm = (tid: string) =>
    setTermIds((prev) => (prev.includes(tid) ? prev.filter((x) => x !== tid) : [...prev, tid]));

  const save = async () => {
    setBusy(true);
    setError(null);
    try {
      const row = await adminFetch('/admin/cms/articles', {
        method: 'POST',
        body: JSON.stringify({
          title,
          slug,
          summary,
          bodyMdx,
          status,
          coverUrl: coverUrl || undefined,
          bannerUrl: bannerUrl || undefined,
          termIds,
          locale,
        }),
      });
      router.push(`/posts/${row.id}`);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <h1 className="font-display text-3xl font-bold">{d.newPost}</h1>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>{d.titleCol}</Label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>slug</Label>
            <Input dir="ltr" value={slug} onChange={(e) => setSlug(e.target.value)} />
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
          <div className="space-y-2 rounded-md border border-[var(--mj-border)] p-3">
            <Label>{d.status}</Label>
            <select
              className="h-10 w-full rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] px-3 text-sm"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="draft">draft</option>
              <option value="published">published</option>
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
          <div className="space-y-2 rounded-md border border-[var(--mj-border)] p-3">
            <Label>{d.postCategories}</Label>
            <div className="flex max-h-48 flex-col gap-1 overflow-y-auto">
              {categories.map((t) => (
                <label key={t.id} className="flex cursor-pointer items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={termIds.includes(t.id)}
                    onChange={() => toggleTerm(t.id)}
                  />
                  <span>{termName(t)}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="space-y-2 rounded-md border border-[var(--mj-border)] p-3">
            <Label>{d.postTags}</Label>
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => {
                const on = termIds.includes(t.id);
                return (
                  <button
                    key={t.id}
                    type="button"
                    className={`cursor-pointer rounded-md border px-2 py-1 text-xs ${
                      on
                        ? 'border-[var(--mj-accent)] bg-[var(--mj-accent)] text-[var(--mj-accent-fg)]'
                        : 'border-[var(--mj-border)]'
                    }`}
                    onClick={() => toggleTerm(t.id)}
                  >
                    {termName(t)}
                  </button>
                );
              })}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
