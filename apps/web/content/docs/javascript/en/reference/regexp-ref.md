---
title: "RegExp Reference"
description: "This page explains regular expression literals, flags, groups, lookarounds, Unicode, match APIs, and validation limits with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "RegExp Reference — MDN-style | MEGA JS Docs"
seoDescription: "RegExp Reference (regexp ref): MDN-style JavaScript reference with syntax tables, HTML examples, runtime behavior, and DOM or Web API notes with practical."
keywords: "JavaScript, RegExp Reference, JavaScript RegExp Reference, RegExp Reference tutorial, regexp ref"
order: 14
track: reference
sources:
  - name: MDN Web Docs — JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Reference
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
---
# RegExp Reference

RegExp Reference is an MDN-style JavaScript reference page. It concentrates on regular expression literals, flags, groups, lookarounds, Unicode, match APIs, and validation limits and favors precise definitions, usage tables, runtime behavior, and DOM or Web API boundaries over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near the JavaScript Guide, JavaScript Reference, built-in object pages, and Web API pages. When using RegExp Reference, separate language semantics from host capabilities such as the DOM, fetch, and storage.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `/pattern/u` | creates a regular expression literal | Check it in target browsers, DevTools Console, tests, and the real error path. |
| `flags` | change matching behavior | Check it in target browsers, DevTools Console, tests, and the real error path. |
| `match()` | returns pattern matches from text | Check it in target browsers, DevTools Console, tests, and the real error path. |

## Examples

### Example 1

```html
<article class="reference-card">
  <h2>RegExp Reference</h2>
  <dl>
    <dt><code>/pattern/u</code></dt>
    <dd>creates a regular expression literal</dd>
    <dt><code>flags</code></dt>
    <dd>change matching behavior</dd>
    <dt><code>match()</code></dt>
    <dd>returns pattern matches from text</dd>
  </dl>
  <output id="regexp-ref-count"></output>
</article>
<script>
  const terms = document.querySelectorAll('.reference-card dt');
  document.querySelector('#regexp-ref-count').value = `${terms.length} JavaScript reference terms loaded`;
</script>
```

### Example 2

```html
<label>Username <input id="regexp-ref-name" value="mega_js"></label>
<output id="regexp-ref-out"></output>
<script>
  const username = document.querySelector('#regexp-ref-name').value;
  const isValid = /^[a-z][a-z0-9_]{2,15}$/i.test(username);
  document.querySelector('#regexp-ref-out').value = `Valid username: ${isValid}`;
</script>
```

## Precise authoring notes

- For RegExp Reference, keep JavaScript core behavior distinct from host Web APIs.
- If behavior depends on browser support, locale, timezone, or permission state, cover that in UI and tests.
- For critical decisions, compare the relevant MDN page, MDN Reference entry, ECMA-262 text when needed, and a real runtime.

## Conceptual link to MDN

This page aligns with MDN topics around RegExp Reference, the JavaScript Reference, browser compatibility, and Web API boundaries before implementation.

## Next step

Continue with **Error Handling Reference**.
