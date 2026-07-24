---
title: "HTML Attributes Reference"
description: "This page explains attributes that configure links, media, forms, scripts, and embedded content with examples, tables, and practical HTML notes."
seoTitle: "HTML Attributes Reference — MDN-style | MEGA JS Docs"
seoDescription: "HTML Attributes Reference in an MDN-style tone with usage tables, HTML examples, browser constraints, and authoring notes for precise projects. Practice now."
keywords: "HTML, HTML Attributes Reference, HTML attributes reference, MDN attributes, HTML attribute"
order: 3
track: reference
sources:
  - name: MDN Web Docs — HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Attributes Reference

HTML Attributes Reference is an author-focused MDN-style reference page. It concentrates on attributes that configure links, media, forms, scripts, and embedded content and favors precise definitions, usage tables, browser behavior, and implementation trade-offs over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near element references, attribute references, form/media guides, and DOM APIs. Before using HTML Attributes Reference, check the content model, browser behavior, and accessibility expectations.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `href` | URL for links and linked resources | Validate it with accessibility checks and real browser behavior. |
| `src` | URL for embedded resources | Validate it with accessibility checks and real browser behavior. |
| `disabled` | removes a control from interaction and submission | Validate it with accessibility checks and real browser behavior. |

## Examples

### Example 1

```html
<article class="reference-card">
  <h2>HTML Attributes Reference</h2>
  <dl>
    <dt><code>href</code></dt>
    <dd>URL for links and linked resources</dd>
    <dt><code>src</code></dt>
    <dd>URL for embedded resources</dd>
    <dt><code>disabled</code></dt>
    <dd>removes a control from interaction and submission</dd>
  </dl>
</article>
```

### Example 2

```html
<table>
  <caption>HTML Attributes Reference quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>href</code></td><td>URL for links and linked resources</td></tr>
    <tr><td><code>src</code></td><td>URL for embedded resources</td></tr>
    <tr><td><code>disabled</code></td><td>removes a control from interaction and submission</td></tr>
  </tbody>
</table>
```

## Authoring notes

- For HTML Attributes Reference, names and values should match the real semantics of the content.
- If an element or attribute is not uniform across browsers, use progressive enhancement and useful fallback.
- For sensitive decisions, compare the MDN page with the HTML specification and an actual browser test.

## Conceptual MDN links

This page is conceptually close to MDN topics for HTML Attributes Reference, DOM interfaces, accessibility mapping, and browser compatibility data.

## Next step

Next reference page: **HTML Global Attributes**.
