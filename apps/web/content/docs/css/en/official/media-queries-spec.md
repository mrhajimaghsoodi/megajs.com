---
title: "Media Queries Specification"
description: "This page explains the official syntax and evaluation model for media types, features, ranges, user preferences, and responsive CSS with examples, tables, and practical CSS notes."
seoTitle: "Media Queries Specification — W3C Official Summary | MEGA JS Docs"
seoDescription: "Media Queries Specification (media queries spec): W3C CSS official summary for authors with examples, interop notes, computed style, and stable producti."
keywords: "CSS, Media Queries Specification, Media Queries spec, W3C media queries, responsive specs"
order: 9
track: official
sources:
  - name: W3C CSS
    url: https://www.w3.org/Style/CSS/
  - name: CSS Snapshot 2024
    url: https://www.w3.org/TR/css-2024/
---
# Media Queries Specification

Media Queries Specification is a specification-oriented summary of W3C CSS. It is not a full spec dump; it explains the official syntax and evaluation model for media types, features, ranges, user preferences, and responsive CSS for authors who want interoperable and durable styles.

## Reading with a specification mindset

In CSS specifications, terms such as must, should, computed value, used value, grammar, and conformance carry precise meaning. This summary turns that language into practical authoring decisions, but edge cases still belong in the W3C text.

## Key concepts

| Term | Author-facing summary |
| --- | --- |
| `@media` | groups rules under a media condition |
| `media feature` | queryable aspect of device or user preference |
| `range context` | compact comparison syntax for media features |

## Authoring examples

### Example 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Media Queries Specification practice</title>
    <style>
      .cards {
        display: grid;
        gap: 1rem;
      }
      @media (min-width: 48rem) {
        .cards {
          grid-template-columns: repeat(3, 1fr);
        }
      }
    </style>
  </head>
  <body>
    <div class="cards">
      <article>Small first</article>
      <article>Then wider</article>
      <article>Inspect responsive mode</article>
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
    <title>Media Queries Specification practice</title>
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
      <h1>Media Queries Specification checklist</h1>
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

- In Media Queries Specification, grammar and computed-style algorithms are not only implementation details; your CSS must cooperate with them.
- When the specification allows several shapes, choose the simplest one that is testable and understandable in DevTools.
- For motion, color contrast, focus, and responsive behavior, include user preferences and accessibility constraints from the start.

## Next step

Finish this track by returning to the reference track and testing one real layout.
