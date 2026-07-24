---
title: "CSS Selectors Reference"
description: "This page explains selector syntax for type, class, id, attribute, combinator, pseudo-class, and pseudo-element matching with examples, tables, and practical CSS notes."
seoTitle: "CSS Selectors Reference — MDN-style | MEGA JS Docs"
seoDescription: "CSS Selectors Reference (selectors ref): MDN-style reference with usage tables, CSS examples, browser notes, and DevTools guidance for projects with practical."
keywords: "CSS, CSS Selectors Reference, CSS selectors reference, MDN selectors, :has selector"
order: 3
track: reference
sources:
  - name: MDN Web Docs — CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Selectors Reference

CSS Selectors Reference is an author-focused MDN-style reference page. It concentrates on selector syntax for type, class, id, attribute, combinator, pseudo-class, and pseudo-element matching and favors precise definitions, usage tables, cascade effects, and browser behavior over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near CSS property references, selector references, at-rules, and layout guides. Before using CSS Selectors Reference, check browser support, computed values, and accessibility expectations.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `:is()` | matches any selector in a forgiving list | Test it in the DevTools Styles panel, responsive mode, and target browsers. |
| `:where()` | matches without adding specificity | Test it in the DevTools Styles panel, responsive mode, and target browsers. |
| `:has()` | matches based on descendants or relatives | Test it in the DevTools Styles panel, responsive mode, and target browsers. |

## Examples

### Example 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Selectors Reference practice</title>
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
      <h2>CSS Selectors Reference</h2>
      <dl>
        <dt><code>:is()</code></dt>
        <dd>matches any selector in a forgiving list</dd>
        <dt><code>:where()</code></dt>
        <dd>matches without adding specificity</dd>
        <dt><code>:has()</code></dt>
        <dd>matches based on descendants or relatives</dd>
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
    <title>CSS Selectors Reference practice</title>
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
      <caption>CSS Selectors Reference quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>:is()</code></td><td>matches any selector in a forgiving list</td></tr>
        <tr><td><code>:where()</code></td><td>matches without adding specificity</td></tr>
        <tr><td><code>:has()</code></td><td>matches based on descendants or relatives</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

## Authoring notes

- For CSS Selectors Reference, keep the cascade and specificity simple before adding overrides.
- If a property or selector is not uniform across browsers, use progressive enhancement and useful fallback.
- For sensitive decisions, compare the MDN page with the CSS specification and an actual DevTools test.

## Conceptual MDN links

This page is conceptually close to MDN topics for CSS Selectors Reference, CSSOM, browser compatibility data, and accessibility guidance.

## Next step

Next reference page: **Specificity and Cascade**.
