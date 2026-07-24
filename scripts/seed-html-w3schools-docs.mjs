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
}));

function d(subject, faSubject, skill, faSkill, when, faWhen, terms, keywords, options = {}) {
  return {
    subject,
    faSubject,
    skill,
    faSkill,
    when,
    faWhen,
    terms: terms.map(([syntax, purpose, faPurpose]) => ({ syntax, purpose, faPurpose })),
    keywords,
    faKeywords: options.faKeywords ?? keywords.map((keyword) => keyword.replace(/^HTML /i, 'آموزش HTML ')),
    faSeoTitle: options.faSeoTitle,
    enSeoTitle: options.enSeoTitle,
    practice: options.practice,
    faPractice: options.faPractice,
  };
}

const DETAILS = {
  introduction: d('HTML foundations', 'مقدمه و ساختار HTML', 'how tags, attributes, text, and the browser combine to create a page', 'نقش tag، attribute، متن و مرورگر در ساخت یک صفحه وب', 'you need the mental model before writing larger documents', 'قبل از نوشتن سندهای بزرگ‌تر به یک نقشه ذهنی روشن نیاز دارید', [['<!doctype html>', 'starts a modern standards-mode document', 'سند مدرن را در standards mode شروع می‌کند'], ['<html lang="en">', 'wraps the document and declares language', 'کل سند را می‌پوشاند و زبان را مشخص می‌کند'], ['<head> / <body>', 'separates metadata from visible content', 'metadata را از محتوای قابل مشاهده جدا می‌کند']], ['HTML introduction', 'HTML tutorial', 'web page structure']),
  basics: d('HTML document basics', 'مبانی سند HTML', 'the minimum structure every reliable page should have', 'حداقل ساختاری که هر صفحه قابل اعتماد نیاز دارد', 'you create a new file or review whether a page is valid', 'وقتی فایل تازه می‌سازید یا اعتبار صفحه را بررسی می‌کنید', [['<!doctype html>', 'prevents old browser rendering quirks', 'از حالت‌های قدیمی rendering جلوگیری می‌کند'], ['<meta charset="UTF-8">', 'keeps text and symbols readable', 'متن و نمادها را خوانا نگه می‌دارد'], ['<meta name="viewport">', 'sets mobile layout expectations', 'انتظار layout در موبایل را تعیین می‌کند']], ['HTML basics', 'HTML document', 'doctype HTML']),
  editors: d('HTML editors', 'ویرایشگرهای HTML', 'how to write, save, preview, and format HTML files without hidden tooling', 'نوشتن، ذخیره، پیش‌نمایش و format کردن فایل HTML بدون ابزار پنهان', 'you set up a beginner-friendly workflow for practice', 'وقتی workflow ساده و مناسب تمرین می‌سازید', [['index.html', 'common entry file name for a site folder', 'نام رایج فایل ورودی در پوشه سایت'], ['live preview', 'reloads changes quickly while learning', 'تغییرها را سریع در زمان یادگیری نشان می‌دهد'], ['UTF-8 save encoding', 'avoids broken Persian, symbols, or emoji', 'از خراب شدن فارسی، نماد و emoji جلوگیری می‌کند']], ['HTML editor', 'VS Code HTML', 'save HTML file']),
  basic: d('basic HTML examples', 'مثال‌های پایه HTML', 'the first elements beginners combine on almost every page', 'اولین elementهایی که مبتدی‌ها در بیشتر صفحه‌ها کنار هم می‌گذارند', 'you want a quick page with heading, paragraph, link, and image', 'وقتی صفحه‌ای سریع با heading، paragraph، link و image می‌خواهید', [['<h1>', 'names the main topic of the page', 'موضوع اصلی صفحه را نام‌گذاری می‌کند'], ['<p>', 'holds a readable paragraph of text', 'یک پاراگراف خوانا از متن را نگه می‌دارد'], ['<a> / <img>', 'connects pages and embeds images', 'صفحه‌ها را وصل می‌کند و image را نمایش می‌دهد']], ['HTML examples', 'HTML h1 p a img', 'basic HTML tags']),
  elements: d('HTML elements', 'عنصرهای HTML', 'how opening tags, content, nested children, and closing tags form meaning', 'اینکه opening tag، محتوا، فرزندهای تو در تو و closing tag چگونه معنا می‌سازند', 'you decide what wrapper or content element fits a piece of content', 'وقتی انتخاب می‌کنید کدام wrapper یا element برای محتوا مناسب است', [['opening tag', 'starts an element and can hold attributes', 'element را شروع می‌کند و می‌تواند attribute داشته باشد'], ['content', 'the text or child elements inside', 'متن یا elementهای فرزند داخل آن است'], ['closing tag', 'ends most non-void elements', 'بیشتر elementهای غیر void را پایان می‌دهد']], ['HTML elements', 'opening tag closing tag', 'nested HTML']),
  attributes: d('HTML attributes', 'ویژگی‌های HTML', 'how name-value pairs add URLs, labels, state, and configuration to elements', 'اینکه جفت‌های name-value چگونه URL، label، state و تنظیمات به element اضافه می‌کنند', 'an element needs more information than its tag name can express', 'وقتی tag name به تنهایی اطلاعات کافی ندارد', [['href', 'sets the destination for a link', 'مقصد link را مشخص می‌کند'], ['alt', 'describes an image for accessibility and fallback', 'image را برای accessibility و fallback توصیف می‌کند'], ['class / id', 'creates styling and scripting hooks', 'hook برای styling و script می‌سازد']], ['HTML attributes', 'href alt class id', 'HTML attribute syntax']),
  headings: d('HTML headings', 'Heading در HTML (h1 تا h6)', 'how h1 through h6 create a scannable document outline', 'اینکه h1 تا h6 چگونه outline قابل اسکن برای سند می‌سازند', 'you structure articles, documentation pages, and landing pages for humans and search engines', 'وقتی article، مستندات یا landing page را برای کاربر و search engine ساختار می‌دهید', [['<h1>', 'one main page heading', 'یک heading اصلی برای صفحه'], ['<h2>', 'major sections under the h1', 'بخش‌های اصلی زیر h1'], ['<h3>-<h6>', 'deeper subsections without skipping levels', 'زیر‌بخش‌های عمیق‌تر بدون پرش سطح']], ['HTML headings', 'h1 h2 h3', 'SEO heading structure'], { faSeoTitle: 'آموزش Heading در HTML (h1 تا h6) | مستندات MEGA JS', enSeoTitle: 'HTML Headings (h1-h6) Tutorial | MEGA JS Docs' }),
  paragraphs: d('HTML paragraphs', 'پاراگراف در HTML', 'how paragraphs group text and how browsers collapse whitespace', 'گروه‌بندی متن با paragraph و رفتار مرورگر در collapse کردن فاصله‌ها', 'you write readable body copy instead of line-by-line visual spacing', 'وقتی متن خوانا می‌نویسید نه فاصله‌گذاری ظاهری خط‌به‌خط', [['<p>', 'wraps one idea or short block of text', 'یک ایده یا بلوک کوتاه متن را می‌پوشاند'], ['<br>', 'forces a line break only when meaningful', 'فقط وقتی لازم است line break ایجاد می‌کند'], ['<hr>', 'marks a thematic break between sections', 'جدایی موضوعی بین بخش‌ها را نشان می‌دهد']], ['HTML paragraphs', 'p br hr', 'HTML whitespace']),
  styles: d('HTML style attribute', 'استایل inline در HTML', 'how inline CSS changes a single element for demos or one-off cases', 'اینکه CSS inline چگونه یک element را برای demo یا مورد تک‌باره تغییر می‌دهد', 'you need a quick visual example while learning CSS alongside HTML', 'وقتی هنگام یادگیری CSS کنار HTML به مثال سریع ظاهری نیاز دارید', [['style', 'contains CSS declarations on one element', 'Declarationهای CSS را روی یک element نگه می‌دارد'], ['color', 'sets text color', 'رنگ متن را تعیین می‌کند'], ['background-color', 'sets the element background', 'پس‌زمینه element را تعیین می‌کند']], ['HTML styles', 'style attribute', 'inline CSS']),
  formatting: d('HTML text formatting', 'قالب‌بندی متن در HTML', 'how semantic formatting elements mark importance, emphasis, edits, and code', 'نشانه‌گذاری اهمیت، تاکید، ویرایش و code با elementهای معنایی', 'text needs meaning beyond plain words', 'وقتی متن به معنایی فراتر از کلمات ساده نیاز دارد', [['<strong>', 'marks strong importance', 'اهمیت قوی را نشان می‌دهد'], ['<em>', 'marks stress emphasis', 'تاکید معنایی را نشان می‌دهد'], ['<mark> / <code>', 'highlights text or marks code fragments', 'متن را highlight یا قطعه code را مشخص می‌کند']], ['HTML formatting', 'strong em mark code', 'semantic text']),
  quotations: d('HTML quotations', 'نقل‌قول در HTML', 'how to represent quoted sources, abbreviations, addresses, and citations', 'نمایش منبع نقل‌قول، abbreviation، address و citation', 'you quote another source or clarify a shortened term', 'وقتی از منبعی نقل می‌کنید یا کوتاه‌شده‌ای را روشن می‌سازید', [['<blockquote>', 'wraps a longer quoted passage', 'نقل‌قول طولانی‌تر را می‌پوشاند'], ['<q>', 'marks a short inline quote', 'نقل‌قول کوتاه inline را مشخص می‌کند'], ['<abbr title>', 'expands abbreviations for users', 'abbreviation را برای کاربر باز می‌کند']], ['HTML quotations', 'blockquote q abbr cite', 'HTML citation']),
  comments: d('HTML comments', 'کامنت در HTML', 'how source-only notes explain decisions without appearing on the page', 'نوشتن یادداشت‌های فقط source که روی صفحه نمایش داده نمی‌شوند', 'future readers need context for markup decisions', 'وقتی خواننده آینده به دلیل تصمیم‌های markup نیاز دارد', [['<!-- ... -->', 'creates an HTML comment', 'کامنت HTML می‌سازد'], ['TODO notes', 'mark unfinished content carefully', 'کار ناتمام را با دقت علامت می‌زند'], ['conditional notes', 'explain unusual markup choices', 'انتخاب‌های غیرمعمول markup را توضیح می‌دهد']], ['HTML comments', 'HTML comment syntax', 'comment in HTML']),
  colors: d('HTML colors', 'رنگ‌ها در HTML', 'how CSS color values appear in HTML examples and inline styles', 'اینکه مقدارهای رنگ CSS در مثال‌های HTML و inline style چگونه نوشته می‌شوند', 'you prototype visual differences before moving styles to CSS', 'وقتی تفاوت‌های ظاهری را قبل از انتقال به CSS prototype می‌کنید', [['named colors', 'quick readable color names such as tomato', 'نام‌های خوانا مثل tomato'], ['hex', 'compact RGB color notation like #2563eb', 'notation فشرده RGB مثل #2563eb'], ['rgb() / hsl()', 'functional color formats with numeric control', 'فرمت‌های تابعی با کنترل عددی']], ['HTML colors', 'hex RGB HSL', 'CSS color values']),
  css: d('CSS in HTML', 'CSS در HTML', 'how inline, internal, and external CSS connect presentation to markup', 'وصل شدن CSS inline، internal و external به markup', 'you decide where styles should live for a page or project', 'وقتی تصمیم می‌گیرید styleهای صفحه یا پروژه کجا باشند', [['style attribute', 'applies one-off styles to one element', 'style تک‌باره را روی یک element اعمال می‌کند'], ['<style>', 'keeps page-specific CSS in the head', 'CSS مخصوص همان صفحه را در head نگه می‌دارد'], ['<link rel="stylesheet">', 'loads reusable external CSS', 'CSS خارجی قابل استفاده مجدد را load می‌کند']], ['HTML CSS', 'link stylesheet', 'internal CSS']),
  links: d('HTML links', 'لینک در HTML', 'how anchors connect pages, files, email addresses, and in-page sections', 'وصل کردن صفحه‌ها، فایل‌ها، email و بخش‌های داخلی با anchor', 'users need clear navigation or actions that move them somewhere else', 'وقتی کاربر باید با navigation روشن به مقصد دیگری برود', [['href', 'defines the link destination', 'مقصد link را تعریف می‌کند'], ['target / rel', 'controls new tabs and security relationship', 'تب جدید و رابطه امنیتی را کنترل می‌کند'], ['fragment id', 'jumps to a section such as #pricing', 'به بخشی مثل #pricing می‌پرد']], ['HTML links', 'href target rel', 'anchor links']),
  images: d('HTML images', 'تصویر در HTML', 'how img embeds visual content with accessible alternative text and stable sizing', 'قرار دادن image با alt دسترس‌پذیر و اندازه پایدار', 'a picture adds information, branding, charts, or decoration', 'وقتی تصویر اطلاعات، برندینگ، chart یا decoration اضافه می‌کند', [['src', 'points to the image file', 'به فایل تصویر اشاره می‌کند'], ['alt', 'describes meaningful images or marks decorative ones empty', 'تصویر معنادار را توصیف یا تزئینی را خالی می‌کند'], ['width / height', 'reserves layout space before loading', 'قبل از load شدن فضا رزرو می‌کند']], ['HTML images', 'img alt src', 'responsive images']),
  favicon: d('HTML favicon', 'فاوآیکن HTML', 'how browser tab icons are linked for brand recognition', 'وصل کردن icon تب مرورگر برای تشخیص برند', 'you want bookmarks, tabs, and mobile shortcuts to feel polished', 'وقتی tab، bookmark و shortcut موبایل باید حرفه‌ای دیده شوند', [['rel="icon"', 'registers an icon resource', 'یک icon resource ثبت می‌کند'], ['sizes', 'declares bitmap icon dimensions', 'ابعاد icon bitmap را اعلام می‌کند'], ['type', 'tells the browser the file MIME type', 'نوع MIME فایل را به مرورگر می‌گوید']], ['HTML favicon', 'rel icon', 'browser tab icon']),
  'page-title': d('HTML page title', 'عنوان صفحه HTML', 'how the title element names tabs, bookmarks, and search results', 'نام‌گذاری tab، bookmark و نتیجه جست‌وجو با title', 'a page needs a concise label outside the visible body', 'وقتی صفحه به label کوتاه بیرون از body نیاز دارد', [['<title>', 'sets the browser tab text', 'متن تب مرورگر را تعیین می‌کند'], ['unique title', 'distinguishes similar pages in search and history', 'صفحه‌های مشابه را در search و history جدا می‌کند'], ['title length', 'keeps important words visible', 'کلمات مهم را قابل مشاهده نگه می‌دارد']], ['HTML title', 'page title SEO', 'title element']),
  tables: d('HTML tables', 'جدول در HTML', 'how rows, cells, headers, and captions describe tabular data', 'توصیف داده جدولی با row، cell، header و caption', 'data has a row-and-column relationship, not just a visual grid', 'وقتی داده رابطه row و column دارد نه فقط grid ظاهری', [['<table>', 'wraps tabular data', 'داده جدولی را می‌پوشاند'], ['<th scope>', 'labels rows or columns for assistive tech', 'row یا column را برای ابزار کمکی label می‌کند'], ['<caption>', 'names the table for context', 'برای جدول context و نام فراهم می‌کند']], ['HTML tables', 'table th td caption', 'accessible tables']),
  lists: d('HTML lists', 'لیست در HTML', 'how ordered, unordered, and description lists express grouped items', 'بیان itemهای گروهی با ordered، unordered و description list', 'content is naturally a set, sequence, or glossary', 'وقتی محتوا به طور طبیعی مجموعه، ترتیب یا glossary است', [['<ul>', 'groups items where order does not matter', 'itemهایی را گروه می‌کند که ترتیب مهم نیست'], ['<ol>', 'groups ordered steps or rankings', 'مرحله‌ها یا رتبه‌های مرتب را گروه می‌کند'], ['<dl>', 'pairs terms with descriptions', 'term را با description جفت می‌کند']], ['HTML lists', 'ul ol dl li', 'ordered list unordered list']),
  'block-inline': d('block and inline elements', 'elementهای Block و Inline', 'how elements participate in normal document flow', 'نحوه حضور elementها در جریان عادی سند', 'layout surprises come from how elements occupy space', 'وقتی علت تغییرهای layout به نحوه اشغال فضا برمی‌گردد', [['block elements', 'usually start on a new line and fill width', 'معمولاً از خط جدید شروع می‌شوند و عرض را می‌گیرند'], ['inline elements', 'flow inside text without a line break', 'داخل متن بدون line break جریان دارند'], ['display CSS', 'can change visual layout without changing semantics', 'ظاهر layout را بدون تغییر semantics عوض می‌کند']], ['HTML block inline', 'div span display', 'HTML layout flow']),
  classes: d('HTML classes', 'کلاس در HTML', 'how reusable class names group elements for styling and behavior', 'گروه‌بندی elementها با class قابل استفاده مجدد برای styling و behavior', 'many elements share the same visual or scripted pattern', 'وقتی چند element pattern ظاهری یا scripted مشترک دارند', [['class', 'assigns one or more reusable names', 'یک یا چند نام قابل استفاده مجدد می‌دهد'], ['multiple classes', 'combine small styling responsibilities', 'چند مسئولیت کوچک style را ترکیب می‌کند'], ['CSS selector', 'targets class names with a dot', 'class را با نقطه target می‌کند']], ['HTML classes', 'class attribute', 'CSS class selector']),
  id: d('HTML id attribute', 'شناسه id در HTML', 'how one unique identifier targets labels, fragments, CSS, and scripts', 'هدف‌گیری label، fragment، CSS و script با یک شناسه یکتا', 'exactly one element needs to be named on a page', 'وقتی دقیقاً یک element در صفحه باید نام‌گذاری شود', [['id', 'must be unique in the document', 'در سند باید یکتا باشد'], ['for', 'connects a label to an input id', 'label را به id یک input وصل می‌کند'], ['#fragment', 'links directly to an element id', 'مستقیم به id یک element لینک می‌دهد']], ['HTML id', 'id attribute', 'fragment links']),
  iframes: d('HTML iframes', 'iframe در HTML', 'how another document can be embedded inside the current page', 'قرار دادن یک سند دیگر داخل صفحه فعلی', 'trusted external content such as maps or videos must appear inline', 'وقتی محتوای خارجی معتبر مثل map یا video باید inline دیده شود', [['src', 'sets the embedded page URL', 'URL صفحه embedded را تعیین می‌کند'], ['title', 'labels the frame for screen readers', 'frame را برای screen reader نام‌گذاری می‌کند'], ['loading="lazy"', 'defers offscreen frame loading', 'load شدن frame بیرون از دید را عقب می‌اندازد']], ['HTML iframe', 'iframe src title', 'embed page']),
  javascript: d('JavaScript in HTML', 'JavaScript در HTML', 'how script tags connect DOM behavior to markup', 'وصل کردن رفتار DOM به markup با script tag', 'a page needs interaction after the HTML loads', 'وقتی صفحه بعد از load شدن HTML به interaction نیاز دارد', [['<script>', 'runs or loads JavaScript', 'JavaScript را اجرا یا load می‌کند'], ['defer', 'loads scripts without blocking parsing', 'script را بدون blocking parsing load می‌کند'], ['DOM selector', 'finds elements by id, class, or tag', 'element را با id، class یا tag پیدا می‌کند']], ['HTML JavaScript', 'script tag defer', 'DOM events']),
  'file-paths': d('HTML file paths', 'مسیر فایل در HTML', 'how relative, root-relative, and absolute URLs locate resources', 'پیدا کردن resource با URL نسبی، root-relative و absolute', 'links, images, and stylesheets break after files move folders', 'وقتی link، image و stylesheet بعد از جابه‌جایی folder خراب می‌شوند', [['./file.png', 'starts from the current folder', 'از folder فعلی شروع می‌کند'], ['../file.png', 'moves up one folder before locating a file', 'یک folder بالا می‌رود و فایل را پیدا می‌کند'], ['/assets/app.css', 'starts from the site root', 'از root سایت شروع می‌کند']], ['HTML file paths', 'relative path', 'absolute URL']),
  head: d('HTML head element', 'بخش head در HTML', 'how metadata, title, viewport, styles, and resource hints live outside visible content', 'قرار گرفتن metadata، title، viewport، style و resource hint بیرون از محتوای visible', 'you configure the document before the browser paints body content', 'وقتی سند را قبل از نمایش body تنظیم می‌کنید', [['<meta charset>', 'declares character encoding early', 'encoding کاراکتر را زود اعلام می‌کند'], ['<title>', 'sets the document title', 'عنوان سند را تعیین می‌کند'], ['<link>', 'connects styles, icons, and preloads', 'style، icon و preload را وصل می‌کند']], ['HTML head', 'meta title link', 'HTML metadata']),
  layout: d('HTML layout', 'چیدمان HTML', 'how landmark elements divide pages into header, nav, main, aside, and footer', 'تقسیم صفحه با landmarkهایی مثل header، nav، main، aside و footer', 'a page needs recognizable regions before CSS grid or flexbox styling', 'وقتی صفحه قبل از CSS grid یا flexbox به regionهای روشن نیاز دارد', [['<header>', 'contains introductory page or section content', 'محتوای معرفی صفحه یا بخش را نگه می‌دارد'], ['<nav>', 'groups major navigation links', 'linkهای navigation اصلی را گروه می‌کند'], ['<main>', 'contains the unique main page content', 'محتوای اصلی یکتای صفحه را نگه می‌دارد']], ['HTML layout', 'header nav main footer', 'semantic layout']),
  responsive: d('responsive HTML', 'طراحی واکنش‌گرا در HTML', 'how markup supports screens of different widths before CSS takes over', 'پشتیبانی markup از عرض‌های مختلف صفحه قبل از ورود CSS', 'the same content must work on phone, tablet, and desktop', 'وقتی همان محتوا باید روی موبایل، تبلت و desktop کار کند', [['viewport meta', 'sets CSS pixels to device width', 'CSS pixel را با عرض دستگاه هماهنگ می‌کند'], ['srcset', 'offers image candidates for different widths', 'کاندید image برای عرض‌های مختلف می‌دهد'], ['picture', 'allows art direction by media query', 'art direction را با media query ممکن می‌کند']], ['HTML responsive', 'viewport meta', 'srcset picture']),
  computercode: d('HTML computer code elements', 'elementهای نمایش کد در HTML', 'how code, keyboard input, variables, and sample output are marked semantically', 'نشانه‌گذاری معنایی code، keyboard input، variable و خروجی نمونه', 'technical instructions must distinguish commands from normal prose', 'وقتی دستورهای فنی باید از متن عادی جدا شوند', [['<code>', 'marks inline code fragments', 'قطعه code inline را مشخص می‌کند'], ['<pre>', 'preserves spacing for blocks of code', 'فاصله‌های block code را حفظ می‌کند'], ['<kbd> / <samp>', 'marks user input and program output', 'ورودی کاربر و خروجی برنامه را مشخص می‌کند']], ['HTML code elements', 'code pre kbd samp', 'technical writing HTML']),
  semantics: d('semantic HTML', 'معناشناسی HTML', 'how elements describe the role of content instead of only its appearance', 'توصیف نقش محتوا با element به جای ظاهر صرف', 'accessibility, SEO, and maintainability depend on meaningful structure', 'وقتی accessibility، SEO و نگه‌داری به ساختار معنادار وابسته است', [['<article>', 'stands for independent reusable content', 'محتوای مستقل و قابل استفاده مجدد است'], ['<section>', 'groups a themed part with a heading', 'بخشی موضوعی با heading را گروه می‌کند'], ['<aside>', 'contains related but secondary material', 'محتوای مرتبط اما فرعی را نگه می‌دارد']], ['semantic HTML', 'article section aside', 'HTML accessibility SEO']),
  'style-guide': d('HTML style guide', 'راهنمای سبک HTML', 'how consistent lowercase tags, quoted attributes, and indentation keep markup maintainable', 'نگه‌داری markup با tagهای lowercase، attributeهای quoted و indentation یکدست', 'teams need HTML that looks predictable in reviews', 'وقتی تیم به HTML قابل پیش‌بینی در review نیاز دارد', [['lowercase tags', 'match common modern HTML style', 'با style رایج HTML مدرن هماهنگ است'], ['quoted attributes', 'avoid ambiguous values', 'از مقدارهای مبهم جلوگیری می‌کند'], ['indentation', 'shows nesting at a glance', 'تو در تو بودن را سریع نشان می‌دهد']], ['HTML style guide', 'HTML formatting', 'clean HTML']),
  entities: d('HTML entities', 'Entityهای HTML', 'how reserved characters and special spaces are written safely', 'نوشتن امن کاراکترهای رزروشده و فاصله‌های خاص', 'text must show symbols that HTML would otherwise parse as markup', 'وقتی متن باید symbolهایی را نشان دهد که HTML آن‌ها را markup می‌پندارد', [['&amp;', 'prints an ampersand', 'علامت ampersand را چاپ می‌کند'], ['&lt; / &gt;', 'prints less-than and greater-than signs', 'علامت‌های کوچکتر و بزرگتر را چاپ می‌کند'], ['&nbsp;', 'keeps words from breaking apart', 'جدا شدن کلمات را جلوگیری می‌کند']], ['HTML entities', 'amp lt gt nbsp', 'reserved characters HTML']),
  symbols: d('HTML symbols', 'نماد در HTML', 'how copyright, currency, math, and arrow symbols can be inserted', 'درج نمادهای copyright، currency، math و arrow', 'a keyboard does not provide the exact symbol you need', 'وقتی keyboard نماد دقیق مورد نیاز را ندارد', [['&copy;', 'prints the copyright symbol', 'نماد copyright را چاپ می‌کند'], ['&deg;', 'prints the degree symbol', 'نماد درجه را چاپ می‌کند'], ['&rarr;', 'prints a right arrow', 'فلش راست را چاپ می‌کند']], ['HTML symbols', 'copyright degree arrow', 'HTML entity symbols']),
  emojis: d('HTML emojis', 'ایموجی در HTML', 'how emoji characters display reliably in UTF-8 documents', 'نمایش قابل اعتماد emoji در سندهای UTF-8', 'emoji adds tone but should not replace accessible text', 'وقتی emoji حس متن را اضافه می‌کند اما نباید جای متن accessible را بگیرد', [['UTF-8', 'allows emoji characters in source files', 'emoji را در فایل source ممکن می‌کند'], ['aria-label', 'gives standalone emoji a text meaning', 'برای emoji مستقل معنی متنی می‌دهد'], ['decorative emoji', 'can be hidden when it adds no information', 'وقتی اطلاعاتی اضافه نمی‌کند می‌تواند hidden باشد']], ['HTML emojis', 'UTF-8 emoji', 'emoji accessibility']),
  charset: d('HTML charset', 'کدگذاری کاراکتر HTML', 'how UTF-8 prevents broken text in multilingual pages', 'جلوگیری UTF-8 از خراب شدن متن در صفحه چندزبانه', 'content includes Persian, English, symbols, or emoji', 'وقتی محتوا شامل فارسی، انگلیسی، symbol یا emoji است', [['<meta charset="UTF-8">', 'declares encoding near the top of head', 'encoding را نزدیک ابتدای head اعلام می‌کند'], ['UTF-8', 'covers most writing systems and emoji', 'بیشتر سیستم‌های نوشتاری و emoji را پوشش می‌دهد'], ['mojibake', 'the broken text caused by wrong encoding', 'متن خراب ناشی از encoding اشتباه است']], ['HTML charset', 'UTF-8 HTML', 'meta charset']),
  'url-encode': d('URL encoding in HTML', 'کدگذاری URL در HTML', 'how unsafe characters become percent-encoded inside links and query strings', 'تبدیل کاراکترهای ناامن به percent-encoding داخل link و query string', 'URLs contain spaces, Persian text, reserved symbols, or form query values', 'وقتی URL شامل فاصله، فارسی، symbol رزروشده یا query فرم است', [['%20', 'represents a space in a URL', 'فاصله را در URL نشان می‌دهد'], ['query string', 'passes key-value pairs after ?', 'جفت key-value را بعد از ? می‌فرستد'], ['encodeURIComponent()', 'encodes dynamic JavaScript values safely', 'مقدار dynamic در JavaScript را امن encode می‌کند']], ['HTML URL encoding', 'percent encoding', 'query string HTML']),
  xhtml: d('HTML and XHTML', 'HTML و XHTML', 'how modern HTML differs from stricter XML-style syntax', 'تفاوت HTML مدرن با syntax سخت‌گیرانه XML-style', 'you read old examples or integrate XML-like templates', 'وقتی مثال قدیمی می‌خوانید یا template شبیه XML دارید', [['HTML parsing', 'forgives some syntax mistakes', 'بعضی خطاهای syntax را تحمل می‌کند'], ['XHTML', 'requires well-formed XML syntax', 'syntax well-formed شبیه XML می‌خواهد'], ['void elements', 'do not need XML-style closing slash in HTML', 'در HTML به slash پایانی XML-style نیاز ندارند']], ['HTML XHTML', 'XHTML syntax', 'modern HTML']),
  div: d('HTML div element', 'عنصر div در HTML', 'how a generic container helps only when no semantic element fits', 'کاربرد container عمومی فقط وقتی element معنایی مناسب نیست', 'you need a styling wrapper without adding false meaning', 'وقتی wrapper ظاهری می‌خواهید بدون اینکه معنای غلط اضافه شود', [['<div>', 'groups content with no built-in meaning', 'محتوا را بدون معنای built-in گروه می‌کند'], ['class on div', 'makes generic wrappers targetable', 'wrapper عمومی را targetable می‌کند'], ['semantic alternative', 'should be checked before choosing div', 'قبل از div باید جایگزین معنایی بررسی شود']], ['HTML div', 'div element', 'semantic HTML div']),
  forms: d('HTML forms', 'فرم در HTML', 'how labels, controls, validation, and submit buttons collect user input', 'جمع‌آوری ورودی کاربر با label، control، validation و submit button', 'a page must send or process information from a user', 'وقتی صفحه باید اطلاعات کاربر را ارسال یا پردازش کند', [['<form>', 'wraps related controls for submission', 'controlهای مرتبط را برای submit می‌پوشاند'], ['<label for>', 'connects text to an input', 'متن را به input وصل می‌کند'], ['<button type="submit">', 'submits the form intentionally', 'فرم را به شکل هدفمند submit می‌کند']], ['HTML forms', 'form label input', 'accessible forms']),
  'form-attributes': d('HTML form attributes', 'attributeهای form در HTML', 'how action, method, autocomplete, and target control submission behavior', 'کنترل رفتار submit با action، method، autocomplete و target', 'the same fields must submit to the correct endpoint in the correct way', 'وقتی همان fieldها باید با روش درست به endpoint درست ارسال شوند', [['action', 'sets where form data goes', 'مشخص می‌کند داده فرم کجا می‌رود'], ['method', 'chooses GET or POST submission', 'ارسال GET یا POST را انتخاب می‌کند'], ['autocomplete', 'allows useful browser autofill', 'autofill مفید مرورگر را فعال می‌کند']], ['HTML form attributes', 'form action method', 'autocomplete form']),
  'form-elements': d('HTML form elements', 'elementهای فرم در HTML', 'how labels, inputs, selects, textareas, buttons, and fieldsets work together', 'همکاری label، input، select، textarea، button و fieldset', 'a form needs controls that match the question being asked', 'وقتی فرم به controlهای مناسب هر سؤال نیاز دارد', [['<input>', 'handles many single-value controls', 'بسیاری از controlهای تک‌مقداری را می‌سازد'], ['<select>', 'offers a controlled list of choices', 'لیست کنترل‌شده‌ای از گزینه‌ها می‌دهد'], ['<fieldset> / <legend>', 'groups related controls accessibly', 'controlهای مرتبط را accessible گروه می‌کند']], ['HTML form elements', 'input select textarea', 'fieldset legend']),
  'input-types': d('HTML input types', 'type های input در HTML', 'how choosing text, email, number, date, checkbox, radio, file, and submit changes behavior', 'تغییر رفتار با انتخاب text، email، number، date، checkbox، radio، file و submit', 'the browser should show the right keyboard, validation, and control UI', 'وقتی مرورگر باید keyboard، validation و UI مناسب نشان دهد', [['type="email"', 'validates email-like values and shows email keyboards', 'مقدار شبیه email را اعتبارسنجی و keyboard email نشان می‌دهد'], ['type="number"', 'provides numeric input controls and min/max support', 'کنترل عددی و min/max می‌دهد'], ['type="checkbox"', 'captures independent yes/no choices', 'انتخاب مستقل بله/خیر را می‌گیرد']], ['HTML input types', 'input type email number date', 'form controls'], { faSeoTitle: 'آموزش type های input در HTML | مستندات MEGA JS' }),
  'input-attributes': d('HTML input attributes', 'attributeهای input در HTML', 'how required, placeholder, autocomplete, min, max, and pattern improve controls', 'بهبود control با required، placeholder، autocomplete، min، max و pattern', 'a field needs constraints or hints before submission', 'وقتی field قبل از submit به constraint یا hint نیاز دارد', [['required', 'blocks empty required fields', 'field ضروری خالی را block می‌کند'], ['placeholder', 'shows a short hint, not a label replacement', 'hint کوتاه می‌دهد اما جای label نیست'], ['min / max / pattern', 'set numeric, date, or text constraints', 'constraint عددی، تاریخی یا متنی می‌سازد']], ['HTML input attributes', 'required placeholder pattern', 'input validation']),
  'input-form-attributes': d('HTML input form attributes', 'attributeهای form برای input در HTML', 'how controls can target or override form behavior individually', 'target یا override کردن رفتار form از خود control', 'one button or field must submit differently from the parent form', 'وقتی یک button یا field باید متفاوت از form والد submit شود', [['form', 'associates a control with a form by id', 'control را با id به form وصل می‌کند'], ['formaction', 'overrides the form action for one submit button', 'action فرم را برای یک submit button override می‌کند'], ['formmethod', 'overrides GET or POST for one submit button', 'GET یا POST را برای یک submit button override می‌کند']], ['HTML input form attributes', 'formaction formmethod', 'form attribute input']),
  graphics: d('HTML graphics', 'گرافیک در HTML', 'how canvas, SVG, and images cover different drawing needs', 'پوشش نیازهای مختلف گرافیک با canvas، SVG و image', 'visual information should be drawn, scaled, or embedded in the browser', 'وقتی اطلاعات بصری باید در مرورگر رسم، scale یا embed شود', [['<canvas>', 'draws pixels with JavaScript', 'pixel را با JavaScript رسم می‌کند'], ['<svg>', 'describes scalable vector shapes in markup', 'shapeهای vector مقیاس‌پذیر را در markup توصیف می‌کند'], ['<img>', 'embeds finished bitmap or vector files', 'فایل bitmap یا vector آماده را embed می‌کند']], ['HTML graphics', 'canvas SVG img', 'web graphics']),
  canvas: d('HTML canvas', 'Canvas در HTML', 'how JavaScript draws pixels, charts, games, or visual effects on a bitmap surface', 'رسم pixel، chart، game یا effect بصری با JavaScript روی سطح bitmap', 'you need dynamic drawing rather than static markup shapes', 'وقتی به drawing پویا نیاز دارید نه shape ثابت در markup', [['<canvas>', 'creates the drawing surface', 'سطح drawing را می‌سازد'], ['getContext("2d")', 'returns the 2D drawing API', 'API دوبعدی drawing را برمی‌گرداند'], ['fallback text', 'appears when canvas is unsupported', 'وقتی canvas پشتیبانی نشود نمایش داده می‌شود']], ['HTML canvas', 'canvas getContext 2d', 'JavaScript drawing']),
  svg: d('HTML SVG', 'SVG در HTML', 'how vector shapes are written directly in HTML and scale cleanly', 'نوشتن shapeهای vector مستقیم در HTML و scale شدن تمیز', 'icons, diagrams, and simple charts need sharp scalable graphics', 'وقتی icon، diagram یا chart ساده به گرافیک sharp و scalable نیاز دارد', [['<svg viewBox>', 'sets the internal coordinate system', 'سیستم مختصات داخلی را تعیین می‌کند'], ['<circle> / <rect>', 'draw basic vector shapes', 'shapeهای vector پایه رسم می‌کند'], ['<title>', 'labels the graphic accessibly', 'graphic را accessible نام‌گذاری می‌کند']], ['HTML SVG', 'svg viewBox circle rect', 'accessible SVG']),
  media: d('HTML media', 'رسانه در HTML', 'how audio, video, tracks, and embeds bring time-based content into pages', 'آوردن محتوای زمان‌مند با audio، video، track و embed به صفحه', 'a lesson, demo, podcast, or external player belongs inside the page', 'وقتی lesson، demo، podcast یا player خارجی باید داخل صفحه باشد', [['<video>', 'embeds video playback', 'پخش video را embed می‌کند'], ['<audio>', 'embeds audio playback', 'پخش audio را embed می‌کند'], ['<track>', 'adds captions or subtitles', 'caption یا subtitle اضافه می‌کند']], ['HTML media', 'video audio track', 'web media']),
  video: d('HTML video', 'ویدیو در HTML', 'how the video element plays files with controls, sources, posters, captions, and fallback text', 'پخش فایل با controls، source، poster، caption و fallback text', 'you host a video file and need accessible playback in the browser', 'وقتی فایل video را host می‌کنید و پخش accessible در مرورگر می‌خواهید', [['controls', 'shows built-in playback controls', 'کنترل‌های built-in پخش را نشان می‌دهد'], ['<source>', 'offers multiple video formats', 'چند فرمت video ارائه می‌کند'], ['<track kind="captions">', 'adds captions for accessibility', 'برای accessibility caption اضافه می‌کند']], ['HTML video', 'video controls source track', 'video captions HTML']),
  audio: d('HTML audio', 'صدا در HTML', 'how audio files play with controls, multiple sources, and fallback text', 'پخش فایل صوتی با controls، چند source و fallback text', 'you publish music, narration, pronunciation, or podcast clips', 'وقتی music، narration، pronunciation یا podcast منتشر می‌کنید', [['<audio controls>', 'creates an audio player', 'audio player می‌سازد'], ['<source>', 'offers alternate audio formats', 'فرمت‌های جایگزین audio می‌دهد'], ['fallback text', 'helps unsupported browsers', 'به مرورگرهای بدون پشتیبانی کمک می‌کند']], ['HTML audio', 'audio controls source', 'audio player HTML']),
  plugins: d('HTML plug-ins', 'افزونه‌ها در HTML', 'how old plugin patterns compare with modern object, embed, iframe, and native media', 'مقایسه pluginهای قدیمی با object، embed، iframe و media native', 'you maintain legacy embeds or show a PDF fallback', 'وقتی embed قدیمی را نگه‌داری می‌کنید یا fallback PDF می‌خواهید', [['<object>', 'embeds external resources with fallback content', 'resource خارجی را با fallback embed می‌کند'], ['<embed>', 'places external content with fewer fallback options', 'محتوای خارجی را با fallback کمتر قرار می‌دهد'], ['native media', 'usually replaces old plugin players', 'معمولاً جای playerهای plugin قدیمی را می‌گیرد']], ['HTML plugins', 'object embed', 'legacy HTML plugins']),
  youtube: d('YouTube videos in HTML', 'ویدیوهای YouTube در HTML', 'how iframe embeds YouTube players with responsive sizing and privacy options', 'embed کردن player YouTube با iframe، اندازه responsive و گزینه privacy', 'you use a hosted video platform instead of serving files yourself', 'وقتی به جای host کردن فایل از platform ویدیویی استفاده می‌کنید', [['iframe embed URL', 'loads the YouTube player', 'player YouTube را load می‌کند'], ['title', 'describes the embedded video', 'ویدیوی embedded را توصیف می‌کند'], ['youtube-nocookie.com', 'reduces tracking before playback', 'tracking قبل از پخش را کاهش می‌دهد']], ['HTML YouTube', 'YouTube iframe embed', 'responsive video embed']),
  apis: d('HTML APIs', 'APIهای HTML', 'how markup and JavaScript work with browser capabilities', 'همکاری markup و JavaScript با قابلیت‌های مرورگر', 'a page needs storage, location, workers, drag-and-drop, or live updates', 'وقتی صفحه به storage، location، worker، drag-and-drop یا update زنده نیاز دارد', [['navigator', 'exposes many browser capabilities', 'بسیاری از قابلیت‌های مرورگر را ارائه می‌کند'], ['localStorage', 'stores small client-side values', 'مقدارهای کوچک سمت کاربر را ذخیره می‌کند'], ['events', 'connect browser activity to handlers', 'فعالیت مرورگر را به handler وصل می‌کند']], ['HTML APIs', 'browser APIs', 'JavaScript HTML APIs']),
  'web-apis': d('HTML Web APIs', 'Web APIها در HTML', 'how JavaScript APIs such as Clipboard, Fetch, and DOM APIs extend pages', 'گسترش صفحه با APIهایی مثل Clipboard، Fetch و DOM', 'plain HTML needs controlled access to browser features', 'وقتی HTML ساده به دسترسی کنترل‌شده به قابلیت‌های مرورگر نیاز دارد', [['Clipboard API', 'copies or reads clipboard data with permission rules', 'clipboard را با قوانین permission می‌خواند یا می‌نویسد'], ['DOM API', 'finds and updates elements', 'elementها را پیدا و به‌روزرسانی می‌کند'], ['Fetch API', 'loads data from servers', 'داده را از server می‌گیرد']], ['HTML Web APIs', 'Clipboard API DOM', 'browser API tutorial']),
  geolocation: d('HTML Geolocation API', 'API موقعیت جغرافیایی در HTML', 'how location is requested only after user permission', 'درخواست location فقط بعد از permission کاربر', 'a map, delivery, weather, or store-locator feature truly needs location', 'وقتی map، delivery، weather یا store locator واقعاً به location نیاز دارد', [['navigator.geolocation', 'entry point for location requests', 'نقطه ورود درخواست location'], ['getCurrentPosition()', 'asks for one current location result', 'یک نتیجه location فعلی می‌خواهد'], ['coords', 'contains latitude, longitude, and accuracy', 'latitude، longitude و accuracy را نگه می‌دارد']], ['HTML geolocation', 'navigator geolocation', 'getCurrentPosition']),
  'drag-drop': d('HTML Drag and Drop API', 'Drag and Drop در HTML', 'how draggable elements send data to drop targets', 'ارسال data از element draggable به drop target', 'users should move cards, files, or items with a pointer', 'وقتی کاربر باید card، file یا item را با pointer جابه‌جا کند', [['draggable="true"', 'allows an element to start dragging', 'شروع drag را برای element ممکن می‌کند'], ['dragstart', 'stores data for the drag operation', 'data عملیات drag را ذخیره می‌کند'], ['drop', 'handles the result on the target', 'نتیجه را روی target مدیریت می‌کند']], ['HTML drag and drop', 'draggable dragstart drop', 'DataTransfer']),
  'web-storage': d('HTML Web Storage API', 'Web Storage در HTML', 'how localStorage and sessionStorage keep small values in the browser', 'نگه‌داری مقدارهای کوچک در مرورگر با localStorage و sessionStorage', 'preferences, drafts, or UI state should survive a reload', 'وقتی preference، draft یا UI state باید بعد از reload بماند', [['localStorage', 'persists until cleared', 'تا زمان پاک شدن باقی می‌ماند'], ['sessionStorage', 'persists for the current tab session', 'برای session همان tab باقی می‌ماند'], ['setItem() / getItem()', 'write and read string values', 'مقدارهای string را می‌نویسد و می‌خواند']], ['HTML web storage', 'localStorage sessionStorage', 'client storage']),
  'web-workers': d('HTML Web Workers API', 'Web Workerها در HTML', 'how heavy JavaScript runs away from the UI thread', 'اجرای JavaScript سنگین جدا از thread رابط کاربری', 'calculations would otherwise freeze typing, scrolling, or animation', 'وقتی محاسبه‌ها typing، scroll یا animation را freeze می‌کنند', [['new Worker()', 'starts a background script', 'یک script پس‌زمینه شروع می‌کند'], ['postMessage()', 'sends data between page and worker', 'data را بین page و worker می‌فرستد'], ['onmessage', 'receives results asynchronously', 'نتیجه را asynchronous دریافت می‌کند']], ['HTML web workers', 'Worker postMessage', 'JavaScript background thread']),
  sse: d('HTML Server-Sent Events', 'Server-Sent Events در HTML', 'how EventSource receives one-way live updates from a server', 'دریافت update زنده یک‌طرفه از server با EventSource', 'news, scores, build logs, or notifications stream from server to page', 'وقتی news، score، build log یا notification از server به page stream می‌شود', [['EventSource', 'opens a persistent event stream', 'یک stream event پایدار باز می‌کند'], ['message event', 'receives default server messages', 'پیام‌های پیش‌فرض server را می‌گیرد'], ['text/event-stream', 'server response format for SSE', 'فرمت response server برای SSE']], ['HTML Server-Sent Events', 'EventSource SSE', 'live updates HTML']),
  references: d('HTML references', 'مرجع‌های HTML', 'how reference pages help you look up exact elements, attributes, and events', 'جست‌وجوی دقیق element، attribute و event در صفحه‌های reference', 'you know the concept and need exact syntax or browser details', 'وقتی مفهوم را می‌دانید و syntax یا جزئیات مرورگر را می‌خواهید', [['tag reference', 'lists elements and their purpose', 'elementها و کاربردشان را فهرست می‌کند'], ['attribute reference', 'shows where attributes are valid', 'نشان می‌دهد attribute کجا معتبر است'], ['event reference', 'lists browser and user events', 'eventهای مرورگر و کاربر را فهرست می‌کند']], ['HTML references', 'HTML tag reference', 'HTML attributes reference']),
  'tag-list': d('HTML tag list', 'فهرست tagهای HTML', 'how elements are grouped by purpose so you can choose semantic markup', 'گروه‌بندی elementها بر اساس کاربرد برای انتخاب markup معنایی', 'you cannot remember which tag best matches the content role', 'وقتی به خاطر ندارید کدام tag با نقش محتوا بهتر است', [['document tags', 'html, head, body, main structure', 'ساختار اصلی html، head، body'], ['text tags', 'headings, paragraphs, emphasis, code', 'heading، paragraph، emphasis و code'], ['form/media tags', 'controls and embedded content', 'controlها و محتوای embedded']], ['HTML tag list', 'HTML tags', 'semantic tags']),
  'attributes-ref': d('HTML attribute reference', 'مرجع attributeهای HTML', 'how attributes configure elements and which elements accept them', 'تنظیم elementها با attribute و شناخت elementهای پذیرنده', 'you need the exact spelling, value type, or valid element', 'وقتی spelling، نوع مقدار یا element معتبر را می‌خواهید', [['global attributes', 'work on most HTML elements', 'روی بیشتر elementهای HTML کار می‌کنند'], ['element-specific attributes', 'belong only to certain tags', 'فقط به tagهای مشخص تعلق دارند'], ['boolean attributes', 'are true when present', 'وقتی حاضر باشند true هستند']], ['HTML attributes reference', 'global attributes', 'boolean attributes']),
  'global-attributes': d('HTML global attributes', 'attributeهای سراسری HTML', 'how id, class, style, title, hidden, lang, and data-* work almost everywhere', 'کاربرد تقریباً همه‌جایی id، class، style، title، hidden، lang و data-*', 'you need shared hooks, language hints, or custom data on any element', 'وقتی روی هر element به hook مشترک، hint زبان یا data سفارشی نیاز دارید', [['id / class', 'provide unique and reusable hooks', 'hook یکتا و قابل استفاده مجدد می‌دهند'], ['lang / dir', 'declare language and text direction', 'زبان و جهت متن را اعلام می‌کنند'], ['data-*', 'stores custom data for scripts', 'data سفارشی برای script نگه می‌دارد']], ['HTML global attributes', 'data attribute', 'id class title hidden']),
  'events-ref': d('HTML event reference', 'مرجع eventهای HTML', 'how user and browser events connect elements to JavaScript handlers', 'وصل کردن eventهای کاربر و مرورگر به handlerهای JavaScript', 'interaction requires reacting to clicks, input, submit, load, or drag events', 'وقتی interaction به واکنش به click، input، submit، load یا drag نیاز دارد', [['click', 'fires when a user activates an element', 'وقتی کاربر element را فعال کند رخ می‌دهد'], ['input', 'fires as form values change', 'هنگام تغییر مقدار form رخ می‌دهد'], ['submit', 'fires when a form is submitted', 'هنگام submit شدن form رخ می‌دهد']], ['HTML events reference', 'onclick input submit', 'JavaScript events HTML']),
};

