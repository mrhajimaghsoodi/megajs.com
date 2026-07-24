---
title: "CSS Box Sizing"
description: "This page explains controlling whether declared dimensions include padding and border with examples, tables, and practical CSS notes."
seoTitle: "CSS Box Sizing Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn CSS Box Sizing (box sizing) with live HTML style examples, syntax tables, W3Schools practice, and DevTools tips for modern production UI with practical."
keywords: "CSS, CSS Box Sizing, CSS Box Sizing, Box Sizing tutorial, box sizing"
order: 68
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Box Sizing

CSS Box Sizing focuses on controlling whether declared dimensions include padding and border. This is an educational rewrite inspired by the W3Schools CSS learning path, and every example uses a live-editor-friendly `<style>` block.

When you practice CSS Box Sizing, do not stop at the visual result. Inspect the winning cascade rule, computed style in the DevTools Styles panel, box dimensions, and layout effects.

## Core idea

- `box-sizing: border-box`: includes padding and border in width.
- `content-box`: sizes only the content box.
- `* { box-sizing: border-box; }`: sets a predictable sizing baseline.
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
    <title>CSS Box Sizing practice</title>
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
      <h2>CSS Box Sizing</h2>
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
    <title>CSS Box Sizing practice</title>
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
      <caption>CSS Box Sizing quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>box-sizing: border-box</code></td><td>includes padding and border in width</td></tr>
        <tr><td><code>content-box</code></td><td>sizes only the content box</td></tr>
        <tr><td><code>* { box-sizing: border-box; }</code></td><td>sets a predictable sizing baseline</td></tr>
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
    <title>CSS Box Sizing practice</title>
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
      <h1>CSS Box Sizing checklist</h1>
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
| `box-sizing: border-box` | includes padding and border in width | In CSS Box Sizing, match it to the real cascade, specificity, and layout needs of the page. |
| `content-box` | sizes only the content box | In CSS Box Sizing, match it to the real cascade, specificity, and layout needs of the page. |
| `* { box-sizing: border-box; }` | sets a predictable sizing baseline | In CSS Box Sizing, match it to the real cascade, specificity, and layout needs of the page. |

## Common mistakes

- Raising specificity or reaching for !important before understanding the cascade in CSS Box Sizing.
- Copying the example without changing color tokens, spacing, breakpoints, or selectors for the real project.
- Forgetting to test `box-sizing: border-box` in DevTools, responsive mode, keyboard focus, and hover/focus states.

## Practice step

Create a file named `box-sizing.html`, run the first example, then replace at least one declaration related to `box-sizing: border-box` with a token or project-specific value. Inspect the winning rule and box model in DevTools.

## Next step

Next, continue with **CSS Media Queries** so the CSS learning path builds on this concept.
