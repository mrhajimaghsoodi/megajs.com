---
title: "Backgrounds and Borders Reference"
description: "This page explains background layers, images, clipping, borders, radius, outlines, and decorative border images with examples, tables, and practical CSS notes."
seoTitle: "Backgrounds and Borders Reference — MDN-style | MEGA JS Docs"
seoDescription: "Backgrounds and Borders Reference (backgrounds borders ref): MDN-style reference with usage tables, CSS examples, browser notes, and DevTools guidance."
keywords: "CSS, Backgrounds and Borders Reference, CSS backgrounds, CSS borders, background clip"
order: 9
track: reference
sources:
  - name: MDN Web Docs — CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Backgrounds and Borders Reference

Backgrounds and Borders Reference is an author-focused MDN-style reference page. It concentrates on background layers, images, clipping, borders, radius, outlines, and decorative border images and favors precise definitions, usage tables, cascade effects, and browser behavior over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near CSS property references, selector references, at-rules, and layout guides. Before using Backgrounds and Borders Reference, check browser support, computed values, and accessibility expectations.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `background-clip` | sets the painting area | Test it in the DevTools Styles panel, responsive mode, and target browsers. |
| `background-origin` | sets image positioning origin | Test it in the DevTools Styles panel, responsive mode, and target browsers. |
| `border-radius` | rounds border corners | Test it in the DevTools Styles panel, responsive mode, and target browsers. |

## Examples

### Example 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Backgrounds and Borders Reference practice</title>
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
      <h2>Backgrounds and Borders Reference</h2>
      <dl>
        <dt><code>background-clip</code></dt>
        <dd>sets the painting area</dd>
        <dt><code>background-origin</code></dt>
        <dd>sets image positioning origin</dd>
        <dt><code>border-radius</code></dt>
        <dd>rounds border corners</dd>
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
    <title>Backgrounds and Borders Reference practice</title>
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
      <caption>Backgrounds and Borders Reference quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>background-clip</code></td><td>sets the painting area</td></tr>
        <tr><td><code>background-origin</code></td><td>sets image positioning origin</td></tr>
        <tr><td><code>border-radius</code></td><td>rounds border corners</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

## Authoring notes

- For Backgrounds and Borders Reference, keep the cascade and specificity simple before adding overrides.
- If a property or selector is not uniform across browsers, use progressive enhancement and useful fallback.
- For sensitive decisions, compare the MDN page with the CSS specification and an actual DevTools test.

## Conceptual MDN links

This page is conceptually close to MDN topics for Backgrounds and Borders Reference, CSSOM, browser compatibility data, and accessibility guidance.

## Next step

Next reference page: **Display and Flow Layout**.
