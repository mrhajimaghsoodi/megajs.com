---
title: "Responsive CSS"
description: "This page explains making CSS adapt to devices, viewport sizes, media, images, video, and framework constraints with examples, tables, and practical CSS notes."
seoTitle: "Responsive CSS Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn Responsive CSS (responsive) with live HTML style examples, syntax tables, W3Schools practice, and DevTools tips for modern production UI with practical."
keywords: "CSS, Responsive CSS, CSS responsive, Responsive CSS tutorial"
order: 78
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Responsive CSS

Responsive CSS focuses on making CSS adapt to devices, viewport sizes, media, images, video, and framework constraints. This is an educational rewrite inspired by the W3Schools CSS learning path, and every example uses a live-editor-friendly `<style>` block.

When you practice Responsive CSS, do not stop at the visual result. Inspect the winning cascade rule, computed style in the DevTools Styles panel, box dimensions, and layout effects.

## Core idea

- `@media`: changes CSS by device or viewport condition.
- `viewport`: the visible page area used by CSS.
- `fluid layout`: adapts continuously rather than at one size.
- For this topic, stable behavior across viewports and respect for user preferences is the main sign that your CSS is doing its job.

## HTML and CSS examples

The three examples move from a focused pattern to a complete page. Run each one in the live editor, change one value, and compare the computed style.

### Example 1: Focused CSS pattern

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive CSS practice</title>
    <style>
      .cards {
        display: grid;
        gap: 1rem;
      }
      @media (min-width: 48rem) {
        .cards {
          grid-template-columns: repeat(3, 1fr);
        }
      }
    </style>
  </head>
  <body>
    <div class="cards">
      <article>Small first</article>
      <article>Then wider</article>
      <article>Inspect responsive mode</article>
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
    <title>Responsive CSS practice</title>
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
      <caption>Responsive CSS quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>@media</code></td><td>changes CSS by device or viewport condition</td></tr>
        <tr><td><code>viewport</code></td><td>the visible page area used by CSS</td></tr>
        <tr><td><code>fluid layout</code></td><td>adapts continuously rather than at one size</td></tr>
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
    <title>Responsive CSS practice</title>
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
      <h1>Responsive CSS checklist</h1>
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
| `@media` | changes CSS by device or viewport condition | In Responsive CSS, match it to the real cascade, specificity, and layout needs of the page. |
| `viewport` | the visible page area used by CSS | In Responsive CSS, match it to the real cascade, specificity, and layout needs of the page. |
| `fluid layout` | adapts continuously rather than at one size | In Responsive CSS, match it to the real cascade, specificity, and layout needs of the page. |

## Common mistakes

- Raising specificity or reaching for !important before understanding the cascade in Responsive CSS.
- Copying the example without changing color tokens, spacing, breakpoints, or selectors for the real project.
- Forgetting to test `@media` in DevTools, responsive mode, keyboard focus, and hover/focus states.

## Practice step

Create a file named `responsive.html`, run the first example, then replace at least one declaration related to `@media` with a token or project-specific value. Inspect the winning rule and box model in DevTools.

## Next step

Next, continue with **RWD Viewport** so the CSS learning path builds on this concept.
