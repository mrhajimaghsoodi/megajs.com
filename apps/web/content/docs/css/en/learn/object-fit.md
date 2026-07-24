---
title: "CSS Object-fit"
description: "This page explains fitting replaced content like images and videos into fixed media frames with examples, tables, and practical CSS notes."
seoTitle: "CSS Object-fit Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn CSS Object-fit (object fit) with live HTML style examples, syntax tables, W3Schools practice, and DevTools tips for modern production UI with practical."
keywords: "CSS, CSS Object-fit, CSS Object-fit, Object-fit tutorial, object fit"
order: 61
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Object-fit

CSS Object-fit focuses on fitting replaced content like images and videos into fixed media frames. This is an educational rewrite inspired by the W3Schools CSS learning path, and every example uses a live-editor-friendly `<style>` block.

When you practice CSS Object-fit, do not stop at the visual result. Inspect the winning cascade rule, computed style in the DevTools Styles panel, box dimensions, and layout effects.

## Core idea

- `object-fit: cover`: fills the frame while cropping.
- `object-fit: contain`: fits all content inside the frame.
- `object-position`: chooses the visible focal point.
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
    <title>CSS Object-fit practice</title>
    <style>
      .gallery {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
        gap: 1rem;
      }
      img {
        width: 100%;
        aspect-ratio: 4 / 3;
        object-fit: cover;
        border-radius: .75rem;
      }
    </style>
  </head>
  <body>
    <div class="gallery">
      <img src="https://placehold.co/400x300" alt="CSS media frame">
      <img src="https://placehold.co/300x400" alt="CSS cropped frame">
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
    <title>CSS Object-fit practice</title>
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
      <caption>CSS Object-fit quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>object-fit: cover</code></td><td>fills the frame while cropping</td></tr>
        <tr><td><code>object-fit: contain</code></td><td>fits all content inside the frame</td></tr>
        <tr><td><code>object-position</code></td><td>chooses the visible focal point</td></tr>
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
    <title>CSS Object-fit practice</title>
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
      <h1>CSS Object-fit checklist</h1>
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
| `object-fit: cover` | fills the frame while cropping | In CSS Object-fit, match it to the real cascade, specificity, and layout needs of the page. |
| `object-fit: contain` | fits all content inside the frame | In CSS Object-fit, match it to the real cascade, specificity, and layout needs of the page. |
| `object-position` | chooses the visible focal point | In CSS Object-fit, match it to the real cascade, specificity, and layout needs of the page. |

## Common mistakes

- Raising specificity or reaching for !important before understanding the cascade in CSS Object-fit.
- Copying the example without changing color tokens, spacing, breakpoints, or selectors for the real project.
- Forgetting to test `object-fit: cover` in DevTools, responsive mode, keyboard focus, and hover/focus states.

## Practice step

Create a file named `object-fit.html`, run the first example, then replace at least one declaration related to `object-fit: cover` with a token or project-specific value. Inspect the winning rule and box model in DevTools.

## Next step

Next, continue with **CSS Masking** so the CSS learning path builds on this concept.
