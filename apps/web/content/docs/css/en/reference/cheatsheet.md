---
title: "CSS Cheatsheet"
description: "This page explains a compact MDN-style checklist of selectors, layout, typography, color, motion, and responsive CSS with examples, tables, and practical CSS notes."
seoTitle: "CSS CSS Cheatsheet Reference — MDN-style | MEGA JS Docs"
seoDescription: "CSS CSS Cheatsheet Reference (cheatsheet): MDN-style reference with usage tables, CSS examples, browser notes, and DevTools guidance for projects."
keywords: "CSS, CSS Cheatsheet, CSS cheatsheet, CSS quick reference, CSS checklist"
order: 24
track: reference
sources:
  - name: MDN Web Docs — CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Cheatsheet

CSS Cheatsheet is an author-focused MDN-style reference page. It concentrates on a compact MDN-style checklist of selectors, layout, typography, color, motion, and responsive CSS and favors precise definitions, usage tables, cascade effects, and browser behavior over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near CSS property references, selector references, at-rules, and layout guides. Before using CSS Cheatsheet, check browser support, computed values, and accessibility expectations.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `selector` | chooses the target elements | Test it in the DevTools Styles panel, responsive mode, and target browsers. |
| `layout` | uses flow, flex, grid, and positioning | Test it in the DevTools Styles panel, responsive mode, and target browsers. |
| `responsive` | adapts to context and viewport | Test it in the DevTools Styles panel, responsive mode, and target browsers. |

## Examples

### Example 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Cheatsheet practice</title>
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
      <h2>CSS Cheatsheet</h2>
      <dl>
        <dt><code>selector</code></dt>
        <dd>chooses the target elements</dd>
        <dt><code>layout</code></dt>
        <dd>uses flow, flex, grid, and positioning</dd>
        <dt><code>responsive</code></dt>
        <dd>adapts to context and viewport</dd>
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
    <title>CSS Cheatsheet practice</title>
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
      <caption>CSS Cheatsheet quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>selector</code></td><td>chooses the target elements</td></tr>
        <tr><td><code>layout</code></td><td>uses flow, flex, grid, and positioning</td></tr>
        <tr><td><code>responsive</code></td><td>adapts to context and viewport</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

## Authoring notes

- For CSS Cheatsheet, keep the cascade and specificity simple before adding overrides.
- If a property or selector is not uniform across browsers, use progressive enhancement and useful fallback.
- For sensitive decisions, compare the MDN page with the CSS specification and an actual DevTools test.

## Conceptual MDN links

This page is conceptually close to MDN topics for CSS Cheatsheet, CSSOM, browser compatibility data, and accessibility guidance.

## Next step

After the reference track, open the official track for specification-oriented summaries.
