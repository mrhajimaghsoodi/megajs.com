---
title: "CSS Pseudo-classes"
description: "This page explains styling states, structural positions, and user interactions with examples, tables, and practical CSS notes."
seoTitle: "CSS Pseudo-classes Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn CSS Pseudo-classes (pseudo class) with live HTML style examples, syntax tables, W3Schools practice, and DevTools tips for modern production UI."
keywords: "CSS, CSS Pseudo-classes, CSS Pseudo-classes, Pseudo-classes tutorial, pseudo class"
order: 33
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Pseudo-classes

CSS Pseudo-classes focuses on styling states, structural positions, and user interactions. This is an educational rewrite inspired by the W3Schools CSS learning path, and every example uses a live-editor-friendly `<style>` block.

When you practice CSS Pseudo-classes, do not stop at the visual result. Inspect the winning cascade rule, computed style in the DevTools Styles panel, box dimensions, and layout effects.

## Core idea

- `:hover`: matches pointer hover state.
- `:focus-visible`: matches useful keyboard focus.
- `:nth-child()`: matches elements by sibling position.
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
    <title>CSS Pseudo-classes practice</title>
    <style>
      .choice {
        padding: .8rem 1rem;
        border: 1px solid #94a3b8;
      }
      button:hover,
      button:focus-visible {
        background: #dbeafe;
        outline: 2px solid #2563eb;
      }
    </style>
  </head>
  <body>
    <button class="choice" type="button">CSS Pseudo-classes</button>
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
    <title>CSS Pseudo-classes practice</title>
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
      <caption>CSS Pseudo-classes quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>:hover</code></td><td>matches pointer hover state</td></tr>
        <tr><td><code>:focus-visible</code></td><td>matches useful keyboard focus</td></tr>
        <tr><td><code>:nth-child()</code></td><td>matches elements by sibling position</td></tr>
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
    <title>CSS Pseudo-classes practice</title>
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
      <h1>CSS Pseudo-classes checklist</h1>
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
| `:hover` | matches pointer hover state | In CSS Pseudo-classes, match it to the real cascade, specificity, and layout needs of the page. |
| `:focus-visible` | matches useful keyboard focus | In CSS Pseudo-classes, match it to the real cascade, specificity, and layout needs of the page. |
| `:nth-child()` | matches elements by sibling position | In CSS Pseudo-classes, match it to the real cascade, specificity, and layout needs of the page. |

## Common mistakes

- Raising specificity or reaching for !important before understanding the cascade in CSS Pseudo-classes.
- Copying the example without changing color tokens, spacing, breakpoints, or selectors for the real project.
- Forgetting to test `:hover` in DevTools, responsive mode, keyboard focus, and hover/focus states.

## Practice step

Create a file named `pseudo-class.html`, run the first example, then replace at least one declaration related to `:hover` with a token or project-specific value. Inspect the winning rule and box model in DevTools.

## Next step

Next, continue with **CSS Pseudo-elements** so the CSS learning path builds on this concept.
