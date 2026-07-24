---
title: "پروژه Todo با JavaScript"
description: "این صفحه ساخت یک DOM app کوچک stateful با Array، event، rendering و storage را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش پروژه Todo با JavaScript در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش پروژه Todo با JavaScript (todo project): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime."
keywords: "JavaScript, پروژه Todo با JavaScript, آموزش JavaScript, مرجع JavaScript, JavaScript Todo Project with JavaScript, Todo Project with JavaScript tutorial, todo project"
order: 97
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# پروژه Todo با JavaScript

پروژه Todo با JavaScript درباره ساخت یک DOM app کوچک stateful با Array، event، rendering و storage است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی پروژه Todo با JavaScript را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `JavaScript`: ویژگی زبان برای پروژه Todo با JavaScript.
- `runtime`: code را اجرا و error را گزارش می‌کند.
- `DevTools Console`: valueها را هنگام یادگیری بررسی می‌کند.
- برای این موضوع، هماهنگی syntax، value، runtime و رفتار قابل مشاهده در Console نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<form id="todo-project-form">
  <label>Task <input name="task" value="Practice JavaScript"></label>
  <button type="submit">Save</button>
</form>
<output id="todo-project-out"></output>
<script>
  const form = document.querySelector('#todo-project-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const task = new FormData(form).get('task');
    localStorage.setItem('todo-project-task', task);
    document.querySelector('#todo-project-out').value = `Saved: ${task}`;
  });
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>Todo Project with JavaScript quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>JavaScript</code></td><td>language feature used in Todo Project with JavaScript</td></tr>
    <tr><td><code>runtime</code></td><td>executes code and reports errors</td></tr>
    <tr><td><code>DevTools Console</code></td><td>checks values while learning</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('todo-project terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo Project with JavaScript practice</title>
  </head>
  <body>
    <form id="todo-project-form">
      <label>Task <input name="task" value="Practice JavaScript"></label>
      <button type="submit">Save</button>
    </form>
    <output id="todo-project-out"></output>
    <script>
      const form = document.querySelector('#todo-project-form');
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        const task = new FormData(form).get('task');
        localStorage.setItem('todo-project-task', task);
        document.querySelector('#todo-project-out').value = `Saved: ${task}`;
      });
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `JavaScript` | ویژگی زبان برای پروژه Todo با JavaScript | در پروژه Todo با JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `runtime` | code را اجرا و error را گزارش می‌کند | در پروژه Todo با JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `DevTools Console` | valueها را هنگام یادگیری بررسی می‌کند | در پروژه Todo با JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن پروژه Todo با JavaScript بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `JavaScript` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `todo-project.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `JavaScript` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

در پایان مسیر learn، وارد track مرجع شوید و همین موضوعات را با نگاه دقیق‌تر MDN بررسی کنید.
