---
title: "CSS Colors Reference"
description: "This page explains color spaces, alpha, currentColor, gradients, system colors, and contrast-aware decisions with examples, tables, and practical CSS notes."
seoTitle: "CSS Colors Reference — MDN-style | MEGA JS Docs"
seoDescription: "CSS Colors Reference (colors ref): MDN-style reference with usage tables, CSS examples, browser notes, and DevTools guidance for projects with practical drills."
keywords: "CSS, CSS Colors Reference, CSS colors reference, color mix, OKLCH"
order: 7
track: reference
sources:
  - name: MDN Web Docs — CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Colors Reference

CSS Colors Reference is an author-focused MDN-style reference page. It concentrates on color spaces, alpha, currentColor, gradients, system colors, and contrast-aware decisions and favors precise definitions, usage tables, cascade effects, and browser behavior over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near CSS property references, selector references, at-rules, and layout guides. Before using CSS Colors Reference, check browser support, computed values, and accessibility expectations.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `currentColor` | uses the current text color | Test it in the DevTools Styles panel, responsive mode, and target browsers. |
| `color-mix()` | mixes two colors in a color space | Test it in the DevTools Styles panel, responsive mode, and target browsers. |
| `oklch()` | expresses color perceptually | Test it in the DevTools Styles panel, responsive mode, and target browsers. |

## Examples

### Example 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Colors Reference practice</title>
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
      <h2>CSS Colors Reference</h2>
      <dl>
        <dt><code>currentColor</code></dt>
        <dd>uses the current text color</dd>
        <dt><code>color-mix()</code></dt>
        <dd>mixes two colors in a color space</dd>
        <dt><code>oklch()</code></dt>
        <dd>expresses color perceptually</dd>
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
    <title>CSS Colors Reference practice</title>
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
      <caption>CSS Colors Reference quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>currentColor</code></td><td>uses the current text color</td></tr>
        <tr><td><code>color-mix()</code></td><td>mixes two colors in a color space</td></tr>
        <tr><td><code>oklch()</code></td><td>expresses color perceptually</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

## Authoring notes

- For CSS Colors Reference, keep the cascade and specificity simple before adding overrides.
- If a property or selector is not uniform across browsers, use progressive enhancement and useful fallback.
- For sensitive decisions, compare the MDN page with the CSS specification and an actual DevTools test.

## Conceptual MDN links

This page is conceptually close to MDN topics for CSS Colors Reference, CSSOM, browser compatibility data, and accessibility guidance.

## Next step

Next reference page: **CSS Typography Reference**.
