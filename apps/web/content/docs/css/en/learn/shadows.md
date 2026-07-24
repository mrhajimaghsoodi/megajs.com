---
title: "CSS Shadows"
description: "This page explains adding elevation and text depth with box-shadow, text-shadow, and layered shadows with examples, tables, and practical CSS notes."
seoTitle: "CSS Shadows Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn CSS Shadows (shadows) with live HTML style examples, syntax tables, W3Schools practice, and DevTools tips for modern production UI with practical drills."
keywords: "CSS, CSS Shadows, CSS Shadows, Shadows tutorial, shadows"
order: 53
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Shadows

CSS Shadows focuses on adding elevation and text depth with box-shadow, text-shadow, and layered shadows. This is an educational rewrite inspired by the W3Schools CSS learning path, and every example uses a live-editor-friendly `<style>` block.

When you practice CSS Shadows, do not stop at the visual result. Inspect the winning cascade rule, computed style in the DevTools Styles panel, box dimensions, and layout effects.

## Core idea

- `box-shadow`: adds shadow around an element box.
- `text-shadow`: adds shadow behind glyphs.
- `filter: drop-shadow()`: shadows alpha shapes.
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
    <title>CSS Shadows practice</title>
    <style>
      .card {
        opacity: .92;
        padding: 1rem;
        border-radius: 1rem;
        box-shadow: 0 1rem 2rem rgb(15 23 42 / .16);
      }
    </style>
  </head>
  <body>
    <article class="card">
      <h2>CSS Shadows</h2>
      <p>Opacity affects the entire rendered subtree.</p>
    </article>
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
    <title>CSS Shadows practice</title>
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
      <caption>CSS Shadows quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>box-shadow</code></td><td>adds shadow around an element box</td></tr>
        <tr><td><code>text-shadow</code></td><td>adds shadow behind glyphs</td></tr>
        <tr><td><code>filter: drop-shadow()</code></td><td>shadows alpha shapes</td></tr>
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
    <title>CSS Shadows practice</title>
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
      <h1>CSS Shadows checklist</h1>
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
| `box-shadow` | adds shadow around an element box | In CSS Shadows, match it to the real cascade, specificity, and layout needs of the page. |
| `text-shadow` | adds shadow behind glyphs | In CSS Shadows, match it to the real cascade, specificity, and layout needs of the page. |
| `filter: drop-shadow()` | shadows alpha shapes | In CSS Shadows, match it to the real cascade, specificity, and layout needs of the page. |

## Common mistakes

- Raising specificity or reaching for !important before understanding the cascade in CSS Shadows.
- Copying the example without changing color tokens, spacing, breakpoints, or selectors for the real project.
- Forgetting to test `box-shadow` in DevTools, responsive mode, keyboard focus, and hover/focus states.

## Practice step

Create a file named `shadows.html`, run the first example, then replace at least one declaration related to `box-shadow` with a token or project-specific value. Inspect the winning rule and box model in DevTools.

## Next step

Next, continue with **CSS Text Effects** so the CSS learning path builds on this concept.