const BASE_EXAMPLES = {
  introduction: `<article>
  <h1>Welcome to HTML</h1>
  <p>HTML uses elements to describe headings, paragraphs, links, images, forms, and more.</p>
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
    <meta charset="UTF-8">
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
  const result = document.querySelector('#result');
  document.querySelector('#locate').addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      result.value = pos.coords.latitude + ', ' + pos.coords.longitude;
    });
  });
</script>`,
  'drag-drop': `<div draggable="true" id="card">Drag me</div>
<div id="drop-zone">Drop here</div>
<script>
  const card = document.querySelector('#card');
  const dropZone = document.querySelector('#drop-zone');
  card.addEventListener('dragstart', (event) => event.dataTransfer.setData('text/plain', card.id));
  dropZone.addEventListener('dragover', (event) => event.preventDefault());
</script>`,
  'web-storage': `<label>
  Display name
  <input id="display-name" name="displayName">
</label>
<script>
  const displayName = document.querySelector('#display-name');
  displayName.value = localStorage.getItem('displayName') || '';
  displayName.addEventListener('input', () => localStorage.setItem('displayName', displayName.value));
</script>`,
  'web-workers': `<button id="calculate" type="button">Calculate</button>
<script>
  const worker = new Worker('/workers/calculate.js');
  const calculate = document.querySelector('#calculate');
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
  'events-ref': `<button id="save" type="button">Save</button>
<input id="search" aria-label="Live search">
<script>
  document.querySelector('#save').addEventListener('click', () => alert('Saved'));
  document.querySelector('#search').addEventListener('input', (event) => console.log(event.target.value));
</script>`,
};

const EXAMPLE_SETS = {
  introduction: [
    BASE_EXAMPLES.introduction,
    `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>HTML Introduction</title>
  </head>
  <body>
    <h1>My first document</h1>
    <p>The browser builds a page from this structure.</p>
  </body>
</html>`,
    `<main>
  <h1>Recipe notes</h1>
  <p>HTML describes the role of this text.</p>
  <a href="ingredients.html">View ingredients</a>
</main>`,
  ],
  headings: [
    BASE_EXAMPLES.headings,
    `<article>
  <h1>Learning HTML</h1>
  <section>
    <h2>Why headings matter</h2>
    <p>Users scan headings before reading details.</p>
  </section>
  <section>
    <h2>Practice outline</h2>
    <h3>Write one h1</h3>
    <h3>Add h2 sections</h3>
  </section>
</article>`,
    `<!-- Avoid skipping from h1 to h4 just for a smaller look. -->
<h1>Product guide</h1>
<h2>Installation</h2>
<h3>System requirements</h3>
<h2>Troubleshooting</h2>`,
  ],
  links: [
    BASE_EXAMPLES.links,
    `<nav aria-label="Documentation">
  <a href="/docs/html/introduction">HTML intro</a>
  <a href="/docs/html/forms" aria-current="page">Forms</a>
  <a href="/docs/html/references">References</a>
</nav>`,
    `<a href="report.pdf" download>Download the PDF report</a>
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Open external site
</a>
<section id="summary">
  <h2>Summary</h2>
</section>`,
  ],
  forms: [
    BASE_EXAMPLES.forms,
    `<form action="/contact" method="post">
  <fieldset>
    <legend>Contact details</legend>
    <label for="name">Name</label>
    <input id="name" name="name" autocomplete="name" required>
    <label for="message">Message</label>
    <textarea id="message" name="message" rows="4"></textarea>
  </fieldset>
  <button type="submit">Send message</button>
</form>`,
    `<form action="/search" method="get" role="search">
  <label for="q">Search docs</label>
  <input id="q" name="q" type="search" placeholder="HTML tables">
  <button type="submit">Search</button>
</form>`,
  ],
  'input-types': [
    BASE_EXAMPLES['input-types'],
    `<form action="/checkout" method="post">
  <label for="email">Email</label>
  <input id="email" name="email" type="email" autocomplete="email" required>
  <label for="quantity">Quantity</label>
  <input id="quantity" name="quantity" type="number" min="1" max="10" value="1">
  <button type="submit">Continue</button>
</form>`,
    `<fieldset>
  <legend>Preferences</legend>
  <label><input type="checkbox" name="newsletter" checked> Email newsletter</label>
  <label><input type="radio" name="plan" value="basic"> Basic</label>
  <label><input type="radio" name="plan" value="pro"> Pro</label>
  <label>Avatar <input type="file" name="avatar" accept="image/*"></label>
</fieldset>`,
  ],
  video: [
    BASE_EXAMPLES.video,
    `<video controls preload="metadata" poster="course-poster.jpg">
  <source src="course-intro.webm" type="video/webm">
  <source src="course-intro.mp4" type="video/mp4">
  <p>Your browser cannot play this video. <a href="course-intro.mp4">Download it</a>.</p>
</video>`,
    `<figure>
  <video controls width="720">
    <source src="demo.mp4" type="video/mp4">
    <track src="demo-fa.vtt" kind="subtitles" srclang="fa" label="فارسی">
    <track src="demo-en.vtt" kind="captions" srclang="en" label="English">
  </video>
  <figcaption>Course introduction with captions.</figcaption>
</figure>`,
  ],
  canvas: [
    BASE_EXAMPLES.canvas,
    `<canvas id="progress" width="320" height="120">Progress chart fallback</canvas>
<script>
  const progress = document.querySelector('#progress');
  const ctx = progress.getContext('2d');
  ctx.fillStyle = '#e5e7eb';
  ctx.fillRect(20, 45, 280, 30);
  ctx.fillStyle = '#22c55e';
  ctx.fillRect(20, 45, 190, 30);
</script>`,
    `<canvas id="badge" width="200" height="200" aria-label="Canvas badge"></canvas>
<script>
  const badge = document.querySelector('#badge');
  const ctx = badge.getContext('2d');
  ctx.beginPath();
  ctx.arc(100, 100, 70, 0, Math.PI * 2);
  ctx.fillStyle = 'gold';
  ctx.fill();
  ctx.strokeText('HTML', 76, 105);
</script>`,
  ],
};

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
        'آموزش HTML کامل با مسیر قدم‌به‌قدم شبیه W3Schools؛ از مبانی و متن تا فرم، رسانه، API و مرجع‌ها برای ساخت صفحات واقعی و استاندارد.',
      ], 'fa'),
      en: completeSeoDescription([
        'Learn HTML with a W3Schools-style step-by-step path from basics to forms, media, APIs, and references for building real standard web pages.',
      ], 'en'),
    },
    description: {
      fa: 'مسیر کامل یادگیری HTML با درس‌های مرحله‌به‌مرحله، مثال‌های واقعی و نکته‌های کاربردی.',
      en: 'A complete HTML learning path with step-by-step lessons, real examples, and practical notes.',
    },
    sources: META_SOURCES,
    nav: navForMeta(),
  };
}

function frontmatter(page, locale) {
  const detail = detailFor(page);
  const isFa = locale === 'fa';
  const title = isFa ? page.faTitle : page.enTitle;
  const description = isFa
    ? `در این درس ${detail.faSkill} را با مثال‌های واقعی HTML تمرین می‌کنید.`
    : `Learn ${detail.skill} with real HTML examples and practical checks.`;
  const seoTitle = isFa
    ? detail.faSeoTitle ?? `آموزش ${detail.faSubject} | مستندات MEGA JS`
    : detail.enSeoTitle ?? `${primaryEnglishKeyword(page, detail)} Tutorial | MEGA JS Docs`;
  const seoDescription = pageSeoDescription(page, locale);
  const keywords = isFa
    ? ['آموزش HTML', detail.faSubject, ...detail.faKeywords].join(', ')
    : ['HTML tutorial', ...detail.keywords].join(', ');

  return [
    '---',
    `title: "${yamlString(title)}"`,
    `description: "${yamlString(description)}"`,
    `seoTitle: "${yamlString(seoTitle)}"`,
    `seoDescription: "${yamlString(seoDescription)}"`,
    `keywords: "${yamlString(keywords)}"`,
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
  const detail = detailFor(page);
  const examples = examplesFor(page, detail);
  const next = nextPage
    ? `Next step: continue with **${nextPage.enTitle}** so the next concept builds on this one.`
    : 'Next step: revisit the reference pages and improve one real project page for semantics, accessibility, and validation.';

  return [
    `# ${page.enTitle}`,
    '',
    `In ${page.enTitle}, you learn ${detail.skill}. The focus is ${detail.subject}, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.`,
    '',
    `Use this lesson when ${detail.when}. Read each example slowly, then change one value at a time to see what the browser does.`,
    '',
    `## ${englishWhatHeading(page, detail)}`,
    '',
    ...englishConceptBullets(page, detail),
    '',
    '## Syntax and examples',
    '',
    'Start with the smallest useful pattern, then compare it with the more complete examples below.',
    '',
    ...examples.flatMap((example, index) => [
      `### Example ${index + 1}: ${exampleHeading(page, detail, index, 'en')}`,
      '',
      codeFence(example),
      '',
    ]),
    '## Example explained',
    '',
    ...englishExplanation(page, detail),
    '',
    '## More examples and options',
    '',
    '| Syntax or option | What it does | When to use it |',
    '| --- | --- | --- |',
    ...detail.terms.map((term) => `| \`${term.syntax}\` | ${term.purpose} | Use it while practicing ${detail.subject}. |`),
    '',
    '## Browser, accessibility, and SEO notes',
    '',
    ...qualityNotes(page, detail, 'en'),
    '',
    '## Common mistakes',
    '',
    ...commonMistakes(page, detail, 'en'),
    '',
    '## Practice tip',
    '',
    detail.practice ?? `Create a file named \`${page.slug}.html\`, copy the first example, then add one extra line that uses \`${detail.terms[0].syntax}\` correctly in your own content.`,
    '',
    '## Next step',
    '',
    next,
    '',
  ].join('\n');
}

