---
title: "Equality and Comparisons Reference"
description: "This page explains strict equality, SameValue, SameValueZero, Object.is, ordering, and coercion tradeoffs with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "Equality and Comparisons Reference — MDN-style | MEGA JS Docs"
seoDescription: "Equality and Comparisons Reference (equality comparisons): MDN-style JavaScript reference with syntax tables, HTML examples, runtime behavior, and DOM or Web."
keywords: "JavaScript, Equality and Comparisons Reference, JavaScript Equality and Comparisons Reference, Equality and Comparisons Reference tutorial, equality comparisons"
order: 19
track: reference
sources:
  - name: MDN Web Docs — JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Reference
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
---
# Equality and Comparisons Reference

Equality and Comparisons Reference is an MDN-style JavaScript reference page. It concentrates on strict equality, SameValue, SameValueZero, Object.is, ordering, and coercion tradeoffs and favors precise definitions, usage tables, runtime behavior, and DOM or Web API boundaries over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near the JavaScript Guide, JavaScript Reference, built-in object pages, and Web API pages. When using Equality and Comparisons Reference, separate language semantics from host capabilities such as the DOM, fetch, and storage.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `===` | compares without type coercion | Check it in target browsers, DevTools Console, tests, and the real error path. |
| `Object.is()` | uses SameValue semantics | Check it in target browsers, DevTools Console, tests, and the real error path. |
| `truthy/falsy` | describes boolean conversion behavior | Check it in target browsers, DevTools Console, tests, and the real error path. |

## Examples

### Example 1

```html
<article class="reference-card">
  <h2>Equality and Comparisons Reference</h2>
  <dl>
    <dt><code>===</code></dt>
    <dd>compares without type coercion</dd>
    <dt><code>Object.is()</code></dt>
    <dd>uses SameValue semantics</dd>
    <dt><code>truthy/falsy</code></dt>
    <dd>describes boolean conversion behavior</dd>
  </dl>
  <output id="equality-comparisons-count"></output>
</article>
<script>
  const terms = document.querySelectorAll('.reference-card dt');
  document.querySelector('#equality-comparisons-count').value = `${terms.length} JavaScript reference terms loaded`;
</script>
```

### Example 2

```html
<label>
  Search lesson
  <input id="equality-comparisons-query" value="script">
</label>
<output id="equality-comparisons-result"></output>
<script>
  const title = 'JavaScript live editor';
  const query = document.querySelector('#equality-comparisons-query').value.trim();
  const found = title.toLowerCase().includes(query.toLowerCase());
  document.querySelector('#equality-comparisons-result').value =
    `"${query}" found: ${found === true}`;
</script>
```

## Precise authoring notes

- For Equality and Comparisons Reference, keep JavaScript core behavior distinct from host Web APIs.
- If behavior depends on browser support, locale, timezone, or permission state, cover that in UI and tests.
- For critical decisions, compare the relevant MDN page, MDN Reference entry, ECMA-262 text when needed, and a real runtime.

## Conceptual link to MDN

This page aligns with MDN topics around Equality and Comparisons Reference, the JavaScript Reference, browser compatibility, and Web API boundaries before implementation.

## Next step

Continue with **Typed Arrays Reference**.
