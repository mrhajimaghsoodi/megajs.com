---
title: "JSON Data and TypeScript"
description: "This page explains parsing unknown JSON, validating runtime data, modeling DTOs, and avoiding unsafe assertions with TypeScript examples, syntax tables, and practical authoring notes."
seoTitle: "TypeScript JSON Data and TypeScript Reference - MDN-style TypeScript | MEGA JS Docs"
seoDescription: "TypeScript JSON Data and TypeScript Reference (json data): MDN-style TypeScript reference with JavaScript runtime facts, narrowing, DOM typing, and compiler."
keywords: "TypeScript, JSON Data and TypeScript, TypeScript JSON Data and TypeScript, JSON Data and TypeScript tutorial, json data"
order: 15
track: reference
sources:
  - name: MDN Web Docs - JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Guide - Data types
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures
---
# JSON Data and TypeScript

JSON Data and TypeScript is an author-focused MDN-style TypeScript reference page. It concentrates on parsing unknown JSON, validating runtime data, modeling DTOs, and avoiding unsafe assertions and pairs precise definitions, JavaScript runtime behavior, and TypeScript contracts instead of beginner sequencing.

## Place in the MDN reference

On MDN, JavaScript is documented through primitives, objects, functions, modules, the DOM, and Web APIs. When using JSON Data and TypeScript, remember that TypeScript checks types before runtime and then erases them.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `unknown` | safe type for parsed external data | Check runtime behavior in the target browser or Node.js and type behavior under strict mode. |
| `DTO` | data transfer object shape | Check runtime behavior in the target browser or Node.js and type behavior under strict mode. |
| `validation` | runtime check before trusting data | Check runtime behavior in the target browser or Node.js and type behavior under strict mode. |

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
  { syntax: 'unknown', meaning: 'safe type for parsed external data', source: 'MDN-style' },
  { syntax: 'DTO', meaning: 'data transfer object shape', source: 'MDN-style' },
  { syntax: 'validation', meaning: 'runtime check before trusting data', source: 'MDN-style' }
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
log(parseTitle(JSON.parse('{"title":"JSON Data and TypeScript"}')));
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

- For JSON Data and TypeScript, keep the boundary between real JavaScript values and erased TypeScript types explicit.
- Validate external data such as JSON, DOM, and network input before relying on assertions.
- For critical decisions, compare the relevant MDN page, the TypeScript Handbook, and a real target runtime.

## Conceptual link to MDN

This page aligns with MDN topics around JSON Data and TypeScript, JavaScript runtime types, DOM/Web APIs, and browser compatibility before implementation.

## Next step

Continue with **Async, Promises, and Types**.
