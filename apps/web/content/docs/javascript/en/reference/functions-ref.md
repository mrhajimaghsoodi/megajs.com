---
title: "Functions Reference"
description: "This page explains function declarations, expressions, parameters, return values, closures, rest, spread, and call behavior with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "Functions Reference — MDN-style | MEGA JS Docs"
seoDescription: "Functions Reference (functions ref): MDN-style JavaScript reference with syntax tables, HTML examples, runtime behavior, and DOM or Web API notes."
keywords: "JavaScript, Functions Reference, JavaScript Functions Reference, Functions Reference tutorial, functions ref"
order: 5
track: reference
sources:
  - name: MDN Web Docs — JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Reference
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
---
# Functions Reference

Functions Reference is an MDN-style JavaScript reference page. It concentrates on function declarations, expressions, parameters, return values, closures, rest, spread, and call behavior and favors precise definitions, usage tables, runtime behavior, and DOM or Web API boundaries over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near the JavaScript Guide, JavaScript Reference, built-in object pages, and Web API pages. When using Functions Reference, separate language semantics from host capabilities such as the DOM, fetch, and storage.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `JavaScript` | language feature used in Functions Reference | Check it in target browsers, DevTools Console, tests, and the real error path. |
| `runtime` | executes code and reports errors | Check it in target browsers, DevTools Console, tests, and the real error path. |
| `DevTools Console` | checks values while learning | Check it in target browsers, DevTools Console, tests, and the real error path. |

## Examples

### Example 1

```html
<article class="reference-card">
  <h2>Functions Reference</h2>
  <dl>
    <dt><code>JavaScript</code></dt>
    <dd>language feature used in Functions Reference</dd>
    <dt><code>runtime</code></dt>
    <dd>executes code and reports errors</dd>
    <dt><code>DevTools Console</code></dt>
    <dd>checks values while learning</dd>
  </dl>
  <output id="functions-ref-count"></output>
</article>
<script>
  const terms = document.querySelectorAll('.reference-card dt');
  document.querySelector('#functions-ref-count').value = `${terms.length} JavaScript reference terms loaded`;
</script>
```

### Example 2

```html
<button id="functions-ref-button" type="button">Count clicks</button>
<output id="functions-ref-out"></output>
<script>
  function createCounter() {
    let count = 0;
    return () => {
      count += 1;
      return count;
    };
  }
  const nextCount = createCounter();
  document.querySelector('#functions-ref-button').addEventListener('click', () => {
    document.querySelector('#functions-ref-out').value = `Clicked ${nextCount()} time(s)`;
  });
</script>
```

## Precise authoring notes

- For Functions Reference, keep JavaScript core behavior distinct from host Web APIs.
- If behavior depends on browser support, locale, timezone, or permission state, cover that in UI and tests.
- For critical decisions, compare the relevant MDN page, MDN Reference entry, ECMA-262 text when needed, and a real runtime.

## Conceptual link to MDN

This page aligns with MDN topics around Functions Reference, the JavaScript Reference, browser compatibility, and Web API boundaries before implementation.

## Next step

Continue with **Classes Reference**.
