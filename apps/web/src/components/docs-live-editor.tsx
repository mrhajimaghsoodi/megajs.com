'use client';

import { useEffect, useId, useState } from 'react';
import { Button } from '@/components/ui/button';

/** W3Schools-style live HTML/CSS playground (sandboxed iframe). */
export function DocsLiveEditor({
  initialHtml,
  locale = 'fa',
}: {
  initialHtml: string;
  locale?: 'fa' | 'en';
}) {
  const frameId = useId().replace(/:/g, '');
  const [code, setCode] = useState(initialHtml.trim());
  const [srcDoc, setSrcDoc] = useState(wrapHtml(initialHtml.trim()));

  useEffect(() => {
    setCode(initialHtml.trim());
    setSrcDoc(wrapHtml(initialHtml.trim()));
  }, [initialHtml]);

  const run = () => setSrcDoc(wrapHtml(code));

  const labels =
    locale === 'fa'
      ? {
          title: 'ادیتور لحظه‌ای HTML / CSS / JS',
          run: 'اجرا',
          reset: 'بازنشانی',
          hint: 'کد را ویرایش کنید و اجرا بزنید',
        }
      : {
          title: 'Live HTML / CSS / JS editor',
          run: 'Run',
          reset: 'Reset',
          hint: 'Edit the code and press Run',
        };

  return (
    <section className="my-10 overflow-hidden rounded-md border border-border" dir="ltr">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border bg-muted/40 px-3 py-2">
        <div>
          <p className="font-display text-sm font-bold text-foreground">{labels.title}</p>
          <p className="text-[11px] text-muted-foreground">{labels.hint}</p>
        </div>
        <div className="flex gap-2">
          <Button
            type="button"
            size="sm"
            variant="outline"
            className="cursor-pointer"
            onClick={() => {
              setCode(initialHtml.trim());
              setSrcDoc(wrapHtml(initialHtml.trim()));
            }}
          >
            {labels.reset}
          </Button>
          <Button type="button" size="sm" className="cursor-pointer" onClick={run}>
            {labels.run}
          </Button>
        </div>
      </div>
      <div className="grid lg:grid-cols-2">
        <textarea
          aria-label={labels.title}
          value={code}
          onChange={(e) => setCode(e.target.value)}
          spellCheck={false}
          className="min-h-[280px] w-full resize-y border-0 bg-[#0c0c0c] p-4 font-mono text-[13px] leading-6 text-[#ffd400] outline-none"
        />
        <iframe
          title={`preview-${frameId}`}
          sandbox="allow-scripts allow-same-origin"
          srcDoc={srcDoc}
          className="min-h-[280px] w-full border-0 border-t border-border bg-white lg:border-s lg:border-t-0"
        />
      </div>
    </section>
  );
}

function wrapHtml(code: string) {
  const trimmed = code.trim();
  if (/<!DOCTYPE/i.test(trimmed) || /<html[\s>]/i.test(trimmed)) {
    return trimmed;
  }
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<style>
  body { font-family: system-ui, sans-serif; margin: 1rem; line-height: 1.5; color: #1a1a1a; }
  img { max-width: 100%; height: auto; }
</style>
</head>
<body>
${trimmed}
</body>
</html>`;
}
