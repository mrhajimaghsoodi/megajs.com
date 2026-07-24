---
title: "CSS Accessibility Reference"
description: "This page explains focus visibility, color contrast, motion reduction, semantic preservation, and source order risks with examples, tables, and practical CSS notes."
seoTitle: "CSS Accessibility Reference — MDN-style | MEGA JS Docs"
seoDescription: "CSS Accessibility Reference (accessibility css): MDN-style reference with usage tables, CSS examples, browser notes, and DevTools guidance for projects."
keywords: "CSS, CSS Accessibility Reference, CSS accessibility, focus visible, color contrast"
order: 23
track: reference
sources:
  - name: MDN Web Docs — CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Accessibility Reference

CSS Accessibility Reference is an author-focused MDN-style reference page. It concentrates on focus visibility, color contrast, motion reduction, semantic preservation, and source order risks and favors precise definitions, usage tables, cascade effects, and browser behavior over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near CSS property references, selector references, at-rules, and layout guides. Before using CSS Accessibility Reference, check browser support, computed values, and accessibility expectations.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `:focus-visible` | styles keyboard-relevant focus | Test it in the DevTools Styles panel, responsive mode, and target browsers. |
| `prefers-reduced-motion` | honors motion preferences | Test it in the DevTools Styles panel, responsive mode, and target browsers. |
| `forced-colors` | supports high contrast modes | Test it in the DevTools Styles panel, responsive mode, and target browsers. |

## Examples

### Example 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Accessibility Reference practice</title>
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
      <h2>CSS Accessibility Reference</h2>
      <dl>
        <dt><code>:focus-visible</code></dt>
        <dd>styles keyboard-relevant focus</dd>
        <dt><code>prefers-reduced-motion</code></dt>
        <dd>honors motion preferences</dd>
        <dt><code>forced-colors</code></dt>
        <dd>supports high contrast modes</dd>
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
    <title>CSS Accessibility Reference practice</title>
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
      <caption>CSS Accessibility Reference quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>:focus-visible</code></td><td>styles keyboard-relevant focus</td></tr>
        <tr><td><code>prefers-reduced-motion</code></td><td>honors motion preferences</td></tr>
        <tr><td><code>forced-colors</code></td><td>supports high contrast modes</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

## Authoring notes

- For CSS Accessibility Reference, keep the cascade and specificity simple before adding overrides.
- If a property or selector is not uniform across browsers, use progressive enhancement and useful fallback.
- For sensitive decisions, compare the MDN page with the CSS specification and an actual DevTools test.

## Conceptual MDN links

This page is conceptually close to MDN topics for CSS Accessibility Reference, CSSOM, browser compatibility data, and accessibility guidance.

## Next step

Next reference page: **CSS Cheatsheet**.
