import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const DOCS_ROOT = path.join(ROOT, 'apps/web/content/docs/html');
const LOCALES = ['fa', 'en'];

const SOURCE_W3 = {
  name: 'W3Schools HTML',
  url: 'https://www.w3schools.com/html/',
};
const SOURCE_MDN = {
  name: 'MDN HTML',
  url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
};
const SOURCE_WHATWG = {
  name: 'WHATWG HTML Living Standard',
  url: 'https://html.spec.whatwg.org/',
};

const TRACK_SOURCES = {
  learn: [
    {
      name: 'W3Schools HTML Tutorial',
      url: 'https://www.w3schools.com/html/default.asp',
    },
    SOURCE_MDN,
  ],
  reference: [
    {
      name: 'MDN Web Docs — HTML',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
  ],
  official: [
    {
      name: 'HTML Living Standard',
      url: 'https://html.spec.whatwg.org/',
    },
  ],
};

function t(syntax, en, fa) {
  return { syntax, en, fa };
}

function page(slug, enTitle, faTitle, enFocus, faFocus, terms, keywords = []) {
  return { slug, enTitle, faTitle, enFocus, faFocus, terms, keywords };
}

const LEARN_INTRO = page(
  'introduction',
  'Introduction to HTML',
  'مقدمه HTML',
  'what HTML is, how browsers read it, and how this W3Schools-style path is organized',
  'اینکه HTML چیست، مرورگر چگونه آن را می‌خواند و این مسیر آموزشی چگونه چیده شده است',
  [
    t('<!doctype html>', 'starts a modern standards-mode document', 'سند مدرن را در standards mode شروع می‌کند'),
    t('<html lang="en">', 'wraps the document and declares language', 'کل سند را می‌پوشاند و زبان را مشخص می‌کند'),
    t('<head> / <body>', 'separates metadata from visible content', 'metadata را از محتوای قابل مشاهده جدا می‌کند'),
  ],
  ['HTML introduction', 'HTML tutorial', 'web page structure'],
);

const LEARN_SECTIONS = [
  {
    slug: 'basics',
    enTitle: 'HTML Basics',
    faTitle: 'مبانی HTML',
    enFocus: 'the foundation of a complete HTML document and the core tags used on real pages',
    faFocus: 'پایه‌های ساخت یک سند کامل HTML و tagهای اصلی صفحه‌های واقعی',
    terms: [
      t('<!doctype html>', 'keeps browsers in standards mode', 'مرورگر را در standards mode نگه می‌دارد'),
      t('<meta charset="UTF-8">', 'keeps multilingual text readable', 'متن چندزبانه را خوانا نگه می‌دارد'),
      t('<title>', 'names the page outside the visible body', 'صفحه را بیرون از body قابل مشاهده نام‌گذاری می‌کند'),
    ],
    children: [
      page('editors', 'HTML Editors', 'ویرایشگرهای HTML', 'choosing an editor, saving .html files, and previewing changes quickly', 'انتخاب editor، ذخیره فایل .html و دیدن سریع تغییرها', [
        t('index.html', 'common entry file for a small site', 'فایل ورودی رایج برای سایت کوچک'),
        t('UTF-8', 'encoding that supports Persian, symbols, and emoji', 'encoding مناسب فارسی، symbol و emoji'),
        t('live preview', 'reloads practice pages while you edit', 'صفحه تمرینی را هنگام ویرایش reload می‌کند'),
      ], ['HTML editor', 'VS Code HTML', 'save HTML file']),
      page('basic', 'HTML Basic Examples', 'مثال‌های پایه HTML', 'combining headings, paragraphs, links, and images into a first useful page', 'ترکیب heading، paragraph، link و image در اولین صفحه کاربردی', [
        t('<h1>', 'names the main topic of the page', 'موضوع اصلی صفحه را نام‌گذاری می‌کند'),
        t('<p>', 'wraps a readable text paragraph', 'یک پاراگراف خوانا را دربرمی‌گیرد'),
        t('<a> / <img>', 'connects pages and embeds images', 'صفحه‌ها را وصل می‌کند و image را نمایش می‌دهد'),
      ], ['HTML examples', 'basic HTML tags', 'HTML h1 p a img']),
      page('elements', 'HTML Elements', 'عنصرهای HTML', 'how opening tags, content, nested children, and closing tags create meaning', 'اینکه opening tag، محتوا، فرزندهای تو در تو و closing tag چگونه معنا می‌سازند', [
        t('opening tag', 'starts an element and can hold attributes', 'element را شروع می‌کند و می‌تواند attribute داشته باشد'),
        t('content', 'the text or child elements inside', 'متن یا elementهای فرزند داخل است'),
        t('closing tag', 'ends most non-void elements', 'بیشتر elementهای غیر void را پایان می‌دهد'),
      ], ['HTML elements', 'opening tag', 'nested HTML']),
      page('attributes', 'HTML Attributes', 'ویژگی‌های HTML', 'adding URLs, labels, state, and configuration with name-value pairs', 'افزودن URL، label، state و تنظیمات با جفت‌های name-value', [
        t('href', 'sets the destination for a link', 'مقصد link را مشخص می‌کند'),
        t('alt', 'describes an image for accessibility and fallback', 'image را برای accessibility و fallback توصیف می‌کند'),
        t('class / id', 'creates styling and scripting hooks', 'hook برای styling و script می‌سازد'),
      ], ['HTML attributes', 'href alt class id', 'HTML attribute syntax']),
      page('headings', 'HTML Headings', 'تیترهای HTML', 'building a scannable outline with h1 through h6 without skipping meaning', 'ساخت outline قابل اسکن با h1 تا h6 بدون پرش معنایی', [
        t('<h1>', 'one main page heading', 'یک heading اصلی برای صفحه'),
        t('<h2>', 'major sections under the h1', 'بخش‌های اصلی زیر h1'),
        t('<h3>-<h6>', 'deeper subsections in order', 'زیربخش‌های عمیق‌تر با ترتیب درست'),
      ], ['HTML headings', 'h1 h2 h3', 'SEO heading structure']),
      page('paragraphs', 'HTML Paragraphs', 'پاراگراف‌های HTML', 'writing readable text blocks while understanding collapsed whitespace', 'نوشتن بلوک‌های متنی خوانا همراه درک collapse شدن فاصله‌ها', [
        t('<p>', 'wraps one idea or short text block', 'یک ایده یا بلوک کوتاه متن را می‌پوشاند'),
        t('<br>', 'forces a meaningful line break', 'line break معنادار ایجاد می‌کند'),
        t('<hr>', 'marks a thematic break', 'جدایی موضوعی را نشان می‌دهد'),
      ], ['HTML paragraphs', 'p br hr', 'HTML whitespace']),
      page('styles', 'HTML Styles', 'استایل‌های HTML', 'using the style attribute for quick demos before moving CSS to better places', 'استفاده از attribute به نام style برای demo سریع پیش از انتقال CSS', [
        t('style', 'contains CSS declarations on one element', 'Declarationهای CSS را روی یک element نگه می‌دارد'),
        t('color', 'sets text color', 'رنگ متن را تعیین می‌کند'),
        t('background-color', 'sets an element background', 'پس‌زمینه element را تعیین می‌کند'),
      ], ['HTML styles', 'style attribute', 'inline CSS']),
      page('formatting', 'HTML Text Formatting', 'قالب‌بندی متن در HTML', 'marking importance, emphasis, insertions, deletions, and code-like text semantically', 'نشانه‌گذاری معنایی importance، emphasis، insert، delete و متن شبیه code', [
        t('<strong>', 'marks strong importance', 'اهمیت قوی را نشان می‌دهد'),
        t('<em>', 'marks stress emphasis', 'تاکید معنایی را نشان می‌دهد'),
        t('<mark> / <code>', 'highlights text or marks code fragments', 'متن را highlight یا قطعه code را مشخص می‌کند'),
      ], ['HTML formatting', 'strong em mark code', 'semantic text']),
      page('quotations', 'HTML Quotations', 'نقل‌قول‌ها در HTML', 'representing quotes, abbreviations, addresses, and citations with precise elements', 'نمایش quote، abbreviation، address و citation با elementهای دقیق', [
        t('<blockquote>', 'wraps a longer quoted passage', 'نقل‌قول طولانی‌تر را می‌پوشاند'),
        t('<q>', 'marks a short inline quote', 'نقل‌قول کوتاه inline را مشخص می‌کند'),
        t('<abbr title>', 'expands abbreviations for users', 'abbreviation را برای کاربر باز می‌کند'),
      ], ['HTML quotations', 'blockquote q abbr cite', 'HTML citation']),
      page('comments', 'HTML Comments', 'کامنت‌های HTML', 'leaving source notes that explain decisions without appearing in the page', 'نوشتن یادداشت‌های source که تصمیم‌ها را توضیح می‌دهند و در صفحه دیده نمی‌شوند', [
        t('<!-- ... -->', 'creates an HTML comment', 'کامنت HTML می‌سازد'),
        t('TODO', 'marks unfinished markup carefully', 'markup ناتمام را با دقت علامت می‌زند'),
        t('debug note', 'explains unusual markup choices', 'انتخاب‌های غیرمعمول markup را توضیح می‌دهد'),
      ], ['HTML comments', 'HTML comment syntax', 'comment in HTML']),
      page('colors', 'HTML Colors', 'رنگ‌ها در HTML', 'using named colors, hex, rgb, and hsl values in HTML examples and CSS', 'استفاده از رنگ‌های نام‌دار، hex، rgb و hsl در مثال HTML و CSS', [
        t('named colors', 'quick readable color names such as tomato', 'نام‌های خوانا مثل tomato'),
        t('#2563eb', 'compact hexadecimal RGB notation', 'notation فشرده RGB در قالب hex'),
        t('rgb() / hsl()', 'functional color formats with numeric control', 'فرمت‌های تابعی با کنترل عددی'),
      ], ['HTML colors', 'hex RGB HSL', 'CSS color values']),
      page('css', 'HTML CSS', 'CSS در HTML', 'connecting inline, internal, and external CSS to HTML markup safely', 'وصل کردن CSS inline، internal و external به markup به شکل درست', [
        t('style attribute', 'applies one-off styles to one element', 'style تک‌باره را روی یک element اعمال می‌کند'),
        t('<style>', 'keeps page-specific CSS in the head', 'CSS مخصوص همان صفحه را در head نگه می‌دارد'),
        t('<link rel="stylesheet">', 'loads reusable external CSS', 'CSS خارجی قابل استفاده مجدد را load می‌کند'),
      ], ['HTML CSS', 'link stylesheet', 'internal CSS']),
      page('links', 'HTML Links', 'لینک‌ها در HTML', 'creating accessible links to pages, files, email addresses, and page sections', 'ساخت linkهای دسترس‌پذیر به صفحه، فایل، email و بخش‌های داخلی', [
        t('href', 'defines the link destination', 'مقصد link را تعریف می‌کند'),
        t('target / rel', 'controls new tabs and security relationship', 'تب جدید و رابطه امنیتی را کنترل می‌کند'),
        t('#fragment', 'jumps to an element id on the page', 'به id یک element در همان صفحه می‌پرد'),
      ], ['HTML links', 'href target rel', 'anchor links']),
      page('images', 'HTML Images', 'تصویرها در HTML', 'embedding images with useful alternative text, dimensions, and responsive options', 'قراردادن image با alt مفید، اندازه پایدار و گزینه‌های responsive', [
        t('src', 'points to the image file', 'به فایل image اشاره می‌کند'),
        t('alt', 'describes meaningful images or marks decorative ones empty', 'image معنادار را توصیف یا تزئینی را خالی می‌کند'),
        t('width / height', 'reserves layout space before loading', 'قبل از load شدن فضا رزرو می‌کند'),
      ], ['HTML images', 'img alt src', 'responsive images']),
      page('favicon', 'HTML Favicon', 'فاوآیکن HTML', 'adding browser tab icons for brand recognition across tabs and bookmarks', 'افزودن icon تب مرورگر برای تشخیص برند در tab و bookmark', [
        t('rel="icon"', 'registers an icon resource', 'یک icon resource ثبت می‌کند'),
        t('sizes', 'declares bitmap icon dimensions', 'ابعاد icon bitmap را اعلام می‌کند'),
        t('type', 'tells the browser the file MIME type', 'نوع MIME فایل را به مرورگر می‌گوید'),
      ], ['HTML favicon', 'rel icon', 'browser tab icon']),
      page('page-title', 'HTML Page Title', 'عنوان صفحه HTML', 'writing title text that helps tabs, bookmarks, history, and search snippets', 'نوشتن title مناسب برای tab، bookmark، history و search snippet', [
        t('<title>', 'sets the browser tab text', 'متن تب مرورگر را تعیین می‌کند'),
        t('unique title', 'distinguishes similar pages in search and history', 'صفحه‌های مشابه را در search و history جدا می‌کند'),
        t('title length', 'keeps important words visible', 'کلمات مهم را قابل مشاهده نگه می‌دارد'),
      ], ['HTML title', 'page title SEO', 'title element']),
      page('tables', 'HTML Tables', 'جدول‌های HTML', 'organizing real tabular data with captions, headers, rows, and cells', 'سازمان‌دهی داده جدولی واقعی با caption، header، row و cell', [
        t('<table>', 'wraps tabular data', 'داده جدولی را می‌پوشاند'),
        t('<th scope>', 'labels rows or columns for assistive tech', 'row یا column را برای ابزار کمکی label می‌کند'),
        t('<caption>', 'names the table for context', 'برای جدول context و نام فراهم می‌کند'),
      ], ['HTML tables', 'table th td caption', 'accessible tables']),
      page('lists', 'HTML Lists', 'لیست‌های HTML', 'choosing ordered, unordered, and description lists for grouped content', 'انتخاب list مرتب، نامرتب و توضیحی برای محتوای گروهی', [
        t('<ul>', 'groups items where order does not matter', 'itemهایی را گروه می‌کند که ترتیب مهم نیست'),
        t('<ol>', 'groups ordered steps or rankings', 'مرحله‌ها یا رتبه‌های مرتب را گروه می‌کند'),
        t('<dl>', 'pairs terms with descriptions', 'term را با description جفت می‌کند'),
      ], ['HTML lists', 'ul ol dl li', 'ordered list unordered list']),
      page('block-inline', 'HTML Block and Inline Elements', 'عنصرهای Block و Inline در HTML', 'understanding normal document flow and text-level inline elements', 'درک جریان عادی سند و elementهای inline در سطح متن', [
        t('block elements', 'usually start on a new line and fill width', 'معمولاً از خط جدید شروع می‌شوند و عرض را می‌گیرند'),
        t('inline elements', 'flow inside text without a forced break', 'داخل متن بدون break اجباری جریان دارند'),
        t('display CSS', 'changes visual layout without changing semantics', 'ظاهر layout را بدون تغییر semantics عوض می‌کند'),
      ], ['HTML block inline', 'div span display', 'HTML layout flow']),
      page('classes', 'HTML Classes', 'کلاس‌ها در HTML', 'grouping elements with reusable names for CSS and JavaScript behavior', 'گروه‌بندی elementها با نام‌های قابل استفاده مجدد برای CSS و JavaScript', [
        t('class', 'assigns one or more reusable names', 'یک یا چند نام قابل استفاده مجدد می‌دهد'),
        t('multiple classes', 'combine small styling responsibilities', 'چند مسئولیت کوچک style را ترکیب می‌کند'),
        t('.selector', 'targets class names in CSS', 'class را در CSS target می‌کند'),
      ], ['HTML classes', 'class attribute', 'CSS class selector']),
      page('id', 'HTML id Attribute', 'شناسه id در HTML', 'creating one unique target for labels, fragments, CSS, and scripts', 'ساخت یک target یکتا برای label، fragment، CSS و script', [
        t('id', 'must be unique in the document', 'در سند باید یکتا باشد'),
        t('for', 'connects a label to an input id', 'label را به id یک input وصل می‌کند'),
        t('#fragment', 'links directly to an element id', 'مستقیم به id یک element لینک می‌دهد'),
      ], ['HTML id', 'id attribute', 'fragment links']),
      page('iframes', 'HTML Iframes', 'آی‌فریم‌ها در HTML', 'embedding another page safely with titles, permissions, and loading choices', 'قراردادن امن یک صفحه دیگر با title، permission و انتخاب load', [
        t('src', 'sets the embedded page URL', 'URL صفحه embedded را تعیین می‌کند'),
        t('title', 'labels the frame for screen readers', 'frame را برای screen reader نام‌گذاری می‌کند'),
        t('loading="lazy"', 'defers offscreen frame loading', 'load شدن frame بیرون از دید را عقب می‌اندازد'),
      ], ['HTML iframe', 'iframe src title', 'embed page']),
      page('javascript', 'HTML JavaScript', 'JavaScript در HTML', 'adding scripts that interact with the DOM after markup loads', 'افزودن scriptهایی که پس از load شدن markup با DOM کار می‌کنند', [
        t('<script>', 'runs or loads JavaScript', 'JavaScript را اجرا یا load می‌کند'),
        t('defer', 'loads scripts without blocking parsing', 'script را بدون blocking parsing load می‌کند'),
        t('DOM selector', 'finds elements by id, class, or tag', 'element را با id، class یا tag پیدا می‌کند'),
      ], ['HTML JavaScript', 'script tag defer', 'DOM events']),
      page('file-paths', 'HTML File Paths', 'مسیر فایل‌ها در HTML', 'linking images, stylesheets, scripts, and pages with reliable relative paths', 'وصل کردن image، stylesheet، script و صفحه با path نسبی قابل اعتماد', [
        t('./file.png', 'starts from the current folder', 'از folder فعلی شروع می‌کند'),
        t('../file.png', 'moves up one folder before locating a file', 'یک folder بالا می‌رود و فایل را پیدا می‌کند'),
        t('/assets/app.css', 'starts from the site root', 'از root سایت شروع می‌کند'),
      ], ['HTML file paths', 'relative path', 'absolute URL']),
      page('head', 'HTML Head', 'بخش head در HTML', 'placing metadata, titles, viewport settings, styles, and resource links in the head', 'قرار دادن metadata، title، viewport، style و resource link در head', [
        t('<meta charset>', 'declares character encoding early', 'encoding کاراکتر را زود اعلام می‌کند'),
        t('<title>', 'sets the document title', 'عنوان سند را تعیین می‌کند'),
        t('<link>', 'connects styles, icons, and preloads', 'style، icon و preload را وصل می‌کند'),
      ], ['HTML head', 'meta title link', 'HTML metadata']),
      page('layout', 'HTML Layout', 'چیدمان HTML', 'structuring a page with header, navigation, main content, sidebars, and footer', 'ساختاردهی صفحه با header، navigation، main، sidebar و footer', [
        t('<header>', 'contains introductory page or section content', 'محتوای معرفی صفحه یا بخش را نگه می‌دارد'),
        t('<nav>', 'groups major navigation links', 'linkهای navigation اصلی را گروه می‌کند'),
        t('<main>', 'contains the unique main page content', 'محتوای اصلی یکتای صفحه را نگه می‌دارد'),
      ], ['HTML layout', 'header nav main footer', 'semantic layout']),
      page('responsive', 'HTML Responsive Web Design', 'طراحی واکنش‌گرا در HTML', 'preparing markup for phones, tablets, desktops, and responsive images', 'آماده‌سازی markup برای موبایل، تبلت، دسکتاپ و image واکنش‌گرا', [
        t('viewport meta', 'sets CSS pixels to device width', 'CSS pixel را با عرض دستگاه هماهنگ می‌کند'),
        t('srcset', 'offers image candidates for different widths', 'کاندید image برای عرض‌های مختلف می‌دهد'),
        t('<picture>', 'allows art direction by media query', 'art direction را با media query ممکن می‌کند'),
      ], ['HTML responsive', 'viewport meta', 'srcset picture']),
      page('computercode', 'HTML Computer Code Elements', 'عنصرهای کدنویسی در HTML', 'showing code, keyboard input, sample output, and variables semantically', 'نمایش معنایی code، ورودی keyboard، خروجی نمونه و variable', [
        t('<code>', 'marks inline code fragments', 'قطعه code inline را مشخص می‌کند'),
        t('<pre>', 'preserves spacing for code blocks', 'فاصله‌های block code را حفظ می‌کند'),
        t('<kbd> / <samp>', 'marks user input and program output', 'ورودی کاربر و خروجی برنامه را مشخص می‌کند'),
      ], ['HTML code elements', 'code pre kbd samp', 'technical writing HTML']),
      page('semantics', 'HTML Semantics', 'معناشناسی HTML', 'choosing elements that describe the role of content instead of only its appearance', 'انتخاب elementهایی که نقش محتوا را توصیف می‌کنند نه فقط ظاهر آن را', [
        t('<article>', 'stands for independent reusable content', 'محتوای مستقل و قابل استفاده مجدد است'),
        t('<section>', 'groups a themed part with a heading', 'بخشی موضوعی با heading را گروه می‌کند'),
        t('<aside>', 'contains related but secondary material', 'محتوای مرتبط اما فرعی را نگه می‌دارد'),
      ], ['semantic HTML', 'article section aside', 'HTML accessibility SEO']),
      page('style-guide', 'HTML Style Guide', 'راهنمای سبک HTML', 'writing consistent, lowercase, quoted, and maintainable HTML in teams', 'نوشتن HTML یکدست، lowercase، quoted و قابل نگه‌داری در تیم', [
        t('lowercase tags', 'match common modern HTML style', 'با style رایج HTML مدرن هماهنگ است'),
        t('quoted attributes', 'avoid ambiguous values', 'از مقدارهای مبهم جلوگیری می‌کند'),
        t('indentation', 'shows nesting at a glance', 'تو در تو بودن را سریع نشان می‌دهد'),
      ], ['HTML style guide', 'HTML formatting', 'clean HTML']),
      page('entities', 'HTML Entities', 'Entityهای HTML', 'printing reserved characters, non-breaking spaces, and symbols safely', 'نمایش امن کاراکترهای رزروشده، فاصله غیرقابل‌شکستن و symbolها', [
        t('&amp;', 'prints an ampersand', 'علامت ampersand را چاپ می‌کند'),
        t('&lt; / &gt;', 'prints less-than and greater-than signs', 'علامت‌های کوچکتر و بزرگتر را چاپ می‌کند'),
        t('&nbsp;', 'keeps words from breaking apart', 'جدا شدن کلمات را جلوگیری می‌کند'),
      ], ['HTML entities', 'amp lt gt nbsp', 'reserved characters HTML']),
      page('symbols', 'HTML Symbols', 'نمادها در HTML', 'adding copyright, currency, math, arrow, and other symbols with entities', 'افزودن symbolهای copyright، currency، math، arrow و موارد دیگر با entity', [
        t('&copy;', 'prints the copyright symbol', 'نماد copyright را چاپ می‌کند'),
        t('&deg;', 'prints the degree symbol', 'نماد درجه را چاپ می‌کند'),
        t('&rarr;', 'prints a right arrow', 'فلش راست را چاپ می‌کند'),
      ], ['HTML symbols', 'copyright degree arrow', 'HTML entity symbols']),
      page('emojis', 'HTML Emojis', 'ایموجی‌ها در HTML', 'rendering emoji characters reliably in UTF-8 documents with accessible text', 'نمایش قابل اعتماد emoji در سند UTF-8 همراه متن accessible', [
        t('UTF-8', 'allows emoji characters in source files', 'emoji را در فایل source ممکن می‌کند'),
        t('aria-label', 'gives standalone emoji a text meaning', 'برای emoji مستقل معنی متنی می‌دهد'),
        t('decorative emoji', 'can be hidden when it adds no information', 'وقتی اطلاعاتی اضافه نمی‌کند می‌تواند hidden باشد'),
      ], ['HTML emojis', 'UTF-8 emoji', 'emoji accessibility']),
      page('charset', 'HTML Charset', 'کدگذاری کاراکتر HTML', 'declaring UTF-8 so Persian, English, symbols, and emoji render predictably', 'اعلام UTF-8 تا فارسی، انگلیسی، symbol و emoji قابل پیش‌بینی نمایش داده شوند', [
        t('<meta charset="UTF-8">', 'declares encoding near the top of head', 'encoding را نزدیک ابتدای head اعلام می‌کند'),
        t('UTF-8', 'covers most writing systems and emoji', 'بیشتر سیستم‌های نوشتاری و emoji را پوشش می‌دهد'),
        t('mojibake', 'broken text caused by wrong encoding', 'متن خراب ناشی از encoding اشتباه'),
      ], ['HTML charset', 'UTF-8 HTML', 'meta charset']),
      page('url-encode', 'HTML URL Encoding', 'کدگذاری URL در HTML', 'encoding unsafe URL characters for reliable links, queries, and form values', 'کدگذاری کاراکترهای ناامن URL برای link، query و مقدار form قابل اعتماد', [
        t('%20', 'represents a space in a URL', 'فاصله را در URL نشان می‌دهد'),
        t('query string', 'passes key-value pairs after ?', 'جفت key-value را بعد از ? می‌فرستد'),
        t('encodeURIComponent()', 'encodes dynamic JavaScript values safely', 'مقدار dynamic در JavaScript را امن encode می‌کند'),
      ], ['HTML URL encoding', 'percent encoding', 'query string HTML']),
      page('xhtml', 'HTML and XHTML', 'HTML و XHTML', 'comparing modern HTML parsing with stricter XML-style syntax', 'مقایسه HTML مدرن با syntax سخت‌گیرانه‌تر شبیه XML', [
        t('HTML parsing', 'forgives some syntax mistakes', 'بعضی خطاهای syntax را تحمل می‌کند'),
        t('XHTML', 'requires well-formed XML syntax', 'syntax well-formed شبیه XML می‌خواهد'),
        t('void elements', 'do not need XML-style closing slash in HTML', 'در HTML به slash پایانی XML-style نیاز ندارند'),
      ], ['HTML XHTML', 'XHTML syntax', 'modern HTML']),
      page('div', 'HTML div Element', 'عنصر div در HTML', 'using generic containers only when no semantic element fits the content', 'استفاده از container عمومی فقط وقتی element معنایی مناسب نیست', [
        t('<div>', 'groups content with no built-in meaning', 'محتوا را بدون معنای built-in گروه می‌کند'),
        t('class on div', 'makes generic wrappers targetable', 'wrapper عمومی را targetable می‌کند'),
        t('semantic alternative', 'should be checked before choosing div', 'قبل از div باید جایگزین معنایی بررسی شود'),
      ], ['HTML div', 'div element', 'semantic HTML div']),
    ],
  },
  {
    slug: 'forms',
    enTitle: 'HTML Forms',
    faTitle: 'فرم‌های HTML',
    enFocus: 'collecting user input with accessible controls, labels, validation, and submission settings',
    faFocus: 'جمع‌آوری input کاربر با کنترل، label، validation و تنظیمات ارسال دسترس‌پذیر',
    terms: [
      t('<form>', 'wraps controls that submit data', 'کنترل‌هایی را می‌پوشاند که داده ارسال می‌کنند'),
      t('<label>', 'names a control for every user', 'برای هر کاربر control را نام‌گذاری می‌کند'),
      t('<button type="submit">', 'submits the form intentionally', 'فرم را به شکل عمدی submit می‌کند'),
    ],
    children: [
      page('form-attributes', 'HTML Form Attributes', 'ویژگی‌های form در HTML', 'controlling where form data goes, which HTTP method is used, and how autocomplete behaves', 'کنترل مقصد داده form، روش HTTP و رفتار autocomplete', [
        t('action', 'sets the submission URL', 'URL ارسال را تعیین می‌کند'),
        t('method', 'chooses get or post submission', 'ارسال get یا post را انتخاب می‌کند'),
        t('autocomplete', 'allows useful browser autofill', 'autofill مفید مرورگر را ممکن می‌کند'),
      ], ['HTML form attributes', 'action method autocomplete', 'HTML forms']),
      page('form-elements', 'HTML Form Elements', 'عنصرهای فرم در HTML', 'choosing labels, inputs, selects, textareas, buttons, fieldsets, and legends', 'انتخاب label، input، select، textarea، button، fieldset و legend', [
        t('<input>', 'captures many short input types', 'انواع ورودی کوتاه را می‌گیرد'),
        t('<select>', 'offers a controlled choice list', 'لیست انتخاب کنترل‌شده ارائه می‌کند'),
        t('<fieldset> / <legend>', 'groups related controls', 'controlهای مرتبط را گروه می‌کند'),
      ], ['HTML form elements', 'input select textarea', 'fieldset legend']),
      page('input-types', 'HTML Input Types', 'نوع‌های input در HTML', 'selecting the right input type for validation, mobile keyboards, and browser UI', 'انتخاب type مناسب برای validation، keyboard موبایل و UI مرورگر', [
        t('type="email"', 'validates an email-like value', 'مقدار شبیه email را validate می‌کند'),
        t('type="number"', 'opens numeric controls and keyboards', 'control و keyboard عددی باز می‌کند'),
        t('type="checkbox"', 'captures an on/off choice', 'انتخاب روشن/خاموش را می‌گیرد'),
      ], ['HTML input types', 'email number checkbox', 'form input']),
      page('input-attributes', 'HTML Input Attributes', 'ویژگی‌های input در HTML', 'improving controls with required, placeholder, min, max, pattern, and autocomplete', 'بهبود controlها با required، placeholder، min، max، pattern و autocomplete', [
        t('required', 'marks a value as mandatory', 'مقدار را اجباری می‌کند'),
        t('placeholder', 'shows a short hint, not a label', 'hint کوتاه نشان می‌دهد نه label'),
        t('min / max', 'sets numeric or date limits', 'محدودیت عددی یا date تعیین می‌کند'),
      ], ['HTML input attributes', 'required placeholder', 'input validation']),
      page('input-form-attributes', 'HTML Input Form Attributes', 'ویژگی‌های form برای input در HTML', 'overriding form action, method, target, and validation from a single control', 'بازنویسی action، method، target و validation فرم از سطح یک control', [
        t('formaction', 'overrides the parent form action', 'action فرم parent را override می‌کند'),
        t('formmethod', 'overrides get or post for one button', 'get یا post را برای یک button override می‌کند'),
        t('formnovalidate', 'skips validation for one submit action', 'validation را برای یک submit action رد می‌کند'),
      ], ['HTML input form attributes', 'formaction formmethod', 'submit button']),
    ],
  },
  {
    slug: 'graphics',
    enTitle: 'HTML Graphics',
    faTitle: 'گرافیک در HTML',
    enFocus: 'drawing and embedding browser-native graphics with canvas and SVG',
    faFocus: 'رسم و قراردادن graphics native مرورگر با canvas و SVG',
    terms: [
      t('<canvas>', 'creates a scriptable bitmap drawing surface', 'سطح bitmap قابل رسم با script می‌سازد'),
      t('<svg>', 'embeds scalable vector graphics', 'گرافیک vector مقیاس‌پذیر قرار می‌دهد'),
      t('fallback text', 'keeps non-visual users informed', 'کاربر غیر visual را مطلع نگه می‌دارد'),
    ],
    children: [
      page('canvas', 'HTML Canvas', 'Canvas در HTML', 'drawing pixels and charts with JavaScript on a canvas surface', 'رسم pixel و chart با JavaScript روی سطح canvas', [
        t('<canvas>', 'defines the drawable area', 'محدوده قابل رسم را تعریف می‌کند'),
        t('getContext("2d")', 'returns the 2D drawing API', 'API رسم دوبعدی را برمی‌گرداند'),
        t('width / height', 'sets the bitmap dimensions', 'ابعاد bitmap را تعیین می‌کند'),
      ], ['HTML canvas', 'canvas getContext', 'drawing in HTML']),
      page('svg', 'HTML SVG', 'SVG در HTML', 'embedding scalable vector shapes directly in markup with accessible labels', 'قراردادن shapeهای vector مقیاس‌پذیر مستقیم در markup با label دسترس‌پذیر', [
        t('<svg>', 'creates a vector drawing viewport', 'viewport رسم vector می‌سازد'),
        t('viewBox', 'maps drawing coordinates to rendered size', 'مختصات رسم را به اندازه rendered نگاشت می‌کند'),
        t('<title>', 'labels the graphic for accessibility', 'graphic را برای accessibility نام‌گذاری می‌کند'),
      ], ['HTML SVG', 'svg viewBox', 'inline SVG']),
    ],
  },
  {
    slug: 'media',
    enTitle: 'HTML Media',
    faTitle: 'رسانه در HTML',
    enFocus: 'adding video, audio, plugins, and embedded media with captions and fallback',
    faFocus: 'افزودن video، audio، plugin و media embedded همراه caption و fallback',
    terms: [
      t('<video>', 'embeds video with native controls', 'video را با control native قرار می‌دهد'),
      t('<audio>', 'embeds sound with native controls', 'صدا را با control native قرار می‌دهد'),
      t('<source>', 'offers multiple media formats', 'چند format رسانه ارائه می‌کند'),
    ],
    children: [
      page('video', 'HTML Video', 'ویدیو در HTML', 'playing video with controls, multiple sources, captions, posters, and fallback links', 'پخش video با controls، چند source، caption، poster و fallback link', [
        t('<video controls>', 'shows native playback controls', 'control پخش native را نشان می‌دهد'),
        t('<source>', 'offers a format candidate', 'یک candidate برای format ارائه می‌کند'),
        t('<track>', 'adds captions or subtitles', 'caption یا subtitle اضافه می‌کند'),
      ], ['HTML video', 'video controls track', 'video captions']),
      page('audio', 'HTML Audio', 'صدا در HTML', 'playing audio files with controls, multiple sources, and fallback download text', 'پخش فایل صوتی با controls، چند source و متن download fallback', [
        t('<audio controls>', 'shows native audio controls', 'control صوتی native نشان می‌دهد'),
        t('<source>', 'offers mp3, ogg, or other formats', 'formatهایی مثل mp3 یا ogg ارائه می‌کند'),
        t('preload', 'hints how much audio to load early', 'میزان load اولیه audio را hint می‌دهد'),
      ], ['HTML audio', 'audio source', 'audio controls']),
      page('plugins', 'HTML Plug-ins', 'افزونه‌ها در HTML', 'understanding legacy plugins and modern embed alternatives for files and widgets', 'شناخت pluginهای قدیمی و جایگزین‌های embed مدرن برای file و widget', [
        t('<object>', 'embeds an external resource with fallback', 'resource خارجی را با fallback قرار می‌دهد'),
        t('<embed>', 'embeds plugin-like content directly', 'محتوای شبیه plugin را مستقیم قرار می‌دهد'),
        t('fallback link', 'keeps content reachable without plugin support', 'بدون پشتیبانی plugin هم محتوا را reachable نگه می‌دارد'),
      ], ['HTML plugins', 'object embed', 'HTML embed']),
      page('youtube', 'HTML YouTube Videos', 'ویدیوهای YouTube در HTML', 'embedding YouTube videos with iframe titles, privacy URLs, and responsive wrappers', 'قراردادن ویدیوی YouTube با iframe title، URL privacy و wrapper responsive', [
        t('<iframe>', 'embeds the YouTube player page', 'صفحه player YouTube را embed می‌کند'),
        t('title', 'describes the embedded video', 'ویدیوی embedded را توصیف می‌کند'),
        t('allowfullscreen', 'permits fullscreen playback', 'پخش fullscreen را مجاز می‌کند'),
      ], ['HTML YouTube', 'iframe YouTube', 'embed video']),
    ],
  },
  {
    slug: 'apis',
    enTitle: 'HTML APIs',
    faTitle: 'APIهای HTML',
    enFocus: 'using browser APIs that are commonly taught with HTML examples and DOM events',
    faFocus: 'استفاده از APIهای مرورگر که معمولاً همراه HTML و eventهای DOM آموزش داده می‌شوند',
    terms: [
      t('DOM', 'the parsed document JavaScript can inspect', 'سند parse شده که JavaScript بررسی می‌کند'),
      t('event listener', 'reacts to user or browser actions', 'به action کاربر یا مرورگر واکنش می‌دهد'),
      t('permission', 'protects sensitive browser capabilities', 'قابلیت‌های حساس مرورگر را محافظت می‌کند'),
    ],
    children: [
      page('web-apis', 'HTML Web APIs', 'Web APIها در HTML', 'connecting markup to browser capabilities through JavaScript APIs', 'وصل کردن markup به قابلیت‌های مرورگر با APIهای JavaScript', [
        t('navigator', 'exposes browser capabilities', 'قابلیت‌های مرورگر را expose می‌کند'),
        t('document', 'lets scripts query the DOM', 'به script اجازه query کردن DOM می‌دهد'),
        t('Promise', 'represents async API results', 'نتیجه async API را نمایش می‌دهد'),
      ], ['HTML Web APIs', 'browser API', 'DOM API']),
      page('geolocation', 'HTML Geolocation API', 'API موقعیت جغرافیایی در HTML', 'requesting a user location only with permission, error handling, and clear purpose', 'درخواست موقعیت کاربر فقط با permission، مدیریت خطا و هدف روشن', [
        t('navigator.geolocation', 'accesses the Geolocation API', 'به Geolocation API دسترسی می‌دهد'),
        t('getCurrentPosition()', 'requests one location result', 'یک نتیجه موقعیت درخواست می‌کند'),
        t('permission prompt', 'asks the user before sharing location', 'قبل از اشتراک location از کاربر می‌پرسد'),
      ], ['HTML geolocation', 'navigator geolocation', 'location permission']),
      page('drag-drop', 'HTML Drag and Drop API', 'Drag and Drop در HTML', 'making elements draggable and handling dragstart, dragover, and drop targets', 'draggable کردن elementها و مدیریت dragstart، dragover و drop target', [
        t('draggable="true"', 'allows an element to start dragging', 'element را قابل drag می‌کند'),
        t('dataTransfer', 'carries data during drag operations', 'داده را هنگام drag حمل می‌کند'),
        t('drop event', 'handles the final drop action', 'action نهایی drop را مدیریت می‌کند'),
      ], ['HTML drag drop', 'draggable', 'dataTransfer']),
      page('web-storage', 'HTML Web Storage API', 'Web Storage در HTML', 'saving small client-side values with localStorage and sessionStorage', 'ذخیره مقدارهای کوچک سمت کاربر با localStorage و sessionStorage', [
        t('localStorage', 'persists strings after the browser closes', 'stringها را پس از بسته شدن مرورگر نگه می‌دارد'),
        t('sessionStorage', 'persists strings for one tab session', 'stringها را برای یک tab session نگه می‌دارد'),
        t('JSON.stringify()', 'stores structured data as text', 'داده ساختاریافته را به متن تبدیل می‌کند'),
      ], ['HTML Web Storage', 'localStorage sessionStorage', 'browser storage']),
      page('web-workers', 'HTML Web Workers API', 'Web Workerها در HTML', 'running heavy JavaScript work away from the UI thread', 'اجرای کار سنگین JavaScript جدا از thread رابط کاربری', [
        t('new Worker()', 'starts a background JavaScript file', 'یک فایل JavaScript پس‌زمینه شروع می‌کند'),
        t('postMessage()', 'sends data between page and worker', 'داده را بین page و worker می‌فرستد'),
        t('onmessage', 'receives worker replies', 'پاسخ worker را دریافت می‌کند'),
      ], ['HTML Web Workers', 'Worker postMessage', 'background JavaScript']),
      page('sse', 'HTML Server-Sent Events', 'رویدادهای Server-Sent در HTML', 'receiving one-way live updates from a server with EventSource', 'دریافت update زنده یک‌طرفه از server با EventSource', [
        t('EventSource', 'opens a stream of server messages', 'جریانی از پیام‌های server باز می‌کند'),
        t('message event', 'receives default event payloads', 'payload event پیش‌فرض را دریافت می‌کند'),
        t('text/event-stream', 'MIME type for SSE responses', 'MIME type پاسخ‌های SSE است'),
      ], ['HTML SSE', 'EventSource', 'server sent events']),
    ],
  },
];

const REFERENCE_PAGES = [
  page('overview', 'HTML Reference Overview', 'نمای کلی مرجع HTML', 'how MDN-style HTML reference pages are organized for authors', 'اینکه مرجع HTML به سبک MDN برای نویسندگان چگونه سازمان‌دهی می‌شود', [
    t('elements', 'define document structure and meaning', 'ساختار و معنی سند را تعریف می‌کنند'),
    t('attributes', 'configure element behavior and metadata', 'رفتار و metadata element را تنظیم می‌کنند'),
    t('interfaces', 'connect HTML to DOM APIs', 'HTML را به DOM APIها وصل می‌کنند'),
  ], ['HTML reference', 'MDN HTML', 'HTML docs']),
  page('elements-ref', 'HTML Elements Reference', 'مرجع عنصرهای HTML', 'the element catalog, element categories, and how to choose semantic tags', 'کاتالوگ elementها، categoryهای element و انتخاب tag معنایی', [
    t('<main>', 'unique main content landmark', 'landmark محتوای اصلی یکتا'),
    t('<article>', 'self-contained composition', 'محتوای مستقل و قابل بازنشر'),
    t('<button>', 'interactive button control', 'control دکمه تعاملی'),
  ], ['HTML elements reference', 'MDN elements', 'HTML tags']),
  page('attributes-ref', 'HTML Attributes Reference', 'مرجع attributeهای HTML', 'attributes that configure links, media, forms, scripts, and embedded content', 'attributeهایی که link، media، form، script و embed را تنظیم می‌کنند', [
    t('href', 'URL for links and linked resources', 'URL برای link و resource linked'),
    t('src', 'URL for embedded resources', 'URL برای resource embedded'),
    t('disabled', 'removes a control from interaction and submission', 'control را از تعامل و ارسال خارج می‌کند'),
  ], ['HTML attributes reference', 'MDN attributes', 'HTML attribute']),
  page('global-attributes', 'HTML Global Attributes', 'attributeهای سراسری HTML', 'attributes that are valid on most HTML elements', 'attributeهایی که روی بیشتر elementهای HTML معتبرند', [
    t('id', 'document-unique identifier', 'identifier یکتا در سند'),
    t('class', 'space-separated classification tokens', 'tokenهای دسته‌بندی جداشده با فاصله'),
    t('data-*', 'custom non-visible data for scripts', 'داده سفارشی غیر visual برای script'),
  ], ['HTML global attributes', 'id class data', 'MDN global attributes']),
  page('content-categories', 'HTML Content Categories', 'دسته‌بندی محتوای HTML', 'flow, phrasing, embedded, interactive, and palpable content models', 'مدل‌های flow، phrasing، embedded، interactive و palpable', [
    t('flow content', 'most body-level content', 'بیشتر محتوای سطح body'),
    t('phrasing content', 'text-level content inside paragraphs', 'محتوای سطح متن داخل paragraph'),
    t('interactive content', 'content intended for user interaction', 'محتوایی برای تعامل کاربر'),
  ], ['HTML content categories', 'flow content', 'phrasing content']),
  page('comments-ref', 'HTML Comments Reference', 'مرجع کامنت‌های HTML', 'comment syntax, parser restrictions, and safe authoring notes', 'syntax کامنت، محدودیت parser و نکته‌های authoring امن', [
    t('<!--', 'starts a comment token', 'token کامنت را شروع می‌کند'),
    t('-->', 'ends a comment token', 'token کامنت را تمام می‌کند'),
    t('--', 'must not appear inside comments', 'نباید داخل comment بیاید'),
  ], ['HTML comments reference', 'comment syntax', 'HTML parser']),
  page('datetime-formats', 'HTML Date and Time Formats', 'فرمت‌های تاریخ و زمان HTML', 'valid machine-readable date, time, week, month, and datetime values', 'مقدارهای machine-readable معتبر برای date، time، week، month و datetime', [
    t('YYYY-MM-DD', 'valid date string', 'رشته date معتبر'),
    t('HH:mm', 'valid time string', 'رشته time معتبر'),
    t('datetime', 'machine-readable time value', 'مقدار time قابل خواندن ماشین'),
  ], ['HTML datetime formats', 'time element', 'input date']),
  page('responsive-images', 'HTML Responsive Images', 'تصویرهای واکنش‌گرای HTML', 'srcset, sizes, picture, and image selection behavior', 'رفتار srcset، sizes، picture و انتخاب image', [
    t('srcset', 'lists image candidates', 'کاندیدهای image را فهرست می‌کند'),
    t('sizes', 'describes intended rendered widths', 'عرض‌های rendered مورد انتظار را توصیف می‌کند'),
    t('<picture>', 'switches sources by media or type', 'source را بر اساس media یا type عوض می‌کند'),
  ], ['HTML responsive images', 'srcset sizes', 'picture element']),
  page('forms-constraint-validation', 'HTML Constraint Validation', 'اعتبارسنجی Constraint در HTML', 'native form validity states, constraints, messages, and submission behavior', 'stateهای validity native، constraintها، messageها و رفتار submit', [
    t('required', 'value must be present', 'مقدار باید وجود داشته باشد'),
    t('pattern', 'value must match a regular expression', 'مقدار باید با regular expression سازگار باشد'),
    t('validity', 'DOM object that reports validation state', 'DOM object گزارش‌دهنده state validation'),
  ], ['HTML constraint validation', 'form validity', 'required pattern']),
  page('media-guide', 'HTML Media Guide', 'راهنمای رسانه HTML', 'video, audio, text tracks, media sources, controls, and fallback patterns', 'video، audio، text track، media source، control و الگوهای fallback', [
    t('<video>', 'video playback element', 'element پخش video'),
    t('<audio>', 'audio playback element', 'element پخش audio'),
    t('<track>', 'timed text for captions or subtitles', 'متن زمان‌بندی‌شده برای caption یا subtitle'),
  ], ['HTML media guide', 'video audio track', 'MDN media']),
  page('microdata', 'HTML Microdata', 'Microdata در HTML', 'item scopes, item types, and item properties for embedded structured data', 'item scope، item type و item property برای structured data embedded', [
    t('itemscope', 'creates an item', 'یک item می‌سازد'),
    t('itemtype', 'identifies the vocabulary type', 'نوع vocabulary را مشخص می‌کند'),
    t('itemprop', 'names a property on the item', 'یک property روی item نام‌گذاری می‌کند'),
  ], ['HTML microdata', 'itemscope itemprop', 'structured data']),
  page('microformats', 'HTML Microformats', 'Microformats در HTML', 'class-based conventions for people, events, products, and feeds', 'قراردادهای class-based برای people، event، product و feed', [
    t('h-card', 'represents a person or organization', 'شخص یا سازمان را نمایش می‌دهد'),
    t('h-entry', 'represents a post or article', 'post یا article را نمایش می‌دهد'),
    t('p-name', 'marks a name property', 'property نام را مشخص می‌کند'),
  ], ['HTML microformats', 'h-card h-entry', 'semantic classes']),
  page('data-attributes', 'HTML Data Attributes', 'attributeهای data در HTML', 'using data-* for custom data that scripts can read without inventing invalid attributes', 'استفاده از data-* برای داده سفارشی قابل خواندن توسط script بدون attribute نامعتبر', [
    t('data-*', 'stores custom string data', 'داده string سفارشی ذخیره می‌کند'),
    t('dataset', 'DOM API for data attributes', 'DOM API برای data attributeها'),
    t('camelCase', 'maps dashed names in dataset', 'نام‌های dashدار را در dataset نگاشت می‌کند'),
  ], ['HTML data attributes', 'data-* dataset', 'custom data']),
  page('cors-images-canvas', 'CORS Images and Canvas', 'CORS تصویر و Canvas', 'how cross-origin images affect canvas drawing, reading pixels, and tainting', 'اثر imageهای cross-origin بر canvas، خواندن pixel و taint شدن', [
    t('crossorigin', 'requests CORS-enabled fetching', 'fetch با CORS را درخواست می‌کند'),
    t('tainted canvas', 'canvas whose pixels cannot be read', 'canvas که pixelهای آن قابل خواندن نیست'),
    t('toDataURL()', 'exports canvas pixels when allowed', 'pixelهای canvas را در صورت مجاز بودن export می‌کند'),
  ], ['CORS images canvas', 'tainted canvas', 'crossorigin image']),
  page('image-maps', 'HTML Image Maps', 'Image Map در HTML', 'client-side image regions that link different parts of an image', 'ناحیه‌های client-side تصویر که بخش‌های مختلف image را link می‌کنند', [
    t('<map>', 'groups clickable areas', 'areaهای clickable را گروه می‌کند'),
    t('<area>', 'defines one region and link', 'یک ناحیه و link تعریف می‌کند'),
    t('coords', 'sets region coordinates', 'مختصات ناحیه را تعیین می‌کند'),
  ], ['HTML image maps', 'map area coords', 'clickable image']),
  page('performance-tips', 'HTML Performance Tips', 'نکته‌های Performance در HTML', 'loading hints, image dimensions, lazy loading, script placement, and document weight', 'hintهای load، ابعاد image، lazy loading، جای script و وزن document', [
    t('loading="lazy"', 'defers offscreen media', 'media بیرون از دید را عقب می‌اندازد'),
    t('defer', 'executes scripts after parsing', 'script را بعد از parsing اجرا می‌کند'),
    t('width / height', 'prevents layout shifts for media', 'از layout shift برای media جلوگیری می‌کند'),
  ], ['HTML performance', 'lazy loading defer', 'web performance']),
  page('scripting-guide', 'HTML Scripting Guide', 'راهنمای Scripting در HTML', 'script loading, modules, noscript fallback, and DOM interaction patterns', 'load کردن script، moduleها، fallback noscript و patternهای DOM', [
    t('<script defer>', 'loads classic scripts without blocking parsing', 'script classic را بدون blocking parsing load می‌کند'),
    t('type="module"', 'loads JavaScript modules', 'moduleهای JavaScript را load می‌کند'),
    t('<noscript>', 'provides fallback when scripts are disabled', 'وقتی script غیرفعال است fallback فراهم می‌کند'),
  ], ['HTML scripting', 'script defer module', 'noscript']),
  page('quirks-mode', 'HTML Quirks Mode', 'Quirks Mode در HTML', 'DOCTYPE switching, standards mode, limited quirks, and legacy layout behavior', 'تغییر mode با DOCTYPE، standards mode، limited quirks و layout قدیمی', [
    t('<!doctype html>', 'selects standards mode', 'standards mode را انتخاب می‌کند'),
    t('quirks mode', 'emulates legacy browser behavior', 'رفتار قدیمی مرورگر را emulate می‌کند'),
    t('document.compatMode', 'reports the current rendering mode', 'mode فعلی rendering را گزارش می‌کند'),
  ], ['HTML quirks mode', 'doctype standards mode', 'compatMode']),
  page('cheatsheet', 'HTML Cheatsheet', 'چیت‌شیت HTML', 'a compact MDN-style checklist of elements, attributes, forms, media, and metadata', 'چک‌لیست فشرده به سبک MDN از element، attribute، form، media و metadata', [
    t('metadata', 'title, charset, viewport, and resource links', 'title، charset، viewport و resource linkها'),
    t('semantics', 'landmarks, headings, lists, and tables', 'landmark، heading، list و table'),
    t('forms/media', 'inputs, validation, video, and audio', 'input، validation، video و audio'),
  ], ['HTML cheatsheet', 'HTML reference quick', 'HTML checklist']),
];

const OFFICIAL_PAGES = [
  page('overview', 'HTML Living Standard Overview', 'نمای کلی HTML Living Standard', 'the living standard model, conformance classes, and author-facing reading strategy', 'مدل استاندارد زنده، conformance classها و روش مطالعه برای authorها', [
    t('Living Standard', 'continuously maintained HTML specification', 'specification پیوسته نگه‌داری‌شده HTML'),
    t('conformance', 'requirements for documents and tools', 'الزام‌ها برای document و tool'),
    t('authoring', 'rules for writing interoperable documents', 'قاعده‌های نوشتن document قابل تعامل'),
  ], ['HTML Living Standard', 'WHATWG HTML', 'official HTML']),
  page('document-structure', 'Document Structure', 'ساختار سند HTML', 'doctype, html, head, body, metadata, sections, and document outlines for authors', 'doctype، html، head، body، metadata، section و outline سند برای authorها', [
    t('<!doctype html>', 'required preamble for HTML documents', 'پیش‌درآمد لازم برای سند HTML'),
    t('<html>', 'root element of the document', 'element ریشه سند'),
    t('<head>', 'metadata container before body content', 'container metadata پیش از محتوای body'),
  ], ['HTML document structure', 'WHATWG document', 'doctype html']),
  page('elements-content-model', 'Elements and Content Model', 'Elementها و Content Model', 'element definitions, categories, permitted content, transparent models, and authoring constraints', 'تعریف element، category، محتوای مجاز، مدل transparent و constraintهای authoring', [
    t('content model', 'describes what children are allowed', 'توصیف می‌کند چه childهایی مجازند'),
    t('transparent', 'inherits allowed content from context', 'محتوای مجاز را از context می‌گیرد'),
    t('palpable content', 'content that is perceivable or meaningful', 'محتوای قابل درک یا معنادار'),
  ], ['HTML content model', 'WHATWG elements', 'permitted content']),
  page('parsing-tokenization', 'Parsing and Tokenization', 'Parsing و Tokenization در HTML', 'how browsers tokenize markup, build trees, recover from errors, and enter insertion modes', 'اینکه مرورگر markup را token می‌کند، tree می‌سازد، از خطا recover می‌کند و insertion mode می‌گیرد', [
    t('tokenization', 'turns characters into HTML tokens', 'کاراکترها را به tokenهای HTML تبدیل می‌کند'),
    t('tree construction', 'builds the DOM from tokens', 'DOM را از tokenها می‌سازد'),
    t('parse error', 'defined error with recovery behavior', 'خطای تعریف‌شده با رفتار recovery'),
  ], ['HTML parsing', 'WHATWG tokenizer', 'HTML parser']),
  page('forms-submission', 'Forms and Submission Model', 'مدل Form و Submission', 'form ownership, control names, validation, successful controls, and encoding algorithms', 'ownership فرم، نام control، validation، controlهای موفق و algorithmهای encoding', [
    t('form owner', 'form associated with a control', 'form مرتبط با control'),
    t('successful controls', 'controls included in submission', 'controlهایی که در submit وارد می‌شوند'),
    t('encoding type', 'format used for submitted data', 'format استفاده‌شده برای داده ارسالی'),
  ], ['WHATWG forms', 'HTML form submission', 'successful controls']),
  page('embedding-media', 'Embedding and Media', 'Embedding و Media در HTML', 'images, media elements, iframe embedding, fallback, lazy loading, and policy hooks', 'image، media element، iframe embedding، fallback، lazy loading و hookهای policy', [
    t('<img>', 'embeds an image resource', 'resource تصویر را embed می‌کند'),
    t('<iframe>', 'nests a browsing context', 'یک browsing context تو در تو می‌سازد'),
    t('<source>', 'selects media or image candidates', 'candidateهای media یا image را انتخاب می‌کند'),
  ], ['WHATWG media', 'HTML embedding', 'iframe img video']),
  page('security-authoring', 'Security and Authoring Notes', 'نکته‌های Security و Authoring', 'author-facing security guidance for links, iframes, forms, scripts, and user-generated content', 'راهنمای امنیتی author-facing برای link، iframe، form، script و محتوای user-generated', [
    t('rel="noopener"', 'prevents opener access from new tabs', 'دسترسی opener از tab جدید را جلوگیری می‌کند'),
    t('sandbox', 'restricts iframe capabilities', 'قابلیت‌های iframe را محدود می‌کند'),
    t('autocomplete', 'helps forms handle sensitive data predictably', 'به form کمک می‌کند داده حساس را قابل پیش‌بینی مدیریت کند'),
  ], ['HTML security', 'WHATWG authoring', 'iframe sandbox noopener']),
];

function withOrders(trackId, pages) {
  return pages.map((item, index) => ({
    ...item,
    track: trackId,
    order: index + 1,
  }));
}

const LEARN_PAGES = withOrders('learn', [
  LEARN_INTRO,
  ...LEARN_SECTIONS.flatMap((section) => [
    page(section.slug, section.enTitle, section.faTitle, section.enFocus, section.faFocus, section.terms, [
      `HTML ${section.slug}`,
      `${section.enTitle} tutorial`,
    ]),
    ...section.children,
  ]),
]);
const TRACK_PAGES = {
  learn: LEARN_PAGES,
  reference: withOrders('reference', REFERENCE_PAGES),
  official: withOrders('official', OFFICIAL_PAGES),
};

function learnNav() {
  return [
    navItem(LEARN_INTRO),
    ...LEARN_SECTIONS.map((section) => ({
      slug: section.slug,
      title: { fa: section.faTitle, en: section.enTitle },
      children: section.children.map(navItem),
    })),
  ];
}

function navItem(item) {
  return {
    slug: item.slug,
    title: {
      fa: item.faTitle,
      en: item.enTitle,
    },
  };
}

function flatNav(pages) {
  return pages.map(navItem);
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
      fa: 'HTML — آموزش W3Schools، مرجع MDN و استاندارد رسمی | MEGA JS',
      en: 'HTML — W3Schools Tutorial, MDN Reference & Official Spec | MEGA JS',
    },
    seoDescription: {
      fa: seoLength('HTML را در سه مسیر یاد بگیرید: آموزش W3Schools، مرجع MDN و خلاصه استاندارد WHATWG؛ همراه مثال، SEO و نکته‌های authoring برای وب مدرن.', 'fa'),
      en: seoLength('Learn HTML across three tracks: W3Schools-style lessons, MDN-style reference, and WHATWG official summaries with examples, SEO notes, and authoring guidance.', 'en'),
    },
    description: {
      fa: 'سه مسیر کامل برای HTML: آموزش قدم‌به‌قدم، مرجع معتبر و خلاصه‌های رسمی برای authorهای وب.',
      en: 'Three complete HTML tracks: step-by-step learning, authoritative reference, and official author-focused summaries.',
    },
    sources: [SOURCE_W3, SOURCE_MDN, SOURCE_WHATWG],
    tracks: [
      {
        id: 'learn',
        title: {
          fa: 'آموزشی (W3Schools)',
          en: 'Learn (W3Schools)',
        },
        description: {
          fa: 'مسیر آموزشی قدم‌به‌قدم با ادیتور زنده — ساختار سایدبار W3Schools HTML Tutorial',
          en: 'Step-by-step tutorial with live editor — W3Schools HTML Tutorial sidebar structure',
        },
        seoTitle: {
          fa: 'آموزش HTML از صفر | مسیر W3Schools + ادیتور زنده | MEGA JS',
          en: 'Learn HTML from Scratch | W3Schools Path + Live Editor | MEGA JS',
        },
        seoDescription: {
          fa: seoLength('آموزش HTML از صفر با مسیر W3Schools، مثال‌های قابل اجرا، ادیتور زنده، جدول syntax و تمرین‌های کوتاه برای ساخت صفحه‌های استاندارد.', 'fa'),
          en: seoLength('Learn HTML from scratch with a W3Schools-style path, live editor examples, syntax tables, mistakes, and short practice for standard pages.', 'en'),
        },
        source: {
          name: 'W3Schools HTML Tutorial',
          url: 'https://www.w3schools.com/html/default.asp',
        },
        liveEditor: true,
        nav: learnNav(),
      },
      {
        id: 'reference',
        title: {
          fa: 'مرجع (MDN)',
          en: 'Reference (MDN)',
        },
        description: {
          fa: 'مرجع عمیق و author-focused به سبک MDN برای elementها، attributeها، فرم‌ها، media و behavior مرورگر.',
          en: 'A deeper MDN-style author reference for elements, attributes, forms, media, and browser behavior.',
        },
        seoTitle: {
          fa: 'مرجع HTML به سبک MDN | Elements، Attributes و APIها | MEGA JS',
          en: 'HTML Reference — MDN-style Elements, Attributes & APIs | MEGA JS',
        },
        seoDescription: {
          fa: seoLength('مرجع HTML به سبک MDN برای elementها، attributeها، validation، media، image و performance؛ مناسب بررسی سریع و تصمیم دقیق در پروژه.', 'fa'),
          en: seoLength('Use the MDN-style HTML reference for elements, attributes, validation, media, images, and performance when you need precise project decisions.', 'en'),
        },
        source: {
          name: 'MDN Web Docs — HTML',
          url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        },
        liveEditor: false,
        nav: flatNav(TRACK_PAGES.reference),
      },
      {
        id: 'official',
        title: {
          fa: 'مستندات رسمی (WHATWG)',
          en: 'Official (WHATWG)',
        },
        description: {
          fa: 'خلاصه‌های specification-oriented از HTML Living Standard برای authorها، بدون dump کامل specification.',
          en: 'Specification-oriented HTML Living Standard summaries for authors, without a full specification dump.',
        },
        seoTitle: {
          fa: 'HTML Living Standard برای نویسندگان | خلاصه رسمی WHATWG | MEGA JS',
          en: 'HTML Living Standard for Authors | WHATWG Official Summary | MEGA JS',
        },
        seoDescription: {
          fa: seoLength('خلاصه رسمی WHATWG HTML برای authorها؛ ساختار سند، content model، parsing، form submission، embedding و نکته‌های security را دقیق مرور کنید.', 'fa'),
          en: seoLength('Read author-focused WHATWG HTML summaries covering document structure, content models, parsing, form submission, embedding, and security notes.', 'en'),
        },
        source: {
          name: 'HTML Living Standard',
          url: 'https://html.spec.whatwg.org/',
        },
        liveEditor: false,
        nav: flatNav(TRACK_PAGES.official),
      },
    ],
  };
}

