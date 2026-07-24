---
title: "TypeScript Mapped Types"
description: "This page explains transforming object keys and modifiers into new type shapes with TypeScript examples, syntax tables, and practical authoring notes."
seoTitle: "TypeScript Mapped Types Tutorial - W3Schools-style | MEGA JS Docs"
seoDescription: "Learn TypeScript Mapped Types (mapped types) with live HTML using typescript.js CDN, W3Schools practice, types, interfaces, generics, and compiler guidance."
keywords: "TypeScript, TypeScript Mapped Types, TypeScript Mapped Types, Mapped Types tutorial, mapped types"
order: 34
track: learn
sources:
  - name: W3Schools TypeScript Tutorial
    url: https://www.w3schools.com/typescript/index.php
---
# TypeScript Mapped Types

TypeScript Mapped Types focuses on transforming object keys and modifiers into new type shapes. This is an educational rewrite inspired by the W3Schools TypeScript learning path, and every example is a complete HTML document using the typescript.js CDN for the live editor.

When you practice TypeScript Mapped Types, do not stop at the emitted JavaScript. Inspect compiler feedback, inference, narrowing, and the difference between types and runtime values.

## Core idea

- `[K in keyof T]`: mapped type key loop.
- `-readonly`: removes readonly modifier.
- `as`: remaps keys inside a mapped type.
- For this topic, readable generic APIs, precise constraints, and inference without extra annotations is the main sign that your TypeScript code is doing its job.

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
type User = { id: number; name: string; active: boolean };
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
type PublicUser = Pick<User, 'id' | 'name'>;
const user: PublicUser = { id: 1, name: 'Ada' };
log(getValue(user, 'name'));
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
  { syntax: '[K in keyof T]', purpose: 'mapped type key loop' },
  { syntax: '-readonly', purpose: 'removes readonly modifier' },
  { syntax: 'as', purpose: 'remaps keys inside a mapped type' }
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
  { id: 1, action: 'Read TypeScript Mapped Types', done: true },
  { id: 2, action: 'Change the TypeScript source', done: false },
  { id: 3, action: 'Compare types with runtime output', done: false },
];
const remaining = steps.filter((step) => !step.done);
log('Practice page:', 'mapped-types');
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
| `[K in keyof T]` | mapped type key loop | In TypeScript Mapped Types, test it with strict mode, invalid input, and emitted JavaScript. |
| `-readonly` | removes readonly modifier | In TypeScript Mapped Types, test it with strict mode, invalid input, and emitted JavaScript. |
| `as` | remaps keys inside a mapped type | In TypeScript Mapped Types, test it with strict mode, invalid input, and emitted JavaScript. |

## Common mistakes

- Copying TypeScript Mapped Types without enabling `strict` or checking the real emitted JavaScript.
- Using `any` or assertions to hide uncertain data instead of `unknown`, guards, and validation.
- Forgetting to test `[K in keyof T]` with invalid input, null/undefined, and module or DOM boundaries.

## Practice step

Create a file named `mapped-types.ts`, run the first example, then change one part related to `[K in keyof T]`. If compiler feedback or output looks surprising, separate the type annotation from the runtime value.

## Next step

Next, continue with **TypeScript Type Inference** so the TypeScript learning path builds on this concept.
