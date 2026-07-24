---
title: "CSS Positioning Reference"
description: "This page explains position values, containing blocks, inset properties, sticky behavior, and stacking contexts with examples, tables, and practical CSS notes."
seoTitle: "CSS Positioning Reference — MDN-style | MEGA JS Docs"
seoDescription: "CSS Positioning Reference (positioning ref): MDN-style reference with usage tables, CSS examples, browser notes, and DevTools guidance for projects."
keywords: "CSS, CSS Positioning Reference, CSS positioning, sticky, z-index"
order: 11
track: reference
sources:
  - name: MDN Web Docs — CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Positioning Reference

CSS Positioning Reference is an author-focused MDN-style reference page. It concentrates on position values, containing blocks, inset properties, sticky behavior, and stacking contexts and favors precise definitions, usage tables, cascade effects, and browser behavior over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near CSS property references, selector references, at-rules, and layout guides. Before using CSS Positioning Reference, check browser support, computed values, and accessibility expectations.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `position: sticky` | sticks relative to a scroll container | Test it in the DevTools Styles panel, responsive mode, and target browsers. |
| `inset` | sets logical or physical offsets | Test it in the DevTools Styles panel, responsive mode, and target browsers. |
| `z-index` | orders boxes in stacking contexts | Test it in the DevTools Styles panel, responsive mode, and target browsers. |

## Examples

### Example 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Positioning Reference practice</title>
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
      <h2>CSS Positioning Reference</h2>
      <dl>
        <dt><code>position: sticky</code></dt>
        <dd>sticks relative to a scroll container</dd>
        <dt><code>inset</code></dt>
        <dd>sets logical or physical offsets</dd>
        <dt><code>z-index</code></dt>
        <dd>orders boxes in stacking contexts</dd>
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
    <title>CSS Positioning Reference practice</title>
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
      <caption>CSS Positioning Reference quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>position: sticky</code></td><td>sticks relative to a scroll container</td></tr>
        <tr><td><code>inset</code></td><td>sets logical or physical offsets</td></tr>
        <tr><td><code>z-index</code></td><td>orders boxes in stacking contexts</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

## Authoring notes

- For CSS Positioning Reference, keep the cascade and specificity simple before adding overrides.
- If a property or selector is not uniform across browsers, use progressive enhancement and useful fallback.
- For sensitive decisions, compare the MDN page with the CSS specification and an actual DevTools test.

## Conceptual MDN links

This page is conceptually close to MDN topics for CSS Positioning Reference, CSSOM, browser compatibility data, and accessibility guidance.

## Next step

Next reference page: **Flexbox Reference**.
