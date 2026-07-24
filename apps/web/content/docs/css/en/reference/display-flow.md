---
title: "Display and Flow Layout"
description: "This page explains display values, block and inline formatting, flow-root, floats, fragmentation, and normal flow with examples, tables, and practical CSS notes."
seoTitle: "CSS Display and Flow Layout Reference — MDN-style | MEGA JS Docs"
seoDescription: "CSS Display and Flow Layout Reference (display flow): MDN-style reference with usage tables, CSS examples, browser notes, and DevTools guidance for projects."
keywords: "CSS, Display and Flow Layout, CSS display, flow layout, normal flow"
order: 10
track: reference
sources:
  - name: MDN Web Docs — CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Display and Flow Layout

Display and Flow Layout is an author-focused MDN-style reference page. It concentrates on display values, block and inline formatting, flow-root, floats, fragmentation, and normal flow and favors precise definitions, usage tables, cascade effects, and browser behavior over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near CSS property references, selector references, at-rules, and layout guides. Before using Display and Flow Layout, check browser support, computed values, and accessibility expectations.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `display` | controls internal and external box behavior | Test it in the DevTools Styles panel, responsive mode, and target browsers. |
| `flow-root` | creates a new block formatting context | Test it in the DevTools Styles panel, responsive mode, and target browsers. |
| `normal flow` | default layout before positioning or floats | Test it in the DevTools Styles panel, responsive mode, and target browsers. |

## Examples

### Example 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Display and Flow Layout practice</title>
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
      <h2>Display and Flow Layout</h2>
      <dl>
        <dt><code>display</code></dt>
        <dd>controls internal and external box behavior</dd>
        <dt><code>flow-root</code></dt>
        <dd>creates a new block formatting context</dd>
        <dt><code>normal flow</code></dt>
        <dd>default layout before positioning or floats</dd>
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
    <title>Display and Flow Layout practice</title>
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
      <caption>Display and Flow Layout quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>display</code></td><td>controls internal and external box behavior</td></tr>
        <tr><td><code>flow-root</code></td><td>creates a new block formatting context</td></tr>
        <tr><td><code>normal flow</code></td><td>default layout before positioning or floats</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

## Authoring notes

- For Display and Flow Layout, keep the cascade and specificity simple before adding overrides.
- If a property or selector is not uniform across browsers, use progressive enhancement and useful fallback.
- For sensitive decisions, compare the MDN page with the CSS specification and an actual DevTools test.

## Conceptual MDN links

This page is conceptually close to MDN topics for Display and Flow Layout, CSSOM, browser compatibility data, and accessibility guidance.

## Next step

Next reference page: **CSS Positioning Reference**.
