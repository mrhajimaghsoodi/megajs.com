---
title: "JavaScript Reference Overview"
description: "This page explains how MDN organizes JavaScript guides, reference pages, built-ins, syntax, and browser integration with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "JavaScript Reference Overview — MDN-style | MEGA JS Docs"
seoDescription: "JavaScript Reference Overview (overview): MDN-style JavaScript reference with syntax tables, HTML examples, runtime behavior, and DOM or Web API notes."
keywords: "JavaScript, JavaScript Reference Overview, JavaScript reference, MDN JavaScript, JavaScript docs"
order: 1
track: reference
sources:
  - name: MDN Web Docs — JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Reference
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
---
# JavaScript Reference Overview

JavaScript Reference Overview is an MDN-style JavaScript reference page. It concentrates on how MDN organizes JavaScript guides, reference pages, built-ins, syntax, and browser integration and favors precise definitions, usage tables, runtime behavior, and DOM or Web API boundaries over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near the JavaScript Guide, JavaScript Reference, built-in object pages, and Web API pages. When using JavaScript Reference Overview, separate language semantics from host capabilities such as the DOM, fetch, and storage.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `JavaScript` | language feature used in JavaScript Reference Overview | Check it in target browsers, DevTools Console, tests, and the real error path. |
| `runtime` | executes code and reports errors | Check it in target browsers, DevTools Console, tests, and the real error path. |
| `DevTools Console` | checks values while learning | Check it in target browsers, DevTools Console, tests, and the real error path. |

## Examples

### Example 1

```html
<article class="reference-card">
  <h2>JavaScript Reference Overview</h2>
  <dl>
    <dt><code>JavaScript</code></dt>
    <dd>language feature used in JavaScript Reference Overview</dd>
    <dt><code>runtime</code></dt>
    <dd>executes code and reports errors</dd>
    <dt><code>DevTools Console</code></dt>
    <dd>checks values while learning</dd>
  </dl>
  <output id="overview-count"></output>
</article>
<script>
  const terms = document.querySelectorAll('.reference-card dt');
  document.querySelector('#overview-count').value = `${terms.length} JavaScript reference terms loaded`;
</script>
```

### Example 2

```html
<section>
  <h2>JavaScript Reference Overview</h2>
  <p id="overview-text">how MDN organizes JavaScript guides, reference pages, built-ins, syntax, and browser integration.</p>
  <output id="overview-out"></output>
</section>
<script>
  const text = document.querySelector('#overview-text').textContent;
  document.querySelector('#overview-out').value =
    `JavaScript handled ${text.length} characters for JavaScript Reference Overview`;
</script>
```

## Precise authoring notes

- For JavaScript Reference Overview, keep JavaScript core behavior distinct from host Web APIs.
- If behavior depends on browser support, locale, timezone, or permission state, cover that in UI and tests.
- For critical decisions, compare the relevant MDN page, MDN Reference entry, ECMA-262 text when needed, and a real runtime.

## Conceptual link to MDN

This page aligns with MDN topics around JavaScript Reference Overview, the JavaScript Reference, browser compatibility, and Web API boundaries before implementation.

## Next step

Continue with **Grammar and Types Reference**.
