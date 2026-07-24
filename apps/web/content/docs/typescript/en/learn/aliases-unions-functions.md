---
title: "Aliases, Unions, and Functions"
description: "This page explains authoring reusable type names, variant values, function signatures, and assertions with TypeScript examples, syntax tables, and practical authoring notes."
seoTitle: "Aliases, Unions, and Functions Tutorial - W3Schools-style | MEGA JS Docs"
seoDescription: "Learn Aliases, Unions, and Functions (aliases unions functions) with live HTML using typescript.js CDN, W3Schools practice, types, interfaces, generics,."
keywords: "TypeScript, Aliases, Unions, and Functions, TypeScript aliases-unions-functions, Aliases, Unions, and Functions tutorial"
order: 12
track: learn
sources:
  - name: W3Schools TypeScript Tutorial
    url: https://www.w3schools.com/typescript/index.php
---
# Aliases, Unions, and Functions

Aliases, Unions, and Functions focuses on authoring reusable type names, variant values, function signatures, and assertions. This is an educational rewrite inspired by the W3Schools TypeScript learning path, and every example is a complete HTML document using the typescript.js CDN for the live editor.

When you practice Aliases, Unions, and Functions, do not stop at the emitted JavaScript. Inspect compiler feedback, inference, narrowing, and the difference between types and runtime values.

## Core idea

- `interface`: named object contract.
- `type alias`: name for any type expression.
- `union`: one of several possible types.
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
interface Lesson {
  title: string;
  minutes?: number;
  readonly track: 'learn' | 'reference' | 'official';
}
const lesson: Lesson = { title: 'Aliases, Unions, and Functions', minutes: 12, track: 'learn' };
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
  { syntax: 'interface', purpose: 'named object contract' },
  { syntax: 'type alias', purpose: 'name for any type expression' },
  { syntax: 'union', purpose: 'one of several possible types' }
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
  { id: 1, action: 'Read Aliases, Unions, and Functions', done: true },
  { id: 2, action: 'Change the TypeScript source', done: false },
  { id: 3, action: 'Compare types with runtime output', done: false },
];
const remaining = steps.filter((step) => !step.done);
log('Practice page:', 'aliases-unions-functions');
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
| `interface` | named object contract | In Aliases, Unions, and Functions, test it with strict mode, invalid input, and emitted JavaScript. |
| `type alias` | name for any type expression | In Aliases, Unions, and Functions, test it with strict mode, invalid input, and emitted JavaScript. |
| `union` | one of several possible types | In Aliases, Unions, and Functions, test it with strict mode, invalid input, and emitted JavaScript. |

## Common mistakes

- Copying Aliases, Unions, and Functions without enabling `strict` or checking the real emitted JavaScript.
- Using `any` or assertions to hide uncertain data instead of `unknown`, guards, and validation.
- Forgetting to test `interface` with invalid input, null/undefined, and module or DOM boundaries.

## Practice step

Create a file named `aliases-unions-functions.ts`, run the first example, then change one part related to `interface`. If compiler feedback or output looks surprising, separate the type annotation from the runtime value.

## Next step

Next, continue with **Type Aliases and Interfaces** so the TypeScript learning path builds on this concept.
