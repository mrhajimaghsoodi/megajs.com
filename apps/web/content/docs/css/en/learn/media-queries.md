---
title: "CSS Media Queries"
description: "This page explains adapting styles to viewport width, pointer type, color scheme, motion preference, and print with examples, tables, and practical CSS notes."
seoTitle: "CSS Media Queries Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn CSS Media Queries (media queries) with live HTML style examples, syntax tables, W3Schools practice, and DevTools tips for modern production UI."
keywords: "CSS, CSS Media Queries, CSS Media Queries, Media Queries tutorial, media queries"
order: 69
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Media Queries

CSS Media Queries focuses on adapting styles to viewport width, pointer type, color scheme, motion preference, and print. This is an educational rewrite inspired by the W3Schools CSS learning path, and every example uses a live-editor-friendly `<style>` block.

When you practice CSS Media Queries, do not stop at the visual result. Inspect the winning cascade rule, computed style in the DevTools Styles panel, box dimensions, and layout effects.

## Core idea

- `@media (min-width: 768px)`: applies rules at wider viewports.
- `(prefers-reduced-motion)`: detects motion sensitivity preference.
- `(prefers-color-scheme: dark)`: targets dark mode preference.
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
    <title>CSS Media Queries practice</title>
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
    <title>CSS Media Queries practice</title>
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
      <caption>CSS Media Queries quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>@media (min-width: 768px)</code></td><td>applies rules at wider viewports</td></tr>
        <tr><td><code>(prefers-reduced-motion)</code></td><td>detects motion sensitivity preference</td></tr>
        <tr><td><code>(prefers-color-scheme: dark)</code></td><td>targets dark mode preference</td></tr>
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
    <title>CSS Media Queries practice</title>
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
      <h1>CSS Media Queries checklist</h1>
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
| `@media (min-width: 768px)` | applies rules at wider viewports | In CSS Media Queries, match it to the real cascade, specificity, and layout needs of the page. |
| `(prefers-reduced-motion)` | detects motion sensitivity preference | In CSS Media Queries, match it to the real cascade, specificity, and layout needs of the page. |
| `(prefers-color-scheme: dark)` | targets dark mode preference | In CSS Media Queries, match it to the real cascade, specificity, and layout needs of the page. |

## Common mistakes

- Raising specificity or reaching for !important before understanding the cascade in CSS Media Queries.
- Copying the example without changing color tokens, spacing, breakpoints, or selectors for the real project.
- Forgetting to test `@media (min-width: 768px)` in DevTools, responsive mode, keyboard focus, and hover/focus states.

## Practice step

Create a file named `media-queries.html`, run the first example, then replace at least one declaration related to `@media (min-width: 768px)` with a token or project-specific value. Inspect the winning rule and box model in DevTools.

## Next step

Next, continue with **CSS Flexbox** so the CSS learning path builds on this concept.
