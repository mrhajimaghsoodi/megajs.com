---
title: "Transforms Reference"
description: "This page explains 2D and 3D transform functions, transform origin, matrices, perspective, and compositing effects with examples, tables, and practical CSS notes."
seoTitle: "Transforms Reference — MDN-style | MEGA JS Docs"
seoDescription: "Transforms Reference (transforms ref): MDN-style reference with usage tables, CSS examples, browser notes, and DevTools guidance for projects with practical."
keywords: "CSS, Transforms Reference, CSS transforms, 2D transforms, 3D transforms"
order: 15
track: reference
sources:
  - name: MDN Web Docs — CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Transforms Reference

Transforms Reference is an author-focused MDN-style reference page. It concentrates on 2D and 3D transform functions, transform origin, matrices, perspective, and compositing effects and favors precise definitions, usage tables, cascade effects, and browser behavior over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near CSS property references, selector references, at-rules, and layout guides. Before using Transforms Reference, check browser support, computed values, and accessibility expectations.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `translate()` | moves a box visually | Test it in the DevTools Styles panel, responsive mode, and target browsers. |
| `matrix()` | represents a transform matrix | Test it in the DevTools Styles panel, responsive mode, and target browsers. |
| `perspective()` | adds depth in transform space | Test it in the DevTools Styles panel, responsive mode, and target browsers. |

## Examples

### Example 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Transforms Reference practice</title>
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
      <h2>Transforms Reference</h2>
      <dl>
        <dt><code>translate()</code></dt>
        <dd>moves a box visually</dd>
        <dt><code>matrix()</code></dt>
        <dd>represents a transform matrix</dd>
        <dt><code>perspective()</code></dt>
        <dd>adds depth in transform space</dd>
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
    <title>Transforms Reference practice</title>
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
      <caption>Transforms Reference quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>translate()</code></td><td>moves a box visually</td></tr>
        <tr><td><code>matrix()</code></td><td>represents a transform matrix</td></tr>
        <tr><td><code>perspective()</code></td><td>adds depth in transform space</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

## Authoring notes

- For Transforms Reference, keep the cascade and specificity simple before adding overrides.
- If a property or selector is not uniform across browsers, use progressive enhancement and useful fallback.
- For sensitive decisions, compare the MDN page with the CSS specification and an actual DevTools test.

## Conceptual MDN links

This page is conceptually close to MDN topics for Transforms Reference, CSSOM, browser compatibility data, and accessibility guidance.

## Next step

Next reference page: **Transitions and Animations**.
