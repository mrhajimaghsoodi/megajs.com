---
title: "ویژگی‌های input در HTML"
description: "در این درس بهبود control با required، placeholder، autocomplete، min، max و pattern را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش attributeهای input در HTML | مستندات MEGA JS"
seoDescription: "آموزش attributeهای input در HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. مناسب تمرین عملی و."
keywords: "آموزش HTML, attributeهای input در HTML, آموزش HTML input attributes, required placeholder pattern, input validation"
order: 44
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# ویژگی‌های input در HTML

ویژگی‌های input در HTML روی بهبود control با required، placeholder، autocomplete، min، max و pattern تمرکز دارد. در این درس درباره attributeهای input در HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی field قبل از submit به constraint یا hint نیاز دارد. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی attributeهای input در HTML

- این بخش به ویژگی‌های input در HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `required`, `placeholder` و `min / max / pattern` است.
- وقتی وقتی field قبل از submit به constraint یا hint نیاز دارد، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<input
  type="email"
  name="email"
  placeholder="you@example.com"
  required
  autocomplete="email">
```

### مثال 2: گزینه‌ها در context

```html
<section class="input-attributes-notes" aria-labelledby="input-attributes-title">
  <h2 id="input-attributes-title">HTML Input Attributes options</h2>
  <table>
    <caption>Key syntax for HTML input attributes</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>required</code></td>
      <td>blocks empty required fields</td>
    </tr>
    <tr>
      <td><code>placeholder</code></td>
      <td>shows a short hint, not a label replacement</td>
    </tr>
    <tr>
      <td><code>min / max / pattern</code></td>
      <td>set numeric, date, or text constraints</td>
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
    <title>HTML Input Attributes practice</title>
  </head>
  <body>
    <input
      type="email"
      name="email"
      placeholder="you@example.com"
      required
      autocomplete="email">
  </body>
</html>
```

## توضیح مثال

- مثال اول pattern اصلی attributeهای input در HTML را بدون کد layout اضافی نشان می‌دهد.
- به `required` دقت کنید: field ضروری خالی را block می‌کند.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار label، validation، name و controlهای مناسب قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `required` | field ضروری خالی را block می‌کند | هنگام تمرین attributeهای input در HTML از آن استفاده کنید. |
| `placeholder` | hint کوتاه می‌دهد اما جای label نیست | هنگام تمرین attributeهای input در HTML از آن استفاده کنید. |
| `min / max / pattern` | constraint عددی، تاریخی یا متنی می‌سازد | هنگام تمرین attributeهای input در HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای attributeهای input در HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- فرم را فقط با keyboard هم امتحان کنید؛ label، focus order و پیام‌های validation باید واضح باشند.

## اشتباه‌های رایج

- استفاده از attributeهای input در HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `required` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `input-attributes.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `required` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **ویژگی‌های form برای input در HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
