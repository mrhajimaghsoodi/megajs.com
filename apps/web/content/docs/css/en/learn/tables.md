---
title: "CSS Tables"
description: "This page explains styling real tabular data with borders, spacing, captions, and responsive wrappers with examples, tables, and practical CSS notes."
seoTitle: "CSS Tables Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn CSS Tables (tables) with live HTML style examples, syntax tables, W3Schools practice, and DevTools tips for modern production UI with practical drills."
keywords: "CSS, CSS Tables, CSS Tables, Tables tutorial, tables"
order: 22
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Tables

CSS Tables focuses on styling real tabular data with borders, spacing, captions, and responsive wrappers. This is an educational rewrite inspired by the W3Schools CSS learning path, and every example uses a live-editor-friendly `<style>` block.

When you practice CSS Tables, do not stop at the visual result. Inspect the winning cascade rule, computed style in the DevTools Styles panel, box dimensions, and layout effects.

## Core idea

- `border-collapse`: controls shared table borders.
- `caption-side`: places the table caption.
- `overflow-x: auto`: allows wide tables to scroll safely.
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
    <title>CSS Tables practice</title>
    <style>
      .table-wrap {
        overflow-x: auto;
      }
      table {
        border-collapse: collapse;
        min-width: 28rem;
      }
      th,
      td {
        border: 1px solid #cbd5e1;
        padding: .65rem;
      }
    </style>
  </head>
  <body>
    <div class="table-wrap">
      <table>
        <caption>CSS Tables quick table</caption>
        <tr><th>Property</th><th>Value</th></tr>
        <tr><td>border-collapse</td><td>collapse</td></tr>
      </table>
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
    <title>CSS Tables practice</title>
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
      <caption>CSS Tables quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>border-collapse</code></td><td>controls shared table borders</td></tr>
        <tr><td><code>caption-side</code></td><td>places the table caption</td></tr>
        <tr><td><code>overflow-x: auto</code></td><td>allows wide tables to scroll safely</td></tr>
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
    <title>CSS Tables practice</title>
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
      <h1>CSS Tables checklist</h1>
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
| `border-collapse` | controls shared table borders | In CSS Tables, match it to the real cascade, specificity, and layout needs of the page. |
| `caption-side` | places the table caption | In CSS Tables, match it to the real cascade, specificity, and layout needs of the page. |
| `overflow-x: auto` | allows wide tables to scroll safely | In CSS Tables, match it to the real cascade, specificity, and layout needs of the page. |

## Common mistakes

- Raising specificity or reaching for !important before understanding the cascade in CSS Tables.
- Copying the example without changing color tokens, spacing, breakpoints, or selectors for the real project.
- Forgetting to test `border-collapse` in DevTools, responsive mode, keyboard focus, and hover/focus states.

## Practice step

Create a file named `tables.html`, run the first example, then replace at least one declaration related to `border-collapse` with a token or project-specific value. Inspect the winning rule and box model in DevTools.

## Next step

Next, continue with **CSS Layout Basics** so the CSS learning path builds on this concept.
