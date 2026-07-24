---
title: "TypeScript in JavaScript Projects"
description: "This page explains checking JavaScript with allowJs, checkJs, and JSDoc types with TypeScript examples, syntax tables, and practical authoring notes."
seoTitle: "TypeScript in JavaScript Projects Tutorial - W3Schools-style | MEGA JS Docs"
seoDescription: "Learn TypeScript in JavaScript Projects (in js projects) with live HTML using typescript.js CDN, W3Schools practice, types, interfaces, generics, and compiler."
keywords: "TypeScript, TypeScript in JavaScript Projects, TypeScript in JavaScript Projects, in JavaScript Projects tutorial, in js projects"
order: 42
track: learn
sources:
  - name: W3Schools TypeScript Tutorial
    url: https://www.w3schools.com/typescript/index.php
---
# TypeScript in JavaScript Projects

TypeScript in JavaScript Projects focuses on checking JavaScript with allowJs, checkJs, and JSDoc types. This is an educational rewrite inspired by the W3Schools TypeScript learning path, and every example is a complete HTML document using the typescript.js CDN for the live editor.

When you practice TypeScript in JavaScript Projects, do not stop at the emitted JavaScript. Inspect compiler feedback, inference, narrowing, and the difference between types and runtime values.

## Core idea

- `allowJs`: includes JavaScript files in the project.
- `checkJs`: reports type errors in JavaScript files.
- `@typedef`: JSDoc declaration for a reusable type.
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
type CompilerMode = 'check' | 'emit' | 'build';
const options: { strict: boolean; mode: CompilerMode; target: string } = {
  strict: true,
  mode: 'check',
  target: 'ES2020',
};
log('strict:', options.strict, 'mode:', options.mode, 'target:', options.target);
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
  { syntax: 'allowJs', purpose: 'includes JavaScript files in the project' },
  { syntax: 'checkJs', purpose: 'reports type errors in JavaScript files' },
  { syntax: '@typedef', purpose: 'JSDoc declaration for a reusable type' }
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
  { id: 1, action: 'Read TypeScript in JavaScript Projects', done: true },
  { id: 2, action: 'Change the TypeScript source', done: false },
  { id: 3, action: 'Compare types with runtime output', done: false },
];
const remaining = steps.filter((step) => !step.done);
log('Practice page:', 'in-js-projects');
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
| `allowJs` | includes JavaScript files in the project | In TypeScript in JavaScript Projects, test it with strict mode, invalid input, and emitted JavaScript. |
| `checkJs` | reports type errors in JavaScript files | In TypeScript in JavaScript Projects, test it with strict mode, invalid input, and emitted JavaScript. |
| `@typedef` | JSDoc declaration for a reusable type | In TypeScript in JavaScript Projects, test it with strict mode, invalid input, and emitted JavaScript. |

## Common mistakes

- Copying TypeScript in JavaScript Projects without enabling `strict` or checking the real emitted JavaScript.
- Using `any` or assertions to hide uncertain data instead of `unknown`, guards, and validation.
- Forgetting to test `allowJs` with invalid input, null/undefined, and module or DOM boundaries.

## Practice step

Create a file named `in-js-projects.ts`, run the first example, then change one part related to `allowJs`. If compiler feedback or output looks surprising, separate the type annotation from the runtime value.

## Next step

Next, continue with **TypeScript Migration** so the TypeScript learning path builds on this concept.
