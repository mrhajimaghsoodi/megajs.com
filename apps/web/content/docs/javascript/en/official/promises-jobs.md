---
title: "Promises, Jobs, and Microtasks"
description: "This page explains Promise reaction jobs, job queues, microtasks, host hooks, and async function execution with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "Promises, Jobs, and Microtasks — ECMA-262 Official Summary | MEGA JS Docs"
seoDescription: "Promises, Jobs, and Microtasks (promises jobs): ECMA-262 and TC39 JavaScript official summary with semantics, spec algorithms, HTML examples, and runtime."
keywords: "JavaScript, Promises, Jobs, and Microtasks, JavaScript Promises, Jobs, and Microtasks, Promises, Jobs, and Microtasks tutorial, promises jobs"
order: 6
track: official
sources:
  - name: ECMA-262
    url: https://tc39.es/ecma262/
  - name: TC39
    url: https://tc39.es/
---
# Promises, Jobs, and Microtasks

Promises, Jobs, and Microtasks is a specification-oriented ECMA-262 and TC39 summary. It focuses on Promise reaction jobs, job queues, microtasks, host hooks, and async function execution, not host APIs such as the DOM except when runtime comparison is useful.

## How to read the official text

ECMA-262 defines the ECMAScript language with abstract operations, internal slots, completion records, and precise algorithms. JavaScript in a browser runs that language together with host Web APIs such as the DOM, fetch, and the host event loop.

## Key terms

| Term | Author-facing summary |
| --- | --- |
| `PromiseReactionJob` | runs promise fulfillment or rejection reactions |
| `Job Queue` | holds work scheduled by the language or host |
| `HostEnqueuePromiseJob` | host hook that queues promise jobs |

## Runnable examples

### Example 1

```html
<section>
  <h2>Promises, Jobs, and Microtasks trace</h2>
  <pre id="promises-jobs-trace"></pre>
</section>
<script>
  const trace = [
    'Read source text',
    'Create execution context',
    'Evaluate expression',
    'Return completion record'
  ];
  document.querySelector('#promises-jobs-trace').textContent = trace.join('\n');
</script>
```

### Example 2

```html
<button id="promises-jobs-load" type="button">Load async data</button>
<output id="promises-jobs-out"></output>
<script>
  const wait = (value) => new Promise((resolve) => setTimeout(() => resolve(value), 250));
  document.querySelector('#promises-jobs-load').addEventListener('click', async () => {
    document.querySelector('#promises-jobs-out').value = 'Loading...';
    const result = await wait('Promise fulfilled');
    document.querySelector('#promises-jobs-out').value = result;
  });
</script>
```

## Spec and runtime notes

- In Promises, Jobs, and Microtasks, do not confuse specification terms such as Realm, Job, Environment Record, or Internal Method with DevTools objects directly.
- Whenever ECMA-262 calls into host hooks, final behavior can come from the browser, Node.js, or another embedding runtime.
- For production code, pair the official text with real tests, MDN, and compatibility data.

## Next step

Continue the official track with **ECMAScript Modules in the Spec**.
