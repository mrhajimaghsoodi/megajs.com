import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { resolveMediaUrl } from '@/lib/media-url';

export function MarkdownBody({
  content,
  className = '',
}: {
  content: string;
  className?: string;
}) {
  return (
    <div className={`mj-prose text-base leading-8 text-foreground ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          img: ({ src, alt }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={resolveMediaUrl(typeof src === 'string' ? src : '')}
              alt={alt || ''}
              className="my-6 h-auto max-w-full"
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
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
