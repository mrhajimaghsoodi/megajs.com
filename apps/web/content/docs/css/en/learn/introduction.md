---
title: "Introduction to CSS"
description: "This page explains what CSS does, how rules reach elements, and how the cascade turns declarations into computed style with examples, tables, and practical CSS notes."
seoTitle: "Introduction to CSS Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn Introduction to CSS (introduction) with live HTML style examples, syntax tables, W3Schools practice, and DevTools tips for modern production UI."
keywords: "CSS, Introduction to CSS, CSS introduction, CSS tutorial, cascade computed style"
order: 1
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Introduction to CSS

Introduction to CSS focuses on what CSS does, how rules reach elements, and how the cascade turns declarations into computed style. This is an educational rewrite inspired by the W3Schools CSS learning path, and every example uses a live-editor-friendly `<style>` block.

When you practice Introduction to CSS, do not stop at the visual result. Inspect the winning cascade rule, computed style in the DevTools Styles panel, box dimensions, and layout effects.

## Core idea

- `selector { property: value; }`: connects a selector to one or more declarations.
- `cascade`: chooses the winning declaration from competing rules.
- `computed style`: the final value the browser applies after resolving CSS.
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
    <title>Introduction to CSS practice</title>
    <style>
      :root {
        color-scheme: light dark;
        --accent: #2563eb;
      }
      main {
        max-width: 44rem;
        margin-inline: auto;
        padding: 2rem;
      }
      h1 {
        color: var(--accent);
      }
    </style>
  </head>
  <body>
    <main>
      <h1>Introduction to CSS</h1>
      <p>CSS rules cascade from selectors into computed style.</p>
    </main>
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
    <title>Introduction to CSS practice</title>
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
      <caption>Introduction to CSS quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>selector { property: value; }</code></td><td>connects a selector to one or more declarations</td></tr>
        <tr><td><code>cascade</code></td><td>chooses the winning declaration from competing rules</td></tr>
        <tr><td><code>computed style</code></td><td>the final value the browser applies after resolving CSS</td></tr>
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
    <title>Introduction to CSS practice</title>
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
      <h1>Introduction to CSS checklist</h1>
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
| `selector { property: value; }` | connects a selector to one or more declarations | In Introduction to CSS, match it to the real cascade, specificity, and layout needs of the page. |
| `cascade` | chooses the winning declaration from competing rules | In Introduction to CSS, match it to the real cascade, specificity, and layout needs of the page. |
| `computed style` | the final value the browser applies after resolving CSS | In Introduction to CSS, match it to the real cascade, specificity, and layout needs of the page. |

## Common mistakes

- Raising specificity or reaching for !important before understanding the cascade in Introduction to CSS.
- Copying the example without changing color tokens, spacing, breakpoints, or selectors for the real project.
- Forgetting to test `selector { property: value; }` in DevTools, responsive mode, keyboard focus, and hover/focus states.

## Practice step

Create a file named `introduction.html`, run the first example, then replace at least one declaration related to `selector { property: value; }` with a token or project-specific value. Inspect the winning rule and box model in DevTools.

## Next step

Next, continue with **CSS Syntax Basics** so the CSS learning path builds on this concept.