function frontmatter(item, locale) {
  const isFa = locale === 'fa';
  const title = isFa ? item.faTitle : item.enTitle;
  const description = isFa
    ? `این صفحه ${item.faFocus} را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد.`
    : `This page explains ${item.enFocus} with examples, tables, and practical HTML notes.`;
  const seoTitle = seoTitleFor(item, locale);
  const seoDescription = seoDescriptionFor(item, locale);
  const keywords = isFa
    ? ['HTML', item.faTitle, 'آموزش HTML', 'مرجع HTML', ...item.keywords].join(', ')
    : ['HTML', item.enTitle, ...item.keywords].join(', ');
  const sources = TRACK_SOURCES[item.track];

  return [
    '---',
    `title: "${yamlString(title)}"`,
    `description: "${yamlString(description)}"`,
    `seoTitle: "${yamlString(seoTitle)}"`,
    `seoDescription: "${yamlString(seoDescription)}"`,
    `keywords: "${yamlString(keywords)}"`,
    `order: ${item.order}`,
    `track: ${item.track}`,
    'sources:',
    ...sources.flatMap((source) => [
      `  - name: ${source.name}`,
      `    url: ${source.url}`,
    ]),
    '---',
    '',
  ].join('\n');
}

function seoTitleFor(item, locale) {
  if (item.track === 'learn') {
    return locale === 'fa'
      ? `آموزش ${item.faTitle} در مسیر W3Schools | MEGA JS`
      : `${item.enTitle} Tutorial — W3Schools-style | MEGA JS Docs`;
  }
  if (item.track === 'reference') {
    return locale === 'fa'
      ? `${cleanFaReferenceTitle(item.faTitle)} — سبک MDN | MEGA JS`
      : `${cleanEnReferenceTitle(item.enTitle)} — MDN-style | MEGA JS Docs`;
  }
  return locale === 'fa'
    ? `${item.faTitle} — خلاصه رسمی WHATWG | MEGA JS`
    : `${item.enTitle} — WHATWG Official Summary | MEGA JS Docs`;
}

