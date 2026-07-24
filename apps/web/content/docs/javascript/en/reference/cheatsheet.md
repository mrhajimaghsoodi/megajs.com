---
title: "JavaScript Cheatsheet"
description: "This page explains a compact MDN-style review of syntax, values, arrays, objects, async, DOM, and debugging with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "JavaScript JavaScript Cheatsheet Reference — MDN-style | MEGA JS Docs"
seoDescription: "JavaScript JavaScript Cheatsheet Reference (cheatsheet): MDN-style JavaScript reference with syntax tables, HTML examples, runtime behavior, and DOM or Web API."
keywords: "JavaScript, JavaScript Cheatsheet, JavaScript Cheatsheet, Cheatsheet tutorial, cheatsheet"
order: 23
track: reference
sources:
  - name: MDN Web Docs — JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Reference
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
---
# JavaScript Cheatsheet

JavaScript Cheatsheet is an MDN-style JavaScript reference page. It concentrates on a compact MDN-style review of syntax, values, arrays, objects, async, DOM, and debugging and favors precise definitions, usage tables, runtime behavior, and DOM or Web API boundaries over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near the JavaScript Guide, JavaScript Reference, built-in object pages, and Web API pages. When using JavaScript Cheatsheet, separate language semantics from host capabilities such as the DOM, fetch, and storage.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `JavaScript` | language feature used in JavaScript Cheatsheet | Check it in target browsers, DevTools Console, tests, and the real error path. |
| `runtime` | executes code and reports errors | Check it in target browsers, DevTools Console, tests, and the real error path. |
| `DevTools Console` | checks values while learning | Check it in target browsers, DevTools Console, tests, and the real error path. |

## Examples

### Example 1

```html
<article class="reference-card">
  <h2>JavaScript Cheatsheet</h2>
  <dl>
    <dt><code>JavaScript</code></dt>
    <dd>language feature used in JavaScript Cheatsheet</dd>
    <dt><code>runtime</code></dt>
    <dd>executes code and reports errors</dd>
    <dt><code>DevTools Console</code></dt>
    <dd>checks values while learning</dd>
  </dl>
  <output id="cheatsheet-count"></output>
</article>
<script>
  const terms = document.querySelectorAll('.reference-card dt');
  document.querySelector('#cheatsheet-count').value = `${terms.length} JavaScript reference terms loaded`;
</script>
```

### Example 2

```html
<section>
  <h2>JavaScript Cheatsheet</h2>
  <p id="cheatsheet-text">a compact MDN-style review of syntax, values, arrays, objects, async, DOM, and debugging.</p>
  <output id="cheatsheet-out"></output>
</section>
<script>
  const text = document.querySelector('#cheatsheet-text').textContent;
  document.querySelector('#cheatsheet-out').value =
    `JavaScript handled ${text.length} characters for JavaScript Cheatsheet`;
</script>
```

## Precise authoring notes

- For JavaScript Cheatsheet, keep JavaScript core behavior distinct from host Web APIs.
- If behavior depends on browser support, locale, timezone, or permission state, cover that in UI and tests.
- For critical decisions, compare the relevant MDN page, MDN Reference entry, ECMA-262 text when needed, and a real runtime.

## Conceptual link to MDN

This page aligns with MDN topics around JavaScript Cheatsheet, the JavaScript Reference, browser compatibility, and Web API boundaries before implementation.

## Next step

After finishing the reference, open the official track for specification-oriented summaries.
