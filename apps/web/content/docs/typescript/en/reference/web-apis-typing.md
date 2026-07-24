---
title: "Web APIs Typing Reference"
description: "This page explains DOM lib declarations, fetch, events, storage, workers, and browser compatibility in typed code with TypeScript examples, syntax tables, and practical authoring notes."
seoTitle: "Web APIs Typing Reference - MDN-style TypeScript | MEGA JS Docs"
seoDescription: "Web APIs Typing Reference (web apis typing): MDN-style TypeScript reference with JavaScript runtime facts, narrowing, DOM typing, and compiler examples."
keywords: "TypeScript, Web APIs Typing Reference, TypeScript Web APIs Typing Reference, Web APIs Typing Reference tutorial, web apis typing"
order: 13
track: reference
sources:
  - name: MDN Web Docs - JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Guide - Data types
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures
---
# Web APIs Typing Reference

Web APIs Typing Reference is an author-focused MDN-style TypeScript reference page. It concentrates on DOM lib declarations, fetch, events, storage, workers, and browser compatibility in typed code and pairs precise definitions, JavaScript runtime behavior, and TypeScript contracts instead of beginner sequencing.

## Place in the MDN reference

On MDN, JavaScript is documented through primitives, objects, functions, modules, the DOM, and Web APIs. When using Web APIs Typing Reference, remember that TypeScript checks types before runtime and then erases them.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `HTMLElement` | base type for many DOM elements | Check runtime behavior in the target browser or Node.js and type behavior under strict mode. |
| `EventTarget` | broad event target type | Check runtime behavior in the target browser or Node.js and type behavior under strict mode. |
| `lib.dom.d.ts` | DOM declaration library | Check runtime behavior in the target browser or Node.js and type behavior under strict mode. |

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
  { syntax: 'HTMLElement', meaning: 'base type for many DOM elements', source: 'MDN-style' },
  { syntax: 'EventTarget', meaning: 'broad event target type', source: 'MDN-style' },
  { syntax: 'lib.dom.d.ts', meaning: 'DOM declaration library', source: 'MDN-style' }
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
interface Lesson {
  title: string;
  minutes?: number;
  readonly track: 'learn' | 'reference' | 'official';
}
const lesson: Lesson = { title: 'Web APIs Typing Reference', minutes: 12, track: 'reference' };
log(lesson.title, lesson.minutes ?? 0, lesson.track);
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

- For Web APIs Typing Reference, keep the boundary between real JavaScript values and erased TypeScript types explicit.
- Validate external data such as JSON, DOM, and network input before relying on assertions.
- For critical decisions, compare the relevant MDN page, the TypeScript Handbook, and a real target runtime.

## Conceptual link to MDN

This page aligns with MDN topics around Web APIs Typing Reference, JavaScript runtime types, DOM/Web APIs, and browser compatibility before implementation.

## Next step

Continue with **DOM Typing Reference**.
