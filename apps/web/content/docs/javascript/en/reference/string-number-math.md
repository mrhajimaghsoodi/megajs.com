---
title: "String, Number, and Math Reference"
description: "This page explains text APIs, numeric parsing, formatting, rounding, NaN checks, and Math utilities with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "String, Number, and Math Reference — MDN-style | MEGA JS Docs"
seoDescription: "String, Number, and Math Reference (string number math): MDN-style JavaScript reference with syntax tables, HTML examples, runtime behavior, and DOM or Web API."
keywords: "JavaScript, String, Number, and Math Reference, JavaScript String, Number, and Math Reference, String, Number, and Math Reference tutorial, string number math"
order: 12
track: reference
sources:
  - name: MDN Web Docs — JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Reference
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
---
# String, Number, and Math Reference

String, Number, and Math Reference is an MDN-style JavaScript reference page. It concentrates on text APIs, numeric parsing, formatting, rounding, NaN checks, and Math utilities and favors precise definitions, usage tables, runtime behavior, and DOM or Web API boundaries over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near the JavaScript Guide, JavaScript Reference, built-in object pages, and Web API pages. When using String, Number, and Math Reference, separate language semantics from host capabilities such as the DOM, fetch, and storage.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `String` | stores text as a sequence of UTF-16 code units | Check it in target browsers, DevTools Console, tests, and the real error path. |
| `template literal` | interpolates expressions inside text | Check it in target browsers, DevTools Console, tests, and the real error path. |
| `includes()` | checks for a substring | Check it in target browsers, DevTools Console, tests, and the real error path. |

## Examples

### Example 1

```html
<article class="reference-card">
  <h2>String, Number, and Math Reference</h2>
  <dl>
    <dt><code>String</code></dt>
    <dd>stores text as a sequence of UTF-16 code units</dd>
    <dt><code>template literal</code></dt>
    <dd>interpolates expressions inside text</dd>
    <dt><code>includes()</code></dt>
    <dd>checks for a substring</dd>
  </dl>
  <output id="string-number-math-count"></output>
</article>
<script>
  const terms = document.querySelectorAll('.reference-card dt');
  document.querySelector('#string-number-math-count').value = `${terms.length} JavaScript reference terms loaded`;
</script>
```

### Example 2

```html
<label>
  Search lesson
  <input id="string-number-math-query" value="script">
</label>
<output id="string-number-math-result"></output>
<script>
  const title = 'JavaScript live editor';
  const query = document.querySelector('#string-number-math-query').value.trim();
  const found = title.toLowerCase().includes(query.toLowerCase());
  document.querySelector('#string-number-math-result').value =
    `"${query}" found: ${found === true}`;
</script>
```

## Precise authoring notes

- For String, Number, and Math Reference, keep JavaScript core behavior distinct from host Web APIs.
- If behavior depends on browser support, locale, timezone, or permission state, cover that in UI and tests.
- For critical decisions, compare the relevant MDN page, MDN Reference entry, ECMA-262 text when needed, and a real runtime.

## Conceptual link to MDN

This page aligns with MDN topics around String, Number, and Math Reference, the JavaScript Reference, browser compatibility, and Web API boundaries before implementation.

## Next step

Continue with **Map, Set, WeakMap, and WeakSet Reference**.
