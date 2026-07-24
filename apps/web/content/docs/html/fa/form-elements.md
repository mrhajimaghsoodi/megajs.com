---
title: "عنصرهای فرم در HTML"
description: "در این درس همکاری label، input، select، textarea، button و fieldset را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش elementهای فرم در HTML | مستندات MEGA JS"
seoDescription: "آموزش elementهای فرم در HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. برای شروع مطمئن و کاربردی."
keywords: "آموزش HTML, elementهای فرم در HTML, آموزش HTML form elements, input select textarea, fieldset legend"
order: 42
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# عنصرهای فرم در HTML

عنصرهای فرم در HTML روی همکاری label، input، select، textarea، button و fieldset تمرکز دارد. در این درس درباره elementهای فرم در HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی فرم به controlهای مناسب هر سؤال نیاز دارد. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی elementهای فرم در HTML

- این بخش به عنصرهای فرم در HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `<input>`, `<select>` و `<fieldset> / <legend>` است.
- وقتی وقتی فرم به controlهای مناسب هر سؤال نیاز دارد، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<fieldset>
  <legend>Contact preference</legend>
  <label><input type="radio" name="contact" value="email"> Email</label>
  <label><input type="radio" name="contact" value="phone"> Phone</label>
</fieldset>
<textarea name="message" rows="4"></textarea>
```

### مثال 2: گزینه‌ها در context

```html
<section class="form-elements-notes" aria-labelledby="form-elements-title">
  <h2 id="form-elements-title">HTML Form Elements options</h2>
  <table>
    <caption>Key syntax for HTML form elements</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>&lt;input&gt;</code></td>
      <td>handles many single-value controls</td>
    </tr>
    <tr>
      <td><code>&lt;select&gt;</code></td>
      <td>offers a controlled list of choices</td>
    </tr>
    <tr>
      <td><code>&lt;fieldset&gt; / &lt;legend&gt;</code></td>
      <td>groups related controls accessibly</td>
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
    <title>HTML Form Elements practice</title>
  </head>
  <body>
    <fieldset>
      <legend>Contact preference</legend>
      <label><input type="radio" name="contact" value="email"> Email</label>
      <label><input type="radio" name="contact" value="phone"> Phone</label>
    </fieldset>
    <textarea name="message" rows="4"></textarea>
  </body>
</html>
```

## توضیح مثال

- مثال اول pattern اصلی elementهای فرم در HTML را بدون کد layout اضافی نشان می‌دهد.
- به `<input>` دقت کنید: بسیاری از controlهای تک‌مقداری را می‌سازد.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار label، validation، name و controlهای مناسب قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `<input>` | بسیاری از controlهای تک‌مقداری را می‌سازد | هنگام تمرین elementهای فرم در HTML از آن استفاده کنید. |
| `<select>` | لیست کنترل‌شده‌ای از گزینه‌ها می‌دهد | هنگام تمرین elementهای فرم در HTML از آن استفاده کنید. |
| `<fieldset> / <legend>` | controlهای مرتبط را accessible گروه می‌کند | هنگام تمرین elementهای فرم در HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای elementهای فرم در HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- فرم را فقط با keyboard هم امتحان کنید؛ label، focus order و پیام‌های validation باید واضح باشند.

## اشتباه‌های رایج

- استفاده از elementهای فرم در HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `<input>` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `form-elements.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `<input>` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **نوع‌های input در HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
