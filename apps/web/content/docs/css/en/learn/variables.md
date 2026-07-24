---
title: "CSS Variables"
description: "This page explains using custom properties and var() for tokens, themes, components, and runtime overrides with examples, tables, and practical CSS notes."
seoTitle: "CSS Variables Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn CSS Variables (variables) with live HTML style examples, syntax tables, W3Schools practice, and DevTools tips for modern production UI with practical."
keywords: "CSS, CSS Variables, CSS Variables, Variables tutorial, variables"
order: 67
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Variables

CSS Variables focuses on using custom properties and var() for tokens, themes, components, and runtime overrides. This is an educational rewrite inspired by the W3Schools CSS learning path, and every example uses a live-editor-friendly `<style>` block.

When you practice CSS Variables, do not stop at the visual result. Inspect the winning cascade rule, computed style in the DevTools Styles panel, box dimensions, and layout effects.

## Core idea

- `--brand-color`: defines a custom property.
- `var(--brand-color)`: reads a custom property value.
- `:root`: stores global design tokens.
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
    <title>CSS Variables practice</title>
    <style>
      :root {
        --brand: #2563eb;
        --surface: #eff6ff;
      }
      button {
        background: var(--brand);
        color: white;
        border: 0;
        border-radius: .75rem;
        padding: .75rem 1rem;
      }
      .panel {
        background: var(--surface);
        padding: 1rem;
      }
    </style>
  </head>
  <body>
    <section class="panel">
      <h2>CSS Variables</h2>
      <button type="button">Uses var()</button>
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
    <title>CSS Variables practice</title>
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
      <caption>CSS Variables quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>--brand-color</code></td><td>defines a custom property</td></tr>
        <tr><td><code>var(--brand-color)</code></td><td>reads a custom property value</td></tr>
        <tr><td><code>:root</code></td><td>stores global design tokens</td></tr>
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
    <title>CSS Variables practice</title>
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
      <h1>CSS Variables checklist</h1>
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
| `--brand-color` | defines a custom property | In CSS Variables, match it to the real cascade, specificity, and layout needs of the page. |
| `var(--brand-color)` | reads a custom property value | In CSS Variables, match it to the real cascade, specificity, and layout needs of the page. |
| `:root` | stores global design tokens | In CSS Variables, match it to the real cascade, specificity, and layout needs of the page. |

## Common mistakes

- Raising specificity or reaching for !important before understanding the cascade in CSS Variables.
- Copying the example without changing color tokens, spacing, breakpoints, or selectors for the real project.
- Forgetting to test `--brand-color` in DevTools, responsive mode, keyboard focus, and hover/focus states.

## Practice step

Create a file named `variables.html`, run the first example, then replace at least one declaration related to `--brand-color` with a token or project-specific value. Inspect the winning rule and box model in DevTools.

## Next step

Next, continue with **CSS Box Sizing** so the CSS learning path builds on this concept.
