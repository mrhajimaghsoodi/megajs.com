---
title: "Flexbox Reference"
description: "This page explains flex formatting contexts, axes, wrapping, alignment, flexible sizing, and item ordering with examples, tables, and practical CSS notes."
seoTitle: "Flexbox Reference — MDN-style | MEGA JS Docs"
seoDescription: "Flexbox Reference (flexbox ref): MDN-style reference with usage tables, CSS examples, browser notes, and DevTools guidance for projects with practical drills."
keywords: "CSS, Flexbox Reference, Flexbox reference, CSS flex, flex basis"
order: 12
track: reference
sources:
  - name: MDN Web Docs — CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Flexbox Reference

Flexbox Reference is an author-focused MDN-style reference page. It concentrates on flex formatting contexts, axes, wrapping, alignment, flexible sizing, and item ordering and favors precise definitions, usage tables, cascade effects, and browser behavior over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near CSS property references, selector references, at-rules, and layout guides. Before using Flexbox Reference, check browser support, computed values, and accessibility expectations.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `flex-basis` | sets initial main-axis size | Test it in the DevTools Styles panel, responsive mode, and target browsers. |
| `flex-grow` | distributes positive free space | Test it in the DevTools Styles panel, responsive mode, and target browsers. |
| `align-items` | aligns items on the cross axis | Test it in the DevTools Styles panel, responsive mode, and target browsers. |

## Examples

### Example 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox Reference practice</title>
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
      <h2>Flexbox Reference</h2>
      <dl>
        <dt><code>flex-basis</code></dt>
        <dd>sets initial main-axis size</dd>
        <dt><code>flex-grow</code></dt>
        <dd>distributes positive free space</dd>
        <dt><code>align-items</code></dt>
        <dd>aligns items on the cross axis</dd>
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
    <title>Flexbox Reference practice</title>
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
      <caption>Flexbox Reference quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>flex-basis</code></td><td>sets initial main-axis size</td></tr>
        <tr><td><code>flex-grow</code></td><td>distributes positive free space</td></tr>
        <tr><td><code>align-items</code></td><td>aligns items on the cross axis</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

## Authoring notes

- For Flexbox Reference, keep the cascade and specificity simple before adding overrides.
- If a property or selector is not uniform across browsers, use progressive enhancement and useful fallback.
- For sensitive decisions, compare the MDN page with the CSS specification and an actual DevTools test.

## Conceptual MDN links

This page is conceptually close to MDN topics for Flexbox Reference, CSSOM, browser compatibility data, and accessibility guidance.

## Next step

Next reference page: **Grid Reference**.
