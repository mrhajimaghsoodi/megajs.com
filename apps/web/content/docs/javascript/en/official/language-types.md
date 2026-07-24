---
title: "ECMAScript Language Types"
description: "This page explains ECMAScript language values, specification types, primitives, objects, and completion records with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "ECMAScript Language Types — ECMA-262 Official Summary | MEGA JS Docs"
seoDescription: "ECMAScript Language Types (language types): ECMA-262 and TC39 JavaScript official summary with semantics, spec algorithms, HTML examples, and runtime guidance."
keywords: "JavaScript, ECMAScript Language Types, JavaScript ECMAScript Language Types, ECMAScript Language Types tutorial, language types"
order: 2
track: official
sources:
  - name: ECMA-262
    url: https://tc39.es/ecma262/
  - name: TC39
    url: https://tc39.es/
---
# ECMAScript Language Types

ECMAScript Language Types is a specification-oriented ECMA-262 and TC39 summary. It focuses on ECMAScript language values, specification types, primitives, objects, and completion records, not host APIs such as the DOM except when runtime comparison is useful.

## How to read the official text

ECMA-262 defines the ECMAScript language with abstract operations, internal slots, completion records, and precise algorithms. JavaScript in a browser runs that language together with host Web APIs such as the DOM, fetch, and the host event loop.

## Key terms

| Term | Author-facing summary |
| --- | --- |
| `ECMAScript Language Type` | a runtime value category such as Undefined, Number, BigInt, String, Symbol, or Object |
| `Specification Type` | a spec-only record used to define algorithms |
| `Completion Record` | wraps normal, throw, return, break, or continue completion |

## Runnable examples

### Example 1

```html
<section>
  <h2>ECMAScript Language Types trace</h2>
  <pre id="language-types-trace"></pre>
</section>
<script>
  const trace = [
    'Read source text',
    'Create execution context',
    'Evaluate expression',
    'Return completion record'
  ];
  document.querySelector('#language-types-trace').textContent = trace.join('\n');
</script>
```

### Example 2

```html
<section>
  <h2>ECMAScript Language Types</h2>
  <output id="language-types-out"></output>
</section>
<script>
  const profile = { name: 'Ada', lessons: 3 };
  let status = profile.lessons >= 3 ? 'ready' : 'learning';
  document.querySelector('#language-types-out').value =
    `${profile.name} is ${status}; type is ${typeof profile.lessons}`;
</script>
```

## Spec and runtime notes

- In ECMAScript Language Types, do not confuse specification terms such as Realm, Job, Environment Record, or Internal Method with DevTools objects directly.
- Whenever ECMA-262 calls into host hooks, final behavior can come from the browser, Node.js, or another embedding runtime.
- For production code, pair the official text with real tests, MDN, and compatibility data.

## Next step

Continue the official track with **Execution Contexts and Realms**.
