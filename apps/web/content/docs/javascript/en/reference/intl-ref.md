---
title: "Intl Reference"
description: "This page explains locale-aware formatting, collation, dates, numbers, lists, relative time, and segmentation with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "Intl Reference — MDN-style | MEGA JS Docs"
seoDescription: "Intl Reference (intl ref): MDN-style JavaScript reference with syntax tables, HTML examples, runtime behavior, and DOM or Web API notes with practical drills."
keywords: "JavaScript, Intl Reference, JavaScript Intl Reference, Intl Reference tutorial, intl ref"
order: 21
track: reference
sources:
  - name: MDN Web Docs — JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Reference
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
---
# Intl Reference

Intl Reference is an MDN-style JavaScript reference page. It concentrates on locale-aware formatting, collation, dates, numbers, lists, relative time, and segmentation and favors precise definitions, usage tables, runtime behavior, and DOM or Web API boundaries over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near the JavaScript Guide, JavaScript Reference, built-in object pages, and Web API pages. When using Intl Reference, separate language semantics from host capabilities such as the DOM, fetch, and storage.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `Date` | represents a timestamp with local and UTC accessors | Check it in target browsers, DevTools Console, tests, and the real error path. |
| `Intl` | formats locale-aware output | Check it in target browsers, DevTools Console, tests, and the real error path. |
| `timestamp` | counts milliseconds from the Unix epoch | Check it in target browsers, DevTools Console, tests, and the real error path. |

## Examples

### Example 1

```html
<article class="reference-card">
  <h2>Intl Reference</h2>
  <dl>
    <dt><code>Date</code></dt>
    <dd>represents a timestamp with local and UTC accessors</dd>
    <dt><code>Intl</code></dt>
    <dd>formats locale-aware output</dd>
    <dt><code>timestamp</code></dt>
    <dd>counts milliseconds from the Unix epoch</dd>
  </dl>
  <output id="intl-ref-count"></output>
</article>
<script>
  const terms = document.querySelectorAll('.reference-card dt');
  document.querySelector('#intl-ref-count').value = `${terms.length} JavaScript reference terms loaded`;
</script>
```

### Example 2

```html
<time id="intl-ref-time"></time>
<script>
  const formatter = new Intl.DateTimeFormat('en', { dateStyle: 'medium', timeStyle: 'short' });
  const now = new Date('2026-07-24T12:00:00Z');
  document.querySelector('#intl-ref-time').textContent = formatter.format(now);
</script>
```

## Precise authoring notes

- For Intl Reference, keep JavaScript core behavior distinct from host Web APIs.
- If behavior depends on browser support, locale, timezone, or permission state, cover that in UI and tests.
- For critical decisions, compare the relevant MDN page, MDN Reference entry, ECMA-262 text when needed, and a real runtime.

## Conceptual link to MDN

This page aligns with MDN topics around Intl Reference, the JavaScript Reference, browser compatibility, and Web API boundaries before implementation.

## Next step

Continue with **JavaScript and the DOM Reference**.
