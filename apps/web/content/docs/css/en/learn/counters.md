---
title: "CSS Counters"
description: "This page explains numbering headings, steps, cards, and generated labels with CSS counters with examples, tables, and practical CSS notes."
seoTitle: "CSS Counters Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn CSS Counters (counters) with live HTML style examples, syntax tables, W3Schools practice, and DevTools tips for modern production UI with practical."
keywords: "CSS, CSS Counters, CSS Counters, Counters tutorial, counters"
order: 43
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Counters

CSS Counters focuses on numbering headings, steps, cards, and generated labels with CSS counters. This is an educational rewrite inspired by the W3Schools CSS learning path, and every example uses a live-editor-friendly `<style>` block.

When you practice CSS Counters, do not stop at the visual result. Inspect the winning cascade rule, computed style in the DevTools Styles panel, box dimensions, and layout effects.

## Core idea

- `counter-reset`: creates or resets a counter.
- `counter-increment`: increments a counter per element.
- `counter()`: prints the current counter value.
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
    <title>CSS Counters practice</title>
    <style>
      .steps {
        counter-reset: step;
        list-style: none;
        padding: 0;
      }
      .steps li {
        counter-increment: step;
        margin-block: .5rem;
      }
      .steps li::before {
        content: counter(step) ". ";
        font-weight: 700;
        color: #2563eb;
      }
    </style>
  </head>
  <body>
    <ol class="steps">
      <li>Write the selector.</li>
      <li>Add declarations.</li>
      <li>Inspect the cascade.</li>
    </ol>
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
    <title>CSS Counters practice</title>
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
      <caption>CSS Counters quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>counter-reset</code></td><td>creates or resets a counter</td></tr>
        <tr><td><code>counter-increment</code></td><td>increments a counter per element</td></tr>
        <tr><td><code>counter()</code></td><td>prints the current counter value</td></tr>
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
    <title>CSS Counters practice</title>
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
      <h1>CSS Counters checklist</h1>
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
| `counter-reset` | creates or resets a counter | In CSS Counters, match it to the real cascade, specificity, and layout needs of the page. |
| `counter-increment` | increments a counter per element | In CSS Counters, match it to the real cascade, specificity, and layout needs of the page. |
| `counter()` | prints the current counter value | In CSS Counters, match it to the real cascade, specificity, and layout needs of the page. |

## Common mistakes

- Raising specificity or reaching for !important before understanding the cascade in CSS Counters.
- Copying the example without changing color tokens, spacing, breakpoints, or selectors for the real project.
- Forgetting to test `counter-reset` in DevTools, responsive mode, keyboard focus, and hover/focus states.

## Practice step

Create a file named `counters.html`, run the first example, then replace at least one declaration related to `counter-reset` with a token or project-specific value. Inspect the winning rule and box model in DevTools.

## Next step

Next, continue with **CSS Website Layout** so the CSS learning path builds on this concept.
