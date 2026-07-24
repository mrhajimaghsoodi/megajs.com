import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const DOCS_ROOT = path.join(ROOT, 'apps/web/content/docs/html');
const LOCALES = ['fa', 'en'];

const SOURCES = [
  {
    name: 'W3Schools HTML',
    url: 'https://www.w3schools.com/html/',
  },
  {
    name: 'MDN HTML',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
];

const META_SOURCES = [
  ...SOURCES,
  {
    name: 'WHATWG',
    url: 'https://html.spec.whatwg.org/',
  },
];

const SECTIONS = [
  {
    slug: 'basics',
    enTitle: 'HTML Basics',
    faTitle: 'مبانی HTML',
    enFocus: 'the foundation of a complete HTML document',
    faFocus: 'پایه‌های ساخت یک سند کامل HTML',
    children: [
      ['editors', 'HTML Editors', 'ویرایشگرهای HTML', 'choosing an editor and saving your first HTML file', 'انتخاب editor و ذخیره اولین فایل HTML'],
      ['basic', 'HTML Basic Examples', 'مثال‌های پایه HTML', 'reading and writing the smallest useful HTML examples', 'خواندن و نوشتن کوچک‌ترین مثال‌های کاربردی HTML'],
      ['elements', 'HTML Elements', 'عنصرهای HTML', 'how elements wrap content and create page meaning', 'اینکه elementها چگونه محتوا را پوشش می‌دهند و معنا می‌سازند'],
      ['attributes', 'HTML Attributes', 'ویژگی‌های HTML', 'adding extra information to elements with attributes', 'افزودن اطلاعات بیشتر به elementها با attribute'],
      ['headings', 'HTML Headings', 'تیترهای HTML', 'building a logical heading outline', 'ساخت یک ساختار منطقی برای headingها'],
      ['paragraphs', 'HTML Paragraphs', 'پاراگراف‌های HTML', 'writing readable text blocks with correct spacing', 'نوشتن بلوک‌های متنی خوانا با فاصله‌گذاری درست'],
      ['styles', 'HTML Styles', 'استایل‌های HTML', 'using the style attribute for quick inline styling', 'استفاده از attribute به نام style برای استایل‌دهی سریع'],
      ['formatting', 'HTML Text Formatting', 'قالب‌بندی متن در HTML', 'marking emphasis, importance, insertions, and code-like text', 'مشخص کردن تاکید، اهمیت، درج جدید و متن شبیه code'],
      ['quotations', 'HTML Quotations', 'نقل‌قول‌ها در HTML', 'representing quotes, abbreviations, addresses, and citations', 'نمایش نقل‌قول، abbreviation، address و citation'],
      ['comments', 'HTML Comments', 'کامنت‌های HTML', 'leaving notes in source code without showing them on the page', 'نوشتن یادداشت در source code بدون نمایش در صفحه'],
      ['colors', 'HTML Colors', 'رنگ‌ها در HTML', 'using named colors, hex, RGB, and HSL values', 'استفاده از رنگ‌های نام‌دار، hex، RGB و HSL'],
      ['css', 'HTML CSS', 'CSS در HTML', 'connecting CSS to HTML with inline, internal, and external styles', 'وصل کردن CSS به HTML با روش inline، internal و external'],
      ['links', 'HTML Links', 'لینک‌ها در HTML', 'creating accessible links to pages, files, email, and page sections', 'ساخت linkهای دسترس‌پذیر به صفحه، فایل، ایمیل و بخش‌های صفحه'],
      ['images', 'HTML Images', 'تصویرها در HTML', 'embedding images with useful alternative text and sizing', 'قراردادن image با متن جایگزین و اندازه‌گذاری مناسب'],
      ['favicon', 'HTML Favicon', 'فاوآیکن HTML', 'adding a small browser tab icon to a site', 'افزودن icon کوچک تب مرورگر به سایت'],
      ['page-title', 'HTML Page Title', 'عنوان صفحه HTML', 'writing title text that helps tabs, bookmarks, and search results', 'نوشتن title مناسب برای تب، bookmark و نتیجه جست‌وجو'],
      ['tables', 'HTML Tables', 'جدول‌های HTML', 'organizing tabular data with headers, rows, and captions', 'سازمان‌دهی داده جدولی با header، row و caption'],
      ['lists', 'HTML Lists', 'لیست‌های HTML', 'choosing ordered, unordered, and description lists', 'انتخاب list مرتب، نامرتب و توضیحی'],
      ['block-inline', 'HTML Block and Inline Elements', 'عنصرهای Block و Inline در HTML', 'understanding layout flow and inline text-level elements', 'درک جریان layout و elementهای inline در سطح متن'],
      ['classes', 'HTML Classes', 'کلاس‌ها در HTML', 'grouping elements for styling and JavaScript behavior', 'گروه‌بندی elementها برای styling و رفتار JavaScript'],
      ['id', 'HTML id Attribute', 'شناسه id در HTML', 'creating one unique target for labels, links, CSS, and scripts', 'ساخت یک هدف یکتا برای label، link، CSS و script'],
      ['iframes', 'HTML Iframes', 'آی‌فریم‌ها در HTML', 'embedding another page safely inside the current page', 'قراردادن امن یک صفحه دیگر داخل صفحه فعلی'],
      ['javascript', 'HTML JavaScript', 'JavaScript در HTML', 'adding scripts that interact with the DOM after markup loads', 'افزودن scriptهایی که پس از بارگذاری markup با DOM کار می‌کنند'],
      ['file-paths', 'HTML File Paths', 'مسیر فایل‌ها در HTML', 'linking images, stylesheets, and pages with reliable paths', 'وصل کردن image، stylesheet و صفحه‌ها با path قابل اعتماد'],
      ['head', 'HTML Head', 'بخش head در HTML', 'placing metadata, titles, styles, and resource links in the head', 'قرار دادن metadata، title، style و resource link در head'],
      ['layout', 'HTML Layout', 'چیدمان HTML', 'structuring a page with header, navigation, main content, and footer', 'ساختاردهی صفحه با header، navigation، main و footer'],
      ['responsive', 'HTML Responsive Web Design', 'طراحی واکنش‌گرا در HTML', 'preparing markup for phones, tablets, and desktops', 'آماده‌سازی markup برای موبایل، تبلت و دسکتاپ'],
      ['computercode', 'HTML Computer Code Elements', 'عنصرهای کدنویسی در HTML', 'showing code, keyboard input, sample output, and variables', 'نمایش code، ورودی keyboard، خروجی نمونه و variable'],
      ['semantics', 'HTML Semantics', 'معناشناسی HTML', 'choosing elements that describe the role of content', 'انتخاب elementهایی که نقش محتوا را توصیف می‌کنند'],
      ['style-guide', 'HTML Style Guide', 'راهنمای سبک HTML', 'writing consistent, maintainable, lowercase HTML', 'نوشتن HTML یکدست، قابل نگه‌داری و lowercase'],
      ['entities', 'HTML Entities', 'Entityهای HTML', 'printing reserved characters and non-breaking spaces safely', 'نمایش امن کاراکترهای رزروشده و فاصله غیرقابل‌شکستن'],
      ['symbols', 'HTML Symbols', 'نمادها در HTML', 'adding symbols by entity name, number, or Unicode value', 'افزودن symbol با نام entity، شماره یا مقدار Unicode'],
      ['emojis', 'HTML Emojis', 'ایموجی‌ها در HTML', 'rendering emoji characters with UTF-8 documents', 'نمایش emojiها در سندهای UTF-8'],
      ['charset', 'HTML Charset', 'کدگذاری کاراکتر HTML', 'declaring UTF-8 so text displays predictably', 'اعلام UTF-8 تا متن قابل پیش‌بینی نمایش داده شود'],
      ['url-encode', 'HTML URL Encoding', 'کدگذاری URL در HTML', 'encoding unsafe URL characters for reliable links and queries', 'کدگذاری کاراکترهای ناامن URL برای link و query قابل اعتماد'],
      ['xhtml', 'HTML and XHTML', 'HTML و XHTML', 'comparing modern HTML with stricter XML-style syntax', 'مقایسه HTML مدرن با syntax سخت‌گیرانه‌تر شبیه XML'],
      ['div', 'HTML div Element', 'عنصر div در HTML', 'using generic containers only when no semantic element fits', 'استفاده از container عمومی فقط وقتی element معنایی مناسب نیست'],
    ],
  },
  {
    slug: 'forms',
    enTitle: 'HTML Forms',
    faTitle: 'فرم‌های HTML',
    enFocus: 'collecting user input with accessible controls and labels',
    faFocus: 'جمع‌آوری ورودی کاربر با کنترل‌ها و labelهای دسترس‌پذیر',
    children: [
      ['form-attributes', 'HTML Form Attributes', 'ویژگی‌های form در HTML', 'controlling where and how form data is submitted', 'کنترل مقصد و روش ارسال داده فرم'],
      ['form-elements', 'HTML Form Elements', 'عنصرهای فرم در HTML', 'choosing labels, inputs, selects, textareas, buttons, and fieldsets', 'انتخاب label، input، select، textarea، button و fieldset'],
      ['input-types', 'HTML Input Types', 'نوع‌های input در HTML', 'selecting the right input type for data and mobile keyboards', 'انتخاب type مناسب برای داده و keyboard موبایل'],
      ['input-attributes', 'HTML Input Attributes', 'ویژگی‌های input در HTML', 'validating and improving controls with required, placeholder, min, and max', 'اعتبارسنجی و بهبود کنترل‌ها با required، placeholder، min و max'],
      ['input-form-attributes', 'HTML Input Form Attributes', 'ویژگی‌های form برای input در HTML', 'overriding form behavior from individual controls', 'بازنویسی رفتار form از سطح کنترل‌های جداگانه'],
    ],
  },
  {
    slug: 'graphics',
    enTitle: 'HTML Graphics',
    faTitle: 'گرافیک در HTML',
    enFocus: 'drawing and embedding graphics with browser-native features',
    faFocus: 'رسم و قراردادن گرافیک با قابلیت‌های native مرورگر',
    children: [
      ['canvas', 'HTML Canvas', 'Canvas در HTML', 'drawing pixels with JavaScript on a canvas surface', 'رسم pixel با JavaScript روی سطح canvas'],
      ['svg', 'HTML SVG', 'SVG در HTML', 'embedding scalable vector shapes directly in markup', 'قراردادن shapeهای vector مقیاس‌پذیر مستقیم در markup'],
    ],
  },
  {
    slug: 'media',
    enTitle: 'HTML Media',
    faTitle: 'رسانه در HTML',
    enFocus: 'adding video, audio, and embedded media responsibly',
    faFocus: 'افزودن video، audio و رسانه embedded به شکل مسئولانه',
    children: [
      ['video', 'HTML Video', 'ویدیو در HTML', 'playing video with controls, captions, and fallback text', 'پخش video با controls، caption و متن fallback'],
      ['audio', 'HTML Audio', 'صدا در HTML', 'playing audio files with controls and multiple sources', 'پخش فایل صوتی با controls و چند source'],
      ['plugins', 'HTML Plug-ins', 'افزونه‌ها در HTML', 'understanding legacy plugins and modern embed alternatives', 'شناخت pluginهای قدیمی و جایگزین‌های embed مدرن'],
      ['youtube', 'HTML YouTube Videos', 'ویدیوهای YouTube در HTML', 'embedding YouTube videos with privacy and responsive sizing in mind', 'قراردادن ویدیوی YouTube با توجه به privacy و اندازه واکنش‌گرا'],
    ],
  },
  {
    slug: 'apis',
    enTitle: 'HTML APIs',
    faTitle: 'APIهای HTML',
    enFocus: 'using browser APIs that are commonly taught with HTML',
    faFocus: 'استفاده از APIهای مرورگر که معمولاً همراه HTML آموزش داده می‌شوند',
    children: [
      ['web-apis', 'HTML Web APIs', 'Web APIها در HTML', 'connecting markup to browser capabilities through JavaScript APIs', 'وصل کردن markup به قابلیت‌های مرورگر با APIهای JavaScript'],
      ['geolocation', 'HTML Geolocation API', 'API موقعیت جغرافیایی در HTML', 'requesting a user location only with permission and clear purpose', 'درخواست موقعیت کاربر فقط با permission و هدف روشن'],
      ['drag-drop', 'HTML Drag and Drop API', 'Drag and Drop در HTML', 'making elements draggable and handling drop targets', 'draggable کردن elementها و مدیریت drop target'],
      ['web-storage', 'HTML Web Storage API', 'Web Storage در HTML', 'saving small client-side values with localStorage and sessionStorage', 'ذخیره مقدارهای کوچک سمت کاربر با localStorage و sessionStorage'],
      ['web-workers', 'HTML Web Workers API', 'Web Workerها در HTML', 'running heavy JavaScript work away from the UI thread', 'اجرای کار سنگین JavaScript جدا از thread رابط کاربری'],
      ['sse', 'HTML Server-Sent Events', 'رویدادهای Server-Sent در HTML', 'receiving one-way live updates from a server', 'دریافت update زنده یک‌طرفه از server'],
    ],
  },
  {
    slug: 'references',
    enTitle: 'HTML References',
    faTitle: 'مرجع‌های HTML',
    enFocus: 'using reference pages after you understand the tutorial flow',
    faFocus: 'استفاده از صفحه‌های reference پس از درک مسیر آموزشی',
    children: [
      ['tag-list', 'HTML Tag List', 'فهرست tagهای HTML', 'finding elements by purpose and choosing semantic tags first', 'پیدا کردن elementها بر اساس کاربرد و انتخاب tag معنایی در ابتدا'],
      ['attributes-ref', 'HTML Attribute Reference', 'مرجع attributeهای HTML', 'looking up attributes and the elements that accept them', 'جست‌وجوی attributeها و elementهایی که آن‌ها را می‌پذیرند'],
      ['global-attributes', 'HTML Global Attributes', 'attributeهای سراسری HTML', 'using attributes that work on almost every HTML element', 'استفاده از attributeهایی که تقریباً روی همه elementها کار می‌کنند'],
      ['events-ref', 'HTML Event Reference', 'مرجع eventهای HTML', 'connecting user and browser events to JavaScript handlers', 'وصل کردن eventهای کاربر و مرورگر به handlerهای JavaScript'],
    ],
  },
];

const INTRODUCTION = {
  slug: 'introduction',
  enTitle: 'Introduction to HTML',
  faTitle: 'مقدمه HTML',
  enSeoTopic: 'Introduction',
  faSeoTopic: 'مقدمه',
  enFocus: 'what HTML is, why it matters, and how this tutorial path is organized',
  faFocus: 'اینکه HTML چیست، چرا مهم است و این مسیر آموزشی چگونه چیده شده است',
  sectionSlug: 'introduction',
  sectionEnTitle: 'HTML Tutorial',
  sectionFaTitle: 'آموزش HTML',
};

const RAW_PAGES = [
  INTRODUCTION,
  ...SECTIONS.flatMap((section) => [
    {
      slug: section.slug,
      enTitle: section.enTitle,
      faTitle: section.faTitle,
      enFocus: section.enFocus,
      faFocus: section.faFocus,
      sectionSlug: section.slug,
      sectionEnTitle: section.enTitle,
      sectionFaTitle: section.faTitle,
      isOverview: true,
    },
    ...section.children.map(([slug, enTitle, faTitle, enFocus, faFocus]) => ({
      slug,
      enTitle,
      faTitle,
      enFocus,
      faFocus,
      sectionSlug: section.slug,
      sectionEnTitle: section.enTitle,
      sectionFaTitle: section.faTitle,
    })),
  ]),
].map((page, index) => ({
  ...page,
  order: index + 1,
  enSeoTopic: page.enSeoTopic ?? seoTopic(page.enTitle, 'en'),
  faSeoTopic: page.faSeoTopic ?? seoTopic(page.faTitle, 'fa'),
}));

const EXAMPLES = {
  introduction: `<article>
  <h1>Welcome to HTML</h1>
  <p>HTML describes the structure and meaning of web content.</p>
</article>`,
  basics: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My first HTML page</title>
  </head>
  <body>
    <h1>Hello HTML</h1>
    <p>This page has a clear document structure.</p>
  </body>
</html>`,
  editors: `<!-- Save this file as index.html, then open it in a browser. -->
<!doctype html>
<html lang="en">
  <head>
    <title>Editor Practice</title>
  </head>
  <body>
    <h1>Edited in my code editor</h1>
  </body>
</html>`,
  basic: `<h1>Main heading</h1>
<p>A paragraph explains one idea.</p>
<a href="about.html">Read more</a>
<img src="team.jpg" alt="Our team working together">`,
  elements: `<p class="lead">This paragraph is one HTML element.</p>
<button type="button">Save</button>
<section>
  <h2>Nested elements</h2>
  <p>Elements can contain other elements.</p>
</section>`,
  attributes: `<a href="https://example.com" target="_blank" rel="noopener">
  Visit example.com
</a>
<img src="logo.svg" alt="Company logo" width="160" height="48">`,
  headings: `<h1>HTML Course</h1>
<h2>Basics</h2>
<h3>Elements</h3>
<h2>Forms</h2>
<h3>Input types</h3>`,
  paragraphs: `<p>HTML collapses extra spaces in normal paragraphs.</p>
<p>Use a new paragraph when the idea changes.</p>
<hr>
<p>The hr element separates related sections.</p>`,
  styles: `<h1 style="color: #1d4ed8; font-size: 2rem;">Styled heading</h1>
<p style="background: #eff6ff; padding: 1rem;">Inline styles are useful for demos, not large sites.</p>`,
  formatting: `<p><strong>Important:</strong> Save your work often.</p>
<p><em>Emphasis</em> changes the tone of a sentence.</p>
<p>Use <code>&lt;code&gt;</code> for short code fragments.</p>`,
  quotations: `<blockquote cite="https://developer.mozilla.org/">
  <p>Use blockquote for longer quoted passages.</p>
</blockquote>
<p><abbr title="HyperText Markup Language">HTML</abbr> structures web pages.</p>`,
  comments: `<!-- Explain why this section exists, not what every line does. -->
<section aria-labelledby="pricing-title">
  <h2 id="pricing-title">Pricing</h2>
</section>`,
  colors: `<p style="color: tomato;">Named color</p>
<p style="color: #2563eb;">Hex color</p>
<p style="background-color: hsl(210 100% 96%);">HSL background</p>`,
  css: `<head>
  <link rel="stylesheet" href="styles.css">
  <style>
    .notice { border-left: 4px solid royalblue; }
  </style>
</head>
<p class="notice" style="padding: 1rem;">CSS can be external, internal, or inline.</p>`,
  links: `<a href="/docs/html/forms">Open the forms chapter</a>
<a href="mailto:hello@example.com">Email support</a>
<a href="#summary">Jump to summary</a>`,
  images: `<figure>
  <img src="/images/html-layout.png" alt="Diagram of an HTML page layout" width="640" height="360">
  <figcaption>HTML layout diagram</figcaption>
</figure>`,
  favicon: `<head>
  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="icon" href="/icon.svg" type="image/svg+xml">
</head>`,
  'page-title': `<head>
  <title>HTML Forms Tutorial | MEGA JS Docs</title>
  <meta name="description" content="Learn how to build accessible HTML forms.">
</head>`,
  tables: `<table>
  <caption>Course modules</caption>
  <thead>
    <tr><th scope="col">Module</th><th scope="col">Status</th></tr>
  </thead>
  <tbody>
    <tr><td>HTML Basics</td><td>Ready</td></tr>
  </tbody>
</table>`,
  lists: `<ul>
  <li>Use unordered lists when order does not matter.</li>
</ul>
<ol>
  <li>Create index.html.</li>
  <li>Open it in a browser.</li>
</ol>
<dl>
  <dt>HTML</dt>
  <dd>The markup language of the web.</dd>
</dl>`,
  'block-inline': `<div class="card">
  <h2>Block elements start on a new line.</h2>
  <p>Inline elements like <a href="/docs">links</a> stay inside text flow.</p>
</div>`,
  classes: `<article class="card featured">
  <h2 class="card-title">Reusable class names</h2>
  <p class="card-copy">Classes can be shared by many elements.</p>
</article>`,
  id: `<label for="email">Email</label>
<input id="email" name="email" type="email">
<a href="#email">Jump to the email field</a>`,
  iframes: `<iframe
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  title="HTML tutorial video"
  loading="lazy"
  allowfullscreen>
</iframe>`,
  javascript: `<button id="theme-toggle" type="button">Toggle theme</button>
<script>
  document.querySelector('#theme-toggle').addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
  });
