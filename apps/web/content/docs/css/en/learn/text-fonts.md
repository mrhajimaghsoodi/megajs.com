---
title: "CSS Text and Fonts"
description: "This page explains styling readable text, font families, icons, links, lists, and tables with examples, tables, and practical CSS notes."
seoTitle: "CSS Text and Fonts Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn CSS Text and Fonts (text fonts) with live HTML style examples, syntax tables, W3Schools practice, and DevTools tips for modern production UI."
keywords: "CSS, CSS Text and Fonts, CSS text-fonts, CSS Text and Fonts tutorial"
order: 16
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Text and Fonts

CSS Text and Fonts focuses on styling readable text, font families, icons, links, lists, and tables. This is an educational rewrite inspired by the W3Schools CSS learning path, and every example uses a live-editor-friendly `<style>` block.

When you practice CSS Text and Fonts, do not stop at the visual result. Inspect the winning cascade rule, computed style in the DevTools Styles panel, box dimensions, and layout effects.

## Core idea

- `selector`: targets elements for CSS Text and Fonts.
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
    <title>CSS Text and Fonts practice</title>
    <style>
      .prose {
        max-width: 62ch;
        font-family: system-ui, sans-serif;
        font-size: clamp(1rem, 2vw, 1.25rem);
        line-height: 1.7;
      }
    </style>
  </head>
  <body>
    <article class="prose">
      <h2>CSS Text and Fonts</h2>
      <p>Readable CSS typography balances font-size, line-height, and line length.</p>
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
    <title>CSS Text and Fonts practice</title>
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
      <caption>CSS Text and Fonts quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>selector</code></td><td>targets elements for CSS Text and Fonts</td></tr>
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
    <title>CSS Text and Fonts practice</title>
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
      <h1>CSS Text and Fonts checklist</h1>
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
| `selector` | targets elements for CSS Text and Fonts | In CSS Text and Fonts, match it to the real cascade, specificity, and layout needs of the page. |
| `property: value` | sets one visual or layout decision | In CSS Text and Fonts, match it to the real cascade, specificity, and layout needs of the page. |
| `cascade` | resolves competing declarations | In CSS Text and Fonts, match it to the real cascade, specificity, and layout needs of the page. |

## Common mistakes

- Raising specificity or reaching for !important before understanding the cascade in CSS Text and Fonts.
- Copying the example without changing color tokens, spacing, breakpoints, or selectors for the real project.
- Forgetting to test `selector` in DevTools, responsive mode, keyboard focus, and hover/focus states.

## Practice step

Create a file named `text-fonts.html`, run the first example, then replace at least one declaration related to `selector` with a token or project-specific value. Inspect the winning rule and box model in DevTools.

## Next step

Next, continue with **CSS Text** so the CSS learning path builds on this concept.
