---
title: "CSS Navigation Bars"
description: "This page explains styling horizontal and vertical navigation with hover, focus, active states, and responsive spacing with examples, tables, and practical CSS notes."
seoTitle: "CSS Navigation Bars Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn CSS Navigation Bars (navigation bars) with live HTML style examples, syntax tables, W3Schools practice, and DevTools tips for modern production UI."
keywords: "CSS, CSS Navigation Bars, CSS Navigation Bars, Navigation Bars tutorial, navigation bars"
order: 37
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Navigation Bars

CSS Navigation Bars focuses on styling horizontal and vertical navigation with hover, focus, active states, and responsive spacing. This is an educational rewrite inspired by the W3Schools CSS learning path, and every example uses a live-editor-friendly `<style>` block.

When you practice CSS Navigation Bars, do not stop at the visual result. Inspect the winning cascade rule, computed style in the DevTools Styles panel, box dimensions, and layout effects.

## Core idea

- `nav a`: targets navigation links.
- `[aria-current="page"]`: styles the current page link.
- `gap`: sets spacing between nav items.
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
    <title>CSS Navigation Bars practice</title>
    <style>
      .nav {
        display: flex;
        gap: .75rem;
        flex-wrap: wrap;
      }
      .nav a {
        color: #1d4ed8;
        padding: .5rem .75rem;
        border-radius: 999px;
      }
      .nav a:focus-visible,
      .nav a:hover {
        outline: 2px solid currentColor;
        background: #dbeafe;
      }
    </style>
  </head>
  <body>
    <nav class="nav" aria-label="CSS Navigation Bars">
      <a href="#" aria-current="page">Start</a>
      <a href="#">Reference</a>
      <a href="#">Practice</a>
    </nav>
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
    <title>CSS Navigation Bars practice</title>
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
      <caption>CSS Navigation Bars quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>nav a</code></td><td>targets navigation links</td></tr>
        <tr><td><code>[aria-current=&quot;page&quot;]</code></td><td>styles the current page link</td></tr>
        <tr><td><code>gap</code></td><td>sets spacing between nav items</td></tr>
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
    <title>CSS Navigation Bars practice</title>
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
      <h1>CSS Navigation Bars checklist</h1>
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
| `nav a` | targets navigation links | In CSS Navigation Bars, match it to the real cascade, specificity, and layout needs of the page. |
| `[aria-current="page"]` | styles the current page link | In CSS Navigation Bars, match it to the real cascade, specificity, and layout needs of the page. |
| `gap` | sets spacing between nav items | In CSS Navigation Bars, match it to the real cascade, specificity, and layout needs of the page. |

## Common mistakes

- Raising specificity or reaching for !important before understanding the cascade in CSS Navigation Bars.
- Copying the example without changing color tokens, spacing, breakpoints, or selectors for the real project.
- Forgetting to test `nav a` in DevTools, responsive mode, keyboard focus, and hover/focus states.

## Practice step

Create a file named `navigation-bars.html`, run the first example, then replace at least one declaration related to `nav a` with a token or project-specific value. Inspect the winning rule and box model in DevTools.

## Next step

Next, continue with **CSS Dropdowns** so the CSS learning path builds on this concept.
