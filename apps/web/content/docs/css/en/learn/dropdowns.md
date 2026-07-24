---
title: "CSS Dropdowns"
description: "This page explains creating layered menus with positioning, hover/focus states, and keyboard-aware structure with examples, tables, and practical CSS notes."
seoTitle: "CSS Dropdowns Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn CSS Dropdowns (dropdowns) with live HTML style examples, syntax tables, W3Schools practice, and DevTools tips for modern production UI with practical."
keywords: "CSS, CSS Dropdowns, CSS Dropdowns, Dropdowns tutorial, dropdowns"
order: 38
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Dropdowns

CSS Dropdowns focuses on creating layered menus with positioning, hover/focus states, and keyboard-aware structure. This is an educational rewrite inspired by the W3Schools CSS learning path, and every example uses a live-editor-friendly `<style>` block.

When you practice CSS Dropdowns, do not stop at the visual result. Inspect the winning cascade rule, computed style in the DevTools Styles panel, box dimensions, and layout effects.

## Core idea

- `.menu:hover .panel`: reveals a panel during hover.
- `position: absolute`: places the dropdown layer.
- `:focus-within`: keeps menus open for keyboard focus.
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
    <title>CSS Dropdowns practice</title>
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
      <button type="button">CSS Dropdowns</button>
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
    <title>CSS Dropdowns practice</title>
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
      <caption>CSS Dropdowns quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>.menu:hover .panel</code></td><td>reveals a panel during hover</td></tr>
        <tr><td><code>position: absolute</code></td><td>places the dropdown layer</td></tr>
        <tr><td><code>:focus-within</code></td><td>keeps menus open for keyboard focus</td></tr>
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
    <title>CSS Dropdowns practice</title>
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
      <h1>CSS Dropdowns checklist</h1>
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
| `.menu:hover .panel` | reveals a panel during hover | In CSS Dropdowns, match it to the real cascade, specificity, and layout needs of the page. |
| `position: absolute` | places the dropdown layer | In CSS Dropdowns, match it to the real cascade, specificity, and layout needs of the page. |
| `:focus-within` | keeps menus open for keyboard focus | In CSS Dropdowns, match it to the real cascade, specificity, and layout needs of the page. |

## Common mistakes

- Raising specificity or reaching for !important before understanding the cascade in CSS Dropdowns.
- Copying the example without changing color tokens, spacing, breakpoints, or selectors for the real project.
- Forgetting to test `.menu:hover .panel` in DevTools, responsive mode, keyboard focus, and hover/focus states.

## Practice step

Create a file named `dropdowns.html`, run the first example, then replace at least one declaration related to `.menu:hover .panel` with a token or project-specific value. Inspect the winning rule and box model in DevTools.

## Next step

Next, continue with **CSS Image Gallery** so the CSS learning path builds on this concept.
