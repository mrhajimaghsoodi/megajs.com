'use client';

import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { ContentEditor } from '@/components/content-editor';
import { MediaImageField } from '@/components/media-image-field';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAdminLocale } from '@/i18n/locale-context';

export default function EditPostPage() {
  const { id } = useParams<{ id: string }>();
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
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [focusKeyword, setFocusKeyword] = useState('');
  const [seoScore, setSeoScore] = useState<any>(null);
  const [msg, setMsg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const load = useCallback(async () => {
    try {
      const [row, cats, tags] = await Promise.all([
        adminFetch(`/admin/cms/articles/${id}`),
        adminFetch('/admin/cms/terms?taxonomy=post_category'),
        adminFetch('/admin/cms/terms?taxonomy=post_tag'),
      ]);
      const i18n = row.i18n?.find((x: any) => x.locale === locale) ?? row.i18n?.[0];
      setTitle(i18n?.title ?? '');
      setSummary(i18n?.summary ?? '');
      setBodyMdx(i18n?.bodyMdx ?? '');
      setSlug(row.slug);
      setStatus(row.status);
      setCoverUrl(row.coverUrl ?? '');
      setBannerUrl(row.bannerUrl ?? '');
      setFocusKeyword(row.focusKeyword ?? '');
      setTermIds(row.taxonomies?.map((t: any) => t.termId) ?? []);
      setTerms([...cats, ...tags]);
      setMetaTitle(row.seo?.metaTitle ?? '');
      setMetaDescription(row.seo?.metaDescription ?? '');
      setError(null);
    } catch (e: any) {
      setError(e.message);
    }
  }, [id, locale]);

  useEffect(() => {
    void load();
  }, [load]);

  const categories = useMemo(
    () => terms.filter((t) => t.taxonomy === 'post_category'),
    [terms],
  );
  const tags = useMemo(() => terms.filter((t) => t.taxonomy === 'post_tag'), [terms]);

  const termName = (t: any) =>
    t.i18n?.find((x: any) => x.locale === locale)?.name ?? t.i18n?.[0]?.name ?? t.slug;

  const analyze = async () => {
    const res = await adminFetch('/admin/plugins/rankmath/analyze', {
      method: 'POST',
      body: JSON.stringify({
        title,
        metaTitle: metaTitle || title,
        metaDescription,
        slug,
        focusKeyword,
        body: bodyMdx,
        canonicalPath: `/articles/${slug}`,
        ogImageUrl: coverUrl || bannerUrl,
      }),
    });
    setSeoScore(res);
  };

  const save = async () => {
    setMsg(null);
    setBusy(true);
    try {
      await adminFetch(`/admin/cms/articles/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          title,
          slug,
          summary,
          bodyMdx,
          status,
          coverUrl: coverUrl || null,
          bannerUrl: bannerUrl || null,
          focusKeyword,
          termIds,
          locale,
          seo: {
            metaTitle,
            metaDescription,
            ogImageUrl: coverUrl || bannerUrl || undefined,
          },
        }),
      });
      setMsg(d.saved);
      await analyze();
      await load();
    } catch (e: any) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  };

  const remove = async () => {
    if (!confirm(d.confirmDelete)) return;
    await adminFetch(`/admin/cms/articles/${id}`, { method: 'DELETE' });
    router.push('/posts');
  };

  const toggleTerm = (tid: string) =>
    setTermIds((prev) => (prev.includes(tid) ? prev.filter((x) => x !== tid) : [...prev, tid]));

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <Link href="/posts" className="text-sm underline-offset-4 hover:underline">
            ← {d.back}
          </Link>
          <h1 className="mt-2 font-display text-3xl font-bold">{d.editPost}</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="destructive" className="cursor-pointer" onClick={() => void remove()}>
            {d.delete}
          </Button>
          <Button className="cursor-pointer" disabled={busy} onClick={() => void save()}>
            {busy ? dict.loading : dict.save}
          </Button>
        </div>
      </div>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
      {msg ? <p className="text-sm text-emerald-700">{msg}</p> : null}

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
          <div className="space-y-2">
            <Label>{dict.plugins.focusKeyword}</Label>
            <Input value={focusKeyword} onChange={(e) => setFocusKeyword(e.target.value)} />
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button
              type="button"
              variant="outline"
              className="cursor-pointer"
              onClick={() => void analyze()}
            >
              {dict.plugins.runAnalyze}
            </Button>
            {seoScore ? (
              <span className="font-display text-lg font-bold">
                Rank Math: {seoScore.score}/100 ({seoScore.label})
              </span>
            ) : null}
          </div>
          {seoScore ? (
            <ul className="space-y-1 text-sm">
              {seoScore.issues.map((i: any) => (
                <li
                  key={i.id}
                  className={
                    i.severity === 'bad'
                      ? 'text-[var(--mj-danger)]'
                      : i.severity === 'good'
                        ? 'text-emerald-700'
                        : ''
                  }
                >
                  [{i.severity}] {i.message}
                </li>
              ))}
            </ul>
          ) : null}
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

          <div className="space-y-2 rounded-md border border-[var(--mj-border)] p-3">
            <Label>{d.postCategories}</Label>
            <div className="flex max-h-48 flex-col gap-1 overflow-y-auto">
              {categories.map((t) => {
                const on = termIds.includes(t.id);
                return (
                  <label key={t.id} className="flex cursor-pointer items-center gap-2 text-sm">
                    <input type="checkbox" checked={on} onChange={() => toggleTerm(t.id)} />
                    <span>{termName(t)}</span>
                  </label>
                );
              })}
              {!categories.length ? (
                <p className="text-xs text-[var(--mj-muted-fg)]">{dict.none}</p>
              ) : null}
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
              {!tags.length ? (
                <p className="text-xs text-[var(--mj-muted-fg)]">{dict.none}</p>
              ) : null}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
