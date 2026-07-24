import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/fa/profile',
          '/en/profile',
          '/fa/profile/',
          '/en/profile/',
          '/fa/login',
          '/en/login',
          '/*/profile',
          '/*/profile/*',
          '/*/login',
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