</script>`,
  'file-paths': `<img src="./images/logo.svg" alt="Logo">
<link rel="stylesheet" href="../styles/site.css">
<a href="/docs/html/introduction">Absolute path from the site root</a>`,
  head: `<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML Head Example</title>
  <link rel="stylesheet" href="/styles.css">
</head>`,
  layout: `<header>Site header</header>
<nav aria-label="Primary navigation">...</nav>
<main>
  <article>
    <h1>Page content</h1>
  </article>
</main>
<footer>Copyright notice</footer>`,
  responsive: `<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<img src="hero-small.jpg" srcset="hero-small.jpg 600w, hero-large.jpg 1200w" alt="Responsive hero">`,
  computercode: `<p>Run <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.</p>
<pre><code>npm run dev</code></pre>
<p>The result is <samp>Server ready</samp>.</p>`,
  semantics: `<main>
  <article>
    <header><h1>Semantic HTML</h1></header>
    <p>Use elements that describe the content.</p>
  </article>
</main>`,
  'style-guide': `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Consistent HTML</title>
  </head>
  <body>
    <img src="logo.svg" alt="Logo">
  </body>
</html>`,
  entities: `<p>Use &amp; for an ampersand and &lt; for a less-than sign.</p>
<p>Keep these words together with&nbsp;a non-breaking space.</p>`,
  symbols: `<p>Copyright &copy; 2026</p>
