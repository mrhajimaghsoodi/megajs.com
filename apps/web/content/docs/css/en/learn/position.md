---
title: "CSS Position"
description: "This page explains placing boxes with static, relative, absolute, fixed, and sticky positioning with examples, tables, and practical CSS notes."
seoTitle: "CSS Position Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn CSS Position (position) with live HTML style examples, syntax tables, W3Schools practice, and DevTools tips for modern production UI with practical."
keywords: "CSS, CSS Position, CSS Position, Position tutorial, position"
order: 26
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Position

CSS Position focuses on placing boxes with static, relative, absolute, fixed, and sticky positioning. This is an educational rewrite inspired by the W3Schools CSS learning path, and every example uses a live-editor-friendly `<style>` block.

When you practice CSS Position, do not stop at the visual result. Inspect the winning cascade rule, computed style in the DevTools Styles panel, box dimensions, and layout effects.

## Core idea

- `position: relative`: creates an offset context and containing block.
- `position: absolute`: places a box relative to a containing block.
- `position: sticky`: sticks within a scroll container.
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
    <title>CSS Position practice</title>
    <style>
      .stage {
        position: relative;
        min-height: 10rem;
        border: 1px dashed #94a3b8;
      }
      button {
        position: absolute;
        inset-block-start: 2rem;
        inset-inline-start: 2rem;
        z-index: 2;
      }
    </style>
  </head>
  <body>
    <div class="stage">
      <button type="button">CSS Position</button>
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
    <title>CSS Position practice</title>
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
      <caption>CSS Position quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>position: relative</code></td><td>creates an offset context and containing block</td></tr>
        <tr><td><code>position: absolute</code></td><td>places a box relative to a containing block</td></tr>
        <tr><td><code>position: sticky</code></td><td>sticks within a scroll container</td></tr>
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
    <title>CSS Position practice</title>
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
      <h1>CSS Position checklist</h1>
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
| `position: relative` | creates an offset context and containing block | In CSS Position, match it to the real cascade, specificity, and layout needs of the page. |
| `position: absolute` | places a box relative to a containing block | In CSS Position, match it to the real cascade, specificity, and layout needs of the page. |
| `position: sticky` | sticks within a scroll container | In CSS Position, match it to the real cascade, specificity, and layout needs of the page. |

## Common mistakes

- Raising specificity or reaching for !important before understanding the cascade in CSS Position.
- Copying the example without changing color tokens, spacing, breakpoints, or selectors for the real project.
- Forgetting to test `position: relative` in DevTools, responsive mode, keyboard focus, and hover/focus states.

## Practice step

Create a file named `position.html`, run the first example, then replace at least one declaration related to `position: relative` with a token or project-specific value. Inspect the winning rule and box model in DevTools.

## Next step

Next, continue with **CSS Z-index** so the CSS learning path builds on this concept.
