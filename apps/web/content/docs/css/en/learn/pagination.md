---
title: "CSS Pagination"
description: "This page explains styling page navigation lists with current state, spacing, hit targets, and responsive wrapping with examples, tables, and practical CSS notes."
seoTitle: "CSS Pagination Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn CSS Pagination (pagination) with live HTML style examples, syntax tables, W3Schools practice, and DevTools tips for modern production UI with practical."
keywords: "CSS, CSS Pagination, CSS Pagination, Pagination tutorial, pagination"
order: 64
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Pagination

CSS Pagination focuses on styling page navigation lists with current state, spacing, hit targets, and responsive wrapping. This is an educational rewrite inspired by the W3Schools CSS learning path, and every example uses a live-editor-friendly `<style>` block.

When you practice CSS Pagination, do not stop at the visual result. Inspect the winning cascade rule, computed style in the DevTools Styles panel, box dimensions, and layout effects.

## Core idea

- `.pagination`: groups page links.
- `[aria-current="page"]`: marks the active page.
- `inline-size`: sets logical clickable width.
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
    <title>CSS Pagination practice</title>
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
    <nav class="nav" aria-label="CSS Pagination">
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
    <title>CSS Pagination practice</title>
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
      <caption>CSS Pagination quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>.pagination</code></td><td>groups page links</td></tr>
        <tr><td><code>[aria-current=&quot;page&quot;]</code></td><td>marks the active page</td></tr>
        <tr><td><code>inline-size</code></td><td>sets logical clickable width</td></tr>
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
    <title>CSS Pagination practice</title>
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
      <h1>CSS Pagination checklist</h1>
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
| `.pagination` | groups page links | In CSS Pagination, match it to the real cascade, specificity, and layout needs of the page. |
| `[aria-current="page"]` | marks the active page | In CSS Pagination, match it to the real cascade, specificity, and layout needs of the page. |
| `inline-size` | sets logical clickable width | In CSS Pagination, match it to the real cascade, specificity, and layout needs of the page. |

## Common mistakes

- Raising specificity or reaching for !important before understanding the cascade in CSS Pagination.
- Copying the example without changing color tokens, spacing, breakpoints, or selectors for the real project.
- Forgetting to test `.pagination` in DevTools, responsive mode, keyboard focus, and hover/focus states.

## Practice step

Create a file named `pagination.html`, run the first example, then replace at least one declaration related to `.pagination` with a token or project-specific value. Inspect the winning rule and box model in DevTools.

## Next step

Next, continue with **CSS Multiple Columns** so the CSS learning path builds on this concept.
