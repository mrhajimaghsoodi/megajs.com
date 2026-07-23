import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function upsertTrack(input: {
  slug: string;
  yearPlan: number;
  status: string;
  sortOrder: number;
  fa: { title: string; summary: string };
  en: { title: string; summary: string };
}) {
  return prisma.track.upsert({
    where: { slug: input.slug },
    create: {
      slug: input.slug,
      yearPlan: input.yearPlan,
      status: input.status,
      sortOrder: input.sortOrder,
      i18n: {
        create: [
          { locale: 'fa', title: input.fa.title, summary: input.fa.summary },
          { locale: 'en', title: input.en.title, summary: input.en.summary },
        ],
      },
    },
    update: {
      yearPlan: input.yearPlan,
      status: input.status,
      sortOrder: input.sortOrder,
    },
  });
}

async function upsertCourse(input: {
  trackId: string;
  slug: string;
  status: string;
  accessTier: string;
  priceCents: number;
  sortOrder: number;
  fa: { title: string; summary: string };
  en: { title: string; summary: string };
  modules: Array<{
    slug: string;
    faTitle: string;
    enTitle: string;
    lessons: Array<{
      slug: string;
      isFreePreview?: boolean;
      faTitle: string;
      enTitle: string;
      faBody: string;
      enBody: string;
    }>;
  }>;
}) {
  const course = await prisma.course.upsert({
    where: { slug: input.slug },
    create: {
      trackId: input.trackId,
      slug: input.slug,
      status: input.status,
      accessTier: input.accessTier,
      priceCents: input.priceCents,
      sortOrder: input.sortOrder,
      i18n: {
        create: [
          { locale: 'fa', title: input.fa.title, summary: input.fa.summary },
          { locale: 'en', title: input.en.title, summary: input.en.summary },
        ],
      },
    },
    update: {
      status: input.status,
      accessTier: input.accessTier,
      priceCents: input.priceCents,
      sortOrder: input.sortOrder,
    },
  });

  for (const [mi, mod] of input.modules.entries()) {
    const moduleRow = await prisma.module.upsert({
      where: {
        courseId_slug: { courseId: course.id, slug: mod.slug },
      },
      create: {
        courseId: course.id,
        slug: mod.slug,
        sortOrder: mi + 1,
        i18n: {
          create: [
            { locale: 'fa', title: mod.faTitle },
            { locale: 'en', title: mod.enTitle },
          ],
        },
      },
      update: { sortOrder: mi + 1 },
    });

    for (const [li, lesson] of mod.lessons.entries()) {
      await prisma.lesson.upsert({
        where: {
          moduleId_slug: { moduleId: moduleRow.id, slug: lesson.slug },
        },
        create: {
          moduleId: moduleRow.id,
          slug: lesson.slug,
          status: 'published',
          isFreePreview: Boolean(lesson.isFreePreview),
          sortOrder: li + 1,
          i18n: {
            create: [
              {
                locale: 'fa',
                title: lesson.faTitle,
                summary: lesson.faTitle,
                bodyMdx: lesson.faBody,
              },
              {
                locale: 'en',
                title: lesson.enTitle,
                summary: lesson.enTitle,
                bodyMdx: lesson.enBody,
              },
            ],
          },
        },
        update: {
          isFreePreview: Boolean(lesson.isFreePreview),
          sortOrder: li + 1,
        },
      });
    }
  }

  return course;
}

