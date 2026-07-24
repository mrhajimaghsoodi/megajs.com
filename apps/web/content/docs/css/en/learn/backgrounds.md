---
title: "CSS Backgrounds"
description: "This page explains painting colors, images, gradients, repeats, sizes, and attachment behavior behind content with examples, tables, and practical CSS notes."
seoTitle: "CSS Backgrounds Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn CSS Backgrounds (backgrounds) with live HTML style examples, syntax tables, W3Schools practice, and DevTools tips for modern production UI."
keywords: "CSS, CSS Backgrounds, CSS Backgrounds, Backgrounds tutorial, backgrounds"
order: 9
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Backgrounds

CSS Backgrounds focuses on painting colors, images, gradients, repeats, sizes, and attachment behavior behind content. This is an educational rewrite inspired by the W3Schools CSS learning path, and every example uses a live-editor-friendly `<style>` block.

When you practice CSS Backgrounds, do not stop at the visual result. Inspect the winning cascade rule, computed style in the DevTools Styles panel, box dimensions, and layout effects.

## Core idea

- `background-color`: paints the element background color.
- `background-image`: adds an image or gradient layer.
- `background-size: cover`: scales an image to cover the box.
- For this topic, alignment between selectors, declarations, the cascade, and computed style is the main sign that your CSS is doing its job.

## HTML and CSS examples

The three examples move from a focused pattern to a complete page. Run each one in the live editor, change one value, and compare the computed style.

### Example 1: Focused CSS pattern

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Backgrounds practice</title>
    <style>
      .swatch {
        padding: 1.25rem;
        color: white;
        border-radius: 1rem;
        background: linear-gradient(135deg, #2563eb, hsl(280 80% 55%));
      }
    </style>
  </head>
  <body>
    <div class="swatch">
      <h2>CSS Backgrounds</h2>
      <p>Change the gradient colors and inspect the computed background.</p>
    </div>
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
    <title>CSS Backgrounds practice</title>
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
      <caption>CSS Backgrounds quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>background-color</code></td><td>paints the element background color</td></tr>
        <tr><td><code>background-image</code></td><td>adds an image or gradient layer</td></tr>
        <tr><td><code>background-size: cover</code></td><td>scales an image to cover the box</td></tr>
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
    <title>CSS Backgrounds practice</title>
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
      <h1>CSS Backgrounds checklist</h1>
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
| `background-color` | paints the element background color | In CSS Backgrounds, match it to the real cascade, specificity, and layout needs of the page. |
| `background-image` | adds an image or gradient layer | In CSS Backgrounds, match it to the real cascade, specificity, and layout needs of the page. |
| `background-size: cover` | scales an image to cover the box | In CSS Backgrounds, match it to the real cascade, specificity, and layout needs of the page. |

## Common mistakes

- Raising specificity or reaching for !important before understanding the cascade in CSS Backgrounds.
- Copying the example without changing color tokens, spacing, breakpoints, or selectors for the real project.
- Forgetting to test `background-color` in DevTools, responsive mode, keyboard focus, and hover/focus states.

## Practice step

Create a file named `backgrounds.html`, run the first example, then replace at least one declaration related to `background-color` with a token or project-specific value. Inspect the winning rule and box model in DevTools.

## Next step

Next, continue with **CSS Borders** so the CSS learning path builds on this concept.
