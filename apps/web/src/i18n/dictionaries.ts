import type { Locale } from '@/lib/utils';

const fa = {
  brand: 'MEGA JS',
  tagline: 'مسیر روزانه یادگیری اکوسیستم جاوااسکریپت',
  heroSupport:
    'از HTML تا Next.js — بعد Vue، Angular، React Native، Electron و NestJS. رایگان، اشتراک، و دوره‌های تخصصی.',
  ctaStart: 'شروع رایگان',
  ctaPath: 'مشاهده مسیر یادگیری',
  nav: {
    today: 'امروز',
    learn: 'یادگیری',
    practice: 'تمرین',
    live: 'لایو',
    pricing: 'قیمت‌ها',
    login: 'ورود',
    profile: 'پنل من',
  },
  sections: {
    roadmapTitle: 'نقشه چهارساله اکوسیستم JS',
    roadmapBody: 'هر سال یک لایه عمیق‌تر — بدون ترک برند جاوااسکریپت.',
    dailyTitle: 'هر روز برگرد، یک قدم جلو برو',
    dailyBody: 'درس امروز، استریک، چالش کوتاه و تبدیل امتیاز به توکن.',
    contentTitle: 'متن، ویدیو، پادکست، مقاله، چالش',
    contentBody: 'یک هسته محتوا، چند کانال انتشار — سایت، یوتیوب، آپارات، اینستاگرام.',
    pricingTitle: 'سه لایه دسترسی',
    free: 'رایگان',
    sub: 'اشتراک ماهانه',
    paid: 'دوره پولی',
    comingSoon: 'به‌زودی',
  },
  footer: 'آکادمی اکوسیستم جاوااسکریپت — SEO اول، یادگیری روزانه همیشه.',
};

const en = {
  brand: 'MEGA JS',
  tagline: 'Your daily path through the JavaScript ecosystem',
  heroSupport:
    'From HTML to Next.js — then Vue, Angular, React Native, Electron, and NestJS. Free, subscription, and premium courses.',
  ctaStart: 'Start free',
  ctaPath: 'View learning path',
  nav: {
    today: 'Today',
    learn: 'Learn',
    practice: 'Practice',
    live: 'Live',
    pricing: 'Pricing',
    login: 'Log in',
    profile: 'My panel',
  },
  sections: {
    roadmapTitle: 'Four-year JS ecosystem roadmap',
    roadmapBody: 'One deeper layer each year — without leaving JavaScript.',
    dailyTitle: 'Come back every day. Move one step.',
    dailyBody: 'Today lesson, streak, short challenge, and points that become tokens.',
    contentTitle: 'Text, video, podcast, articles, challenges',
    contentBody: 'One content core, many channels — site, YouTube, Aparat, Instagram.',
    pricingTitle: 'Three access layers',
    free: 'Free',
    sub: 'Monthly subscription',
    paid: 'Paid course',
    comingSoon: 'Coming soon',
  },
  footer: 'JavaScript ecosystem academy — SEO first, daily learning always.',
};

export type Dictionary = typeof fa;

export function getDictionary(locale: Locale): Dictionary {
  return locale === 'en' ? en : fa;
}
