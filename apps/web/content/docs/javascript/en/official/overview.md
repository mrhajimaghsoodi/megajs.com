---
title: "ECMA-262 Overview"
description: "This page explains how the ECMAScript specification defines JavaScript language semantics apart from browser Web APIs with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "ECMA-262 Overview — ECMA-262 Official Summary | MEGA JS Docs"
seoDescription: "ECMA-262 Overview (overview): ECMA-262 and TC39 JavaScript official summary with semantics, spec algorithms, HTML examples, and runtime guidance."
keywords: "JavaScript, ECMA-262 Overview, ECMA-262, ECMAScript spec, TC39 JavaScript"
order: 1
track: official
sources:
  - name: ECMA-262
    url: https://tc39.es/ecma262/
  - name: TC39
    url: https://tc39.es/
---
# ECMA-262 Overview

ECMA-262 Overview is a specification-oriented ECMA-262 and TC39 summary. It focuses on how the ECMAScript specification defines JavaScript language semantics apart from browser Web APIs, not host APIs such as the DOM except when runtime comparison is useful.

## How to read the official text

ECMA-262 defines the ECMAScript language with abstract operations, internal slots, completion records, and precise algorithms. JavaScript in a browser runs that language together with host Web APIs such as the DOM, fetch, and the host event loop.

## Key terms

| Term | Author-facing summary |
| --- | --- |
| `JavaScript` | language feature used in ECMA-262 Overview |
| `runtime` | executes code and reports errors |
| `DevTools Console` | checks values while learning |

## Runnable examples

### Example 1

```html
<section>
  <h2>ECMA-262 Overview trace</h2>
  <pre id="overview-trace"></pre>
</section>
<script>
  const trace = [
    'Read source text',
    'Create execution context',
    'Evaluate expression',
    'Return completion record'
  ];
  document.querySelector('#overview-trace').textContent = trace.join('\n');
</script>
```

### Example 2

```html
<section>
  <h2>ECMA-262 Overview</h2>
  <p id="overview-text">how the ECMAScript specification defines JavaScript language semantics apart from browser Web APIs.</p>
  <output id="overview-out"></output>
</section>
<script>
  const text = document.querySelector('#overview-text').textContent;
  document.querySelector('#overview-out').value =
    `JavaScript handled ${text.length} characters for ECMA-262 Overview`;
</script>
```

## Spec and runtime notes

- In ECMA-262 Overview, do not confuse specification terms such as Realm, Job, Environment Record, or Internal Method with DevTools objects directly.
- Whenever ECMA-262 calls into host hooks, final behavior can come from the browser, Node.js, or another embedding runtime.
- For production code, pair the official text with real tests, MDN, and compatibility data.

## Next step

Continue the official track with **ECMAScript Language Types**.
