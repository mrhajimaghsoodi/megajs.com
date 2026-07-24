---
title: "CSS Display"
description: "This page explains choosing block, inline, flex, grid, none, and flow-root display behavior with examples, tables, and practical CSS notes."
seoTitle: "CSS Display Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn CSS Display (display) with live HTML style examples, syntax tables, W3Schools practice, and DevTools tips for modern production UI with practical drills."
keywords: "CSS, CSS Display, CSS Display, Display tutorial, display"
order: 24
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Display

CSS Display focuses on choosing block, inline, flex, grid, none, and flow-root display behavior. This is an educational rewrite inspired by the W3Schools CSS learning path, and every example uses a live-editor-friendly `<style>` block.

When you practice CSS Display, do not stop at the visual result. Inspect the winning cascade rule, computed style in the DevTools Styles panel, box dimensions, and layout effects.

## Core idea

- `display: block`: starts a block formatting context participant.
- `display: flex`: creates a flex formatting context.
- `display: none`: removes the box and descendants from layout.
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
    <title>CSS Display practice</title>
    <style>
      .cluster {
        display: flex;
        flex-wrap: wrap;
        gap: .75rem;
      }
      span {
        display: inline-block;
        padding: .75rem 1rem;
        background: #eef2ff;
      }
    </style>
  </head>
  <body>
    <div class="cluster">
      <span>block-like sizing</span>
      <span>inline flow</span>
      <span>gap controlled by CSS</span>
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
    <title>CSS Display practice</title>
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
      <caption>CSS Display quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>display: block</code></td><td>starts a block formatting context participant</td></tr>
        <tr><td><code>display: flex</code></td><td>creates a flex formatting context</td></tr>
        <tr><td><code>display: none</code></td><td>removes the box and descendants from layout</td></tr>
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
    <title>CSS Display practice</title>
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
      <h1>CSS Display checklist</h1>
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
| `display: block` | starts a block formatting context participant | In CSS Display, match it to the real cascade, specificity, and layout needs of the page. |
| `display: flex` | creates a flex formatting context | In CSS Display, match it to the real cascade, specificity, and layout needs of the page. |
| `display: none` | removes the box and descendants from layout | In CSS Display, match it to the real cascade, specificity, and layout needs of the page. |

## Common mistakes

- Raising specificity or reaching for !important before understanding the cascade in CSS Display.
- Copying the example without changing color tokens, spacing, breakpoints, or selectors for the real project.
- Forgetting to test `display: block` in DevTools, responsive mode, keyboard focus, and hover/focus states.

## Practice step

Create a file named `display.html`, run the first example, then replace at least one declaration related to `display: block` with a token or project-specific value. Inspect the winning rule and box model in DevTools.

## Next step

Next, continue with **CSS Max-width** so the CSS learning path builds on this concept.
