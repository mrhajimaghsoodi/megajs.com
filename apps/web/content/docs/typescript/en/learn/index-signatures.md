---
title: "TypeScript Index Signatures"
description: "This page explains typing dictionary-like objects and dynamic property access with TypeScript examples, syntax tables, and practical authoring notes."
seoTitle: "TypeScript Index Signatures Tutorial - W3Schools-style | MEGA JS Docs"
seoDescription: "Learn TypeScript Index Signatures (index signatures) with live HTML using typescript.js CDN, W3Schools practice, types, interfaces, generics, and compiler."
keywords: "TypeScript, TypeScript Index Signatures, TypeScript Index Signatures, Index Signatures tutorial, index signatures"
order: 38
track: learn
sources:
  - name: W3Schools TypeScript Tutorial
    url: https://www.w3schools.com/typescript/index.php
---
# TypeScript Index Signatures

TypeScript Index Signatures focuses on typing dictionary-like objects and dynamic property access. This is an educational rewrite inspired by the W3Schools TypeScript learning path, and every example is a complete HTML document using the typescript.js CDN for the live editor.

When you practice TypeScript Index Signatures, do not stop at the emitted JavaScript. Inspect compiler feedback, inference, narrowing, and the difference between types and runtime values.

## Core idea

- `[key: string]: T`: dynamic string property type.
- `Record<string, T>`: utility alternative for dictionaries.
- `noUncheckedIndexedAccess`: adds undefined to unchecked indexed reads.
- For this topic, alignment between types, runtime values, inference, and visible output is the main sign that your TypeScript code is doing its job.

## Runnable HTML examples with TypeScript

Each example is a complete HTML document that loads TypeScript from a CDN, compiles source with `ts.transpileModule`, and prints output on the same page.

### Example 1: Focused TypeScript pattern

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
type Formatter<T> = (value: T) => string;
const formatNumber: Formatter<number> = (value) => value.toFixed(2);
function label<T>(name: string, value: T, format: Formatter<T>): string {
  return name + ': ' + format(value);
}
log(label('score', 98.126, formatNumber));
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

### Example 2: Syntax options in context

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
type Term = { syntax: string; purpose: string };
const terms: Term[] = [
  { syntax: '[key: string]: T', purpose: 'dynamic string property type' },
  { syntax: 'Record<string, T>', purpose: 'utility alternative for dictionaries' },
  { syntax: 'noUncheckedIndexedAccess', purpose: 'adds undefined to unchecked indexed reads' }
];
for (const term of terms) {
  log(term.syntax + ' => ' + term.purpose);
}
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

### Example 3: Complete practice page

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
interface PracticeStep {
  id: number;
  action: string;
  done: boolean;
}
const steps: PracticeStep[] = [
  { id: 1, action: 'Read TypeScript Index Signatures', done: true },
  { id: 2, action: 'Change the TypeScript source', done: false },
  { id: 3, action: 'Compare types with runtime output', done: false },
];
const remaining = steps.filter((step) => !step.done);
log('Practice page:', 'index-signatures');
log('Remaining steps:', remaining.map((step) => step.action).join(' | '));
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

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `[key: string]: T` | dynamic string property type | In TypeScript Index Signatures, test it with strict mode, invalid input, and emitted JavaScript. |
| `Record<string, T>` | utility alternative for dictionaries | In TypeScript Index Signatures, test it with strict mode, invalid input, and emitted JavaScript. |
| `noUncheckedIndexedAccess` | adds undefined to unchecked indexed reads | In TypeScript Index Signatures, test it with strict mode, invalid input, and emitted JavaScript. |

## Common mistakes

- Copying TypeScript Index Signatures without enabling `strict` or checking the real emitted JavaScript.
- Using `any` or assertions to hide uncertain data instead of `unknown`, guards, and validation.
- Forgetting to test `[key: string]: T` with invalid input, null/undefined, and module or DOM boundaries.

## Practice step

Create a file named `index-signatures.ts`, run the first example, then change one part related to `[key: string]: T`. If compiler feedback or output looks surprising, separate the type annotation from the runtime value.

## Next step

Next, continue with **Declaration Merging** so the TypeScript learning path builds on this concept.
