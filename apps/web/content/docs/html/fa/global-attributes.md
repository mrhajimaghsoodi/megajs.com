---
title: "attributeهای سراسری HTML"
description: "در این درس کاربرد تقریباً همه‌جایی id، class، style، title، hidden، lang و data-* را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش attributeهای سراسری HTML | مستندات MEGA JS"
seoDescription: "آموزش attributeهای سراسری HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. مناسب تمرین عملی و."
keywords: "آموزش HTML, attributeهای سراسری HTML, آموزش HTML global attributes, data attribute, id class title hidden"
order: 64
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# attributeهای سراسری HTML

attributeهای سراسری HTML روی کاربرد تقریباً همه‌جایی id، class، style، title، hidden، lang و data-* تمرکز دارد. در این درس درباره attributeهای سراسری HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی روی هر element به hook مشترک، hint زبان یا data سفارشی نیاز دارید. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی attributeهای سراسری HTML

- این بخش به attributeهای سراسری HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `id / class`, `lang / dir` و `data-*` است.
- وقتی وقتی روی هر element به hook مشترک، hint زبان یا data سفارشی نیاز دارید، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<section id="profile" class="card" hidden>
  <h2 title="Visible profile name">Profile</h2>
  <p data-user-id="42">Custom data belongs in data-* attributes.</p>
</section>
```

### مثال 2: گزینه‌ها در context

```html
<section class="global-attributes-notes" aria-labelledby="global-attributes-title">
  <h2 id="global-attributes-title">HTML Global Attributes options</h2>
  <table>
    <caption>Key syntax for HTML global attributes</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>id / class</code></td>
      <td>provide unique and reusable hooks</td>
    </tr>
    <tr>
      <td><code>lang / dir</code></td>
      <td>declare language and text direction</td>
    </tr>
    <tr>
      <td><code>data-*</code></td>
      <td>stores custom data for scripts</td>
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
    <title>HTML Global Attributes practice</title>
  </head>
  <body>
    <section id="profile" class="card" hidden>
      <h2 title="Visible profile name">Profile</h2>
      <p data-user-id="42">Custom data belongs in data-* attributes.</p>
    </section>
  </body>
</html>
```

## توضیح مثال

- مثال اول pattern اصلی attributeهای سراسری HTML را بدون کد layout اضافی نشان می‌دهد.
- به `id / class` دقت کنید: hook یکتا و قابل استفاده مجدد می‌دهند.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار syntax دقیق، کاربرد و محدودیت‌های هر مورد قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `id / class` | hook یکتا و قابل استفاده مجدد می‌دهند | هنگام تمرین attributeهای سراسری HTML از آن استفاده کنید. |
| `lang / dir` | زبان و جهت متن را اعلام می‌کنند | هنگام تمرین attributeهای سراسری HTML از آن استفاده کنید. |
| `data-*` | data سفارشی برای script نگه می‌دارد | هنگام تمرین attributeهای سراسری HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای attributeهای سراسری HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- برای SEO، heading، link text، title و ساختار معنایی را طوری بنویسید که بدون CSS هم قابل فهم باشد.

## اشتباه‌های رایج

- استفاده از attributeهای سراسری HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `id / class` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `global-attributes.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `id / class` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **مرجع eventهای HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
