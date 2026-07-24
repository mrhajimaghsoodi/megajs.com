---
title: "HTML Date and Time Formats"
description: "This page explains valid machine-readable date, time, week, month, and datetime values with examples, tables, and practical HTML notes."
seoTitle: "HTML HTML Date and Time Formats Reference — MDN-style | MEGA JS Docs"
seoDescription: "HTML HTML Date and Time Formats Reference in an MDN-style tone with usage tables, HTML examples, browser constraints, and authoring notes for precise projects."
keywords: "HTML, HTML Date and Time Formats, HTML datetime formats, time element, input date"
order: 7
track: reference
sources:
  - name: MDN Web Docs — HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Date and Time Formats

HTML Date and Time Formats is an author-focused MDN-style reference page. It concentrates on valid machine-readable date, time, week, month, and datetime values and favors precise definitions, usage tables, browser behavior, and implementation trade-offs over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near element references, attribute references, form/media guides, and DOM APIs. Before using HTML Date and Time Formats, check the content model, browser behavior, and accessibility expectations.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `YYYY-MM-DD` | valid date string | Validate it with accessibility checks and real browser behavior. |
| `HH:mm` | valid time string | Validate it with accessibility checks and real browser behavior. |
| `datetime` | machine-readable time value | Validate it with accessibility checks and real browser behavior. |

## Examples

### Example 1

```html
<article class="reference-card">
  <h2>HTML Date and Time Formats</h2>
  <dl>
    <dt><code>YYYY-MM-DD</code></dt>
    <dd>valid date string</dd>
    <dt><code>HH:mm</code></dt>
    <dd>valid time string</dd>
    <dt><code>datetime</code></dt>
    <dd>machine-readable time value</dd>
  </dl>
</article>
```

### Example 2

```html
<table>
  <caption>HTML Date and Time Formats quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>YYYY-MM-DD</code></td><td>valid date string</td></tr>
    <tr><td><code>HH:mm</code></td><td>valid time string</td></tr>
    <tr><td><code>datetime</code></td><td>machine-readable time value</td></tr>
  </tbody>
</table>
```

## Authoring notes

- For HTML Date and Time Formats, names and values should match the real semantics of the content.
- If an element or attribute is not uniform across browsers, use progressive enhancement and useful fallback.
- For sensitive decisions, compare the MDN page with the HTML specification and an actual browser test.

## Conceptual MDN links

This page is conceptually close to MDN topics for HTML Date and Time Formats, DOM interfaces, accessibility mapping, and browser compatibility data.

## Next step

Next reference page: **HTML Responsive Images**.
