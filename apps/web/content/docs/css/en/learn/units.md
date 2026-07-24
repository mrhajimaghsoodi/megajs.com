---
title: "CSS Units"
description: "This page explains choosing px, rem, em, %, vw, vh, ch, and modern viewport units deliberately with examples, tables, and practical CSS notes."
seoTitle: "CSS Units Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn CSS Units (units) with live HTML style examples, syntax tables, W3Schools practice, and DevTools tips for modern production UI with practical drills."
keywords: "CSS, CSS Units, CSS Units, Units tutorial, units"
order: 45
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Units

CSS Units focuses on choosing px, rem, em, %, vw, vh, ch, and modern viewport units deliberately. This is an educational rewrite inspired by the W3Schools CSS learning path, and every example uses a live-editor-friendly `<style>` block.

When you practice CSS Units, do not stop at the visual result. Inspect the winning cascade rule, computed style in the DevTools Styles panel, box dimensions, and layout effects.

## Core idea

- `rem`: scales from the root font size.
- `em`: scales from the current font size.
- `vh / vw`: scale from viewport dimensions.
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
    <title>CSS Units practice</title>
    <style>
      .fluid {
        width: min(100%, 42rem);
        padding: clamp(1rem, 4vw, 3rem);
        font-size: clamp(1rem, 2vw, 1.4rem);
        margin-inline: auto;
      }
    </style>
  </head>
  <body>
    <section class="fluid">
      <h2>CSS Units</h2>
      <p>Resize the viewport and watch clamp(), min(), rem, and vw interact.</p>
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
    <title>CSS Units practice</title>
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
      <caption>CSS Units quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>rem</code></td><td>scales from the root font size</td></tr>
        <tr><td><code>em</code></td><td>scales from the current font size</td></tr>
        <tr><td><code>vh / vw</code></td><td>scale from viewport dimensions</td></tr>
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
    <title>CSS Units practice</title>
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
      <h1>CSS Units checklist</h1>
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
| `rem` | scales from the root font size | In CSS Units, match it to the real cascade, specificity, and layout needs of the page. |
| `em` | scales from the current font size | In CSS Units, match it to the real cascade, specificity, and layout needs of the page. |
| `vh / vw` | scale from viewport dimensions | In CSS Units, match it to the real cascade, specificity, and layout needs of the page. |

## Common mistakes

- Raising specificity or reaching for !important before understanding the cascade in CSS Units.
- Copying the example without changing color tokens, spacing, breakpoints, or selectors for the real project.
- Forgetting to test `rem` in DevTools, responsive mode, keyboard focus, and hover/focus states.

## Practice step

Create a file named `units.html`, run the first example, then replace at least one declaration related to `rem` with a token or project-specific value. Inspect the winning rule and box model in DevTools.

## Next step

Next, continue with **CSS Specificity** so the CSS learning path builds on this concept.
