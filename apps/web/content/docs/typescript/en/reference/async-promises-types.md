---
title: "Async, Promises, and Types"
description: "This page explains Promise<T>, async return types, awaited values, rejection modeling, and concurrent helpers with TypeScript examples, syntax tables, and practical authoring notes."
seoTitle: "TypeScript Async, Promises, and Types Reference - MDN-style TypeScript | MEGA JS Docs"
seoDescription: "TypeScript Async, Promises, and Types Reference (async promises types): MDN-style TypeScript reference with JavaScript runtime facts, narrowing, DOM typing."
keywords: "TypeScript, Async, Promises, and Types, TypeScript Async, Promises, and Types, Async, Promises, and Types tutorial, async promises types"
order: 16
track: reference
sources:
  - name: MDN Web Docs - JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Guide - Data types
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures
---
# Async, Promises, and Types

Async, Promises, and Types is an author-focused MDN-style TypeScript reference page. It concentrates on Promise<T>, async return types, awaited values, rejection modeling, and concurrent helpers and pairs precise definitions, JavaScript runtime behavior, and TypeScript contracts instead of beginner sequencing.

## Place in the MDN reference

On MDN, JavaScript is documented through primitives, objects, functions, modules, the DOM, and Web APIs. When using Async, Promises, and Types, remember that TypeScript checks types before runtime and then erases them.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `Promise<T>` | type for a future result | Check runtime behavior in the target browser or Node.js and type behavior under strict mode. |
| `Awaited<T>` | unwraps awaited values | Check runtime behavior in the target browser or Node.js and type behavior under strict mode. |
| `try/catch` | runtime error handling around async work | Check runtime behavior in the target browser or Node.js and type behavior under strict mode. |

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
  { syntax: 'Promise<T>', meaning: 'type for a future result', source: 'MDN-style' },
  { syntax: 'Awaited<T>', meaning: 'unwraps awaited values', source: 'MDN-style' },
  { syntax: 'try/catch', meaning: 'runtime error handling around async work', source: 'MDN-style' }
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
async function loadLesson(): Promise<{ title: string; ready: boolean }> {
  return { title: 'Async, Promises, and Types', ready: true };
}
loadLesson().then((lesson) => {
  log(lesson.title, lesson.ready ? 'ready' : 'pending');
});
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

- For Async, Promises, and Types, keep the boundary between real JavaScript values and erased TypeScript types explicit.
- Validate external data such as JSON, DOM, and network input before relying on assertions.
- For critical decisions, compare the relevant MDN page, the TypeScript Handbook, and a real target runtime.

## Conceptual link to MDN

This page aligns with MDN topics around Async, Promises, and Types, JavaScript runtime types, DOM/Web APIs, and browser compatibility before implementation.

## Next step

Continue with **Symbols, BigInt, and Unique Types**.
