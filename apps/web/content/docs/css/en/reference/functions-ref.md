---
title: "CSS Functions Reference"
description: "This page explains math, color, transform, filter, image, shape, and custom property functions with examples, tables, and practical CSS notes."
seoTitle: "CSS Functions Reference — MDN-style | MEGA JS Docs"
seoDescription: "CSS Functions Reference (functions ref): MDN-style reference with usage tables, CSS examples, browser notes, and DevTools guidance for projects with practical."
keywords: "CSS, CSS Functions Reference, CSS functions, calc, var"
order: 22
track: reference
sources:
  - name: MDN Web Docs — CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Functions Reference

CSS Functions Reference is an author-focused MDN-style reference page. It concentrates on math, color, transform, filter, image, shape, and custom property functions and favors precise definitions, usage tables, cascade effects, and browser behavior over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near CSS property references, selector references, at-rules, and layout guides. Before using CSS Functions Reference, check browser support, computed values, and accessibility expectations.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `calc()` | calculates values from expressions | Test it in the DevTools Styles panel, responsive mode, and target browsers. |
| `linear-gradient()` | creates an image-like gradient | Test it in the DevTools Styles panel, responsive mode, and target browsers. |
| `var()` | substitutes a custom property value | Test it in the DevTools Styles panel, responsive mode, and target browsers. |

## Examples

### Example 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Functions Reference practice</title>
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
      <h2>CSS Functions Reference</h2>
      <dl>
        <dt><code>calc()</code></dt>
        <dd>calculates values from expressions</dd>
        <dt><code>linear-gradient()</code></dt>
        <dd>creates an image-like gradient</dd>
        <dt><code>var()</code></dt>
        <dd>substitutes a custom property value</dd>
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
    <title>CSS Functions Reference practice</title>
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
      <caption>CSS Functions Reference quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>calc()</code></td><td>calculates values from expressions</td></tr>
        <tr><td><code>linear-gradient()</code></td><td>creates an image-like gradient</td></tr>
        <tr><td><code>var()</code></td><td>substitutes a custom property value</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

## Authoring notes

- For CSS Functions Reference, keep the cascade and specificity simple before adding overrides.
- If a property or selector is not uniform across browsers, use progressive enhancement and useful fallback.
- For sensitive decisions, compare the MDN page with the CSS specification and an actual DevTools test.

## Conceptual MDN links

This page is conceptually close to MDN topics for CSS Functions Reference, CSSOM, browser compatibility data, and accessibility guidance.

## Next step

Next reference page: **CSS Accessibility Reference**.
