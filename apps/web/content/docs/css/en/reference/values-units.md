---
title: "CSS Values and Units"
description: "This page explains numbers, dimensions, percentages, lengths, angles, times, functions, and typed CSS values with examples, tables, and practical CSS notes."
seoTitle: "CSS CSS Values and Units Reference — MDN-style | MEGA JS Docs"
seoDescription: "CSS CSS Values and Units Reference (values units): MDN-style reference with usage tables, CSS examples, browser notes, and DevTools guidance for projects."
keywords: "CSS, CSS Values and Units, CSS values, CSS units, rem em clamp"
order: 6
track: reference
sources:
  - name: MDN Web Docs — CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Values and Units

CSS Values and Units is an author-focused MDN-style reference page. It concentrates on numbers, dimensions, percentages, lengths, angles, times, functions, and typed CSS values and favors precise definitions, usage tables, cascade effects, and browser behavior over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near CSS property references, selector references, at-rules, and layout guides. Before using CSS Values and Units, check browser support, computed values, and accessibility expectations.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `rem` | root-relative length unit | Test it in the DevTools Styles panel, responsive mode, and target browsers. |
| `clamp()` | bounds a preferred value | Test it in the DevTools Styles panel, responsive mode, and target browsers. |
| `<length-percentage>` | accepts lengths or percentages | Test it in the DevTools Styles panel, responsive mode, and target browsers. |

## Examples

### Example 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Values and Units practice</title>
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
      <h2>CSS Values and Units</h2>
      <dl>
        <dt><code>rem</code></dt>
        <dd>root-relative length unit</dd>
        <dt><code>clamp()</code></dt>
        <dd>bounds a preferred value</dd>
        <dt><code>&lt;length-percentage&gt;</code></dt>
        <dd>accepts lengths or percentages</dd>
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
    <title>CSS Values and Units practice</title>
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
      <caption>CSS Values and Units quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>rem</code></td><td>root-relative length unit</td></tr>
        <tr><td><code>clamp()</code></td><td>bounds a preferred value</td></tr>
        <tr><td><code>&lt;length-percentage&gt;</code></td><td>accepts lengths or percentages</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

## Authoring notes

- For CSS Values and Units, keep the cascade and specificity simple before adding overrides.
- If a property or selector is not uniform across browsers, use progressive enhancement and useful fallback.
- For sensitive decisions, compare the MDN page with the CSS specification and an actual DevTools test.

## Conceptual MDN links

This page is conceptually close to MDN topics for CSS Values and Units, CSSOM, browser compatibility data, and accessibility guidance.

## Next step

Next reference page: **CSS Colors Reference**.
