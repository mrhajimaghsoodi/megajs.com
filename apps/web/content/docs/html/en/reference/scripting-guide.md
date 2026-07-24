---
title: "HTML Scripting Guide"
description: "This page explains script loading, modules, noscript fallback, and DOM interaction patterns with examples, tables, and practical HTML notes."
seoTitle: "HTML HTML Scripting Guide Reference — MDN-style | MEGA JS Docs"
seoDescription: "HTML HTML Scripting Guide Reference in an MDN-style tone with usage tables, HTML examples, browser constraints, and authoring notes for precise projects."
keywords: "HTML, HTML Scripting Guide, HTML scripting, script defer module, noscript"
order: 17
track: reference
sources:
  - name: MDN Web Docs — HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Scripting Guide

HTML Scripting Guide is an author-focused MDN-style reference page. It concentrates on script loading, modules, noscript fallback, and DOM interaction patterns and favors precise definitions, usage tables, browser behavior, and implementation trade-offs over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near element references, attribute references, form/media guides, and DOM APIs. Before using HTML Scripting Guide, check the content model, browser behavior, and accessibility expectations.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `<script defer>` | loads classic scripts without blocking parsing | Validate it with accessibility checks and real browser behavior. |
| `type="module"` | loads JavaScript modules | Validate it with accessibility checks and real browser behavior. |
| `<noscript>` | provides fallback when scripts are disabled | Validate it with accessibility checks and real browser behavior. |

## Examples

### Example 1

```html
<article class="reference-card">
  <h2>HTML Scripting Guide</h2>
  <dl>
    <dt><code>&lt;script defer&gt;</code></dt>
    <dd>loads classic scripts without blocking parsing</dd>
    <dt><code>type=&quot;module&quot;</code></dt>
    <dd>loads JavaScript modules</dd>
    <dt><code>&lt;noscript&gt;</code></dt>
    <dd>provides fallback when scripts are disabled</dd>
  </dl>
</article>
```

### Example 2

```html
<table>
  <caption>HTML Scripting Guide quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;script defer&gt;</code></td><td>loads classic scripts without blocking parsing</td></tr>
    <tr><td><code>type=&quot;module&quot;</code></td><td>loads JavaScript modules</td></tr>
    <tr><td><code>&lt;noscript&gt;</code></td><td>provides fallback when scripts are disabled</td></tr>
  </tbody>
</table>
```

## Authoring notes

- For HTML Scripting Guide, names and values should match the real semantics of the content.
- If an element or attribute is not uniform across browsers, use progressive enhancement and useful fallback.
- For sensitive decisions, compare the MDN page with the HTML specification and an actual browser test.

## Conceptual MDN links

This page is conceptually close to MDN topics for HTML Scripting Guide, DOM interfaces, accessibility mapping, and browser compatibility data.

## Next step

Next reference page: **HTML Quirks Mode**.
