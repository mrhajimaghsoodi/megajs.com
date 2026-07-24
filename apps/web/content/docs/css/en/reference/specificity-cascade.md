---
title: "Specificity and Cascade"
description: "This page explains selector weight, cascade layers, source order, and maintainable override strategy with examples, tables, and practical CSS notes."
seoTitle: "CSS Specificity and Cascade Reference — MDN-style | MEGA JS Docs"
seoDescription: "CSS Specificity and Cascade Reference (specificity cascade): MDN-style reference with usage tables, CSS examples, browser notes, and DevTools guidance."
keywords: "CSS, Specificity and Cascade, CSS specificity, cascade layers, CSS order"
order: 4
track: reference
sources:
  - name: MDN Web Docs — CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Specificity and Cascade

Specificity and Cascade is an author-focused MDN-style reference page. It concentrates on selector weight, cascade layers, source order, and maintainable override strategy and favors precise definitions, usage tables, cascade effects, and browser behavior over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near CSS property references, selector references, at-rules, and layout guides. Before using Specificity and Cascade, check browser support, computed values, and accessibility expectations.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `specificity` | selector weight in the cascade | Test it in the DevTools Styles panel, responsive mode, and target browsers. |
| `@layer` | organizes rule priority by named layers | Test it in the DevTools Styles panel, responsive mode, and target browsers. |
| `source order` | breaks ties when priority is otherwise equal | Test it in the DevTools Styles panel, responsive mode, and target browsers. |

## Examples

### Example 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Specificity and Cascade practice</title>
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
      <h2>Specificity and Cascade</h2>
      <dl>
        <dt><code>specificity</code></dt>
        <dd>selector weight in the cascade</dd>
        <dt><code>@layer</code></dt>
        <dd>organizes rule priority by named layers</dd>
        <dt><code>source order</code></dt>
        <dd>breaks ties when priority is otherwise equal</dd>
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
    <title>Specificity and Cascade practice</title>
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
      <caption>Specificity and Cascade quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>specificity</code></td><td>selector weight in the cascade</td></tr>
        <tr><td><code>@layer</code></td><td>organizes rule priority by named layers</td></tr>
        <tr><td><code>source order</code></td><td>breaks ties when priority is otherwise equal</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

## Authoring notes

- For Specificity and Cascade, keep the cascade and specificity simple before adding overrides.
- If a property or selector is not uniform across browsers, use progressive enhancement and useful fallback.
- For sensitive decisions, compare the MDN page with the CSS specification and an actual DevTools test.

## Conceptual MDN links

This page is conceptually close to MDN topics for Specificity and Cascade, CSSOM, browser compatibility data, and accessibility guidance.

## Next step

Next reference page: **CSS Box Model Reference**.
