---
title: "CSS Image Gallery"
description: "This page explains arranging media cards with object-fit, grid, captions, hover states, and responsive columns with examples, tables, and practical CSS notes."
seoTitle: "CSS Image Gallery Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn CSS Image Gallery (image gallery) with live HTML style examples, syntax tables, W3Schools practice, and DevTools tips for modern production UI."
keywords: "CSS, CSS Image Gallery, CSS Image Gallery, Image Gallery tutorial, image gallery"
order: 39
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Image Gallery

CSS Image Gallery focuses on arranging media cards with object-fit, grid, captions, hover states, and responsive columns. This is an educational rewrite inspired by the W3Schools CSS learning path, and every example uses a live-editor-friendly `<style>` block.

When you practice CSS Image Gallery, do not stop at the visual result. Inspect the winning cascade rule, computed style in the DevTools Styles panel, box dimensions, and layout effects.

## Core idea

- `object-fit: cover`: crops media to fill a frame.
- `grid-template-columns`: creates gallery columns.
- `aspect-ratio`: reserves consistent media frames.
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
    <title>CSS Image Gallery practice</title>
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
    <title>CSS Image Gallery practice</title>
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
      <caption>CSS Image Gallery quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>object-fit: cover</code></td><td>crops media to fill a frame</td></tr>
        <tr><td><code>grid-template-columns</code></td><td>creates gallery columns</td></tr>
        <tr><td><code>aspect-ratio</code></td><td>reserves consistent media frames</td></tr>
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
    <title>CSS Image Gallery practice</title>
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
      <h1>CSS Image Gallery checklist</h1>
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
| `object-fit: cover` | crops media to fill a frame | In CSS Image Gallery, match it to the real cascade, specificity, and layout needs of the page. |
| `grid-template-columns` | creates gallery columns | In CSS Image Gallery, match it to the real cascade, specificity, and layout needs of the page. |
| `aspect-ratio` | reserves consistent media frames | In CSS Image Gallery, match it to the real cascade, specificity, and layout needs of the page. |

## Common mistakes

- Raising specificity or reaching for !important before understanding the cascade in CSS Image Gallery.
- Copying the example without changing color tokens, spacing, breakpoints, or selectors for the real project.
- Forgetting to test `object-fit: cover` in DevTools, responsive mode, keyboard focus, and hover/focus states.

## Practice step

Create a file named `image-gallery.html`, run the first example, then replace at least one declaration related to `object-fit: cover` with a token or project-specific value. Inspect the winning rule and box model in DevTools.

## Next step

Next, continue with **CSS Image Sprites** so the CSS learning path builds on this concept.
