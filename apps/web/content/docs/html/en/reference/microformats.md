---
title: "HTML Microformats"
description: "This page explains class-based conventions for people, events, products, and feeds with examples, tables, and practical HTML notes."
seoTitle: "HTML HTML Microformats Reference — MDN-style | MEGA JS Docs"
seoDescription: "HTML HTML Microformats Reference in an MDN-style tone with usage tables, HTML examples, browser constraints, and authoring notes for precise projects."
keywords: "HTML, HTML Microformats, HTML microformats, h-card h-entry, semantic classes"
order: 12
track: reference
sources:
  - name: MDN Web Docs — HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Microformats

HTML Microformats is an author-focused MDN-style reference page. It concentrates on class-based conventions for people, events, products, and feeds and favors precise definitions, usage tables, browser behavior, and implementation trade-offs over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near element references, attribute references, form/media guides, and DOM APIs. Before using HTML Microformats, check the content model, browser behavior, and accessibility expectations.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `h-card` | represents a person or organization | Validate it with accessibility checks and real browser behavior. |
| `h-entry` | represents a post or article | Validate it with accessibility checks and real browser behavior. |
| `p-name` | marks a name property | Validate it with accessibility checks and real browser behavior. |

## Examples

### Example 1

```html
<article class="reference-card">
  <h2>HTML Microformats</h2>
  <dl>
    <dt><code>h-card</code></dt>
    <dd>represents a person or organization</dd>
    <dt><code>h-entry</code></dt>
    <dd>represents a post or article</dd>
    <dt><code>p-name</code></dt>
    <dd>marks a name property</dd>
  </dl>
</article>
```

### Example 2

```html
<table>
  <caption>HTML Microformats quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>h-card</code></td><td>represents a person or organization</td></tr>
    <tr><td><code>h-entry</code></td><td>represents a post or article</td></tr>
    <tr><td><code>p-name</code></td><td>marks a name property</td></tr>
  </tbody>
</table>
```

## Authoring notes

- For HTML Microformats, names and values should match the real semantics of the content.
- If an element or attribute is not uniform across browsers, use progressive enhancement and useful fallback.
- For sensitive decisions, compare the MDN page with the HTML specification and an actual browser test.

## Conceptual MDN links

This page is conceptually close to MDN topics for HTML Microformats, DOM interfaces, accessibility mapping, and browser compatibility data.

## Next step

Next reference page: **HTML Data Attributes**.
