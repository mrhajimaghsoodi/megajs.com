'use client';

import { useState } from 'react';
import { MediaPickerModal } from '@/components/media-picker-modal';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { resolveMediaUrl } from '@/lib/media-url';
import { useAdminLocale } from '@/i18n/locale-context';

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

function simpleMarkdownToHtml(md: string) {
  let html = md
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/_(.+?)_/g, '<em>$1</em>');
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_m, alt, src) => {
    const url = resolveMediaUrl(src);
    return `<img src="${url}" alt="${alt}" style="max-width:100%;height:auto" />`;
  });
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  html = html.replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>');
  html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>\n?)+/g, (block) => `<ul>${block}</ul>`);
  html = html.replace(/\n\n/g, '</p><p>');
  html = html.replace(/\n/g, '<br/>');
  return `<p>${html}</p>`;
}

export function ContentEditor({
  value,
  onChange,
  rows = 18,
  placeholder,
  dir = 'auto',
}: Props) {
  const { dict } = useAdminLocale();
  const d = dict.cms;
  const [preview, setPreview] = useState(false);
  const [pickerOpen, setPickerOpen] = useState(false);

  const apply = (fn: (selected: string) => string) => {
    const el = document.getElementById('mj-content-editor') as HTMLTextAreaElement | null;
    if (!el) {
      onChange(fn(''));
      return;
    }
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const selected = value.slice(start, end);
    const inserted = fn(selected);
    const next = value.slice(0, start) + inserted + value.slice(end);
    onChange(next);
    requestAnimationFrame(() => {
      el.focus();
      const pos = start + inserted.length;
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
    { label: 'Img', run: () => setPickerOpen(true) },
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
      <div className="flex flex-wrap items-center gap-1 border-b border-[var(--mj-border)] bg-[var(--mj-muted)] p-2">
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
        <Button
          type="button"
          variant={preview ? 'default' : 'outline'}
          size="sm"
          className="ms-auto h-8 cursor-pointer px-2 text-xs"
          onClick={() => setPreview((v) => !v)}
        >
          {preview ? d.editorCode : d.editorPreview}
        </Button>
      </div>
      {preview ? (
        <div
          dir={dir}
          className="prose prose-sm max-w-none min-h-[320px] p-4 text-sm leading-7"
          dangerouslySetInnerHTML={{ __html: simpleMarkdownToHtml(value) }}
        />
      ) : (
        <Textarea
          id="mj-content-editor"
          dir={dir}
          rows={rows}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="min-h-[320px] rounded-none border-0 font-mono text-sm focus-visible:ring-0"
        />
      )}
      <div className="border-t border-[var(--mj-border)] bg-[var(--mj-muted)] px-3 py-1.5 font-mono text-[10px] text-[var(--mj-muted-fg)]">
        MDX / Markdown · {d.insertImageHint}
      </div>
      <MediaPickerModal
        open={pickerOpen}
        onClose={() => setPickerOpen(false)}
        title={d.insertImage}
        onSelect={(item) => {
          const alt = item.alt || item.title || item.filename;
          apply(() => `![${alt}](${item.url})`);
        }}
      />
    </div>
  );
}
