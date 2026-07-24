---
title: "RWD Viewport"
description: "This page explains setting the viewport and understanding CSS pixels, zoom, and device width with examples, tables, and practical CSS notes."
seoTitle: "RWD Viewport Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn RWD Viewport (rwd viewport) with live HTML style examples, syntax tables, W3Schools practice, and DevTools tips for modern production UI with practical."
keywords: "CSS, RWD Viewport, CSS RWD Viewport, RWD Viewport tutorial, rwd viewport"
order: 79
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# RWD Viewport

RWD Viewport focuses on setting the viewport and understanding CSS pixels, zoom, and device width. This is an educational rewrite inspired by the W3Schools CSS learning path, and every example uses a live-editor-friendly `<style>` block.

When you practice RWD Viewport, do not stop at the visual result. Inspect the winning cascade rule, computed style in the DevTools Styles panel, box dimensions, and layout effects.

## Core idea

- `<meta name="viewport">`: sets mobile viewport behavior.
- `width=device-width`: matches CSS viewport to device width.
- `initial-scale=1`: starts at normal zoom.
- For this topic, stable behavior across viewports and respect for user preferences is the main sign that your CSS is doing its job.

## HTML and CSS examples

The three examples move from a focused pattern to a complete page. Run each one in the live editor, change one value, and compare the computed style.

### Example 1: Focused CSS pattern

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RWD Viewport practice</title>
    <style>
      body {
        margin: 0;
        font-family: system-ui, sans-serif;
      }
      main {
        width: min(100% - 2rem, 48rem);
        margin-inline: auto;
      }
    </style>
  </head>
  <body>
    <main>
      <h1>RWD Viewport</h1>
      <p>Add the viewport meta tag so CSS pixels match mobile expectations.</p>
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
    <title>RWD Viewport practice</title>
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
      <caption>RWD Viewport quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>&lt;meta name=&quot;viewport&quot;&gt;</code></td><td>sets mobile viewport behavior</td></tr>
        <tr><td><code>width=device-width</code></td><td>matches CSS viewport to device width</td></tr>
        <tr><td><code>initial-scale=1</code></td><td>starts at normal zoom</td></tr>
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
    <title>RWD Viewport practice</title>
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
      <h1>RWD Viewport checklist</h1>
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
| `<meta name="viewport">` | sets mobile viewport behavior | In RWD Viewport, match it to the real cascade, specificity, and layout needs of the page. |
| `width=device-width` | matches CSS viewport to device width | In RWD Viewport, match it to the real cascade, specificity, and layout needs of the page. |
| `initial-scale=1` | starts at normal zoom | In RWD Viewport, match it to the real cascade, specificity, and layout needs of the page. |

## Common mistakes

- Raising specificity or reaching for !important before understanding the cascade in RWD Viewport.
- Copying the example without changing color tokens, spacing, breakpoints, or selectors for the real project.
- Forgetting to test `<meta name="viewport">` in DevTools, responsive mode, keyboard focus, and hover/focus states.

## Practice step

Create a file named `rwd-viewport.html`, run the first example, then replace at least one declaration related to `<meta name="viewport">` with a token or project-specific value. Inspect the winning rule and box model in DevTools.

## Next step

Next, continue with **RWD Grid View** so the CSS learning path builds on this concept.
