---
title: "CSS Flex Container"
description: "This page explains configuring the parent flex context with direction, wrap, gap, and alignment with examples, tables, and practical CSS notes."
seoTitle: "CSS Flex Container Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn CSS Flex Container (flex container) with live HTML style examples, syntax tables, W3Schools practice, and DevTools tips for modern production UI."
keywords: "CSS, CSS Flex Container, CSS Flex Container, Flex Container tutorial, flex container"
order: 71
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Flex Container

CSS Flex Container focuses on configuring the parent flex context with direction, wrap, gap, and alignment. This is an educational rewrite inspired by the W3Schools CSS learning path, and every example uses a live-editor-friendly `<style>` block.

When you practice CSS Flex Container, do not stop at the visual result. Inspect the winning cascade rule, computed style in the DevTools Styles panel, box dimensions, and layout effects.

## Core idea

- `display: flex`: creates a flex container.
- `flex-direction`: chooses row or column main axis.
- `gap`: sets spacing between flex items.
- For this topic, clear main-axis and cross-axis alignment with predictable wrapping is the main sign that your CSS is doing its job.

## HTML and CSS examples

The three examples move from a focused pattern to a complete page. Run each one in the live editor, change one value, and compare the computed style.

### Example 1: Focused CSS pattern

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Flex Container practice</title>
    <style>
      .stack {
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        gap: 1rem;
      }
      article {
        flex: 1 1 12rem;
        padding: 1rem;
        background: #eef2ff;
        border-radius: .75rem;
      }
    </style>
  </head>
  <body>
    <div class="stack">
      <article>CSS Flex Container</article>
      <article>flex: 1 1 12rem</article>
      <article>wraps when narrow</article>
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
    <title>CSS Flex Container practice</title>
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
      <caption>CSS Flex Container quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>display: flex</code></td><td>creates a flex container</td></tr>
        <tr><td><code>flex-direction</code></td><td>chooses row or column main axis</td></tr>
        <tr><td><code>gap</code></td><td>sets spacing between flex items</td></tr>
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
    <title>CSS Flex Container practice</title>
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
      <h1>CSS Flex Container checklist</h1>
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
| `display: flex` | creates a flex container | In CSS Flex Container, match it to the real cascade, specificity, and layout needs of the page. |
| `flex-direction` | chooses row or column main axis | In CSS Flex Container, match it to the real cascade, specificity, and layout needs of the page. |
| `gap` | sets spacing between flex items | In CSS Flex Container, match it to the real cascade, specificity, and layout needs of the page. |

## Common mistakes

- Raising specificity or reaching for !important before understanding the cascade in CSS Flex Container.
- Copying the example without changing color tokens, spacing, breakpoints, or selectors for the real project.
- Forgetting to test `display: flex` in DevTools, responsive mode, keyboard focus, and hover/focus states.

## Practice step

Create a file named `flex-container.html`, run the first example, then replace at least one declaration related to `display: flex` with a token or project-specific value. Inspect the winning rule and box model in DevTools.

## Next step

Next, continue with **CSS Flex Items** so the CSS learning path builds on this concept.