function persianBody(page, nextPage) {
  const detail = detailFor(page);
  const examples = examplesFor(page, detail);
  const next = nextPage
    ? `گام بعدی: درس **${nextPage.faTitle}** را بخوانید تا مفهوم بعدی روی همین پایه ساخته شود.`
    : 'گام بعدی: به صفحه‌های reference برگردید و یک صفحه واقعی را از نظر semantics، accessibility و validation بهتر کنید.';

  return [
    `# ${page.faTitle}`,
    '',
    `${page.faTitle} روی ${detail.faSkill} تمرکز دارد. در این درس درباره ${detail.faSubject} با مثال‌های واقعی HTML کار می‌کنید، نه فقط تعریف‌های کوتاه و حفظی.`,
    '',
    `این موضوع زمانی مهم می‌شود که ${detail.faWhen}. هر مثال را اجرا کنید، سپس یک attribute یا مقدار را تغییر دهید تا رفتار مرورگر را ببینید.`,
    '',
    `## چیستی ${detail.faSubject}`,
    '',
    ...persianConceptBullets(page, detail),
    '',
    '## Syntax و مثال‌ها',
    '',
    'ابتدا ساده‌ترین الگوی کاربردی را ببینید و بعد آن را با مثال‌های کامل‌تر مقایسه کنید.',
    '',
    ...examples.flatMap((example, index) => [
      `### مثال ${index + 1}: ${exampleHeading(page, detail, index, 'fa')}`,
      '',
      codeFence(example),
      '',
    ]),
    '## توضیح مثال',
    '',
    ...persianExplanation(page, detail),
    '',
    '## مثال‌های بیشتر و جدول گزینه‌ها',
    '',
    '| Syntax یا گزینه | کاربرد | زمان استفاده |',
    '| --- | --- | --- |',
    ...detail.terms.map((term) => `| \`${term.syntax}\` | ${term.faPurpose} | هنگام تمرین ${detail.faSubject} از آن استفاده کنید. |`),
    '',
    '## نکته‌های مرورگر، accessibility و SEO',
    '',
    ...qualityNotes(page, detail, 'fa'),
    '',
    '## اشتباه‌های رایج',
    '',
    ...commonMistakes(page, detail, 'fa'),
    '',
    '## نکته تمرینی',
    '',
    detail.faPractice ?? `یک فایل به نام \`${page.slug}.html\` بسازید، مثال اول را کپی کنید و سپس یک خط جدید اضافه کنید که \`${detail.terms[0].syntax}\` را درست در محتوای خودتان به کار ببرد.`,
    '',
    '## گام بعدی',
    '',
    next,
    '',
  ].join('\n');
}

