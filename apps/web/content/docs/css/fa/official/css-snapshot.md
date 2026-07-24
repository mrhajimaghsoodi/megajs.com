---
title: "CSS Snapshot 2024"
description: "این صفحه فهرست moduleهای پایدار CSS Snapshot، levelهای feature، انتظارهای interop و راهنمای author را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "CSS Snapshot 2024 — خلاصه رسمی W3C | MEGA JS"
seoDescription: "CSS Snapshot 2024 (css snapshot): خلاصه رسمی W3C CSS برای authorها با مثال، interop، computed style و راهنمای پیاده‌سازی پایدار در وب واقعی همراه تمرین کاربردی."
keywords: "CSS, CSS Snapshot 2024, آموزش CSS, مرجع CSS, CSS Snapshot 2024, W3C CSS snapshot, CSS baseline"
order: 2
track: official
sources:
  - name: W3C CSS
    url: https://www.w3.org/Style/CSS/
  - name: CSS Snapshot 2024
    url: https://www.w3.org/TR/css-2024/
---
# CSS Snapshot 2024

CSS Snapshot 2024 خلاصه‌ای specification-oriented از W3C CSS است. هدف صفحه dump کامل specification نیست؛ بلکه فهرست moduleهای پایدار CSS Snapshot، levelهای feature، انتظارهای interop و راهنمای author را برای authorهایی توضیح می‌دهد که می‌خواهند styleهای قابل تعامل و پایدار بنویسند.

## خواندن با نگاه specification

در specificationهای CSS، عبارت‌هایی مثل must، should، computed value، used value، grammar و conformance معنی دقیق دارند. این خلاصه آن زبان را به تصمیم‌های عملی authoring تبدیل می‌کند، اما برای edge caseها باید متن W3C را بررسی کنید.

## مفاهیم کلیدی

| اصطلاح | خلاصه author-facing |
| --- | --- |
| `CSS Snapshot` | moduleهای پایدار CSS را خلاصه می‌کند |
| `baseline` | انتظار عملی پشتیبانی برای authorها |
| `module level` | scope versioned برای یک spec در CSS |

## مثال authoring

### مثال 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Snapshot 2024 practice</title>
    <style>
      :root {
        color-scheme: light dark;
        --accent: #2563eb;
      }
      main {
        max-width: 44rem;
        margin-inline: auto;
        padding: 2rem;
      }
      h1 {
        color: var(--accent);
      }
    </style>
  </head>
  <body>
    <main>
      <h1>CSS Snapshot 2024</h1>
      <p>CSS rules cascade from selectors into computed style.</p>
    </main>
  </body>
</html>
```

### مثال 2

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Snapshot 2024 practice</title>
    <style>
      main {
        width: min(100% - 2rem, 52rem);
        margin-inline: auto;
        padding-block: 2rem;
      }
      .checklist {
        display: grid;
        gap: .75rem;
      }
    </style>
  </head>
  <body>
    <main>
      <h1>CSS Snapshot 2024 checklist</h1>
      <ul class="checklist">
        <li>Inspect the winning CSS rule.</li>
        <li>Check the computed style and box model.</li>
        <li>Resize the viewport and test keyboard focus.</li>
      </ul>
    </main>
  </body>
</html>
```

## نکته‌های interop و accessibility

- در CSS Snapshot 2024، به grammar و الگوریتم‌های computed style فقط به عنوان جزئیات پیاده‌سازی نگاه نکنید؛ CSS شما باید با آن‌ها سازگار باشد.
- وقتی specification چند حالت مجاز دارد، حالت ساده‌تر، قابل تست‌تر و قابل فهم‌تر در DevTools را برای پروژه واقعی انتخاب کنید.
- برای motion، color contrast، focus و responsive behavior، preference کاربر و accessibility را از ابتدا در CSS لحاظ کنید.

## گام بعدی

در ادامه **Specification مربوط به CSS Cascade** را مرور کنید.
