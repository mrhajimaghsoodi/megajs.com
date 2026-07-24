---
title: "CSS Float"
description: "This page explains understanding legacy float layout, text wrapping, and clearing with examples, tables, and practical CSS notes."
seoTitle: "CSS Float Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn CSS Float (float) with live HTML style examples, syntax tables, W3Schools practice, and DevTools tips for modern production UI with practical drills."
keywords: "CSS, CSS Float, CSS Float, Float tutorial, float"
order: 29
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Float

CSS Float focuses on understanding legacy float layout, text wrapping, and clearing. This is an educational rewrite inspired by the W3Schools CSS learning path, and every example uses a live-editor-friendly `<style>` block.

When you practice CSS Float, do not stop at the visual result. Inspect the winning cascade rule, computed style in the DevTools Styles panel, box dimensions, and layout effects.

## Core idea

- `float: inline-start`: floats a box to the logical start side.
- `clear: both`: moves below previous floats.
- `flow-root`: contains floats without clearfix hacks.
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
    <title>CSS Float practice</title>
    <style>
      .article {
        display: flow-root;
      }
      img {
        float: inline-start;
        width: 8rem;
        margin-inline-end: 1rem;
        border-radius: .75rem;
      }
    </style>
  </head>
  <body>
    <article class="article">
      <img src="https://placehold.co/160x120" alt="CSS float example">
      <p>Text wraps around the floated image, while flow-root contains the float.</p>
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
    <title>CSS Float practice</title>
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
      <caption>CSS Float quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>float: inline-start</code></td><td>floats a box to the logical start side</td></tr>
        <tr><td><code>clear: both</code></td><td>moves below previous floats</td></tr>
        <tr><td><code>flow-root</code></td><td>contains floats without clearfix hacks</td></tr>
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
    <title>CSS Float practice</title>
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
      <h1>CSS Float checklist</h1>
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
| `float: inline-start` | floats a box to the logical start side | In CSS Float, match it to the real cascade, specificity, and layout needs of the page. |
| `clear: both` | moves below previous floats | In CSS Float, match it to the real cascade, specificity, and layout needs of the page. |
| `flow-root` | contains floats without clearfix hacks | In CSS Float, match it to the real cascade, specificity, and layout needs of the page. |

## Common mistakes

- Raising specificity or reaching for !important before understanding the cascade in CSS Float.
- Copying the example without changing color tokens, spacing, breakpoints, or selectors for the real project.
- Forgetting to test `float: inline-start` in DevTools, responsive mode, keyboard focus, and hover/focus states.

## Practice step

Create a file named `float.html`, run the first example, then replace at least one declaration related to `float: inline-start` with a token or project-specific value. Inspect the winning rule and box model in DevTools.

## Next step

Next, continue with **CSS Inline-block** so the CSS learning path builds on this concept.
