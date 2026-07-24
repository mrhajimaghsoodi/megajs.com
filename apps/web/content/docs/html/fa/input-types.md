---
title: "نوع‌های input در HTML"
description: "در این درس تغییر رفتار با انتخاب text، email، number، date، checkbox، radio، file و submit را با مثال‌های واقعی HTML تمرین می‌کنید."
seoTitle: "آموزش type های input در HTML | مستندات MEGA JS"
seoDescription: "آموزش type های input در HTML با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس. برای شروع مطمئن و کاربردی."
keywords: "آموزش HTML, type های input در HTML, آموزش HTML input types, input type email number date, form controls"
order: 43
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# نوع‌های input در HTML

نوع‌های input در HTML روی تغییر رفتار با انتخاب text، email، number، date، checkbox، radio، file و submit تمرکز دارد. در این درس درباره type های input در HTML با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.

این موضوع زمانی مهم می‌شود که وقتی مرورگر باید keyboard، validation و UI مناسب نشان دهد. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.

## چیستی type های input در HTML

- این بخش به نوع‌های input در HTML نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.
- syntaxهای مهم این درس شامل `type="email"`, `type="number"` و `type="checkbox"` است.
- وقتی وقتی مرورگر باید keyboard، validation و UI مناسب نشان دهد، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.
- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.

## Syntax و مثال‌ها

ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.

### مثال 1: inputهای رایج

```html
<input type="text" name="fullName">
<input type="email" name="email">
<input type="number" name="quantity" min="1" max="10">
<input type="date" name="startDate">
```

### مثال 2: فرم checkout

```html
<form action="/checkout" method="post">
  <label for="email">Email</label>
  <input id="email" name="email" type="email" autocomplete="email" required>
  <label for="quantity">Quantity</label>
  <input id="quantity" name="quantity" type="number" min="1" max="10" value="1">
  <button type="submit">Continue</button>
</form>
```

### مثال 3: checkbox، radio و file

```html
<fieldset>
  <legend>Preferences</legend>
  <label><input type="checkbox" name="newsletter" checked> Email newsletter</label>
  <label><input type="radio" name="plan" value="basic"> Basic</label>
  <label><input type="radio" name="plan" value="pro"> Pro</label>
  <label>Avatar <input type="file" name="avatar" accept="image/*"></label>
</fieldset>
```

## توضیح مثال

- مثال اول pattern اصلی type های input در HTML را بدون کد layout اضافی نشان می‌دهد.
- به `type="email"` دقت کنید: مقدار شبیه email را اعتبارسنجی و keyboard email نشان می‌دهد.
- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار label، validation، name و controlهای مناسب قرار می‌گیرد.
- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.

## مثال‌های بیشتر و جدول گزینه‌ها

| Syntax یا گزینه | کاربرد | زمان استفاده |
| --- | --- | --- |
| `type="email"` | مقدار شبیه email را اعتبارسنجی و keyboard email نشان می‌دهد | هنگام تمرین type های input در HTML از آن استفاده کنید. |
| `type="number"` | کنترل عددی و min/max می‌دهد | هنگام تمرین type های input در HTML از آن استفاده کنید. |
| `type="checkbox"` | انتخاب مستقل بله/خیر را می‌گیرد | هنگام تمرین type های input در HTML از آن استفاده کنید. |

## نکته‌های مرورگر، accessibility و SEO

- پشتیبانی مرورگر برای type های input در HTML را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.
- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.
- فرم را فقط با keyboard هم امتحان کنید؛ label، focus order و پیام‌های validation باید واضح باشند.

## اشتباه‌های رایج

- استفاده از type های input در HTML فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.
- فراموش کردن `type="email"` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.
- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.
- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.

## نکته تمرینی

یک فایل به نام `input-types.html` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که `type="email"` را درست در محتوای خودتان به کار ببرد.

## گام بعدی

گام بعدی: درس **ویژگی‌های input در HTML** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.
