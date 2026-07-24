---
title: "Forms and Submission Model"
description: "This page explains form ownership, control names, validation, successful controls, and encoding algorithms with examples, tables, and practical HTML notes."
seoTitle: "Forms and Submission Model — WHATWG Official Summary | MEGA JS Docs"
seoDescription: "Forms and Submission Model from WHATWG HTML, summarized for authors with specification-oriented examples, constraints, interop notes, and security guidance."
keywords: "HTML, Forms and Submission Model, WHATWG forms, HTML form submission, successful controls"
order: 5
track: official
sources:
  - name: HTML Living Standard
    url: https://html.spec.whatwg.org/
---
# Forms and Submission Model

Forms and Submission Model is a specification-oriented summary of the HTML Living Standard. It is not a full spec dump; it explains form ownership, control names, validation, successful controls, and encoding algorithms for authors who want interoperable markup.

## Reading with a specification mindset

In the official text, words such as must, may, conformance, algorithm, and parser carry precise meaning. This summary turns that language into practical authoring decisions, but edge cases still belong in the specification.

## Key concepts

| Term | Author-facing summary |
| --- | --- |
| `form owner` | form associated with a control |
| `successful controls` | controls included in submission |
| `encoding type` | format used for submitted data |

## Authoring examples

### Example 1

```html
<form action="/subscribe" method="post">
  <label for="forms-submission-email">Email</label>
  <input id="forms-submission-email" name="email" type="email" required autocomplete="email">
  <button type="submit">Subscribe</button>
</form>
```

### Example 2

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forms and Submission Model practice</title>
  </head>
  <body>
    <form action="/subscribe" method="post">
      <label for="forms-submission-email">Email</label>
      <input id="forms-submission-email" name="email" type="email" required autocomplete="email">
      <button type="submit">Subscribe</button>
    </form>
  </body>
</html>
```

## Interop and security notes

- In Forms and Submission Model, parser, form, and media algorithms are not only implementation details; your authoring output must cooperate with them.
- When the specification allows several shapes, choose the simplest one that is testable in real content.
- For user-generated content, embeds, forms, and external links, include policy and security constraints in the markup from the start.

## Next step

Continue with **Embedding and Media**.
