import { MediaImage } from '@/components/media-image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export function MarkdownBody({
  content,
  className = '',
  /** When page already renders an H1, demote markdown # headings to H2 */
  demoteH1 = false,
}: {
  content: string;
  className?: string;
  demoteH1?: boolean;
}) {
  return (
    <div className={`mj-prose text-base leading-8 text-foreground ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          img: ({ src, alt }) => (
            <MediaImage
              src={typeof src === 'string' ? src : ''}
              alt={alt || ''}
              width={1200}
              height={675}
              sizes="(max-width: 768px) 100vw, 48rem"
              className="my-6 h-auto w-full max-w-full"
            />
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-primary underline-offset-4 hover:underline"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          h1: ({ children }) =>
            demoteH1 ? (
              <h2 className="mt-10 mb-3 font-display text-2xl font-bold tracking-tight">
                {children}
              </h2>
            ) : (
              <h1 className="mt-2 mb-4 font-display text-4xl font-bold tracking-tight">
                {children}
              </h1>
            ),
          h2: ({ children }) => (
            <h2 className="mt-10 mb-3 font-display text-2xl font-bold tracking-tight">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="mt-8 mb-2 font-display text-xl font-bold tracking-tight">{children}</h3>
          ),
          p: ({ children }) => <p className="mb-4">{children}</p>,
          ul: ({ children }) => <ul className="mb-4 list-disc space-y-1 ps-6">{children}</ul>,
          ol: ({ children }) => <ol className="mb-4 list-decimal space-y-1 ps-6">{children}</ol>,
          blockquote: ({ children }) => (
            <blockquote className="my-4 border-s-4 border-primary/60 ps-4 text-muted-foreground">
              {children}
            </blockquote>
          ),
          code: ({ children, className: cls }) => {
            const isBlock = Boolean(cls);
            if (isBlock) {
              return (
                <code className="font-mono text-[13px] leading-6" data-code>
                  {children}
                </code>
              );
            }
            return (
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em]" data-code>
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre className="mb-4 overflow-x-auto rounded-md border border-border bg-muted/60 p-4">
              {children}
            </pre>
          ),
          table: ({ children }) => (
            <div className="mb-4 overflow-x-auto">
              <table className="w-full border-collapse text-sm">{children}</table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border border-border bg-muted/50 px-3 py-2 text-start font-semibold">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border border-border px-3 py-2 align-top">{children}</td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
