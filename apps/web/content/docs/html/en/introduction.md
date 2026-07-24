---
title: "Introduction to HTML"
description: "What HTML is and how documents are structured."
order: 1
sources:
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: WHATWG HTML
    url: https://html.spec.whatwg.org/
---

# Introduction to HTML

HTML (HyperText Markup Language) describes the **structure** of web pages. Browsers parse HTML into a DOM tree and paint UI.

## Document skeleton

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Document</title>
  </head>
  <body>
    <h1>Hello</h1>
  </body>
</html>
```

## Core ideas

- **Elements** wrap content with opening/closing tags (`<p>…</p>`).
- **Attributes** configure elements (`href`, `src`, `alt`, `class`).
- Prefer **semantic** tags (`<main>`, `<nav>`, `<article>`) over anonymous `<div>` soup.

> Structure synthesized from MDN HTML overview and W3Schools HTML intro.
