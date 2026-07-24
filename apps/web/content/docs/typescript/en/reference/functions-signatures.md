---
title: "Function Signatures Reference"
description: "This page explains call signatures, callbacks, optional parameters, overloads, this parameters, and return types with TypeScript examples, syntax tables, and practical authoring notes."
seoTitle: "Function Signatures Reference - MDN-style TypeScript | MEGA JS Docs"
seoDescription: "Function Signatures Reference (functions signatures): MDN-style TypeScript reference with JavaScript runtime facts, narrowing, DOM typing, and compiler."
keywords: "TypeScript, Function Signatures Reference, TypeScript Function Signatures Reference, Function Signatures Reference tutorial, functions signatures"
order: 7
track: reference
sources:
  - name: MDN Web Docs - JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Guide - Data types
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures
---
# Function Signatures Reference

Function Signatures Reference is an author-focused MDN-style TypeScript reference page. It concentrates on call signatures, callbacks, optional parameters, overloads, this parameters, and return types and pairs precise definitions, JavaScript runtime behavior, and TypeScript contracts instead of beginner sequencing.

## Place in the MDN reference

On MDN, JavaScript is documented through primitives, objects, functions, modules, the DOM, and Web APIs. When using Function Signatures Reference, remember that TypeScript checks types before runtime and then erases them.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `call signature` | type shape of a callable value | Check runtime behavior in the target browser or Node.js and type behavior under strict mode. |
| `return type` | type produced by a function | Check runtime behavior in the target browser or Node.js and type behavior under strict mode. |
| `overload` | multiple signatures for one implementation | Check runtime behavior in the target browser or Node.js and type behavior under strict mode. |

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
  { syntax: 'call signature', meaning: 'type shape of a callable value', source: 'MDN-style' },
  { syntax: 'return type', meaning: 'type produced by a function', source: 'MDN-style' },
  { syntax: 'overload', meaning: 'multiple signatures for one implementation', source: 'MDN-style' }
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
type Formatter<T> = (value: T) => string;
const formatNumber: Formatter<number> = (value) => value.toFixed(2);
function label<T>(name: string, value: T, format: Formatter<T>): string {
  return name + ': ' + format(value);
}
log(label('score', 98.126, formatNumber));
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

- For Function Signatures Reference, keep the boundary between real JavaScript values and erased TypeScript types explicit.
- Validate external data such as JSON, DOM, and network input before relying on assertions.
- For critical decisions, compare the relevant MDN page, the TypeScript Handbook, and a real target runtime.

## Conceptual link to MDN

This page aligns with MDN topics around Function Signatures Reference, JavaScript runtime types, DOM/Web APIs, and browser compatibility before implementation.

## Next step

Continue with **Classes in JavaScript vs TypeScript**.