function cleanFaReferenceTitle(title) {
  return title.startsWith('مرجع ') ? title : `مرجع ${title}`;
}

function cleanEnReferenceTitle(title) {
  return title.includes('Reference') ? title : `HTML ${title} Reference`;
}

function seoDescriptionFor(item, locale) {
  if (item.track === 'learn') {
    return locale === 'fa'
      ? seoLength(`آموزش ${item.faTitle} با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible.`, 'fa')
      : seoLength(`Learn ${item.enTitle} with HTML examples, syntax tables, common mistakes, and next steps in a W3Schools-style path for accessible pages.`, 'en');
  }
  if (item.track === 'reference') {
    return locale === 'fa'
      ? seoLength(`${cleanFaReferenceTitle(item.faTitle)} با لحن MDN؛ شامل جدول کاربرد، مثال‌های HTML، محدودیت مرورگر و نکته authoring برای تصمیم دقیق در پروژه.`, 'fa')
      : seoLength(`${cleanEnReferenceTitle(item.enTitle)} in an MDN-style tone with usage tables, HTML examples, browser constraints, and authoring notes for precise projects.`, 'en');
  }
  return locale === 'fa'
    ? seoLength(`${item.faTitle} بر اساس WHATWG HTML؛ خلاصه specification-oriented برای authorها با مثال، constraintها و نکته‌های interop و security.`, 'fa')
    : seoLength(`${item.enTitle} from WHATWG HTML, summarized for authors with specification-oriented examples, constraints, interop notes, and security guidance.`, 'en');
}

