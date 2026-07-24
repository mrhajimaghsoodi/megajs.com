---
title: "CSS Fonts"
description: "This page explains choosing font families, sizes, weights, styles, and scalable typography units with examples, tables, and practical CSS notes."
seoTitle: "CSS Fonts Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn CSS Fonts (fonts) with live HTML style examples, syntax tables, W3Schools practice, and DevTools tips for modern production UI with practical drills."
keywords: "CSS, CSS Fonts, CSS Fonts, Fonts tutorial, fonts"
order: 18
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Fonts

CSS Fonts focuses on choosing font families, sizes, weights, styles, and scalable typography units. This is an educational rewrite inspired by the W3Schools CSS learning path, and every example uses a live-editor-friendly `<style>` block.

When you practice CSS Fonts, do not stop at the visual result. Inspect the winning cascade rule, computed style in the DevTools Styles panel, box dimensions, and layout effects.

## Core idea

- `font-family`: selects font fallbacks.
- `font-size: 1rem`: sizes text relative to root settings.
- `font-weight`: sets stroke weight such as 400 or 700.
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
    <title>CSS Fonts practice</title>
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
      <h2>CSS Fonts</h2>
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
    <title>CSS Fonts practice</title>
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
      <caption>CSS Fonts quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>font-family</code></td><td>selects font fallbacks</td></tr>
        <tr><td><code>font-size: 1rem</code></td><td>sizes text relative to root settings</td></tr>
        <tr><td><code>font-weight</code></td><td>sets stroke weight such as 400 or 700</td></tr>
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
    <title>CSS Fonts practice</title>
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
      <h1>CSS Fonts checklist</h1>
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
| `font-family` | selects font fallbacks | In CSS Fonts, match it to the real cascade, specificity, and layout needs of the page. |
| `font-size: 1rem` | sizes text relative to root settings | In CSS Fonts, match it to the real cascade, specificity, and layout needs of the page. |
| `font-weight` | sets stroke weight such as 400 or 700 | In CSS Fonts, match it to the real cascade, specificity, and layout needs of the page. |

## Common mistakes

- Raising specificity or reaching for !important before understanding the cascade in CSS Fonts.
- Copying the example without changing color tokens, spacing, breakpoints, or selectors for the real project.
- Forgetting to test `font-family` in DevTools, responsive mode, keyboard focus, and hover/focus states.

## Practice step

Create a file named `fonts.html`, run the first example, then replace at least one declaration related to `font-family` with a token or project-specific value. Inspect the winning rule and box model in DevTools.

## Next step

Next, continue with **CSS Icons** so the CSS learning path builds on this concept.
