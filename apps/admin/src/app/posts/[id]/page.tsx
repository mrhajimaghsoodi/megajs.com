'use client';

import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { CategoryChecklist, type TermRow } from '@/components/category-checklist';
import { ContentEditor } from '@/components/content-editor';
import { MediaImageField } from '@/components/media-image-field';
import { TagChecklist } from '@/components/tag-checklist';
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
  const [sticky, setSticky] = useState(false);
  const [commentStatus, setCommentStatus] = useState('open');
  const [termIds, setTermIds] = useState<string[]>([]);
  const [cats, setCats] = useState<TermRow[]>([]);
  const [tags, setTags] = useState<TermRow[]>([]);
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [focusKeyword, setFocusKeyword] = useState('');
  const [seoScore, setSeoScore] = useState<any>(null);
  const [msg, setMsg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const load = useCallback(async () => {
    try {
      const [row, c, t] = await Promise.all([
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
      setSticky(Boolean(row.sticky));
      setCommentStatus(row.commentStatus ?? 'open');
      setFocusKeyword(row.focusKeyword ?? '');
      setTermIds(row.taxonomies?.map((x: any) => x.termId) ?? []);
      setCats(c);
      setTags(t);
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
          sticky,
          commentStatus,
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
          <Button variant="destructive" onClick={() => void remove()}>
            {d.delete}
          </Button>
          <Button disabled={busy} onClick={() => void save()}>
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
            <Input value={title} onChange={(e) => setTitle(e.target.value)} className="text-lg" />
          </div>
          <div className="space-y-2">
            <Label>slug / permalink</Label>
            <Input dir="ltr" value={slug} onChange={(e) => setSlug(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>{d.excerpt}</Label>
            <Input value={summary} onChange={(e) => setSummary(e.target.value)} />
            <p className="text-xs text-[var(--mj-muted-fg)]">{d.excerptHelp}</p>
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
            <Button type="button" variant="outline" onClick={() => void analyze()}>
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
            <label className="flex cursor-pointer items-center gap-2 text-sm">
              <input type="checkbox" checked={sticky} onChange={(e) => setSticky(e.target.checked)} />
              {d.stickyPost}
            </label>
            <div className="space-y-1">
              <Label>{d.discussion}</Label>
              <select
                className="h-9 w-full rounded-md border border-[var(--mj-border)] bg-[var(--mj-card)] px-2 text-sm"
                value={commentStatus}
                onChange={(e) => setCommentStatus(e.target.value)}
              >
                <option value="open">{d.commentsOpen}</option>
                <option value="closed">{d.commentsClosed}</option>
              </select>
            </div>
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
          <CategoryChecklist
            taxonomy="post_category"
            terms={cats}
            selectedIds={termIds.filter((tid) => cats.some((c) => c.id === tid))}
            onChange={(ids) => {
              const tagIds = termIds.filter((tid) => tags.some((t) => t.id === tid));
              setTermIds([...ids, ...tagIds]);
            }}
            onTermsChange={setCats}
          />
          <TagChecklist
            taxonomy="post_tag"
            terms={tags}
            selectedIds={termIds.filter((tid) => tags.some((t) => t.id === tid))}
            onChange={(ids) => {
              const catIds = termIds.filter((tid) => cats.some((c) => c.id === tid));
              setTermIds([...catIds, ...ids]);
            }}
            onTermsChange={setTags}
          />
        </aside>
      </div>
    </div>
  );
}
