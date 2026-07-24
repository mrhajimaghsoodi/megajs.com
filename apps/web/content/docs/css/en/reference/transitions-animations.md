---
title: "Transitions and Animations"
description: "This page explains state transitions, keyframes, timing functions, motion preferences, performance, and composition with examples, tables, and practical CSS notes."
seoTitle: "CSS Transitions and Animations Reference — MDN-style | MEGA JS Docs"
seoDescription: "CSS Transitions and Animations Reference (transitions animations): MDN-style reference with usage tables, CSS examples, browser notes, and DevTools guidance."
keywords: "CSS, Transitions and Animations, CSS animations, CSS transitions, reduced motion"
order: 16
track: reference
sources:
  - name: MDN Web Docs — CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Transitions and Animations

Transitions and Animations is an author-focused MDN-style reference page. It concentrates on state transitions, keyframes, timing functions, motion preferences, performance, and composition and favors precise definitions, usage tables, cascade effects, and browser behavior over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near CSS property references, selector references, at-rules, and layout guides. Before using Transitions and Animations, check browser support, computed values, and accessibility expectations.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `transition` | animates a change between states | Test it in the DevTools Styles panel, responsive mode, and target browsers. |
| `@keyframes` | defines animation timeline steps | Test it in the DevTools Styles panel, responsive mode, and target browsers. |
| `prefers-reduced-motion` | detects reduced motion preference | Test it in the DevTools Styles panel, responsive mode, and target browsers. |

## Examples

### Example 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Transitions and Animations practice</title>
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
      <h2>Transitions and Animations</h2>
      <dl>
        <dt><code>transition</code></dt>
        <dd>animates a change between states</dd>
        <dt><code>@keyframes</code></dt>
        <dd>defines animation timeline steps</dd>
        <dt><code>prefers-reduced-motion</code></dt>
        <dd>detects reduced motion preference</dd>
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
    <title>Transitions and Animations practice</title>
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
      <caption>Transitions and Animations quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>transition</code></td><td>animates a change between states</td></tr>
        <tr><td><code>@keyframes</code></td><td>defines animation timeline steps</td></tr>
        <tr><td><code>prefers-reduced-motion</code></td><td>detects reduced motion preference</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

## Authoring notes

- For Transitions and Animations, keep the cascade and specificity simple before adding overrides.
- If a property or selector is not uniform across browsers, use progressive enhancement and useful fallback.
- For sensitive decisions, compare the MDN page with the CSS specification and an actual DevTools test.

## Conceptual MDN links

This page is conceptually close to MDN topics for Transitions and Animations, CSSOM, browser compatibility data, and accessibility guidance.

## Next step

Next reference page: **Custom Properties**.
