---
title: "CSS Animations"
description: "This page explains creating keyframe timelines with duration, iteration, direction, and fill behavior with examples, tables, and practical CSS notes."
seoTitle: "CSS Animations Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn CSS Animations (animations) with live HTML style examples, syntax tables, W3Schools practice, and DevTools tips for modern production UI with practical."
keywords: "CSS, CSS Animations, CSS Animations, Animations tutorial, animations"
order: 59
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS Animations

CSS Animations focuses on creating keyframe timelines with duration, iteration, direction, and fill behavior. This is an educational rewrite inspired by the W3Schools CSS learning path, and every example uses a live-editor-friendly `<style>` block.

When you practice CSS Animations, do not stop at the visual result. Inspect the winning cascade rule, computed style in the DevTools Styles panel, box dimensions, and layout effects.

## Core idea

- `@keyframes`: defines animation steps.
- `animation-duration`: sets one animation cycle length.
- `animation-iteration-count`: sets how often animation repeats.
- For this topic, smooth, performant motion that respects prefers-reduced-motion is the main sign that your CSS is doing its job.

## HTML and CSS examples

The three examples move from a focused pattern to a complete page. Run each one in the live editor, change one value, and compare the computed style.

### Example 1: Focused CSS pattern

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Animations practice</title>
    <style>
      @keyframes pulse {
        from { transform: scale(1); }
        to { transform: scale(1.08); }
      }
      @media (prefers-reduced-motion: no-preference) {
        .dot { animation: pulse 700ms ease-in-out infinite alternate; }
      }
      .dot {
        width: 4rem;
        aspect-ratio: 1;
        border-radius: 50%;
        background: #2563eb;
      }
    </style>
  </head>
  <body>
    <div class="dot" aria-label="CSS Animations"></div>
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
    <title>CSS Animations practice</title>
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
      <caption>CSS Animations quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>@keyframes</code></td><td>defines animation steps</td></tr>
        <tr><td><code>animation-duration</code></td><td>sets one animation cycle length</td></tr>
        <tr><td><code>animation-iteration-count</code></td><td>sets how often animation repeats</td></tr>
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
    <title>CSS Animations practice</title>
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
      <h1>CSS Animations checklist</h1>
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
| `@keyframes` | defines animation steps | In CSS Animations, match it to the real cascade, specificity, and layout needs of the page. |
| `animation-duration` | sets one animation cycle length | In CSS Animations, match it to the real cascade, specificity, and layout needs of the page. |
| `animation-iteration-count` | sets how often animation repeats | In CSS Animations, match it to the real cascade, specificity, and layout needs of the page. |

## Common mistakes

- Raising specificity or reaching for !important before understanding the cascade in CSS Animations.
- Copying the example without changing color tokens, spacing, breakpoints, or selectors for the real project.
- Forgetting to test `@keyframes` in DevTools, responsive mode, keyboard focus, and hover/focus states.

## Practice step

Create a file named `animations.html`, run the first example, then replace at least one declaration related to `@keyframes` with a token or project-specific value. Inspect the winning rule and box model in DevTools.

## Next step

Next, continue with **CSS Tooltips** so the CSS learning path builds on this concept.
