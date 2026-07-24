'use client';

import { Fragment, useEffect, useMemo, useRef, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { ContentEditorLazy as ContentEditor } from '@/components/content-editor-lazy';
import { MediaImageField } from '@/components/media-image-field';
import { SeoPanel, emptySeoFields, type SeoFields } from '@/components/seo-panel';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAdminLocale } from '@/i18n/locale-context';
import { publicSiteUrl, termArchivePath } from '@/lib/site';

const TITLES: Record<string, { fa: string; en: string }> = {
  post_category: { fa: 'دسته‌بندی مقالات', en: 'Post categories' },
  post_tag: { fa: 'برچسب مقالات', en: 'Post tags' },
  product_category: { fa: 'دسته‌بندی محصولات', en: 'Product categories' },
  product_tag: { fa: 'برچسب محصولات', en: 'Product tags' },
  tunnel_category: { fa: 'تونل‌های یادگیری (رودمپ)', en: 'Learning tunnels (roadmaps)' },
  tunnel_tag: { fa: 'برچسب تونل یادگیری', en: 'Learning tunnel tags' },
};

type TermRow = {
  id: string;
  slug: string;
  parentId?: string | null;
  taxonomy: string;
  sortOrder?: number;
  imageUrl?: string | null;
  coverUrl?: string | null;
  bannerUrl?: string | null;
  isDefault?: boolean;
  i18n?: Array<{ locale: string; name: string; description?: string; landingMdx?: string }>;
  focusKeyword?: string;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    canonicalPath?: string;
    ogImageUrl?: string;
    noIndex?: boolean;
    noFollow?: boolean;
    breadcrumbTitle?: string;
  };
  _count?: { articles?: number; courses?: number; tunnelEpisodes?: number };
};

