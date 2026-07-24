---
title: "Container Queries"
description: "This page explains styling components by container size, style queries, query units, and containment requirements with examples, tables, and practical CSS notes."
seoTitle: "CSS Container Queries Reference — MDN-style | MEGA JS Docs"
seoDescription: "CSS Container Queries Reference (container queries): MDN-style reference with usage tables, CSS examples, browser notes, and DevTools guidance for projects."
keywords: "CSS, Container Queries, container queries, @container, CSS cqi"
order: 19
track: reference
sources:
  - name: MDN Web Docs — CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Container Queries

Container Queries is an author-focused MDN-style reference page. It concentrates on styling components by container size, style queries, query units, and containment requirements and favors precise definitions, usage tables, cascade effects, and browser behavior over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near CSS property references, selector references, at-rules, and layout guides. Before using Container Queries, check browser support, computed values, and accessibility expectations.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `container-type: inline-size` | enables size queries on a container | Test it in the DevTools Styles panel, responsive mode, and target browsers. |
| `@container (min-width: 30rem)` | applies rules by container size | Test it in the DevTools Styles panel, responsive mode, and target browsers. |
| `cqi` | container query inline-size unit | Test it in the DevTools Styles panel, responsive mode, and target browsers. |

## Examples

### Example 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Container Queries practice</title>
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
      <h2>Container Queries</h2>
      <dl>
        <dt><code>container-type: inline-size</code></dt>
        <dd>enables size queries on a container</dd>
        <dt><code>@container (min-width: 30rem)</code></dt>
        <dd>applies rules by container size</dd>
        <dt><code>cqi</code></dt>
        <dd>container query inline-size unit</dd>
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
    <title>Container Queries practice</title>
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
      <caption>Container Queries quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>container-type: inline-size</code></td><td>enables size queries on a container</td></tr>
        <tr><td><code>@container (min-width: 30rem)</code></td><td>applies rules by container size</td></tr>
        <tr><td><code>cqi</code></td><td>container query inline-size unit</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

## Authoring notes

- For Container Queries, keep the cascade and specificity simple before adding overrides.
- If a property or selector is not uniform across browsers, use progressive enhancement and useful fallback.
- For sensitive decisions, compare the MDN page with the CSS specification and an actual DevTools test.

## Conceptual MDN links

This page is conceptually close to MDN topics for Container Queries, CSSOM, browser compatibility data, and accessibility guidance.

## Next step

Next reference page: **CSS Nesting Reference**.
