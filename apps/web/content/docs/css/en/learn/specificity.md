---
title: "CSS Specificity"
description: "This page explains predicting which selector wins before source order and cascade layers are considered with examples, tables, and practical CSS notes."
seoTitle: "CSS Specificity Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn CSS Specificity (specificity) with live HTML style examples, syntax tables, W3Schools practice, and DevTools tips for modern production UI."
keywords: "CSS, CSS Specificity, CSS Specificity, Specificity tutorial, specificity"
order: 46
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Specificity

CSS Specificity focuses on predicting which selector wins before source order and cascade layers are considered. This is an educational rewrite inspired by the W3Schools CSS learning path, and every example uses a live-editor-friendly `<style>` block.

When you practice CSS Specificity, do not stop at the visual result. Inspect the winning cascade rule, computed style in the DevTools Styles panel, box dimensions, and layout effects.

## Core idea

- `0-1-0`: class-level specificity weight.
- `:where()`: adds no specificity.
- `#id`: adds id-level specificity.
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
    <title>CSS Specificity practice</title>
    <style>
      @layer base, components;
      @layer base {
        :where(.note) { color: #334155; }
      }
      @layer components {
        .note.featured { color: #1d4ed8; }
      }
    </style>
  </head>
  <body>
    <p class="note featured">
      Inspect which cascade layer and selector wins for CSS Specificity.
    </p>
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
    <title>CSS Specificity practice</title>
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
      <caption>CSS Specificity quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>0-1-0</code></td><td>class-level specificity weight</td></tr>
        <tr><td><code>:where()</code></td><td>adds no specificity</td></tr>
        <tr><td><code>#id</code></td><td>adds id-level specificity</td></tr>
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
    <title>CSS Specificity practice</title>
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
      <h1>CSS Specificity checklist</h1>
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
| `0-1-0` | class-level specificity weight | In CSS Specificity, match it to the real cascade, specificity, and layout needs of the page. |
| `:where()` | adds no specificity | In CSS Specificity, match it to the real cascade, specificity, and layout needs of the page. |
| `#id` | adds id-level specificity | In CSS Specificity, match it to the real cascade, specificity, and layout needs of the page. |

## Common mistakes

- Raising specificity or reaching for !important before understanding the cascade in CSS Specificity.
- Copying the example without changing color tokens, spacing, breakpoints, or selectors for the real project.
- Forgetting to test `0-1-0` in DevTools, responsive mode, keyboard focus, and hover/focus states.

## Practice step

Create a file named `specificity.html`, run the first example, then replace at least one declaration related to `0-1-0` with a token or project-specific value. Inspect the winning rule and box model in DevTools.

## Next step

Next, continue with **CSS !important** so the CSS learning path builds on this concept.
