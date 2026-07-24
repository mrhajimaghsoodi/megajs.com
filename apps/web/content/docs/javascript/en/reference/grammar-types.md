---
title: "Grammar and Types Reference"
description: "This page explains lexical grammar, values, literals, declarations, primitive types, objects, and conversions with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "Grammar and Types Reference — MDN-style | MEGA JS Docs"
seoDescription: "Grammar and Types Reference (grammar types): MDN-style JavaScript reference with syntax tables, HTML examples, runtime behavior, and DOM or Web API notes."
keywords: "JavaScript, Grammar and Types Reference, JavaScript Grammar and Types Reference, Grammar and Types Reference tutorial, grammar types"
order: 2
track: reference
sources:
  - name: MDN Web Docs — JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Reference
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
---
# Grammar and Types Reference

Grammar and Types Reference is an MDN-style JavaScript reference page. It concentrates on lexical grammar, values, literals, declarations, primitive types, objects, and conversions and favors precise definitions, usage tables, runtime behavior, and DOM or Web API boundaries over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near the JavaScript Guide, JavaScript Reference, built-in object pages, and Web API pages. When using Grammar and Types Reference, separate language semantics from host capabilities such as the DOM, fetch, and storage.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `JavaScript` | language feature used in Grammar and Types Reference | Check it in target browsers, DevTools Console, tests, and the real error path. |
| `runtime` | executes code and reports errors | Check it in target browsers, DevTools Console, tests, and the real error path. |
| `DevTools Console` | checks values while learning | Check it in target browsers, DevTools Console, tests, and the real error path. |

## Examples

### Example 1

```html
<article class="reference-card">
  <h2>Grammar and Types Reference</h2>
  <dl>
    <dt><code>JavaScript</code></dt>
    <dd>language feature used in Grammar and Types Reference</dd>
    <dt><code>runtime</code></dt>
    <dd>executes code and reports errors</dd>
    <dt><code>DevTools Console</code></dt>
    <dd>checks values while learning</dd>
  </dl>
  <output id="grammar-types-count"></output>
</article>
<script>
  const terms = document.querySelectorAll('.reference-card dt');
  document.querySelector('#grammar-types-count').value = `${terms.length} JavaScript reference terms loaded`;
</script>
```

### Example 2

```html
<section>
  <h2>Grammar and Types Reference</h2>
  <output id="grammar-types-out"></output>
</section>
<script>
  const profile = { name: 'Ada', lessons: 3 };
  let status = profile.lessons >= 3 ? 'ready' : 'learning';
  document.querySelector('#grammar-types-out').value =
    `${profile.name} is ${status}; type is ${typeof profile.lessons}`;
</script>
```

## Precise authoring notes

- For Grammar and Types Reference, keep JavaScript core behavior distinct from host Web APIs.
- If behavior depends on browser support, locale, timezone, or permission state, cover that in UI and tests.
- For critical decisions, compare the relevant MDN page, MDN Reference entry, ECMA-262 text when needed, and a real runtime.

## Conceptual link to MDN

This page aligns with MDN topics around Grammar and Types Reference, the JavaScript Reference, browser compatibility, and Web API boundaries before implementation.

## Next step

Continue with **Control Flow Reference**.
