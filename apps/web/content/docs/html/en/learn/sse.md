---
title: "HTML Server-Sent Events"
description: "This page explains receiving one-way live updates from a server with EventSource with examples, tables, and practical HTML notes."
seoTitle: "HTML Server-Sent Events Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn HTML Server-Sent Events with HTML examples, syntax tables, common mistakes, and next steps in a W3Schools-style path for accessible pages. Practice now."
keywords: "HTML, HTML Server-Sent Events, HTML SSE, EventSource, server sent events"
order: 60
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Server-Sent Events

HTML Server-Sent Events focuses on receiving one-way live updates from a server with EventSource. This is an educational rewrite inspired by the W3Schools HTML learning path, with examples you can edit immediately in the live editor.

When you practice HTML Server-Sent Events, do not stop at the visual result. Inspect the DOM, check accessibility, name attributes deliberately, and consider the SEO effect of the markup.

## Core idea

- `EventSource`: opens a stream of server messages.
- `message event`: receives default event payloads.
- `text/event-stream`: MIME type for SSE responses.
- For this topic, matching syntax to the real meaning of the content is the main sign that your markup is doing its job.

## HTML examples

The three examples move from a focused pattern to a complete page. Change one value, text node, or attribute and compare the browser output.

### Example 1: Focused pattern

```html
<output id="news"></output>
<script>
  const events = new EventSource('/events');
  events.addEventListener('message', (event) => {
    document.querySelector('#news').value = event.data;
  });
</script>
```

### Example 2: Options in context

```html
<table>
  <caption>HTML Server-Sent Events quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>EventSource</code></td><td>opens a stream of server messages</td></tr>
    <tr><td><code>message event</code></td><td>receives default event payloads</td></tr>
    <tr><td><code>text/event-stream</code></td><td>MIME type for SSE responses</td></tr>
  </tbody>
</table>
```

### Example 3: Complete practice page

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Server-Sent Events practice</title>
  </head>
  <body>
    <output id="news"></output>
    <script>
      const events = new EventSource('/events');
      events.addEventListener('message', (event) => {
        document.querySelector('#news').value = event.data;
      });
    </script>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `EventSource` | opens a stream of server messages | In HTML Server-Sent Events, match it to the real page purpose, not just the visual result. |
| `message event` | receives default event payloads | In HTML Server-Sent Events, match it to the real page purpose, not just the visual result. |
| `text/event-stream` | MIME type for SSE responses | In HTML Server-Sent Events, match it to the real page purpose, not just the visual result. |

## Common mistakes

- Using HTML Server-Sent Events only for appearance without a clear content or accessibility role.
- Copying the example without changing ids, paths, labels, alt text, or visible copy for the real project.
- Forgetting to test `EventSource` in the browser, with the keyboard, and in DevTools after the page appears to work.

## Practice step

Create a file named `sse.html`, run the first example, then replace at least one use of `EventSource` with content from your own project. Test it with the keyboard and DevTools.

## Next step

At the end of the learn track, open the reference track and revisit the same ideas with MDN-style precision.
