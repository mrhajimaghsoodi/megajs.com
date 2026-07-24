---
title: "CSS Backgrounds and Borders"
description: "This page explains building visual surfaces with backgrounds, spacing, dimensions, borders, outlines, and the box model with examples, tables, and practical CSS notes."
seoTitle: "CSS Backgrounds and Borders Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn CSS Backgrounds and Borders (backgrounds borders) with live HTML style examples, syntax tables, W3Schools practice, and DevTools tips for modern."
keywords: "CSS, CSS Backgrounds and Borders, CSS backgrounds-borders, CSS Backgrounds and Borders tutorial"
order: 8
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Backgrounds and Borders

CSS Backgrounds and Borders focuses on building visual surfaces with backgrounds, spacing, dimensions, borders, outlines, and the box model. This is an educational rewrite inspired by the W3Schools CSS learning path, and every example uses a live-editor-friendly `<style>` block.

When you practice CSS Backgrounds and Borders, do not stop at the visual result. Inspect the winning cascade rule, computed style in the DevTools Styles panel, box dimensions, and layout effects.

## Core idea

- `selector`: targets elements for CSS Backgrounds and Borders.
- `property: value`: sets one visual or layout decision.
- `cascade`: resolves competing declarations.
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
    <title>CSS Backgrounds and Borders practice</title>
    <style>
      .card {
        padding: 1rem;
        border: 2px solid #2563eb;
        border-radius: 1rem;
        outline: 3px solid rgb(37 99 235 / .18);
        outline-offset: .25rem;
      }
    </style>
  </head>
  <body>
    <article class="card">
      <h2>CSS Backgrounds and Borders</h2>
      <p>The border box, outline, and radius are visible in DevTools.</p>
    </article>
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
    <title>CSS Backgrounds and Borders practice</title>
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
      <caption>CSS Backgrounds and Borders quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>selector</code></td><td>targets elements for CSS Backgrounds and Borders</td></tr>
        <tr><td><code>property: value</code></td><td>sets one visual or layout decision</td></tr>
        <tr><td><code>cascade</code></td><td>resolves competing declarations</td></tr>
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
    <title>CSS Backgrounds and Borders practice</title>
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
      <h1>CSS Backgrounds and Borders checklist</h1>
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
| `selector` | targets elements for CSS Backgrounds and Borders | In CSS Backgrounds and Borders, match it to the real cascade, specificity, and layout needs of the page. |
| `property: value` | sets one visual or layout decision | In CSS Backgrounds and Borders, match it to the real cascade, specificity, and layout needs of the page. |
| `cascade` | resolves competing declarations | In CSS Backgrounds and Borders, match it to the real cascade, specificity, and layout needs of the page. |

## Common mistakes

- Raising specificity or reaching for !important before understanding the cascade in CSS Backgrounds and Borders.
- Copying the example without changing color tokens, spacing, breakpoints, or selectors for the real project.
- Forgetting to test `selector` in DevTools, responsive mode, keyboard focus, and hover/focus states.

## Practice step

Create a file named `backgrounds-borders.html`, run the first example, then replace at least one declaration related to `selector` with a token or project-specific value. Inspect the winning rule and box model in DevTools.

## Next step

Next, continue with **CSS Backgrounds** so the CSS learning path builds on this concept.