function englishWhatHeading(page, detail) {
  if (page.slug === 'introduction') {
    return 'What is HTML?';
  }

  const pluralSlugs = new Set([
    'headings',
    'links',
    'images',
    'tables',
    'lists',
    'classes',
    'iframes',
    'entities',
    'symbols',
    'emojis',
    'forms',
    'form-attributes',
    'form-elements',
    'input-types',
    'input-attributes',
    'input-form-attributes',
    'graphics',
    'apis',
    'web-apis',
    'web-workers',
    'references',
    'global-attributes',
  ]);
  return pluralSlugs.has(page.slug)
    ? `What are ${detail.subject}?`
    : `What is ${detail.subject}?`;
}

function englishConceptBullets(page, detail) {
  return [
    `- It gives ${detail.subject} a clear semantic purpose instead of relying on visual styling alone.`,
    `- The important syntax in this chapter includes ${formatTermList(detail.terms, 'en')}.`,
    `- It improves real pages when ${detail.when}, especially after you test the result in a browser.`,
    `- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.`,
  ];
}

function persianConceptBullets(page, detail) {
  return [
    `- این بخش به ${page.faTitle} نقش روشن می‌دهد و فقط به ظاهر CSS تکیه نمی‌کند.`,
    `- syntaxهای مهم این درس شامل ${formatTermList(detail.terms, 'fa')} است.`,
    `- وقتی ${detail.faWhen}، markup درست باعث می‌شود صفحه قابل اعتمادتر و قابل نگه‌داری‌تر باشد.`,
    '- HTML خوب به CSS و JavaScript target پایدار می‌دهد و هم‌زمان معنا را برای کاربر و ابزارهای کمکی حفظ می‌کند.',
  ];
}

