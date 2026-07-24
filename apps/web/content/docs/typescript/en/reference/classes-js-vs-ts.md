---
title: "Classes in JavaScript vs TypeScript"
description: "This page explains class fields, constructors, visibility modifiers, implements clauses, and emitted JavaScript with TypeScript examples, syntax tables, and practical authoring notes."
seoTitle: "TypeScript Classes in JavaScript vs TypeScript Reference - MDN-style TypeScript | MEGA JS Docs"
seoDescription: "TypeScript Classes in JavaScript vs TypeScript Reference (classes js vs ts): MDN-style TypeScript reference with JavaScript runtime facts, narrowing, DOM."
keywords: "TypeScript, Classes in JavaScript vs TypeScript, TypeScript Classes in JavaScript vs TypeScript, Classes in JavaScript vs TypeScript tutorial, classes js vs ts"
order: 8
track: reference
sources:
  - name: MDN Web Docs - JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Guide - Data types
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures
---
# Classes in JavaScript vs TypeScript

Classes in JavaScript vs TypeScript is an author-focused MDN-style TypeScript reference page. It concentrates on class fields, constructors, visibility modifiers, implements clauses, and emitted JavaScript and pairs precise definitions, JavaScript runtime behavior, and TypeScript contracts instead of beginner sequencing.

## Place in the MDN reference

On MDN, JavaScript is documented through primitives, objects, functions, modules, the DOM, and Web APIs. When using Classes in JavaScript vs TypeScript, remember that TypeScript checks types before runtime and then erases them.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `structural typing` | compatibility by shape | Check runtime behavior in the target browser or Node.js and type behavior under strict mode. |
| `prototype` | runtime inheritance object | Check runtime behavior in the target browser or Node.js and type behavior under strict mode. |
| `interface` | static object contract | Check runtime behavior in the target browser or Node.js and type behavior under strict mode. |

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
  { syntax: 'structural typing', meaning: 'compatibility by shape', source: 'MDN-style' },
  { syntax: 'prototype', meaning: 'runtime inheritance object', source: 'MDN-style' },
  { syntax: 'interface', meaning: 'static object contract', source: 'MDN-style' }
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
interface Printable {
  label(): string;
}
class LessonCard implements Printable {
  constructor(private title: string, public level: 'basic' | 'advanced') {}
  label(): string {
    return this.title + ' is ' + this.level;
  }
}
log(new LessonCard('Classes in JavaScript vs TypeScript', 'advanced').label());
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

- For Classes in JavaScript vs TypeScript, keep the boundary between real JavaScript values and erased TypeScript types explicit.
- Validate external data such as JSON, DOM, and network input before relying on assertions.
- For critical decisions, compare the relevant MDN page, the TypeScript Handbook, and a real target runtime.

## Conceptual link to MDN

This page aligns with MDN topics around Classes in JavaScript vs TypeScript, JavaScript runtime types, DOM/Web APIs, and browser compatibility before implementation.

## Next step

Continue with **ES Modules and TypeScript**.
