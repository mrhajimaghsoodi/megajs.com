---
title: "CSS Multiple Columns"
description: "This page explains flowing content through newspaper-like columns with gaps, rules, and breaks with examples, tables, and practical CSS notes."
seoTitle: "CSS Multiple Columns Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn CSS Multiple Columns (multiple columns) with live HTML style examples, syntax tables, W3Schools practice, and DevTools tips for modern production UI."
keywords: "CSS, CSS Multiple Columns, CSS Multiple Columns, Multiple Columns tutorial, multiple columns"
order: 65
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Multiple Columns

CSS Multiple Columns focuses on flowing content through newspaper-like columns with gaps, rules, and breaks. This is an educational rewrite inspired by the W3Schools CSS learning path, and every example uses a live-editor-friendly `<style>` block.

When you practice CSS Multiple Columns, do not stop at the visual result. Inspect the winning cascade rule, computed style in the DevTools Styles panel, box dimensions, and layout effects.

## Core idea

- `column-count`: sets the desired number of columns.
- `column-gap`: sets space between columns.
- `break-inside`: controls fragmentation inside boxes.
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
    <title>CSS Multiple Columns practice</title>
    <style>
      .columns {
        column-count: 2;
        column-gap: 2rem;
        column-rule: 1px solid #cbd5e1;
      }
    </style>
  </head>
  <body>
    <article class="columns">
      <h2>CSS Multiple Columns</h2>
      <p>Multi-column layout fragments long text into readable columns.</p>
      <p>Use breaks carefully so headings stay with their content.</p>
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
    <title>CSS Multiple Columns practice</title>
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
      <caption>CSS Multiple Columns quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>column-count</code></td><td>sets the desired number of columns</td></tr>
        <tr><td><code>column-gap</code></td><td>sets space between columns</td></tr>
        <tr><td><code>break-inside</code></td><td>controls fragmentation inside boxes</td></tr>
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
    <title>CSS Multiple Columns practice</title>
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
      <h1>CSS Multiple Columns checklist</h1>
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
| `column-count` | sets the desired number of columns | In CSS Multiple Columns, match it to the real cascade, specificity, and layout needs of the page. |
| `column-gap` | sets space between columns | In CSS Multiple Columns, match it to the real cascade, specificity, and layout needs of the page. |
| `break-inside` | controls fragmentation inside boxes | In CSS Multiple Columns, match it to the real cascade, specificity, and layout needs of the page. |

## Common mistakes

- Raising specificity or reaching for !important before understanding the cascade in CSS Multiple Columns.
- Copying the example without changing color tokens, spacing, breakpoints, or selectors for the real project.
- Forgetting to test `column-count` in DevTools, responsive mode, keyboard focus, and hover/focus states.

## Practice step

Create a file named `multiple-columns.html`, run the first example, then replace at least one declaration related to `column-count` with a token or project-specific value. Inspect the winning rule and box model in DevTools.

## Next step

Next, continue with **CSS User Interface** so the CSS learning path builds on this concept.
