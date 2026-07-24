import { Injectable } from '@nestjs/common';

export type SeoIssue = {
  id: string;
  severity: 'good' | 'ok' | 'bad';
  message: string;
};

const SITE = process.env.PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || 'https://megajs.com';

function absUrl(path?: string | null) {
  if (!path) return undefined;
  if (/^https?:\/\//i.test(path)) return path;
  const base = SITE.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

@Injectable()
export class RankMathService {
  /** Rank Math–style content analysis for posts/pages */
  analyze(input: {
    title?: string;
    metaTitle?: string;
    metaDescription?: string;
    slug?: string;
    body?: string;
    focusKeyword?: string;
    canonicalPath?: string;
    ogImageUrl?: string;
    publishedAt?: string | Date | null;
    modifiedAt?: string | Date | null;
    imageUrl?: string | null;
    authorName?: string | null;
    locale?: string;
    siteName?: string;
  }) {
    const title = (input.metaTitle || input.title || '').trim();
    const desc = (input.metaDescription || '').trim();
    const body = (input.body || '').trim();
    const slug = (input.slug || '').trim();
    const kw = (input.focusKeyword || '').trim().toLowerCase();
    const issues: SeoIssue[] = [];
    let score = 0;

    const add = (
      ok: boolean,
      pts: number,
      id: string,
      good: string,
      bad: string,
      severityFail: 'bad' | 'ok' = 'bad',
    ) => {
      if (ok) {
        score += pts;
        issues.push({ id, severity: 'good', message: good });
      } else {
        issues.push({ id, severity: severityFail, message: bad });
      }
    };

    add(
      title.length >= 30 && title.length <= 60,
      12,
      'title_len',
      'Title length is in the sweet spot (30–60).',
      'SEO title should be 30–60 characters.',
    );
    add(
      desc.length >= 70 && desc.length <= 160,
      12,
      'desc_len',
      'Meta description length looks good (70–160).',
      'Meta description should be 70–160 characters.',
    );
    add(Boolean(slug), 8, 'slug', 'URL slug is set.', 'Add a URL slug.');
    add(
      Boolean(input.canonicalPath),
      8,
      'canonical',
      'Canonical URL is set.',
      'Set a canonical URL (self-referencing).',
    );
    add(
      Boolean(input.ogImageUrl || input.imageUrl),
      8,
      'og',
      'Social / OG image is set.',
      'Add an Open Graph image (1200×630 recommended).',
    );
    add(
      body.length >= 300,
      10,
      'content',
      'Content has enough length for topical depth.',
      'Write at least ~300 characters of unique content.',
    );
    add(
      body.length >= 900,
      5,
      'content_depth',
      'Long-form content — good topical coverage.',
      'Consider expanding content (~900+ chars) for competitive queries.',
      'ok',
    );

    const hasH2 = /(?:^|\n)\s{0,3}#{2,3}\s+\S|<(h2|h3)[\s>]/i.test(body);
    add(hasH2 || body.length < 400, 5, 'headings', 'Subheadings help structure.', 'Add H2/H3 subheadings.', 'ok');

    if (kw) {
      const titleHas = title.toLowerCase().includes(kw);
      const descHas = desc.toLowerCase().includes(kw);
      const bodyHas = body.toLowerCase().includes(kw);
      const slugHas = slug.toLowerCase().includes(kw.replace(/\s+/g, '-'));
      const density =
        body.length > 0
          ? (body.toLowerCase().split(kw).length - 1) / Math.max(1, body.split(/\s+/).length)
          : 0;
      add(titleHas, 10, 'kw_title', 'Focus keyword in SEO title.', 'Add focus keyword to the SEO title.');
      add(descHas, 8, 'kw_desc', 'Focus keyword in meta description.', 'Add focus keyword to meta description.');
      add(bodyHas, 6, 'kw_body', 'Focus keyword found in content.', 'Use focus keyword naturally in the body.');
      add(slugHas, 4, 'kw_slug', 'Focus keyword in slug.', 'Include focus keyword in the slug.');
      add(
        density > 0 && density <= 0.03,
        4,
        'kw_density',
        'Keyword density looks natural.',
        'Avoid keyword stuffing; keep density under ~3%.',
        'ok',
      );
    } else {
      issues.push({
        id: 'kw_missing',
        severity: 'ok',
        message: 'No focus keyword set (recommended in Rank Math).',
      });
    }

    const label = score >= 80 ? 'great' : score >= 50 ? 'ok' : 'needs_work';
    const locale = input.locale || 'fa';
    let pageUrl: string | undefined;
    if (input.canonicalPath?.startsWith('http')) {
      pageUrl = input.canonicalPath;
    } else if (input.canonicalPath) {
      const path = input.canonicalPath.startsWith('/')
        ? input.canonicalPath
        : `/${input.canonicalPath}`;
      pageUrl = absUrl(`/${locale}${path}`);
    }
    const image = absUrl(input.ogImageUrl || input.imageUrl || undefined);
    const published = input.publishedAt ? new Date(input.publishedAt).toISOString() : undefined;
    const modified = input.modifiedAt
      ? new Date(input.modifiedAt).toISOString()
      : published;

    const schemaSuggestion = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title || undefined,
      description: desc || undefined,
      keywords: kw || undefined,
      datePublished: published,
      dateModified: modified,
      mainEntityOfPage: pageUrl
        ? { '@type': 'WebPage', '@id': pageUrl }
        : undefined,
      image: image ? [image] : undefined,
      author: input.authorName
        ? { '@type': 'Person', name: input.authorName }
        : { '@type': 'Organization', name: input.siteName || 'MEGA JS' },
      publisher: {
        '@type': 'Organization',
        name: input.siteName || 'MEGA JS',
        logo: {
          '@type': 'ImageObject',
          url: absUrl('/logo-mark.svg'),
        },
      },
      inLanguage: locale === 'fa' ? 'fa-IR' : 'en-US',
    };

    return {
      score: Math.min(100, score),
      label,
      issues,
      schemaSuggestion,
    };
  }

  /** Rank Math–style analysis for category / tag archives */
  analyzeTerm(input: {
    name?: string;
    metaTitle?: string;
    metaDescription?: string;
    slug?: string;
    description?: string;
    focusKeyword?: string;
    canonicalPath?: string;
    ogImageUrl?: string;
    itemCount?: number;
    taxonomy?: string;
    locale?: string;
    siteName?: string;
  }) {
    const title = (input.metaTitle || input.name || '').trim();
    const desc = (input.metaDescription || input.description || '').trim();
    const slug = (input.slug || '').trim();
    const body = (input.description || '').trim();
    const kw = (input.focusKeyword || '').trim().toLowerCase();
    const issues: SeoIssue[] = [];
    let score = 0;

    const add = (
      ok: boolean,
      pts: number,
      id: string,
      good: string,
      bad: string,
      severityFail: 'bad' | 'ok' = 'bad',
    ) => {
      if (ok) {
        score += pts;
        issues.push({ id, severity: 'good', message: good });
      } else {
        issues.push({ id, severity: severityFail, message: bad });
      }
    };

    add(
      title.length >= 20 && title.length <= 60,
      15,
      'title_len',
      'Archive SEO title length looks good.',
      'SEO title should be about 20–60 characters.',
    );
    add(
      desc.length >= 70 && desc.length <= 160,
      15,
      'desc_len',
      'Meta description length looks good.',
      'Write a unique meta description (70–160 chars).',
    );
    add(Boolean(slug), 10, 'slug', 'Term slug is set.', 'Add a slug.');
    add(
      Boolean(input.canonicalPath),
      10,
      'canonical',
      'Canonical path set.',
      'Set a self-referencing canonical for the archive.',
    );
    add(
      Boolean(input.ogImageUrl),
      10,
      'og',
      'Archive has a social image.',
      'Add an image for Open Graph / social sharing.',
      'ok',
    );
    add(
      body.length >= 40,
      10,
      'term_desc',
      'Term has a useful description.',
      'Add a unique category/tag description (helps Google understand the archive).',
    );
    add(
      (input.itemCount ?? 0) >= 1,
      10,
      'items',
      'Archive has content items.',
      'Empty archives are thin content — add posts or noindex.',
      'ok',
    );

    if (kw) {
      add(
        title.toLowerCase().includes(kw),
        10,
        'kw_title',
        'Focus keyword in SEO title.',
        'Include focus keyword in the SEO title.',
      );
      add(
        desc.toLowerCase().includes(kw),
        10,
        'kw_desc',
        'Focus keyword in meta description.',
        'Include focus keyword in the meta description.',
      );
    } else {
      issues.push({
        id: 'kw_missing',
        severity: 'ok',
        message: 'No focus keyword (optional for archives).',
      });
    }

    // Rank Math often noindexes thin tag archives
    if (input.taxonomy?.includes('tag') && (input.itemCount ?? 0) < 3) {
      issues.push({
        id: 'thin_tag',
        severity: 'ok',
        message: 'Thin tag archive — consider noindex until it has more posts (Rank Math best practice).',
      });
    }

    const locale = input.locale || 'fa';
    const pageUrl = absUrl(
      input.canonicalPath
        ? `/${locale}${input.canonicalPath.startsWith('/') ? input.canonicalPath : `/${input.canonicalPath}`}`
        : undefined,
    );
    const schemaSuggestion = {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: title || undefined,
      description: desc || undefined,
      url: pageUrl,
      isPartOf: {
        '@type': 'WebSite',
        name: input.siteName || 'MEGA JS',
        url: absUrl(`/${locale}`),
      },
      inLanguage: locale === 'fa' ? 'fa-IR' : 'en-US',
    };

    const label = score >= 80 ? 'great' : score >= 50 ? 'ok' : 'needs_work';
    return {
      score: Math.min(100, score),
      label,
      issues,
      schemaSuggestion,
    };
  }

  breadcrumbs(items: Array<{ name: string; path: string }>, locale = 'fa') {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, i) => {
        const path = item.path.startsWith('http')
          ? item.path
          : absUrl(
              item.path.startsWith(`/${locale}`) || item.path === `/${locale}`
                ? item.path
                : item.path.startsWith('/')
                  ? `/${locale}${item.path}`
                  : `/${locale}/${item.path}`,
            );
        return {
          '@type': 'ListItem',
          position: i + 1,
          name: item.name,
          item: path,
        };
      }),
    };
  }

  itemListSchema(
    name: string,
    items: Array<{ name: string; url: string }>,
    locale = 'fa',
  ) {
    return {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name,
      numberOfItems: items.length,
      itemListElement: items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
        url: absUrl(
          item.url.startsWith('http')
            ? item.url
            : item.url.startsWith(`/${locale}`)
              ? item.url
              : `/${locale}${item.url.startsWith('/') ? item.url : `/${item.url}`}`,
        ),
      })),
    };
  }
}
