---
title: "Responsive Design Reference"
description: "This page explains media queries, container queries, viewport units, fluid type, images, and adaptive layout decisions with examples, tables, and practical CSS notes."
seoTitle: "Responsive Design Reference — MDN-style | MEGA JS Docs"
seoDescription: "Responsive Design Reference (responsive design): MDN-style reference with usage tables, CSS examples, browser notes, and DevTools guidance for projects."
keywords: "CSS, Responsive Design Reference, responsive CSS, media queries, container queries"
order: 14
track: reference
sources:
  - name: MDN Web Docs — CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Responsive Design Reference

Responsive Design Reference is an author-focused MDN-style reference page. It concentrates on media queries, container queries, viewport units, fluid type, images, and adaptive layout decisions and favors precise definitions, usage tables, cascade effects, and browser behavior over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near CSS property references, selector references, at-rules, and layout guides. Before using Responsive Design Reference, check browser support, computed values, and accessibility expectations.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `@media` | applies CSS by media condition | Test it in the DevTools Styles panel, responsive mode, and target browsers. |
| `@container` | applies CSS by container condition | Test it in the DevTools Styles panel, responsive mode, and target browsers. |
| `clamp()` | keeps fluid values bounded | Test it in the DevTools Styles panel, responsive mode, and target browsers. |

## Examples

### Example 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Design Reference practice</title>
    <style>
      .reference-card {
        max-width: 42rem;
        padding: 1rem;
        border: 1px solid #cbd5e1;
        border-radius: .75rem;
      }
      dt {
        font-weight: 700;
        color: #2563eb;
      }
      dd {
        margin-block-end: .75rem;
      }
    </style>
  </head>
  <body>
    <article class="reference-card">
      <h2>Responsive Design Reference</h2>
      <dl>
        <dt><code>@media</code></dt>
        <dd>applies CSS by media condition</dd>
        <dt><code>@container</code></dt>
        <dd>applies CSS by container condition</dd>
        <dt><code>clamp()</code></dt>
        <dd>keeps fluid values bounded</dd>
      </dl>
    </article>
  </body>
</html>
```

### Example 2

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Design Reference practice</title>
    <style>
      table {
        border-collapse: collapse;
        width: min(100%, 42rem);
      }
      caption {
        font-weight: 700;
        margin-block-end: .5rem;
      }
      th,
      td {
        border: 1px solid #cbd5e1;
        padding: .65rem;
        text-align: start;
      }
      code {
        color: #1d4ed8;
      }
    </style>
  </head>
  <body>
    <table>
      <caption>Responsive Design Reference quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>@media</code></td><td>applies CSS by media condition</td></tr>
        <tr><td><code>@container</code></td><td>applies CSS by container condition</td></tr>
        <tr><td><code>clamp()</code></td><td>keeps fluid values bounded</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

## Authoring notes

- For Responsive Design Reference, keep the cascade and specificity simple before adding overrides.
- If a property or selector is not uniform across browsers, use progressive enhancement and useful fallback.
- For sensitive decisions, compare the MDN page with the CSS specification and an actual DevTools test.

## Conceptual MDN links

This page is conceptually close to MDN topics for Responsive Design Reference, CSSOM, browser compatibility data, and accessibility guidance.

## Next step

Next reference page: **Transforms Reference**.
