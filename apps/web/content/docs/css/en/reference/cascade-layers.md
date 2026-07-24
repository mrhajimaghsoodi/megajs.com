---
title: "Cascade Layers"
description: "This page explains using @layer to define predictable priority groups before specificity and source order conflicts with examples, tables, and practical CSS notes."
seoTitle: "CSS Cascade Layers Reference — MDN-style | MEGA JS Docs"
seoDescription: "CSS Cascade Layers Reference (cascade layers): MDN-style reference with usage tables, CSS examples, browser notes, and DevTools guidance for projects."
keywords: "CSS, Cascade Layers, CSS cascade layers, @layer, CSS architecture"
order: 18
track: reference
sources:
  - name: MDN Web Docs — CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Cascade Layers

Cascade Layers is an author-focused MDN-style reference page. It concentrates on using @layer to define predictable priority groups before specificity and source order conflicts and favors precise definitions, usage tables, cascade effects, and browser behavior over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near CSS property references, selector references, at-rules, and layout guides. Before using Cascade Layers, check browser support, computed values, and accessibility expectations.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `@layer reset, base, components` | declares layer order | Test it in the DevTools Styles panel, responsive mode, and target browsers. |
| `@layer components` | places rules inside a named layer | Test it in the DevTools Styles panel, responsive mode, and target browsers. |
| `unlayered rules` | outrank normal layered rules | Test it in the DevTools Styles panel, responsive mode, and target browsers. |

## Examples

### Example 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cascade Layers practice</title>
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
      <h2>Cascade Layers</h2>
      <dl>
        <dt><code>@layer reset, base, components</code></dt>
        <dd>declares layer order</dd>
        <dt><code>@layer components</code></dt>
        <dd>places rules inside a named layer</dd>
        <dt><code>unlayered rules</code></dt>
        <dd>outrank normal layered rules</dd>
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
    <title>Cascade Layers practice</title>
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
      <caption>Cascade Layers quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>@layer reset, base, components</code></td><td>declares layer order</td></tr>
        <tr><td><code>@layer components</code></td><td>places rules inside a named layer</td></tr>
        <tr><td><code>unlayered rules</code></td><td>outrank normal layered rules</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

## Authoring notes

- For Cascade Layers, keep the cascade and specificity simple before adding overrides.
- If a property or selector is not uniform across browsers, use progressive enhancement and useful fallback.
- For sensitive decisions, compare the MDN page with the CSS specification and an actual DevTools test.

## Conceptual MDN links

This page is conceptually close to MDN topics for Cascade Layers, CSSOM, browser compatibility data, and accessibility guidance.

## Next step

Next reference page: **Container Queries**.
