---
title: "CSS Padding"
description: "This page explains creating inner spacing between content and border without changing relationships outside with examples, tables, and practical CSS notes."
seoTitle: "CSS Padding Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn CSS Padding (padding) with live HTML style examples, syntax tables, W3Schools practice, and DevTools tips for modern production UI with practical drills."
keywords: "CSS, CSS Padding, CSS Padding, Padding tutorial, padding"
order: 12
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Padding

CSS Padding focuses on creating inner spacing between content and border without changing relationships outside. This is an educational rewrite inspired by the W3Schools CSS learning path, and every example uses a live-editor-friendly `<style>` block.

When you practice CSS Padding, do not stop at the visual result. Inspect the winning cascade rule, computed style in the DevTools Styles panel, box dimensions, and layout effects.

## Core idea

- `padding`: sets space inside the border.
- `padding-inline`: sets logical left/right spacing.
- `box-sizing`: controls how padding affects dimensions.
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
    <title>CSS Padding practice</title>
    <style>
      .box {
        box-sizing: border-box;
        width: min(100%, 28rem);
        margin: 2rem auto;
        padding: 1.5rem;
        border: 3px solid #0f766e;
      }
    </style>
  </head>
  <body>
    <section class="box">
      <h2>CSS Padding</h2>
      <p>Open the DevTools box model view and compare margin, border, and padding.</p>
    </section>
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
    <title>CSS Padding practice</title>
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
      <caption>CSS Padding quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>padding</code></td><td>sets space inside the border</td></tr>
        <tr><td><code>padding-inline</code></td><td>sets logical left/right spacing</td></tr>
        <tr><td><code>box-sizing</code></td><td>controls how padding affects dimensions</td></tr>
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
    <title>CSS Padding practice</title>
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
      <h1>CSS Padding checklist</h1>
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
| `padding` | sets space inside the border | In CSS Padding, match it to the real cascade, specificity, and layout needs of the page. |
| `padding-inline` | sets logical left/right spacing | In CSS Padding, match it to the real cascade, specificity, and layout needs of the page. |
| `box-sizing` | controls how padding affects dimensions | In CSS Padding, match it to the real cascade, specificity, and layout needs of the page. |

## Common mistakes

- Raising specificity or reaching for !important before understanding the cascade in CSS Padding.
- Copying the example without changing color tokens, spacing, breakpoints, or selectors for the real project.
- Forgetting to test `padding` in DevTools, responsive mode, keyboard focus, and hover/focus states.

## Practice step

Create a file named `padding.html`, run the first example, then replace at least one declaration related to `padding` with a token or project-specific value. Inspect the winning rule and box model in DevTools.

## Next step

Next, continue with **CSS Height and Width** so the CSS learning path builds on this concept.
