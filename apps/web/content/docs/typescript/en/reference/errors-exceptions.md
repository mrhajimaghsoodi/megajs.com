---
title: "Errors and Exceptions Typing"
description: "This page explains Error objects, unknown catch variables, thrown values, stack traces, and safe recovery branches with TypeScript examples, syntax tables, and practical authoring notes."
seoTitle: "TypeScript Errors and Exceptions Typing Reference - MDN-style TypeScript | MEGA JS Docs"
seoDescription: "TypeScript Errors and Exceptions Typing Reference (errors exceptions): MDN-style TypeScript reference with JavaScript runtime facts, narrowing, DOM typing,."
keywords: "TypeScript, Errors and Exceptions Typing, TypeScript Errors and Exceptions Typing, Errors and Exceptions Typing tutorial, errors exceptions"
order: 11
track: reference
sources:
  - name: MDN Web Docs - JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Guide - Data types
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures
---
# Errors and Exceptions Typing

Errors and Exceptions Typing is an author-focused MDN-style TypeScript reference page. It concentrates on Error objects, unknown catch variables, thrown values, stack traces, and safe recovery branches and pairs precise definitions, JavaScript runtime behavior, and TypeScript contracts instead of beginner sequencing.

## Place in the MDN reference

On MDN, JavaScript is documented through primitives, objects, functions, modules, the DOM, and Web APIs. When using Errors and Exceptions Typing, remember that TypeScript checks types before runtime and then erases them.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `unknown` | safe catch variable type | Check runtime behavior in the target browser or Node.js and type behavior under strict mode. |
| `Error` | standard runtime error object | Check runtime behavior in the target browser or Node.js and type behavior under strict mode. |
| `Result` | explicit success/failure return shape | Check runtime behavior in the target browser or Node.js and type behavior under strict mode. |

## Examples

### Example 1

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<script src="https://cdn.jsdelivr.net/npm/typescript@5.7.3/lib/typescript.js"></script>
</head>
<body>
<pre id="out"></pre>
<script>
const out = document.querySelector('#out');
const log = (...a) => { out.textContent += a.map(String).join(' ') + '\n'; };
const tsCode = `
type ReferenceTerm = {
  syntax: string;
  meaning: string;
  source: 'MDN-style' | 'TypeScript';
};
const terms: ReferenceTerm[] = [
  { syntax: 'unknown', meaning: 'safe catch variable type', source: 'MDN-style' },
  { syntax: 'Error', meaning: 'standard runtime error object', source: 'MDN-style' },
  { syntax: 'Result', meaning: 'explicit success/failure return shape', source: 'MDN-style' }
];
terms.forEach((term) => log(term.source, term.syntax, '-', term.meaning));
`;
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
</html>
```

### Example 2

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<script src="https://cdn.jsdelivr.net/npm/typescript@5.7.3/lib/typescript.js"></script>
</head>
<body>
<pre id="out"></pre>
<script>
const out = document.querySelector('#out');
const log = (...a) => { out.textContent += a.map(String).join(' ') + '\n'; };
const tsCode = `
function parseTitle(value: unknown): string {
  if (typeof value === 'object' && value !== null && 'title' in value) {
    const title = (value as { title?: unknown }).title;
    if (typeof title === 'string') return title;
  }
  return 'Untitled';
}
log(parseTitle(JSON.parse('{"title":"Errors and Exceptions Typing"}')));
`;
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
</html>
```

## Precise authoring notes

- For Errors and Exceptions Typing, keep the boundary between real JavaScript values and erased TypeScript types explicit.
- Validate external data such as JSON, DOM, and network input before relying on assertions.
- For critical decisions, compare the relevant MDN page, the TypeScript Handbook, and a real target runtime.

## Conceptual link to MDN

This page aligns with MDN topics around Errors and Exceptions Typing, JavaScript runtime types, DOM/Web APIs, and browser compatibility before implementation.

## Next step

Continue with **Memory and GC Notes for Type Authors**.
