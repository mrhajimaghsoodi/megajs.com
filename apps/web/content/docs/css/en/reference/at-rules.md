---
title: "CSS At-rules Reference"
description: "This page explains conditional, grouping, import, font, keyframes, layer, container, media, and support rules with examples, tables, and practical CSS notes."
seoTitle: "CSS At-rules Reference — MDN-style | MEGA JS Docs"
seoDescription: "CSS At-rules Reference (at rules): MDN-style reference with usage tables, CSS examples, browser notes, and DevTools guidance for projects with practical drills."
keywords: "CSS, CSS At-rules Reference, CSS at-rules, @media, @supports"
order: 21
track: reference
sources:
  - name: MDN Web Docs — CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS At-rules Reference

CSS At-rules Reference is an author-focused MDN-style reference page. It concentrates on conditional, grouping, import, font, keyframes, layer, container, media, and support rules and favors precise definitions, usage tables, cascade effects, and browser behavior over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near CSS property references, selector references, at-rules, and layout guides. Before using CSS At-rules Reference, check browser support, computed values, and accessibility expectations.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `@media` | groups rules by media condition | Test it in the DevTools Styles panel, responsive mode, and target browsers. |
| `@supports` | tests feature support before applying CSS | Test it in the DevTools Styles panel, responsive mode, and target browsers. |
| `@font-face` | defines downloadable font faces | Test it in the DevTools Styles panel, responsive mode, and target browsers. |

## Examples

### Example 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS At-rules Reference practice</title>
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
      <h2>CSS At-rules Reference</h2>
      <dl>
        <dt><code>@media</code></dt>
        <dd>groups rules by media condition</dd>
        <dt><code>@supports</code></dt>
        <dd>tests feature support before applying CSS</dd>
        <dt><code>@font-face</code></dt>
        <dd>defines downloadable font faces</dd>
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
    <title>CSS At-rules Reference practice</title>
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
      <caption>CSS At-rules Reference quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>@media</code></td><td>groups rules by media condition</td></tr>
        <tr><td><code>@supports</code></td><td>tests feature support before applying CSS</td></tr>
        <tr><td><code>@font-face</code></td><td>defines downloadable font faces</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

## Authoring notes

- For CSS At-rules Reference, keep the cascade and specificity simple before adding overrides.
- If a property or selector is not uniform across browsers, use progressive enhancement and useful fallback.
- For sensitive decisions, compare the MDN page with the CSS specification and an actual DevTools test.

## Conceptual MDN links

This page is conceptually close to MDN topics for CSS At-rules Reference, CSSOM, browser compatibility data, and accessibility guidance.

## Next step

Next reference page: **CSS Functions Reference**.