function englishExplanation(page, detail) {
  return [
    `- The first example shows the core pattern for ${detail.subject} without unrelated layout code.`,
    `- Pay attention to \`${detail.terms[0].syntax}\`: ${detail.terms[0].purpose}.`,
    `- The second and third examples show how the same idea fits into a larger page with ${supportingDetails(page, 'en')}.`,
    '- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.',
  ];
}

function persianExplanation(page, detail) {
  return [
    `- مثال اول pattern اصلی ${detail.faSubject} را بدون کد layout اضافی نشان می‌دهد.`,
    `- به \`${detail.terms[0].syntax}\` دقت کنید: ${detail.terms[0].faPurpose}.`,
    `- مثال دوم و سوم نشان می‌دهند همین ایده در صفحه بزرگ‌تر چطور کنار ${supportingDetails(page, 'fa')} قرار می‌گیرد.`,
    '- اگر خروجی مرورگر غیرمنتظره بود، element را در DevTools inspect کنید و DOM را با source markup مقایسه کنید.',
  ];
}

function supportingDetails(page, locale) {
  if (locale === 'fa') {
    if (page.sectionSlug === 'forms') return 'label، validation، name و controlهای مناسب';
    if (page.sectionSlug === 'media') return 'source، controls، caption و fallback مناسب';
    if (page.sectionSlug === 'graphics') return 'fallback، title، اندازه canvas یا viewBox';
    if (page.sectionSlug === 'apis') return 'event handler، permission، state و مدیریت خطا';
    if (page.sectionSlug === 'references') return 'syntax دقیق، کاربرد و محدودیت‌های هر مورد';
    return 'متن معنادار، attributeهای پایدار و ساختار قابل فهم';
  }

  if (page.sectionSlug === 'forms') return 'labels, validation, names, and suitable controls';
  if (page.sectionSlug === 'media') return 'sources, controls, captions, and useful fallback';
  if (page.sectionSlug === 'graphics') return 'fallback text, titles, canvas size, or viewBox details';
  if (page.sectionSlug === 'apis') return 'event handlers, permissions, state, and error handling';
  if (page.sectionSlug === 'references') return 'exact syntax, purpose, and limitations for each item';
  return 'meaningful text, stable attributes, and readable structure';
}

