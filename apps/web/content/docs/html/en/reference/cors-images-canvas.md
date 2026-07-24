---
title: "CORS Images and Canvas"
description: "This page explains how cross-origin images affect canvas drawing, reading pixels, and tainting with examples, tables, and practical HTML notes."
seoTitle: "HTML CORS Images and Canvas Reference — MDN-style | MEGA JS Docs"
seoDescription: "HTML CORS Images and Canvas Reference in an MDN-style tone with usage tables, HTML examples, browser constraints, and authoring notes for precise projects."
keywords: "HTML, CORS Images and Canvas, CORS images canvas, tainted canvas, crossorigin image"
order: 14
track: reference
sources:
  - name: MDN Web Docs — HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# CORS Images and Canvas

CORS Images and Canvas is an author-focused MDN-style reference page. It concentrates on how cross-origin images affect canvas drawing, reading pixels, and tainting and favors precise definitions, usage tables, browser behavior, and implementation trade-offs over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near element references, attribute references, form/media guides, and DOM APIs. Before using CORS Images and Canvas, check the content model, browser behavior, and accessibility expectations.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `crossorigin` | requests CORS-enabled fetching | Validate it with accessibility checks and real browser behavior. |
| `tainted canvas` | canvas whose pixels cannot be read | Validate it with accessibility checks and real browser behavior. |
| `toDataURL()` | exports canvas pixels when allowed | Validate it with accessibility checks and real browser behavior. |

## Examples

### Example 1

```html
<article class="reference-card">
  <h2>CORS Images and Canvas</h2>
  <dl>
    <dt><code>crossorigin</code></dt>
    <dd>requests CORS-enabled fetching</dd>
    <dt><code>tainted canvas</code></dt>
    <dd>canvas whose pixels cannot be read</dd>
    <dt><code>toDataURL()</code></dt>
    <dd>exports canvas pixels when allowed</dd>
  </dl>
</article>
```

### Example 2

```html
<table>
  <caption>CORS Images and Canvas quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>crossorigin</code></td><td>requests CORS-enabled fetching</td></tr>
    <tr><td><code>tainted canvas</code></td><td>canvas whose pixels cannot be read</td></tr>
    <tr><td><code>toDataURL()</code></td><td>exports canvas pixels when allowed</td></tr>
  </tbody>
</table>
```

## Authoring notes

- For CORS Images and Canvas, names and values should match the real semantics of the content.
- If an element or attribute is not uniform across browsers, use progressive enhancement and useful fallback.
- For sensitive decisions, compare the MDN page with the HTML specification and an actual browser test.

## Conceptual MDN links

This page is conceptually close to MDN topics for CORS Images and Canvas, DOM interfaces, accessibility mapping, and browser compatibility data.

## Next step

Next reference page: **HTML Image Maps**.
