---
title: "CSS Typography Reference"
description: "This page explains fonts, font loading, line boxes, spacing, wrapping, writing modes, and readable text systems with examples, tables, and practical CSS notes."
seoTitle: "CSS Typography Reference — MDN-style | MEGA JS Docs"
seoDescription: "CSS Typography Reference (typography ref): MDN-style reference with usage tables, CSS examples, browser notes, and DevTools guidance for projects."
keywords: "CSS, CSS Typography Reference, CSS typography, web fonts, line height"
order: 8
track: reference
sources:
  - name: MDN Web Docs — CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Typography Reference

CSS Typography Reference is an author-focused MDN-style reference page. It concentrates on fonts, font loading, line boxes, spacing, wrapping, writing modes, and readable text systems and favors precise definitions, usage tables, cascade effects, and browser behavior over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near CSS property references, selector references, at-rules, and layout guides. Before using CSS Typography Reference, check browser support, computed values, and accessibility expectations.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `font-family` | defines a fallback font list | Test it in the DevTools Styles panel, responsive mode, and target browsers. |
| `line-height` | controls line box rhythm | Test it in the DevTools Styles panel, responsive mode, and target browsers. |
| `font-display` | sets web font loading behavior | Test it in the DevTools Styles panel, responsive mode, and target browsers. |

## Examples

### Example 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Typography Reference practice</title>
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
      <h2>CSS Typography Reference</h2>
      <dl>
        <dt><code>font-family</code></dt>
        <dd>defines a fallback font list</dd>
        <dt><code>line-height</code></dt>
        <dd>controls line box rhythm</dd>
        <dt><code>font-display</code></dt>
        <dd>sets web font loading behavior</dd>
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
    <title>CSS Typography Reference practice</title>
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
      <caption>CSS Typography Reference quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>font-family</code></td><td>defines a fallback font list</td></tr>
        <tr><td><code>line-height</code></td><td>controls line box rhythm</td></tr>
        <tr><td><code>font-display</code></td><td>sets web font loading behavior</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

## Authoring notes

- For CSS Typography Reference, keep the cascade and specificity simple before adding overrides.
- If a property or selector is not uniform across browsers, use progressive enhancement and useful fallback.
- For sensitive decisions, compare the MDN page with the CSS specification and an actual DevTools test.

## Conceptual MDN links

This page is conceptually close to MDN topics for CSS Typography Reference, CSSOM, browser compatibility data, and accessibility guidance.

## Next step

Next reference page: **Backgrounds and Borders Reference**.
