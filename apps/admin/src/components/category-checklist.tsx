'use client';

import { useMemo, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAdminLocale } from '@/i18n/locale-context';

export type TermRow = {
  id: string;
  slug: string;
  parentId?: string | null;
  taxonomy: string;
  isDefault?: boolean;
  imageUrl?: string | null;
  sortOrder?: number;
  i18n?: Array<{ locale: string; name: string; description?: string }>;
  _count?: { articles?: number; courses?: number };
};

type Props = {
  taxonomy: 'post_category' | 'product_category' | 'tunnel_category';
  terms: TermRow[];
  selectedIds: string[];
  onChange: (ids: string[]) => void;
  onTermsChange?: (terms: TermRow[]) => void;
  title?: string;
};

function termName(t: TermRow, locale: string) {
  return t.i18n?.find((x) => x.locale === locale)?.name ?? t.i18n?.[0]?.name ?? t.slug;
}

/** WordPress-style hierarchical category checklist + Add New */
export function CategoryChecklist({
  taxonomy,
  terms,
  selectedIds,
  onChange,
  onTermsChange,
  title,
}: Props) {
  const { locale, dict } = useAdminLocale();
  const d = dict.cms;
  const [showAdd, setShowAdd] = useState(false);
  const [newName, setNewName] = useState('');
  const [newParent, setNewParent] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const depthMap = useMemo(() => {
    const byId = new Map(terms.map((r) => [r.id, r]));
    const depth = (id: string, seen = new Set<string>()): number => {
      if (seen.has(id)) return 0;
      seen.add(id);
      const t = byId.get(id);
      if (!t?.parentId) return 0;
      return 1 + depth(t.parentId, seen);
    };
    const map = new Map<string, number>();
    for (const r of terms) map.set(r.id, depth(r.id));
    return map;
  }, [terms]);

  const sorted = useMemo(() => {
    const byParent = new Map<string | null, TermRow[]>();
    for (const r of terms) {
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
    for (const r of terms) if (!out.includes(r)) out.push(r);
    return out;
  }, [terms]);

  const toggle = (id: string) => {
    onChange(
      selectedIds.includes(id)
        ? selectedIds.filter((x) => x !== id)
        : [...selectedIds, id],
    );
  };

  const addNew = async () => {
    if (!newName.trim()) return;
    setBusy(true);
    setError(null);
    try {
      const created = await adminFetch('/admin/cms/terms', {
        method: 'POST',
        body: JSON.stringify({
          taxonomy,
          name: newName.trim(),
          parentId: newParent || null,
          locale,
        }),
      });
      const next = [...terms, created];
      onTermsChange?.(next);
      onChange([...selectedIds, created.id]);
      setNewName('');
      setNewParent('');
      setShowAdd(false);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="space-y-2 rounded-md border border-[var(--mj-border)] p-3">
      <Label>{title || d.categories}</Label>
      <div className="max-h-52 space-y-1 overflow-y-auto rounded border border-[var(--mj-border)] bg-[var(--mj-muted)]/30 p-2">
        {sorted.map((t) => {
          const depth = depthMap.get(t.id) ?? 0;
          return (
            <label
              key={t.id}
              className="flex cursor-pointer items-center gap-2 text-sm"
              style={{ paddingInlineStart: depth * 14 }}
            >
              <input
                type="checkbox"
                checked={selectedIds.includes(t.id)}
                onChange={() => toggle(t.id)}
              />
              <span>
                {termName(t, locale)}
                {t.isDefault ? (
                  <span className="ms-1 text-[10px] text-[var(--mj-muted-fg)]">
                    ({d.defaultCategory})
                  </span>
                ) : null}
              </span>
            </label>
          );
        })}
        {!sorted.length ? (
          <p className="text-xs text-[var(--mj-muted-fg)]">{dict.none}</p>
        ) : null}
      </div>

      <button
        type="button"
        className="text-xs font-semibold text-primary underline-offset-4 hover:underline"
        onClick={() => setShowAdd((v) => !v)}
      >
        {showAdd ? d.cancelEdit : `+ ${d.addNewCategory}`}
      </button>

      {showAdd ? (
        <div className="space-y-2 border-t border-[var(--mj-border)] pt-2">
          <Input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder={d.newCategoryName}
          />
          <select
            className="h-9 w-full rounded-md border border-[var(--mj-border)] bg-[var(--mj-card)] px-2 text-sm"
            value={newParent}
            onChange={(e) => setNewParent(e.target.value)}
          >
            <option value="">{d.noParent}</option>
            {sorted.map((t) => (
              <option key={t.id} value={t.id}>
                {'—'.repeat(depthMap.get(t.id) ?? 0)} {termName(t, locale)}
              </option>
            ))}
          </select>
          <Button
            type="button"
            size="sm"
            disabled={busy || !newName.trim()}
            onClick={() => void addNew()}
          >
            {d.addTerm}
          </Button>
          {error ? <p className="text-xs text-[var(--mj-danger)]">{error}</p> : null}
        </div>
      ) : null}
    </div>
  );
}
