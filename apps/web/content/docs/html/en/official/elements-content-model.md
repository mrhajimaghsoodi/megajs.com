---
title: "Elements and Content Model"
description: "This page explains element definitions, categories, permitted content, transparent models, and authoring constraints with examples, tables, and practical HTML notes."
seoTitle: "Elements and Content Model — WHATWG Official Summary | MEGA JS Docs"
seoDescription: "Elements and Content Model from WHATWG HTML, summarized for authors with specification-oriented examples, constraints, interop notes, and security guidance."
keywords: "HTML, Elements and Content Model, HTML content model, WHATWG elements, permitted content"
order: 3
track: official
sources:
  - name: HTML Living Standard
    url: https://html.spec.whatwg.org/
---
# Elements and Content Model

Elements and Content Model is a specification-oriented summary of the HTML Living Standard. It is not a full spec dump; it explains element definitions, categories, permitted content, transparent models, and authoring constraints for authors who want interoperable markup.

## Reading with a specification mindset

In the official text, words such as must, may, conformance, algorithm, and parser carry precise meaning. This summary turns that language into practical authoring decisions, but edge cases still belong in the specification.

## Key concepts

| Term | Author-facing summary |
| --- | --- |
| `content model` | describes what children are allowed |
| `transparent` | inherits allowed content from context |
| `palpable content` | content that is perceivable or meaningful |

## Authoring examples

### Example 1

```html
<section class="elements-content-model" aria-labelledby="elements-content-model-title">
  <h2 id="elements-content-model-title">Elements and Content Model</h2>
  <p>element definitions, categories, permitted content, transparent models, and authoring constraints.</p>
</section>
```

### Example 2

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Elements and Content Model practice</title>
  </head>
  <body>
    <section class="elements-content-model" aria-labelledby="elements-content-model-title">
      <h2 id="elements-content-model-title">Elements and Content Model</h2>
      <p>element definitions, categories, permitted content, transparent models, and authoring constraints.</p>
    </section>
  </body>
</html>
```

## Interop and security notes

- In Elements and Content Model, parser, form, and media algorithms are not only implementation details; your authoring output must cooperate with them.
- When the specification allows several shapes, choose the simplest one that is testable in real content.
- For user-generated content, embeds, forms, and external links, include policy and security constraints in the markup from the start.

## Next step

Continue with **Parsing and Tokenization**.
