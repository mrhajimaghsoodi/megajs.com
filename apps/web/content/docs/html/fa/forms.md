---
title: "فرم‌ها"
description: "ورودی‌ها، label و attributeهای اعتبارسنجی."
order: 3
sources:
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: WHATWG HTML
    url: https://html.spec.whatwg.org/
---

# فرم‌ها

```html
<form action="/api/subscribe" method="post">
  <label for="email">ایمیل</label>
  <input id="email" name="email" type="email" required autocomplete="email" />
  <button type="submit">عضویت</button>
</form>
```

همیشه `<label>` را به کنترل وصل کنید. قبل از ویجت سفارشی، از typeهای بومی مثل `email` و `number` استفاده کنید.
