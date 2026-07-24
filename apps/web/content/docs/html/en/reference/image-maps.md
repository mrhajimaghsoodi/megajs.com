---
title: "HTML Image Maps"
description: "This page explains client-side image regions that link different parts of an image with examples, tables, and practical HTML notes."
seoTitle: "HTML HTML Image Maps Reference — MDN-style | MEGA JS Docs"
seoDescription: "HTML HTML Image Maps Reference in an MDN-style tone with usage tables, HTML examples, browser constraints, and authoring notes for precise projects."
keywords: "HTML, HTML Image Maps, HTML image maps, map area coords, clickable image"
order: 15
track: reference
sources:
  - name: MDN Web Docs — HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Image Maps

HTML Image Maps is an author-focused MDN-style reference page. It concentrates on client-side image regions that link different parts of an image and favors precise definitions, usage tables, browser behavior, and implementation trade-offs over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near element references, attribute references, form/media guides, and DOM APIs. Before using HTML Image Maps, check the content model, browser behavior, and accessibility expectations.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `<map>` | groups clickable areas | Validate it with accessibility checks and real browser behavior. |
| `<area>` | defines one region and link | Validate it with accessibility checks and real browser behavior. |
| `coords` | sets region coordinates | Validate it with accessibility checks and real browser behavior. |

## Examples

### Example 1

```html
<article class="reference-card">
  <h2>HTML Image Maps</h2>
  <dl>
    <dt><code>&lt;map&gt;</code></dt>
    <dd>groups clickable areas</dd>
    <dt><code>&lt;area&gt;</code></dt>
    <dd>defines one region and link</dd>
    <dt><code>coords</code></dt>
    <dd>sets region coordinates</dd>
  </dl>
</article>
```

### Example 2

```html
<table>
  <caption>HTML Image Maps quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;map&gt;</code></td><td>groups clickable areas</td></tr>
    <tr><td><code>&lt;area&gt;</code></td><td>defines one region and link</td></tr>
    <tr><td><code>coords</code></td><td>sets region coordinates</td></tr>
  </tbody>
</table>
```

## Authoring notes

- For HTML Image Maps, names and values should match the real semantics of the content.
- If an element or attribute is not uniform across browsers, use progressive enhancement and useful fallback.
- For sensitive decisions, compare the MDN page with the HTML specification and an actual browser test.

## Conceptual MDN links

This page is conceptually close to MDN topics for HTML Image Maps, DOM interfaces, accessibility mapping, and browser compatibility data.

## Next step

Next reference page: **HTML Performance Tips**.
