---
title: "Forms"
description: "Inputs, labels, validation attributes."
order: 3
sources:
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: WHATWG HTML
    url: https://html.spec.whatwg.org/
---

# Forms

```html
<form action="/api/subscribe" method="post">
  <label for="email">Email</label>
  <input id="email" name="email" type="email" required autocomplete="email" />
  <button type="submit">Subscribe</button>
</form>
```

Always associate `<label>` with controls. Use native types (`email`, `url`, `number`) before custom widgets.
