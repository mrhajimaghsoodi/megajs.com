---
title: "CSS Text Effects"
description: "This page explains handling overflow, wrapping, shadows, gradients, and writing modes for expressive text with examples, tables, and practical CSS notes."
seoTitle: "CSS Text Effects Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn CSS Text Effects (text effects) with live HTML style examples, syntax tables, W3Schools practice, and DevTools tips for modern production UI."
keywords: "CSS, CSS Text Effects, CSS Text Effects, Text Effects tutorial, text effects"
order: 54
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Text Effects

CSS Text Effects focuses on handling overflow, wrapping, shadows, gradients, and writing modes for expressive text. This is an educational rewrite inspired by the W3Schools CSS learning path, and every example uses a live-editor-friendly `<style>` block.

When you practice CSS Text Effects, do not stop at the visual result. Inspect the winning cascade rule, computed style in the DevTools Styles panel, box dimensions, and layout effects.

## Core idea

- `text-overflow: ellipsis`: signals clipped inline text.
- `overflow-wrap: anywhere`: breaks long words safely.
- `background-clip: text`: clips a background to text glyphs.
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
    <title>CSS Text Effects practice</title>
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
      <h2>CSS Text Effects</h2>
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
    <title>CSS Text Effects practice</title>
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
      <caption>CSS Text Effects quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>text-overflow: ellipsis</code></td><td>signals clipped inline text</td></tr>
        <tr><td><code>overflow-wrap: anywhere</code></td><td>breaks long words safely</td></tr>
        <tr><td><code>background-clip: text</code></td><td>clips a background to text glyphs</td></tr>
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
    <title>CSS Text Effects practice</title>
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
      <h1>CSS Text Effects checklist</h1>
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
| `text-overflow: ellipsis` | signals clipped inline text | In CSS Text Effects, match it to the real cascade, specificity, and layout needs of the page. |
| `overflow-wrap: anywhere` | breaks long words safely | In CSS Text Effects, match it to the real cascade, specificity, and layout needs of the page. |
| `background-clip: text` | clips a background to text glyphs | In CSS Text Effects, match it to the real cascade, specificity, and layout needs of the page. |

## Common mistakes

- Raising specificity or reaching for !important before understanding the cascade in CSS Text Effects.
- Copying the example without changing color tokens, spacing, breakpoints, or selectors for the real project.
- Forgetting to test `text-overflow: ellipsis` in DevTools, responsive mode, keyboard focus, and hover/focus states.

## Practice step

Create a file named `text-effects.html`, run the first example, then replace at least one declaration related to `text-overflow: ellipsis` with a token or project-specific value. Inspect the winning rule and box model in DevTools.

## Next step

Next, continue with **CSS Web Fonts** so the CSS learning path builds on this concept.
