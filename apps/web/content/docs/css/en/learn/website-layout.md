---
title: "CSS Website Layout"
description: "This page explains assembling header, nav, main, sidebar, cards, and footer into a responsive page with examples, tables, and practical CSS notes."
seoTitle: "CSS Website Layout Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn CSS Website Layout (website layout) with live HTML style examples, syntax tables, W3Schools practice, and DevTools tips for modern production UI."
keywords: "CSS, CSS Website Layout, CSS Website Layout, Website Layout tutorial, website layout"
order: 44
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Website Layout

CSS Website Layout focuses on assembling header, nav, main, sidebar, cards, and footer into a responsive page. This is an educational rewrite inspired by the W3Schools CSS learning path, and every example uses a live-editor-friendly `<style>` block.

When you practice CSS Website Layout, do not stop at the visual result. Inspect the winning cascade rule, computed style in the DevTools Styles panel, box dimensions, and layout effects.

## Core idea

- `grid-template-areas`: names layout regions.
- `minmax()`: sets flexible track limits.
- `@media`: changes layout at viewport conditions.
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
    <title>CSS Website Layout practice</title>
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
      <section>CSS Website Layout</section>
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
    <title>CSS Website Layout practice</title>
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
      <caption>CSS Website Layout quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>grid-template-areas</code></td><td>names layout regions</td></tr>
        <tr><td><code>minmax()</code></td><td>sets flexible track limits</td></tr>
        <tr><td><code>@media</code></td><td>changes layout at viewport conditions</td></tr>
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
    <title>CSS Website Layout practice</title>
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
      <h1>CSS Website Layout checklist</h1>
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
| `grid-template-areas` | names layout regions | In CSS Website Layout, match it to the real cascade, specificity, and layout needs of the page. |
| `minmax()` | sets flexible track limits | In CSS Website Layout, match it to the real cascade, specificity, and layout needs of the page. |
| `@media` | changes layout at viewport conditions | In CSS Website Layout, match it to the real cascade, specificity, and layout needs of the page. |

## Common mistakes

- Raising specificity or reaching for !important before understanding the cascade in CSS Website Layout.
- Copying the example without changing color tokens, spacing, breakpoints, or selectors for the real project.
- Forgetting to test `grid-template-areas` in DevTools, responsive mode, keyboard focus, and hover/focus states.

## Practice step

Create a file named `website-layout.html`, run the first example, then replace at least one declaration related to `grid-template-areas` with a token or project-specific value. Inspect the winning rule and box model in DevTools.

## Next step

Next, continue with **CSS Units** so the CSS learning path builds on this concept.
