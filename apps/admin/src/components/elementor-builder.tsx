'use client';

import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export type Widget =
  | { id: string; type: 'heading'; data: { text: string; tag: 'h1' | 'h2' | 'h3' } }
  | { id: string; type: 'text'; data: { html: string } }
  | { id: string; type: 'button'; data: { label: string; href: string } }
  | { id: string; type: 'image'; data: { url: string; alt: string } }
  | { id: string; type: 'spacer'; data: { size: number } }
  | { id: string; type: 'html'; data: { html: string } };

export type Column = { id: string; width: number; widgets: Widget[] };
export type Section = {
  id: string;
  settings: { bg: string; padding: 'sm' | 'md' | 'lg' };
  columns: Column[];
};
export type BuilderDoc = { version: 1; sections: Section[] };

function uid() {
  return `w_${Math.random().toString(36).slice(2, 10)}`;
}

export const emptyBuilder = (): BuilderDoc => ({
  version: 1,
  sections: [
    {
      id: uid(),
      settings: { bg: 'transparent', padding: 'lg' },
      columns: [
        {
          id: uid(),
          width: 100,
          widgets: [
            {
              id: uid(),
              type: 'heading',
              data: { text: 'New section', tag: 'h2' },
            },
          ],
        },
      ],
    },
  ],
});

type Props = {
  value: BuilderDoc;
  onChange: (doc: BuilderDoc) => void;
};

