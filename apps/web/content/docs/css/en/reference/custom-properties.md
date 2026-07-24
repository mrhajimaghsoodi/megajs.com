---
title: "Custom Properties"
description: "This page explains CSS variables, inheritance, fallback values, design tokens, runtime theming, and component APIs with examples, tables, and practical CSS notes."
seoTitle: "CSS Custom Properties Reference — MDN-style | MEGA JS Docs"
seoDescription: "CSS Custom Properties Reference (custom properties): MDN-style reference with usage tables, CSS examples, browser notes, and DevTools guidance for projects."
keywords: "CSS, Custom Properties, CSS variables, custom properties, @property"
order: 17
track: reference
sources:
  - name: MDN Web Docs — CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Custom Properties

Custom Properties is an author-focused MDN-style reference page. It concentrates on CSS variables, inheritance, fallback values, design tokens, runtime theming, and component APIs and favors precise definitions, usage tables, cascade effects, and browser behavior over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near CSS property references, selector references, at-rules, and layout guides. Before using Custom Properties, check browser support, computed values, and accessibility expectations.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `--space-4` | declares a custom property token | Test it in the DevTools Styles panel, responsive mode, and target browsers. |
| `var(--space-4, 1rem)` | reads a token with fallback | Test it in the DevTools Styles panel, responsive mode, and target browsers. |
| `@property` | registers typed custom properties | Test it in the DevTools Styles panel, responsive mode, and target browsers. |

## Examples

### Example 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom Properties practice</title>
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
      <h2>Custom Properties</h2>
      <dl>
        <dt><code>--space-4</code></dt>
        <dd>declares a custom property token</dd>
        <dt><code>var(--space-4, 1rem)</code></dt>
        <dd>reads a token with fallback</dd>
        <dt><code>@property</code></dt>
        <dd>registers typed custom properties</dd>
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
    <title>Custom Properties practice</title>
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
      <caption>Custom Properties quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>--space-4</code></td><td>declares a custom property token</td></tr>
        <tr><td><code>var(--space-4, 1rem)</code></td><td>reads a token with fallback</td></tr>
        <tr><td><code>@property</code></td><td>registers typed custom properties</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

## Authoring notes

- For Custom Properties, keep the cascade and specificity simple before adding overrides.
- If a property or selector is not uniform across browsers, use progressive enhancement and useful fallback.
- For sensitive decisions, compare the MDN page with the CSS specification and an actual DevTools test.

## Conceptual MDN links

This page is conceptually close to MDN topics for Custom Properties, CSSOM, browser compatibility data, and accessibility guidance.

## Next step

Next reference page: **Cascade Layers**.
