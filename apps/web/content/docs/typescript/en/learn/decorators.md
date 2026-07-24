---
title: "TypeScript Decorators"
description: "This page explains reading decorator syntax, metadata expectations, and version caveats with TypeScript examples, syntax tables, and practical authoring notes."
seoTitle: "TypeScript Decorators Tutorial - W3Schools-style | MEGA JS Docs"
seoDescription: "Learn TypeScript Decorators (decorators) with live HTML using typescript.js CDN, W3Schools practice, types, interfaces, generics, and compiler guidance."
keywords: "TypeScript, TypeScript Decorators, TypeScript Decorators, Decorators tutorial, decorators"
order: 41
track: learn
sources:
  - name: W3Schools TypeScript Tutorial
    url: https://www.w3schools.com/typescript/index.php
---
# TypeScript Decorators

TypeScript Decorators focuses on reading decorator syntax, metadata expectations, and version caveats. This is an educational rewrite inspired by the W3Schools TypeScript learning path, and every example is a complete HTML document using the typescript.js CDN for the live editor.

When you practice TypeScript Decorators, do not stop at the emitted JavaScript. Inspect compiler feedback, inference, narrowing, and the difference between types and runtime values.

## Core idea

- `@decorator`: annotation applied to class elements.
- `metadata`: extra information some frameworks attach.
- `experimentalDecorators`: legacy compiler option for older decorator semantics.
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
type Constructor<T = object> = new (...args: any[]) => T;
function tag<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    tag = 'decorators';
  };
}
class BaseLesson {}
const TaggedLesson = tag(BaseLesson);
log(new TaggedLesson().tag);
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
  { syntax: '@decorator', purpose: 'annotation applied to class elements' },
  { syntax: 'metadata', purpose: 'extra information some frameworks attach' },
  { syntax: 'experimentalDecorators', purpose: 'legacy compiler option for older decorator semantics' }
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
  { id: 1, action: 'Read TypeScript Decorators', done: true },
  { id: 2, action: 'Change the TypeScript source', done: false },
  { id: 3, action: 'Compare types with runtime output', done: false },
];
const remaining = steps.filter((step) => !step.done);
log('Practice page:', 'decorators');
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
| `@decorator` | annotation applied to class elements | In TypeScript Decorators, test it with strict mode, invalid input, and emitted JavaScript. |
| `metadata` | extra information some frameworks attach | In TypeScript Decorators, test it with strict mode, invalid input, and emitted JavaScript. |
| `experimentalDecorators` | legacy compiler option for older decorator semantics | In TypeScript Decorators, test it with strict mode, invalid input, and emitted JavaScript. |

## Common mistakes

- Copying TypeScript Decorators without enabling `strict` or checking the real emitted JavaScript.
- Using `any` or assertions to hide uncertain data instead of `unknown`, guards, and validation.
- Forgetting to test `@decorator` with invalid input, null/undefined, and module or DOM boundaries.

## Practice step

Create a file named `decorators.ts`, run the first example, then change one part related to `@decorator`. If compiler feedback or output looks surprising, separate the type annotation from the runtime value.

## Next step

Next, continue with **TypeScript in JavaScript Projects** so the TypeScript learning path builds on this concept.
