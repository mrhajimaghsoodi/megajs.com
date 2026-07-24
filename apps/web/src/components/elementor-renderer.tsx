import type { BuilderDoc, Widget } from '@/components/elementor-types';
import { SmushImage } from '@/components/smush-image';

function WidgetView({ widget }: { widget: Widget }) {
  switch (widget.type) {
    case 'heading': {
      const Tag = widget.data.tag;
      return <Tag className="font-display text-3xl font-bold tracking-tight">{widget.data.text}</Tag>;
    }
    case 'text':
      return (
        <div
          className="prose prose-neutral max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: widget.data.html.replace(/\n/g, '<br/>') }}
        />
      );
    case 'button':
      return (
        <a
          href={widget.data.href}
          className="inline-flex h-11 items-center rounded-[var(--mj-radius-md)] bg-[var(--mj-accent)] px-5 text-sm font-semibold text-[var(--mj-accent-fg)]"
        >
          {widget.data.label}
        </a>
      );
    case 'image':
      return widget.data.url ? (
        <SmushImage
          src={widget.data.url}
          alt={widget.data.alt}
          className="w-full rounded-[var(--mj-radius-md)]"
        />
      ) : null;
    case 'spacer':
      return <div style={{ height: widget.data.size }} />;
    case 'html':
      return <div dangerouslySetInnerHTML={{ __html: widget.data.html }} />;
    default:
      return null;
  }
}

export function ElementorRenderer({ doc }: { doc: BuilderDoc }) {
  if (!doc?.sections?.length) return null;
  return (
    <div className="space-y-10">
      {doc.sections.map((section) => (
        <section
          key={section.id}
          className={
            section.settings.padding === 'lg'
              ? 'py-16'
              : section.settings.padding === 'sm'
                ? 'py-6'
                : 'py-10'
          }
          style={{ background: section.settings.bg }}
        >
          <div className="mx-auto grid max-w-5xl gap-6 px-4 sm:px-6">
            {section.columns.map((col) => (
              <div key={col.id} className="space-y-4">
                {col.widgets.map((w) => (
                  <WidgetView key={w.id} widget={w} />
                ))}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
