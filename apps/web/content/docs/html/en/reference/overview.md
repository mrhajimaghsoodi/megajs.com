---
title: "HTML Reference Overview"
description: "This page explains how MDN-style HTML reference pages are organized for authors with examples, tables, and practical HTML notes."
seoTitle: "HTML Reference Overview — MDN-style | MEGA JS Docs"
seoDescription: "HTML Reference Overview in an MDN-style tone with usage tables, HTML examples, browser constraints, and authoring notes for precise projects. Practice now."
keywords: "HTML, HTML Reference Overview, HTML reference, MDN HTML, HTML docs"
order: 1
track: reference
sources:
  - name: MDN Web Docs — HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Reference Overview

HTML Reference Overview is an author-focused MDN-style reference page. It concentrates on how MDN-style HTML reference pages are organized for authors and favors precise definitions, usage tables, browser behavior, and implementation trade-offs over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near element references, attribute references, form/media guides, and DOM APIs. Before using HTML Reference Overview, check the content model, browser behavior, and accessibility expectations.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `elements` | define document structure and meaning | Validate it with accessibility checks and real browser behavior. |
| `attributes` | configure element behavior and metadata | Validate it with accessibility checks and real browser behavior. |
| `interfaces` | connect HTML to DOM APIs | Validate it with accessibility checks and real browser behavior. |

## Examples

### Example 1

```html
<article class="reference-card">
  <h2>HTML Reference Overview</h2>
  <dl>
    <dt><code>elements</code></dt>
    <dd>define document structure and meaning</dd>
    <dt><code>attributes</code></dt>
    <dd>configure element behavior and metadata</dd>
    <dt><code>interfaces</code></dt>
    <dd>connect HTML to DOM APIs</dd>
  </dl>
</article>
```

### Example 2

```html
<table>
  <caption>HTML Reference Overview quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>elements</code></td><td>define document structure and meaning</td></tr>
    <tr><td><code>attributes</code></td><td>configure element behavior and metadata</td></tr>
    <tr><td><code>interfaces</code></td><td>connect HTML to DOM APIs</td></tr>
  </tbody>
</table>
```

## Authoring notes

- For HTML Reference Overview, names and values should match the real semantics of the content.
- If an element or attribute is not uniform across browsers, use progressive enhancement and useful fallback.
- For sensitive decisions, compare the MDN page with the HTML specification and an actual browser test.

## Conceptual MDN links

This page is conceptually close to MDN topics for HTML Reference Overview, DOM interfaces, accessibility mapping, and browser compatibility data.

## Next step

Next reference page: **HTML Elements Reference**.
