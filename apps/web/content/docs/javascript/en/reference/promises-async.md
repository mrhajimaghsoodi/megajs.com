---
title: "Promises and Async Reference"
description: "This page explains Promise states, jobs, async functions, await, rejection handling, and concurrency helpers with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "Promises and Async Reference — MDN-style | MEGA JS Docs"
seoDescription: "Promises and Async Reference (promises async): MDN-style JavaScript reference with syntax tables, HTML examples, runtime behavior, and DOM or Web API notes."
keywords: "JavaScript, Promises and Async Reference, JavaScript Promises and Async Reference, Promises and Async Reference tutorial, promises async"
order: 7
track: reference
sources:
  - name: MDN Web Docs — JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Reference
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
---
# Promises and Async Reference

Promises and Async Reference is an MDN-style JavaScript reference page. It concentrates on Promise states, jobs, async functions, await, rejection handling, and concurrency helpers and favors precise definitions, usage tables, runtime behavior, and DOM or Web API boundaries over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near the JavaScript Guide, JavaScript Reference, built-in object pages, and Web API pages. When using Promises and Async Reference, separate language semantics from host capabilities such as the DOM, fetch, and storage.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `Promise` | represents future completion or failure | Check it in target browsers, DevTools Console, tests, and the real error path. |
| `microtask` | runs after the current task before rendering opportunities | Check it in target browsers, DevTools Console, tests, and the real error path. |
| `async/await` | expresses Promise flow with clearer control structure | Check it in target browsers, DevTools Console, tests, and the real error path. |

## Examples

### Example 1

```html
<article class="reference-card">
  <h2>Promises and Async Reference</h2>
  <dl>
    <dt><code>Promise</code></dt>
    <dd>represents future completion or failure</dd>
    <dt><code>microtask</code></dt>
    <dd>runs after the current task before rendering opportunities</dd>
    <dt><code>async/await</code></dt>
    <dd>expresses Promise flow with clearer control structure</dd>
  </dl>
  <output id="promises-async-count"></output>
</article>
<script>
  const terms = document.querySelectorAll('.reference-card dt');
  document.querySelector('#promises-async-count').value = `${terms.length} JavaScript reference terms loaded`;
</script>
```

### Example 2

```html
<button id="promises-async-load" type="button">Load async data</button>
<output id="promises-async-out"></output>
<script>
  const wait = (value) => new Promise((resolve) => setTimeout(() => resolve(value), 250));
  document.querySelector('#promises-async-load').addEventListener('click', async () => {
    document.querySelector('#promises-async-out').value = 'Loading...';
    const result = await wait('Promise fulfilled');
    document.querySelector('#promises-async-out').value = result;
  });
</script>
```

## Precise authoring notes

- For Promises and Async Reference, keep JavaScript core behavior distinct from host Web APIs.
- If behavior depends on browser support, locale, timezone, or permission state, cover that in UI and tests.
- For critical decisions, compare the relevant MDN page, MDN Reference entry, ECMA-262 text when needed, and a real runtime.

## Conceptual link to MDN

This page aligns with MDN topics around Promises and Async Reference, the JavaScript Reference, browser compatibility, and Web API boundaries before implementation.

## Next step

Continue with **Closures and Scope Reference**.
