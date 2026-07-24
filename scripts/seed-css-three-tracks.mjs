import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const DOCS_ROOT = path.join(ROOT, 'apps/web/content/docs/css');
const LOCALES = ['fa', 'en'];

const SOURCE_W3 = {
  name: 'W3Schools CSS',
  url: 'https://www.w3schools.com/css/default.asp',
};
const SOURCE_MDN = {
  name: 'MDN CSS',
  url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
};
const SOURCE_W3C = {
  name: 'W3C CSS',
  url: 'https://www.w3.org/Style/CSS/',
};
const SOURCE_W3C_SNAPSHOT = {
  name: 'CSS Snapshot 2024',
  url: 'https://www.w3.org/TR/css-2024/',
};

const TRACK_SOURCES = {
  learn: [
    {
      name: 'W3Schools CSS Tutorial',
      url: 'https://www.w3schools.com/css/default.asp',
    },
    SOURCE_MDN,
  ],
  reference: [
    {
      name: 'MDN Web Docs — CSS',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
  ],
  official: [SOURCE_W3C, SOURCE_W3C_SNAPSHOT],
};

function t(syntax, en, fa) {
  return { syntax, en, fa };
}

function page(slug, enTitle, faTitle, enFocus, faFocus, terms, keywords = []) {
  return { slug, enTitle, faTitle, enFocus, faFocus, terms, keywords };
}

const LEARN_INTRO = page(
  'introduction',
  'Introduction to CSS',
  'مقدمه CSS',
  'what CSS does, how rules reach elements, and how the cascade turns declarations into computed style',
  'اینکه CSS چه می‌کند، ruleها چگونه به elementها می‌رسند و cascade چگونه declarationها را به computed style تبدیل می‌کند',
  [
    t('selector { property: value; }', 'connects a selector to one or more declarations', 'یک selector را به یک یا چند declaration وصل می‌کند'),
    t('cascade', 'chooses the winning declaration from competing rules', 'از میان ruleهای رقیب declaration برنده را انتخاب می‌کند'),
    t('computed style', 'the final value the browser applies after resolving CSS', 'مقدار نهایی است که مرورگر بعد از resolve کردن CSS اعمال می‌کند'),
  ],
  ['CSS introduction', 'CSS tutorial', 'cascade computed style'],
);

const LEARN_SECTIONS = [
  section('syntax-basics', 'CSS Syntax Basics', 'مبانی syntax در CSS', 'writing valid CSS rules, connecting them to HTML, and reading selectors confidently', 'نوشتن ruleهای معتبر CSS، وصل کردن آن‌ها به HTML و خواندن selectorها با اعتماد', [
    ['syntax', 'CSS Syntax', 'Syntax در CSS', 'the shape of selectors, declarations, properties, values, and rule blocks', 'شکل selector، declaration، property، value و blockهای rule', [
      t('h1 { color: blue; }', 'targets h1 elements and sets a declaration', 'عنصرهای h1 را target می‌کند و یک declaration می‌دهد'),
      t('property: value', 'pairs a CSS feature with its chosen value', 'یک ویژگی CSS را با مقدار انتخاب‌شده جفت می‌کند'),
      t(';', 'separates declarations inside a rule', 'declarationها را داخل rule جدا می‌کند'),
    ]],
    ['selectors', 'CSS Selectors', 'Selectorها در CSS', 'choosing elements by type, class, id, attribute, state, and relationship', 'انتخاب elementها با type، class، id، attribute، state و رابطه', [
      t('.card', 'selects elements with a card class', 'elementهای دارای class کارت را انتخاب می‌کند'),
      t('#main', 'selects the element with a unique id', 'element دارای id یکتا را انتخاب می‌کند'),
      t('article > h2', 'selects direct child headings', 'headingهای فرزند مستقیم را انتخاب می‌کند'),
    ]],
    ['how-to', 'How To Add CSS', 'روش افزودن CSS', 'using inline, internal, and external CSS while keeping production styles maintainable', 'استفاده از CSS inline، internal و external همراه نگه‌داری‌پذیری styleهای production', [
      t('<link rel="stylesheet">', 'loads a reusable stylesheet', 'یک stylesheet قابل استفاده مجدد را load می‌کند'),
      t('<style>', 'keeps page-level demo CSS with the HTML', 'CSS دمو یا مخصوص صفحه را کنار HTML نگه می‌دارد'),
      t('style=""', 'adds one-off inline declarations', 'declarationهای inline و تک‌باره اضافه می‌کند'),
    ]],
    ['comments', 'CSS Comments', 'کامنت‌ها در CSS', 'leaving useful notes in stylesheets without changing rendering', 'نوشتن یادداشت مفید در stylesheet بدون تغییر rendering', [
      t('/* ... */', 'wraps a CSS comment', 'یک comment در CSS می‌سازد'),
      t('TODO', 'marks a styling decision to revisit', 'یک تصمیم style را برای بازبینی علامت می‌زند'),
      t('section notes', 'document layout or token intent', 'هدف layout یا token را مستند می‌کند'),
    ]],
    ['colors', 'CSS Colors', 'رنگ‌ها در CSS', 'using named colors, hex, rgb, hsl, alpha, and modern color functions', 'استفاده از رنگ‌های named، hex، rgb، hsl، alpha و تابع‌های رنگ مدرن', [
      t('#2563eb', 'sets an RGB color with hex notation', 'یک رنگ RGB را با notation هگز تعیین می‌کند'),
      t('rgb(37 99 235 / .9)', 'sets RGB with alpha in modern syntax', 'RGB را همراه alpha با syntax مدرن تعیین می‌کند'),
      t('hsl(220 85% 56%)', 'sets hue, saturation, and lightness', 'hue، saturation و lightness را تعیین می‌کند'),
    ]],
  ]),
  section('backgrounds-borders', 'CSS Backgrounds and Borders', 'پس‌زمینه و border در CSS', 'building visual surfaces with backgrounds, spacing, dimensions, borders, outlines, and the box model', 'ساخت سطح‌های visual با background، فاصله، اندازه، border، outline و box model', [
    ['backgrounds', 'CSS Backgrounds', 'Backgroundها در CSS', 'painting colors, images, gradients, repeats, sizes, and attachment behavior behind content', 'رنگ، image، gradient، repeat، size و رفتار attachment را پشت محتوا paint کردن', [
      t('background-color', 'paints the element background color', 'رنگ پس‌زمینه element را paint می‌کند'),
      t('background-image', 'adds an image or gradient layer', 'یک لایه image یا gradient اضافه می‌کند'),
      t('background-size: cover', 'scales an image to cover the box', 'image را برای پوشاندن box مقیاس می‌دهد'),
    ]],
    ['borders', 'CSS Borders', 'Borderها در CSS', 'drawing edges with width, style, color, radius, and logical sides', 'رسم لبه‌ها با width، style، color، radius و سمت‌های logical', [
      t('border: 1px solid #ddd', 'sets border width, style, and color', 'width، style و color برای border تعیین می‌کند'),
      t('border-radius', 'rounds the corners of a box', 'گوشه‌های box را گرد می‌کند'),
      t('border-inline', 'targets logical inline edges', 'لبه‌های logical در جهت inline را target می‌کند'),
    ]],
    ['margins', 'CSS Margins', 'Marginها در CSS', 'creating outer spacing and understanding margin collapse in normal flow', 'ساخت فاصله بیرونی و درک margin collapse در normal flow', [
      t('margin', 'sets space outside the border', 'فضای بیرون border را تعیین می‌کند'),
      t('margin: auto', 'absorbs free inline space for centering', 'فضای آزاد inline را برای centering جذب می‌کند'),
      t('margin-block', 'sets logical vertical margins', 'marginهای logical عمودی را تعیین می‌کند'),
    ]],
    ['padding', 'CSS Padding', 'Padding در CSS', 'creating inner spacing between content and border without changing relationships outside', 'ساخت فاصله داخلی بین content و border بدون تغییر رابطه‌های بیرونی', [
      t('padding', 'sets space inside the border', 'فضای داخل border را تعیین می‌کند'),
      t('padding-inline', 'sets logical left/right spacing', 'فاصله logical چپ/راست را تعیین می‌کند'),
      t('box-sizing', 'controls how padding affects dimensions', 'کنترل می‌کند padding چگونه روی dimension اثر بگذارد'),
    ]],
    ['height-width', 'CSS Height and Width', 'Height و Width در CSS', 'setting fixed, fluid, minimum, and maximum dimensions for resilient components', 'تعیین dimensionهای ثابت، fluid، minimum و maximum برای componentهای پایدار', [
      t('width', 'sets the preferred inline size', 'اندازه inline ترجیحی را تعیین می‌کند'),
      t('max-width', 'caps growth on wide screens', 'رشد را در صفحه‌های عریض محدود می‌کند'),
      t('min-height', 'reserves useful block space', 'فضای block مفید رزرو می‌کند'),
    ]],
    ['box-model', 'CSS Box Model', 'Box Model در CSS', 'how content, padding, border, and margin combine into layout boxes', 'اینکه content، padding، border و margin چگونه boxهای layout را می‌سازند', [
      t('content box', 'contains text, images, and child boxes', 'متن، image و boxهای فرزند را نگه می‌دارد'),
      t('padding box', 'wraps content plus inner spacing', 'content و فاصله داخلی را می‌پوشاند'),
      t('border box', 'includes content, padding, and border', 'content، padding و border را شامل می‌شود'),
    ]],
    ['outline', 'CSS Outline', 'Outline در CSS', 'drawing focus and emphasis rings that do not consume layout space', 'رسم ringهای focus و تاکید که فضای layout مصرف نمی‌کنند', [
      t('outline', 'draws a line outside the border edge', 'خطی بیرون border edge رسم می‌کند'),
      t('outline-offset', 'adds space between border and outline', 'بین border و outline فاصله می‌دهد'),
      t(':focus-visible', 'styles keyboard-relevant focus', 'focus مرتبط با keyboard را style می‌کند'),
    ]],
  ]),
  section('text-fonts', 'CSS Text and Fonts', 'متن و فونت در CSS', 'styling readable text, font families, icons, links, lists, and tables', 'style دادن متن خوانا، font family، icon، link، list و table', [
    ['text', 'CSS Text', 'متن در CSS', 'controlling alignment, decoration, transform, spacing, line height, and wrapping', 'کنترل alignment، decoration، transform، spacing، line-height و wrapping', [
      t('text-align', 'aligns inline content within a block', 'محتوای inline را داخل block هم‌تراز می‌کند'),
      t('line-height', 'sets rhythm and readable line spacing', 'ریتم و فاصله خط خوانا تعیین می‌کند'),
      t('text-wrap', 'controls wrapping behavior for text', 'رفتار wrap متن را کنترل می‌کند'),
    ]],
    ['fonts', 'CSS Fonts', 'Fontها در CSS', 'choosing font families, sizes, weights, styles, and scalable typography units', 'انتخاب font family، size، weight، style و unitهای typography مقیاس‌پذیر', [
      t('font-family', 'selects font fallbacks', 'زنجیره fallback فونت را انتخاب می‌کند'),
      t('font-size: 1rem', 'sizes text relative to root settings', 'اندازه متن را نسبت به root تعیین می‌کند'),
      t('font-weight', 'sets stroke weight such as 400 or 700', 'weight مثل 400 یا 700 را تعیین می‌کند'),
    ]],
    ['icons', 'CSS Icons', 'Iconها در CSS', 'styling icon fonts, inline SVG, spacing, color inheritance, and accessible labels', 'style دادن icon font، SVG inline، فاصله، color inheritance و label دسترس‌پذیر', [
      t('currentColor', 'lets icons inherit text color', 'به icon اجازه می‌دهد رنگ متن را inherit کند'),
      t('.icon', 'creates a reusable icon hook', 'hook قابل استفاده مجدد برای icon می‌سازد'),
      t('aria-hidden', 'hides decorative icons from assistive tech', 'icon تزئینی را از ابزار کمکی پنهان می‌کند'),
    ]],
    ['links', 'CSS Links', 'Linkها در CSS', 'styling link states without hiding affordance, focus, or visited behavior', 'style دادن stateهای link بدون پنهان کردن affordance، focus یا visited', [
      t('a:hover', 'styles a pointer hover state', 'state hover با pointer را style می‌کند'),
      t('a:focus-visible', 'keeps keyboard focus visible', 'focus کیبورد را visible نگه می‌دارد'),
      t('a:visited', 'styles links the user has visited', 'linkهای دیده‌شده را style می‌کند'),
    ]],
    ['lists', 'CSS Lists', 'Listها در CSS', 'customizing markers, indentation, spacing, and list layout while preserving semantics', 'سفارشی کردن marker، indentation، spacing و layout لیست همراه حفظ semantics', [
      t('list-style', 'sets marker type, position, or image', 'نوع، position یا image برای marker تعیین می‌کند'),
      t('::marker', 'styles list item markers', 'markerهای آیتم لیست را style می‌کند'),
      t('padding-inline-start', 'controls logical list indentation', 'indentation منطقی لیست را کنترل می‌کند'),
    ]],
    ['tables', 'CSS Tables', 'Tableها در CSS', 'styling real tabular data with borders, spacing, captions, and responsive wrappers', 'style دادن داده جدولی واقعی با border، spacing، caption و wrapper واکنش‌گرا', [
      t('border-collapse', 'controls shared table borders', 'borderهای مشترک جدول را کنترل می‌کند'),
      t('caption-side', 'places the table caption', 'جای caption جدول را تعیین می‌کند'),
      t('overflow-x: auto', 'allows wide tables to scroll safely', 'به جدول عریض اجازه scroll امن می‌دهد'),
    ]],
  ]),
  section('layout-basics', 'CSS Layout Basics', 'چیدمان پایه در CSS', 'controlling normal flow, display modes, positioning, stacking, overflow, floats, and selector relationships', 'کنترل normal flow، display modeها، positioning، stacking، overflow، float و رابطه‌های selector', [
    ['display', 'CSS Display', 'Display در CSS', 'choosing block, inline, flex, grid, none, and flow-root display behavior', 'انتخاب رفتار display مثل block، inline، flex، grid، none و flow-root', [
      t('display: block', 'starts a block formatting context participant', 'یک participant در block formatting context می‌سازد'),
      t('display: flex', 'creates a flex formatting context', 'یک flex formatting context می‌سازد'),
      t('display: none', 'removes the box and descendants from layout', 'box و descendants را از layout خارج می‌کند'),
    ]],
    ['max-width', 'CSS Max-width', 'Max-width در CSS', 'limiting line length and component growth while keeping layouts fluid', 'محدود کردن طول خط و رشد component همراه fluid ماندن layout', [
      t('max-width: 70ch', 'limits readable text measure', 'measure خوانای متن را محدود می‌کند'),
      t('width: min(100%, 64rem)', 'combines fluid and capped sizing', 'sizing سیال و محدود را ترکیب می‌کند'),
      t('margin-inline: auto', 'centers a capped block', 'یک block محدود را center می‌کند'),
    ]],
    ['position', 'CSS Position', 'Position در CSS', 'placing boxes with static, relative, absolute, fixed, and sticky positioning', 'جای‌گذاری boxها با positionهای static، relative، absolute، fixed و sticky', [
      t('position: relative', 'creates an offset context and containing block', 'context offset و containing block می‌سازد'),
      t('position: absolute', 'places a box relative to a containing block', 'box را نسبت به containing block قرار می‌دهد'),
      t('position: sticky', 'sticks within a scroll container', 'داخل scroll container می‌چسبد'),
    ]],
    ['z-index', 'CSS Z-index', 'Z-index در CSS', 'managing stacking order and stacking contexts for layered interfaces', 'مدیریت ترتیب stacking و stacking contextها برای interfaceهای لایه‌ای', [
      t('z-index', 'orders positioned boxes in a stacking context', 'boxهای positioned را در stacking context مرتب می‌کند'),
      t('stacking context', 'isolates z-index comparisons', 'مقایسه z-index را isolate می‌کند'),
      t('isolation: isolate', 'creates a deliberate stacking context', 'stacking context عمدی می‌سازد'),
    ]],
    ['overflow', 'CSS Overflow', 'Overflow در CSS', 'handling clipped content, scroll containers, and visible overflow safely', 'مدیریت محتوای clipped، scroll container و overflow visible به شکل امن', [
      t('overflow: auto', 'adds scrolling when needed', 'در صورت نیاز scrolling اضافه می‌کند'),
      t('overflow: hidden', 'clips overflowing content', 'محتوای overflowing را clip می‌کند'),
      t('overflow-wrap', 'breaks long inline text when needed', 'متن inline بلند را در صورت نیاز می‌شکند'),
    ]],
    ['float', 'CSS Float', 'Float در CSS', 'understanding legacy float layout, text wrapping, and clearing', 'درک layout قدیمی float، wrap شدن متن و clearing', [
      t('float: inline-start', 'floats a box to the logical start side', 'box را به سمت شروع logical float می‌کند'),
      t('clear: both', 'moves below previous floats', 'زیر floatهای قبلی می‌رود'),
      t('flow-root', 'contains floats without clearfix hacks', 'floatها را بدون clearfix hack نگه می‌دارد'),
    ]],
    ['inline-block', 'CSS Inline-block', 'Inline-block در CSS', 'mixing inline flow with width, height, padding, and vertical alignment', 'ترکیب جریان inline با width، height، padding و vertical alignment', [
      t('display: inline-block', 'flows inline but accepts box dimensions', 'inline جریان دارد اما dimensionهای box را می‌پذیرد'),
      t('vertical-align', 'aligns inline-level boxes', 'boxهای inline-level را align می‌کند'),
      t('white-space', 'controls gaps caused by inline formatting', 'gapهای ناشی از inline formatting را کنترل می‌کند'),
    ]],
    ['align', 'CSS Align', 'Align در CSS', 'using modern alignment properties across flex, grid, and block layout', 'استفاده از propertyهای alignment مدرن در flex، grid و block layout', [
      t('align-items', 'aligns items on the cross axis', 'itemها را روی cross axis align می‌کند'),
      t('justify-content', 'distributes space on the main axis', 'فضا را روی main axis توزیع می‌کند'),
      t('place-content', 'shorthand for align and justify content', 'shorthand برای align-content و justify-content است'),
    ]],
    ['combinators', 'CSS Combinators', 'Combinatorها در CSS', 'selecting descendants, children, siblings, and adjacent elements precisely', 'انتخاب دقیق descendant، child، sibling و element مجاور', [
      t('A B', 'selects descendants', 'descendantها را انتخاب می‌کند'),
      t('A > B', 'selects direct children', 'فرزندهای مستقیم را انتخاب می‌کند'),
      t('A + B', 'selects the next adjacent sibling', 'sibling مجاور بعدی را انتخاب می‌کند'),
    ]],
    ['pseudo-class', 'CSS Pseudo-classes', 'Pseudo-classها در CSS', 'styling states, structural positions, and user interactions', 'style دادن stateها، موقعیت‌های ساختاری و تعامل‌های کاربر', [
      t(':hover', 'matches pointer hover state', 'state hover با pointer را match می‌کند'),
      t(':focus-visible', 'matches useful keyboard focus', 'focus قابل استفاده کیبورد را match می‌کند'),
      t(':nth-child()', 'matches elements by sibling position', 'elementها را با موقعیت sibling match می‌کند'),
    ]],
    ['pseudo-element', 'CSS Pseudo-elements', 'Pseudo-elementها در CSS', 'styling generated pieces such as before, after, marker, and first line', 'style دادن قطعه‌های generated مثل before، after، marker و first line', [
      t('::before', 'creates generated content before an element', 'content generated را قبل از element می‌سازد'),
      t('::after', 'creates generated content after an element', 'content generated را بعد از element می‌سازد'),
      t('::selection', 'styles selected text', 'متن انتخاب‌شده را style می‌کند'),
    ]],
    ['opacity', 'CSS Opacity', 'Opacity در CSS', 'controlling transparency and understanding stacking and accessibility effects', 'کنترل شفافیت و درک اثر آن روی stacking و accessibility', [
      t('opacity: .75', 'makes an entire element subtree translucent', 'کل subtree یک element را نیمه‌شفاف می‌کند'),
      t('rgba()', 'adds alpha to a single color value', 'alpha را به یک مقدار رنگ اضافه می‌کند'),
      t('visibility', 'hides without removing layout space', 'بدون حذف فضای layout پنهان می‌کند'),
    ]],
  ]),
  section('ui-patterns', 'CSS UI Patterns', 'الگوهای UI در CSS', 'building common interface patterns with selectors, forms, counters, units, specificity, and functions', 'ساخت patternهای رایج interface با selector، form، counter، unit، specificity و functionها', [
    ['navigation-bars', 'CSS Navigation Bars', 'Navigation bar در CSS', 'styling horizontal and vertical navigation with hover, focus, active states, and responsive spacing', 'style دادن navigation افقی و عمودی با hover، focus، active state و فاصله responsive', [
      t('nav a', 'targets navigation links', 'linkهای navigation را target می‌کند'),
      t('[aria-current="page"]', 'styles the current page link', 'link صفحه فعلی را style می‌کند'),
      t('gap', 'sets spacing between nav items', 'فاصله بین itemهای nav را تعیین می‌کند'),
    ]],
    ['dropdowns', 'CSS Dropdowns', 'Dropdownها در CSS', 'creating layered menus with positioning, hover/focus states, and keyboard-aware structure', 'ساخت menuهای لایه‌ای با positioning، stateهای hover/focus و ساختار keyboard-aware', [
      t('.menu:hover .panel', 'reveals a panel during hover', 'panel را هنگام hover نمایش می‌دهد'),
      t('position: absolute', 'places the dropdown layer', 'لایه dropdown را جای‌گذاری می‌کند'),
      t(':focus-within', 'keeps menus open for keyboard focus', 'menu را برای focus کیبورد باز نگه می‌دارد'),
    ]],
    ['image-gallery', 'CSS Image Gallery', 'گالری تصویر در CSS', 'arranging media cards with object-fit, grid, captions, hover states, and responsive columns', 'چیدن cardهای media با object-fit، grid، caption، hover state و columnهای responsive', [
      t('object-fit: cover', 'crops media to fill a frame', 'media را برای پر کردن frame crop می‌کند'),
      t('grid-template-columns', 'creates gallery columns', 'columnهای گالری را می‌سازد'),
      t('aspect-ratio', 'reserves consistent media frames', 'frameهای media یکدست رزرو می‌کند'),
    ]],
    ['image-sprites', 'CSS Image Sprites', 'Image sprite در CSS', 'using one image file with background-position for small icons and legacy optimization', 'استفاده از یک فایل image با background-position برای iconهای کوچک و optimization قدیمی', [
      t('background-position', 'moves the sprite sheet behind the box', 'sprite sheet را پشت box جابه‌جا می‌کند'),
      t('background-size', 'scales the sprite sheet predictably', 'sprite sheet را قابل پیش‌بینی scale می‌کند'),
      t('width / height', 'sets the icon viewport', 'viewport icon را تعیین می‌کند'),
    ]],
    ['attr-selectors', 'CSS Attribute Selectors', 'Selectorهای attribute در CSS', 'matching attributes exactly, partially, by prefix, suffix, token, or language', 'match کردن attributeها به شکل exact، partial، prefix، suffix، token یا language', [
      t('[type="email"]', 'matches an exact attribute value', 'یک مقدار attribute دقیق را match می‌کند'),
      t('[href^="https"]', 'matches a value prefix', 'prefix مقدار را match می‌کند'),
      t('[data-state~="open"]', 'matches a space-separated token', 'یک token جداشده با فاصله را match می‌کند'),
    ]],
    ['forms', 'CSS Forms', 'Formها در CSS', 'styling controls, labels, validation states, focus rings, and accessible spacing', 'style دادن control، label، validation state، focus ring و فاصله دسترس‌پذیر', [
      t('input:invalid', 'styles invalid form controls', 'controlهای نامعتبر form را style می‌کند'),
      t('accent-color', 'sets native control accent color', 'accent color controlهای native را تعیین می‌کند'),
      t('fieldset', 'groups related controls visually', 'controlهای مرتبط را visual گروه می‌کند'),
    ]],
    ['counters', 'CSS Counters', 'Counterها در CSS', 'numbering headings, steps, cards, and generated labels with CSS counters', 'شماره‌گذاری heading، step، card و labelهای generated با counterهای CSS', [
      t('counter-reset', 'creates or resets a counter', 'counter را می‌سازد یا reset می‌کند'),
      t('counter-increment', 'increments a counter per element', 'counter را برای هر element افزایش می‌دهد'),
      t('counter()', 'prints the current counter value', 'مقدار فعلی counter را چاپ می‌کند'),
    ]],
    ['website-layout', 'CSS Website Layout', 'Layout سایت در CSS', 'assembling header, nav, main, sidebar, cards, and footer into a responsive page', 'چیدن header، nav، main، sidebar، card و footer در یک صفحه responsive', [
      t('grid-template-areas', 'names layout regions', 'regionهای layout را نام‌گذاری می‌کند'),
      t('minmax()', 'sets flexible track limits', 'limitهای flexible برای track تعیین می‌کند'),
      t('@media', 'changes layout at viewport conditions', 'layout را در conditionهای viewport تغییر می‌دهد'),
    ]],
    ['units', 'CSS Units', 'Unitها در CSS', 'choosing px, rem, em, %, vw, vh, ch, and modern viewport units deliberately', 'انتخاب آگاهانه px، rem، em، درصد، vw، vh، ch و unitهای viewport مدرن', [
      t('rem', 'scales from the root font size', 'از font-size ریشه scale می‌شود'),
      t('em', 'scales from the current font size', 'از font-size فعلی scale می‌شود'),
      t('vh / vw', 'scale from viewport dimensions', 'از dimensionهای viewport scale می‌شود'),
    ]],
    ['specificity', 'CSS Specificity', 'Specificity در CSS', 'predicting which selector wins before source order and cascade layers are considered', 'پیش‌بینی selector برنده قبل از source order و cascade layer', [
      t('0-1-0', 'class-level specificity weight', 'وزن specificity در سطح class'),
      t(':where()', 'adds no specificity', 'specificity اضافه نمی‌کند'),
      t('#id', 'adds id-level specificity', 'specificity در سطح id اضافه می‌کند'),
    ]],
    ['important', 'CSS !important', '!important در CSS', 'understanding priority escalation and why maintainable CSS avoids routine important flags', 'درک بالا بردن priority و چرایی پرهیز CSS نگه‌داری‌پذیر از important روزمره', [
      t('!important', 'raises declaration priority in its cascade origin', 'priority declaration را در origin خودش بالا می‌برد'),
      t('cascade layer', 'can organize priority without important', 'می‌تواند priority را بدون important سازمان دهد'),
      t('specificity', 'still matters among competing important rules', 'بین ruleهای important رقیب همچنان مهم است'),
    ]],
    ['math-functions', 'CSS Math Functions', 'Functionهای ریاضی CSS', 'using calc, min, max, and clamp for fluid but bounded values', 'استفاده از calc، min، max و clamp برای مقدارهای سیال اما محدود', [
      t('calc()', 'combines CSS values with math', 'مقدارهای CSS را با math ترکیب می‌کند'),
      t('min()', 'chooses the smallest value', 'کوچک‌ترین مقدار را انتخاب می‌کند'),
      t('clamp()', 'sets minimum, preferred, and maximum values', 'minimum، preferred و maximum تعیین می‌کند'),
    ]],
  ]),
  section('advanced', 'Advanced CSS', 'CSS پیشرفته', 'using modern visual effects, custom properties, transforms, transitions, animations, media queries, and UI modules', 'استفاده از effectهای visual مدرن، custom property، transform، transition، animation، media query و moduleهای UI', [
    ['rounded-corners', 'CSS Rounded Corners', 'گوشه‌های گرد در CSS', 'creating soft corners with border-radius values, pills, circles, and logical radii', 'ساخت گوشه‌های نرم با border-radius، pill، circle و radiusهای logical', [
      t('border-radius', 'rounds all corners', 'همه گوشه‌ها را گرد می‌کند'),
      t('border-start-start-radius', 'rounds a logical corner', 'یک گوشه logical را گرد می‌کند'),
      t('999px', 'often creates pill-shaped controls', 'اغلب controlهای pill شکل می‌سازد'),
    ]],
    ['border-images', 'CSS Border Images', 'Border image در CSS', 'painting borders from sliced images or gradients for decorative frames', 'paint کردن border از image یا gradient برش‌خورده برای frame تزئینی', [
      t('border-image-source', 'sets the image or gradient source', 'source تصویر یا gradient را تعیین می‌کند'),
      t('border-image-slice', 'defines how the image is sliced', 'تعریف می‌کند image چگونه slice شود'),
      t('border-image-repeat', 'controls edge repetition', 'تکرار لبه‌ها را کنترل می‌کند'),
    ]],
    ['gradients', 'CSS Gradients', 'Gradientها در CSS', 'painting linear, radial, and conic gradients without image assets', 'paint کردن gradientهای linear، radial و conic بدون asset تصویری', [
      t('linear-gradient()', 'paints a gradient along a line', 'gradient را روی یک خط paint می‌کند'),
      t('radial-gradient()', 'paints from a center point outward', 'از نقطه مرکز به بیرون paint می‌کند'),
      t('conic-gradient()', 'paints around a center angle', 'دور زاویه مرکزی paint می‌کند'),
    ]],
    ['shadows', 'CSS Shadows', 'Shadowها در CSS', 'adding elevation and text depth with box-shadow, text-shadow, and layered shadows', 'افزودن elevation و عمق متن با box-shadow، text-shadow و shadowهای لایه‌ای', [
      t('box-shadow', 'adds shadow around an element box', 'اطراف box یک element shadow اضافه می‌کند'),
      t('text-shadow', 'adds shadow behind glyphs', 'پشت glyphها shadow اضافه می‌کند'),
      t('filter: drop-shadow()', 'shadows alpha shapes', 'shapeهای alpha را shadow می‌دهد'),
    ]],
    ['text-effects', 'CSS Text Effects', 'Effectهای متن در CSS', 'handling overflow, wrapping, shadows, gradients, and writing modes for expressive text', 'مدیریت overflow، wrapping، shadow، gradient و writing mode برای متن expressive', [
      t('text-overflow: ellipsis', 'signals clipped inline text', 'متن inline clip شده را نشان می‌دهد'),
      t('overflow-wrap: anywhere', 'breaks long words safely', 'کلمه‌های بلند را امن می‌شکند'),
      t('background-clip: text', 'clips a background to text glyphs', 'background را به glyphهای متن clip می‌کند'),
    ]],
    ['web-fonts', 'CSS Web Fonts', 'Web fontها در CSS', 'loading custom fonts with @font-face, fallbacks, weights, display strategy, and performance in mind', 'load کردن font سفارشی با @font-face، fallback، weight، استراتژی display و توجه به performance', [
      t('@font-face', 'defines a downloadable font family', 'یک font family قابل دانلود تعریف می‌کند'),
      t('font-display', 'controls swap and fallback behavior', 'رفتار swap و fallback را کنترل می‌کند'),
      t('woff2', 'modern compressed web font format', 'فرمت modern و فشرده web font'),
    ]],
    ['transforms-2d', 'CSS 2D Transforms', 'Transformهای دوبعدی CSS', 'moving, scaling, rotating, and skewing boxes without affecting normal layout flow', 'جابجایی، scale، rotate و skew کردن box بدون اثر بر normal flow', [
      t('transform: translateX()', 'moves a box visually on the x axis', 'box را visual روی محور x جابه‌جا می‌کند'),
      t('scale()', 'resizes a box visually', 'box را به شکل visual resize می‌کند'),
      t('rotate()', 'rotates around transform-origin', 'حول transform-origin می‌چرخاند'),
    ]],
    ['transforms-3d', 'CSS 3D Transforms', 'Transformهای سه‌بعدی CSS', 'using perspective, 3D rotation, transform style, and backface visibility', 'استفاده از perspective، rotate سه‌بعدی، transform-style و backface visibility', [
      t('perspective', 'adds depth to 3D transformed children', 'به فرزندهای transformed سه‌بعدی depth می‌دهد'),
      t('rotateY()', 'rotates around the y axis', 'حول محور y می‌چرخاند'),
      t('transform-style: preserve-3d', 'keeps child transforms in 3D space', 'transformهای فرزند را در فضای 3D نگه می‌دارد'),
    ]],
    ['transitions', 'CSS Transitions', 'Transitionها در CSS', 'animating property changes between states with duration, delay, and easing', 'animate کردن تغییر property بین stateها با duration، delay و easing', [
      t('transition-property', 'chooses the animated properties', 'propertyهای animated را انتخاب می‌کند'),
      t('transition-duration', 'sets how long the change takes', 'مدت تغییر را تعیین می‌کند'),
      t('transition-timing-function', 'sets easing for the change', 'easing تغییر را تعیین می‌کند'),
    ]],
    ['animations', 'CSS Animations', 'Animationها در CSS', 'creating keyframe timelines with duration, iteration, direction, and fill behavior', 'ساخت timelineهای keyframe با duration، iteration، direction و fill behavior', [
      t('@keyframes', 'defines animation steps', 'stepهای animation را تعریف می‌کند'),
      t('animation-duration', 'sets one animation cycle length', 'طول یک cycle animation را تعیین می‌کند'),
      t('animation-iteration-count', 'sets how often animation repeats', 'تعداد repeat شدن animation را تعیین می‌کند'),
    ]],
    ['tooltips', 'CSS Tooltips', 'Tooltipها در CSS', 'showing small contextual hints with positioning, pseudo-elements, and focus support', 'نمایش hint کوچک contextual با positioning، pseudo-element و پشتیبانی focus', [
      t('[data-tooltip]', 'stores tooltip text in markup', 'متن tooltip را در markup نگه می‌دارد'),
      t('::after', 'renders the tooltip bubble', 'bubble tooltip را render می‌کند'),
      t(':focus-visible', 'opens hints for keyboard users', 'hint را برای کاربر کیبورد باز می‌کند'),
    ]],
    ['object-fit', 'CSS Object-fit', 'Object-fit در CSS', 'fitting replaced content like images and videos into fixed media frames', 'جا دادن replaced content مثل image و video داخل frameهای ثابت media', [
      t('object-fit: cover', 'fills the frame while cropping', 'frame را با crop پر می‌کند'),
      t('object-fit: contain', 'fits all content inside the frame', 'کل content را داخل frame جا می‌دهد'),
      t('object-position', 'chooses the visible focal point', 'نقطه focal قابل مشاهده را انتخاب می‌کند'),
    ]],
    ['masking', 'CSS Masking', 'Masking در CSS', 'hiding parts of an element with alpha masks, gradients, and SVG mask sources', 'پنهان کردن بخش‌هایی از element با maskهای alpha، gradient و SVG', [
      t('mask-image', 'sets the alpha mask source', 'source mask alpha را تعیین می‌کند'),
      t('mask-size', 'sizes the mask layer', 'لایه mask را size می‌کند'),
      t('clip-path', 'clips to a geometric shape', 'به یک shape هندسی clip می‌کند'),
    ]],
    ['buttons', 'CSS Buttons', 'Buttonها در CSS', 'styling clickable controls with states, spacing, typography, focus, and motion restraint', 'style دادن controlهای clickable با state، spacing، typography، focus و motion کنترل‌شده', [
      t('.button', 'creates a reusable button class', 'یک class قابل استفاده مجدد برای button می‌سازد'),
      t(':active', 'styles the pressed state', 'state فشرده را style می‌کند'),
      t('disabled', 'needs visual and semantic treatment', 'به treatment visual و semantic نیاز دارد'),
    ]],
    ['pagination', 'CSS Pagination', 'Pagination در CSS', 'styling page navigation lists with current state, spacing, hit targets, and responsive wrapping', 'style دادن لیست navigation صفحه با current state، spacing، hit target و wrap responsive', [
      t('.pagination', 'groups page links', 'linkهای صفحه را گروه می‌کند'),
      t('[aria-current="page"]', 'marks the active page', 'صفحه فعال را مشخص می‌کند'),
      t('inline-size', 'sets logical clickable width', 'عرض clickable به شکل logical تعیین می‌کند'),
    ]],
    ['multiple-columns', 'CSS Multiple Columns', 'ستون‌های چندگانه در CSS', 'flowing content through newspaper-like columns with gaps, rules, and breaks', 'جریان دادن content در ستون‌های شبیه روزنامه با gap، rule و break', [
      t('column-count', 'sets the desired number of columns', 'تعداد column مطلوب را تعیین می‌کند'),
      t('column-gap', 'sets space between columns', 'فاصله بین columnها را تعیین می‌کند'),
      t('break-inside', 'controls fragmentation inside boxes', 'fragmentation داخل boxها را کنترل می‌کند'),
    ]],
    ['user-interface', 'CSS User Interface', 'User Interface در CSS', 'styling resize behavior, cursors, outlines, accent color, and interaction affordances', 'style دادن resize، cursor، outline، accent-color و affordanceهای interaction', [
      t('cursor', 'signals pointer affordance', 'affordance pointer را نشان می‌دهد'),
      t('resize', 'allows user-controlled resizing', 'resize تحت کنترل کاربر را ممکن می‌کند'),
      t('accent-color', 'themes native form accents', 'accent controlهای native را theme می‌کند'),
    ]],
    ['variables', 'CSS Variables', 'Variableها در CSS', 'using custom properties and var() for tokens, themes, components, and runtime overrides', 'استفاده از custom property و var() برای token، theme، component و overrideهای runtime', [
      t('--brand-color', 'defines a custom property', 'یک custom property تعریف می‌کند'),
      t('var(--brand-color)', 'reads a custom property value', 'مقدار custom property را می‌خواند'),
      t(':root', 'stores global design tokens', 'design tokenهای global را نگه می‌دارد'),
    ]],
    ['box-sizing', 'CSS Box Sizing', 'Box-sizing در CSS', 'controlling whether declared dimensions include padding and border', 'کنترل اینکه dimensionهای declare شده شامل padding و border باشند یا نه', [
      t('box-sizing: border-box', 'includes padding and border in width', 'padding و border را داخل width حساب می‌کند'),
      t('content-box', 'sizes only the content box', 'فقط content box را size می‌کند'),
      t('* { box-sizing: border-box; }', 'sets a predictable sizing baseline', 'baseline قابل پیش‌بینی برای sizing می‌سازد'),
    ]],
    ['media-queries', 'CSS Media Queries', 'Media queryها در CSS', 'adapting styles to viewport width, pointer type, color scheme, motion preference, and print', 'تطبیق styleها با عرض viewport، نوع pointer، color scheme، preference motion و print', [
      t('@media (min-width: 768px)', 'applies rules at wider viewports', 'ruleها را در viewport عریض‌تر اعمال می‌کند'),
      t('(prefers-reduced-motion)', 'detects motion sensitivity preference', 'preference حساسیت به motion را تشخیص می‌دهد'),
      t('(prefers-color-scheme: dark)', 'targets dark mode preference', 'preference dark mode را target می‌کند'),
    ]],
  ]),
  section('flexbox', 'CSS Flexbox', 'Flexbox', 'laying out one-dimensional rows and columns with flexible distribution and alignment', 'چیدن row و column یک‌بعدی با توزیع و alignment انعطاف‌پذیر', [
    ['flex-container', 'CSS Flex Container', 'Flex container در CSS', 'configuring the parent flex context with direction, wrap, gap, and alignment', 'تنظیم parent flex context با direction، wrap، gap و alignment', [
      t('display: flex', 'creates a flex container', 'یک flex container می‌سازد'),
      t('flex-direction', 'chooses row or column main axis', 'main axis را row یا column انتخاب می‌کند'),
      t('gap', 'sets spacing between flex items', 'فاصله بین flex itemها را تعیین می‌کند'),
    ]],
    ['flex-items', 'CSS Flex Items', 'Flex itemها در CSS', 'controlling growth, shrinkage, basis, order, and individual alignment', 'کنترل grow، shrink، basis، order و alignment تکی itemها', [
      t('flex: 1 1 auto', 'sets grow, shrink, and basis', 'grow، shrink و basis را تعیین می‌کند'),
      t('align-self', 'overrides cross-axis alignment for one item', 'alignment روی cross axis را برای یک item override می‌کند'),
      t('order', 'changes visual order without changing DOM order', 'ترتیب visual را بدون تغییر DOM order عوض می‌کند'),
    ]],
    ['flex-responsive', 'CSS Responsive Flexbox', 'Flexbox واکنش‌گرا در CSS', 'wrapping and rebalancing flex layouts across narrow and wide screens', 'wrap و re-balance کردن layoutهای flex در صفحه‌های باریک و عریض', [
      t('flex-wrap: wrap', 'allows items to create new lines', 'به itemها اجازه خط جدید می‌دهد'),
      t('flex-basis', 'sets a preferred item size', 'اندازه ترجیحی item را تعیین می‌کند'),
      t('@media', 'changes flex rules by viewport', 'ruleهای flex را بر اساس viewport عوض می‌کند'),
    ]],
  ]),
  section('grid', 'CSS Grid', 'Grid', 'building two-dimensional layout systems with explicit tracks, placement, gaps, and named areas', 'ساخت سیستم layout دوبعدی با trackهای explicit، placement، gap و areaهای named', [
    ['grid-container', 'CSS Grid Container', 'Grid container در CSS', 'defining rows, columns, gaps, flow, and named layout areas on a grid parent', 'تعریف row، column، gap، flow و areaهای named روی parent grid', [
      t('display: grid', 'creates a grid formatting context', 'یک grid formatting context می‌سازد'),
      t('grid-template-columns', 'defines column tracks', 'trackهای column را تعریف می‌کند'),
      t('grid-template-areas', 'names regions for placement', 'regionها را برای placement نام‌گذاری می‌کند'),
    ]],
    ['grid-items', 'CSS Grid Items', 'Grid itemها در CSS', 'placing children on grid lines, spans, areas, and alignment positions', 'قرار دادن childها روی line، span، area و موقعیت alignment در grid', [
      t('grid-column', 'places an item across columns', 'item را روی columnها قرار می‌دهد'),
      t('grid-row', 'places an item across rows', 'item را روی rowها قرار می‌دهد'),
      t('place-self', 'aligns a single grid item', 'یک grid item را align می‌کند'),
    ]],
    ['grid-layout', 'CSS Grid Layout', 'Grid layout در CSS', 'combining repeat, minmax, auto-fit, and areas for production page layouts', 'ترکیب repeat، minmax، auto-fit و area برای layoutهای production', [
      t('repeat(auto-fit, minmax())', 'creates responsive repeated tracks', 'trackهای تکراری responsive می‌سازد'),
      t('minmax()', 'sets flexible track bounds', 'boundهای flexible برای track تعیین می‌کند'),
      t('subgrid', 'lets nested grids share parent tracks', 'به grid تو در تو اجازه share کردن trackهای parent می‌دهد'),
    ]],
  ]),
  section('responsive', 'Responsive CSS', 'CSS واکنش‌گرا / RWD', 'making CSS adapt to devices, viewport sizes, media, images, video, and framework constraints', 'تطبیق CSS با device، اندازه viewport، media، image، video و constraintهای framework', [
    ['rwd-viewport', 'RWD Viewport', 'Viewport در RWD', 'setting the viewport and understanding CSS pixels, zoom, and device width', 'تنظیم viewport و درک CSS pixel، zoom و device width', [
      t('<meta name="viewport">', 'sets mobile viewport behavior', 'رفتار viewport موبایل را تعیین می‌کند'),
      t('width=device-width', 'matches CSS viewport to device width', 'viewport CSS را با device width هماهنگ می‌کند'),
      t('initial-scale=1', 'starts at normal zoom', 'با zoom معمولی شروع می‌کند'),
    ]],
    ['rwd-grid', 'RWD Grid View', 'Grid View در RWD', 'building fluid columns with percentages, grid, gap, and box sizing', 'ساخت columnهای سیال با درصد، grid، gap و box-sizing', [
      t('grid-template-columns', 'defines responsive columns', 'columnهای responsive را تعریف می‌کند'),
      t('minmax()', 'keeps columns usable at limits', 'columnها را در limitها قابل استفاده نگه می‌دارد'),
      t('gap', 'adds consistent gutters', 'gutterهای یکدست اضافه می‌کند'),
    ]],
    ['rwd-media-queries', 'RWD Media Queries', 'Media query در RWD', 'switching layout, spacing, and typography at meaningful conditions', 'تغییر layout، spacing و typography در conditionهای معنادار', [
      t('@media (width >= 48rem)', 'targets wider layouts with range syntax', 'layoutهای عریض‌تر را با range syntax target می‌کند'),
      t('orientation', 'detects portrait or landscape', 'portrait یا landscape را تشخیص می‌دهد'),
      t('prefers-reduced-motion', 'respects motion sensitivity', 'حساسیت به motion را رعایت می‌کند'),
    ]],
    ['rwd-images', 'RWD Images', 'Imageهای واکنش‌گرا در CSS', 'sizing images fluidly while preserving aspect ratio, cropping rules, and performance', 'size کردن imageها به شکل fluid همراه حفظ aspect ratio، قانون crop و performance', [
      t('max-width: 100%', 'prevents images from overflowing containers', 'از overflow شدن image از container جلوگیری می‌کند'),
      t('height: auto', 'preserves intrinsic image ratio', 'ratio ذاتی image را حفظ می‌کند'),
      t('object-fit', 'fits images inside media frames', 'imageها را داخل frame media جا می‌دهد'),
    ]],
    ['rwd-videos', 'RWD Videos', 'Videoهای واکنش‌گرا در CSS', 'keeping embedded and native videos fluid with aspect-ratio and wrappers', 'fluid نگه داشتن videoهای embedded و native با aspect-ratio و wrapper', [
      t('aspect-ratio: 16 / 9', 'reserves responsive video shape', 'شکل responsive ویدیو را رزرو می‌کند'),
      t('width: 100%', 'makes media follow container width', 'media را تابع عرض container می‌کند'),
      t('iframe', 'often needs a responsive wrapper', 'اغلب به wrapper responsive نیاز دارد'),
    ]],
    ['rwd-frameworks', 'RWD Frameworks', 'Frameworkهای RWD', 'understanding how utility frameworks and component systems encode responsive CSS decisions', 'درک اینکه utility framework و component system چگونه تصمیم‌های responsive CSS را encode می‌کنند', [
      t('breakpoints', 'define named viewport ranges', 'rangeهای viewport نام‌دار تعریف می‌کند'),
      t('container query', 'responds to component container size', 'به اندازه container component واکنش می‌دهد'),
      t('utility class', 'maps one style decision to a class', 'یک تصمیم style را به class نگاشت می‌کند'),
    ]],
  ]),
];

const REFERENCE_PAGES = [
  page('overview', 'CSS Reference Overview', 'نمای کلی مرجع CSS', 'how MDN-style CSS reference pages organize properties, selectors, values, at-rules, and modules', 'اینکه مرجع CSS به سبک MDN چگونه property، selector، value، at-rule و moduleها را سازمان می‌دهد', [
    t('property', 'a CSS feature that accepts values', 'ویژگی CSS که value می‌پذیرد'),
    t('descriptor', 'a declaration-like name inside some at-rules', 'نام شبیه declaration داخل بعضی at-ruleها'),
    t('module', 'a specification area such as Color or Grid', 'حوزه specification مثل Color یا Grid'),
  ], ['CSS reference', 'MDN CSS', 'CSS docs']),
  page('cascade-inheritance', 'Cascade and Inheritance', 'Cascade و Inheritance', 'how origins, importance, layers, specificity, order, inheritance, and initial values resolve CSS', 'اینکه origin، importance، layer، specificity، order، inheritance و initial value چگونه CSS را resolve می‌کنند', [
    t('cascade', 'chooses the winning declaration', 'declaration برنده را انتخاب می‌کند'),
    t('inherit', 'uses the parent computed value', 'computed value والد را استفاده می‌کند'),
    t('initial', 'uses the property initial value', 'initial value آن property را استفاده می‌کند'),
  ], ['CSS cascade', 'inheritance', 'computed value']),
  page('selectors-ref', 'CSS Selectors Reference', 'مرجع Selectorهای CSS', 'selector syntax for type, class, id, attribute, combinator, pseudo-class, and pseudo-element matching', 'syntax مربوط به selectorهای type، class، id، attribute، combinator، pseudo-class و pseudo-element', [
    t(':is()', 'matches any selector in a forgiving list', 'هر selector داخل لیست forgiving را match می‌کند'),
    t(':where()', 'matches without adding specificity', 'بدون افزودن specificity match می‌کند'),
    t(':has()', 'matches based on descendants or relatives', 'بر اساس descendant یا relative match می‌کند'),
  ], ['CSS selectors reference', 'MDN selectors', ':has selector']),
  page('specificity-cascade', 'Specificity and Cascade', 'Specificity و Cascade', 'selector weight, cascade layers, source order, and maintainable override strategy', 'وزن selector، cascade layer، source order و استراتژی override نگه‌داری‌پذیر', [
    t('specificity', 'selector weight in the cascade', 'وزن selector در cascade'),
    t('@layer', 'organizes rule priority by named layers', 'priority ruleها را با layerهای نام‌دار سازمان می‌دهد'),
    t('source order', 'breaks ties when priority is otherwise equal', 'وقتی priority برابر است tie را می‌شکند'),
  ], ['CSS specificity', 'cascade layers', 'CSS order']),
  page('box-model-ref', 'CSS Box Model Reference', 'مرجع Box Model در CSS', 'box generation, dimensions, margin collapse, padding, border, outline, and box sizing', 'تولید box، dimensionها، margin collapse، padding، border، outline و box-sizing', [
    t('content-box', 'sizes only the content area', 'فقط ناحیه content را size می‌کند'),
    t('border-box', 'includes padding and border in dimensions', 'padding و border را در dimensionها حساب می‌کند'),
    t('margin collapse', 'vertical margins combine in normal flow', 'marginهای عمودی در normal flow ترکیب می‌شوند'),
  ], ['CSS box model', 'box sizing', 'margin collapse']),
  page('values-units', 'CSS Values and Units', 'Valueها و Unitهای CSS', 'numbers, dimensions, percentages, lengths, angles, times, functions, and typed CSS values', 'number، dimension، درصد، length، angle، time، function و valueهای typed در CSS', [
    t('rem', 'root-relative length unit', 'unit طول نسبی به root'),
    t('clamp()', 'bounds a preferred value', 'یک مقدار preferred را محدود می‌کند'),
    t('<length-percentage>', 'accepts lengths or percentages', 'length یا درصد می‌پذیرد'),
  ], ['CSS values', 'CSS units', 'rem em clamp']),
  page('colors-ref', 'CSS Colors Reference', 'مرجع رنگ در CSS', 'color spaces, alpha, currentColor, gradients, system colors, and contrast-aware decisions', 'color space، alpha، currentColor، gradient، system color و تصمیم‌های contrast-aware', [
    t('currentColor', 'uses the current text color', 'رنگ فعلی متن را استفاده می‌کند'),
    t('color-mix()', 'mixes two colors in a color space', 'دو رنگ را در یک color space ترکیب می‌کند'),
    t('oklch()', 'expresses color perceptually', 'رنگ را به شکل perceptual بیان می‌کند'),
  ], ['CSS colors reference', 'color mix', 'OKLCH']),
  page('typography-ref', 'CSS Typography Reference', 'مرجع Typography در CSS', 'fonts, font loading, line boxes, spacing, wrapping, writing modes, and readable text systems', 'font، load فونت، line box، spacing، wrapping، writing mode و سیستم متن خوانا', [
    t('font-family', 'defines a fallback font list', 'لیست fallback فونت را تعریف می‌کند'),
    t('line-height', 'controls line box rhythm', 'ریتم line box را کنترل می‌کند'),
    t('font-display', 'sets web font loading behavior', 'رفتار load شدن web font را تعیین می‌کند'),
  ], ['CSS typography', 'web fonts', 'line height']),
  page('backgrounds-borders-ref', 'Backgrounds and Borders Reference', 'مرجع Background و Border در CSS', 'background layers, images, clipping, borders, radius, outlines, and decorative border images', 'لایه‌های background، image، clipping، border، radius، outline و border image تزئینی', [
    t('background-clip', 'sets the painting area', 'ناحیه paint را تعیین می‌کند'),
    t('background-origin', 'sets image positioning origin', 'origin جای‌گذاری image را تعیین می‌کند'),
    t('border-radius', 'rounds border corners', 'گوشه‌های border را گرد می‌کند'),
  ], ['CSS backgrounds', 'CSS borders', 'background clip']),
  page('display-flow', 'Display and Flow Layout', 'Display و Flow Layout در CSS', 'display values, block and inline formatting, flow-root, floats, fragmentation, and normal flow', 'valueهای display، formatting block و inline، flow-root، float، fragmentation و normal flow', [
    t('display', 'controls internal and external box behavior', 'رفتار داخلی و بیرونی box را کنترل می‌کند'),
    t('flow-root', 'creates a new block formatting context', 'یک block formatting context جدید می‌سازد'),
    t('normal flow', 'default layout before positioning or floats', 'layout پیش‌فرض قبل از positioning یا float'),
  ], ['CSS display', 'flow layout', 'normal flow']),
  page('positioning-ref', 'CSS Positioning Reference', 'مرجع Positioning در CSS', 'position values, containing blocks, inset properties, sticky behavior, and stacking contexts', 'valueهای position، containing block، propertyهای inset، sticky behavior و stacking context', [
    t('position: sticky', 'sticks relative to a scroll container', 'نسبت به scroll container می‌چسبد'),
    t('inset', 'sets logical or physical offsets', 'offsetهای logical یا physical تعیین می‌کند'),
    t('z-index', 'orders boxes in stacking contexts', 'boxها را در stacking context مرتب می‌کند'),
  ], ['CSS positioning', 'sticky', 'z-index']),
  page('flexbox-ref', 'Flexbox Reference', 'مرجع Flexbox', 'flex formatting contexts, axes, wrapping, alignment, flexible sizing, and item ordering', 'flex formatting context، axisها، wrapping، alignment، sizing انعطاف‌پذیر و order itemها', [
    t('flex-basis', 'sets initial main-axis size', 'اندازه اولیه روی main axis را تعیین می‌کند'),
    t('flex-grow', 'distributes positive free space', 'فضای آزاد مثبت را توزیع می‌کند'),
    t('align-items', 'aligns items on the cross axis', 'itemها را روی cross axis align می‌کند'),
  ], ['Flexbox reference', 'CSS flex', 'flex basis']),
  page('grid-ref', 'Grid Reference', 'مرجع Grid در CSS', 'explicit and implicit grids, tracks, lines, areas, auto-placement, subgrid, and alignment', 'gridهای explicit و implicit، track، line، area، auto-placement، subgrid و alignment', [
    t('grid-template-columns', 'defines explicit column tracks', 'trackهای explicit برای column تعریف می‌کند'),
    t('grid-auto-flow', 'controls auto-placement direction', 'جهت auto-placement را کنترل می‌کند'),
    t('subgrid', 'inherits parent grid tracks', 'trackهای grid والد را inherit می‌کند'),
  ], ['CSS Grid reference', 'subgrid', 'grid template']),
  page('responsive-design', 'Responsive Design Reference', 'مرجع طراحی واکنش‌گرا در CSS', 'media queries, container queries, viewport units, fluid type, images, and adaptive layout decisions', 'media query، container query، unitهای viewport، typography fluid، image و تصمیم‌های adaptive layout', [
    t('@media', 'applies CSS by media condition', 'CSS را بر اساس media condition اعمال می‌کند'),
    t('@container', 'applies CSS by container condition', 'CSS را بر اساس container condition اعمال می‌کند'),
    t('clamp()', 'keeps fluid values bounded', 'مقدارهای fluid را محدود نگه می‌دارد'),
  ], ['responsive CSS', 'media queries', 'container queries']),
  page('transforms-ref', 'Transforms Reference', 'مرجع Transform در CSS', '2D and 3D transform functions, transform origin, matrices, perspective, and compositing effects', 'functionهای transform دوبعدی و سه‌بعدی، transform-origin، matrix، perspective و اثرهای compositing', [
    t('translate()', 'moves a box visually', 'box را به شکل visual جابه‌جا می‌کند'),
    t('matrix()', 'represents a transform matrix', 'یک matrix transform را نمایش می‌دهد'),
    t('perspective()', 'adds depth in transform space', 'در فضای transform عمق اضافه می‌کند'),
  ], ['CSS transforms', '2D transforms', '3D transforms']),
  page('transitions-animations', 'Transitions and Animations', 'Transition و Animation در CSS', 'state transitions, keyframes, timing functions, motion preferences, performance, and composition', 'transition state، keyframe، timing function، preference motion، performance و composition', [
    t('transition', 'animates a change between states', 'تغییر بین stateها را animate می‌کند'),
    t('@keyframes', 'defines animation timeline steps', 'stepهای timeline animation را تعریف می‌کند'),
    t('prefers-reduced-motion', 'detects reduced motion preference', 'preference کاهش motion را تشخیص می‌دهد'),
  ], ['CSS animations', 'CSS transitions', 'reduced motion']),
  page('custom-properties', 'Custom Properties', 'Custom propertyها در CSS', 'CSS variables, inheritance, fallback values, design tokens, runtime theming, and component APIs', 'variableهای CSS، inheritance، fallback value، design token، theming runtime و API componentها', [
    t('--space-4', 'declares a custom property token', 'یک token custom property اعلام می‌کند'),
    t('var(--space-4, 1rem)', 'reads a token with fallback', 'token را همراه fallback می‌خواند'),
    t('@property', 'registers typed custom properties', 'custom property typed ثبت می‌کند'),
  ], ['CSS variables', 'custom properties', '@property']),
  page('cascade-layers', 'Cascade Layers', 'Cascade layerها در CSS', 'using @layer to define predictable priority groups before specificity and source order conflicts', 'استفاده از @layer برای تعریف گروه‌های priority قابل پیش‌بینی قبل از conflictهای specificity و source order', [
    t('@layer reset, base, components', 'declares layer order', 'ترتیب layerها را اعلام می‌کند'),
    t('@layer components', 'places rules inside a named layer', 'ruleها را داخل layer نام‌دار می‌گذارد'),
    t('unlayered rules', 'outrank normal layered rules', 'از ruleهای normal داخل layer بالاترند'),
  ], ['CSS cascade layers', '@layer', 'CSS architecture']),
  page('container-queries', 'Container Queries', 'Container queryها در CSS', 'styling components by container size, style queries, query units, and containment requirements', 'style دادن component بر اساس اندازه container، style query، unitهای query و نیازهای containment', [
    t('container-type: inline-size', 'enables size queries on a container', 'size query را روی container فعال می‌کند'),
    t('@container (min-width: 30rem)', 'applies rules by container size', 'ruleها را بر اساس اندازه container اعمال می‌کند'),
    t('cqi', 'container query inline-size unit', 'unit مربوط به inline-size در container query'),
  ], ['container queries', '@container', 'CSS cqi']),
  page('nesting-ref', 'CSS Nesting Reference', 'مرجع Nesting در CSS', 'native CSS nesting syntax, the ampersand selector, grouped selectors, and cascade readability', 'syntax بومی nesting در CSS، selector ampersand، selectorهای گروهی و خوانایی cascade', [
    t('&', 'refers to the parent selector', 'به selector والد اشاره می‌کند'),
    t('.card { & h2 {} }', 'nests descendant rules', 'ruleهای descendant را nest می‌کند'),
    t('@media', 'can nest conditional rules', 'می‌تواند ruleهای conditional را nest کند'),
  ], ['CSS nesting', 'native nesting', '& selector']),
  page('at-rules', 'CSS At-rules Reference', 'مرجع At-ruleهای CSS', 'conditional, grouping, import, font, keyframes, layer, container, media, and support rules', 'ruleهای conditional، grouping، import، font، keyframes، layer، container، media و support', [
    t('@media', 'groups rules by media condition', 'ruleها را بر اساس media condition گروه می‌کند'),
    t('@supports', 'tests feature support before applying CSS', 'پیش از اعمال CSS پشتیبانی feature را تست می‌کند'),
    t('@font-face', 'defines downloadable font faces', 'font face قابل دانلود تعریف می‌کند'),
  ], ['CSS at-rules', '@media', '@supports']),
  page('functions-ref', 'CSS Functions Reference', 'مرجع Functionهای CSS', 'math, color, transform, filter, image, shape, and custom property functions', 'functionهای math، color، transform، filter، image، shape و custom property', [
    t('calc()', 'calculates values from expressions', 'value را از expression محاسبه می‌کند'),
    t('linear-gradient()', 'creates an image-like gradient', 'gradient شبیه image می‌سازد'),
    t('var()', 'substitutes a custom property value', 'مقدار custom property را جایگزین می‌کند'),
  ], ['CSS functions', 'calc', 'var']),
  page('accessibility-css', 'CSS Accessibility Reference', 'مرجع Accessibility در CSS', 'focus visibility, color contrast, motion reduction, semantic preservation, and source order risks', 'focus visibility، contrast رنگ، کاهش motion، حفظ semantics و ریسک‌های source order', [
    t(':focus-visible', 'styles keyboard-relevant focus', 'focus مرتبط با keyboard را style می‌کند'),
    t('prefers-reduced-motion', 'honors motion preferences', 'preferenceهای motion را رعایت می‌کند'),
    t('forced-colors', 'supports high contrast modes', 'modeهای high contrast را پشتیبانی می‌کند'),
  ], ['CSS accessibility', 'focus visible', 'color contrast']),
  page('cheatsheet', 'CSS Cheatsheet', 'چیت‌شیت CSS', 'a compact MDN-style checklist of selectors, layout, typography, color, motion, and responsive CSS', 'چک‌لیست فشرده به سبک MDN از selector، layout، typography، color، motion و CSS responsive', [
    t('selector', 'chooses the target elements', 'elementهای هدف را انتخاب می‌کند'),
    t('layout', 'uses flow, flex, grid, and positioning', 'از flow، flex، grid و positioning استفاده می‌کند'),
    t('responsive', 'adapts to context and viewport', 'با context و viewport تطبیق می‌یابد'),
  ], ['CSS cheatsheet', 'CSS quick reference', 'CSS checklist']),
];

const OFFICIAL_PAGES = [
  page('overview', 'W3C CSS Overview', 'نمای کلی W3C CSS', 'the W3C CSS work, module-based specifications, snapshots, profiles, and author reading strategy', 'کار W3C روی CSS، specificationهای module-based، snapshotها، profileها و روش مطالعه برای author', [
    t('CSS module', 'one specification area of CSS', 'یک حوزه specification از CSS'),
    t('Working Draft', 'a specification maturity stage', 'مرحله‌ای از بلوغ specification'),
    t('Recommendation', 'a stable W3C specification status', 'وضعیت پایدار specification در W3C'),
  ], ['W3C CSS', 'CSS specs', 'official CSS']),
  page('css-snapshot', 'CSS Snapshot 2024', 'CSS Snapshot 2024', 'the CSS Snapshot list of stable modules, feature levels, interoperability expectations, and author guidance', 'فهرست moduleهای پایدار CSS Snapshot، levelهای feature، انتظارهای interop و راهنمای author', [
    t('CSS Snapshot', 'summarizes stable CSS modules', 'moduleهای پایدار CSS را خلاصه می‌کند'),
    t('baseline', 'practical support expectation for authors', 'انتظار عملی پشتیبانی برای authorها'),
    t('module level', 'versioned scope of a CSS spec', 'scope versioned برای یک spec در CSS'),
  ], ['CSS Snapshot 2024', 'W3C CSS snapshot', 'CSS baseline']),
  page('cascade-spec', 'CSS Cascade Specification', 'Specification مربوط به CSS Cascade', 'the official cascade model for origins, importance, specificity, layers, inheritance, and value processing', 'مدل رسمی cascade برای origin، importance، specificity، layer، inheritance و پردازش value', [
    t('cascaded value', 'the result after cascade selection', 'نتیجه پس از انتخاب cascade'),
    t('specified value', 'the value assigned before computation', 'مقدار assign شده پیش از computation'),
    t('computed value', 'the value after inheritance and computation', 'مقدار پس از inheritance و computation'),
  ], ['CSS Cascade spec', 'W3C cascade', 'CSS values']),
  page('selectors-spec', 'CSS Selectors Specification', 'Specification مربوط به CSS Selectors', 'the official selector grammar, matching model, specificity rules, pseudo-classes, and pseudo-elements', 'grammar رسمی selector، مدل matching، ruleهای specificity، pseudo-class و pseudo-element', [
    t('selector list', 'comma-separated selectors sharing declarations', 'selectorهای جداشده با comma که declaration مشترک دارند'),
    t('compound selector', 'sequence of simple selectors without combinators', 'دنباله simple selectorها بدون combinator'),
    t('relative selector', 'selector evaluated from an anchor element', 'selector ارزیابی‌شده از anchor element'),
  ], ['CSS Selectors spec', 'W3C selectors', 'selector grammar']),
  page('box-model-spec', 'CSS Box Model Specification', 'Specification مربوط به CSS Box Model', 'the official model for boxes, margins, padding, borders, sizing, outlines, and fragmentation interactions', 'مدل رسمی برای box، margin، padding، border، sizing، outline و interactionهای fragmentation', [
    t('principal box', 'main box generated by an element', 'box اصلی generated توسط element'),
    t('margin area', 'space outside the border area', 'فضای بیرون border area'),
    t('box edge', 'content, padding, border, or margin boundary', 'مرز content، padding، border یا margin'),
  ], ['CSS Box Model spec', 'W3C box model', 'CSS sizing']),
  page('color-spec', 'CSS Color Specification', 'Specification مربوط به CSS Color', 'the official color model, syntaxes, interpolation, opacity, currentColor, gamut, and accessibility implications', 'مدل رسمی رنگ، syntaxها، interpolation، opacity، currentColor، gamut و اثرهای accessibility', [
    t('<color>', 'CSS data type for colors', 'data type رنگ در CSS'),
    t('currentColor', 'the current value of color', 'مقدار فعلی property color'),
    t('color space', 'coordinate system for representing colors', 'سیستم مختصات برای نمایش رنگ‌ها'),
  ], ['CSS Color spec', 'W3C color', 'CSS color spaces']),
  page('fonts-text-spec', 'CSS Fonts and Text Specifications', 'Specificationهای CSS Fonts و Text', 'official font selection, web fonts, text layout, spacing, wrapping, decoration, and writing behavior', 'انتخاب رسمی font، web font، layout متن، spacing، wrapping، decoration و رفتار نوشتار', [
    t('@font-face', 'defines a font resource for matching', 'یک font resource برای matching تعریف می‌کند'),
    t('font matching', 'algorithm that selects a font face', 'algorithm انتخاب font face'),
    t('line breaking', 'rules for wrapping text lines', 'ruleهای wrap شدن lineهای متن'),
  ], ['CSS Fonts spec', 'CSS Text spec', 'W3C typography']),
  page('layout-modules', 'CSS Layout Modules', 'Moduleهای Layout در CSS', 'official layout modules for flow, flexbox, grid, alignment, positioning, multi-column, and fragmentation', 'moduleهای رسمی layout برای flow، flexbox، grid، alignment، positioning، multi-column و fragmentation', [
    t('formatting context', 'environment where boxes are laid out', 'محیطی که boxها در آن layout می‌شوند'),
    t('alignment subject', 'box being aligned by CSS alignment', 'box که توسط CSS alignment هم‌تراز می‌شود'),
    t('track sizing', 'algorithm for grid row and column sizes', 'algorithm تعیین اندازه row و column در grid'),
  ], ['CSS layout specs', 'Flexbox spec', 'Grid spec']),
  page('media-queries-spec', 'Media Queries Specification', 'Specification مربوط به Media Queries', 'the official syntax and evaluation model for media types, features, ranges, user preferences, and responsive CSS', 'syntax و مدل evaluation رسمی برای media type، feature، range، preference کاربر و CSS responsive', [
    t('@media', 'groups rules under a media condition', 'ruleها را زیر یک media condition گروه می‌کند'),
    t('media feature', 'queryable aspect of device or user preference', 'جنبه قابل query از device یا preference کاربر'),
    t('range context', 'compact comparison syntax for media features', 'syntax مقایسه فشرده برای media featureها'),
  ], ['Media Queries spec', 'W3C media queries', 'responsive specs']),
];

function section(slug, enTitle, faTitle, enFocus, faFocus, childrenTuples) {
  return {
    slug,
    enTitle,
    faTitle,
    enFocus,
    faFocus,
    terms: sectionTerms(slug, enTitle, faTitle),
    children: childrenTuples.map(([childSlug, childEnTitle, childFaTitle, childEnFocus, childFaFocus, terms]) => (
      page(childSlug, childEnTitle, childFaTitle, childEnFocus, childFaFocus, terms, keywordsFor(childSlug, childEnTitle))
    )),
  };
}

function sectionTerms(slug, enTitle, faTitle) {
  if (slug === 'flexbox') {
    return [
      t('display: flex', 'creates a one-dimensional layout context', 'یک context layout یک‌بعدی می‌سازد'),
      t('main axis', 'direction flex items are laid out', 'جهتی که flex itemها در آن چیده می‌شوند'),
      t('cross axis', 'axis perpendicular to the main axis', 'محور عمود بر main axis'),
    ];
  }
  if (slug === 'grid') {
    return [
      t('display: grid', 'creates a two-dimensional layout context', 'یک context layout دوبعدی می‌سازد'),
      t('grid track', 'a row or column in the grid', 'یک row یا column در grid'),
      t('grid area', 'a named or line-based placement region', 'region placement نام‌دار یا line-based'),
    ];
  }
  if (slug === 'responsive') {
    return [
      t('@media', 'changes CSS by device or viewport condition', 'CSS را بر اساس condition دستگاه یا viewport تغییر می‌دهد'),
      t('viewport', 'the visible page area used by CSS', 'ناحیه قابل مشاهده صفحه که CSS استفاده می‌کند'),
      t('fluid layout', 'adapts continuously rather than at one size', 'به جای یک اندازه ثابت پیوسته تطبیق می‌یابد'),
    ];
  }
  return [
    t('selector', `targets elements for ${enTitle}`, `elementها را برای ${faTitle} target می‌کند`),
    t('property: value', 'sets one visual or layout decision', 'یک تصمیم visual یا layout را تعیین می‌کند'),
    t('cascade', 'resolves competing declarations', 'declarationهای رقیب را resolve می‌کند'),
  ];
}

function keywordsFor(slug, enTitle) {
  const words = enTitle.replace(/^CSS\s+/u, '').split(/\s+/u).slice(0, 4).join(' ');
  return [`CSS ${words}`, `${words} tutorial`, slug.replaceAll('-', ' ')];
}

function withOrders(trackId, pages) {
  return pages.map((item, index) => ({
    ...item,
    track: trackId,
    order: index + 1,
  }));
}

const LEARN_PAGES = withOrders('learn', [
  LEARN_INTRO,
  ...LEARN_SECTIONS.flatMap((sectionItem) => [
    page(sectionItem.slug, sectionItem.enTitle, sectionItem.faTitle, sectionItem.enFocus, sectionItem.faFocus, sectionItem.terms, [
      `CSS ${sectionItem.slug}`,
      `${sectionItem.enTitle} tutorial`,
    ]),
    ...sectionItem.children,
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
    ...LEARN_SECTIONS.map((sectionItem) => ({
      slug: sectionItem.slug,
      title: { fa: sectionItem.faTitle, en: sectionItem.enTitle },
      children: sectionItem.children.map(navItem),
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
    id: 'css',
    order: 20,
    title: {
      fa: 'CSS',
      en: 'CSS',
    },
    seoTitle: {
      fa: 'CSS — آموزش W3Schools، مرجع MDN و استاندارد W3C | MEGA JS',
      en: 'CSS — W3Schools Tutorial, MDN Reference & W3C Specs | MEGA JS',
    },
    seoDescription: {
      fa: seoLength('CSS را در سه مسیر یاد بگیرید: آموزش W3Schools، مرجع MDN و خلاصه specificationهای W3C؛ همراه مثال live، SEO و نکته‌های cascade.', 'fa'),
      en: seoLength('Learn CSS across three tracks: W3Schools-style lessons, MDN reference, and W3C specification summaries with live examples and cascade guidance.', 'en'),
    },
    description: {
      fa: 'سه مسیر کامل برای CSS: آموزش قدم‌به‌قدم، مرجع دقیق و خلاصه‌های رسمی برای styling، layout و animation.',
      en: 'Three complete CSS tracks: step-by-step learning, precise reference, and official summaries for styling, layout, and animation.',
    },
    sources: [SOURCE_W3, SOURCE_MDN, SOURCE_W3C, SOURCE_W3C_SNAPSHOT],
    tracks: [
      {
        id: 'learn',
        title: {
          fa: 'آموزشی (W3Schools)',
          en: 'Learn (W3Schools)',
        },
        description: {
          fa: 'مسیر آموزشی قدم‌به‌قدم با ادیتور زنده — ساختار سایدبار W3Schools CSS Tutorial',
          en: 'Step-by-step tutorial with live editor — W3Schools CSS Tutorial sidebar structure',
        },
        seoTitle: {
          fa: 'آموزش CSS از صفر | مسیر W3Schools + ادیتور زنده | MEGA JS',
          en: 'Learn CSS from Scratch | W3Schools Path + Live Editor | MEGA JS',
        },
        seoDescription: {
          fa: seoLength('آموزش CSS از صفر با مسیر W3Schools، مثال‌های HTML دارای <style>، ادیتور زنده، جدول syntax و تمرین‌های کوتاه برای cascade، layout و responsive design.', 'fa'),
          en: seoLength('Learn CSS from scratch with a W3Schools-style path, live HTML examples with style tags, syntax tables, mistakes, and layout practice.', 'en'),
        },
        source: {
          name: 'W3Schools CSS Tutorial',
          url: 'https://www.w3schools.com/css/default.asp',
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
          fa: 'مرجع عمیق و author-focused به سبک MDN برای propertyها، selectorها، layout، valueها و browser behavior در CSS.',
          en: 'A deeper MDN-style author reference for properties, selectors, layout, values, and CSS browser behavior.',
        },
        seoTitle: {
          fa: 'مرجع CSS به سبک MDN | Selector، Layout و Valueها | MEGA JS',
          en: 'CSS Reference — MDN-style Selectors, Layout & Values | MEGA JS',
        },
        seoDescription: {
          fa: seoLength('مرجع CSS به سبک MDN برای selector، cascade، box model، Flexbox، Grid، responsive design و animation؛ مناسب تصمیم دقیق در پروژه.', 'fa'),
          en: seoLength('Use the MDN-style CSS reference for selectors, cascade, box model, Flexbox, Grid, responsive design, and animation in real project decisions.', 'en'),
        },
        source: {
          name: 'MDN Web Docs — CSS',
          url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        },
        liveEditor: false,
        nav: flatNav(TRACK_PAGES.reference),
      },
      {
        id: 'official',
        title: {
          fa: 'مستندات رسمی (W3C)',
          en: 'Official (W3C)',
        },
        description: {
          fa: 'خلاصه‌های specification-oriented از CSS و CSS Snapshot برای authorها، بدون dump کامل specification.',
          en: 'Specification-oriented CSS and CSS Snapshot summaries for authors, without a full specification dump.',
        },
        seoTitle: {
          fa: 'Specificationهای رسمی CSS برای نویسندگان | W3C Summary | MEGA JS',
          en: 'Official CSS Specifications for Authors | W3C Summary | MEGA JS',
        },
        seoDescription: {
          fa: seoLength('خلاصه رسمی W3C CSS و CSS Snapshot برای authorها؛ cascade، selector، box model، color، layout و media query را دقیق مرور کنید.', 'fa'),
          en: seoLength('Read author-focused W3C CSS summaries covering CSS Snapshot, cascade, selectors, box model, color, typography, layout, and media queries.', 'en'),
        },
        source: {
          name: 'W3C CSS',
          url: 'https://www.w3.org/Style/CSS/',
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
    ? `این صفحه ${item.faFocus} را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد.`
    : `This page explains ${item.enFocus} with examples, tables, and practical CSS notes.`;
  const seoTitle = seoTitleFor(item, locale);
  const seoDescription = seoDescriptionFor(item, locale);
  const keywords = isFa
    ? ['CSS', item.faTitle, 'آموزش CSS', 'مرجع CSS', ...item.keywords].join(', ')
    : ['CSS', item.enTitle, ...item.keywords].join(', ');
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
    ? `${item.faTitle} — خلاصه رسمی W3C | MEGA JS`
    : `${item.enTitle} — W3C Official Summary | MEGA JS Docs`;
}

function cleanFaReferenceTitle(title) {
  return title.startsWith('مرجع ') ? title : `مرجع ${title}`;
}

function cleanEnReferenceTitle(title) {
  return title.includes('Reference') ? title : `CSS ${title} Reference`;
}

function seoDescriptionFor(item, locale) {
  const marker = item.slug.replaceAll('-', ' ');
  if (item.track === 'learn') {
    return locale === 'fa'
      ? seoLength(
          `آموزش ${item.faTitle} (${marker}): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی پروژه واقعی.`,
          'fa',
        )
      : seoLength(
          `Learn ${item.enTitle} (${marker}) with live HTML style examples, syntax tables, W3Schools practice, and DevTools tips for modern production UI.`,
          'en',
        );
  }
  if (item.track === 'reference') {
    return locale === 'fa'
      ? seoLength(
          `${cleanFaReferenceTitle(item.faTitle)} (${marker}): مرجع MDNوار با جدول کاربرد، مثال CSS، رفتار مرورگر و نکته DevTools برای تصمیم دقیق در پروژه واقعی.`,
          'fa',
        )
      : seoLength(
          `${cleanEnReferenceTitle(item.enTitle)} (${marker}): MDN-style reference with usage tables, CSS examples, browser notes, and DevTools guidance for projects.`,
          'en',
        );
  }
  return locale === 'fa'
    ? seoLength(
        `${item.faTitle} (${marker}): خلاصه رسمی W3C CSS برای authorها با مثال، interop، computed style و راهنمای پیاده‌سازی پایدار در وب واقعی.`,
        'fa',
      )
    : seoLength(
        `${item.enTitle} (${marker}): W3C CSS official summary for authors with examples, interop notes, computed style, and stable production guidance.`,
        'en',
      );
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
      `${item.faTitle} درباره ${item.faFocus} است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با \`<style>\` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.`,
      '',
      `وقتی با ${item.faTitle} کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.`,
      '',
      '## ایده اصلی',
      '',
      ...item.terms.map((termItem) => `- \`${termItem.syntax}\`: ${termItem.fa}.`),
      `- برای این موضوع، ${practiceSignal(item, 'fa')} معیار اصلی کیفیت CSS است.`,
      '',
      '## مثال‌های HTML و CSS',
      '',
      'سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value را تغییر دهید و computed style را مقایسه کنید.',
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
      ...item.terms.map((termItem) => `| \`${termItem.syntax}\` | ${termItem.fa} | در ${item.faTitle} آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |`),
      '',
      '## اشتباه‌های رایج',
      '',
      ...learnMistakes(item, 'fa'),
      '',
      '## تمرین کوتاه',
      '',
      `یک فایل \`${item.slug}.html\` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با \`${item.terms[0].syntax}\` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.`,
      '',
      '## گام بعدی',
      '',
      next
        ? `بعد از این صفحه، **${next.faTitle}** را بخوانید تا مسیر CSS مرحله‌به‌مرحله کامل‌تر شود.`
        : 'در پایان مسیر learn، وارد track مرجع شوید و همین موضوعات را با نگاه دقیق‌تر MDN بررسی کنید.',
      '',
    ].join('\n');
  }

  return [
    `# ${item.enTitle}`,
    '',
    `${item.enTitle} focuses on ${item.enFocus}. This is an educational rewrite inspired by the W3Schools CSS learning path, and every example uses a live-editor-friendly \`<style>\` block.`,
    '',
    `When you practice ${item.enTitle}, do not stop at the visual result. Inspect the winning cascade rule, computed style in the DevTools Styles panel, box dimensions, and layout effects.`,
    '',
    '## Core idea',
    '',
    ...item.terms.map((termItem) => `- \`${termItem.syntax}\`: ${termItem.en}.`),
    `- For this topic, ${practiceSignal(item, 'en')} is the main sign that your CSS is doing its job.`,
    '',
    '## HTML and CSS examples',
    '',
    'The three examples move from a focused pattern to a complete page. Run each one in the live editor, change one value, and compare the computed style.',
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
    ...item.terms.map((termItem) => `| \`${termItem.syntax}\` | ${termItem.en} | In ${item.enTitle}, match it to the real cascade, specificity, and layout needs of the page. |`),
    '',
    '## Common mistakes',
    '',
    ...learnMistakes(item, 'en'),
    '',
    '## Practice step',
    '',
    `Create a file named \`${item.slug}.html\`, run the first example, then replace at least one declaration related to \`${item.terms[0].syntax}\` with a token or project-specific value. Inspect the winning rule and box model in DevTools.`,
    '',
    '## Next step',
    '',
    next
      ? `Next, continue with **${next.enTitle}** so the CSS learning path builds on this concept.`
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
      `${item.faTitle} یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی ${item.faFocus} است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد، اثر cascade و رفتار مرورگر را کنار هم می‌گذارد.`,
      '',
      '## جایگاه در مرجع MDN',
      '',
      `در MDN معمولاً این موضوع کنار CSS property reference، selector reference، at-ruleها و راهنماهای layout خوانده می‌شود. هنگام استفاده از ${item.faTitle}، اول پشتیبانی مرورگر و computed value را ببینید، سپس تصمیم authoring بگیرید.`,
      '',
      '## جدول مرجع',
      '',
      '| مورد | معنی | نکته سازگاری |',
      '| --- | --- | --- |',
      ...item.terms.map((termItem) => `| \`${termItem.syntax}\` | ${termItem.fa} | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |`),
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
      `- برای ${item.faTitle}، ابتدا cascade و specificity را ساده نگه دارید و بعد سراغ override بروید.`,
      '- اگر property یا selector در همه مرورگرها یکسان نیست، progressive enhancement و fallback قابل فهم بنویسید.',
      '- برای تصمیم‌های حساس، صفحه MDN مربوط را کنار CSS specification و تست واقعی در DevTools بررسی کنید.',
      '',
      '## ارتباط مفهومی با MDN',
      '',
      `این صفحه به موضوعات MDN درباره ${item.enTitle}, CSSOM, browser compatibility و accessibility نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.`,
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
    `${item.enTitle} is an author-focused MDN-style reference page. It concentrates on ${item.enFocus} and favors precise definitions, usage tables, cascade effects, and browser behavior over beginner sequencing.`,
    '',
    '## Place in the MDN reference',
    '',
    `On MDN, this topic usually sits near CSS property references, selector references, at-rules, and layout guides. Before using ${item.enTitle}, check browser support, computed values, and accessibility expectations.`,
    '',
    '## Reference table',
    '',
    '| Item | Meaning | Compatibility note |',
    '| --- | --- | --- |',
    ...item.terms.map((termItem) => `| \`${termItem.syntax}\` | ${termItem.en} | Test it in the DevTools Styles panel, responsive mode, and target browsers. |`),
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
    `- For ${item.enTitle}, keep the cascade and specificity simple before adding overrides.`,
    '- If a property or selector is not uniform across browsers, use progressive enhancement and useful fallback.',
    '- For sensitive decisions, compare the MDN page with the CSS specification and an actual DevTools test.',
    '',
    '## Conceptual MDN links',
    '',
    `This page is conceptually close to MDN topics for ${item.enTitle}, CSSOM, browser compatibility data, and accessibility guidance.`,
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
      `${item.faTitle} خلاصه‌ای specification-oriented از W3C CSS است. هدف صفحه dump کامل specification نیست؛ بلکه ${item.faFocus} را برای authorهایی توضیح می‌دهد که می‌خواهند styleهای قابل تعامل و پایدار بنویسند.`,
      '',
      '## خواندن با نگاه specification',
      '',
      'در specificationهای CSS، عبارت‌هایی مثل must، should، computed value، used value، grammar و conformance معنی دقیق دارند. این خلاصه آن زبان را به تصمیم‌های عملی authoring تبدیل می‌کند، اما برای edge caseها باید متن W3C را بررسی کنید.',
      '',
      '## مفاهیم کلیدی',
      '',
      '| اصطلاح | خلاصه author-facing |',
      '| --- | --- |',
      ...item.terms.map((termItem) => `| \`${termItem.syntax}\` | ${termItem.fa} |`),
      '',
      '## مثال authoring',
      '',
      ...examples.flatMap((example, index) => [
        `### مثال ${index + 1}`,
        '',
        codeFence(example),
        '',
      ]),
      '## نکته‌های interop و accessibility',
      '',
      `- در ${item.faTitle}، به grammar و الگوریتم‌های computed style فقط به عنوان جزئیات پیاده‌سازی نگاه نکنید؛ CSS شما باید با آن‌ها سازگار باشد.`,
      '- وقتی specification چند حالت مجاز دارد، حالت ساده‌تر، قابل تست‌تر و قابل فهم‌تر در DevTools را برای پروژه واقعی انتخاب کنید.',
      '- برای motion، color contrast، focus و responsive behavior، preference کاربر و accessibility را از ابتدا در CSS لحاظ کنید.',
      '',
      '## گام بعدی',
      '',
      next ? `در ادامه **${next.faTitle}** را مرور کنید.` : 'این track را با بازگشت به reference و تست یک layout واقعی کامل کنید.',
      '',
    ].join('\n');
  }

  return [
    `# ${item.enTitle}`,
    '',
    `${item.enTitle} is a specification-oriented summary of W3C CSS. It is not a full spec dump; it explains ${item.enFocus} for authors who want interoperable and durable styles.`,
    '',
    '## Reading with a specification mindset',
    '',
    'In CSS specifications, terms such as must, should, computed value, used value, grammar, and conformance carry precise meaning. This summary turns that language into practical authoring decisions, but edge cases still belong in the W3C text.',
    '',
    '## Key concepts',
    '',
    '| Term | Author-facing summary |',
    '| --- | --- |',
    ...item.terms.map((termItem) => `| \`${termItem.syntax}\` | ${termItem.en} |`),
    '',
    '## Authoring examples',
    '',
    ...examples.flatMap((example, index) => [
      `### Example ${index + 1}`,
      '',
      codeFence(example),
      '',
    ]),
    '## Interop and accessibility notes',
    '',
    `- In ${item.enTitle}, grammar and computed-style algorithms are not only implementation details; your CSS must cooperate with them.`,
    '- When the specification allows several shapes, choose the simplest one that is testable and understandable in DevTools.',
    '- For motion, color contrast, focus, and responsive behavior, include user preferences and accessibility constraints from the start.',
    '',
    '## Next step',
    '',
    next ? `Continue with **${next.enTitle}**.` : 'Finish this track by returning to the reference track and testing one real layout.',
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
  if (slug.includes('color') || slug === 'gradients' || slug === 'backgrounds') return cssDocument(item, `.swatch {
  padding: 1.25rem;
  color: white;
  border-radius: 1rem;
  background: linear-gradient(135deg, #2563eb, hsl(280 80% 55%));
}`, `<div class="swatch">
  <h2>${escapeHtml(item.enTitle)}</h2>
  <p>Change the gradient colors and inspect the computed background.</p>
</div>`);
  if (slug.includes('border') || slug === 'rounded-corners' || slug === 'outline') return cssDocument(item, `.card {
  padding: 1rem;
  border: 2px solid #2563eb;
  border-radius: 1rem;
  outline: 3px solid rgb(37 99 235 / .18);
  outline-offset: .25rem;
}`, `<article class="card">
  <h2>${escapeHtml(item.enTitle)}</h2>
  <p>The border box, outline, and radius are visible in DevTools.</p>
</article>`);
  if (slug === 'margins' || slug === 'padding' || slug === 'box-model' || slug === 'box-model-ref' || slug === 'box-sizing') return cssDocument(item, `.box {
  box-sizing: border-box;
  width: min(100%, 28rem);
  margin: 2rem auto;
  padding: 1.5rem;
  border: 3px solid #0f766e;
}`, `<section class="box">
  <h2>${escapeHtml(item.enTitle)}</h2>
  <p>Open the DevTools box model view and compare margin, border, and padding.</p>
</section>`);
  if (slug === 'text' || slug === 'fonts' || slug === 'typography-ref' || slug === 'web-fonts' || slug.includes('text')) return cssDocument(item, `.prose {
  max-width: 62ch;
  font-family: system-ui, sans-serif;
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.7;
}`, `<article class="prose">
  <h2>${escapeHtml(item.enTitle)}</h2>
  <p>Readable CSS typography balances font-size, line-height, and line length.</p>
</article>`);
  if (slug === 'links' || slug === 'navigation-bars' || slug === 'pagination') return cssDocument(item, `.nav {
  display: flex;
  gap: .75rem;
  flex-wrap: wrap;
}
.nav a {
  color: #1d4ed8;
  padding: .5rem .75rem;
  border-radius: 999px;
}
.nav a:focus-visible,
.nav a:hover {
  outline: 2px solid currentColor;
  background: #dbeafe;
}`, `<nav class="nav" aria-label="${escapeHtml(item.enTitle)}">
  <a href="#" aria-current="page">Start</a>
  <a href="#">Reference</a>
  <a href="#">Practice</a>
</nav>`);
  if (slug === 'lists' || slug === 'counters') return cssDocument(item, `.steps {
  counter-reset: step;
  list-style: none;
  padding: 0;
}
.steps li {
  counter-increment: step;
  margin-block: .5rem;
}
.steps li::before {
  content: counter(step) ". ";
  font-weight: 700;
  color: #2563eb;
}`, `<ol class="steps">
  <li>Write the selector.</li>
  <li>Add declarations.</li>
  <li>Inspect the cascade.</li>
</ol>`);
  if (slug === 'tables') return cssDocument(item, `.table-wrap {
  overflow-x: auto;
}
table {
  border-collapse: collapse;
  min-width: 28rem;
}
th,
td {
  border: 1px solid #cbd5e1;
  padding: .65rem;
}`, `<div class="table-wrap">
  <table>
    <caption>${escapeHtml(item.enTitle)} quick table</caption>
    <tr><th>Property</th><th>Value</th></tr>
    <tr><td>border-collapse</td><td>collapse</td></tr>
  </table>
</div>`);
  if (slug === 'display' || slug === 'inline-block' || slug === 'display-flow') return cssDocument(item, `.cluster {
  display: flex;
  flex-wrap: wrap;
  gap: .75rem;
}
span {
  display: inline-block;
  padding: .75rem 1rem;
  background: #eef2ff;
}`, `<div class="cluster">
  <span>block-like sizing</span>
  <span>inline flow</span>
  <span>gap controlled by CSS</span>
</div>`);
  if (slug === 'position' || slug === 'z-index' || slug === 'positioning-ref' || slug === 'dropdowns' || slug === 'tooltips') return cssDocument(item, `.stage {
  position: relative;
  min-height: 10rem;
  border: 1px dashed #94a3b8;
}
button {
  position: absolute;
  inset-block-start: 2rem;
  inset-inline-start: 2rem;
  z-index: 2;
}`, `<div class="stage">
  <button type="button">${escapeHtml(item.enTitle)}</button>
</div>`);
  if (slug === 'overflow' || slug === 'max-width') return cssDocument(item, `.panel {
  max-width: 36ch;
  overflow: auto;
  padding: 1rem;
  border: 1px solid #cbd5e1;
}
.panel code {
  overflow-wrap: anywhere;
}`, `<div class="panel">
  <h2>${escapeHtml(item.enTitle)}</h2>
  <code>very-long-token-that-needs-safe-wrapping-in-a-small-container</code>
</div>`);
  if (slug === 'float') return cssDocument(item, `.article {
  display: flow-root;
}
img {
  float: inline-start;
  width: 8rem;
  margin-inline-end: 1rem;
  border-radius: .75rem;
}`, `<article class="article">
  <img src="https://placehold.co/160x120" alt="CSS float example">
  <p>Text wraps around the floated image, while flow-root contains the float.</p>
</article>`);
  if (slug === 'align') return cssDocument(item, `.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  min-height: 5rem;
}`, `<div class="toolbar">
  <strong>${escapeHtml(item.enTitle)}</strong>
  <button type="button">Action</button>
</div>`);
  if (slug === 'combinators' || slug === 'selectors' || slug === 'selectors-ref' || slug === 'attr-selectors') return cssDocument(item, `article > h2 {
  color: #1d4ed8;
}
a[href^="https"]::after {
  content: " external";
  font-size: .8em;
}`, `<article>
  <h2>${escapeHtml(item.enTitle)}</h2>
  <p><a href="https://developer.mozilla.org/">Read MDN CSS</a></p>
</article>`);
  if (slug === 'pseudo-class') return cssDocument(item, `.choice {
  padding: .8rem 1rem;
  border: 1px solid #94a3b8;
}
button:hover,
button:focus-visible {
  background: #dbeafe;
  outline: 2px solid #2563eb;
}`, `<button class="choice" type="button">${escapeHtml(item.enTitle)}</button>`);
  if (slug === 'pseudo-element') return cssDocument(item, `.badge::before {
  content: "CSS";
  margin-inline-end: .5rem;
  color: #2563eb;
  font-weight: 700;
}
.badge::selection {
  background: #fde68a;
}`, `<p class="badge">${escapeHtml(item.enTitle)} uses generated content.</p>`);
  if (slug === 'opacity' || slug === 'shadows') return cssDocument(item, `.card {
  opacity: .92;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 1rem 2rem rgb(15 23 42 / .16);
}`, `<article class="card">
  <h2>${escapeHtml(item.enTitle)}</h2>
  <p>Opacity affects the entire rendered subtree.</p>
</article>`);
  if (slug === 'forms') return cssDocument(item, `label {
  display: grid;
  gap: .35rem;
}
input {
  padding: .65rem;
  border: 1px solid #94a3b8;
  border-radius: .5rem;
}
input:invalid {
  border-color: #dc2626;
}`, `<form>
  <label>Email <input type="email" required placeholder="name@example.com"></label>
  <button type="submit">Subscribe</button>
</form>`);
  if (slug === 'website-layout' || slug === 'grid' || slug === 'grid-container' || slug === 'grid-items' || slug === 'grid-layout' || slug === 'grid-ref' || slug === 'layout-modules') return cssDocument(item, `.layout {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  gap: 1rem;
}
.layout > * {
  padding: 1rem;
  border-radius: .75rem;
  background: #f1f5f9;
}`, `<main class="layout">
  <section>${escapeHtml(item.enTitle)}</section>
  <section>Grid adapts tracks.</section>
  <section>Inspect grid overlay.</section>
</main>`);
  if (slug === 'units' || slug === 'math-functions' || slug === 'values-units') return cssDocument(item, `.fluid {
  width: min(100%, 42rem);
  padding: clamp(1rem, 4vw, 3rem);
  font-size: clamp(1rem, 2vw, 1.4rem);
  margin-inline: auto;
}`, `<section class="fluid">
  <h2>${escapeHtml(item.enTitle)}</h2>
  <p>Resize the viewport and watch clamp(), min(), rem, and vw interact.</p>
</section>`);
  if (slug === 'specificity' || slug === 'specificity-cascade' || slug === 'important' || slug === 'cascade-inheritance' || slug === 'cascade-spec' || slug === 'cascade-layers') return cssDocument(item, `@layer base, components;
@layer base {
  :where(.note) { color: #334155; }
}
@layer components {
  .note.featured { color: #1d4ed8; }
}`, `<p class="note featured">
  Inspect which cascade layer and selector wins for ${escapeHtml(item.enTitle)}.
</p>`);
  if (slug === 'transforms-2d' || slug === 'transforms-3d' || slug === 'transforms-ref') return cssDocument(item, `.tile {
  display: inline-block;
  padding: 1rem;
  border-radius: .75rem;
  background: #dbeafe;
  transform: translateX(1rem) rotate(3deg) scale(1.04);
}`, `<div class="tile">${escapeHtml(item.enTitle)}</div>`);
  if (slug === 'transitions' || slug === 'transitions-animations') return cssDocument(item, `.button {
  padding: .8rem 1rem;
  border: 0;
  border-radius: .75rem;
  background: #2563eb;
  color: white;
  transition: transform 180ms ease, background-color 180ms ease;
}
.button:hover {
  transform: translateY(-2px);
  background: #1d4ed8;
}`, `<button class="button" type="button">${escapeHtml(item.enTitle)}</button>`);
  if (slug === 'animations') return cssDocument(item, `@keyframes pulse {
  from { transform: scale(1); }
  to { transform: scale(1.08); }
}
@media (prefers-reduced-motion: no-preference) {
  .dot { animation: pulse 700ms ease-in-out infinite alternate; }
}
.dot {
  width: 4rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #2563eb;
}`, `<div class="dot" aria-label="${escapeHtml(item.enTitle)}"></div>`);
  if (slug === 'object-fit' || slug === 'image-gallery' || slug === 'rwd-images') return cssDocument(item, `.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: 1rem;
}
img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: .75rem;
}`, `<div class="gallery">
  <img src="https://placehold.co/400x300" alt="CSS media frame">
  <img src="https://placehold.co/300x400" alt="CSS cropped frame">
</div>`);
  if (slug === 'masking') return cssDocument(item, `.masked {
  padding: 3rem;
  color: white;
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  mask-image: radial-gradient(circle, black 55%, transparent 70%);
}`, `<div class="masked">${escapeHtml(item.enTitle)}</div>`);
  if (slug === 'multiple-columns') return cssDocument(item, `.columns {
  column-count: 2;
  column-gap: 2rem;
  column-rule: 1px solid #cbd5e1;
}`, `<article class="columns">
  <h2>${escapeHtml(item.enTitle)}</h2>
  <p>Multi-column layout fragments long text into readable columns.</p>
  <p>Use breaks carefully so headings stay with their content.</p>
</article>`);
  if (slug === 'variables' || slug === 'custom-properties') return cssDocument(item, `:root {
  --brand: #2563eb;
  --surface: #eff6ff;
}
button {
  background: var(--brand);
  color: white;
  border: 0;
  border-radius: .75rem;
  padding: .75rem 1rem;
}
.panel {
  background: var(--surface);
  padding: 1rem;
}`, `<section class="panel">
  <h2>${escapeHtml(item.enTitle)}</h2>
  <button type="button">Uses var()</button>
</section>`);
  if (slug === 'media-queries' || slug === 'responsive' || slug === 'rwd-media-queries' || slug === 'responsive-design' || slug === 'media-queries-spec') return cssDocument(item, `.cards {
  display: grid;
  gap: 1rem;
}
@media (min-width: 48rem) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
  }
}`, `<div class="cards">
  <article>Small first</article>
  <article>Then wider</article>
  <article>Inspect responsive mode</article>
</div>`);
  if (slug === 'flexbox' || slug === 'flex-container' || slug === 'flex-items' || slug === 'flex-responsive' || slug === 'flexbox-ref') return cssDocument(item, `.stack {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  gap: 1rem;
}
article {
  flex: 1 1 12rem;
  padding: 1rem;
  background: #eef2ff;
  border-radius: .75rem;
}`, `<div class="stack">
  <article>${escapeHtml(item.enTitle)}</article>
  <article>flex: 1 1 12rem</article>
  <article>wraps when narrow</article>
</div>`);
  if (slug === 'rwd-viewport') return cssDocument(item, `body {
  margin: 0;
  font-family: system-ui, sans-serif;
}
main {
  width: min(100% - 2rem, 48rem);
  margin-inline: auto;
}`, `<main>
  <h1>${escapeHtml(item.enTitle)}</h1>
  <p>Add the viewport meta tag so CSS pixels match mobile expectations.</p>
</main>`, '<meta name="viewport" content="width=device-width, initial-scale=1.0">');
  if (slug === 'rwd-grid') return cssDocument(item, `.rwd-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  gap: 1rem;
}`, `<div class="rwd-grid">
  <section>Fluid column</section>
  <section>Fluid column</section>
  <section>Fluid column</section>
</div>`);
  if (slug === 'rwd-videos') return cssDocument(item, `.video {
  aspect-ratio: 16 / 9;
  width: 100%;
  background: #0f172a;
  color: white;
  display: grid;
  place-items: center;
}`, `<div class="video">Responsive video frame</div>`);
  if (slug === 'rwd-frameworks' || slug === 'container-queries') return cssDocument(item, `.card-shell {
  container-type: inline-size;
}
.card {
  padding: 1rem;
  background: #f8fafc;
}
@container (min-width: 28rem) {
  .card {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem;
  }
}`, `<div class="card-shell">
  <article class="card">
    <strong>${escapeHtml(item.enTitle)}</strong>
    <p>Resize the container, not just the viewport.</p>
  </article>
</div>`);
  if (slug === 'nesting-ref') return cssDocument(item, `.card {
  padding: 1rem;
  border: 1px solid #cbd5e1;

  & h2 {
    color: #1d4ed8;
  }

  &:hover {
    background: #eff6ff;
  }
}`, `<article class="card">
  <h2>${escapeHtml(item.enTitle)}</h2>
  <p>Native CSS nesting keeps related selectors close.</p>
</article>`);
  if (slug === 'at-rules' || slug === 'web-fonts' || slug === 'fonts-text-spec') return cssDocument(item, `@supports (font-size: clamp(1rem, 2vw, 2rem)) {
  h1 {
    font-size: clamp(1.5rem, 5vw, 3rem);
  }
}
@media (prefers-color-scheme: dark) {
  body {
    background: #0f172a;
    color: white;
  }
}`, `<main>
  <h1>${escapeHtml(item.enTitle)}</h1>
  <p>At-rules group CSS by support, media, or font behavior.</p>
</main>`);
  if (slug === 'functions-ref') return cssDocument(item, `.box {
  width: min(100%, 36rem);
  padding: calc(1rem + 1vw);
  color: color-mix(in srgb, #2563eb 80%, black);
  background: linear-gradient(135deg, #eff6ff, white);
}`, `<section class="box">
  <h2>${escapeHtml(item.enTitle)}</h2>
  <p>CSS functions calculate values at style time.</p>
</section>`);
  if (slug === 'accessibility-css') return cssDocument(item, `button {
  padding: .75rem 1rem;
  color: white;
  background: #1d4ed8;
}
button:focus-visible {
  outline: 3px solid #f59e0b;
  outline-offset: 3px;
}
@media (prefers-reduced-motion: reduce) {
  * {
    transition-duration: 0.01ms;
  }
}`, `<button type="button">${escapeHtml(item.enTitle)}</button>`);
  if (slug === 'css-snapshot' || slug === 'overview' || slug === 'introduction') return cssDocument(item, `:root {
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
}`, `<main>
  <h1>${escapeHtml(item.enTitle)}</h1>
  <p>CSS rules cascade from selectors into computed style.</p>
</main>`);
  if (slug === 'color-spec') return cssDocument(item, `.chip {
  --brand: oklch(56% 0.2 260);
  padding: 1rem;
  color: white;
  background: var(--brand);
  border-radius: .75rem;
}`, `<div class="chip">${escapeHtml(item.enTitle)}</div>`);
  if (slug === 'box-model-spec') return cssDocument(item, `.spec-box {
  box-sizing: border-box;
  inline-size: 18rem;
  padding: 1rem;
  border: .5rem solid #2563eb;
  margin: 1rem;
}`, `<div class="spec-box">${escapeHtml(item.enTitle)}</div>`);
  if (slug === 'selectors-spec') return cssDocument(item, `article:has(a[href^="https"]) {
  border-inline-start: .25rem solid #2563eb;
  padding-inline-start: 1rem;
}
article :is(h2, p) {
  margin-block: .5rem;
}`, `<article>
  <h2>${escapeHtml(item.enTitle)}</h2>
  <p><a href="https://www.w3.org/Style/CSS/">W3C CSS</a></p>
</article>`);

  return cssDocument(item, `.demo {
  padding: 1rem;
  border-radius: .75rem;
  background: #f8fafc;
}
.demo code {
  color: #2563eb;
  font-weight: 700;
}`, `<section class="demo">
  <h2>${escapeHtml(item.enTitle)}</h2>
  <p>Try changing <code>${escapeHtml(item.terms[0].syntax)}</code> and inspect the computed style.</p>
</section>`);
}

function cssDocument(item, css, html, extraHead = '') {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ${extraHead ? `${extraHead}\n    ` : ''}<title>${escapeHtml(item.enTitle)} practice</title>
    <style>
${indent(css.trim(), 6)}
    </style>
  </head>
  <body>
${indent(html.trim(), 4)}
  </body>
</html>`;
}

function referenceSnippet(item) {
  return cssDocument(item, `.reference-card {
  max-width: 42rem;
  padding: 1rem;
  border: 1px solid #cbd5e1;
  border-radius: .75rem;
}
dt {
  font-weight: 700;
  color: #2563eb;
}
dd {
  margin-block-end: .75rem;
}`, `<article class="reference-card">
  <h2>${escapeHtml(item.enTitle)}</h2>
  <dl>
${item.terms.map((termItem) => `    <dt><code>${escapeHtml(termItem.syntax)}</code></dt>\n    <dd>${escapeHtml(termItem.en)}</dd>`).join('\n')}
  </dl>
</article>`);
}

function optionTableSnippet(item) {
  return cssDocument(item, `table {
  border-collapse: collapse;
  width: min(100%, 42rem);
}
caption {
  font-weight: 700;
  margin-block-end: .5rem;
}
th,
td {
  border: 1px solid #cbd5e1;
  padding: .65rem;
  text-align: start;
}
code {
  color: #1d4ed8;
}`, `<table>
  <caption>${escapeHtml(item.enTitle)} quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
${item.terms.map((termItem) => `    <tr><td><code>${escapeHtml(termItem.syntax)}</code></td><td>${escapeHtml(termItem.en)}</td></tr>`).join('\n')}
  </tbody>
</table>`);
}

function completeDocumentSnippet(item, inner) {
  if (/^<!doctype html>/i.test(inner.trim())) {
    return cssDocument(item, `main {
  width: min(100% - 2rem, 52rem);
  margin-inline: auto;
  padding-block: 2rem;
}
.checklist {
  display: grid;
  gap: .75rem;
}`, `<main>
  <h1>${escapeHtml(item.enTitle)} checklist</h1>
  <ul class="checklist">
    <li>Inspect the winning CSS rule.</li>
    <li>Check the computed style and box model.</li>
    <li>Resize the viewport and test keyboard focus.</li>
  </ul>
</main>`);
  }
  return cssDocument(item, `main {
  width: min(100% - 2rem, 52rem);
  margin-inline: auto;
  padding-block: 2rem;
}`, `<main>
  <h1>${escapeHtml(item.enTitle)} practice</h1>
${indent(inner.trim(), 2)}
</main>`);
}

function learnMistakes(item, locale) {
  if (locale === 'fa') {
    return [
      `- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در ${item.faTitle}.`,
      '- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.',
      `- فراموش کردن تست \`${item.terms[0].syntax}\` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.`,
    ];
  }
  return [
    `- Raising specificity or reaching for !important before understanding the cascade in ${item.enTitle}.`,
    '- Copying the example without changing color tokens, spacing, breakpoints, or selectors for the real project.',
    `- Forgetting to test \`${item.terms[0].syntax}\` in DevTools, responsive mode, keyboard focus, and hover/focus states.`,
  ];
}

function practiceSignal(item, locale) {
  if (locale === 'fa') {
    if (item.slug.includes('flex')) return 'alignment روشن روی main axis و cross axis، همراه wrapping قابل پیش‌بینی';
    if (item.slug.includes('grid')) return 'trackهای قابل فهم، gap پایدار و placement قابل مشاهده در grid overlay';
    if (item.slug.includes('media') || item.slug.includes('rwd') || item.slug === 'responsive') return 'رفتار پایدار در viewportهای مختلف و احترام به preference کاربر';
    if (item.slug.includes('color') || item.slug === 'gradients') return 'contrast کافی و tokenهای رنگ قابل نگه‌داری';
    if (item.slug.includes('animation') || item.slug.includes('transition') || item.slug.includes('transform')) return 'motion نرم، performant و سازگار با prefers-reduced-motion';
    if (item.slug.includes('form') || item.slug.includes('button') || item.slug.includes('link')) return 'focus واضح، hit target مناسب و stateهای hover/focus/disabled';
    return 'هماهنگی selector، declaration، cascade و computed style';
  }
  if (item.slug.includes('flex')) return 'clear main-axis and cross-axis alignment with predictable wrapping';
  if (item.slug.includes('grid')) return 'understandable tracks, stable gaps, and visible placement in the grid overlay';
  if (item.slug.includes('media') || item.slug.includes('rwd') || item.slug === 'responsive') return 'stable behavior across viewports and respect for user preferences';
  if (item.slug.includes('color') || item.slug === 'gradients') return 'sufficient contrast and maintainable color tokens';
  if (item.slug.includes('animation') || item.slug.includes('transition') || item.slug.includes('transform')) return 'smooth, performant motion that respects prefers-reduced-motion';
  if (item.slug.includes('form') || item.slug.includes('button') || item.slug.includes('link')) return 'visible focus, useful hit targets, and hover/focus/disabled states';
  return 'alignment between selectors, declarations, the cascade, and computed style';
}

function enExampleHeading(item, index) {
  const headings = ['Focused CSS pattern', 'Options in a styled table', 'Complete practice page'];
  return headings[index] ?? item.enTitle;
}

function faExampleHeading(item, index) {
  const headings = ['الگوی CSS متمرکز', 'گزینه‌ها در جدول style شده', 'صفحه تمرینی کامل'];
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
  let text = String(value).replace(/\s+/g, ' ').trim();
  if (!/[.!?]$/u.test(text)) text = `${text}.`;

  const inserts =
    locale === 'fa'
      ? [' همراه تمرین کاربردی', ' برای پروژه واقعی وب', ' با نکته DevTools', ' در مسیر MEGA JS']
      : [' with practical drills', ' for real-world projects', ' with DevTools checks', ' on the MEGA JS path'];

  if (text.length < min) {
    let grown = text;
    for (const insert of inserts) {
      grown = `${grown.replace(/[.!?]$/u, '')}${insert}.`.replace(/\s+/g, ' ').trim();
      if (grown.length >= min && grown.length <= max) return grown;
      if (grown.length > max) {
        const fitted = fitWindow(grown, min, max);
        if (fitted) return fitted;
        break;
      }
    }
    text = grown;
  }

  if (text.length > max) {
    const fitted = fitWindow(text, min, max);
    if (fitted) return fitted;
  }

  if (text.length < min || text.length > max) {
    throw new Error(`Unable to fit SEO description (${text.length}): ${text}`);
  }
  return text;
}

function fitWindow(value, min, max) {
  const source = String(value).replace(/\s+/g, ' ').trim();
  const banned = /(و|یا|با|برای|در|از|به|که|روی|درباره|نکته|and|or|with|for|to|of|in|a|the|on|Ideal|Includes|همراه|مناسب)$/iu;
  for (let size = max; size >= min; size -= 1) {
    let cut = source.slice(0, size);
    const space = cut.lastIndexOf(' ');
    if (space >= min - 1) cut = cut.slice(0, space);
    cut = cut.replace(/[،؛,:\-\s.]+$/u, '').trim();
    cut = cut.replace(/\s+/g, ' ').replace(banned, '').trim();
    if (!cut || cut.length < min - 1) continue;
    const closed = `${cut}.`;
    if (closed.length >= min && closed.length <= max && !banned.test(closed.slice(0, -1))) {
      return closed;
    }
  }
  return null;
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

  console.log('Generated CSS docs into three tracks.');
  for (const track of meta.tracks) {
    console.log(`${track.id}: ${counts[track.id].pages} pages, ${counts[track.id].files} markdown files`);
  }
  console.log(`Total pages per locale: ${Object.values(counts).reduce((sum, count) => sum + count.pages, 0)}`);
  console.log(`Meta JSON: ${path.join(DOCS_ROOT, 'meta.json')}`);
  console.log('Sample paths:');
  console.log(`- ${path.join(DOCS_ROOT, 'fa/learn/introduction.md')}`);
  console.log(`- ${path.join(DOCS_ROOT, 'en/reference/selectors-ref.md')}`);
  console.log(`- ${path.join(DOCS_ROOT, 'fa/official/overview.md')}`);
}

writeDocs().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
