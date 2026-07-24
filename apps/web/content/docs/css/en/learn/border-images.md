---
title: "CSS Border Images"
description: "This page explains painting borders from sliced images or gradients for decorative frames with examples, tables, and practical CSS notes."
seoTitle: "CSS Border Images Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn CSS Border Images (border images) with live HTML style examples, syntax tables, W3Schools practice, and DevTools tips for modern production UI."
keywords: "CSS, CSS Border Images, CSS Border Images, Border Images tutorial, border images"
order: 51
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Border Images

CSS Border Images focuses on painting borders from sliced images or gradients for decorative frames. This is an educational rewrite inspired by the W3Schools CSS learning path, and every example uses a live-editor-friendly `<style>` block.

When you practice CSS Border Images, do not stop at the visual result. Inspect the winning cascade rule, computed style in the DevTools Styles panel, box dimensions, and layout effects.

## Core idea

- `border-image-source`: sets the image or gradient source.
- `border-image-slice`: defines how the image is sliced.
- `border-image-repeat`: controls edge repetition.
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
    <title>CSS Border Images practice</title>
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
      <h2>CSS Border Images</h2>
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
    <title>CSS Border Images practice</title>
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
      <caption>CSS Border Images quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>border-image-source</code></td><td>sets the image or gradient source</td></tr>
        <tr><td><code>border-image-slice</code></td><td>defines how the image is sliced</td></tr>
        <tr><td><code>border-image-repeat</code></td><td>controls edge repetition</td></tr>
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
    <title>CSS Border Images practice</title>
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
      <h1>CSS Border Images checklist</h1>
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
| `border-image-source` | sets the image or gradient source | In CSS Border Images, match it to the real cascade, specificity, and layout needs of the page. |
| `border-image-slice` | defines how the image is sliced | In CSS Border Images, match it to the real cascade, specificity, and layout needs of the page. |
| `border-image-repeat` | controls edge repetition | In CSS Border Images, match it to the real cascade, specificity, and layout needs of the page. |

## Common mistakes

- Raising specificity or reaching for !important before understanding the cascade in CSS Border Images.
- Copying the example without changing color tokens, spacing, breakpoints, or selectors for the real project.
- Forgetting to test `border-image-source` in DevTools, responsive mode, keyboard focus, and hover/focus states.

## Practice step

Create a file named `border-images.html`, run the first example, then replace at least one declaration related to `border-image-source` with a token or project-specific value. Inspect the winning rule and box model in DevTools.

## Next step

Next, continue with **CSS Gradients** so the CSS learning path builds on this concept.