<p>Temperature: 24&deg;C</p>
<p>Arrow: &rarr;</p>`,
  emojis: `<meta charset="UTF-8">
<p>Great job! 🎉</p>
<p aria-label="Rocket launch">🚀</p>`,
  charset: `<head>
  <meta charset="UTF-8">
  <title>UTF-8 page</title>
</head>
<p>English, فارسی, العربية, and emoji 😊 can share one page.</p>`,
  'url-encode': `<a href="/search?q=learn%20HTML&level=beginner">Search for learn HTML</a>
<form action="/search" method="get">
  <input name="q" value="HTML tables">
</form>`,
  xhtml: `<!-- Valid in modern HTML and also close to XHTML style -->
<img src="logo.svg" alt="Logo">
<input type="email" name="email">`,
  div: `<div class="product-card">
  <h2>Starter plan</h2>
  <p>Use div for styling hooks when no semantic element fits.</p>
</div>`,
  forms: `<form action="/subscribe" method="post">
  <label for="email">Email</label>
  <input id="email" name="email" type="email" required>
  <button type="submit">Subscribe</button>
</form>`,
  'form-attributes': `<form action="/signup" method="post" autocomplete="on" target="_self">
  <label for="name">Name</label>
  <input id="name" name="name" required>
  <button type="submit">Create account</button>
