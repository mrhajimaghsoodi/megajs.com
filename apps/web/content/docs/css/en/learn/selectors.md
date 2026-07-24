---
title: "CSS Selectors"
description: "This page explains choosing elements by type, class, id, attribute, state, and relationship with examples, tables, and practical CSS notes."
seoTitle: "CSS Selectors Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn CSS Selectors (selectors) with live HTML style examples, syntax tables, W3Schools practice, and DevTools tips for modern production UI with practical."
keywords: "CSS, CSS Selectors, CSS Selectors, Selectors tutorial, selectors"
order: 4
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Selectors

CSS Selectors focuses on choosing elements by type, class, id, attribute, state, and relationship. This is an educational rewrite inspired by the W3Schools CSS learning path, and every example uses a live-editor-friendly `<style>` block.

When you practice CSS Selectors, do not stop at the visual result. Inspect the winning cascade rule, computed style in the DevTools Styles panel, box dimensions, and layout effects.

## Core idea

- `.card`: selects elements with a card class.
- `#main`: selects the element with a unique id.
- `article > h2`: selects direct child headings.
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
    <title>CSS Selectors practice</title>
    <style>
      article > h2 {
        color: #1d4ed8;
      }
      a[href^="https"]::after {
        content: " external";
        font-size: .8em;
      }
    </style>
  </head>
  <body>
    <article>
      <h2>CSS Selectors</h2>
      <p><a href="https://developer.mozilla.org/">Read MDN CSS</a></p>
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
    <title>CSS Selectors practice</title>
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
      <caption>CSS Selectors quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>.card</code></td><td>selects elements with a card class</td></tr>
        <tr><td><code>#main</code></td><td>selects the element with a unique id</td></tr>
        <tr><td><code>article &gt; h2</code></td><td>selects direct child headings</td></tr>
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
    <title>CSS Selectors practice</title>
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
      <h1>CSS Selectors checklist</h1>
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
| `.card` | selects elements with a card class | In CSS Selectors, match it to the real cascade, specificity, and layout needs of the page. |
| `#main` | selects the element with a unique id | In CSS Selectors, match it to the real cascade, specificity, and layout needs of the page. |
| `article > h2` | selects direct child headings | In CSS Selectors, match it to the real cascade, specificity, and layout needs of the page. |

## Common mistakes

- Raising specificity or reaching for !important before understanding the cascade in CSS Selectors.
- Copying the example without changing color tokens, spacing, breakpoints, or selectors for the real project.
- Forgetting to test `.card` in DevTools, responsive mode, keyboard focus, and hover/focus states.

## Practice step

Create a file named `selectors.html`, run the first example, then replace at least one declaration related to `.card` with a token or project-specific value. Inspect the winning rule and box model in DevTools.

## Next step

Next, continue with **How To Add CSS** so the CSS learning path builds on this concept.
