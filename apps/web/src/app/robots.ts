import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

/** Private / non-indexable path patterns shared across crawlers */
const DISALLOW = [
  '/fa/profile',
  '/en/profile',
  '/fa/profile/',
  '/en/profile/',
  '/fa/login',
  '/en/login',
  '/*/profile',
  '/*/profile/*',
  '/*/login',
  '/api/',
];

/**
 * AI search crawlers (allowed) vs training-only crawlers (blocked).
 * Policy: maximize AI Overview / ChatGPT / Perplexity / Claude search visibility;
 * opt out of model-training scrapers that do not power citation surfaces.
 * @see https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
 */
const AI_SEARCH_BOTS = [
  'GPTBot',
  'OAI-SearchBot',
  'ClaudeBot',
  'PerplexityBot',
  'Google-Extended',
] as const;

const AI_TRAINING_BOTS = ['CCBot', 'Bytespider', 'anthropic-ai', 'cohere-ai'] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: DISALLOW,
      },
      ...AI_SEARCH_BOTS.map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow: DISALLOW,
      })),
      ...AI_TRAINING_BOTS.map((userAgent) => ({
        userAgent,
        disallow: ['/'],
      })),
    ],
    sitemap: `${SITE_URL}/sitemap_index.xml`,
    host: SITE_URL,
  };
}