function qualityNotes(page, detail, locale) {
  const section = page.sectionSlug;
  if (locale === 'fa') {
    const shared = [
      `- پشتیبانی مرورگر برای ${detail.faSubject} را با یک فایل کوچک تست کنید؛ default style همیشه معیار کیفیت markup نیست.`,
      '- برای accessibility، متن قابل فهم، label، alt، caption یا title را فقط وقتی لازم است ولی دقیق بنویسید.',
    ];
    if (section === 'forms') {
      return [...shared, '- فرم را فقط با keyboard هم امتحان کنید؛ label، focus order و پیام‌های validation باید واضح باشند.'];
    }
    if (section === 'media') {
      return [...shared, '- برای media از controls، caption/subtitle و fallback link استفاده کنید و autoplay را با احتیاط به کار ببرید.'];
    }
    if (section === 'graphics') {
      return [...shared, '- برای graphics، محتوای جایگزین یا title مناسب فراهم کنید؛ canvas بدون fallback برای screen reader کافی نیست.'];
    }
    if (section === 'apis') {
      return [...shared, '- بسیاری از Web APIها به HTTPS، permission یا پشتیبانی مرورگر وابسته‌اند؛ همیشه حالت خطا را هم مدیریت کنید.'];
    }
    return [...shared, '- برای SEO، heading، link text، title و ساختار معنایی را طوری بنویسید که بدون CSS هم قابل فهم باشد.'];
  }

  const shared = [
    `- Test ${detail.subject} in a small file; default browser styling is not the same thing as good markup.`,
    '- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.',
  ];
  if (section === 'forms') {
    return [...shared, '- Test forms with only the keyboard; labels, focus order, and validation messages should be obvious.'];
  }
  if (section === 'media') {
    return [...shared, '- Use controls, captions or subtitles, and fallback links for media; be careful with autoplay.'];
  }
  if (section === 'graphics') {
    return [...shared, '- Provide alternative text or titles for graphics; canvas without fallback is not enough for screen readers.'];
  }
  if (section === 'apis') {
    return [...shared, '- Many Web APIs depend on HTTPS, permissions, or browser support, so always handle errors.'];
  }
  return [...shared, '- For SEO, write headings, link text, titles, and semantic structure that still make sense without CSS.'];
}

