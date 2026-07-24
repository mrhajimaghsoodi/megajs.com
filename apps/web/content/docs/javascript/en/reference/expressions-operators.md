---
title: "Expressions and Operators Reference"
description: "This page explains operator precedence, assignment, comparison, logical, optional chaining, and nullish coalescing with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "Expressions and Operators Reference — MDN-style | MEGA JS Docs"
seoDescription: "Expressions and Operators Reference (expressions operators): MDN-style JavaScript reference with syntax tables, HTML examples, runtime behavior, and DOM or Web."
keywords: "JavaScript, Expressions and Operators Reference, JavaScript Expressions and Operators Reference, Expressions and Operators Reference tutorial, expressions operators"
order: 4
track: reference
sources:
  - name: MDN Web Docs — JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Reference
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
---
# Expressions and Operators Reference

Expressions and Operators Reference is an MDN-style JavaScript reference page. It concentrates on operator precedence, assignment, comparison, logical, optional chaining, and nullish coalescing and favors precise definitions, usage tables, runtime behavior, and DOM or Web API boundaries over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near the JavaScript Guide, JavaScript Reference, built-in object pages, and Web API pages. When using Expressions and Operators Reference, separate language semantics from host capabilities such as the DOM, fetch, and storage.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `JavaScript` | language feature used in Expressions and Operators Reference | Check it in target browsers, DevTools Console, tests, and the real error path. |
| `runtime` | executes code and reports errors | Check it in target browsers, DevTools Console, tests, and the real error path. |
| `DevTools Console` | checks values while learning | Check it in target browsers, DevTools Console, tests, and the real error path. |

## Examples

### Example 1

```html
<article class="reference-card">
  <h2>Expressions and Operators Reference</h2>
  <dl>
    <dt><code>JavaScript</code></dt>
    <dd>language feature used in Expressions and Operators Reference</dd>
    <dt><code>runtime</code></dt>
    <dd>executes code and reports errors</dd>
    <dt><code>DevTools Console</code></dt>
    <dd>checks values while learning</dd>
  </dl>
  <output id="expressions-operators-count"></output>
</article>
<script>
  const terms = document.querySelectorAll('.reference-card dt');
  document.querySelector('#expressions-operators-count').value = `${terms.length} JavaScript reference terms loaded`;
</script>
```

### Example 2

```html
<section>
  <h2>Expressions and Operators Reference</h2>
  <p id="expressions-operators-text">operator precedence, assignment, comparison, logical, optional chaining, and nullish coalescing.</p>
  <output id="expressions-operators-out"></output>
</section>
<script>
  const text = document.querySelector('#expressions-operators-text').textContent;
  document.querySelector('#expressions-operators-out').value =
    `JavaScript handled ${text.length} characters for Expressions and Operators Reference`;
</script>
```

## Precise authoring notes

- For Expressions and Operators Reference, keep JavaScript core behavior distinct from host Web APIs.
- If behavior depends on browser support, locale, timezone, or permission state, cover that in UI and tests.
- For critical decisions, compare the relevant MDN page, MDN Reference entry, ECMA-262 text when needed, and a real runtime.

## Conceptual link to MDN

This page aligns with MDN topics around Expressions and Operators Reference, the JavaScript Reference, browser compatibility, and Web API boundaries before implementation.

## Next step

Continue with **Functions Reference**.
