---
title: "TypeScript Union Types"
description: "This page explains allowing controlled alternatives while narrowing before use with TypeScript examples, syntax tables, and practical authoring notes."
seoTitle: "TypeScript Union Types Tutorial - W3Schools-style | MEGA JS Docs"
seoDescription: "Learn TypeScript Union Types (union types) with live HTML using typescript.js CDN, W3Schools practice, types, interfaces, generics, and compiler guidance."
keywords: "TypeScript, TypeScript Union Types, TypeScript Union Types, Union Types tutorial, union types"
order: 14
track: learn
sources:
  - name: W3Schools TypeScript Tutorial
    url: https://www.w3schools.com/typescript/index.php
---
# TypeScript Union Types

TypeScript Union Types focuses on allowing controlled alternatives while narrowing before use. This is an educational rewrite inspired by the W3Schools TypeScript learning path, and every example is a complete HTML document using the typescript.js CDN for the live editor.

When you practice TypeScript Union Types, do not stop at the emitted JavaScript. Inspect compiler feedback, inference, narrowing, and the difference between types and runtime values.

## Core idea

- `A | B`: value can be A or B.
- `discriminant`: literal property used to narrow a union.
- `exhaustive check`: verifies all union cases are handled.
- For this topic, explainable narrowing and complete union-case coverage is the main sign that your TypeScript code is doing its job.

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
type Result = { ok: true; value: number } | { ok: false; error: string };
function format(result: Result): string {
  if (result.ok) return 'value ' + result.value.toFixed(1);
  return 'error ' + result.error;
}
log(format({ ok: true, value: 42 }));
log(format({ ok: false, error: 'missing input' }));
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
  { syntax: 'A | B', purpose: 'value can be A or B' },
  { syntax: 'discriminant', purpose: 'literal property used to narrow a union' },
  { syntax: 'exhaustive check', purpose: 'verifies all union cases are handled' }
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
  { id: 1, action: 'Read TypeScript Union Types', done: true },
  { id: 2, action: 'Change the TypeScript source', done: false },
  { id: 3, action: 'Compare types with runtime output', done: false },
];
const remaining = steps.filter((step) => !step.done);
log('Practice page:', 'union-types');
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
| `A | B` | value can be A or B | In TypeScript Union Types, test it with strict mode, invalid input, and emitted JavaScript. |
| `discriminant` | literal property used to narrow a union | In TypeScript Union Types, test it with strict mode, invalid input, and emitted JavaScript. |
| `exhaustive check` | verifies all union cases are handled | In TypeScript Union Types, test it with strict mode, invalid input, and emitted JavaScript. |

## Common mistakes

- Copying TypeScript Union Types without enabling `strict` or checking the real emitted JavaScript.
- Using `any` or assertions to hide uncertain data instead of `unknown`, guards, and validation.
- Forgetting to test `A | B` with invalid input, null/undefined, and module or DOM boundaries.

## Practice step

Create a file named `union-types.ts`, run the first example, then change one part related to `A | B`. If compiler feedback or output looks surprising, separate the type annotation from the runtime value.

## Next step

Next, continue with **TypeScript Functions** so the TypeScript learning path builds on this concept.
