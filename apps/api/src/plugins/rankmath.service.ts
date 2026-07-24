import { Injectable } from '@nestjs/common';

export type SeoIssue = {
  id: string;
  severity: 'good' | 'ok' | 'bad';
  message: string;
};

@Injectable()
export class RankMathService {
  analyze(input: {
    title?: string;
    metaTitle?: string;
    metaDescription?: string;
    slug?: string;
    body?: string;
    focusKeyword?: string;
    canonicalPath?: string;
    ogImageUrl?: string;
  }) {
    const title = (input.metaTitle || input.title || '').trim();
    const desc = (input.metaDescription || '').trim();
    const body = (input.body || '').trim();
    const slug = (input.slug || '').trim();
    const kw = (input.focusKeyword || '').trim().toLowerCase();
    const issues: SeoIssue[] = [];
    let score = 0;

    const add = (ok: boolean, pts: number, id: string, good: string, bad: string) => {
      if (ok) {
        score += pts;
        issues.push({ id, severity: 'good', message: good });
      } else {
        issues.push({ id, severity: 'bad', message: bad });
      }
    };

    add(
      title.length >= 30 && title.length <= 60,
      15,
      'title_len',
      'Title length is in the sweet spot (30–60).',
      'Title should be 30–60 characters.',
    );
    add(
      desc.length >= 70 && desc.length <= 160,
      15,
      'desc_len',
      'Meta description length looks good (70–160).',
      'Meta description should be 70–160 characters.',
    );
    add(Boolean(slug), 10, 'slug', 'URL slug is set.', 'Add a URL slug.');
    add(Boolean(input.canonicalPath), 5, 'canonical', 'Canonical path set.', 'Set a canonical path.');
    add(Boolean(input.ogImageUrl), 10, 'og', 'Open Graph image set.', 'Add an OG image.');
    add(body.length >= 300, 15, 'content', 'Content has enough length.', 'Write at least ~300 characters.');

    if (kw) {
      const titleHas = title.toLowerCase().includes(kw);
      const descHas = desc.toLowerCase().includes(kw);
      const bodyHas = body.toLowerCase().includes(kw);
      const slugHas = slug.toLowerCase().includes(kw.replace(/\s+/g, '-'));
      add(titleHas, 10, 'kw_title', 'Focus keyword in title.', 'Add focus keyword to the title.');
      add(descHas, 10, 'kw_desc', 'Focus keyword in meta description.', 'Add focus keyword to meta description.');
      add(bodyHas, 5, 'kw_body', 'Focus keyword found in content.', 'Use focus keyword in the body.');
      add(slugHas, 5, 'kw_slug', 'Focus keyword in slug.', 'Include focus keyword in the slug.');
    } else {
      issues.push({
        id: 'kw_missing',
        severity: 'ok',
        message: 'No focus keyword set (optional but recommended).',
      });
    }

    const label = score >= 80 ? 'great' : score >= 50 ? 'ok' : 'needs_work';
    return {
      score: Math.min(100, score),
      label,
      issues,
      schemaSuggestion: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title || undefined,
        description: desc || undefined,
        keywords: kw || undefined,
      },
    };
  }

  breadcrumbs(items: Array<{ name: string; path: string }>) {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
        item: item.path,
      })),
    };
  }
}
