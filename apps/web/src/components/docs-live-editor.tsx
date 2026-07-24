'use client';

import { useId, useState } from 'react';
import { Button } from '@/components/ui/button';

/** W3Schools-style live HTML/CSS playground (sandboxed iframe). */
export function DocsLiveEditor({
  initialHtml,
  locale = 'fa',
}: {
  initialHtml: string;
  locale?: 'fa' | 'en';
}) {
  return <DocsLiveEditorInstance key={initialHtml} initialHtml={initialHtml} locale={locale} />;
}

function DocsLiveEditorInstance({
  initialHtml,
  locale,
}: {
  initialHtml: string;
  locale: 'fa' | 'en';
}) {
  const frameId = useId().replace(/:/g, '');
  const [code, setCode] = useState(initialHtml.trim());
  const [srcDoc, setSrcDoc] = useState(wrapHtml(initialHtml.trim()));

  const run = () => setSrcDoc(wrapHtml(code));

  const labels =
    locale === 'fa'
      ? {
          title: 'ادیتور لحظه‌ای HTML / CSS / JS / React',
          run: 'اجرا',
          reset: 'بازنشانی',
          hint: 'کد را ویرایش کنید و اجرا بزنید',
        }
      : {
          title: 'Live HTML / CSS / JS / React editor',
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
  if (looksLikeReactSnippet(trimmed)) {
    return wrapReact(trimmed);
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

function looksLikeReactSnippet(code: string) {
  return (
    /ReactDOM\.createRoot|React\.|type=["']text\/babel["']|use(State|Effect|Context|Ref|Memo|Callback|Reducer|Transition|DeferredValue|Id)\s*\(/.test(code) ||
    /\b(?:function|class)\s+[A-Z][\w]*\s*(?:\(|extends)/.test(code) ||
    /\b(?:const|let|var)\s+[A-Z][\w]*\s*=/.test(code) ||
    /<[A-Z][\w.]*[\s>/]/.test(code)
  );
}

function wrapReact(code: string) {
  const safeCode = code.replace(/<\/script/gi, '<\\/script');
  const hasRender = /(?:ReactDOM\.)?createRoot\s*\(|root\.render\s*\(|ReactDOM\.render\s*\(/.test(safeCode);
  const hasApp = /\b(?:function|class)\s+App\b|\b(?:const|let|var)\s+App\s*=/.test(safeCode);
  const appCode = hasRender
    ? safeCode
    : hasApp
      ? `${safeCode}\nReactDOM.createRoot(document.getElementById('root')).render(<App />);`
      : `function App() {\n  return (${safeCode});\n}\nReactDOM.createRoot(document.getElementById('root')).render(<App />);`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<style>
  body { font-family: system-ui, sans-serif; margin: 1rem; line-height: 1.5; color: #1a1a1a; }
  button, input, select, textarea { font: inherit; margin: 0.25rem; }
</style>
</head>
<body>
  <div id="root"></div>
  <div id="modal-root"></div>
  <script type="text/babel">
  const { useState, useEffect, useContext, useRef, useMemo, useCallback, useReducer, useTransition, useDeferredValue, useId, Suspense, StrictMode, Fragment, memo, createContext } = React;
${indent(appCode, 2)}
  </script>
</body>
</html>`;
}

function indent(value: string, spaces: number) {
  const prefix = ' '.repeat(spaces);
  return value.split('\n').map((line) => `${prefix}${line}`).join('\n');
}
