/** Pull first fenced ```html block from markdown body for playground default. */
export function extractFirstHtmlFence(markdown: string): string | null {
  const html = markdown.match(/```html\s*\n([\s\S]*?)```/i);
  if (html) return html[1].trim();

  // React pages may use bare ```jsx / ```tsx fences — wrap them for the live editor.
  const react = markdown.match(/```(?:jsx|tsx)\s*\n([\s\S]*?)```/i);
  if (react) {
    return wrapReactSnippet(react[1].trim());
  }

  // TypeScript pages may use bare ```ts / ```typescript fences — transpile in-browser.
  const ts = markdown.match(/```(?:ts|typescript)\s*\n([\s\S]*?)```/i);
  if (ts) {
    return wrapTypeScriptSnippet(ts[1].trim());
  }

  // Learn-track CSS pages may use a bare ```css fence — wrap it for the live editor.
  const css = markdown.match(/```css\s*\n([\s\S]*?)```/i);
  if (css) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<style>
${css[1].trim()}
</style>
</head>
<body>
  <h1>CSS preview</h1>
  <p class="demo">Edit the CSS above and press Run.</p>
  <div class="box">Box</div>
  <ul class="list">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </ul>
</body>
</html>`;
  }

  // Learn-track JS pages may use a bare ```js / ```javascript fence.
  const js = markdown.match(/```(?:js|javascript)\s*\n([\s\S]*?)```/i);
  if (js) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
<body>
  <h1>JavaScript preview</h1>
  <pre id="out"></pre>
  <script>
  const out = document.querySelector('#out');
  const log = (...args) => {
    out.textContent += args.map(String).join(' ') + '\\n';
  };
  try {
${js[1].trim()}
  } catch (error) {
    log('Error:', error && error.message ? error.message : error);
  }
  </script>
</body>
</html>`;
  }

  return null;
}

function wrapReactSnippet(code: string): string {
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

function wrapTypeScriptSnippet(code: string): string {
  const safeCode = escapeTemplateLiteral(code);

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<script src="https://cdn.jsdelivr.net/npm/typescript@5.7.3/lib/typescript.js"></script>
</head>
<body>
<pre id="out"></pre>
<script>
const out = document.querySelector('#out');
const log = (...a) => { out.textContent += a.map(String).join(' ') + '\\n'; };
const tsCode = \`
${safeCode}
\`;
try {
  const result = ts.transpileModule(tsCode, {
    compilerOptions: { target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.ESNext, strict: true }
  });
  // Run emitted JS in a Function with log in scope
  new Function('log', result.outputText)(log);
} catch (e) {
  log('Error:', e.message || e);
}
</script>
</body>
</html>`;
}

function indent(value: string, spaces: number): string {
  const prefix = ' '.repeat(spaces);
  return value.split('\n').map((line) => `${prefix}${line}`).join('\n');
}

function escapeTemplateLiteral(value: string): string {
  return value
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$\{/g, '\\${')
    .replace(/<\/script/gi, '<\\/script');
}
