---
title: "Objects, Prototypes, and Static Types"
description: "This page explains object shapes, prototype lookup, structural typing, and runtime property checks with TypeScript examples, syntax tables, and practical authoring notes."
seoTitle: "TypeScript Objects, Prototypes, and Static Types Reference - MDN-style TypeScript | MEGA JS Docs"
seoDescription: "TypeScript Objects, Prototypes, and Static Types Reference (objects prototypes types): MDN-style TypeScript reference with JavaScript runtime facts, narrowing."
keywords: "TypeScript, Objects, Prototypes, and Static Types, TypeScript Objects, Prototypes, and Static Types, Objects, Prototypes, and Static Types tutorial, objects prototypes types"
order: 6
track: reference
sources:
  - name: MDN Web Docs - JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Guide - Data types
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures
---
# Objects, Prototypes, and Static Types

Objects, Prototypes, and Static Types is an author-focused MDN-style TypeScript reference page. It concentrates on object shapes, prototype lookup, structural typing, and runtime property checks and pairs precise definitions, JavaScript runtime behavior, and TypeScript contracts instead of beginner sequencing.

## Place in the MDN reference

On MDN, JavaScript is documented through primitives, objects, functions, modules, the DOM, and Web APIs. When using Objects, Prototypes, and Static Types, remember that TypeScript checks types before runtime and then erases them.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `structural typing` | compatibility by shape | Check runtime behavior in the target browser or Node.js and type behavior under strict mode. |
| `prototype` | runtime inheritance object | Check runtime behavior in the target browser or Node.js and type behavior under strict mode. |
| `interface` | static object contract | Check runtime behavior in the target browser or Node.js and type behavior under strict mode. |

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
  { syntax: 'structural typing', meaning: 'compatibility by shape', source: 'MDN-style' },
  { syntax: 'prototype', meaning: 'runtime inheritance object', source: 'MDN-style' },
  { syntax: 'interface', meaning: 'static object contract', source: 'MDN-style' }
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
const lesson: Lesson = { title: 'Objects, Prototypes, and Static Types', minutes: 12, track: 'reference' };
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

- For Objects, Prototypes, and Static Types, keep the boundary between real JavaScript values and erased TypeScript types explicit.
- Validate external data such as JSON, DOM, and network input before relying on assertions.
- For critical decisions, compare the relevant MDN page, the TypeScript Handbook, and a real target runtime.

## Conceptual link to MDN

This page aligns with MDN topics around Objects, Prototypes, and Static Types, JavaScript runtime types, DOM/Web APIs, and browser compatibility before implementation.

## Next step

Continue with **Function Signatures Reference**.
