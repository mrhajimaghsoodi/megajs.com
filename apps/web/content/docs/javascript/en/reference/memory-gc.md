---
title: "Memory and Garbage Collection"
description: "This page explains reachability, closures, weak collections, detached DOM, leaks, and profiling in DevTools with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "JavaScript Memory and Garbage Collection Reference — MDN-style | MEGA JS Docs"
seoDescription: "JavaScript Memory and Garbage Collection Reference (memory gc): MDN-style JavaScript reference with syntax tables, HTML examples, runtime behavior, and DOM."
keywords: "JavaScript, Memory and Garbage Collection, JavaScript Memory and Garbage Collection, Memory and Garbage Collection tutorial, memory gc"
order: 18
track: reference
sources:
  - name: MDN Web Docs — JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Reference
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
---
# Memory and Garbage Collection

Memory and Garbage Collection is an MDN-style JavaScript reference page. It concentrates on reachability, closures, weak collections, detached DOM, leaks, and profiling in DevTools and favors precise definitions, usage tables, runtime behavior, and DOM or Web API boundaries over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near the JavaScript Guide, JavaScript Reference, built-in object pages, and Web API pages. When using Memory and Garbage Collection, separate language semantics from host capabilities such as the DOM, fetch, and storage.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `JavaScript` | language feature used in Memory and Garbage Collection | Check it in target browsers, DevTools Console, tests, and the real error path. |
| `runtime` | executes code and reports errors | Check it in target browsers, DevTools Console, tests, and the real error path. |
| `DevTools Console` | checks values while learning | Check it in target browsers, DevTools Console, tests, and the real error path. |

## Examples

### Example 1

```html
<article class="reference-card">
  <h2>Memory and Garbage Collection</h2>
  <dl>
    <dt><code>JavaScript</code></dt>
    <dd>language feature used in Memory and Garbage Collection</dd>
    <dt><code>runtime</code></dt>
    <dd>executes code and reports errors</dd>
    <dt><code>DevTools Console</code></dt>
    <dd>checks values while learning</dd>
  </dl>
  <output id="memory-gc-count"></output>
</article>
<script>
  const terms = document.querySelectorAll('.reference-card dt');
  document.querySelector('#memory-gc-count').value = `${terms.length} JavaScript reference terms loaded`;
</script>
```

### Example 2

```html
<button id="memory-gc-measure" type="button">Measure loop</button>
<output id="memory-gc-out"></output>
<script>
  document.querySelector('#memory-gc-measure').addEventListener('click', () => {
    const start = performance.now();
    const values = Array.from({ length: 1000 }, (_, index) => index * 2);
    const end = performance.now();
    document.querySelector('#memory-gc-out').value =
      `Created ${values.length} values in ${(end - start).toFixed(2)} ms`;
  });
</script>
```

## Precise authoring notes

- For Memory and Garbage Collection, keep JavaScript core behavior distinct from host Web APIs.
- If behavior depends on browser support, locale, timezone, or permission state, cover that in UI and tests.
- For critical decisions, compare the relevant MDN page, MDN Reference entry, ECMA-262 text when needed, and a real runtime.

## Conceptual link to MDN

This page aligns with MDN topics around Memory and Garbage Collection, the JavaScript Reference, browser compatibility, and Web API boundaries before implementation.

## Next step

Continue with **Equality and Comparisons Reference**.
