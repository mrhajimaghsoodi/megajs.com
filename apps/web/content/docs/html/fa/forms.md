---
title: "فرم‌های HTML"
description: "در این درس جمع‌آوری ورودی کاربر با label، control، validation و submit button را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش فرم در HTML | مستندات MEGA JS"
seoDescription: "آموزش فرم در HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. مناسب تمرین عملی و یادگیری مطمئن."
keywords: "آموزش HTML, فرم در HTML, آموزش HTML forms, form label input, accessible forms"
order: 40
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# فرم‌های HTML

فرم‌های HTML روی جمع‌آوری ورودی کاربر با label، control، validation و submit button تمرکز دارد. در این درس درباره فرم در HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی صفحه باید اطلاعات کاربر را ارسال یا پردازش کند. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی فرم در HTML

- این بخش به فرم‌های HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `<form>`, `<label for>` و `<button type="submit">` است.
- وقتی وقتی صفحه باید اطلاعات کاربر را ارسال یا پردازش کند، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: الگوی اصلی

```html
<form action="/subscribe" method="post">
  <label for="email">Email</label>
  <input id="email" name="email" type="email" required>
  <button type="submit">Subscribe</button>
</form>
```

### مثال 2: گزینه‌ها در context

```html
<form action="/contact" method="post">
  <fieldset>
    <legend>Contact details</legend>
    <label for="name">Name</label>
    <input id="name" name="name" autocomplete="name" required>
    <label for="message">Message</label>
    <textarea id="message" name="message" rows="4"></textarea>
  </fieldset>
  <button type="submit">Send message</button>
</form>
```

### مثال 3: صفحه تمرینی کامل

```html
<form action="/search" method="get" role="search">
  <label for="q">Search docs</label>
  <input id="q" name="q" type="search" placeholder="HTML tables">
  <button type="submit">Search</button>
</form>
```

## توضیح مثال

- مثال اول pattern اصلی فرم در HTML را بدون کد layout اضافی نشان می‌دهد.
- به `<form>` دقت کنید: controlهای مرتبط را برای submit می‌پوشاند.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار label، validation، name و controlهای مناسب قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `<form>` | controlهای مرتبط را برای submit می‌پوشاند | هنگام تمرین فرم در HTML از آن استفاده کنید. |
| `<label for>` | متن را به input وصل می‌کند | هنگام تمرین فرم در HTML از آن استفاده کنید. |
| `<button type="submit">` | فرم را به شکل هدفمند submit می‌کند | هنگام تمرین فرم در HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای فرم در HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- فرم را فقط با keyboard هم امتحان کنید؛ label، focus order و پیام‌های validation باید واضح باشند.

## اشتباه‌های رایج

- استفاده از فرم در HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `<form>` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `forms.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `<form>` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **ویژگی‌های form در HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
