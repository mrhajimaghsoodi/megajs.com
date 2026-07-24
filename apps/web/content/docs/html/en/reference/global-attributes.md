---
title: "HTML Global Attributes"
description: "This page explains attributes that are valid on most HTML elements with examples, tables, and practical HTML notes."
seoTitle: "HTML HTML Global Attributes Reference — MDN-style | MEGA JS Docs"
seoDescription: "HTML HTML Global Attributes Reference in an MDN-style tone with usage tables, HTML examples, browser constraints, and authoring notes for precise projects."
keywords: "HTML, HTML Global Attributes, HTML global attributes, id class data, MDN global attributes"
order: 4
track: reference
sources:
  - name: MDN Web Docs — HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Global Attributes

HTML Global Attributes is an author-focused MDN-style reference page. It concentrates on attributes that are valid on most HTML elements and favors precise definitions, usage tables, browser behavior, and implementation trade-offs over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near element references, attribute references, form/media guides, and DOM APIs. Before using HTML Global Attributes, check the content model, browser behavior, and accessibility expectations.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `id` | document-unique identifier | Validate it with accessibility checks and real browser behavior. |
| `class` | space-separated classification tokens | Validate it with accessibility checks and real browser behavior. |
| `data-*` | custom non-visible data for scripts | Validate it with accessibility checks and real browser behavior. |

## Examples

### Example 1

```html
<article class="reference-card">
  <h2>HTML Global Attributes</h2>
  <dl>
    <dt><code>id</code></dt>
    <dd>document-unique identifier</dd>
    <dt><code>class</code></dt>
    <dd>space-separated classification tokens</dd>
    <dt><code>data-*</code></dt>
    <dd>custom non-visible data for scripts</dd>
  </dl>
</article>
```

### Example 2

```html
<table>
  <caption>HTML Global Attributes quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>id</code></td><td>document-unique identifier</td></tr>
    <tr><td><code>class</code></td><td>space-separated classification tokens</td></tr>
    <tr><td><code>data-*</code></td><td>custom non-visible data for scripts</td></tr>
  </tbody>
</table>
```

## Authoring notes

- For HTML Global Attributes, names and values should match the real semantics of the content.
- If an element or attribute is not uniform across browsers, use progressive enhancement and useful fallback.
- For sensitive decisions, compare the MDN page with the HTML specification and an actual browser test.

## Conceptual MDN links

This page is conceptually close to MDN topics for HTML Global Attributes, DOM interfaces, accessibility mapping, and browser compatibility data.

## Next step

Next reference page: **HTML Content Categories**.
