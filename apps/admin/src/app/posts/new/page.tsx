'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
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
  const [sticky, setSticky] = useState(false);
  const [commentStatus, setCommentStatus] = useState('open');
  const [termIds, setTermIds] = useState<string[]>([]);
  const [cats, setCats] = useState<TermRow[]>([]);
  const [tags, setTags] = useState<TermRow[]>([]);
  const [seo, setSeo] = useState<SeoFields>(emptySeoFields());
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    void Promise.all([
      adminFetch('/admin/cms/terms?taxonomy=post_category'),
      adminFetch('/admin/cms/terms?taxonomy=post_tag'),
    ])
      .then(([c, t]) => {
        setCats(c);
        setTags(t);
        const def = (c as TermRow[]).find((x) => x.isDefault);
        if (def) setTermIds([def.id]);
      })
      .catch((e) => setError(e.message));
  }, []);

  const autoSlug = useMemo(() => {
    if (slug) return slug;
    return title
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\u0600-\u06FF-]+/g, '')
      .slice(0, 80);
  }, [title, slug]);

  const effectiveSlug = slug || autoSlug;
  const previewPath = `/articles/${effectiveSlug || 'new-post'}`;

  const save = async () => {
    setBusy(true);
    setError(null);
    try {
      const row = await adminFetch('/admin/cms/articles', {
        method: 'POST',
        body: JSON.stringify({
          title,
          slug: effectiveSlug,
          summary,
          bodyMdx,
          status,
          coverUrl: coverUrl || undefined,
          bannerUrl: bannerUrl || undefined,
          sticky,
          commentStatus,
          focusKeyword: seo.focusKeyword,
          termIds,
          locale,
          seo: {
            metaTitle: seo.metaTitle || title,
            metaDescription: seo.metaDescription || summary,
            canonicalPath: seo.canonicalPath || previewPath,
            ogImageUrl: seo.ogImageUrl || coverUrl || bannerUrl || undefined,
            noIndex: seo.noIndex,
            noFollow: seo.noFollow,
            breadcrumbTitle: seo.breadcrumbTitle,
          },
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
            <Input value={title} onChange={(e) => setTitle(e.target.value)} className="text-lg" />
          </div>
          <div className="space-y-2">
            <Label>slug / permalink</Label>
            <Input
              dir="ltr"
              value={slug}
              placeholder={autoSlug}
              onChange={(e) => setSlug(e.target.value)}
            />
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
            previewUrl={publicSiteUrl(locale, previewPath)}
            analyzePayload={{
              title,
              slug: effectiveSlug,
              body: bodyMdx,
              canonicalPath: seo.canonicalPath || previewPath,
              ogImageUrl: seo.ogImageUrl || coverUrl || bannerUrl,
              locale,
            }}
          />

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
            selectedIds={termIds.filter((id) => cats.some((c) => c.id === id))}
            onChange={(ids) => {
              const tagIds = termIds.filter((id) => tags.some((t) => t.id === id));
              setTermIds([...ids, ...tagIds]);
            }}
            onTermsChange={setCats}
          />
          <TagChecklist
            taxonomy="post_tag"
            terms={tags}
            selectedIds={termIds.filter((id) => tags.some((t) => t.id === id))}
            onChange={(ids) => {
              const catIds = termIds.filter((id) => cats.some((c) => c.id === id));
              setTermIds([...catIds, ...ids]);
            }}
            onTermsChange={setTags}
          />
        </aside>
      </div>
    </div>
  );
}
