---
title: "CSS Nesting Reference"
description: "This page explains native CSS nesting syntax, the ampersand selector, grouped selectors, and cascade readability with examples, tables, and practical CSS notes."
seoTitle: "CSS Nesting Reference — MDN-style | MEGA JS Docs"
seoDescription: "CSS Nesting Reference (nesting ref): MDN-style reference with usage tables, CSS examples, browser notes, and DevTools guidance for projects with practical."
keywords: "CSS, CSS Nesting Reference, CSS nesting, native nesting, & selector"
order: 20
track: reference
sources:
  - name: MDN Web Docs — CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Nesting Reference

CSS Nesting Reference is an author-focused MDN-style reference page. It concentrates on native CSS nesting syntax, the ampersand selector, grouped selectors, and cascade readability and favors precise definitions, usage tables, cascade effects, and browser behavior over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near CSS property references, selector references, at-rules, and layout guides. Before using CSS Nesting Reference, check browser support, computed values, and accessibility expectations.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `&` | refers to the parent selector | Test it in the DevTools Styles panel, responsive mode, and target browsers. |
| `.card { & h2 {} }` | nests descendant rules | Test it in the DevTools Styles panel, responsive mode, and target browsers. |
| `@media` | can nest conditional rules | Test it in the DevTools Styles panel, responsive mode, and target browsers. |

## Examples

### Example 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Nesting Reference practice</title>
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
      <h2>CSS Nesting Reference</h2>
      <dl>
        <dt><code>&amp;</code></dt>
        <dd>refers to the parent selector</dd>
        <dt><code>.card { &amp; h2 {} }</code></dt>
        <dd>nests descendant rules</dd>
        <dt><code>@media</code></dt>
        <dd>can nest conditional rules</dd>
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
    <title>CSS Nesting Reference practice</title>
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
      <caption>CSS Nesting Reference quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>&amp;</code></td><td>refers to the parent selector</td></tr>
        <tr><td><code>.card { &amp; h2 {} }</code></td><td>nests descendant rules</td></tr>
        <tr><td><code>@media</code></td><td>can nest conditional rules</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

## Authoring notes

- For CSS Nesting Reference, keep the cascade and specificity simple before adding overrides.
- If a property or selector is not uniform across browsers, use progressive enhancement and useful fallback.
- For sensitive decisions, compare the MDN page with the CSS specification and an actual DevTools test.

## Conceptual MDN links

This page is conceptually close to MDN topics for CSS Nesting Reference, CSSOM, browser compatibility data, and accessibility guidance.

## Next step

Next reference page: **CSS At-rules Reference**.
