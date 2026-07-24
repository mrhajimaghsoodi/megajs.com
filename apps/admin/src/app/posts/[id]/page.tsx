'use client';

import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { CategoryChecklist, type TermRow } from '@/components/category-checklist';
import { ContentEditor } from '@/components/content-editor';
import { MediaImageField } from '@/components/media-image-field';
import { SeoPanel, emptySeoFields, type SeoFields } from '@/components/seo-panel';
import { TagChecklist } from '@/components/tag-checklist';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAdminLocale } from '@/i18n/locale-context';
import { publicSiteUrl } from '@/lib/site';

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
  const [permalink, setPermalink] = useState('');
  const [seo, setSeo] = useState<SeoFields>(emptySeoFields());
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
      setTermIds(row.taxonomies?.map((x: any) => x.termId) ?? []);
      setCats(c);
      setTags(t);
      setPermalink(row.permalink ?? `/articles/${row.slug}`);
      setSeo({
        metaTitle: row.seo?.metaTitle ?? '',
        metaDescription: row.seo?.metaDescription ?? '',
        canonicalPath: row.seo?.canonicalPath ?? row.permalink ?? '',
        ogImageUrl: row.seo?.ogImageUrl ?? row.coverUrl ?? '',
        noIndex: Boolean(row.seo?.noIndex),
        noFollow: Boolean(row.seo?.noFollow),
        breadcrumbTitle: row.seo?.breadcrumbTitle ?? '',
        focusKeyword: row.focusKeyword ?? '',
      });
      setError(null);
    } catch (e: any) {
      setError(e.message);
    }
  }, [id, locale]);

  useEffect(() => {
    void load();
  }, [load]);

  const save = async () => {
    setMsg(null);
    setBusy(true);
    try {
      const res = await adminFetch(`/admin/cms/articles/${id}`, {
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
          focusKeyword: seo.focusKeyword,
          termIds,
          locale,
          seo: {
            metaTitle: seo.metaTitle || title,
            metaDescription: seo.metaDescription || summary,
            canonicalPath: seo.canonicalPath || undefined,
            ogImageUrl: seo.ogImageUrl || coverUrl || bannerUrl || undefined,
            noIndex: seo.noIndex,
            noFollow: seo.noFollow,
            breadcrumbTitle: seo.breadcrumbTitle,
          },
        }),
      });
      setPermalink(res.permalink ?? permalink);
      setMsg(d.saved);
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

  const viewPath = permalink || `/articles/${slug}`;

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <Link href="/posts" className="text-sm underline-offset-4 hover:underline">
            ← {d.back}
          </Link>
          <h1 className="mt-2 font-display text-3xl font-bold">{d.editPost}</h1>
          {permalink ? (
            <p className="mt-1 font-mono text-[11px] text-[var(--mj-muted-fg)]" dir="ltr">
              {permalink}
            </p>
          ) : null}
        </div>
        <div className="flex flex-wrap gap-2">
          {status === 'published' && slug ? (
            <Button asChild variant="outline">
              <a href={publicSiteUrl(locale, viewPath)} target="_blank" rel="noreferrer">
                {d.view}
              </a>
            </Button>
          ) : null}
          <Button asChild variant="outline">
            <Link href="/categories">{d.postCategories}</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/tags">{d.postTags}</Link>
          </Button>
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

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
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

          <SeoPanel
            value={seo}
            onChange={setSeo}
            entityType="article"
            previewTitle={title}
            previewUrl={publicSiteUrl(locale, viewPath)}
            analyzePayload={{
              title,
              slug,
              body: bodyMdx,
              canonicalPath: seo.canonicalPath || permalink || `/articles/${slug}`,
              ogImageUrl: seo.ogImageUrl || coverUrl || bannerUrl,
              locale,
            }}
          />
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
