---
title: "ES Modules and TypeScript"
description: "This page explains import/export forms, type-only imports, module resolution, and browser or bundler behavior with TypeScript examples, syntax tables, and practical authoring notes."
seoTitle: "TypeScript ES Modules and TypeScript Reference - MDN-style TypeScript | MEGA JS Docs"
seoDescription: "TypeScript ES Modules and TypeScript Reference (modules esm): MDN-style TypeScript reference with JavaScript runtime facts, narrowing, DOM typing, and compiler."
keywords: "TypeScript, ES Modules and TypeScript, TypeScript ES Modules and TypeScript, ES Modules and TypeScript tutorial, modules esm"
order: 9
track: reference
sources:
  - name: MDN Web Docs - JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Guide - Data types
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures
---
# ES Modules and TypeScript

ES Modules and TypeScript is an author-focused MDN-style TypeScript reference page. It concentrates on import/export forms, type-only imports, module resolution, and browser or bundler behavior and pairs precise definitions, JavaScript runtime behavior, and TypeScript contracts instead of beginner sequencing.

## Place in the MDN reference

On MDN, JavaScript is documented through primitives, objects, functions, modules, the DOM, and Web APIs. When using ES Modules and TypeScript, remember that TypeScript checks types before runtime and then erases them.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `import type` | imports only a type | Check runtime behavior in the target browser or Node.js and type behavior under strict mode. |
| `moduleResolution` | rules for finding module files | Check runtime behavior in the target browser or Node.js and type behavior under strict mode. |
| `ESM` | standard JavaScript module system | Check runtime behavior in the target browser or Node.js and type behavior under strict mode. |

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
  { syntax: 'import type', meaning: 'imports only a type', source: 'MDN-style' },
  { syntax: 'moduleResolution', meaning: 'rules for finding module files', source: 'MDN-style' },
  { syntax: 'ESM', meaning: 'standard JavaScript module system', source: 'MDN-style' }
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
type ModuleInfo = { mode: 'ESM' | 'CommonJS'; typeOnlyImports: boolean };
const info: ModuleInfo = { mode: 'ESM', typeOnlyImports: true };
log('Module mode:', info.mode);
log('Uses import type:', info.typeOnlyImports);
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

- For ES Modules and TypeScript, keep the boundary between real JavaScript values and erased TypeScript types explicit.
- Validate external data such as JSON, DOM, and network input before relying on assertions.
- For critical decisions, compare the relevant MDN page, the TypeScript Handbook, and a real target runtime.

## Conceptual link to MDN

This page aligns with MDN topics around ES Modules and TypeScript, JavaScript runtime types, DOM/Web APIs, and browser compatibility before implementation.

## Next step

Continue with **Iterators, Iterables, and Typed Collections**.