function bodyFor(item, next, locale) {
  if (item.track === 'learn') return learnBody(item, next, locale);
  if (item.track === 'reference') return referenceBody(item, next, locale);
  return officialBody(item, next, locale);
}

function learnBody(item, next, locale) {
  const isFa = locale === 'fa';
  const examples = learnExamples(item);
  if (isFa) {
    return [
      `# ${item.faTitle}`,
      '',
      `${item.faTitle} درباره ${item.faFocus} است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.`,
      '',
      `وقتی با ${item.faTitle} کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.`,
      '',
      '## ایده اصلی',
      '',
      ...item.terms.map((term) => `- \`${term.syntax}\`: ${term.fa}.`),
      `- برای این موضوع، ${practiceSignal(item, 'fa')} معیار اصلی کیفیت markup است.`,
      '',
      '## مثال‌های HTML',
      '',
      'سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.',
      '',
      ...examples.flatMap((example, index) => [
        `### مثال ${index + 1}: ${faExampleHeading(item, index)}`,
        '',
        codeFence(example),
        '',
      ]),
      '## جدول syntax و کاربرد',
      '',
      '| Syntax | کاربرد | نکته authoring |',
      '| --- | --- | --- |',
      ...item.terms.map((term) => `| \`${term.syntax}\` | ${term.fa} | در ${item.faTitle} آن را با متن و هدف واقعی صفحه هماهنگ کنید. |`),
      '',
      '## اشتباه‌های رایج',
      '',
      ...learnMistakes(item, 'fa'),
      '',
      '## تمرین کوتاه',
      '',
      `یک فایل \`${item.slug}.html\` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از \`${item.terms[0].syntax}\` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.`,
      '',
      '## گام بعدی',
      '',
      next
        ? `بعد از این صفحه، **${next.faTitle}** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.`
        : 'در پایان مسیر learn، وارد track مرجع شوید و همین موضوعات را با نگاه دقیق‌تر MDN بررسی کنید.',
      '',
    ].join('\n');
  }

  return [
    `# ${item.enTitle}`,
    '',
    `${item.enTitle} focuses on ${item.enFocus}. This is an educational rewrite inspired by the W3Schools HTML learning path, with examples you can edit immediately in the live editor.`,
    '',
    `When you practice ${item.enTitle}, do not stop at the visual result. Inspect the DOM, check accessibility, name attributes deliberately, and consider the SEO effect of the markup.`,
    '',
    '## Core idea',
    '',
    ...item.terms.map((term) => `- \`${term.syntax}\`: ${term.en}.`),
    `- For this topic, ${practiceSignal(item, 'en')} is the main sign that your markup is doing its job.`,
    '',
    '## HTML examples',
    '',
    'The three examples move from a focused pattern to a complete page. Change one value, text node, or attribute and compare the browser output.',
    '',
    ...examples.flatMap((example, index) => [
      `### Example ${index + 1}: ${enExampleHeading(item, index)}`,
      '',
      codeFence(example),
      '',
    ]),
    '## Syntax and usage table',
    '',
    '| Syntax | Purpose | Authoring note |',
    '| --- | --- | --- |',
    ...item.terms.map((term) => `| \`${term.syntax}\` | ${term.en} | In ${item.enTitle}, match it to the real page purpose, not just the visual result. |`),
    '',
    '## Common mistakes',
    '',
    ...learnMistakes(item, 'en'),
    '',
    '## Practice step',
    '',
    `Create a file named \`${item.slug}.html\`, run the first example, then replace at least one use of \`${item.terms[0].syntax}\` with content from your own project. Test it with the keyboard and DevTools.`,
    '',
    '## Next step',
    '',
    next
      ? `Next, continue with **${next.enTitle}** so the learning path builds on this concept.`
      : 'At the end of the learn track, open the reference track and revisit the same ideas with MDN-style precision.',
    '',
  ].join('\n');
}

