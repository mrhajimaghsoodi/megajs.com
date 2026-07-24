---
title: "Modules Reference"
description: "This page explains ES modules, import and export forms, static analysis, dynamic import, and browser loading with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "Modules Reference — MDN-style | MEGA JS Docs"
seoDescription: "Modules Reference (modules ref): MDN-style JavaScript reference with syntax tables, HTML examples, runtime behavior, and DOM or Web API notes with practical."
keywords: "JavaScript, Modules Reference, JavaScript Modules Reference, Modules Reference tutorial, modules ref"
order: 16
track: reference
sources:
  - name: MDN Web Docs — JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Reference
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
---
# Modules Reference

Modules Reference is an MDN-style JavaScript reference page. It concentrates on ES modules, import and export forms, static analysis, dynamic import, and browser loading and favors precise definitions, usage tables, runtime behavior, and DOM or Web API boundaries over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near the JavaScript Guide, JavaScript Reference, built-in object pages, and Web API pages. When using Modules Reference, separate language semantics from host capabilities such as the DOM, fetch, and storage.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `import` | brings exported bindings into a module | Check it in target browsers, DevTools Console, tests, and the real error path. |
| `export` | makes module bindings available | Check it in target browsers, DevTools Console, tests, and the real error path. |
| `module scope` | keeps top-level bindings out of global scope | Check it in target browsers, DevTools Console, tests, and the real error path. |

## Examples

### Example 1

```html
<article class="reference-card">
  <h2>Modules Reference</h2>
  <dl>
    <dt><code>import</code></dt>
    <dd>brings exported bindings into a module</dd>
    <dt><code>export</code></dt>
    <dd>makes module bindings available</dd>
    <dt><code>module scope</code></dt>
    <dd>keeps top-level bindings out of global scope</dd>
  </dl>
  <output id="modules-ref-count"></output>
</article>
<script>
  const terms = document.querySelectorAll('.reference-card dt');
  document.querySelector('#modules-ref-count').value = `${terms.length} JavaScript reference terms loaded`;
</script>
```

### Example 2

```html
<output id="modules-ref-out"></output>
<script type="module">
  const moduleName = 'Modules Reference';
  const format = (value) => `Module scope: ${value}`;
  document.querySelector('#modules-ref-out').value = format(moduleName);
</script>
```

## Precise authoring notes

- For Modules Reference, keep JavaScript core behavior distinct from host Web APIs.
- If behavior depends on browser support, locale, timezone, or permission state, cover that in UI and tests.
- For critical decisions, compare the relevant MDN page, MDN Reference entry, ECMA-262 text when needed, and a real runtime.

## Conceptual link to MDN

This page aligns with MDN topics around Modules Reference, the JavaScript Reference, browser compatibility, and Web API boundaries before implementation.

## Next step

Continue with **Iterators and Generators Reference**.
