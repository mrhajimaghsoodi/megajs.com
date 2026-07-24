---
title: "Map, Set, WeakMap, and WeakSet Reference"
description: "This page explains keyed collections, uniqueness, weak references, garbage collection behavior, and iteration with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "Map, Set, WeakMap, and WeakSet Reference — MDN-style | MEGA JS Docs"
seoDescription: "Map, Set, WeakMap, and WeakSet Reference (map set weak): MDN-style JavaScript reference with syntax tables, HTML examples, runtime behavior, and DOM or Web API."
keywords: "JavaScript, Map, Set, WeakMap, and WeakSet Reference, JavaScript Map, Set, WeakMap, and WeakSet, Map, Set, WeakMap, and WeakSet tutorial, map set weak"
order: 13
track: reference
sources:
  - name: MDN Web Docs — JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Reference
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
---
# Map, Set, WeakMap, and WeakSet Reference

Map, Set, WeakMap, and WeakSet Reference is an MDN-style JavaScript reference page. It concentrates on keyed collections, uniqueness, weak references, garbage collection behavior, and iteration and favors precise definitions, usage tables, runtime behavior, and DOM or Web API boundaries over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near the JavaScript Guide, JavaScript Reference, built-in object pages, and Web API pages. When using Map, Set, WeakMap, and WeakSet Reference, separate language semantics from host capabilities such as the DOM, fetch, and storage.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `Map` | stores key-value entries with arbitrary keys | Check it in target browsers, DevTools Console, tests, and the real error path. |
| `Set` | stores unique values | Check it in target browsers, DevTools Console, tests, and the real error path. |
| `WeakMap` | allows object keys without preventing garbage collection | Check it in target browsers, DevTools Console, tests, and the real error path. |

## Examples

### Example 1

```html
<article class="reference-card">
  <h2>Map, Set, WeakMap, and WeakSet Reference</h2>
  <dl>
    <dt><code>Map</code></dt>
    <dd>stores key-value entries with arbitrary keys</dd>
    <dt><code>Set</code></dt>
    <dd>stores unique values</dd>
    <dt><code>WeakMap</code></dt>
    <dd>allows object keys without preventing garbage collection</dd>
  </dl>
  <output id="map-set-weak-count"></output>
</article>
<script>
  const terms = document.querySelectorAll('.reference-card dt');
  document.querySelector('#map-set-weak-count').value = `${terms.length} JavaScript reference terms loaded`;
</script>
```

### Example 2

```html
<section>
  <h2>Map, Set, WeakMap, and WeakSet Reference</h2>
  <ul id="map-set-weak-list"></ul>
</section>
<script>
  const lessons = ['variables', 'arrays', 'promises', 'DOM'];
  const uniqueLessons = new Set(lessons);
  document.querySelector('#map-set-weak-list').innerHTML =
    [...uniqueLessons].map((lesson) => `<li>${lesson.toUpperCase()}</li>`).join('');
</script>
```

## Precise authoring notes

- For Map, Set, WeakMap, and WeakSet Reference, keep JavaScript core behavior distinct from host Web APIs.
- If behavior depends on browser support, locale, timezone, or permission state, cover that in UI and tests.
- For critical decisions, compare the relevant MDN page, MDN Reference entry, ECMA-262 text when needed, and a real runtime.

## Conceptual link to MDN

This page aligns with MDN topics around Map, Set, WeakMap, and WeakSet Reference, the JavaScript Reference, browser compatibility, and Web API boundaries before implementation.

## Next step

Continue with **RegExp Reference**.