function referenceBody(item, next, locale) {
  const isFa = locale === 'fa';
  const examples = referenceExamples(item);
  if (isFa) {
    return [
      `# ${item.faTitle}`,
      '',
      `${item.faTitle} یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی ${item.faFocus} است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد و اثر مرورگر را کنار هم می‌گذارد.`,
      '',
      '## جایگاه در مرجع MDN',
      '',
      `در MDN معمولاً این موضوع کنار element reference، attribute reference، راهنماهای form/media و APIهای DOM خوانده می‌شود. هنگام استفاده از ${item.faTitle}، اول content model و پشتیبانی مرورگر را ببینید، سپس تصمیم authoring بگیرید.`,
      '',
      '## جدول مرجع',
      '',
      '| مورد | معنی | نکته سازگاری |',
      '| --- | --- | --- |',
      ...item.terms.map((term) => `| \`${term.syntax}\` | ${term.fa} | با validation، accessibility و رفتار browser تست شود. |`),
      '',
      '## مثال‌ها',
      '',
      ...examples.flatMap((example, index) => [
        `### مثال ${index + 1}`,
        '',
        codeFence(example),
        '',
      ]),
      '## نکته‌های دقیق authoring',
      '',
      `- برای ${item.faTitle}، نام‌ها و مقدارها باید با semantics واقعی محتوا هماهنگ باشند.`,
      '- اگر attribute یا element روی همه مرورگرها یکسان نیست، progressive enhancement و fallback بنویسید.',
      '- برای تصمیم‌های حساس، صفحه MDN مربوط را کنار HTML specification و تست واقعی مرورگر بررسی کنید.',
      '',
      '## ارتباط مفهومی با MDN',
      '',
      `این صفحه به موضوعات MDN درباره ${item.enTitle}, DOM interfaces و accessibility mapping نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.`,
      '',
      '## گام بعدی',
      '',
      next ? `صفحه مرجع بعدی: **${next.faTitle}**.` : 'پس از پایان مرجع، برای نگاه specification-oriented وارد track رسمی شوید.',
      '',
    ].join('\n');
  }

  return [
    `# ${item.enTitle}`,
    '',
    `${item.enTitle} is an author-focused MDN-style reference page. It concentrates on ${item.enFocus} and favors precise definitions, usage tables, browser behavior, and implementation trade-offs over beginner sequencing.`,
    '',
    '## Place in the MDN reference',
    '',
    `On MDN, this topic usually sits near element references, attribute references, form/media guides, and DOM APIs. Before using ${item.enTitle}, check the content model, browser behavior, and accessibility expectations.`,
    '',
    '## Reference table',
    '',
    '| Item | Meaning | Compatibility note |',
    '| --- | --- | --- |',
    ...item.terms.map((term) => `| \`${term.syntax}\` | ${term.en} | Validate it with accessibility checks and real browser behavior. |`),
    '',
    '## Examples',
    '',
    ...examples.flatMap((example, index) => [
      `### Example ${index + 1}`,
      '',
      codeFence(example),
      '',
    ]),
    '## Authoring notes',
    '',
    `- For ${item.enTitle}, names and values should match the real semantics of the content.`,
    '- If an element or attribute is not uniform across browsers, use progressive enhancement and useful fallback.',
    '- For sensitive decisions, compare the MDN page with the HTML specification and an actual browser test.',
    '',
    '## Conceptual MDN links',
    '',
    `This page is conceptually close to MDN topics for ${item.enTitle}, DOM interfaces, accessibility mapping, and browser compatibility data.`,
    '',
    '## Next step',
    '',
    next ? `Next reference page: **${next.enTitle}**.` : 'After the reference track, open the official track for specification-oriented summaries.',
    '',
  ].join('\n');
}

