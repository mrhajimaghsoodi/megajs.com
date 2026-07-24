---
title: "CSS Image Sprites"
description: "This page explains using one image file with background-position for small icons and legacy optimization with examples, tables, and practical CSS notes."
seoTitle: "CSS Image Sprites Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn CSS Image Sprites (image sprites) with live HTML style examples, syntax tables, W3Schools practice, and DevTools tips for modern production UI."
keywords: "CSS, CSS Image Sprites, CSS Image Sprites, Image Sprites tutorial, image sprites"
order: 40
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Image Sprites

CSS Image Sprites focuses on using one image file with background-position for small icons and legacy optimization. This is an educational rewrite inspired by the W3Schools CSS learning path, and every example uses a live-editor-friendly `<style>` block.

When you practice CSS Image Sprites, do not stop at the visual result. Inspect the winning cascade rule, computed style in the DevTools Styles panel, box dimensions, and layout effects.

## Core idea

- `background-position`: moves the sprite sheet behind the box.
- `background-size`: scales the sprite sheet predictably.
- `width / height`: sets the icon viewport.
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
    <title>CSS Image Sprites practice</title>
    <style>
      .demo {
        padding: 1rem;
        border-radius: .75rem;
        background: #f8fafc;
      }
      .demo code {
        color: #2563eb;
        font-weight: 700;
      }
    </style>
  </head>
  <body>
    <section class="demo">
      <h2>CSS Image Sprites</h2>
      <p>Try changing <code>background-position</code> and inspect the computed style.</p>
    </section>
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
    <title>CSS Image Sprites practice</title>
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
      <caption>CSS Image Sprites quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>background-position</code></td><td>moves the sprite sheet behind the box</td></tr>
        <tr><td><code>background-size</code></td><td>scales the sprite sheet predictably</td></tr>
        <tr><td><code>width / height</code></td><td>sets the icon viewport</td></tr>
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
    <title>CSS Image Sprites practice</title>
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
      <h1>CSS Image Sprites checklist</h1>
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
| `background-position` | moves the sprite sheet behind the box | In CSS Image Sprites, match it to the real cascade, specificity, and layout needs of the page. |
| `background-size` | scales the sprite sheet predictably | In CSS Image Sprites, match it to the real cascade, specificity, and layout needs of the page. |
| `width / height` | sets the icon viewport | In CSS Image Sprites, match it to the real cascade, specificity, and layout needs of the page. |

## Common mistakes

- Raising specificity or reaching for !important before understanding the cascade in CSS Image Sprites.
- Copying the example without changing color tokens, spacing, breakpoints, or selectors for the real project.
- Forgetting to test `background-position` in DevTools, responsive mode, keyboard focus, and hover/focus states.

## Practice step

Create a file named `image-sprites.html`, run the first example, then replace at least one declaration related to `background-position` with a token or project-specific value. Inspect the winning rule and box model in DevTools.

## Next step

Next, continue with **CSS Attribute Selectors** so the CSS learning path builds on this concept.
