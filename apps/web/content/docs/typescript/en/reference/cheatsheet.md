---
title: "TypeScript MDN-style Cheatsheet"
description: "This page explains a compact review of runtime types, narrowing, declarations, DOM typing, modules, and safe assertions with TypeScript examples, syntax tables, and practical authoring notes."
seoTitle: "TypeScript TypeScript MDN-style Cheatsheet Reference - MDN-style TypeScript | MEGA JS Docs"
seoDescription: "TypeScript TypeScript MDN-style Cheatsheet Reference (cheatsheet): MDN-style TypeScript reference with JavaScript runtime facts, narrowing, DOM typing,."
keywords: "TypeScript, TypeScript MDN-style Cheatsheet, TypeScript MDN-style Cheatsheet, MDN-style Cheatsheet tutorial, cheatsheet"
order: 18
track: reference
sources:
  - name: MDN Web Docs - JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Guide - Data types
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures
---
# TypeScript MDN-style Cheatsheet

TypeScript MDN-style Cheatsheet is an author-focused MDN-style TypeScript reference page. It concentrates on a compact review of runtime types, narrowing, declarations, DOM typing, modules, and safe assertions and pairs precise definitions, JavaScript runtime behavior, and TypeScript contracts instead of beginner sequencing.

## Place in the MDN reference

On MDN, JavaScript is documented through primitives, objects, functions, modules, the DOM, and Web APIs. When using TypeScript MDN-style Cheatsheet, remember that TypeScript checks types before runtime and then erases them.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `TypeScript` | typed JavaScript feature used in TypeScript MDN-style Cheatsheet | Check runtime behavior in the target browser or Node.js and type behavior under strict mode. |
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
  { syntax: 'TypeScript', meaning: 'typed JavaScript feature used in TypeScript MDN-style Cheatsheet', source: 'MDN-style' },
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
type Lesson = {
  title: string;
  track: 'learn' | 'reference' | 'official';
  terms: string[];
};
const lesson: Lesson = {
  title: 'TypeScript MDN-style Cheatsheet',
  track: 'reference',
  terms: ['TypeScript', 'type', 'runtime'],
};
log(lesson.title, lesson.track, lesson.terms.join(', '));
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

- For TypeScript MDN-style Cheatsheet, keep the boundary between real JavaScript values and erased TypeScript types explicit.
- Validate external data such as JSON, DOM, and network input before relying on assertions.
- For critical decisions, compare the relevant MDN page, the TypeScript Handbook, and a real target runtime.

## Conceptual link to MDN

This page aligns with MDN topics around TypeScript MDN-style Cheatsheet, JavaScript runtime types, DOM/Web APIs, and browser compatibility before implementation.

## Next step

After finishing the reference, open the TypeScript Docs official track.