function commonMistakes(page, detail, locale) {
  if (locale === 'fa') {
    return [
      `- استفاده از ${detail.faSubject} فقط برای ظاهر، در حالی که باید نقش محتوایی آن روشن باشد.`,
      `- فراموش کردن \`${detail.terms[0].syntax}\` یا نوشتن مقدارهایی که با هدف واقعی صفحه هماهنگ نیستند.`,
      '- کپی کردن مثال بدون تغییر متن، path، id، name یا label بر اساس پروژه خودتان.',
      '- تست نکردن نتیجه با keyboard، صفحه کوچک موبایل و DevTools.',
    ];
  }

  return [
    `- Using ${detail.subject} only for appearance instead of matching the content role.`,
    `- Forgetting \`${detail.terms[0].syntax}\` or writing values that do not match the real page purpose.`,
    '- Copying an example without changing text, paths, ids, names, or labels for your project.',
    '- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.',
  ];
}

function examplesFor(page, detail) {
  const explicit = EXAMPLE_SETS[page.slug];
  if (explicit) {
    return explicit;
  }

  const base = BASE_EXAMPLES[page.slug] ?? fallbackSnippet(page, detail);
  return [
    base,
    optionsSnippet(page, detail),
    completePracticeDocument(page, detail, base),
  ];
}

