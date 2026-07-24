---
title: "JavaScript در HTML"
description: "در این درس وصل کردن رفتار DOM به markup با script tag را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش JavaScript در HTML | مستندات MEGA JS"
seoDescription: "آموزش JavaScript در HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. با تمرین کوتاه و نتیجه روشن."
keywords: "آموزش HTML, JavaScript در HTML, آموزش HTML JavaScript, script tag defer, DOM events"
order: 25
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# JavaScript در HTML

JavaScript در HTML روی وصل کردن رفتار DOM به markup با script tag تمرکز دارد. در این درس درباره JavaScript در HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی صفحه بعد از load شدن HTML به interaction نیاز دارد. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی JavaScript در HTML

- این بخش به JavaScript در HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `<script>`, `defer` و `DOM selector` است.
- وقتی وقتی صفحه بعد از load شدن HTML به interaction نیاز دارد، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<button id="theme-toggle" type="button">Toggle theme</button>
<script>
  document.querySelector('#theme-toggle').addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
  });
</script>
```

### مثال 2: گزینه‌ها در context

```html
<section class="javascript-notes" aria-labelledby="javascript-title">
  <h2 id="javascript-title">HTML JavaScript options</h2>
  <table>
    <caption>Key syntax for JavaScript in HTML</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>&lt;script&gt;</code></td>
      <td>runs or loads JavaScript</td>
    </tr>
    <tr>
      <td><code>defer</code></td>
      <td>loads scripts without blocking parsing</td>
    </tr>
    <tr>
      <td><code>DOM selector</code></td>
      <td>finds elements by id, class, or tag</td>
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
    <title>HTML JavaScript practice</title>
  </head>
  <body>
    <button id="theme-toggle" type="button">Toggle theme</button>
    <script>
      document.querySelector('#theme-toggle').addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
      });
    </script>
  </body>
</html>
```

## توضیح مثال

- مثال اول pattern اصلی JavaScript در HTML را بدون کد layout اضافی نشان می‌دهد.
- به `<script>` دقت کنید: JavaScript را اجرا یا load می‌کند.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار متن معنادار، attributeهای پایدار و ساختار قابل فهم قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `<script>` | JavaScript را اجرا یا load می‌کند | هنگام تمرین JavaScript در HTML از آن استفاده کنید. |
| `defer` | script را بدون blocking parsing load می‌کند | هنگام تمرین JavaScript در HTML از آن استفاده کنید. |
| `DOM selector` | element را با id، class یا tag پیدا می‌کند | هنگام تمرین JavaScript در HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای JavaScript در HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- برای SEO، heading، link text، title و ساختار معنایی را طوری بنویسید که بدون CSS هم قابل فهم باشد.

## اشتباه‌های رایج

- استفاده از JavaScript در HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `<script>` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `javascript.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `<script>` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **مسیر فایل‌ها در HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
