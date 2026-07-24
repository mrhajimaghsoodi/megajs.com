---
title: "TypeScript Arrays"
description: "This page explains typing homogeneous arrays and read-only array APIs with TypeScript examples, syntax tables, and practical authoring notes."
seoTitle: "TypeScript Arrays Tutorial - W3Schools-style | MEGA JS Docs"
seoDescription: "Learn TypeScript Arrays (arrays) with live HTML using typescript.js CDN, W3Schools practice, types, interfaces, generics, and compiler guidance with practical."
keywords: "TypeScript, TypeScript Arrays, TypeScript Arrays, Arrays tutorial, arrays"
order: 8
track: learn
sources:
  - name: W3Schools TypeScript Tutorial
    url: https://www.w3schools.com/typescript/index.php
---
# TypeScript Arrays

TypeScript Arrays focuses on typing homogeneous arrays and read-only array APIs. This is an educational rewrite inspired by the W3Schools TypeScript learning path, and every example is a complete HTML document using the typescript.js CDN for the live editor.

When you practice TypeScript Arrays, do not stop at the emitted JavaScript. Inspect compiler feedback, inference, narrowing, and the difference between types and runtime values.

## Core idea

- `string[]`: array of strings.
- `Array<number>`: generic array syntax.
- `readonly`: prevents mutation through the typed API.
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
const lessons: string[] = ['types', 'arrays', 'tuples'];
const progress: [string, number] = ['completed', lessons.length];
for (const lesson of lessons) {
  log(lesson.toUpperCase());
}
log(progress[0], progress[1]);
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
  { syntax: 'string[]', purpose: 'array of strings' },
  { syntax: 'Array<number>', purpose: 'generic array syntax' },
  { syntax: 'readonly', purpose: 'prevents mutation through the typed API' }
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
  { id: 1, action: 'Read TypeScript Arrays', done: true },
  { id: 2, action: 'Change the TypeScript source', done: false },
  { id: 3, action: 'Compare types with runtime output', done: false },
];
const remaining = steps.filter((step) => !step.done);
log('Practice page:', 'arrays');
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
| `string[]` | array of strings | In TypeScript Arrays, test it with strict mode, invalid input, and emitted JavaScript. |
| `Array<number>` | generic array syntax | In TypeScript Arrays, test it with strict mode, invalid input, and emitted JavaScript. |
| `readonly` | prevents mutation through the typed API | In TypeScript Arrays, test it with strict mode, invalid input, and emitted JavaScript. |

## Common mistakes

- Copying TypeScript Arrays without enabling `strict` or checking the real emitted JavaScript.
- Using `any` or assertions to hide uncertain data instead of `unknown`, guards, and validation.
- Forgetting to test `string[]` with invalid input, null/undefined, and module or DOM boundaries.

## Practice step

Create a file named `arrays.ts`, run the first example, then change one part related to `string[]`. If compiler feedback or output looks surprising, separate the type annotation from the runtime value.

## Next step

Next, continue with **TypeScript Tuples** so the TypeScript learning path builds on this concept.