function optionsSnippet(page, detail) {
  const rows = detail.terms.map((term) => `    <tr>
      <td><code>${escapeHtml(term.syntax)}</code></td>
      <td>${escapeHtml(term.purpose)}</td>
    </tr>`).join('\n');

  return `<section class="${page.slug}-notes" aria-labelledby="${page.slug}-title">
  <h2 id="${page.slug}-title">${escapeHtml(page.enTitle)} options</h2>
  <table>
    <caption>Key syntax for ${escapeHtml(detail.subject)}</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
${rows}
    </tbody>
  </table>
</section>`;
}

function completePracticeDocument(page, detail, base) {
  if (/<!doctype html>/i.test(base)) {
    return `<main>
  <h1>${escapeHtml(page.enTitle)} checklist</h1>
  <p>Open DevTools and verify that ${escapeHtml(detail.subject)} is represented in the DOM.</p>
  <ul>
${detail.terms.map((term) => `    <li><code>${escapeHtml(term.syntax)}</code> - ${escapeHtml(term.purpose)}</li>`).join('\n')}
  </ul>
</main>`;
  }

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${escapeHtml(page.enTitle)} practice</title>
  </head>
  <body>
${indent(base.trim(), 4)}
  </body>
</html>`;
}

function fallbackSnippet(page, detail) {
  return `<section class="${page.slug}">
  <h2>${escapeHtml(page.enTitle)}</h2>
  <p>Practice ${escapeHtml(detail.subject)} by editing this example.</p>
</section>`;
}

function exampleHeading(page, detail, index, locale) {
  const en = ['Core pattern', 'Options in context', 'Complete practice page'];
  const fa = ['الگوی اصلی', 'گزینه‌ها در context', 'صفحه تمرینی کامل'];
  if (page.slug === 'input-types') {
    return locale === 'fa'
      ? ['inputهای رایج', 'فرم checkout', 'checkbox، radio و file'][index]
      : ['Common input controls', 'Checkout form', 'Checkbox, radio, and file input'][index];
  }
  if (page.slug === 'video') {
    return locale === 'fa'
      ? ['source و track', 'fallback قابل دانلود', 'caption چندزبانه'][index]
      : ['Sources and tracks', 'Downloadable fallback', 'Multilingual captions'][index];
  }
  if (page.slug === 'canvas') {
    return locale === 'fa'
      ? ['مستطیل ساده', 'نوار پیشرفت', 'رسم badge'][index]
      : ['Simple rectangle', 'Progress bar', 'Drawing a badge'][index];
  }
  return (locale === 'fa' ? fa : en)[index] ?? detail.subject;
}

function pageSeoDescription(page, locale) {
  const detail = detailFor(page);
  if (locale === 'fa') {
    const keyword = detail.faSubject.includes('HTML') ? detail.faSubject : `${detail.faSubject} در HTML`;
    return completeSeoDescription([
      `آموزش ${keyword} با مثال‌های قدم‌به‌قدم، جدول syntax، خطاهای رایج و تمرین عملی برای ساخت صفحه‌های استاندارد و قابل دسترس.`,
      `آموزش ${keyword} همراه مثال واقعی، توضیح syntax، نکته accessibility و تمرین کوتاه برای استفاده در پروژه‌های وب استاندارد.`,
    ], 'fa');
  }

  const keyword = primaryEnglishKeyword(page, detail);
  return completeSeoDescription([
    `Learn ${keyword} with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages.`,
    `Master ${keyword} with practical examples, focused syntax notes, browser checks, and a short exercise for real accessible web pages.`,
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

    if (candidate.length > max) {
      const trimmed = trimSeoDescription(candidate, max);
      if (trimmed.length >= min && trimmed.length <= max) {
        return trimmed;
      }
    }
  }

  const short = normalized
    .filter((candidate) => candidate.length < min)
    .sort((a, b) => b.length - a.length)[0];
  if (short) {
    for (const filler of fillers) {
      const combined = `${short}${filler}`.replace(/\s+/g, ' ').trim();
      if (combined.length >= min && combined.length <= max) {
        return combined;
      }
    }
    return trimSeoDescription(`${short}${fillers[0]}`.replace(/\s+/g, ' ').trim(), max);
  }

  const shortest = normalized.sort((a, b) => a.length - b.length)[0];
  return trimSeoDescription(shortest, max);
}

function trimSeoDescription(value, max) {
  if (value.length <= max) {
    return value;
  }

  const trimmed = value
    .slice(0, max - 1)
    .replace(/\s+\S*$/u, '')
    .replace(/\s+(and|or|with|for|to|of|in|a|the)$/iu, '')
    .replace(/\s+(و|یا|با|برای|در|از|به|که)$/u, '')
    .replace(/[،؛,:-]+$/u, '')
    .trim();
  return `${trimmed}.`;
}

function detailFor(page) {
  const detail = DETAILS[page.slug];
  if (!detail) {
    throw new Error(`Missing topic detail for HTML doc slug: ${page.slug}`);
  }
  return detail;
}

function primaryEnglishKeyword(page, detail) {
  return page.enTitle ?? detail.keywords[0];
}

function formatTermList(terms, locale) {
  const formatted = terms.map((term) => `\`${term.syntax}\``);
  if (formatted.length <= 1) {
    return formatted[0] ?? (locale === 'fa' ? 'syntax اصلی' : 'the main syntax');
  }
  return `${formatted.slice(0, -1).join(', ')} ${locale === 'fa' ? 'و' : 'and'} ${formatted.at(-1)}`;
}

function codeFence(code) {
  return ['```html', code.trim(), '```'].join('\n');
}

function indent(value, spaces) {
  const prefix = ' '.repeat(spaces);
  return value.split('\n').map((line) => `${prefix}${line}`).join('\n');
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

async function ensureCompleteCoverage(pages) {
  const seen = new Set();
  for (const page of pages) {
    if (seen.has(page.slug)) {
      throw new Error(`Duplicate HTML doc slug: ${page.slug}`);
    }
    seen.add(page.slug);
    detailFor(page);
  }
}

async function writeDocs() {
  await ensureCompleteCoverage(RAW_PAGES);

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