/** WordPress-style layered taxonomy admin (categories & tags) */
export function TermsAdmin({ taxonomy }: { taxonomy: string }) {
  const { locale, dict } = useAdminLocale();
  const d = dict.cms;
  const hierarchical = taxonomy.endsWith('_category');
  const isTunnelCategory = taxonomy === 'tunnel_category';
  const [rows, setRows] = useState<TermRow[]>([]);
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [description, setDescription] = useState('');
  const [landingMdx, setLandingMdx] = useState('');
  const [parentId, setParentId] = useState('');
  const [sortOrder, setSortOrder] = useState('0');
  const [imageUrl, setImageUrl] = useState('');
  const [coverUrl, setCoverUrl] = useState('');
  const [bannerUrl, setBannerUrl] = useState('');
  const [isDefault, setIsDefault] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [quickId, setQuickId] = useState<string | null>(null);
  const [qName, setQName] = useState('');
  const [qSlug, setQSlug] = useState('');
  const [qParentId, setQParentId] = useState('');
  const [qDescription, setQDescription] = useState('');
  const [filter, setFilter] = useState('');
  const [seo, setSeo] = useState<SeoFields>(emptySeoFields());
  const [error, setError] = useState<string | null>(null);
  const [msg, setMsg] = useState<string | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const load = () => {
    void adminFetch(`/admin/cms/terms?taxonomy=${taxonomy}`)
      .then(setRows)
      .catch((e) => setError(e.message));
  };

  useEffect(() => {
    load();
  }, [taxonomy]);

  const termName = (t: TermRow) =>
    t.i18n?.find((x) => x.locale === locale)?.name ?? t.i18n?.[0]?.name ?? t.slug;
  const termDesc = (t: TermRow) =>
    t.i18n?.find((x) => x.locale === locale)?.description ?? t.i18n?.[0]?.description ?? '';
  const termLanding = (t: TermRow) =>
    t.i18n?.find((x) => x.locale === locale)?.landingMdx ?? t.i18n?.[0]?.landingMdx ?? '';
  const termCount = (t: TermRow) =>
    (t._count?.articles ?? 0) + (t._count?.courses ?? 0) + (t._count?.tunnelEpisodes ?? 0);

  const depthMap = useMemo(() => {
    const byId = new Map(rows.map((r) => [r.id, r]));
    const depth = (id: string, seen = new Set<string>()): number => {
      if (seen.has(id)) return 0;
      seen.add(id);
      const t = byId.get(id);
      if (!t?.parentId) return 0;
      return 1 + depth(t.parentId, seen);
    };
    const map = new Map<string, number>();
    for (const r of rows) map.set(r.id, depth(r.id));
    return map;
  }, [rows]);

  const sorted = useMemo(() => {
    if (!hierarchical) {
      return [...rows].sort((a, b) => termName(a).localeCompare(termName(b), locale));
    }
    const byParent = new Map<string | null, TermRow[]>();
    for (const r of rows) {
      const key = r.parentId ?? null;
      const list = byParent.get(key) ?? [];
      list.push(r);
      byParent.set(key, list);
    }
    for (const list of byParent.values()) {
      list.sort(
        (a, b) =>
          (a.sortOrder ?? 0) - (b.sortOrder ?? 0) ||
          termName(a).localeCompare(termName(b), locale),
      );
    }
    const out: TermRow[] = [];
    const walk = (parent: string | null) => {
      for (const k of byParent.get(parent) ?? []) {
        out.push(k);
        walk(k.id);
      }
    };
    walk(null);
    for (const r of rows) if (!out.includes(r)) out.push(r);
    return out;
  }, [rows, hierarchical, locale]);

  const visible = useMemo(() => {
    const q = filter.trim().toLowerCase();
    if (!q) return sorted;
    return sorted.filter((r) => {
      const n = termName(r).toLowerCase();
      return n.includes(q) || r.slug.toLowerCase().includes(q);
    });
  }, [sorted, filter, locale]);

  const resetForm = () => {
    setName('');
    setSlug('');
    setDescription('');
    setLandingMdx('');
    setParentId('');
    setSortOrder('0');
    setImageUrl('');
    setCoverUrl('');
    setBannerUrl('');
    setIsDefault(false);
    setSeo(emptySeoFields());
    setEditingId(null);
  };

  const startEdit = (row: TermRow) => {
    setQuickId(null);
    setEditingId(row.id);
    setName(termName(row));
    setSlug(row.slug);
    setDescription(termDesc(row));
    setLandingMdx(termLanding(row));
    setParentId(row.parentId ?? '');
    setSortOrder(String(row.sortOrder ?? 0));
    setImageUrl(row.imageUrl ?? '');
    setCoverUrl(row.coverUrl ?? '');
    setBannerUrl(row.bannerUrl ?? '');
    setIsDefault(Boolean(row.isDefault));
    setSeo({
      metaTitle: row.seo?.metaTitle ?? '',
      metaDescription: row.seo?.metaDescription ?? '',
      canonicalPath: row.seo?.canonicalPath ?? '',
      ogImageUrl: row.seo?.ogImageUrl ?? row.coverUrl ?? row.imageUrl ?? '',
      noIndex: Boolean(row.seo?.noIndex),
      noFollow: Boolean(row.seo?.noFollow),
      breadcrumbTitle: row.seo?.breadcrumbTitle ?? '',
      focusKeyword: row.focusKeyword ?? '',
    });
    setMsg(null);
    setTimeout(() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 40);
  };

  const openQuick = (row: TermRow) => {
    setEditingId(null);
    setQuickId(row.id);
    setQName(termName(row));
    setQSlug(row.slug);
    setQParentId(row.parentId ?? '');
    setQDescription(termDesc(row));
    setMsg(null);
  };

  const saveQuick = async (id: string) => {
    setMsg(null);
    setError(null);
    try {
      await adminFetch(`/admin/cms/terms/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          name: qName,
          slug: qSlug,
          description: qDescription,
          parentId: hierarchical ? qParentId || null : null,
          locale,
          taxonomy,
        }),
      });
      setQuickId(null);
      setMsg(d.saved);
      load();
    } catch (e: any) {
      setError(e.message);
    }
  };

  const save = async () => {
    setMsg(null);
    setError(null);
    const payload = {
      name,
      slug,
      description,
      landingMdx: isTunnelCategory ? landingMdx : undefined,
      parentId: hierarchical ? parentId || null : null,
      sortOrder: Number(sortOrder) || 0,
      imageUrl: hierarchical ? imageUrl || null : undefined,
      coverUrl: isTunnelCategory ? coverUrl || null : undefined,
      bannerUrl: isTunnelCategory ? bannerUrl || null : undefined,
      isDefault: hierarchical ? isDefault : undefined,
      focusKeyword: seo.focusKeyword,
      locale,
      taxonomy,
      seo: {
        metaTitle: seo.metaTitle || name,
        metaDescription: seo.metaDescription || description,
        canonicalPath: seo.canonicalPath || undefined,
        ogImageUrl: seo.ogImageUrl || coverUrl || imageUrl || undefined,
        noIndex: seo.noIndex,
        noFollow: seo.noFollow,
        breadcrumbTitle: seo.breadcrumbTitle,
      },
    };
    try {
      if (editingId) {
        await adminFetch(`/admin/cms/terms/${editingId}`, {
          method: 'PATCH',
          body: JSON.stringify(payload),
        });
      } else {
        await adminFetch('/admin/cms/terms', {
          method: 'POST',
          body: JSON.stringify(payload),
        });
      }
      resetForm();
      setMsg(d.saved);
      load();
    } catch (e: any) {
      setError(e.message);
    }
  };

  const remove = async (id: string) => {
    if (!confirm(d.confirmDeleteTerm)) return;
    await adminFetch(`/admin/cms/terms/${id}`, { method: 'DELETE' });
    if (editingId === id) resetForm();
    if (quickId === id) setQuickId(null);
    load();
  };

  const title = TITLES[taxonomy]?.[locale] ?? taxonomy;
  const colSpan = hierarchical ? 5 : 4;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-3xl font-bold">{title}</h1>
          <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.termsSubtitle}</p>
          {hierarchical ? (
            <p className="mt-1 text-xs text-[var(--mj-muted-fg)]">{d.layeredHint}</p>
          ) : null}
        </div>
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            resetForm();
            setQuickId(null);
            setTimeout(
              () => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
              40,
            );
          }}
        >
          {d.addNew}
        </Button>
      </div>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
      {msg ? <p className="text-sm text-emerald-700">{msg}</p> : null}

      <div className="max-w-sm space-y-2">
        <Label htmlFor="term-filter">{dict.search}</Label>
        <Input
          id="term-filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder={d.searchTerms}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <div className="overflow-x-auto rounded-[var(--mj-radius-md)] border border-[var(--mj-border)]">
          <table className="w-full min-w-[760px] text-sm">
            <thead className="bg-[var(--mj-muted)]">
              <tr>
                <th className="p-3 text-start">{d.name}</th>
                <th className="p-3 text-start">slug</th>
                <th className="p-3 text-start">{d.count}</th>
                {hierarchical ? <th className="p-3 text-start">{d.sortOrder}</th> : null}
                <th className="p-3 text-start">{d.actions}</th>
              </tr>
            </thead>
            <tbody>
              {visible.map((row) => {
                const depth = depthMap.get(row.id) ?? 0;
                const isQuick = quickId === row.id;
                return (
                  <Fragment key={row.id}>
                    <tr
                      className={`border-t border-[var(--mj-border)] ${
                        editingId === row.id ? 'bg-primary/5' : ''
                      }`}
                    >
                      <td
                        className="p-3 font-medium"
                        style={{ paddingInlineStart: 12 + depth * 18 }}
                      >
                        <span className="inline-flex items-center gap-2">
                          {row.imageUrl ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={row.imageUrl} alt="" className="size-7 object-cover" />
                          ) : null}
                          {termName(row)}
                          {row.isDefault ? (
                            <span className="rounded bg-primary/20 px-1.5 py-0.5 text-[10px] font-bold uppercase text-[var(--mj-ink)]">
                              {d.defaultCategory}
                            </span>
                          ) : null}
                        </span>
                      </td>
                      <td className="p-3 font-mono text-xs" dir="ltr">
                        {row.slug}
                      </td>
                      <td className="p-3 font-mono">
                        {termCount(row)}
                      </td>
                      {hierarchical ? (
                        <td className="p-3 font-mono text-xs">{row.sortOrder ?? 0}</td>
                      ) : null}
                      <td className="p-3">
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
                          <button
                            type="button"
                            className="font-medium text-[var(--mj-ink)] underline-offset-2 hover:underline"
                            onClick={() => startEdit(row)}
                          >
                            {d.edit}
                          </button>
                          <span className="text-[var(--mj-border)]">|</span>
                          <button
                            type="button"
                            className="text-[var(--mj-muted-fg)] underline-offset-2 hover:underline"
                            onClick={() => (isQuick ? setQuickId(null) : openQuick(row))}
                          >
                            {d.quickEdit}
                          </button>
                          <span className="text-[var(--mj-border)]">|</span>
                          <a
                            href={publicSiteUrl(locale, termArchivePath(taxonomy, row.slug))}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[var(--mj-muted-fg)] underline-offset-2 hover:underline"
                          >
                            {d.view}
                          </a>
                          <span className="text-[var(--mj-border)]">|</span>
                          <button
                            type="button"
                            className="text-[var(--mj-danger)] underline-offset-2 hover:underline"
                            onClick={() => void remove(row.id)}
                          >
                            {d.delete}
                          </button>
                        </div>
                      </td>
                    </tr>
                    {isQuick ? (
                      <tr className="border-t border-[var(--mj-border)] bg-[var(--mj-muted)]/40">
                        <td colSpan={colSpan} className="p-4">
                          <div className="mb-2 font-display text-sm font-bold">{d.quickEdit}</div>
                          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="space-y-1">
                              <Label>{d.name}</Label>
                              <Input value={qName} onChange={(e) => setQName(e.target.value)} />
                            </div>
                            <div className="space-y-1">
                              <Label>slug</Label>
                              <Input
                                dir="ltr"
                                value={qSlug}
                                onChange={(e) => setQSlug(e.target.value)}
                              />
                            </div>
                            {hierarchical ? (
                              <div className="space-y-1">
                                <Label>{d.parentCategory}</Label>
                                <select
                                  className="h-10 w-full rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] px-3 text-sm"
                                  value={qParentId}
                                  onChange={(e) => setQParentId(e.target.value)}
                                >
                                  <option value="">{d.noParent}</option>
                                  {rows
                                    .filter((r) => r.id !== row.id)
                                    .map((r) => (
                                      <option key={r.id} value={r.id}>
                                        {'—'.repeat(depthMap.get(r.id) ?? 0)} {termName(r)}
                                      </option>
                                    ))}
                                </select>
                              </div>
                            ) : null}
                            <div className="space-y-1 sm:col-span-2">
                              <Label>{d.description}</Label>
                              <Input
                                value={qDescription}
                                onChange={(e) => setQDescription(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="mt-3 flex flex-wrap gap-2">
                            <Button size="sm" onClick={() => void saveQuick(row.id)}>
                              {dict.save}
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => setQuickId(null)}>
                              {d.cancelEdit}
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ) : null}
                  </Fragment>
                );
              })}
              {!visible.length ? (
                <tr>
                  <td className="p-6 text-[var(--mj-muted-fg)]" colSpan={colSpan}>
                    {dict.none}
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>

        <div
          ref={formRef}
          className={`grid h-fit gap-3 rounded-[var(--mj-radius-md)] border p-4 ${
            editingId ? 'border-primary bg-primary/5' : 'border-[var(--mj-border)]'
          }`}
        >
          <h2 className="font-display text-lg font-bold">
            {editingId ? d.editTerm : d.addTerm}
          </h2>
          {editingId ? (
            <p className="text-xs text-[var(--mj-muted-fg)]">{d.editingTermHint}</p>
          ) : null}
          <div className="space-y-2">
            <Label>{d.name}</Label>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>slug</Label>
            <Input dir="ltr" value={slug} onChange={(e) => setSlug(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>{d.description}</Label>
            <Input value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
          {hierarchical ? (
            <>
              <div className="space-y-2">
                <Label>{d.parentCategory}</Label>
                <select
                  className="h-10 w-full rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] px-3 text-sm"
                  value={parentId}
                  onChange={(e) => setParentId(e.target.value)}
                >
                  <option value="">{d.noParent}</option>
                  {rows
                    .filter((r) => r.id !== editingId)
                    .map((r) => (
                      <option key={r.id} value={r.id}>
                        {'—'.repeat(depthMap.get(r.id) ?? 0)} {termName(r)}
                      </option>
                    ))}
                </select>
              </div>
              <div className="space-y-2">
                <Label>{d.sortOrder}</Label>
                <Input
                  dir="ltr"
                  type="number"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                />
              </div>
              <MediaImageField
                label={d.categoryImage}
                help={d.categoryImageHelp}
                value={imageUrl}
                onChange={setImageUrl}
              />
              {isTunnelCategory ? (
                <>
                  <MediaImageField
                    label={d.coverImage}
                    help={d.landingMdxHelp}
                    value={coverUrl}
                    onChange={setCoverUrl}
                  />
                  <MediaImageField
                    label={d.bannerImageTerm}
                    value={bannerUrl}
                    onChange={setBannerUrl}
                  />
                </>
              ) : null}
              <label className="flex cursor-pointer items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={isDefault}
                  onChange={(e) => setIsDefault(e.target.checked)}
                />
                {d.setAsDefault}
              </label>
            </>
          ) : null}
          {isTunnelCategory ? (
            <div className="space-y-2">
              <Label>{d.landingMdx}</Label>
              <p className="text-[11px] text-[var(--mj-muted-fg)]">{d.landingMdxHelp}</p>
              <ContentEditor
                value={landingMdx}
                onChange={setLandingMdx}
                dir={locale === 'fa' ? 'rtl' : 'ltr'}
                rows={12}
                enableCodeEditor
              />
            </div>
          ) : null}
          <SeoPanel
            value={seo}
            onChange={setSeo}
            entityType="term"
            previewTitle={name}
            previewUrl={publicSiteUrl(locale, termArchivePath(taxonomy, slug || 'term'))}
            analyzePayload={{
              name,
              slug,
              description,
              taxonomy,
              itemCount: editingId
                ? termCount(rows.find((r) => r.id === editingId) ?? ({ _count: {} } as TermRow))
                : 0,
              ogImageUrl: seo.ogImageUrl || coverUrl || imageUrl,
              locale,
            }}
          />
          <div className="flex flex-wrap gap-2">
            <Button onClick={() => void save()}>{editingId ? dict.save : d.addTerm}</Button>
            {editingId ? (
              <Button type="button" variant="outline" onClick={resetForm}>
                {d.cancelEdit}
              </Button>
            ) : null}
          </div>
          {editingId && slug ? (
            <a
              href={publicSiteUrl(locale, termArchivePath(taxonomy, slug))}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-[var(--mj-muted-fg)] underline-offset-2 hover:underline"
            >
              {d.viewArchive}
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
