---
title: "ویژگی‌های form در HTML"
description: "در این درس کنترل رفتار submit با action، method، autocomplete و target را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش attributeهای form در HTML | مستندات MEGA JS"
seoDescription: "آموزش attributeهای form در HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. مناسب تمرین عملی و."
keywords: "آموزش HTML, attributeهای form در HTML, آموزش HTML form attributes, form action method, autocomplete form"
order: 41
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# ویژگی‌های form در HTML

ویژگی‌های form در HTML روی کنترل رفتار submit با action، method، autocomplete و target تمرکز دارد. در این درس درباره attributeهای form در HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی همان fieldها باید با روش درست به endpoint درست ارسال شوند. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی attributeهای form در HTML

- این بخش به ویژگی‌های form در HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `action`, `method` و `autocomplete` است.
- وقتی وقتی همان fieldها باید با روش درست به endpoint درست ارسال شوند، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<form action="/signup" method="post" autocomplete="on" target="_self">
  <label for="name">Name</label>
  <input id="name" name="name" required>
  <button type="submit">Create account</button>
</form>
```

### مثال 2: گزینه‌ها در context

```html
<section class="form-attributes-notes" aria-labelledby="form-attributes-title">
  <h2 id="form-attributes-title">HTML Form Attributes options</h2>
  <table>
    <caption>Key syntax for HTML form attributes</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>action</code></td>
      <td>sets where form data goes</td>
    </tr>
    <tr>
      <td><code>method</code></td>
      <td>chooses GET or POST submission</td>
    </tr>
    <tr>
      <td><code>autocomplete</code></td>
      <td>allows useful browser autofill</td>
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
    <title>HTML Form Attributes practice</title>
  </head>
  <body>
    <form action="/signup" method="post" autocomplete="on" target="_self">
      <label for="name">Name</label>
      <input id="name" name="name" required>
      <button type="submit">Create account</button>
    </form>
  </body>
</html>
```

## توضیح مثال

- مثال اول pattern اصلی attributeهای form در HTML را بدون کد layout اضافی نشان می‌دهد.
- به `action` دقت کنید: مشخص می‌کند داده فرم کجا می‌رود.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار label، validation، name و controlهای مناسب قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `action` | مشخص می‌کند داده فرم کجا می‌رود | هنگام تمرین attributeهای form در HTML از آن استفاده کنید. |
| `method` | ارسال GET یا POST را انتخاب می‌کند | هنگام تمرین attributeهای form در HTML از آن استفاده کنید. |
| `autocomplete` | autofill مفید مرورگر را فعال می‌کند | هنگام تمرین attributeهای form در HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای attributeهای form در HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- فرم را فقط با keyboard هم امتحان کنید؛ label، focus order و پیام‌های validation باید واضح باشند.

## اشتباه‌های رایج

- استفاده از attributeهای form در HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `action` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `form-attributes.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `action` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **عنصرهای فرم در HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
