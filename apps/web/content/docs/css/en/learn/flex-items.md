---
title: "CSS Flex Items"
description: "This page explains controlling growth, shrinkage, basis, order, and individual alignment with examples, tables, and practical CSS notes."
seoTitle: "CSS Flex Items Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn CSS Flex Items (flex items) with live HTML style examples, syntax tables, W3Schools practice, and DevTools tips for modern production UI with practical."
keywords: "CSS, CSS Flex Items, CSS Flex Items, Flex Items tutorial, flex items"
order: 72
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Flex Items

CSS Flex Items focuses on controlling growth, shrinkage, basis, order, and individual alignment. This is an educational rewrite inspired by the W3Schools CSS learning path, and every example uses a live-editor-friendly `<style>` block.

When you practice CSS Flex Items, do not stop at the visual result. Inspect the winning cascade rule, computed style in the DevTools Styles panel, box dimensions, and layout effects.

## Core idea

- `flex: 1 1 auto`: sets grow, shrink, and basis.
- `align-self`: overrides cross-axis alignment for one item.
- `order`: changes visual order without changing DOM order.
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
    <title>CSS Flex Items practice</title>
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
      <article>CSS Flex Items</article>
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
    <title>CSS Flex Items practice</title>
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
      <caption>CSS Flex Items quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>flex: 1 1 auto</code></td><td>sets grow, shrink, and basis</td></tr>
        <tr><td><code>align-self</code></td><td>overrides cross-axis alignment for one item</td></tr>
        <tr><td><code>order</code></td><td>changes visual order without changing DOM order</td></tr>
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
    <title>CSS Flex Items practice</title>
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
      <h1>CSS Flex Items checklist</h1>
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
| `flex: 1 1 auto` | sets grow, shrink, and basis | In CSS Flex Items, match it to the real cascade, specificity, and layout needs of the page. |
| `align-self` | overrides cross-axis alignment for one item | In CSS Flex Items, match it to the real cascade, specificity, and layout needs of the page. |
| `order` | changes visual order without changing DOM order | In CSS Flex Items, match it to the real cascade, specificity, and layout needs of the page. |

## Common mistakes

- Raising specificity or reaching for !important before understanding the cascade in CSS Flex Items.
- Copying the example without changing color tokens, spacing, breakpoints, or selectors for the real project.
- Forgetting to test `flex: 1 1 auto` in DevTools, responsive mode, keyboard focus, and hover/focus states.

## Practice step

Create a file named `flex-items.html`, run the first example, then replace at least one declaration related to `flex: 1 1 auto` with a token or project-specific value. Inspect the winning rule and box model in DevTools.

## Next step

Next, continue with **CSS Responsive Flexbox** so the CSS learning path builds on this concept.