function officialBody(item, next, locale) {
  const isFa = locale === 'fa';
  const examples = officialExamples(item);
  if (isFa) {
    return [
      `# ${item.faTitle}`,
      '',
      `${item.faTitle} خلاصه‌ای specification-oriented از HTML Living Standard است. هدف صفحه dump کامل specification نیست؛ بلکه ${item.faFocus} را برای authorهایی توضیح می‌دهد که می‌خواهند markup قابل تعامل بنویسند.`,
      '',
      '## خواندن با نگاه specification',
      '',
      'در متن رسمی، کلمه‌هایی مثل must، may، conformance، algorithm و parser معنی دقیق دارند. این خلاصه آن زبان را به تصمیم‌های عملی authoring تبدیل می‌کند، اما برای موارد edge باید خود specification را بررسی کنید.',
      '',
      '## مفاهیم کلیدی',
      '',
      '| اصطلاح | خلاصه author-facing |',
      '| --- | --- |',
      ...item.terms.map((term) => `| \`${term.syntax}\` | ${term.fa} |`),
      '',
      '## مثال authoring',
      '',
      ...examples.flatMap((example, index) => [
        `### مثال ${index + 1}`,
        '',
        codeFence(example),
        '',
      ]),
      '## نکته‌های interop و security',
      '',
      `- در ${item.faTitle}، به الگوریتم‌های parser و form و media فقط به عنوان جزئیات پیاده‌سازی نگاه نکنید؛ خروجی authoring شما باید با آن‌ها سازگار باشد.`,
      '- وقتی specification چند حالت مجاز دارد، حالت ساده‌تر و قابل تست‌تر را برای محتوای واقعی انتخاب کنید.',
      '- برای محتوای user-generated، embedها، formها و linkهای خارجی، policy و محدودیت امنیتی را از ابتدا در markup لحاظ کنید.',
      '',
      '## گام بعدی',
      '',
      next ? `در ادامه **${next.faTitle}** را مرور کنید.` : 'این track را با بازگشت به reference و تست یک صفحه واقعی کامل کنید.',
      '',
    ].join('\n');
  }

  return [
    `# ${item.enTitle}`,
    '',
    `${item.enTitle} is a specification-oriented summary of the HTML Living Standard. It is not a full spec dump; it explains ${item.enFocus} for authors who want interoperable markup.`,
    '',
    '## Reading with a specification mindset',
    '',
    'In the official text, words such as must, may, conformance, algorithm, and parser carry precise meaning. This summary turns that language into practical authoring decisions, but edge cases still belong in the specification.',
    '',
    '## Key concepts',
    '',
    '| Term | Author-facing summary |',
    '| --- | --- |',
    ...item.terms.map((term) => `| \`${term.syntax}\` | ${term.en} |`),
    '',
    '## Authoring examples',
    '',
    ...examples.flatMap((example, index) => [
      `### Example ${index + 1}`,
      '',
      codeFence(example),
      '',
    ]),
    '## Interop and security notes',
    '',
    `- In ${item.enTitle}, parser, form, and media algorithms are not only implementation details; your authoring output must cooperate with them.`,
    '- When the specification allows several shapes, choose the simplest one that is testable in real content.',
    '- For user-generated content, embeds, forms, and external links, include policy and security constraints in the markup from the start.',
    '',
    '## Next step',
    '',
    next ? `Continue with **${next.enTitle}**.` : 'Finish this track by returning to the reference track and testing one real page.',
    '',
  ].join('\n');
}

