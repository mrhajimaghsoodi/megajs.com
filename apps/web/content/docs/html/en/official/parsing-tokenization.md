---
title: "Parsing and Tokenization"
description: "This page explains how browsers tokenize markup, build trees, recover from errors, and enter insertion modes with examples, tables, and practical HTML notes."
seoTitle: "Parsing and Tokenization — WHATWG Official Summary | MEGA JS Docs"
seoDescription: "Parsing and Tokenization from WHATWG HTML, summarized for authors with specification-oriented examples, constraints, interop notes, and security guidance."
keywords: "HTML, Parsing and Tokenization, HTML parsing, WHATWG tokenizer, HTML parser"
order: 4
track: official
sources:
  - name: HTML Living Standard
    url: https://html.spec.whatwg.org/
---
# Parsing and Tokenization

Parsing and Tokenization is a specification-oriented summary of the HTML Living Standard. It is not a full spec dump; it explains how browsers tokenize markup, build trees, recover from errors, and enter insertion modes for authors who want interoperable markup.

## Reading with a specification mindset

In the official text, words such as must, may, conformance, algorithm, and parser carry precise meaning. This summary turns that language into practical authoring decisions, but edge cases still belong in the specification.

## Key concepts

| Term | Author-facing summary |
| --- | --- |
| `tokenization` | turns characters into HTML tokens |
| `tree construction` | builds the DOM from tokens |
| `parse error` | defined error with recovery behavior |

## Authoring examples

### Example 1

```html
<section class="parsing-tokenization" aria-labelledby="parsing-tokenization-title">
  <h2 id="parsing-tokenization-title">Parsing and Tokenization</h2>
  <p>how browsers tokenize markup, build trees, recover from errors, and enter insertion modes.</p>
</section>
```

### Example 2

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Parsing and Tokenization practice</title>
  </head>
  <body>
    <section class="parsing-tokenization" aria-labelledby="parsing-tokenization-title">
      <h2 id="parsing-tokenization-title">Parsing and Tokenization</h2>
      <p>how browsers tokenize markup, build trees, recover from errors, and enter insertion modes.</p>
    </section>
  </body>
</html>
```

## Interop and security notes

- In Parsing and Tokenization, parser, form, and media algorithms are not only implementation details; your authoring output must cooperate with them.
- When the specification allows several shapes, choose the simplest one that is testable in real content.
- For user-generated content, embeds, forms, and external links, include policy and security constraints in the markup from the start.

## Next step

Continue with **Forms and Submission Model**.
