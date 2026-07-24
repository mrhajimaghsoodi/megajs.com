---
title: "ECMAScript Modules in the Spec"
description: "This page explains module records, import/export resolution, linking, evaluation, and top-level await with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "ECMAScript Modules in the Spec — ECMA-262 Official Summary | MEGA JS Docs"
seoDescription: "ECMAScript Modules in the Spec (modules spec): ECMA-262 and TC39 JavaScript official summary with semantics, spec algorithms, HTML examples, and runtime."
keywords: "JavaScript, ECMAScript Modules in the Spec, JavaScript ECMAScript Modules in the Spec, ECMAScript Modules in the Spec tutorial, modules spec"
order: 7
track: official
sources:
  - name: ECMA-262
    url: https://tc39.es/ecma262/
  - name: TC39
    url: https://tc39.es/
---
# ECMAScript Modules in the Spec

ECMAScript Modules in the Spec is a specification-oriented ECMA-262 and TC39 summary. It focuses on module records, import/export resolution, linking, evaluation, and top-level await, not host APIs such as the DOM except when runtime comparison is useful.

## How to read the official text

ECMA-262 defines the ECMAScript language with abstract operations, internal slots, completion records, and precise algorithms. JavaScript in a browser runs that language together with host Web APIs such as the DOM, fetch, and the host event loop.

## Key terms

| Term | Author-facing summary |
| --- | --- |
| `Source Text Module Record` | spec record for an ECMAScript module |
| `Link` | resolves and connects module dependencies before evaluation |
| `Evaluate` | runs module body code after linking |

## Runnable examples

### Example 1

```html
<section>
  <h2>ECMAScript Modules in the Spec trace</h2>
  <pre id="modules-spec-trace"></pre>
</section>
<script>
  const trace = [
    'Read source text',
    'Create execution context',
    'Evaluate expression',
    'Return completion record'
  ];
  document.querySelector('#modules-spec-trace').textContent = trace.join('\n');
</script>
```

### Example 2

```html
<output id="modules-spec-out"></output>
<script type="module">
  const moduleName = 'ECMAScript Modules in the Spec';
  const format = (value) => `Module scope: ${value}`;
  document.querySelector('#modules-spec-out').value = format(moduleName);
</script>
```

## Spec and runtime notes

- In ECMAScript Modules in the Spec, do not confuse specification terms such as Realm, Job, Environment Record, or Internal Method with DevTools objects directly.
- Whenever ECMA-262 calls into host hooks, final behavior can come from the browser, Node.js, or another embedding runtime.
- For production code, pair the official text with real tests, MDN, and compatibility data.

## Next step

Continue the official track with **Lexical and Syntactic Grammar**.