</form>`,
  'form-elements': `<fieldset>
  <legend>Contact preference</legend>
  <label><input type="radio" name="contact" value="email"> Email</label>
  <label><input type="radio" name="contact" value="phone"> Phone</label>
</fieldset>
<textarea name="message" rows="4"></textarea>`,
  'input-types': `<input type="text" name="fullName">
<input type="email" name="email">
<input type="number" name="quantity" min="1" max="10">
<input type="date" name="startDate">`,
  'input-attributes': `<input
  type="email"
  name="email"
  placeholder="you@example.com"
  required
  autocomplete="email">`,
  'input-form-attributes': `<form id="profile-form" action="/profile" method="post"></form>
<input form="profile-form" name="displayName">
<button form="profile-form" formaction="/profile/preview">Preview</button>`,
  graphics: `<figure>
  <svg viewBox="0 0 120 80" role="img" aria-labelledby="chart-title">
    <title id="chart-title">Simple bar chart</title>
    <rect width="40" height="70" x="10" y="10"></rect>
  </svg>
</figure>`,
  canvas: `<canvas id="chart" width="300" height="150">Canvas is not supported.</canvas>
<script>
  const canvas = document.querySelector('#chart');
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'royalblue';
  ctx.fillRect(20, 20, 120, 80);
</script>`,
  svg: `<svg viewBox="0 0 100 100" role="img" aria-labelledby="circle-title">
  <title id="circle-title">Blue circle</title>
  <circle cx="50" cy="50" r="40" fill="royalblue"></circle>
