---
title: "JavaScript and the DOM Reference"
description: "This page explains browser APIs around documents, events, forms, storage, fetch, and Web API boundaries with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "JavaScript and the DOM Reference — MDN-style | MEGA JS Docs"
seoDescription: "JavaScript and the DOM Reference (web js dom): MDN-style JavaScript reference with syntax tables, HTML examples, runtime behavior, and DOM or Web API notes."
keywords: "JavaScript, JavaScript and the DOM Reference, JavaScript and the DOM Reference, and the DOM Reference tutorial, web js dom"
order: 22
track: reference
sources:
  - name: MDN Web Docs — JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Reference
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
---
# JavaScript and the DOM Reference

JavaScript and the DOM Reference is an MDN-style JavaScript reference page. It concentrates on browser APIs around documents, events, forms, storage, fetch, and Web API boundaries and favors precise definitions, usage tables, runtime behavior, and DOM or Web API boundaries over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near the JavaScript Guide, JavaScript Reference, built-in object pages, and Web API pages. When using JavaScript and the DOM Reference, separate language semantics from host capabilities such as the DOM, fetch, and storage.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `Web API` | browser-provided capability used from JavaScript | Check it in target browsers, DevTools Console, tests, and the real error path. |
| `DOM` | the document object model JavaScript updates | Check it in target browsers, DevTools Console, tests, and the real error path. |
| `event loop` | schedules user, network, timer, and rendering work | Check it in target browsers, DevTools Console, tests, and the real error path. |

## Examples

### Example 1

```html
<article class="reference-card">
  <h2>JavaScript and the DOM Reference</h2>
  <dl>
    <dt><code>Web API</code></dt>
    <dd>browser-provided capability used from JavaScript</dd>
    <dt><code>DOM</code></dt>
    <dd>the document object model JavaScript updates</dd>
    <dt><code>event loop</code></dt>
    <dd>schedules user, network, timer, and rendering work</dd>
  </dl>
  <output id="web-js-dom-count"></output>
</article>
<script>
  const terms = document.querySelectorAll('.reference-card dt');
  document.querySelector('#web-js-dom-count').value = `${terms.length} JavaScript reference terms loaded`;
</script>
```

### Example 2

```html
<button id="web-js-dom-toggle" type="button">Toggle state</button>
<p id="web-js-dom-status">Waiting for an event.</p>
<script>
  const button = document.querySelector('#web-js-dom-toggle');
  const status = document.querySelector('#web-js-dom-status');
  button.addEventListener('click', (event) => {
    status.textContent = `Handled ${event.type} on #${event.currentTarget.id}`;
    status.classList.toggle('is-active');
  });
</script>
```

## Precise authoring notes

- For JavaScript and the DOM Reference, keep JavaScript core behavior distinct from host Web APIs.
- If behavior depends on browser support, locale, timezone, or permission state, cover that in UI and tests.
- For critical decisions, compare the relevant MDN page, MDN Reference entry, ECMA-262 text when needed, and a real runtime.

## Conceptual link to MDN

This page aligns with MDN topics around JavaScript and the DOM Reference, the JavaScript Reference, browser compatibility, and Web API boundaries before implementation.

## Next step

Continue with **JavaScript Cheatsheet**.
