'use client';

import { useEffect, useMemo, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { MediaImageField } from '@/components/media-image-field';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAdminLocale } from '@/i18n/locale-context';

const TITLES: Record<string, { fa: string; en: string }> = {
  post_category: { fa: 'دسته‌بندی مقالات', en: 'Post categories' },
  post_tag: { fa: 'برچسب مقالات', en: 'Post tags' },
  product_category: { fa: 'دسته‌بندی محصولات', en: 'Product categories' },
  product_tag: { fa: 'برچسب محصولات', en: 'Product tags' },
};

type TermRow = {
  id: string;
  slug: string;
  parentId?: string | null;
  taxonomy: string;
  sortOrder?: number;
  imageUrl?: string | null;
  isDefault?: boolean;
  i18n?: Array<{ locale: string; name: string; description?: string }>;
  _count?: { articles?: number; courses?: number };
};

/** WordPress-style layered taxonomy admin (categories & tags) */
export function TermsAdmin({ taxonomy }: { taxonomy: string }) {
  const { locale, dict } = useAdminLocale();
  const d = dict.cms;
  const hierarchical = taxonomy.endsWith('_category');
  const [rows, setRows] = useState<TermRow[]>([]);
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [description, setDescription] = useState('');
  const [parentId, setParentId] = useState('');
  const [sortOrder, setSortOrder] = useState('0');
  const [imageUrl, setImageUrl] = useState('');
  const [isDefault, setIsDefault] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [msg, setMsg] = useState<string | null>(null);

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
    const byParent = new Map<string | null, TermRow[]>();
    for (const r of rows) {
      const key = r.parentId ?? null;
      const list = byParent.get(key) ?? [];
      list.push(r);
      byParent.set(key, list);
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
  }, [rows]);

  const resetForm = () => {
    setName('');
    setSlug('');
    setDescription('');
    setParentId('');
    setSortOrder('0');
    setImageUrl('');
    setIsDefault(false);
    setEditingId(null);
  };

  const startEdit = (row: TermRow) => {
    setEditingId(row.id);
    setName(termName(row));
    setSlug(row.slug);
    setDescription(termDesc(row));
    setParentId(row.parentId ?? '');
    setSortOrder(String(row.sortOrder ?? 0));
    setImageUrl(row.imageUrl ?? '');
    setIsDefault(Boolean(row.isDefault));
    setMsg(null);
  };

  const save = async () => {
    setMsg(null);
    setError(null);
    const payload = {
      name,
      slug,
      description,
      parentId: hierarchical ? parentId || null : null,
      sortOrder: Number(sortOrder) || 0,
      imageUrl: hierarchical ? imageUrl || null : undefined,
      isDefault: hierarchical ? isDefault : undefined,
      locale,
      taxonomy,
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
    load();
  };

  const title = TITLES[taxonomy]?.[locale] ?? taxonomy;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold">{title}</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.termsSubtitle}</p>
        {hierarchical ? (
          <p className="mt-1 text-xs text-[var(--mj-muted-fg)]">{d.layeredHint}</p>
        ) : null}
      </div>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
      {msg ? <p className="text-sm text-emerald-700">{msg}</p> : null}

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <div className="overflow-x-auto rounded-[var(--mj-radius-md)] border border-[var(--mj-border)]">
          <table className="w-full min-w-[720px] text-sm">
            <thead className="bg-[var(--mj-muted)]">
              <tr>
                <th className="p-3 text-start">{d.name}</th>
                <th className="p-3 text-start">slug</th>
                <th className="p-3 text-start">{d.count}</th>
                {hierarchical ? <th className="p-3 text-start">{d.sortOrder}</th> : null}
                <th className="p-3 text-start" />
              </tr>
            </thead>
            <tbody>
              {sorted.map((row) => {
                const depth = depthMap.get(row.id) ?? 0;
                return (
                  <tr key={row.id} className="border-t border-[var(--mj-border)]">
                    <td className="p-3 font-medium" style={{ paddingInlineStart: 12 + depth * 18 }}>
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
                      {(row._count?.articles ?? 0) + (row._count?.courses ?? 0)}
                    </td>
                    {hierarchical ? (
                      <td className="p-3 font-mono text-xs">{row.sortOrder ?? 0}</td>
                    ) : null}
                    <td className="p-3">
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={() => startEdit(row)}>
                          {d.edit}
                        </Button>
                        <Button variant="destructive" size="sm" onClick={() => void remove(row.id)}>
                          {d.delete}
                        </Button>
                      </div>
                    </td>
                  </tr>
                );
              })}
              {!rows.length ? (
                <tr>
                  <td className="p-6 text-[var(--mj-muted-fg)]" colSpan={hierarchical ? 5 : 4}>
                    {dict.none}
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>

        <div className="grid h-fit gap-3 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-4">
          <h2 className="font-display text-lg font-bold">
            {editingId ? d.editTerm : d.addTerm}
          </h2>
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
          <div className="flex flex-wrap gap-2">
            <Button onClick={() => void save()}>{editingId ? dict.save : d.addTerm}</Button>
            {editingId ? (
              <Button type="button" variant="outline" onClick={resetForm}>
                {d.cancelEdit}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
