---
title: "Equality, Coercion, and Types"
description: "This page explains strict equality, coercion boundaries, literal unions, and type-safe comparisons with TypeScript examples, syntax tables, and practical authoring notes."
seoTitle: "TypeScript Equality, Coercion, and Types Reference - MDN-style TypeScript | MEGA JS Docs"
seoDescription: "TypeScript Equality, Coercion, and Types Reference (equality coercion): MDN-style TypeScript reference with JavaScript runtime facts, narrowing, DOM typing."
keywords: "TypeScript, Equality, Coercion, and Types, TypeScript Equality, Coercion, and Types, Equality, Coercion, and Types tutorial, equality coercion"
order: 5
track: reference
sources:
  - name: MDN Web Docs - JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Guide - Data types
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures
---
# Equality, Coercion, and Types

Equality, Coercion, and Types is an author-focused MDN-style TypeScript reference page. It concentrates on strict equality, coercion boundaries, literal unions, and type-safe comparisons and pairs precise definitions, JavaScript runtime behavior, and TypeScript contracts instead of beginner sequencing.

## Place in the MDN reference

On MDN, JavaScript is documented through primitives, objects, functions, modules, the DOM, and Web APIs. When using Equality, Coercion, and Types, remember that TypeScript checks types before runtime and then erases them.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `TypeScript` | typed JavaScript feature used in Equality, Coercion, and Types | Check runtime behavior in the target browser or Node.js and type behavior under strict mode. |
| `type` | static description checked before runtime | Check runtime behavior in the target browser or Node.js and type behavior under strict mode. |
| `runtime` | JavaScript behavior after TypeScript is erased | Check runtime behavior in the target browser or Node.js and type behavior under strict mode. |

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
  { syntax: 'TypeScript', meaning: 'typed JavaScript feature used in Equality, Coercion, and Types', source: 'MDN-style' },
  { syntax: 'type', meaning: 'static description checked before runtime', source: 'MDN-style' },
  { syntax: 'runtime', meaning: 'JavaScript behavior after TypeScript is erased', source: 'MDN-style' }
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

## Precise authoring notes

- For Equality, Coercion, and Types, keep the boundary between real JavaScript values and erased TypeScript types explicit.
- Validate external data such as JSON, DOM, and network input before relying on assertions.
- For critical decisions, compare the relevant MDN page, the TypeScript Handbook, and a real target runtime.

## Conceptual link to MDN

This page aligns with MDN topics around Equality, Coercion, and Types, JavaScript runtime types, DOM/Web APIs, and browser compatibility before implementation.

## Next step

Continue with **Objects, Prototypes, and Static Types**.