export function ElementorBuilder({ value, onChange }: Props) {
  const [selected, setSelected] = useState<{
    sectionId: string;
    columnId: string;
    widgetId: string;
  } | null>(null);

  const selectedWidget = useMemo(() => {
    if (!selected) return null;
    const section = value.sections.find((s) => s.id === selected.sectionId);
    const column = section?.columns.find((c) => c.id === selected.columnId);
    return column?.widgets.find((w) => w.id === selected.widgetId) ?? null;
  }, [selected, value]);

  const updateWidget = (patch: Partial<Widget['data']> & { type?: Widget['type'] }) => {
    if (!selected || !selectedWidget) return;
    onChange({
      ...value,
      sections: value.sections.map((s) =>
        s.id !== selected.sectionId
          ? s
          : {
              ...s,
              columns: s.columns.map((c) =>
                c.id !== selected.columnId
                  ? c
                  : {
                      ...c,
                      widgets: c.widgets.map((w) =>
                        w.id !== selected.widgetId
                          ? w
                          : ({ ...w, data: { ...w.data, ...patch } } as Widget),
                      ),
                    },
              ),
            },
      ),
    });
  };

  const addSection = () => {
    onChange({
      ...value,
      sections: [
        ...value.sections,
        {
          id: uid(),
          settings: { bg: 'transparent', padding: 'md' },
          columns: [{ id: uid(), width: 100, widgets: [] }],
        },
      ],
    });
  };

  const addWidget = (sectionId: string, columnId: string, type: Widget['type']) => {
    const base: Widget =
      type === 'heading'
        ? { id: uid(), type, data: { text: 'Heading', tag: 'h2' } }
        : type === 'text'
          ? { id: uid(), type, data: { html: 'Paragraph text…' } }
          : type === 'button'
            ? { id: uid(), type, data: { label: 'Click me', href: '/' } }
            : type === 'image'
              ? { id: uid(), type, data: { url: '', alt: '' } }
              : type === 'spacer'
                ? { id: uid(), type, data: { size: 24 } }
                : { id: uid(), type: 'html', data: { html: '<div>HTML</div>' } };

    onChange({
      ...value,
      sections: value.sections.map((s) =>
        s.id !== sectionId
          ? s
          : {
              ...s,
              columns: s.columns.map((c) =>
                c.id !== columnId ? c : { ...c, widgets: [...c.widgets, base] },
              ),
            },
      ),
    });
  };

  const removeWidget = (sectionId: string, columnId: string, widgetId: string) => {
    onChange({
      ...value,
      sections: value.sections.map((s) =>
        s.id !== sectionId
          ? s
          : {
              ...s,
              columns: s.columns.map((c) =>
                c.id !== columnId
                  ? c
                  : { ...c, widgets: c.widgets.filter((w) => w.id !== widgetId) },
              ),
            },
      ),
    });
    setSelected(null);
  };

  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_280px]">
      <div className="space-y-4">
        {value.sections.map((section) => (
          <div
            key={section.id}
            className="rounded-[var(--mj-radius-md)] border border-dashed border-[var(--mj-border)] p-4"
            style={{ background: section.settings.bg }}
          >
            <div className="mb-3 flex flex-wrap gap-2">
              {(['heading', 'text', 'button', 'image', 'spacer', 'html'] as const).map((t) => (
                <Button
                  key={t}
                  size="sm"
                  variant="outline"
                  className="cursor-pointer"
                  onClick={() => addWidget(section.id, section.columns[0].id, t)}
                >
                  + {t}
                </Button>
              ))}
            </div>
            {section.columns.map((col) => (
              <div key={col.id} className="space-y-2">
                {col.widgets.map((w) => (
                  <button
                    key={w.id}
                    type="button"
                    className={`w-full cursor-pointer rounded-md border p-3 text-start text-sm ${
                      selected?.widgetId === w.id
                        ? 'border-[var(--mj-accent)] bg-[var(--mj-accent)]/10'
                        : 'border-[var(--mj-border)]'
                    }`}
                    onClick={() =>
                      setSelected({
                        sectionId: section.id,
                        columnId: col.id,
                        widgetId: w.id,
                      })
                    }
                  >
                    <div className="font-mono text-[10px] uppercase text-[var(--mj-muted-fg)]">
                      {w.type}
                    </div>
                    <div className="mt-1 truncate">
                      {'text' in w.data
                        ? w.data.text
                        : 'html' in w.data
                          ? w.data.html
                          : 'label' in w.data
                            ? w.data.label
                            : 'url' in w.data
                              ? w.data.url || 'image'
                              : `spacer ${'size' in w.data ? w.data.size : ''}`}
                    </div>
                  </button>
                ))}
              </div>
            ))}
          </div>
        ))}
        <Button variant="outline" className="cursor-pointer" onClick={addSection}>
          + Section
        </Button>
      </div>

      <aside className="h-fit space-y-3 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-4">
        <h3 className="font-display text-sm font-semibold">Widget settings</h3>
        {!selectedWidget ? (
          <p className="text-xs text-[var(--mj-muted-fg)]">Select a widget</p>
        ) : (
          <div className="space-y-3">
            {selectedWidget.type === 'heading' ? (
              <>
                <div className="space-y-2">
                  <Label>Text</Label>
                  <Input
                    value={selectedWidget.data.text}
                    onChange={(e) => updateWidget({ text: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Tag</Label>
                  <select
                    className="h-10 w-full rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] px-3 text-sm"
                    value={selectedWidget.data.tag}
                    onChange={(e) =>
                      updateWidget({ tag: e.target.value as 'h1' | 'h2' | 'h3' })
                    }
                  >
                    <option value="h1">h1</option>
                    <option value="h2">h2</option>
                    <option value="h3">h3</option>
                  </select>
                </div>
              </>
            ) : null}
            {selectedWidget.type === 'text' || selectedWidget.type === 'html' ? (
              <div className="space-y-2">
                <Label>Content</Label>
                <Textarea
                  rows={6}
                  value={selectedWidget.data.html}
                  onChange={(e) => updateWidget({ html: e.target.value })}
                />
              </div>
            ) : null}
            {selectedWidget.type === 'button' ? (
              <>
                <div className="space-y-2">
                  <Label>Label</Label>
                  <Input
                    value={selectedWidget.data.label}
                    onChange={(e) => updateWidget({ label: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Href</Label>
                  <Input
                    dir="ltr"
                    value={selectedWidget.data.href}
                    onChange={(e) => updateWidget({ href: e.target.value })}
                  />
                </div>
              </>
            ) : null}
            {selectedWidget.type === 'image' ? (
              <>
                <div className="space-y-2">
                  <Label>URL</Label>
                  <Input
                    dir="ltr"
                    value={selectedWidget.data.url}
                    onChange={(e) => updateWidget({ url: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Alt</Label>
                  <Input
                    value={selectedWidget.data.alt}
                    onChange={(e) => updateWidget({ alt: e.target.value })}
                  />
                </div>
              </>
            ) : null}
            {selectedWidget.type === 'spacer' ? (
              <div className="space-y-2">
                <Label>Size (px)</Label>
                <Input
                  dir="ltr"
                  value={String(selectedWidget.data.size)}
                  onChange={(e) => updateWidget({ size: Number(e.target.value) || 0 })}
                />
              </div>
            ) : null}
            {selected ? (
              <Button
                variant="destructive"
                size="sm"
                className="cursor-pointer"
                onClick={() =>
                  removeWidget(selected.sectionId, selected.columnId, selected.widgetId)
                }
              >
                Delete widget
              </Button>
            ) : null}
          </div>
        )}
      </aside>
    </div>
  );
}
