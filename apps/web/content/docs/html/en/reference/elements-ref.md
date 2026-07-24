---
title: "HTML Elements Reference"
description: "This page explains the element catalog, element categories, and how to choose semantic tags with examples, tables, and practical HTML notes."
seoTitle: "HTML Elements Reference — MDN-style | MEGA JS Docs"
seoDescription: "HTML Elements Reference in an MDN-style tone with usage tables, HTML examples, browser constraints, and authoring notes for precise projects. Practice now."
keywords: "HTML, HTML Elements Reference, HTML elements reference, MDN elements, HTML tags"
order: 2
track: reference
sources:
  - name: MDN Web Docs — HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Elements Reference

HTML Elements Reference is an author-focused MDN-style reference page. It concentrates on the element catalog, element categories, and how to choose semantic tags and favors precise definitions, usage tables, browser behavior, and implementation trade-offs over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near element references, attribute references, form/media guides, and DOM APIs. Before using HTML Elements Reference, check the content model, browser behavior, and accessibility expectations.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `<main>` | unique main content landmark | Validate it with accessibility checks and real browser behavior. |
| `<article>` | self-contained composition | Validate it with accessibility checks and real browser behavior. |
| `<button>` | interactive button control | Validate it with accessibility checks and real browser behavior. |

## Examples

### Example 1

```html
<article class="reference-card">
  <h2>HTML Elements Reference</h2>
  <dl>
    <dt><code>&lt;main&gt;</code></dt>
    <dd>unique main content landmark</dd>
    <dt><code>&lt;article&gt;</code></dt>
    <dd>self-contained composition</dd>
    <dt><code>&lt;button&gt;</code></dt>
    <dd>interactive button control</dd>
  </dl>
</article>
```

### Example 2

```html
<table>
  <caption>HTML Elements Reference quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;main&gt;</code></td><td>unique main content landmark</td></tr>
    <tr><td><code>&lt;article&gt;</code></td><td>self-contained composition</td></tr>
    <tr><td><code>&lt;button&gt;</code></td><td>interactive button control</td></tr>
  </tbody>
</table>
```

## Authoring notes

- For HTML Elements Reference, names and values should match the real semantics of the content.
- If an element or attribute is not uniform across browsers, use progressive enhancement and useful fallback.
- For sensitive decisions, compare the MDN page with the HTML specification and an actual browser test.

## Conceptual MDN links

This page is conceptually close to MDN topics for HTML Elements Reference, DOM interfaces, accessibility mapping, and browser compatibility data.

## Next step

Next reference page: **HTML Attributes Reference**.
