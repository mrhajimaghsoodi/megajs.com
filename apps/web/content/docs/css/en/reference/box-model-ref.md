---
title: "CSS Box Model Reference"
description: "This page explains box generation, dimensions, margin collapse, padding, border, outline, and box sizing with examples, tables, and practical CSS notes."
seoTitle: "CSS Box Model Reference — MDN-style | MEGA JS Docs"
seoDescription: "CSS Box Model Reference (box model ref): MDN-style reference with usage tables, CSS examples, browser notes, and DevTools guidance for projects with practical."
keywords: "CSS, CSS Box Model Reference, CSS box model, box sizing, margin collapse"
order: 5
track: reference
sources:
  - name: MDN Web Docs — CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Box Model Reference

CSS Box Model Reference is an author-focused MDN-style reference page. It concentrates on box generation, dimensions, margin collapse, padding, border, outline, and box sizing and favors precise definitions, usage tables, cascade effects, and browser behavior over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near CSS property references, selector references, at-rules, and layout guides. Before using CSS Box Model Reference, check browser support, computed values, and accessibility expectations.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `content-box` | sizes only the content area | Test it in the DevTools Styles panel, responsive mode, and target browsers. |
| `border-box` | includes padding and border in dimensions | Test it in the DevTools Styles panel, responsive mode, and target browsers. |
| `margin collapse` | vertical margins combine in normal flow | Test it in the DevTools Styles panel, responsive mode, and target browsers. |

## Examples

### Example 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Box Model Reference practice</title>
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
      <h2>CSS Box Model Reference</h2>
      <dl>
        <dt><code>content-box</code></dt>
        <dd>sizes only the content area</dd>
        <dt><code>border-box</code></dt>
        <dd>includes padding and border in dimensions</dd>
        <dt><code>margin collapse</code></dt>
        <dd>vertical margins combine in normal flow</dd>
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
    <title>CSS Box Model Reference practice</title>
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
      <caption>CSS Box Model Reference quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>content-box</code></td><td>sizes only the content area</td></tr>
        <tr><td><code>border-box</code></td><td>includes padding and border in dimensions</td></tr>
        <tr><td><code>margin collapse</code></td><td>vertical margins combine in normal flow</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

## Authoring notes

- For CSS Box Model Reference, keep the cascade and specificity simple before adding overrides.
- If a property or selector is not uniform across browsers, use progressive enhancement and useful fallback.
- For sensitive decisions, compare the MDN page with the CSS specification and an actual DevTools test.

## Conceptual MDN links

This page is conceptually close to MDN topics for CSS Box Model Reference, CSSOM, browser compatibility data, and accessibility guidance.

## Next step

Next reference page: **CSS Values and Units**.