</svg>`,
  media: `<video controls width="640">
  <source src="lesson.mp4" type="video/mp4">
  <track src="captions.vtt" kind="captions" srclang="en" label="English">
  Your browser does not support the video element.
</video>`,
  video: `<video controls poster="poster.jpg" width="640">
  <source src="intro.mp4" type="video/mp4">
  <source src="intro.webm" type="video/webm">
  <track src="intro.vtt" kind="captions" srclang="en" label="English">
</video>`,
  audio: `<audio controls>
  <source src="podcast.mp3" type="audio/mpeg">
  <source src="podcast.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>`,
  plugins: `<object data="brochure.pdf" type="application/pdf" width="100%" height="500">
  <p><a href="brochure.pdf">Download the PDF brochure</a></p>
</object>`,
  youtube: `<div class="video-frame">
  <iframe
    src="https://www.youtube-nocookie.com/embed/VIDEO_ID"
    title="HTML lesson"
    loading="lazy"
    allowfullscreen>
  </iframe>
</div>`,
  apis: `<button id="save" type="button">Save preference</button>
<script>
  document.querySelector('#save').addEventListener('click', () => {
    localStorage.setItem('theme', 'dark');
  });
</script>`,
  'web-apis': `<button id="copy" type="button">Copy link</button>
<script>
  document.querySelector('#copy').addEventListener('click', async () => {
    await navigator.clipboard.writeText(location.href);
  });
</script>`,
  geolocation: `<button id="locate" type="button">Find my location</button>
<output id="result"></output>
<script>
  document.querySelector('#locate').addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      result.value = pos.coords.latitude + ', ' + pos.coords.longitude;
    });
  });
</script>`,
  'drag-drop': `<div draggable="true" id="card">Drag me</div>
<div id="drop-zone">Drop here</div>
<script>
  card.addEventListener('dragstart', (event) => event.dataTransfer.setData('text/plain', card.id));
  dropZone.addEventListener('dragover', (event) => event.preventDefault());
</script>`,
  'web-storage': `<label>
  Display name
  <input id="display-name" name="displayName">
</label>
<script>
  displayName.value = localStorage.getItem('displayName') || '';
  displayName.addEventListener('input', () => localStorage.setItem('displayName', displayName.value));
</script>`,
  'web-workers': `<button id="calculate" type="button">Calculate</button>
<script>
  const worker = new Worker('/workers/calculate.js');
  calculate.addEventListener('click', () => worker.postMessage({ limit: 100000 }));
  worker.onmessage = (event) => console.log(event.data);
</script>`,
  sse: `<output id="news"></output>
<script>
  const events = new EventSource('/events');
  const news = document.querySelector('#news');
  events.addEventListener('message', (event) => {
    news.value = event.data;
  });
</script>`,
  references: `<p>Use references when you need exact element, attribute, or event details.</p>
<a href="/docs/html/tag-list">Open the tag list</a>`,
  'tag-list': `<main>
  <article>Use for independent content.</article>
  <aside>Use for related side content.</aside>
  <footer>Use for footer information.</footer>
</main>`,
  'attributes-ref': `<img src="avatar.png" alt="Profile avatar" width="96" height="96">
<a href="/profile" rel="author">Author profile</a>
<input name="email" type="email" required>`,
  'global-attributes': `<section id="profile" class="card" hidden>
  <h2 title="Visible profile name">Profile</h2>
  <p data-user-id="42">Custom data belongs in data-* attributes.</p>
</section>`,
  'events-ref': `<button type="button" onclick="alert('Saved')">Save</button>
<input oninput="console.log(this.value)" aria-label="Live search">
<form onsubmit="return confirm('Submit?')"></form>`,
};

