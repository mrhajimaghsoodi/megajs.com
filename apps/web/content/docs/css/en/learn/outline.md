---
title: "CSS Outline"
description: "This page explains drawing focus and emphasis rings that do not consume layout space with examples, tables, and practical CSS notes."
seoTitle: "CSS Outline Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn CSS Outline (outline) with live HTML style examples, syntax tables, W3Schools practice, and DevTools tips for modern production UI with practical drills."
keywords: "CSS, CSS Outline, CSS Outline, Outline tutorial, outline"
order: 15
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Outline

CSS Outline focuses on drawing focus and emphasis rings that do not consume layout space. This is an educational rewrite inspired by the W3Schools CSS learning path, and every example uses a live-editor-friendly `<style>` block.

When you practice CSS Outline, do not stop at the visual result. Inspect the winning cascade rule, computed style in the DevTools Styles panel, box dimensions, and layout effects.

## Core idea

- `outline`: draws a line outside the border edge.
- `outline-offset`: adds space between border and outline.
- `:focus-visible`: styles keyboard-relevant focus.
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
    <title>CSS Outline practice</title>
    <style>
      .card {
        padding: 1rem;
        border: 2px solid #2563eb;
        border-radius: 1rem;
        outline: 3px solid rgb(37 99 235 / .18);
        outline-offset: .25rem;
      }
    </style>
  </head>
  <body>
    <article class="card">
      <h2>CSS Outline</h2>
      <p>The border box, outline, and radius are visible in DevTools.</p>
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
    <title>CSS Outline practice</title>
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
      <caption>CSS Outline quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>outline</code></td><td>draws a line outside the border edge</td></tr>
        <tr><td><code>outline-offset</code></td><td>adds space between border and outline</td></tr>
        <tr><td><code>:focus-visible</code></td><td>styles keyboard-relevant focus</td></tr>
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
    <title>CSS Outline practice</title>
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
      <h1>CSS Outline checklist</h1>
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
| `outline` | draws a line outside the border edge | In CSS Outline, match it to the real cascade, specificity, and layout needs of the page. |
| `outline-offset` | adds space between border and outline | In CSS Outline, match it to the real cascade, specificity, and layout needs of the page. |
| `:focus-visible` | styles keyboard-relevant focus | In CSS Outline, match it to the real cascade, specificity, and layout needs of the page. |

## Common mistakes

- Raising specificity or reaching for !important before understanding the cascade in CSS Outline.
- Copying the example without changing color tokens, spacing, breakpoints, or selectors for the real project.
- Forgetting to test `outline` in DevTools, responsive mode, keyboard focus, and hover/focus states.

## Practice step

Create a file named `outline.html`, run the first example, then replace at least one declaration related to `outline` with a token or project-specific value. Inspect the winning rule and box model in DevTools.

## Next step

Next, continue with **CSS Text and Fonts** so the CSS learning path builds on this concept.
