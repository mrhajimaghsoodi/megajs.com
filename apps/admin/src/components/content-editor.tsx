'use client';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

type Props = {
  value: string;
  onChange: (v: string) => void;
  rows?: number;
  placeholder?: string;
  dir?: 'rtl' | 'ltr' | 'auto';
};

function wrap(selection: string, before: string, after = before) {
  if (!selection) return `${before}${after}`;
  return `${before}${selection}${after}`;
}

export function ContentEditor({
  value,
  onChange,
  rows = 18,
  placeholder,
  dir = 'auto',
}: Props) {
  const apply = (fn: (selected: string) => string) => {
    const el = document.getElementById('mj-content-editor') as HTMLTextAreaElement | null;
    if (!el) {
      onChange(fn(''));
      return;
    }
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const selected = value.slice(start, end);
    const next = value.slice(0, start) + fn(selected) + value.slice(end);
    onChange(next);
    requestAnimationFrame(() => {
      el.focus();
      const pos = start + fn(selected).length;
      el.setSelectionRange(pos, pos);
    });
  };

  const tools: Array<{ label: string; run: () => void }> = [
    { label: 'H2', run: () => apply((s) => `\n## ${s || 'heading'}\n`) },
    { label: 'H3', run: () => apply((s) => `\n### ${s || 'heading'}\n`) },
    { label: 'B', run: () => apply((s) => wrap(s || 'bold', '**')) },
    { label: 'I', run: () => apply((s) => wrap(s || 'italic', '_')) },
    { label: '</>', run: () => apply((s) => wrap(s || 'code', '`')) },
    { label: 'Link', run: () => apply((s) => `[${s || 'text'}](https://)`) },
    { label: 'List', run: () => apply((s) => `\n- ${s || 'item'}\n`) },
    {
      label: 'Code',
      run: () => apply((s) => `\n\`\`\`js\n${s || '// code'}\n\`\`\`\n`),
    },
    { label: 'Quote', run: () => apply((s) => `\n> ${s || 'quote'}\n`) },
    { label: 'HR', run: () => apply(() => '\n---\n') },
  ];

  return (
    <div className="overflow-hidden rounded-[var(--mj-radius-md)] border border-[var(--mj-border)]">
      <div className="flex flex-wrap gap-1 border-b border-[var(--mj-border)] bg-[var(--mj-muted)] p-2">
        {tools.map((t) => (
          <Button
            key={t.label}
            type="button"
            variant="outline"
            size="sm"
            className="h-8 cursor-pointer px-2 font-mono text-xs"
            onClick={t.run}
          >
            {t.label}
          </Button>
        ))}
      </div>
      <Textarea
        id="mj-content-editor"
        dir={dir}
        rows={rows}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="min-h-[320px] rounded-none border-0 font-mono text-sm focus-visible:ring-0"
      />
      <div className="border-t border-[var(--mj-border)] bg-[var(--mj-muted)] px-3 py-1.5 font-mono text-[10px] text-[var(--mj-muted-fg)]">
        MDX / Markdown
      </div>
    </div>
  );
}
