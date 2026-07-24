---
title: "CSS 2D Transforms"
description: "This page explains moving, scaling, rotating, and skewing boxes without affecting normal layout flow with examples, tables, and practical CSS notes."
seoTitle: "CSS 2D Transforms Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn CSS 2D Transforms (transforms 2d) with live HTML style examples, syntax tables, W3Schools practice, and DevTools tips for modern production UI."
keywords: "CSS, CSS 2D Transforms, CSS 2D Transforms, 2D Transforms tutorial, transforms 2d"
order: 56
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS 2D Transforms

CSS 2D Transforms focuses on moving, scaling, rotating, and skewing boxes without affecting normal layout flow. This is an educational rewrite inspired by the W3Schools CSS learning path, and every example uses a live-editor-friendly `<style>` block.

When you practice CSS 2D Transforms, do not stop at the visual result. Inspect the winning cascade rule, computed style in the DevTools Styles panel, box dimensions, and layout effects.

## Core idea

- `transform: translateX()`: moves a box visually on the x axis.
- `scale()`: resizes a box visually.
- `rotate()`: rotates around transform-origin.
- For this topic, smooth, performant motion that respects prefers-reduced-motion is the main sign that your CSS is doing its job.

## HTML and CSS examples

The three examples move from a focused pattern to a complete page. Run each one in the live editor, change one value, and compare the computed style.

### Example 1: Focused CSS pattern

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS 2D Transforms practice</title>
    <style>
      .tile {
        display: inline-block;
        padding: 1rem;
        border-radius: .75rem;
        background: #dbeafe;
        transform: translateX(1rem) rotate(3deg) scale(1.04);
      }
    </style>
  </head>
  <body>
    <div class="tile">CSS 2D Transforms</div>
  </body>
</html>
```

### Example 2: Options in a styled table

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS 2D Transforms practice</title>
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
      <caption>CSS 2D Transforms quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>transform: translateX()</code></td><td>moves a box visually on the x axis</td></tr>
        <tr><td><code>scale()</code></td><td>resizes a box visually</td></tr>
        <tr><td><code>rotate()</code></td><td>rotates around transform-origin</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

### Example 3: Complete practice page

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS 2D Transforms practice</title>
    <style>
      main {
        width: min(100% - 2rem, 52rem);
        margin-inline: auto;
        padding-block: 2rem;
      }
      .checklist {
        display: grid;
        gap: .75rem;
      }
    </style>
  </head>
  <body>
    <main>
      <h1>CSS 2D Transforms checklist</h1>
      <ul class="checklist">
        <li>Inspect the winning CSS rule.</li>
        <li>Check the computed style and box model.</li>
        <li>Resize the viewport and test keyboard focus.</li>
      </ul>
    </main>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `transform: translateX()` | moves a box visually on the x axis | In CSS 2D Transforms, match it to the real cascade, specificity, and layout needs of the page. |
| `scale()` | resizes a box visually | In CSS 2D Transforms, match it to the real cascade, specificity, and layout needs of the page. |
| `rotate()` | rotates around transform-origin | In CSS 2D Transforms, match it to the real cascade, specificity, and layout needs of the page. |

## Common mistakes

- Raising specificity or reaching for !important before understanding the cascade in CSS 2D Transforms.
- Copying the example without changing color tokens, spacing, breakpoints, or selectors for the real project.
- Forgetting to test `transform: translateX()` in DevTools, responsive mode, keyboard focus, and hover/focus states.

## Practice step

Create a file named `transforms-2d.html`, run the first example, then replace at least one declaration related to `transform: translateX()` with a token or project-specific value. Inspect the winning rule and box model in DevTools.

## Next step

Next, continue with **CSS 3D Transforms** so the CSS learning path builds on this concept.
