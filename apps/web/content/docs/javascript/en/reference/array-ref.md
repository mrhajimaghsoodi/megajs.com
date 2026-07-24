---
title: "Array Reference"
description: "This page explains Array construction, indexing, iteration, mutating methods, copying methods, and sparse arrays with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "Array Reference — MDN-style | MEGA JS Docs"
seoDescription: "Array Reference (array ref): MDN-style JavaScript reference with syntax tables, HTML examples, runtime behavior, and DOM or Web API notes with practical drills."
keywords: "JavaScript, Array Reference, JavaScript Array Reference, Array Reference tutorial, array ref"
order: 11
track: reference
sources:
  - name: MDN Web Docs — JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Reference
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
---
# Array Reference

Array Reference is an MDN-style JavaScript reference page. It concentrates on Array construction, indexing, iteration, mutating methods, copying methods, and sparse arrays and favors precise definitions, usage tables, runtime behavior, and DOM or Web API boundaries over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near the JavaScript Guide, JavaScript Reference, built-in object pages, and Web API pages. When using Array Reference, separate language semantics from host capabilities such as the DOM, fetch, and storage.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `Array` | stores ordered values by index | Check it in target browsers, DevTools Console, tests, and the real error path. |
| `map()` | creates a transformed array | Check it in target browsers, DevTools Console, tests, and the real error path. |
| `for...of` | iterates array values | Check it in target browsers, DevTools Console, tests, and the real error path. |

## Examples

### Example 1

```html
<article class="reference-card">
  <h2>Array Reference</h2>
  <dl>
    <dt><code>Array</code></dt>
    <dd>stores ordered values by index</dd>
    <dt><code>map()</code></dt>
    <dd>creates a transformed array</dd>
    <dt><code>for...of</code></dt>
    <dd>iterates array values</dd>
  </dl>
  <output id="array-ref-count"></output>
</article>
<script>
  const terms = document.querySelectorAll('.reference-card dt');
  document.querySelector('#array-ref-count').value = `${terms.length} JavaScript reference terms loaded`;
</script>
```

### Example 2

```html
<section>
  <h2>Array Reference</h2>
  <ul id="array-ref-list"></ul>
</section>
<script>
  const lessons = ['variables', 'arrays', 'promises', 'DOM'];
  const uniqueLessons = new Set(lessons);
  document.querySelector('#array-ref-list').innerHTML =
    [...uniqueLessons].map((lesson) => `<li>${lesson.toUpperCase()}</li>`).join('');
</script>
```

## Precise authoring notes

- For Array Reference, keep JavaScript core behavior distinct from host Web APIs.
- If behavior depends on browser support, locale, timezone, or permission state, cover that in UI and tests.
- For critical decisions, compare the relevant MDN page, MDN Reference entry, ECMA-262 text when needed, and a real runtime.

## Conceptual link to MDN

This page aligns with MDN topics around Array Reference, the JavaScript Reference, browser compatibility, and Web API boundaries before implementation.

## Next step

Continue with **String, Number, and Math Reference**.
