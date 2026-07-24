---
title: "CSS Color Specification"
description: "This page explains the official color model, syntaxes, interpolation, opacity, currentColor, gamut, and accessibility implications with examples, tables, and practical CSS notes."
seoTitle: "CSS Color Specification — W3C Official Summary | MEGA JS Docs"
seoDescription: "CSS Color Specification (color spec): W3C CSS official summary for authors with examples, interop notes, computed style, and stable production guidance."
keywords: "CSS, CSS Color Specification, CSS Color spec, W3C color, CSS color spaces"
order: 6
track: official
sources:
  - name: W3C CSS
    url: https://www.w3.org/Style/CSS/
  - name: CSS Snapshot 2024
    url: https://www.w3.org/TR/css-2024/
---
# CSS Color Specification

CSS Color Specification is a specification-oriented summary of W3C CSS. It is not a full spec dump; it explains the official color model, syntaxes, interpolation, opacity, currentColor, gamut, and accessibility implications for authors who want interoperable and durable styles.

## Reading with a specification mindset

In CSS specifications, terms such as must, should, computed value, used value, grammar, and conformance carry precise meaning. This summary turns that language into practical authoring decisions, but edge cases still belong in the W3C text.

## Key concepts

| Term | Author-facing summary |
| --- | --- |
| `<color>` | CSS data type for colors |
| `currentColor` | the current value of color |
| `color space` | coordinate system for representing colors |

## Authoring examples

### Example 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Color Specification practice</title>
    <style>
      .swatch {
        padding: 1.25rem;
        color: white;
        border-radius: 1rem;
        background: linear-gradient(135deg, #2563eb, hsl(280 80% 55%));
      }
    </style>
  </head>
  <body>
    <div class="swatch">
      <h2>CSS Color Specification</h2>
      <p>Change the gradient colors and inspect the computed background.</p>
    </div>
  </body>
</html>
```

### Example 2

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Color Specification practice</title>
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
      <h1>CSS Color Specification checklist</h1>
      <ul class="checklist">
        <li>Inspect the winning CSS rule.</li>
        <li>Check the computed style and box model.</li>
        <li>Resize the viewport and test keyboard focus.</li>
      </ul>
    </main>
  </body>
</html>
```

## Interop and accessibility notes

- In CSS Color Specification, grammar and computed-style algorithms are not only implementation details; your CSS must cooperate with them.
- When the specification allows several shapes, choose the simplest one that is testable and understandable in DevTools.
- For motion, color contrast, focus, and responsive behavior, include user preferences and accessibility constraints from the start.

## Next step

Continue with **CSS Fonts and Text Specifications**.
