---
title: "ویژگی‌های form برای input در HTML"
description: "در این درس target یا override کردن رفتار form از خود control را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش attributeهای form برای input در HTML | مستندات MEGA JS"
seoDescription: "آموزش attributeهای form برای input در HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس."
keywords: "آموزش HTML, attributeهای form برای input در HTML, آموزش HTML input form attributes, formaction formmethod, form attribute input"
order: 45
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# ویژگی‌های form برای input در HTML

ویژگی‌های form برای input در HTML روی target یا override کردن رفتار form از خود control تمرکز دارد. در این درس درباره attributeهای form برای input در HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی یک button یا field باید متفاوت از form والد submit شود. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی attributeهای form برای input در HTML

- این بخش به ویژگی‌های form برای input در HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `form`, `formaction` و `formmethod` است.
- وقتی وقتی یک button یا field باید متفاوت از form والد submit شود، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<form id="profile-form" action="/profile" method="post"></form>
<input form="profile-form" name="displayName">
<button form="profile-form" formaction="/profile/preview">Preview</button>
```

### مثال 2: گزینه‌ها در context

```html
<section class="input-form-attributes-notes" aria-labelledby="input-form-attributes-title">
  <h2 id="input-form-attributes-title">HTML Input Form Attributes options</h2>
  <table>
    <caption>Key syntax for HTML input form attributes</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>form</code></td>
      <td>associates a control with a form by id</td>
    </tr>
    <tr>
      <td><code>formaction</code></td>
      <td>overrides the form action for one submit button</td>
    </tr>
    <tr>
      <td><code>formmethod</code></td>
      <td>overrides GET or POST for one submit button</td>
    </tr>
    </tbody>
  </table>
</section>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Input Form Attributes practice</title>
  </head>
  <body>
    <form id="profile-form" action="/profile" method="post"></form>
    <input form="profile-form" name="displayName">
    <button form="profile-form" formaction="/profile/preview">Preview</button>
  </body>
</html>
```

## توضیح مثال

- مثال اول pattern اصلی attributeهای form برای input در HTML را بدون کد layout اضافی نشان می‌دهد.
- به `form` دقت کنید: control را با id به form وصل می‌کند.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار label، validation، name و controlهای مناسب قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `form` | control را با id به form وصل می‌کند | هنگام تمرین attributeهای form برای input در HTML از آن استفاده کنید. |
| `formaction` | action فرم را برای یک submit button override می‌کند | هنگام تمرین attributeهای form برای input در HTML از آن استفاده کنید. |
| `formmethod` | GET یا POST را برای یک submit button override می‌کند | هنگام تمرین attributeهای form برای input در HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای attributeهای form برای input در HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- فرم را فقط با keyboard هم امتحان کنید؛ label، focus order و پیام‌های validation باید واضح باشند.

## اشتباه‌های رایج

- استفاده از attributeهای form برای input در HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `form` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `input-form-attributes.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `form` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **گرافیک در HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