function learnExamples(item) {
  const base = focusedSnippet(item);
  return [base, optionTableSnippet(item), completeDocumentSnippet(item, base)];
}

function referenceExamples(item) {
  return [referenceSnippet(item), optionTableSnippet(item)];
}

function officialExamples(item) {
  return [focusedSnippet(item), completeDocumentSnippet(item, focusedSnippet(item))];
}

function focusedSnippet(item) {
  const slug = item.slug;
  if (slug === 'headings') return `<article>\n  <h1>HTML course</h1>\n  <h2>${escapeHtml(item.enTitle)}</h2>\n  <p>${escapeHtml(item.enFocus)}.</p>\n</article>`;
  if (slug === 'paragraphs') return `<p>Write one idea per paragraph so readers can scan the page.</p>\n<p>Browsers collapse extra spaces, so use markup for structure.</p>`;
  if (slug === 'links') return `<a href="/docs/html/learn/forms" rel="next">Continue to HTML forms</a>\n<a href="https://developer.mozilla.org/" target="_blank" rel="noopener noreferrer">Read MDN</a>`;
  if (slug === 'images' || slug === 'responsive-images') return `<img src="hero-640.jpg" srcset="hero-640.jpg 640w, hero-1280.jpg 1280w" sizes="(max-width: 700px) 100vw, 700px" alt="HTML layout sketch" width="700" height="394">`;
  if (slug === 'tables') return `<table>\n  <caption>HTML study plan</caption>\n  <thead><tr><th scope="col">Topic</th><th scope="col">Status</th></tr></thead>\n  <tbody><tr><td>Forms</td><td>In progress</td></tr></tbody>\n</table>`;
  if (slug === 'lists') return `<ol>\n  <li>Create the HTML file.</li>\n  <li>Add semantic sections.</li>\n  <li>Test links and forms.</li>\n</ol>`;
  if (slug.includes('form') || slug === 'forms' || slug.includes('validation')) return `<form action="/subscribe" method="post">\n  <label for="${slug}-email">Email</label>\n  <input id="${slug}-email" name="email" type="email" required autocomplete="email">\n  <button type="submit">Subscribe</button>\n</form>`;
  if (slug === 'canvas' || slug === 'graphics' || slug === 'cors-images-canvas') return `<canvas id="${slug}-chart" width="320" height="120">Chart fallback text</canvas>\n<script>\n  const canvas = document.querySelector('#${slug}-chart');\n  const context = canvas.getContext('2d');\n  context.fillRect(20, 30, 160, 50);\n</script>`;
  if (slug === 'svg') return `<svg viewBox="0 0 120 80" role="img" aria-labelledby="${slug}-title">\n  <title id="${slug}-title">HTML badge</title>\n  <rect width="120" height="80" rx="12"></rect>\n  <text x="24" y="48">HTML</text>\n</svg>`;
  if (slug === 'video' || slug === 'media' || slug === 'media-guide') return `<video controls poster="lesson.jpg" width="720">\n  <source src="lesson.webm" type="video/webm">\n  <source src="lesson.mp4" type="video/mp4">\n  <track src="lesson-en.vtt" kind="captions" srclang="en" label="English">\n</video>`;
  if (slug === 'audio') return `<audio controls preload="metadata">\n  <source src="episode.mp3" type="audio/mpeg">\n  <source src="episode.ogg" type="audio/ogg">\n  <a href="episode.mp3">Download audio</a>\n</audio>`;
  if (slug === 'youtube' || slug === 'iframes' || slug === 'embedding-media') return `<iframe src="https://www.youtube-nocookie.com/embed/VIDEO_ID" title="${escapeHtml(item.enTitle)}" loading="lazy" allowfullscreen></iframe>`;
  if (slug === 'javascript' || slug === 'web-apis' || slug === 'scripting-guide') return `<button id="${slug}-button" type="button">Run example</button>\n<script defer>\n  document.querySelector('#${slug}-button').addEventListener('click', () => {\n    document.body.dataset.example = '${slug}';\n  });\n</script>`;
  if (slug === 'geolocation') return `<button id="locate" type="button">Find location</button>\n<output id="location-result"></output>\n<script>\n  document.querySelector('#locate').addEventListener('click', () => {\n    navigator.geolocation.getCurrentPosition((position) => {\n      document.querySelector('#location-result').value = position.coords.latitude;\n    });\n  });\n</script>`;
  if (slug === 'drag-drop') return `<div id="card" draggable="true">Drag this card</div>\n<div id="drop-zone">Drop zone</div>\n<script>\n  document.querySelector('#drop-zone').addEventListener('dragover', (event) => event.preventDefault());\n</script>`;
  if (slug === 'web-storage') return `<label for="display-name">Display name</label>\n<input id="display-name" name="displayName">\n<script>\n  const input = document.querySelector('#display-name');\n  input.value = localStorage.getItem('displayName') || '';\n</script>`;
  if (slug === 'web-workers') return `<button id="calculate" type="button">Calculate</button>\n<script>\n  const worker = new Worker('/workers/calculate.js');\n  document.querySelector('#calculate').addEventListener('click', () => worker.postMessage({ limit: 100000 }));\n</script>`;
  if (slug === 'sse') return `<output id="news"></output>\n<script>\n  const events = new EventSource('/events');\n  events.addEventListener('message', (event) => {\n    document.querySelector('#news').value = event.data;\n  });\n</script>`;
  if (slug === 'data-attributes') return `<article data-topic="html" data-level="reference">\n  <h2>Data attributes</h2>\n  <button type="button" data-action="save">Save</button>\n</article>`;
  if (slug === 'microdata') return `<article itemscope itemtype="https://schema.org/Article">\n  <h2 itemprop="headline">HTML reference notes</h2>\n  <p itemprop="description">Structured data can live in HTML attributes.</p>\n</article>`;
  if (slug === 'microformats') return `<article class="h-entry">\n  <h2 class="p-name">HTML notes</h2>\n  <a class="u-url" href="/notes/html">Permalink</a>\n</article>`;
  if (slug === 'image-maps') return `<img src="workspace.png" alt="Workspace map" usemap="#workspace-map">\n<map name="workspace-map">\n  <area shape="rect" coords="0,0,120,80" href="/desk" alt="Desk">\n</map>`;
  if (slug === 'document-structure' || slug === 'overview' || slug === 'introduction' || slug === 'basics') return `<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <title>${escapeHtml(item.enTitle)}</title>\n  </head>\n  <body>\n    <main>\n      <h1>${escapeHtml(item.enTitle)}</h1>\n    </main>\n  </body>\n</html>`;

  return `<section class="${slug}" aria-labelledby="${slug}-title">\n  <h2 id="${slug}-title">${escapeHtml(item.enTitle)}</h2>\n  <p>${escapeHtml(item.enFocus)}.</p>\n</section>`;
}

