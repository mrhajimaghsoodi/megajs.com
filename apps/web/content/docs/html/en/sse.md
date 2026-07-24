---
title: "HTML Server-Sent Events"
description: "Learn how EventSource receives one-way live updates from a server with real HTML examples and practical checks."
seoTitle: "HTML Server-Sent Events Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML Server-Sent Events with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages."
keywords: "HTML tutorial, HTML Server-Sent Events, EventSource SSE, live updates HTML"
order: 60
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Server-Sent Events

In HTML Server-Sent Events, you learn how EventSource receives one-way live updates from a server. The focus is HTML Server-Sent Events, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when news, scores, build logs, or notifications stream from server to page. Read each example slowly, then change one value at a time to see what the browser does.

## What is HTML Server-Sent Events?

- It gives HTML Server-Sent Events a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `EventSource`, `message event` and `text/event-stream`.
- It improves real pages when news, scores, build logs, or notifications stream from server to page, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<output id="news"></output>
<script>
  const events = new EventSource('/events');
  const news = document.querySelector('#news');
  events.addEventListener('message', (event) => {
    news.value = event.data;
  });
</script>
```

### Example 2: Options in context

```html
<section class="sse-notes" aria-labelledby="sse-title">
  <h2 id="sse-title">HTML Server-Sent Events options</h2>
  <table>
    <caption>Key syntax for HTML Server-Sent Events</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>EventSource</code></td>
      <td>opens a persistent event stream</td>
    </tr>
    <tr>
      <td><code>message event</code></td>
      <td>receives default server messages</td>
    </tr>
    <tr>
      <td><code>text/event-stream</code></td>
      <td>server response format for SSE</td>
    </tr>
    </tbody>
  </table>
</section>
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
      const news = document.querySelector('#news');
      events.addEventListener('message', (event) => {
        news.value = event.data;
      });
    </script>
  </body>
</html>
```

## Example explained

- The first example shows the core pattern for HTML Server-Sent Events without unrelated layout code.
- Pay attention to `EventSource`: opens a persistent event stream.
- The second and third examples show how the same idea fits into a larger page with event handlers, permissions, state, and error handling.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `EventSource` | opens a persistent event stream | Use it while practicing HTML Server-Sent Events. |
| `message event` | receives default server messages | Use it while practicing HTML Server-Sent Events. |
| `text/event-stream` | server response format for SSE | Use it while practicing HTML Server-Sent Events. |

## Browser, accessibility, and SEO notes

- Test HTML Server-Sent Events in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- Many Web APIs depend on HTTPS, permissions, or browser support, so always handle errors.

## Common mistakes

- Using HTML Server-Sent Events only for appearance instead of matching the content role.
- Forgetting `EventSource` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `sse.html`, copy the first example, then add one extra line that uses `EventSource` correctly in your own content.

## Next step

Next step: continue with **HTML References** so the next concept builds on this one.