function seoTopic(title, locale) {
  if (locale === 'fa') {
    return title
      .replace(/\s+در HTML$/u, '')
      .replace(/^HTML\s+/u, '')
      .replace(/\s+HTML$/u, '')
      .trim() || title;
  }

  return title
    .replace(/^HTML\s+/i, '')
    .replace(/\s+HTML$/i, '')
    .trim() || title;
}

function navForMeta() {
  return [
    {
      slug: INTRODUCTION.slug,
      title: {
        fa: INTRODUCTION.faTitle,
        en: INTRODUCTION.enTitle,
      },
    },
    ...SECTIONS.map((section) => ({
      slug: section.slug,
      title: {
        fa: section.faTitle,
        en: section.enTitle,
      },
      children: section.children.map(([slug, enTitle, faTitle]) => ({
        slug,
        title: {
          fa: faTitle,
          en: enTitle,
        },
      })),
    })),
  ];
}

function metaJson() {
  return {
    id: 'html',
    order: 10,
    title: {
      fa: 'HTML',
      en: 'HTML',
    },
    seoTitle: {
      fa: 'آموزش HTML کامل از صفر تا پیشرفته | مستندات MEGA JS',
      en: 'Complete HTML Tutorial from Beginner to Advanced | MEGA JS Docs',
    },
    seoDescription: {
      fa: completeSeoDescription([
        'آموزش HTML کامل با مسیر قدم‌به‌قدم شبیه W3Schools؛ از مبانی تا فرم، رسانه، API و مرجع‌ها برای ساخت صفحات وب واقعی و استاندارد.',
        'آموزش HTML کامل به سبک قدم‌به‌قدم W3Schools؛ از مبانی تا فرم، رسانه، API و مرجع‌ها برای ساخت صفحات وب واقعی و استاندارد.',
      ], 'fa'),
      en: completeSeoDescription([
        'Learn HTML with a W3Schools-style step-by-step path from basics to forms, media, APIs, and references for building real, standard web pages.',
        'Learn HTML step by step in a W3Schools-style path from basics to forms, media, APIs, and references for building real standard web pages.',
      ], 'en'),
    },
    description: {
      fa: 'مسیر کامل یادگیری HTML از مبانی تا APIها و مرجع‌ها.',
      en: 'A complete HTML learning path from basics to APIs and references.',
    },
    sources: META_SOURCES,
    nav: navForMeta(),
  };
}

function frontmatter(page, locale) {
  const isFa = locale === 'fa';
  const title = isFa ? page.faTitle : page.enTitle;
  const description = isFa
    ? `درس ${title} برای یادگیری ${page.faFocus}.`
    : `A focused lesson on ${page.enFocus}.`;
  const seoTitle = isFa
    ? `${page.faSeoTopic} در HTML — آموزش قدم‌به‌قدم | مستندات MEGA JS`
    : `${page.enSeoTopic} in HTML — Step-by-Step Tutorial | MEGA JS Docs`;
  const seoDescription = isFa
    ? pageSeoDescription(page, 'fa')
    : pageSeoDescription(page, 'en');
  const keywords = isFa
    ? ['آموزش HTML', page.faSeoTopic, 'HTML', 'W3Schools', 'طراحی وب']
    : ['learn HTML', page.enSeoTopic, 'HTML tutorial', 'W3Schools', 'web development'];

  return [
    '---',
    `title: "${yamlString(title)}"`,
    `description: "${yamlString(description)}"`,
    `seoTitle: "${yamlString(seoTitle)}"`,
    `seoDescription: "${yamlString(seoDescription)}"`,
    `keywords: "${yamlString(keywords.join(', '))}"`,
    `order: ${page.order}`,
    'sources:',
    ...SOURCES.flatMap((source) => [
      `  - name: ${source.name}`,
      `    url: ${source.url}`,
    ]),
    '---',
    '',
  ].join('\n');
}

