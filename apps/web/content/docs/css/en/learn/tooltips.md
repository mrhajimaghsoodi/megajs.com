---
title: "CSS Tooltips"
description: "This page explains showing small contextual hints with positioning, pseudo-elements, and focus support with examples, tables, and practical CSS notes."
seoTitle: "CSS Tooltips Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn CSS Tooltips (tooltips) with live HTML style examples, syntax tables, W3Schools practice, and DevTools tips for modern production UI with practical."
keywords: "CSS, CSS Tooltips, CSS Tooltips, Tooltips tutorial, tooltips"
order: 60
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Tooltips

CSS Tooltips focuses on showing small contextual hints with positioning, pseudo-elements, and focus support. This is an educational rewrite inspired by the W3Schools CSS learning path, and every example uses a live-editor-friendly `<style>` block.

When you practice CSS Tooltips, do not stop at the visual result. Inspect the winning cascade rule, computed style in the DevTools Styles panel, box dimensions, and layout effects.

## Core idea

- `[data-tooltip]`: stores tooltip text in markup.
- `::after`: renders the tooltip bubble.
- `:focus-visible`: opens hints for keyboard users.
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
    <title>CSS Tooltips practice</title>
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
      <button type="button">CSS Tooltips</button>
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
    <title>CSS Tooltips practice</title>
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
      <caption>CSS Tooltips quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>[data-tooltip]</code></td><td>stores tooltip text in markup</td></tr>
        <tr><td><code>::after</code></td><td>renders the tooltip bubble</td></tr>
        <tr><td><code>:focus-visible</code></td><td>opens hints for keyboard users</td></tr>
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
    <title>CSS Tooltips practice</title>
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
      <h1>CSS Tooltips checklist</h1>
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
| `[data-tooltip]` | stores tooltip text in markup | In CSS Tooltips, match it to the real cascade, specificity, and layout needs of the page. |
| `::after` | renders the tooltip bubble | In CSS Tooltips, match it to the real cascade, specificity, and layout needs of the page. |
| `:focus-visible` | opens hints for keyboard users | In CSS Tooltips, match it to the real cascade, specificity, and layout needs of the page. |

## Common mistakes

- Raising specificity or reaching for !important before understanding the cascade in CSS Tooltips.
- Copying the example without changing color tokens, spacing, breakpoints, or selectors for the real project.
- Forgetting to test `[data-tooltip]` in DevTools, responsive mode, keyboard focus, and hover/focus states.

## Practice step

Create a file named `tooltips.html`, run the first example, then replace at least one declaration related to `[data-tooltip]` with a token or project-specific value. Inspect the winning rule and box model in DevTools.

## Next step

Next, continue with **CSS Object-fit** so the CSS learning path builds on this concept.
