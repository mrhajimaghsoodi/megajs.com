---
title: "CSS Inline-block"
description: "This page explains mixing inline flow with width, height, padding, and vertical alignment with examples, tables, and practical CSS notes."
seoTitle: "CSS Inline-block Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn CSS Inline-block (inline block) with live HTML style examples, syntax tables, W3Schools practice, and DevTools tips for modern production UI."
keywords: "CSS, CSS Inline-block, CSS Inline-block, Inline-block tutorial, inline block"
order: 30
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Inline-block

CSS Inline-block focuses on mixing inline flow with width, height, padding, and vertical alignment. This is an educational rewrite inspired by the W3Schools CSS learning path, and every example uses a live-editor-friendly `<style>` block.

When you practice CSS Inline-block, do not stop at the visual result. Inspect the winning cascade rule, computed style in the DevTools Styles panel, box dimensions, and layout effects.

## Core idea

- `display: inline-block`: flows inline but accepts box dimensions.
- `vertical-align`: aligns inline-level boxes.
- `white-space`: controls gaps caused by inline formatting.
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
    <title>CSS Inline-block practice</title>
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
    <title>CSS Inline-block practice</title>
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
      <caption>CSS Inline-block quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>display: inline-block</code></td><td>flows inline but accepts box dimensions</td></tr>
        <tr><td><code>vertical-align</code></td><td>aligns inline-level boxes</td></tr>
        <tr><td><code>white-space</code></td><td>controls gaps caused by inline formatting</td></tr>
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
    <title>CSS Inline-block practice</title>
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
      <h1>CSS Inline-block checklist</h1>
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
| `display: inline-block` | flows inline but accepts box dimensions | In CSS Inline-block, match it to the real cascade, specificity, and layout needs of the page. |
| `vertical-align` | aligns inline-level boxes | In CSS Inline-block, match it to the real cascade, specificity, and layout needs of the page. |
| `white-space` | controls gaps caused by inline formatting | In CSS Inline-block, match it to the real cascade, specificity, and layout needs of the page. |

## Common mistakes

- Raising specificity or reaching for !important before understanding the cascade in CSS Inline-block.
- Copying the example without changing color tokens, spacing, breakpoints, or selectors for the real project.
- Forgetting to test `display: inline-block` in DevTools, responsive mode, keyboard focus, and hover/focus states.

## Practice step

Create a file named `inline-block.html`, run the first example, then replace at least one declaration related to `display: inline-block` with a token or project-specific value. Inspect the winning rule and box model in DevTools.

## Next step

Next, continue with **CSS Align** so the CSS learning path builds on this concept.
