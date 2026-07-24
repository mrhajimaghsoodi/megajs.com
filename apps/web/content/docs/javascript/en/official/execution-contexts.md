---
title: "Execution Contexts and Realms"
description: "This page explains execution contexts, realms, lexical environments, environment records, and job execution with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "Execution Contexts and Realms — ECMA-262 Official Summary | MEGA JS Docs"
seoDescription: "Execution Contexts and Realms (execution contexts): ECMA-262 and TC39 JavaScript official summary with semantics, spec algorithms, HTML examples, and runtime."
keywords: "JavaScript, Execution Contexts and Realms, JavaScript Execution Contexts and Realms, Execution Contexts and Realms tutorial, execution contexts"
order: 3
track: official
sources:
  - name: ECMA-262
    url: https://tc39.es/ecma262/
  - name: TC39
    url: https://tc39.es/
---
# Execution Contexts and Realms

Execution Contexts and Realms is a specification-oriented ECMA-262 and TC39 summary. It focuses on execution contexts, realms, lexical environments, environment records, and job execution, not host APIs such as the DOM except when runtime comparison is useful.

## How to read the official text

ECMA-262 defines the ECMAScript language with abstract operations, internal slots, completion records, and precise algorithms. JavaScript in a browser runs that language together with host Web APIs such as the DOM, fetch, and the host event loop.

## Key terms

| Term | Author-facing summary |
| --- | --- |
| `Execution Context` | tracks code evaluation state |
| `Realm` | groups global object, intrinsics, and environment |
| `Lexical Environment` | stores bindings for scope resolution |

## Runnable examples

### Example 1

```html
<section>
  <h2>Execution Contexts and Realms trace</h2>
  <pre id="execution-contexts-trace"></pre>
</section>
<script>
  const trace = [
    'Read source text',
    'Create execution context',
    'Evaluate expression',
    'Return completion record'
  ];
  document.querySelector('#execution-contexts-trace').textContent = trace.join('\n');
</script>
```

### Example 2

```html
<section>
  <h2>Execution Contexts and Realms</h2>
  <p id="execution-contexts-text">execution contexts, realms, lexical environments, environment records, and job execution.</p>
  <output id="execution-contexts-out"></output>
</section>
<script>
  const text = document.querySelector('#execution-contexts-text').textContent;
  document.querySelector('#execution-contexts-out').value =
    `JavaScript handled ${text.length} characters for Execution Contexts and Realms`;
</script>
```

## Spec and runtime notes

- In Execution Contexts and Realms, do not confuse specification terms such as Realm, Job, Environment Record, or Internal Method with DevTools objects directly.
- Whenever ECMA-262 calls into host hooks, final behavior can come from the browser, Node.js, or another embedding runtime.
- For production code, pair the official text with real tests, MDN, and compatibility data.

## Next step

Continue the official track with **Ordinary and Exotic Objects**.
