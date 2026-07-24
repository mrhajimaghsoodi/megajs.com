---
title: "OOP and Generics"
description: "This page explains typing classes, reusable generic helpers, utility types, keyof, and nullability with TypeScript examples, syntax tables, and practical authoring notes."
seoTitle: "OOP and Generics Tutorial - W3Schools-style | MEGA JS Docs"
seoDescription: "Learn OOP and Generics (oop generics) with live HTML using typescript.js CDN, W3Schools practice, types, interfaces, generics, and compiler guidance."
keywords: "TypeScript, OOP and Generics, TypeScript oop-generics, OOP and Generics tutorial"
order: 17
track: learn
sources:
  - name: W3Schools TypeScript Tutorial
    url: https://www.w3schools.com/typescript/index.php
---
# OOP and Generics

OOP and Generics focuses on typing classes, reusable generic helpers, utility types, keyof, and nullability. This is an educational rewrite inspired by the W3Schools TypeScript learning path, and every example is a complete HTML document using the typescript.js CDN for the live editor.

When you practice OOP and Generics, do not stop at the emitted JavaScript. Inspect compiler feedback, inference, narrowing, and the difference between types and runtime values.

## Core idea

- `class`: runtime constructor with static checking.
- `generics`: reusable types with parameters.
- `keyof`: operator that returns property-name unions.
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
  { syntax: 'class', purpose: 'runtime constructor with static checking' },
  { syntax: 'generics', purpose: 'reusable types with parameters' },
  { syntax: 'keyof', purpose: 'operator that returns property-name unions' }
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
  { id: 1, action: 'Read OOP and Generics', done: true },
  { id: 2, action: 'Change the TypeScript source', done: false },
  { id: 3, action: 'Compare types with runtime output', done: false },
];
const remaining = steps.filter((step) => !step.done);
log('Practice page:', 'oop-generics');
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
| `class` | runtime constructor with static checking | In OOP and Generics, test it with strict mode, invalid input, and emitted JavaScript. |
| `generics` | reusable types with parameters | In OOP and Generics, test it with strict mode, invalid input, and emitted JavaScript. |
| `keyof` | operator that returns property-name unions | In OOP and Generics, test it with strict mode, invalid input, and emitted JavaScript. |

## Common mistakes

- Copying OOP and Generics without enabling `strict` or checking the real emitted JavaScript.
- Using `any` or assertions to hide uncertain data instead of `unknown`, guards, and validation.
- Forgetting to test `class` with invalid input, null/undefined, and module or DOM boundaries.

## Practice step

Create a file named `oop-generics.ts`, run the first example, then change one part related to `class`. If compiler feedback or output looks surprising, separate the type annotation from the runtime value.

## Next step

Next, continue with **TypeScript Classes** so the TypeScript learning path builds on this concept.
