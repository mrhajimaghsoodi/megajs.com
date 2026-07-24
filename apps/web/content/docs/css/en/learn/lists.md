---
title: "CSS Lists"
description: "This page explains customizing markers, indentation, spacing, and list layout while preserving semantics with examples, tables, and practical CSS notes."
seoTitle: "CSS Lists Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn CSS Lists (lists) with live HTML style examples, syntax tables, W3Schools practice, and DevTools tips for modern production UI with practical drills."
keywords: "CSS, CSS Lists, CSS Lists, Lists tutorial, lists"
order: 21
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Lists

CSS Lists focuses on customizing markers, indentation, spacing, and list layout while preserving semantics. This is an educational rewrite inspired by the W3Schools CSS learning path, and every example uses a live-editor-friendly `<style>` block.

When you practice CSS Lists, do not stop at the visual result. Inspect the winning cascade rule, computed style in the DevTools Styles panel, box dimensions, and layout effects.

## Core idea

- `list-style`: sets marker type, position, or image.
- `::marker`: styles list item markers.
- `padding-inline-start`: controls logical list indentation.
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
    <title>CSS Lists practice</title>
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
    <title>CSS Lists practice</title>
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
      <caption>CSS Lists quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>list-style</code></td><td>sets marker type, position, or image</td></tr>
        <tr><td><code>::marker</code></td><td>styles list item markers</td></tr>
        <tr><td><code>padding-inline-start</code></td><td>controls logical list indentation</td></tr>
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
    <title>CSS Lists practice</title>
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
      <h1>CSS Lists checklist</h1>
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
| `list-style` | sets marker type, position, or image | In CSS Lists, match it to the real cascade, specificity, and layout needs of the page. |
| `::marker` | styles list item markers | In CSS Lists, match it to the real cascade, specificity, and layout needs of the page. |
| `padding-inline-start` | controls logical list indentation | In CSS Lists, match it to the real cascade, specificity, and layout needs of the page. |

## Common mistakes

- Raising specificity or reaching for !important before understanding the cascade in CSS Lists.
- Copying the example without changing color tokens, spacing, breakpoints, or selectors for the real project.
- Forgetting to test `list-style` in DevTools, responsive mode, keyboard focus, and hover/focus states.

## Practice step

Create a file named `lists.html`, run the first example, then replace at least one declaration related to `list-style` with a token or project-specific value. Inspect the winning rule and box model in DevTools.

## Next step

Next, continue with **CSS Tables** so the CSS learning path builds on this concept.
