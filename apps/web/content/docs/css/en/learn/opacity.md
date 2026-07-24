---
title: "CSS Opacity"
description: "This page explains controlling transparency and understanding stacking and accessibility effects with examples, tables, and practical CSS notes."
seoTitle: "CSS Opacity Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn CSS Opacity (opacity) with live HTML style examples, syntax tables, W3Schools practice, and DevTools tips for modern production UI with practical drills."
keywords: "CSS, CSS Opacity, CSS Opacity, Opacity tutorial, opacity"
order: 35
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Opacity

CSS Opacity focuses on controlling transparency and understanding stacking and accessibility effects. This is an educational rewrite inspired by the W3Schools CSS learning path, and every example uses a live-editor-friendly `<style>` block.

When you practice CSS Opacity, do not stop at the visual result. Inspect the winning cascade rule, computed style in the DevTools Styles panel, box dimensions, and layout effects.

## Core idea

- `opacity: .75`: makes an entire element subtree translucent.
- `rgba()`: adds alpha to a single color value.
- `visibility`: hides without removing layout space.
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
    <title>CSS Opacity practice</title>
    <style>
      .card {
        opacity: .92;
        padding: 1rem;
        border-radius: 1rem;
        box-shadow: 0 1rem 2rem rgb(15 23 42 / .16);
      }
    </style>
  </head>
  <body>
    <article class="card">
      <h2>CSS Opacity</h2>
      <p>Opacity affects the entire rendered subtree.</p>
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
    <title>CSS Opacity practice</title>
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
      <caption>CSS Opacity quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>opacity: .75</code></td><td>makes an entire element subtree translucent</td></tr>
        <tr><td><code>rgba()</code></td><td>adds alpha to a single color value</td></tr>
        <tr><td><code>visibility</code></td><td>hides without removing layout space</td></tr>
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
    <title>CSS Opacity practice</title>
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
      <h1>CSS Opacity checklist</h1>
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
| `opacity: .75` | makes an entire element subtree translucent | In CSS Opacity, match it to the real cascade, specificity, and layout needs of the page. |
| `rgba()` | adds alpha to a single color value | In CSS Opacity, match it to the real cascade, specificity, and layout needs of the page. |
| `visibility` | hides without removing layout space | In CSS Opacity, match it to the real cascade, specificity, and layout needs of the page. |

## Common mistakes

- Raising specificity or reaching for !important before understanding the cascade in CSS Opacity.
- Copying the example without changing color tokens, spacing, breakpoints, or selectors for the real project.
- Forgetting to test `opacity: .75` in DevTools, responsive mode, keyboard focus, and hover/focus states.

## Practice step

Create a file named `opacity.html`, run the first example, then replace at least one declaration related to `opacity: .75` with a token or project-specific value. Inspect the winning rule and box model in DevTools.

## Next step

Next, continue with **CSS UI Patterns** so the CSS learning path builds on this concept.
