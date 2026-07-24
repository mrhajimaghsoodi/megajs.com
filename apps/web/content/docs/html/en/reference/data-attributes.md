---
title: "HTML Data Attributes"
description: "This page explains using data-* for custom data that scripts can read without inventing invalid attributes with examples, tables, and practical HTML notes."
seoTitle: "HTML HTML Data Attributes Reference — MDN-style | MEGA JS Docs"
seoDescription: "HTML HTML Data Attributes Reference in an MDN-style tone with usage tables, HTML examples, browser constraints, and authoring notes for precise projects."
keywords: "HTML, HTML Data Attributes, HTML data attributes, data-* dataset, custom data"
order: 13
track: reference
sources:
  - name: MDN Web Docs — HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Data Attributes

HTML Data Attributes is an author-focused MDN-style reference page. It concentrates on using data-* for custom data that scripts can read without inventing invalid attributes and favors precise definitions, usage tables, browser behavior, and implementation trade-offs over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near element references, attribute references, form/media guides, and DOM APIs. Before using HTML Data Attributes, check the content model, browser behavior, and accessibility expectations.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `data-*` | stores custom string data | Validate it with accessibility checks and real browser behavior. |
| `dataset` | DOM API for data attributes | Validate it with accessibility checks and real browser behavior. |
| `camelCase` | maps dashed names in dataset | Validate it with accessibility checks and real browser behavior. |

## Examples

### Example 1

```html
<article class="reference-card">
  <h2>HTML Data Attributes</h2>
  <dl>
    <dt><code>data-*</code></dt>
    <dd>stores custom string data</dd>
    <dt><code>dataset</code></dt>
    <dd>DOM API for data attributes</dd>
    <dt><code>camelCase</code></dt>
    <dd>maps dashed names in dataset</dd>
  </dl>
</article>
```

### Example 2

```html
<table>
  <caption>HTML Data Attributes quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>data-*</code></td><td>stores custom string data</td></tr>
    <tr><td><code>dataset</code></td><td>DOM API for data attributes</td></tr>
    <tr><td><code>camelCase</code></td><td>maps dashed names in dataset</td></tr>
  </tbody>
</table>
```

## Authoring notes

- For HTML Data Attributes, names and values should match the real semantics of the content.
- If an element or attribute is not uniform across browsers, use progressive enhancement and useful fallback.
- For sensitive decisions, compare the MDN page with the HTML specification and an actual browser test.

## Conceptual MDN links

This page is conceptually close to MDN topics for HTML Data Attributes, DOM interfaces, accessibility mapping, and browser compatibility data.

## Next step

Next reference page: **CORS Images and Canvas**.
