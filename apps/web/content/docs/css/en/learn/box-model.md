---
title: "CSS Box Model"
description: "This page explains how content, padding, border, and margin combine into layout boxes with examples, tables, and practical CSS notes."
seoTitle: "CSS Box Model Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn CSS Box Model (box model) with live HTML style examples, syntax tables, W3Schools practice, and DevTools tips for modern production UI with practical."
keywords: "CSS, CSS Box Model, CSS Box Model, Box Model tutorial, box model"
order: 14
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Box Model

CSS Box Model focuses on how content, padding, border, and margin combine into layout boxes. This is an educational rewrite inspired by the W3Schools CSS learning path, and every example uses a live-editor-friendly `<style>` block.

When you practice CSS Box Model, do not stop at the visual result. Inspect the winning cascade rule, computed style in the DevTools Styles panel, box dimensions, and layout effects.

## Core idea

- `content box`: contains text, images, and child boxes.
- `padding box`: wraps content plus inner spacing.
- `border box`: includes content, padding, and border.
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
    <title>CSS Box Model practice</title>
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
      <h2>CSS Box Model</h2>
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
    <title>CSS Box Model practice</title>
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
      <caption>CSS Box Model quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>content box</code></td><td>contains text, images, and child boxes</td></tr>
        <tr><td><code>padding box</code></td><td>wraps content plus inner spacing</td></tr>
        <tr><td><code>border box</code></td><td>includes content, padding, and border</td></tr>
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
    <title>CSS Box Model practice</title>
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
      <h1>CSS Box Model checklist</h1>
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
| `content box` | contains text, images, and child boxes | In CSS Box Model, match it to the real cascade, specificity, and layout needs of the page. |
| `padding box` | wraps content plus inner spacing | In CSS Box Model, match it to the real cascade, specificity, and layout needs of the page. |
| `border box` | includes content, padding, and border | In CSS Box Model, match it to the real cascade, specificity, and layout needs of the page. |

## Common mistakes

- Raising specificity or reaching for !important before understanding the cascade in CSS Box Model.
- Copying the example without changing color tokens, spacing, breakpoints, or selectors for the real project.
- Forgetting to test `content box` in DevTools, responsive mode, keyboard focus, and hover/focus states.

## Practice step

Create a file named `box-model.html`, run the first example, then replace at least one declaration related to `content box` with a token or project-specific value. Inspect the winning rule and box model in DevTools.

## Next step

Next, continue with **CSS Outline** so the CSS learning path builds on this concept.
