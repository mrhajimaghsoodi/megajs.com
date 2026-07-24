'use client';

import { useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAdminLocale } from '@/i18n/locale-context';
import type { TermRow } from '@/components/category-checklist';

type Props = {
  taxonomy: 'post_tag' | 'product_tag' | 'tunnel_tag';
  terms: TermRow[];
  selectedIds: string[];
  onChange: (ids: string[]) => void;
  onTermsChange?: (terms: TermRow[]) => void;
  title?: string;
};

function termName(t: TermRow, locale: string) {
  return t.i18n?.find((x) => x.locale === locale)?.name ?? t.i18n?.[0]?.name ?? t.slug;
}

/** WordPress-style tags metabox with quick-add */
export function TagChecklist({
  taxonomy,
  terms,
  selectedIds,
  onChange,
  onTermsChange,
  title,
}: Props) {
  const { locale, dict } = useAdminLocale();
  const d = dict.cms;
  const [newName, setNewName] = useState('');
  const [busy, setBusy] = useState(false);

  const toggle = (id: string) => {
    onChange(
      selectedIds.includes(id)
        ? selectedIds.filter((x) => x !== id)
        : [...selectedIds, id],
    );
  };

  const addTag = async () => {
    const name = newName.trim();
    if (!name) return;
    setBusy(true);
    try {
      const existing = terms.find(
        (t) => termName(t, locale).toLowerCase() === name.toLowerCase() || t.slug === name,
      );
      if (existing) {
        if (!selectedIds.includes(existing.id)) onChange([...selectedIds, existing.id]);
        setNewName('');
        return;
      }
      const created = await adminFetch('/admin/cms/terms', {
        method: 'POST',
        body: JSON.stringify({ taxonomy, name, locale }),
      });
      onTermsChange?.([...terms, created]);
      onChange([...selectedIds, created.id]);
      setNewName('');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="space-y-2 rounded-md border border-[var(--mj-border)] p-3">
      <Label>{title || d.tags}</Label>
      <div className="flex flex-wrap gap-2">
        {terms.map((t) => {
          const on = selectedIds.includes(t.id);
          return (
            <button
              key={t.id}
              type="button"
              className={`cursor-pointer rounded-md border px-2 py-1 text-xs ${
                on
                  ? 'border-[var(--mj-accent)] bg-[var(--mj-accent)] text-[var(--mj-accent-fg)]'
                  : 'border-[var(--mj-border)]'
              }`}
              onClick={() => toggle(t.id)}
            >
              {termName(t, locale)}
            </button>
          );
        })}
        {!terms.length ? (
          <p className="text-xs text-[var(--mj-muted-fg)]">{dict.none}</p>
        ) : null}
      </div>
      <div className="flex gap-2">
        <Input
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder={d.addNewTag}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              void addTag();
            }
          }}
        />
        <Button type="button" size="sm" disabled={busy || !newName.trim()} onClick={() => void addTag()}>
          {d.addTerm}
        </Button>
      </div>
    </div>
  );
}
