---
title: "Parsing و Tokenization در HTML"
description: "این صفحه اینکه مرورگر markup را token می‌کند، tree می‌سازد، از خطا recover می‌کند و insertion mode می‌گیرد را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "Parsing و Tokenization در HTML — خلاصه رسمی WHATWG | MEGA JS"
seoDescription: "Parsing و Tokenization در HTML بر اساس WHATWG HTML؛ خلاصه specification-oriented برای authorها با مثال، constraintها و نکته‌های interop و security."
keywords: "HTML, Parsing و Tokenization در HTML, آموزش HTML, مرجع HTML, HTML parsing, WHATWG tokenizer, HTML parser"
order: 4
track: official
sources:
  - name: HTML Living Standard
    url: https://html.spec.whatwg.org/
---
# Parsing و Tokenization در HTML

Parsing و Tokenization در HTML خلاصه‌ای specification-oriented از HTML Living Standard است. هدف صفحه dump کامل specification نیست؛ بلکه اینکه مرورگر markup را token می‌کند، tree می‌سازد، از خطا recover می‌کند و insertion mode می‌گیرد را برای authorهایی توضیح می‌دهد که می‌خواهند markup قابل تعامل بنویسند.

## خواندن با نگاه specification

در متن رسمی، کلمه‌هایی مثل must، may، conformance، algorithm و parser معنی دقیق دارند. این خلاصه آن زبان را به تصمیم‌های عملی authoring تبدیل می‌کند، اما برای موارد edge باید خود specification را بررسی کنید.

## مفاهیم کلیدی

| اصطلاح | خلاصه author-facing |
| --- | --- |
| `tokenization` | کاراکترها را به tokenهای HTML تبدیل می‌کند |
| `tree construction` | DOM را از tokenها می‌سازد |
| `parse error` | خطای تعریف‌شده با رفتار recovery |

## مثال authoring

### مثال 1

```html
<section class="parsing-tokenization" aria-labelledby="parsing-tokenization-title">
  <h2 id="parsing-tokenization-title">Parsing and Tokenization</h2>
  <p>how browsers tokenize markup, build trees, recover from errors, and enter insertion modes.</p>
</section>
```

### مثال 2

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Parsing and Tokenization practice</title>
  </head>
  <body>
    <section class="parsing-tokenization" aria-labelledby="parsing-tokenization-title">
      <h2 id="parsing-tokenization-title">Parsing and Tokenization</h2>
      <p>how browsers tokenize markup, build trees, recover from errors, and enter insertion modes.</p>
    </section>
  </body>
</html>
```

## نکته‌های interop و security

- در Parsing و Tokenization در HTML، به الگوریتم‌های parser و form و media فقط به عنوان جزئیات پیاده‌سازی نگاه نکنید؛ خروجی authoring شما باید با آن‌ها سازگار باشد.
- وقتی specification چند حالت مجاز دارد، حالت ساده‌تر و قابل تست‌تر را برای محتوای واقعی انتخاب کنید.
- برای محتوای user-generated، embedها، formها و linkهای خارجی، policy و محدودیت امنیتی را از ابتدا در markup لحاظ کنید.

## گام بعدی

در ادامه **مدل Form و Submission** را مرور کنید.
