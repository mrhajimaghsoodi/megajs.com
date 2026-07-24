---
title: "Cascade and Inheritance"
description: "This page explains how origins, importance, layers, specificity, order, inheritance, and initial values resolve CSS with examples, tables, and practical CSS notes."
seoTitle: "CSS Cascade and Inheritance Reference — MDN-style | MEGA JS Docs"
seoDescription: "CSS Cascade and Inheritance Reference (cascade inheritance): MDN-style reference with usage tables, CSS examples, browser notes, and DevTools guidance."
keywords: "CSS, Cascade and Inheritance, CSS cascade, inheritance, computed value"
order: 2
track: reference
sources:
  - name: MDN Web Docs — CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Cascade and Inheritance

Cascade and Inheritance is an author-focused MDN-style reference page. It concentrates on how origins, importance, layers, specificity, order, inheritance, and initial values resolve CSS and favors precise definitions, usage tables, cascade effects, and browser behavior over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near CSS property references, selector references, at-rules, and layout guides. Before using Cascade and Inheritance, check browser support, computed values, and accessibility expectations.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `cascade` | chooses the winning declaration | Test it in the DevTools Styles panel, responsive mode, and target browsers. |
| `inherit` | uses the parent computed value | Test it in the DevTools Styles panel, responsive mode, and target browsers. |
| `initial` | uses the property initial value | Test it in the DevTools Styles panel, responsive mode, and target browsers. |

## Examples

### Example 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cascade and Inheritance practice</title>
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
      <h2>Cascade and Inheritance</h2>
      <dl>
        <dt><code>cascade</code></dt>
        <dd>chooses the winning declaration</dd>
        <dt><code>inherit</code></dt>
        <dd>uses the parent computed value</dd>
        <dt><code>initial</code></dt>
        <dd>uses the property initial value</dd>
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
    <title>Cascade and Inheritance practice</title>
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
      <caption>Cascade and Inheritance quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>cascade</code></td><td>chooses the winning declaration</td></tr>
        <tr><td><code>inherit</code></td><td>uses the parent computed value</td></tr>
        <tr><td><code>initial</code></td><td>uses the property initial value</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

## Authoring notes

- For Cascade and Inheritance, keep the cascade and specificity simple before adding overrides.
- If a property or selector is not uniform across browsers, use progressive enhancement and useful fallback.
- For sensitive decisions, compare the MDN page with the CSS specification and an actual DevTools test.

## Conceptual MDN links

This page is conceptually close to MDN topics for Cascade and Inheritance, CSSOM, browser compatibility data, and accessibility guidance.

## Next step

Next reference page: **CSS Selectors Reference**.
