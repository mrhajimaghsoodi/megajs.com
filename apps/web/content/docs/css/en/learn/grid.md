---
title: "CSS Grid"
description: "This page explains building two-dimensional layout systems with explicit tracks, placement, gaps, and named areas with examples, tables, and practical CSS notes."
seoTitle: "CSS Grid Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn CSS Grid (grid) with live HTML style examples, syntax tables, W3Schools practice, and DevTools tips for modern production UI with practical drills."
keywords: "CSS, CSS Grid, CSS grid, CSS Grid tutorial"
order: 74
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Grid

CSS Grid focuses on building two-dimensional layout systems with explicit tracks, placement, gaps, and named areas. This is an educational rewrite inspired by the W3Schools CSS learning path, and every example uses a live-editor-friendly `<style>` block.

When you practice CSS Grid, do not stop at the visual result. Inspect the winning cascade rule, computed style in the DevTools Styles panel, box dimensions, and layout effects.

## Core idea

- `display: grid`: creates a two-dimensional layout context.
- `grid track`: a row or column in the grid.
- `grid area`: a named or line-based placement region.
- For this topic, understandable tracks, stable gaps, and visible placement in the grid overlay is the main sign that your CSS is doing its job.

## HTML and CSS examples

The three examples move from a focused pattern to a complete page. Run each one in the live editor, change one value, and compare the computed style.

### Example 1: Focused CSS pattern

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Grid practice</title>
    <style>
      .layout {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
        gap: 1rem;
      }
      .layout > * {
        padding: 1rem;
        border-radius: .75rem;
        background: #f1f5f9;
      }
    </style>
  </head>
  <body>
    <main class="layout">
      <section>CSS Grid</section>
      <section>Grid adapts tracks.</section>
      <section>Inspect grid overlay.</section>
    </main>
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
    <title>CSS Grid practice</title>
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
      <caption>CSS Grid quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>display: grid</code></td><td>creates a two-dimensional layout context</td></tr>
        <tr><td><code>grid track</code></td><td>a row or column in the grid</td></tr>
        <tr><td><code>grid area</code></td><td>a named or line-based placement region</td></tr>
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
    <title>CSS Grid practice</title>
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
      <h1>CSS Grid checklist</h1>
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
| `display: grid` | creates a two-dimensional layout context | In CSS Grid, match it to the real cascade, specificity, and layout needs of the page. |
| `grid track` | a row or column in the grid | In CSS Grid, match it to the real cascade, specificity, and layout needs of the page. |
| `grid area` | a named or line-based placement region | In CSS Grid, match it to the real cascade, specificity, and layout needs of the page. |

## Common mistakes

- Raising specificity or reaching for !important before understanding the cascade in CSS Grid.
- Copying the example without changing color tokens, spacing, breakpoints, or selectors for the real project.
- Forgetting to test `display: grid` in DevTools, responsive mode, keyboard focus, and hover/focus states.

## Practice step

Create a file named `grid.html`, run the first example, then replace at least one declaration related to `display: grid` with a token or project-specific value. Inspect the winning rule and box model in DevTools.

## Next step

Next, continue with **CSS Grid Container** so the CSS learning path builds on this concept.
