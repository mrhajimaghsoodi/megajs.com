---
title: "Iterators and Generators Reference"
description: "This page explains iterable protocol, iterator protocol, generator functions, yield, and custom iteration with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "Iterators and Generators Reference — MDN-style | MEGA JS Docs"
seoDescription: "Iterators and Generators Reference (iterators generators): MDN-style JavaScript reference with syntax tables, HTML examples, runtime behavior, and DOM or Web."
keywords: "JavaScript, Iterators and Generators Reference, JavaScript Iterators and Generators Reference, Iterators and Generators Reference tutorial, iterators generators"
order: 17
track: reference
sources:
  - name: MDN Web Docs — JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Reference
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
---
# Iterators and Generators Reference

Iterators and Generators Reference is an MDN-style JavaScript reference page. It concentrates on iterable protocol, iterator protocol, generator functions, yield, and custom iteration and favors precise definitions, usage tables, runtime behavior, and DOM or Web API boundaries over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near the JavaScript Guide, JavaScript Reference, built-in object pages, and Web API pages. When using Iterators and Generators Reference, separate language semantics from host capabilities such as the DOM, fetch, and storage.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `JavaScript` | language feature used in Iterators and Generators Reference | Check it in target browsers, DevTools Console, tests, and the real error path. |
| `runtime` | executes code and reports errors | Check it in target browsers, DevTools Console, tests, and the real error path. |
| `DevTools Console` | checks values while learning | Check it in target browsers, DevTools Console, tests, and the real error path. |

## Examples

### Example 1

```html
<article class="reference-card">
  <h2>Iterators and Generators Reference</h2>
  <dl>
    <dt><code>JavaScript</code></dt>
    <dd>language feature used in Iterators and Generators Reference</dd>
    <dt><code>runtime</code></dt>
    <dd>executes code and reports errors</dd>
    <dt><code>DevTools Console</code></dt>
    <dd>checks values while learning</dd>
  </dl>
  <output id="iterators-generators-count"></output>
</article>
<script>
  const terms = document.querySelectorAll('.reference-card dt');
  document.querySelector('#iterators-generators-count').value = `${terms.length} JavaScript reference terms loaded`;
</script>
```

### Example 2

```html
<section>
  <h2>Iterators and Generators Reference</h2>
  <ul id="iterators-generators-list"></ul>
</section>
<script>
  const lessons = ['variables', 'arrays', 'promises', 'DOM'];
  const uniqueLessons = new Set(lessons);
  document.querySelector('#iterators-generators-list').innerHTML =
    [...uniqueLessons].map((lesson) => `<li>${lesson.toUpperCase()}</li>`).join('');
</script>
```

## Precise authoring notes

- For Iterators and Generators Reference, keep JavaScript core behavior distinct from host Web APIs.
- If behavior depends on browser support, locale, timezone, or permission state, cover that in UI and tests.
- For critical decisions, compare the relevant MDN page, MDN Reference entry, ECMA-262 text when needed, and a real runtime.

## Conceptual link to MDN

This page aligns with MDN topics around Iterators and Generators Reference, the JavaScript Reference, browser compatibility, and Web API boundaries before implementation.

## Next step

Continue with **Memory and Garbage Collection**.
