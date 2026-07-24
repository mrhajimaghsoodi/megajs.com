---
title: "CSS 3D Transforms"
description: "This page explains using perspective, 3D rotation, transform style, and backface visibility with examples, tables, and practical CSS notes."
seoTitle: "CSS 3D Transforms Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn CSS 3D Transforms (transforms 3d) with live HTML style examples, syntax tables, W3Schools practice, and DevTools tips for modern production UI."
keywords: "CSS, CSS 3D Transforms, CSS 3D Transforms, 3D Transforms tutorial, transforms 3d"
order: 57
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS 3D Transforms

CSS 3D Transforms focuses on using perspective, 3D rotation, transform style, and backface visibility. This is an educational rewrite inspired by the W3Schools CSS learning path, and every example uses a live-editor-friendly `<style>` block.

When you practice CSS 3D Transforms, do not stop at the visual result. Inspect the winning cascade rule, computed style in the DevTools Styles panel, box dimensions, and layout effects.

## Core idea

- `perspective`: adds depth to 3D transformed children.
- `rotateY()`: rotates around the y axis.
- `transform-style: preserve-3d`: keeps child transforms in 3D space.
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
    <title>CSS 3D Transforms practice</title>
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
    <div class="tile">CSS 3D Transforms</div>
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
    <title>CSS 3D Transforms practice</title>
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
      <caption>CSS 3D Transforms quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>perspective</code></td><td>adds depth to 3D transformed children</td></tr>
        <tr><td><code>rotateY()</code></td><td>rotates around the y axis</td></tr>
        <tr><td><code>transform-style: preserve-3d</code></td><td>keeps child transforms in 3D space</td></tr>
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
    <title>CSS 3D Transforms practice</title>
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
      <h1>CSS 3D Transforms checklist</h1>
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
| `perspective` | adds depth to 3D transformed children | In CSS 3D Transforms, match it to the real cascade, specificity, and layout needs of the page. |
| `rotateY()` | rotates around the y axis | In CSS 3D Transforms, match it to the real cascade, specificity, and layout needs of the page. |
| `transform-style: preserve-3d` | keeps child transforms in 3D space | In CSS 3D Transforms, match it to the real cascade, specificity, and layout needs of the page. |

## Common mistakes

- Raising specificity or reaching for !important before understanding the cascade in CSS 3D Transforms.
- Copying the example without changing color tokens, spacing, breakpoints, or selectors for the real project.
- Forgetting to test `perspective` in DevTools, responsive mode, keyboard focus, and hover/focus states.

## Practice step

Create a file named `transforms-3d.html`, run the first example, then replace at least one declaration related to `perspective` with a token or project-specific value. Inspect the winning rule and box model in DevTools.

## Next step

Next, continue with **CSS Transitions** so the CSS learning path builds on this concept.
