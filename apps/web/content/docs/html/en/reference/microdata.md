---
title: "HTML Microdata"
description: "This page explains item scopes, item types, and item properties for embedded structured data with examples, tables, and practical HTML notes."
seoTitle: "HTML HTML Microdata Reference — MDN-style | MEGA JS Docs"
seoDescription: "HTML HTML Microdata Reference in an MDN-style tone with usage tables, HTML examples, browser constraints, and authoring notes for precise projects."
keywords: "HTML, HTML Microdata, HTML microdata, itemscope itemprop, structured data"
order: 11
track: reference
sources:
  - name: MDN Web Docs — HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Microdata

HTML Microdata is an author-focused MDN-style reference page. It concentrates on item scopes, item types, and item properties for embedded structured data and favors precise definitions, usage tables, browser behavior, and implementation trade-offs over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near element references, attribute references, form/media guides, and DOM APIs. Before using HTML Microdata, check the content model, browser behavior, and accessibility expectations.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `itemscope` | creates an item | Validate it with accessibility checks and real browser behavior. |
| `itemtype` | identifies the vocabulary type | Validate it with accessibility checks and real browser behavior. |
| `itemprop` | names a property on the item | Validate it with accessibility checks and real browser behavior. |

## Examples

### Example 1

```html
<article class="reference-card">
  <h2>HTML Microdata</h2>
  <dl>
    <dt><code>itemscope</code></dt>
    <dd>creates an item</dd>
    <dt><code>itemtype</code></dt>
    <dd>identifies the vocabulary type</dd>
    <dt><code>itemprop</code></dt>
    <dd>names a property on the item</dd>
  </dl>
</article>
```

### Example 2

```html
<table>
  <caption>HTML Microdata quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>itemscope</code></td><td>creates an item</td></tr>
    <tr><td><code>itemtype</code></td><td>identifies the vocabulary type</td></tr>
    <tr><td><code>itemprop</code></td><td>names a property on the item</td></tr>
  </tbody>
</table>
```

## Authoring notes

- For HTML Microdata, names and values should match the real semantics of the content.
- If an element or attribute is not uniform across browsers, use progressive enhancement and useful fallback.
- For sensitive decisions, compare the MDN page with the HTML specification and an actual browser test.

## Conceptual MDN links

This page is conceptually close to MDN topics for HTML Microdata, DOM interfaces, accessibility mapping, and browser compatibility data.

## Next step

Next reference page: **HTML Microformats**.
