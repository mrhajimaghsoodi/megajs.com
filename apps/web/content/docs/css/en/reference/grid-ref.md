---
title: "Grid Reference"
description: "This page explains explicit and implicit grids, tracks, lines, areas, auto-placement, subgrid, and alignment with examples, tables, and practical CSS notes."
seoTitle: "Grid Reference — MDN-style | MEGA JS Docs"
seoDescription: "Grid Reference (grid ref): MDN-style reference with usage tables, CSS examples, browser notes, and DevTools guidance for projects with practical drills."
keywords: "CSS, Grid Reference, CSS Grid reference, subgrid, grid template"
order: 13
track: reference
sources:
  - name: MDN Web Docs — CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Grid Reference

Grid Reference is an author-focused MDN-style reference page. It concentrates on explicit and implicit grids, tracks, lines, areas, auto-placement, subgrid, and alignment and favors precise definitions, usage tables, cascade effects, and browser behavior over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near CSS property references, selector references, at-rules, and layout guides. Before using Grid Reference, check browser support, computed values, and accessibility expectations.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `grid-template-columns` | defines explicit column tracks | Test it in the DevTools Styles panel, responsive mode, and target browsers. |
| `grid-auto-flow` | controls auto-placement direction | Test it in the DevTools Styles panel, responsive mode, and target browsers. |
| `subgrid` | inherits parent grid tracks | Test it in the DevTools Styles panel, responsive mode, and target browsers. |

## Examples

### Example 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grid Reference practice</title>
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
      <h2>Grid Reference</h2>
      <dl>
        <dt><code>grid-template-columns</code></dt>
        <dd>defines explicit column tracks</dd>
        <dt><code>grid-auto-flow</code></dt>
        <dd>controls auto-placement direction</dd>
        <dt><code>subgrid</code></dt>
        <dd>inherits parent grid tracks</dd>
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
    <title>Grid Reference practice</title>
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
      <caption>Grid Reference quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>grid-template-columns</code></td><td>defines explicit column tracks</td></tr>
        <tr><td><code>grid-auto-flow</code></td><td>controls auto-placement direction</td></tr>
        <tr><td><code>subgrid</code></td><td>inherits parent grid tracks</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

## Authoring notes

- For Grid Reference, keep the cascade and specificity simple before adding overrides.
- If a property or selector is not uniform across browsers, use progressive enhancement and useful fallback.
- For sensitive decisions, compare the MDN page with the CSS specification and an actual DevTools test.

## Conceptual MDN links

This page is conceptually close to MDN topics for Grid Reference, CSSOM, browser compatibility data, and accessibility guidance.

## Next step

Next reference page: **Responsive Design Reference**.