function englishBody(page, nextPage) {
  const title = page.enTitle;
  const example = exampleFor(page);
  const tableRows = referenceRows(page, 'en');
  const next = nextPage ? `Next step: open **${nextPage.enTitle}** and build on this lesson while the syntax is still fresh.` : 'Next step: revisit the references and refactor one real page with semantic, accessible HTML.';

  return [
    `# ${title}`,
    '',
    `This chapter teaches ${page.enFocus}. The order follows the W3Schools HTML tutorial spine, but the explanations are rewritten for MEGA JS so you can learn the same concepts without memorizing copied examples.`,
    '',
    '## What and why',
    '',
    `${title} matters because HTML is the contract between your content, the browser, search engines, assistive technologies, CSS, and JavaScript. When the markup is precise, styling becomes easier, scripts have stable targets, and users get a page that works across devices.`,
    '',
    `In practice, focus on the role of the element or attribute before you focus on visual output. Browsers provide default behavior, but good HTML gives that behavior a clear purpose.`,
    '',
    '## Syntax',
    '',
    codeFence(example),
    '',
    'Read the snippet from the outside in: identify the containing element, then the attributes, then the text or nested elements. This habit makes larger documents much easier to debug.',
    '',
    '## Quick reference',
    '',
    '| Item | Purpose | Example cue |',
    '| --- | --- | --- |',
    ...tableRows.map((row) => `| ${row[0]} | ${row[1]} | ${row[2]} |`),
    '',
    '## Best practices',
    '',
    '- Prefer semantic HTML before adding generic containers or JavaScript behavior.',
    '- Keep examples small while learning, then test the same idea inside a complete document.',
    '- Write attributes intentionally: names, labels, alternative text, and URLs should explain their purpose.',
    '- Validate the page, inspect it in DevTools, and test it with keyboard navigation when interaction is involved.',
    '',
    '## Common mistakes to avoid',
    '',
    `- Treating ${page.enSeoTopic} as only a visual feature instead of part of document meaning.`,
    '- Skipping required context such as labels, titles, fallback text, or character encoding.',
    '- Copying markup without changing names, paths, and text to match the real page.',
    '',
    '## Next step',
    '',
    next,
    '',
  ].join('\n');
}

function persianBody(page, nextPage) {
  const title = page.faTitle;
  const example = exampleFor(page);
  const tableRows = referenceRows(page, 'fa');
  const next = nextPage ? `گام بعدی: درس **${nextPage.faTitle}** را باز کنید و همین الگو را روی موضوع بعدی تمرین کنید.` : 'گام بعدی: به مرجع‌ها برگردید و یک صفحه واقعی را با HTML معنایی و دسترس‌پذیر بازنویسی کنید.';

  return [
    `# ${title}`,
    '',
    `در این درس ${page.faFocus} را یاد می‌گیرید. ترتیب درس‌ها از ساختار آموزش HTML در W3Schools الهام گرفته شده، اما متن و مثال‌ها برای مستندات MEGA JS بازنویسی شده‌اند تا یادگیری مرحله‌به‌مرحله و کاربردی بماند.`,
    '',
    '## چیستی و چرایی',
    '',
    `${title} مهم است چون HTML قرارداد اصلی میان محتوا، مرورگر، موتورهای جست‌وجو، ابزارهای کمکی، CSS و JavaScript است. وقتی markup دقیق باشد، style ساده‌تر می‌شود، scriptها target پایدار دارند و صفحه در دستگاه‌های مختلف قابل اعتمادتر کار می‌کند.`,
    '',
    'در تمرین، اول نقش element یا attribute را بفهمید و بعد به ظاهر فکر کنید. ظاهر با CSS تغییر می‌کند، اما معنای درست HTML پایه تجربه کاربری، SEO و accessibility است.',
    '',
    '## Syntax',
    '',
    codeFence(example),
    '',
    'کد را از بیرون به داخل بخوانید: ابتدا container، سپس attributeها، و بعد متن یا elementهای تو در تو. این عادت debug کردن سندهای بزرگ‌تر را بسیار ساده‌تر می‌کند.',
    '',
    '## جدول سریع',
    '',
    '| مورد | کاربرد | نشانه در مثال |',
    '| --- | --- | --- |',
    ...tableRows.map((row) => `| ${row[0]} | ${row[1]} | ${row[2]} |`),
    '',
    '## نکته‌ها و Best Practice',
    '',
    '- قبل از استفاده از `div` یا JavaScript، ببینید element معنایی مناسب وجود دارد یا نه.',
    '- هنگام یادگیری مثال را کوچک نگه دارید، سپس همان ایده را داخل یک سند کامل HTML امتحان کنید.',
    '- attributeهایی مثل `name`، `alt`، `title`، `href` و `id` باید هدف روشن و قابل فهم داشته باشند.',
    '- صفحه را در DevTools بررسی کنید و برای بخش‌های تعاملی، navigation با keyboard را هم تست کنید.',
    '',
    '## اشتباه‌های رایج',
    '',
    `- نگاه کردن به ${page.faSeoTopic} فقط به عنوان موضوع ظاهری، نه بخشی از معنای سند.`,
    '- حذف contextهای لازم مثل label، title، fallback text یا character encoding.',
    '- کپی کردن markup بدون تغییر نام‌ها، pathها و متن‌ها بر اساس صفحه واقعی.',
    '',
    '## گام بعدی',
    '',
    next,
    '',
  ].join('\n');
}

function exampleFor(page) {
  return EXAMPLES[page.slug] ?? `<section class="${page.slug}">
  <h2>${escapeHtml(page.enTitle)}</h2>
  <p>Practice ${escapeHtml(page.enFocus)} in a small, valid HTML document.</p>
</section>`;
}

