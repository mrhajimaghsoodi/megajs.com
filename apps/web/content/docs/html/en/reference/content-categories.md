---
title: "HTML Content Categories"
description: "This page explains flow, phrasing, embedded, interactive, and palpable content models with examples, tables, and practical HTML notes."
seoTitle: "HTML HTML Content Categories Reference — MDN-style | MEGA JS Docs"
seoDescription: "HTML HTML Content Categories Reference in an MDN-style tone with usage tables, HTML examples, browser constraints, and authoring notes for precise projects."
keywords: "HTML, HTML Content Categories, HTML content categories, flow content, phrasing content"
order: 5
track: reference
sources:
  - name: MDN Web Docs — HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Content Categories

HTML Content Categories is an author-focused MDN-style reference page. It concentrates on flow, phrasing, embedded, interactive, and palpable content models and favors precise definitions, usage tables, browser behavior, and implementation trade-offs over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near element references, attribute references, form/media guides, and DOM APIs. Before using HTML Content Categories, check the content model, browser behavior, and accessibility expectations.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `flow content` | most body-level content | Validate it with accessibility checks and real browser behavior. |
| `phrasing content` | text-level content inside paragraphs | Validate it with accessibility checks and real browser behavior. |
| `interactive content` | content intended for user interaction | Validate it with accessibility checks and real browser behavior. |

## Examples

### Example 1

```html
<article class="reference-card">
  <h2>HTML Content Categories</h2>
  <dl>
    <dt><code>flow content</code></dt>
    <dd>most body-level content</dd>
    <dt><code>phrasing content</code></dt>
    <dd>text-level content inside paragraphs</dd>
    <dt><code>interactive content</code></dt>
    <dd>content intended for user interaction</dd>
  </dl>
</article>
```

### Example 2

```html
<table>
  <caption>HTML Content Categories quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>flow content</code></td><td>most body-level content</td></tr>
    <tr><td><code>phrasing content</code></td><td>text-level content inside paragraphs</td></tr>
    <tr><td><code>interactive content</code></td><td>content intended for user interaction</td></tr>
  </tbody>
</table>
```

## Authoring notes

- For HTML Content Categories, names and values should match the real semantics of the content.
- If an element or attribute is not uniform across browsers, use progressive enhancement and useful fallback.
- For sensitive decisions, compare the MDN page with the HTML specification and an actual browser test.

## Conceptual MDN links

This page is conceptually close to MDN topics for HTML Content Categories, DOM interfaces, accessibility mapping, and browser compatibility data.

## Next step

Next reference page: **HTML Comments Reference**.