function referenceSnippet(item) {
  return `<article class="reference-card">\n  <h2>${escapeHtml(item.enTitle)}</h2>\n  <dl>\n${item.terms.map((term) => `    <dt><code>${escapeHtml(term.syntax)}</code></dt>\n    <dd>${escapeHtml(term.en)}</dd>`).join('\n')}\n  </dl>\n</article>`;
}

function optionTableSnippet(item) {
  return `<table>\n  <caption>${escapeHtml(item.enTitle)} quick reference</caption>\n  <thead>\n    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>\n  </thead>\n  <tbody>\n${item.terms.map((term) => `    <tr><td><code>${escapeHtml(term.syntax)}</code></td><td>${escapeHtml(term.en)}</td></tr>`).join('\n')}\n  </tbody>\n</table>`;
}

function completeDocumentSnippet(item, inner) {
  if (/^<!doctype html>/i.test(inner.trim())) {
    return `<main>\n  <h1>${escapeHtml(item.enTitle)} checklist</h1>\n  <p>Validate the document, inspect the DOM, and confirm the page purpose.</p>\n</main>`;
  }
  return `<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>${escapeHtml(item.enTitle)} practice</title>\n  </head>\n  <body>\n${indent(inner.trim(), 4)}\n  </body>\n</html>`;
}

function learnMistakes(item, locale) {
  if (locale === 'fa') {
    return [
      `- استفاده از ${item.faTitle} فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.`,
      `- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.`,
      `- فراموش کردن تست \`${item.terms[0].syntax}\` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.`,
    ];
  }
  return [
    `- Using ${item.enTitle} only for appearance without a clear content or accessibility role.`,
    '- Copying the example without changing ids, paths, labels, alt text, or visible copy for the real project.',
    `- Forgetting to test \`${item.terms[0].syntax}\` in the browser, with the keyboard, and in DevTools after the page appears to work.`,
  ];
}

function practiceSignal(item, locale) {
  if (locale === 'fa') {
    if (item.slug.includes('form') || item.slug === 'forms') return 'label روشن، validation قابل فهم و submit قابل پیش‌بینی';
    if (item.slug.includes('media') || ['video', 'audio', 'youtube', 'plugins'].includes(item.slug)) return 'fallback، caption و control قابل دسترس';
    if (['canvas', 'svg', 'graphics'].includes(item.slug)) return 'fallback یا label مناسب برای کاربران غیر visual';
    if (['links', 'images', 'headings', 'semantics', 'page-title'].includes(item.slug)) return 'معنای واضح برای کاربر، screen reader و search engine';
    return 'هماهنگی syntax با معنی واقعی محتوا';
  }
  if (item.slug.includes('form') || item.slug === 'forms') return 'clear labels, understandable validation, and predictable submission';
  if (item.slug.includes('media') || ['video', 'audio', 'youtube', 'plugins'].includes(item.slug)) return 'accessible fallback, captions, and controls';
  if (['canvas', 'svg', 'graphics'].includes(item.slug)) return 'useful fallback or labels for non-visual users';
  if (['links', 'images', 'headings', 'semantics', 'page-title'].includes(item.slug)) return 'clear meaning for users, screen readers, and search engines';
  return 'matching syntax to the real meaning of the content';
}

function enExampleHeading(item, index) {
  const headings = ['Focused pattern', 'Options in context', 'Complete practice page'];
  return headings[index] ?? item.enTitle;
}

function faExampleHeading(item, index) {
  const headings = ['الگوی متمرکز', 'گزینه‌ها در context', 'صفحه تمرینی کامل'];
  return headings[index] ?? item.faTitle;
}

function flattenNav(nav) {
  return nav.flatMap((item) => [item, ...(item.children ? flattenNav(item.children) : [])]);
}

async function validateModel(meta) {
  const allSeo = new Map();
  for (const track of meta.tracks) {
    const navSlugs = flattenNav(track.nav).map((item) => item.slug);
    const pages = TRACK_PAGES[track.id];
    const pageSlugs = pages.map((item) => item.slug);
    assertUnique(navSlugs, `${track.id} nav`);
    assertUnique(pageSlugs, `${track.id} pages`);
    if (navSlugs.join('|') !== pageSlugs.join('|')) {
      throw new Error(`Nav/page mismatch for ${track.id}: ${navSlugs.join(', ')} !== ${pageSlugs.join(', ')}`);
    }
    for (const locale of LOCALES) {
      for (const item of pages) {
        const seo = seoDescriptionFor(item, locale);
        if (seo.length < 145 || seo.length > 160) {
          throw new Error(`${locale}/${track.id}/${item.slug} seoDescription length is ${seo.length}: ${seo}`);
        }
        const key = `${locale}:${seo}`;
        if (allSeo.has(key)) {
          throw new Error(`Duplicate ${locale} seoDescription for ${allSeo.get(key)} and ${track.id}/${item.slug}`);
        }
        allSeo.set(key, `${track.id}/${item.slug}`);
      }
    }
  }
}

async function validateFiles(meta) {
  for (const track of meta.tracks) {
    for (const item of flattenNav(track.nav)) {
      for (const locale of LOCALES) {
        const file = path.join(DOCS_ROOT, locale, track.id, `${item.slug}.md`);
        await fs.access(file);
      }
    }
  }
  for (const locale of LOCALES) {
    const legacy = path.join(DOCS_ROOT, locale, 'introduction.md');
    try {
      await fs.access(legacy);
      throw new Error(`Legacy flat file still exists: ${legacy}`);
    } catch (error) {
      if (error?.code !== 'ENOENT') throw error;
    }
  }
}

function assertUnique(values, label) {
  const seen = new Set();
  for (const value of values) {
    if (seen.has(value)) throw new Error(`Duplicate ${label} value: ${value}`);
    seen.add(value);
  }
}

function seoLength(value, locale) {
  const min = 145;
  const max = 160;
  const fillers = locale === 'fa'
    ? [' برای پروژه‌های واقعی وب.', ' همراه تمرین کاربردی.', ' با مثال و نکته عملی.', ' برای تصمیم‌های دقیق.', ' با تمرین.', ' امروز.']
    : [' Use it in real projects.', ' With practical examples.', ' For precise authoring.', ' Build with confidence.', ' Practice now.', ' Learn today.', ' Today.'];
  let text = value.replace(/\s+/g, ' ').trim();
  if (text.length < min) {
    for (const filler of fillers) {
      const candidate = `${text}${filler}`.replace(/\s+/g, ' ').trim();
      if (candidate.length >= min && candidate.length <= max) return candidate;
    }
    while (text.length < min) text = `${text} ${fillers[0].trim()}`.replace(/\s+/g, ' ').trim();
  }
  if (text.length > max) {
    text = text
      .slice(0, max - 1)
      .replace(/\s+\S*$/u, '')
      .replace(/\s+(and|or|with|for|to|of|in|a|the)$/iu, '')
      .replace(/\s+(و|یا|با|برای|در|از|به|که)$/u, '')
      .replace(/[،؛,:-]+$/u, '')
      .trim();
    text = `${text}.`;
  }
  if (text.length < min || text.length > max) {
    throw new Error(`Unable to fit SEO description (${text.length}): ${text}`);
  }
  return text;
}

function yamlString(value) {
  return String(value).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function codeFence(code) {
  return ['```html', code.trim(), '```'].join('\n');
}

function indent(value, spaces) {
  const prefix = ' '.repeat(spaces);
  return value.split('\n').map((line) => `${prefix}${line}`).join('\n');
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

async function writeDocs() {
  const meta = metaJson();
  await validateModel(meta);

  await fs.mkdir(DOCS_ROOT, { recursive: true });
  for (const locale of LOCALES) {
    await fs.rm(path.join(DOCS_ROOT, locale), { recursive: true, force: true });
    for (const track of meta.tracks) {
      await fs.mkdir(path.join(DOCS_ROOT, locale, track.id), { recursive: true });
    }
  }

  await fs.writeFile(path.join(DOCS_ROOT, 'meta.json'), `${JSON.stringify(meta, null, 2)}\n`, 'utf8');

  const counts = {};
  for (const track of meta.tracks) {
    counts[track.id] = { pages: TRACK_PAGES[track.id].length, files: 0 };
    const pages = TRACK_PAGES[track.id];
    for (const [index, item] of pages.entries()) {
      const next = pages[index + 1] ?? null;
      for (const locale of LOCALES) {
        const contents = `${frontmatter(item, locale)}${bodyFor(item, next, locale)}`;
        const file = path.join(DOCS_ROOT, locale, track.id, `${item.slug}.md`);
        await fs.writeFile(file, contents, 'utf8');
        counts[track.id].files += 1;
      }
    }
  }

  await validateFiles(meta);

  console.log('Generated HTML docs into three tracks.');
  for (const track of meta.tracks) {
    console.log(`${track.id}: ${counts[track.id].pages} pages, ${counts[track.id].files} markdown files`);
  }
  console.log(`Total pages per locale: ${Object.values(counts).reduce((sum, count) => sum + count.pages, 0)}`);
  console.log(`Meta JSON: ${path.join(DOCS_ROOT, 'meta.json')}`);
  console.log('Sample paths:');
  console.log(`- ${path.join(DOCS_ROOT, 'fa/learn/introduction.md')}`);
  console.log(`- ${path.join(DOCS_ROOT, 'en/reference/elements-ref.md')}`);
  console.log(`- ${path.join(DOCS_ROOT, 'fa/official/overview.md')}`);
}

writeDocs().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
