---
title: "عناصر و تگ‌ها"
description: "عنوان‌ها، متن، لیست، لینک و قوانین تو در تو بودن."
order: 2
sources:
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: WHATWG HTML
    url: https://html.spec.whatwg.org/
---

# عناصر و تگ‌ها

## محتوای متنی

| تگ | نقش |
| --- | --- |
| `h1` تا `h6` | عنوان‌ها (معمولاً یک `h1` اصلی در هر صفحه) |
| `p` | پاراگراف |
| `a` | لینک (`href`) |
| `ul` / `ol` / `li` | فهرست |
| `strong` / `em` | اهمیت / تأکید |

## Nesting

عناصر باید درست تو در تو شوند — اول تگ داخلی بسته شود.

```html
<article>
  <h2>عنوان</h2>
  <p>بعد سراغ راهنمای <a href="/fa/docs/css">CSS</a> بروید.</p>
</article>
```
