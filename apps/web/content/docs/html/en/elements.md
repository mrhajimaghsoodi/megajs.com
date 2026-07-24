---
title: "Elements & tags"
description: "Headings, text, lists, links, and nesting rules."
order: 2
sources:
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: WHATWG HTML
    url: https://html.spec.whatwg.org/
---

# Elements & tags

## Text content

| Tag | Role |
| --- | --- |
| `h1`–`h6` | Headings (one primary `h1` per page is a strong default) |
| `p` | Paragraph |
| `a` | Hyperlink (`href`) |
| `ul` / `ol` / `li` | Lists |
| `strong` / `em` | Importance / stress emphasis |

## Nesting

Elements must nest correctly — close inner tags before outer ones.

```html
<article>
  <h2>Title</h2>
  <p>Read the <a href="/docs/css">CSS</a> guide next.</p>
</article>
```
