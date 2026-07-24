---
title: "HTML Cheatsheet"
description: "This page explains a compact MDN-style checklist of elements, attributes, forms, media, and metadata with examples, tables, and practical HTML notes."
seoTitle: "HTML HTML Cheatsheet Reference — MDN-style | MEGA JS Docs"
seoDescription: "HTML HTML Cheatsheet Reference in an MDN-style tone with usage tables, HTML examples, browser constraints, and authoring notes for precise projects."
keywords: "HTML, HTML Cheatsheet, HTML cheatsheet, HTML reference quick, HTML checklist"
order: 19
track: reference
sources:
  - name: MDN Web Docs — HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Cheatsheet

HTML Cheatsheet is an author-focused MDN-style reference page. It concentrates on a compact MDN-style checklist of elements, attributes, forms, media, and metadata and favors precise definitions, usage tables, browser behavior, and implementation trade-offs over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near element references, attribute references, form/media guides, and DOM APIs. Before using HTML Cheatsheet, check the content model, browser behavior, and accessibility expectations.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `metadata` | title, charset, viewport, and resource links | Validate it with accessibility checks and real browser behavior. |
| `semantics` | landmarks, headings, lists, and tables | Validate it with accessibility checks and real browser behavior. |
| `forms/media` | inputs, validation, video, and audio | Validate it with accessibility checks and real browser behavior. |

## Examples

### Example 1

```html
<article class="reference-card">
  <h2>HTML Cheatsheet</h2>
  <dl>
    <dt><code>metadata</code></dt>
    <dd>title, charset, viewport, and resource links</dd>
    <dt><code>semantics</code></dt>
    <dd>landmarks, headings, lists, and tables</dd>
    <dt><code>forms/media</code></dt>
    <dd>inputs, validation, video, and audio</dd>
  </dl>
</article>
```

### Example 2

```html
<table>
  <caption>HTML Cheatsheet quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>metadata</code></td><td>title, charset, viewport, and resource links</td></tr>
    <tr><td><code>semantics</code></td><td>landmarks, headings, lists, and tables</td></tr>
    <tr><td><code>forms/media</code></td><td>inputs, validation, video, and audio</td></tr>
  </tbody>
</table>
```

## Authoring notes

- For HTML Cheatsheet, names and values should match the real semantics of the content.
- If an element or attribute is not uniform across browsers, use progressive enhancement and useful fallback.
- For sensitive decisions, compare the MDN page with the HTML specification and an actual browser test.

## Conceptual MDN links

This page is conceptually close to MDN topics for HTML Cheatsheet, DOM interfaces, accessibility mapping, and browser compatibility data.

## Next step

After the reference track, open the official track for specification-oriented summaries.
