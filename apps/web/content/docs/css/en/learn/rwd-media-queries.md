---
title: "RWD Media Queries"
description: "This page explains switching layout, spacing, and typography at meaningful conditions with examples, tables, and practical CSS notes."
seoTitle: "RWD Media Queries Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn RWD Media Queries (rwd media queries) with live HTML style examples, syntax tables, W3Schools practice, and DevTools tips for modern production UI."
keywords: "CSS, RWD Media Queries, CSS RWD Media Queries, RWD Media Queries tutorial, rwd media queries"
order: 81
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# RWD Media Queries

RWD Media Queries focuses on switching layout, spacing, and typography at meaningful conditions. This is an educational rewrite inspired by the W3Schools CSS learning path, and every example uses a live-editor-friendly `<style>` block.

When you practice RWD Media Queries, do not stop at the visual result. Inspect the winning cascade rule, computed style in the DevTools Styles panel, box dimensions, and layout effects.

## Core idea

- `@media (width >= 48rem)`: targets wider layouts with range syntax.
- `orientation`: detects portrait or landscape.
- `prefers-reduced-motion`: respects motion sensitivity.
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
    <title>RWD Media Queries practice</title>
    <style>
      .cards {
        display: grid;
        gap: 1rem;
      }
      @media (min-width: 48rem) {
        .cards {
          grid-template-columns: repeat(3, 1fr);
        }
      }
    </style>
  </head>
  <body>
    <div class="cards">
      <article>Small first</article>
      <article>Then wider</article>
      <article>Inspect responsive mode</article>
    </div>
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
    <title>RWD Media Queries practice</title>
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
      <caption>RWD Media Queries quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>@media (width &gt;= 48rem)</code></td><td>targets wider layouts with range syntax</td></tr>
        <tr><td><code>orientation</code></td><td>detects portrait or landscape</td></tr>
        <tr><td><code>prefers-reduced-motion</code></td><td>respects motion sensitivity</td></tr>
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
    <title>RWD Media Queries practice</title>
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
      <h1>RWD Media Queries checklist</h1>
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
| `@media (width >= 48rem)` | targets wider layouts with range syntax | In RWD Media Queries, match it to the real cascade, specificity, and layout needs of the page. |
| `orientation` | detects portrait or landscape | In RWD Media Queries, match it to the real cascade, specificity, and layout needs of the page. |
| `prefers-reduced-motion` | respects motion sensitivity | In RWD Media Queries, match it to the real cascade, specificity, and layout needs of the page. |

## Common mistakes

- Raising specificity or reaching for !important before understanding the cascade in RWD Media Queries.
- Copying the example without changing color tokens, spacing, breakpoints, or selectors for the real project.
- Forgetting to test `@media (width >= 48rem)` in DevTools, responsive mode, keyboard focus, and hover/focus states.

## Practice step

Create a file named `rwd-media-queries.html`, run the first example, then replace at least one declaration related to `@media (width >= 48rem)` with a token or project-specific value. Inspect the winning rule and box model in DevTools.

## Next step

Next, continue with **RWD Images** so the CSS learning path builds on this concept.