async function main() {
  const fundamentals = await upsertTrack({
    slug: 'frontend-fundamentals',
    yearPlan: 1,
    status: 'published',
    sortOrder: 1,
    fa: {
      title: 'مبانی فرانت‌اند',
      summary: 'HTML، CSS و Tailwind — پایه رابط کاربری مدرن',
    },
    en: {
      title: 'Frontend Fundamentals',
      summary: 'HTML, CSS, and Tailwind — modern UI foundations',
    },
  });

  const language = await upsertTrack({
    slug: 'language-core',
    yearPlan: 1,
    status: 'published',
    sortOrder: 2,
    fa: {
      title: 'هسته زبان',
      summary: 'JavaScript و TypeScript از صفر تا حرفه‌ای',
    },
    en: {
      title: 'Language Core',
      summary: 'JavaScript and TypeScript from zero to pro',
    },
  });

  const reactEco = await upsertTrack({
    slug: 'react-ecosystem',
    yearPlan: 1,
    status: 'published',
    sortOrder: 3,
    fa: {
      title: 'اکوسیستم React',
      summary: 'React، Next.js و کتابخانه‌های محبوب',
    },
    en: {
      title: 'React Ecosystem',
      summary: 'React, Next.js, and popular libraries',
    },
  });

  await upsertTrack({
    slug: 'frameworks-landscape',
    yearPlan: 2,
    status: 'coming_soon',
    sortOrder: 4,
    fa: { title: 'چشم‌انداز فریم‌ورک‌ها', summary: 'Vue.js و Angular — به‌زودی' },
    en: { title: 'Frameworks Landscape', summary: 'Vue.js and Angular — coming soon' },
  });

  await upsertTrack({
    slug: 'app-platforms',
    yearPlan: 3,
    status: 'coming_soon',
    sortOrder: 5,
    fa: { title: 'پلتفرم‌های اپلیکیشن', summary: 'React Native و Electron — به‌زودی' },
    en: { title: 'App Platforms', summary: 'React Native and Electron — coming soon' },
  });

  await upsertTrack({
    slug: 'backend-js',
    yearPlan: 4,
    status: 'coming_soon',
    sortOrder: 6,
    fa: { title: 'بک‌اند جاوااسکریپت', summary: 'Node.js و NestJS — به‌زودی' },
    en: { title: 'Backend JS', summary: 'Node.js and NestJS — coming soon' },
  });

  await upsertCourse({
    trackId: fundamentals.id,
    slug: 'html',
    status: 'published',
    accessTier: 'free',
    priceCents: 0,
    sortOrder: 1,
    fa: { title: 'HTML', summary: 'ساختار صفحات وب را از پایه یاد بگیرید' },
    en: { title: 'HTML', summary: 'Learn the structure of the web from scratch' },
    modules: [
      {
        slug: 'intro',
        faTitle: 'شروع',
        enTitle: 'Getting started',
        lessons: [
          {
            slug: 'what-is-html',
            isFreePreview: true,
            faTitle: 'HTML چیست؟',
            enTitle: 'What is HTML?',
            faBody: 'HTML زبان نشانه‌گذاری ساختاربخش صفحات وب است.',
            enBody: 'HTML is the markup language that structures web pages.',
          },
          {
            slug: 'first-page',
            isFreePreview: true,
            faTitle: 'اولین صفحه',
            enTitle: 'Your first page',
            faBody: 'یک سند HTML حداقلی بسازید و در مرورگر باز کنید.',
            enBody: 'Create a minimal HTML document and open it in the browser.',
          },
        ],
      },
    ],
  });

  await upsertCourse({
    trackId: language.id,
    slug: 'javascript',
    status: 'published',
    accessTier: 'subscription',
    priceCents: 0,
    sortOrder: 1,
    fa: { title: 'JavaScript', summary: 'ستون برند MEGA JS — زبان وب تعاملی' },
    en: { title: 'JavaScript', summary: 'The core of MEGA JS — the language of the interactive web' },
    modules: [
      {
        slug: 'basics',
        faTitle: 'مبانی',
        enTitle: 'Basics',
        lessons: [
          {
            slug: 'values-and-types',
            isFreePreview: true,
            faTitle: 'مقادیر و نوع‌ها',
            enTitle: 'Values and types',
            faBody: 'با مقادیر اولیه، متغیرها و نوع‌ها آشنا شوید.',
            enBody: 'Learn primitives, variables, and types.',
          },
        ],
      },
    ],
  });

  await upsertCourse({
    trackId: reactEco.id,
    slug: 'react',
    status: 'published',
    accessTier: 'paid',
    priceCents: 2_900_000,
    sortOrder: 1,
    fa: { title: 'React.js', summary: 'ساخت رابط‌های کامپوننت‌محور مدرن' },
    en: { title: 'React.js', summary: 'Build modern component-driven UIs' },
    modules: [
      {
        slug: 'intro',
        faTitle: 'مقدمه',
        enTitle: 'Intro',
        lessons: [
          {
            slug: 'why-react',
            isFreePreview: true,
            faTitle: 'چرا React؟',
            enTitle: 'Why React?',
            faBody: 'مدل ذهنی کامپوننت، state و ترکیب UI.',
            enBody: 'Component mental model, state, and composition.',
          },
        ],
      },
    ],
  });

  await prisma.challenge.upsert({
    where: { slug: 'sum-two-numbers' },
    create: {
      slug: 'sum-two-numbers',
      status: 'published',
      difficulty: 'easy',
      language: 'javascript',
      points: 100,
      i18n: {
        create: [
          {
            locale: 'fa',
            title: 'جمع دو عدد',
            promptMdx: 'تابعی بنویسید که دو عدد را جمع کند و برگرداند.',
            starterCode: 'function sum(a, b) {\n  // TODO\n}\n',
          },
          {
            locale: 'en',
            title: 'Sum two numbers',
            promptMdx: 'Write a function that returns the sum of two numbers.',
            starterCode: 'function sum(a, b) {\n  // TODO\n}\n',
          },
        ],
      },
      tests: {
        create: [
          { inputJson: '[1,2]', outputJson: '3', sortOrder: 1 },
          { inputJson: '[10,-3]', outputJson: '7', sortOrder: 2 },
        ],
      },
    },
    update: { status: 'published', points: 100 },
  });

  await prisma.plan.upsert({
    where: { code: 'pro-monthly' },
    create: {
      code: 'pro-monthly',
      intervalDays: 30,
      priceCents: 990_000,
      currency: 'IRT',
      i18nJson: JSON.stringify({
        fa: { title: 'اشتراک ماهانه پرو', summary: 'دسترسی به مسیرهای اشتراکی' },
        en: { title: 'Pro Monthly', summary: 'Access subscription tracks' },
      }),
    },
    update: { priceCents: 990_000 },
  });

  const startsAt = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000);
  await prisma.liveEvent.upsert({
    where: { slug: 'js-office-hours-1' },
    create: {
      slug: 'js-office-hours-1',
      status: 'scheduled',
      startsAt,
      destinationsJson: JSON.stringify(['site', 'youtube', 'aparat', 'instagram']),
      externalUrlsJson: JSON.stringify({
        youtube: 'https://youtube.com',
        aparat: 'https://aparat.com',
        instagram: 'https://instagram.com',
      }),
      i18n: {
        create: [
          {
            locale: 'fa',
            title: 'وبینار پرسش‌وپاسخ جاوااسکریپت',
            summary: 'لایو هم‌زمان در سایت، یوتیوب، آپارات و اینستاگرام',
          },
          {
            locale: 'en',
            title: 'JavaScript Office Hours',
            summary: 'Simulcast on site, YouTube, Aparat, and Instagram',
          },
        ],
      },
    },
    update: {
      status: 'scheduled',
      startsAt,
    },
  });

  // Staff admin for panel (OTP login with this phone in non-prod)
  await prisma.user.upsert({
    where: { phone: '+989120000000' },
    create: {
      phone: '+989120000000',
      phoneVerified: true,
      displayName: 'MEGA Admin',
      role: 'super_admin',
      identities: {
        create: { provider: 'phone', providerUserId: '+989120000000' },
      },
      wallet: { create: { balance: 0 } },
    },
    update: { role: 'super_admin', phoneVerified: true, displayName: 'MEGA Admin' },
  });

  // eslint-disable-next-line no-console
  console.log('Seed completed (admin phone +989120000000)');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
