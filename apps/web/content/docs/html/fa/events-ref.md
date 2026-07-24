---
title: "مرجع eventهای HTML"
description: "درس مرجع eventهای HTML برای یادگیری وصل کردن eventهای کاربر و مرورگر به handlerهای JavaScript."
seoTitle: "مرجع eventهای در HTML — آموزش قدم‌به‌قدم | مستندات MEGA JS"
seoDescription: "آموزش HTML مرجع eventهای به سبک قدم‌به‌قدم W3Schools؛ با syntax، مثال کاربردی، best practice و گام بعدی برای ساخت صفحه‌های واقعی. با تمرین کوتاه و نتیجه روشن."
keywords: "آموزش HTML, مرجع eventهای, HTML, W3Schools, طراحی وب"
order: 65
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# مرجع eventهای HTML

در این درس وصل کردن eventهای کاربر و مرورگر به handlerهای JavaScript را یاد می‌گیرید. ترتیب درس‌ها از ساختار آموزش HTML در W3Schools الهام گرفته شده، اما متن و مثال‌ها برای مستندات MEGA JS بازنویسی شده‌اند تا یادگیری مرحله‌به‌مرحله و کاربردی بماند.

## چیستی و چرایی

مرجع eventهای HTML مهم است چون HTML قرارداد اصلی میان محتوا، مرورگر، موتورهای جست‌وجو، ابزارهای کمکی، CSS و JavaScript است. وقتی markup دقیق باشد، style ساده‌تر می‌شود، scriptها target پایدار دارند و صفحه در دستگاه‌های مختلف قابل اعتمادتر کار می‌کند.

در تمرین، اول نقش element یا attribute را بفهمید و بعد به ظاهر فکر کنید. ظاهر با CSS تغییر می‌کند، اما معنای درست HTML پایه تجربه کاربری، SEO و accessibility است.

## Syntax

```html
<button type="button" onclick="alert('Saved')">Save</button>
<input oninput="console.log(this.value)" aria-label="Live search">
<form onsubmit="return confirm('Submit?')"></form>
```

کد را از بیرون به داخل بخوانید: ابتدا container، سپس attributeها، و بعد متن یا elementهای تو در تو. این عادت debug کردن سندهای بزرگ‌تر را بسیار ساده‌تر می‌کند.

## جدول سریع

| مورد | کاربرد | نشانه در مثال |
| --- | --- | --- |
| مفهوم اصلی | نقش این درس در ساختار HTML | مرجع eventهای |
| syntax | شکل نوشتن element، attribute یا API مرتبط | به opening tag و مقدار attribute دقت کنید |
| رفتار مرورگر | آنچه browser به صورت پیش‌فرض انجام می‌دهد | با DevTools بررسی کنید |
| کیفیت | ارتباط با accessibility، SEO یا maintainability | نام‌گذاری و متن جایگزین را جدی بگیرید |

## نکته‌ها و Best Practice

- قبل از استفاده از `div` یا JavaScript، ببینید element معنایی مناسب وجود دارد یا نه.
- هنگام یادگیری مثال را کوچک نگه دارید، سپس همان ایده را داخل یک سند کامل HTML امتحان کنید.
- attributeهایی مثل `name`، `alt`، `title`، `href` و `id` باید هدف روشن و قابل فهم داشته باشند.
- صفحه را در DevTools بررسی کنید و برای بخش‌های تعاملی، navigation با keyboard را هم تست کنید.

## اشتباه‌های رایج

- نگاه کردن به مرجع eventهای فقط به عنوان موضوع ظاهری، نه بخشی از معنای سند.
- حذف contextهای لازم مثل label، title، fallback text یا character encoding.
- کپی کردن markup بدون تغییر نام‌ها، pathها و متن‌ها بر اساس صفحه واقعی.

## گام بعدی

گام بعدی: به مرجع‌ها برگردید و یک صفحه واقعی را با HTML معنایی و دسترس‌پذیر بازنویسی کنید.