function referenceRows(page, locale) {
  if (locale === 'fa') {
    return [
      ['مفهوم اصلی', 'نقش این درس در ساختار HTML', page.faSeoTopic],
      ['syntax', 'شکل نوشتن element، attribute یا API مرتبط', 'به opening tag و مقدار attribute دقت کنید'],
      ['رفتار مرورگر', 'آنچه browser به صورت پیش‌فرض انجام می‌دهد', 'با DevTools بررسی کنید'],
      ['کیفیت', 'ارتباط با accessibility، SEO یا maintainability', 'نام‌گذاری و متن جایگزین را جدی بگیرید'],
    ];
  }

  return [
    ['Core concept', 'The role this lesson plays in HTML structure', page.enSeoTopic],
    ['Syntax', 'How the related element, attribute, or API is written', 'Watch opening tags and attribute values'],
    ['Browser behavior', 'What the browser provides by default', 'Inspect the result in DevTools'],
    ['Quality check', 'Accessibility, SEO, or maintainability impact', 'Use clear names and fallback text'],
  ];
}

function codeFence(code) {
  return ['```html', code.trim(), '```'].join('\n');
}

function pageSeoDescription(page, locale) {
  if (locale === 'fa') {
    return completeSeoDescription([
      `آموزش HTML ${page.faSeoTopic} به سبک قدم‌به‌قدم W3Schools؛ با syntax، مثال کاربردی، best practice و گام بعدی برای ساخت صفحه‌های واقعی.`,
      `آموزش HTML ${page.faSeoTopic} قدم‌به‌قدم و شبیه W3Schools؛ همراه syntax، مثال، best practice و مسیر تمرین برای صفحه‌های واقعی.`,
      `آموزش HTML ${page.faSeoTopic} با روش قدم‌به‌قدم W3Schools؛ شامل syntax، مثال، نکته کاربردی و تمرین برای صفحه‌های واقعی.`,
    ], 'fa');
  }

  return completeSeoDescription([
    `Learn HTML ${page.enSeoTopic} with a W3Schools-style step-by-step guide to syntax, examples, best practices, and next steps for real web pages.`,
    `Learn HTML ${page.enSeoTopic} step by step with W3Schools-style syntax, examples, best practices, and next steps for real accessible pages.`,
    `Learn HTML ${page.enSeoTopic} with W3Schools-style examples, syntax, best practices, and a next step for real accessible pages.`,
  ], 'en');
}

function completeSeoDescription(candidates, locale) {
  const min = 145;
  const max = 160;
  const fillers = locale === 'fa'
    ? [' مناسب تمرین عملی و یادگیری مطمئن.', ' برای تمرین کاربردی در پروژه واقعی.', ' با تمرین کوتاه و نتیجه روشن.', ' برای شروع مطمئن و کاربردی.']
    : [' Practice it today.', ' Build confidence.', ' Use it in projects.', ' Start with practice.'];
  const normalized = candidates.map((candidate) => candidate.replace(/\s+/g, ' ').trim());

  for (const candidate of normalized) {
    if (candidate.length >= min && candidate.length <= max) {
      return candidate;
    }

    if (candidate.length < min) {
      for (const filler of fillers) {
        const combined = `${candidate}${filler}`.replace(/\s+/g, ' ').trim();
        if (combined.length >= min && combined.length <= max) {
          return combined;
        }
      }
    }
  }

  const shortestUsable = normalized
    .filter((candidate) => candidate.length < min)
    .sort((a, b) => b.length - a.length)[0];
  if (shortestUsable) {
    const filler = fillers.find((item) => `${shortestUsable}${item}`.length <= max) ?? fillers[fillers.length - 1];
    return `${shortestUsable}${filler}`.replace(/\s+/g, ' ').trim();
  }

  const shortest = normalized.sort((a, b) => a.length - b.length)[0];
  return `${shortest.slice(0, max - 1).replace(/\s+\S*$/u, '').replace(/[،؛,:-]+$/u, '').trim()}.`;
}

function yamlString(value) {
  return String(value).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

async function ensureUniqueSlugs(pages) {
  const seen = new Set();
  for (const page of pages) {
    if (seen.has(page.slug)) {
      throw new Error(`Duplicate HTML doc slug: ${page.slug}`);
    }
    seen.add(page.slug);
  }
}

async function writeDocs() {
  await ensureUniqueSlugs(RAW_PAGES);

  for (const locale of LOCALES) {
    const localeDir = path.join(DOCS_ROOT, locale);
    await fs.rm(localeDir, { recursive: true, force: true });
    await fs.mkdir(localeDir, { recursive: true });
  }

  await fs.mkdir(DOCS_ROOT, { recursive: true });
  await fs.writeFile(path.join(DOCS_ROOT, 'meta.json'), `${JSON.stringify(metaJson(), null, 2)}\n`, 'utf8');

  let markdownFiles = 0;
  for (const [index, page] of RAW_PAGES.entries()) {
    const nextPage = RAW_PAGES[index + 1];
    const contents = {
      en: `${frontmatter(page, 'en')}${englishBody(page, nextPage)}`,
      fa: `${frontmatter(page, 'fa')}${persianBody(page, nextPage)}`,
    };

    for (const locale of LOCALES) {
      await fs.writeFile(path.join(DOCS_ROOT, locale, `${page.slug}.md`), contents[locale], 'utf8');
      markdownFiles += 1;
    }
  }

  const navSectionSlugs = navForMeta().map((item) => item.slug);
  console.log(`Generated pages: ${RAW_PAGES.length}`);
  console.log(`Generated markdown files: ${markdownFiles}`);
  console.log(`Locales: ${LOCALES.join(', ')}`);
  console.log(`Nav section slugs: ${navSectionSlugs.join(', ')}`);
  console.log(`Meta JSON: ${path.join(DOCS_ROOT, 'meta.json')}`);
}

writeDocs().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
