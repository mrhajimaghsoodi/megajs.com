---
title: "Symbols, BigInt, and Unique Types"
description: "This page explains symbol, unique symbol, bigint, literal numeric types, and runtime support boundaries with TypeScript examples, syntax tables, and practical authoring notes."
seoTitle: "TypeScript Symbols, BigInt, and Unique Types Reference - MDN-style TypeScript | MEGA JS Docs"
seoDescription: "TypeScript Symbols, BigInt, and Unique Types Reference (symbols bigint types): MDN-style TypeScript reference with JavaScript runtime facts, narrowing, DOM."
keywords: "TypeScript, Symbols, BigInt, and Unique Types, TypeScript Symbols, BigInt, and Unique Types, Symbols, BigInt, and Unique Types tutorial, symbols bigint types"
order: 17
track: reference
sources:
  - name: MDN Web Docs - JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Guide - Data types
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures
---
# Symbols, BigInt, and Unique Types

Symbols, BigInt, and Unique Types is an author-focused MDN-style TypeScript reference page. It concentrates on symbol, unique symbol, bigint, literal numeric types, and runtime support boundaries and pairs precise definitions, JavaScript runtime behavior, and TypeScript contracts instead of beginner sequencing.

## Place in the MDN reference

On MDN, JavaScript is documented through primitives, objects, functions, modules, the DOM, and Web APIs. When using Symbols, BigInt, and Unique Types, remember that TypeScript checks types before runtime and then erases them.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `narrowing` | refining a type through runtime evidence | Check runtime behavior in the target browser or Node.js and type behavior under strict mode. |
| `type operator` | operator used in type positions | Check runtime behavior in the target browser or Node.js and type behavior under strict mode. |
| `literal type` | type for one exact value | Check runtime behavior in the target browser or Node.js and type behavior under strict mode. |

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
  { syntax: 'narrowing', meaning: 'refining a type through runtime evidence', source: 'MDN-style' },
  { syntax: 'type operator', meaning: 'operator used in type positions', source: 'MDN-style' },
  { syntax: 'literal type', meaning: 'type for one exact value', source: 'MDN-style' }
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
const Status = {
  Draft: 'draft',
  Published: 'published',
} as const;
type Status = typeof Status[keyof typeof Status];
const current: Status = Status.Published;
log('status:', current);
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

- For Symbols, BigInt, and Unique Types, keep the boundary between real JavaScript values and erased TypeScript types explicit.
- Validate external data such as JSON, DOM, and network input before relying on assertions.
- For critical decisions, compare the relevant MDN page, the TypeScript Handbook, and a real target runtime.

## Conceptual link to MDN

This page aligns with MDN topics around Symbols, BigInt, and Unique Types, JavaScript runtime types, DOM/Web APIs, and browser compatibility before implementation.

## Next step

Continue with **TypeScript MDN-style Cheatsheet**.
