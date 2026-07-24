import fs from 'node:fs';
import path from 'node:path';
import type { Locale } from '@/lib/utils';
import type {
  DocsCatalog,
  DocsPageFrontmatter,
  DocsTechMeta,
} from '@/lib/docs/types';

export type DocsPage = {
  techId: string;
  slug: string;
  locale: Locale;
  frontmatter: DocsPageFrontmatter;
  body: string;
  segments: string[];
};

export {
  flattenNav,
  localizeTitle,
  type DocsCatalog,
  type DocsLocaleTitle,
  type DocsNavItem,
  type DocsPageFrontmatter,
  type DocsTechMeta,
} from '@/lib/docs/types';

const CONTENT_ROOT = path.join(process.cwd(), 'content/docs');

function readJson<T>(file: string): T | null {
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8')) as T;
  } catch {
    return null;
  }
}

function stripQuotes(v: string) {
  const t = v.trim();
  if ((t.startsWith('"') && t.endsWith('"')) || (t.startsWith("'") && t.endsWith("'"))) {
    return t.slice(1, -1);
  }
  return t;
}

/** Minimal frontmatter parser for docs markdown files */
export function parseFrontmatter(raw: string): { data: DocsPageFrontmatter; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    return { data: { title: 'Untitled' }, body: raw };
  }
  const yaml = match[1];
  const body = match[2].trimStart();
  const data: DocsPageFrontmatter = { title: 'Untitled' };
  const sources: Array<{ name: string; url: string }> = [];
  let inSources = false;
  let currentSource: { name?: string; url?: string } | null = null;

  for (const line of yaml.split(/\r?\n/)) {
    if (/^\s*sources:\s*$/.test(line)) {
      inSources = true;
      continue;
    }
    if (inSources) {
      const item = line.match(/^\s*-\s+name:\s*(.+)$/);
      if (item) {
        if (currentSource?.name && currentSource.url) {
          sources.push({ name: currentSource.name, url: currentSource.url });
        }
        currentSource = { name: stripQuotes(item[1]) };
        continue;
      }
      const url = line.match(/^\s+url:\s*(.+)$/);
      if (url && currentSource) {
        currentSource.url = stripQuotes(url[1]);
        continue;
      }
      if (/^\S/.test(line)) {
        if (currentSource?.name && currentSource.url) {
          sources.push({ name: currentSource.name, url: currentSource.url });
        }
        inSources = false;
        currentSource = null;
      } else {
        continue;
      }
    }
    const kv = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!kv) continue;
    const key = kv[1];
    const value = stripQuotes(kv[2]);
    if (key === 'title') data.title = value;
    else if (key === 'description') data.description = value;
    else if (key === 'seoTitle') data.seoTitle = value;
    else if (key === 'seoDescription') data.seoDescription = value;
    else if (key === 'keywords') data.keywords = value;
    else if (key === 'order') data.order = Number(value) || 0;
  }
  if (currentSource?.name && currentSource.url) {
    sources.push({ name: currentSource.name, url: currentSource.url });
  }
  if (sources.length) data.sources = sources;
  return { data, body };
}

export function getDocsCatalog(): DocsCatalog {
  return (
    readJson<DocsCatalog>(path.join(CONTENT_ROOT, 'catalog.json')) ?? { groups: [] }
  );
}

export function listTechIds(): string[] {
  const catalog = getDocsCatalog();
  return catalog.groups.flatMap((g) => g.techs);
}

export function getTechMeta(techId: string): DocsTechMeta | null {
  return readJson<DocsTechMeta>(path.join(CONTENT_ROOT, techId, 'meta.json'));
}

export function listTechs(): DocsTechMeta[] {
  return listTechIds()
    .map((id) => getTechMeta(id))
    .filter((x): x is DocsTechMeta => Boolean(x))
    .sort((a, b) => a.order - b.order);
}

function pageFilePath(techId: string, locale: Locale, segments: string[]) {
  return path.join(CONTENT_ROOT, techId, locale, ...segments) + '.md';
}

export function getDocsPage(
  techId: string,
  locale: Locale,
  slugPath: string[],
): DocsPage | null {
  const segments = slugPath.length ? slugPath : ['introduction'];
  const file = pageFilePath(techId, locale, segments);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, 'utf8');
  const { data, body } = parseFrontmatter(raw);
  return {
    techId,
    slug: segments.join('/'),
    locale,
    frontmatter: data,
    body,
    segments,
  };
}

export function listDocSlugs(techId: string, locale: Locale): string[] {
  const dir = path.join(CONTENT_ROOT, techId, locale);
  if (!fs.existsSync(dir)) return [];
  const out: string[] = [];
  const walk = (rel: string) => {
    const abs = path.join(dir, rel);
    for (const entry of fs.readdirSync(abs, { withFileTypes: true })) {
      const next = rel ? `${rel}/${entry.name}` : entry.name;
      if (entry.isDirectory()) walk(next);
      else if (entry.name.endsWith('.md')) {
        out.push(next.replace(/\.md$/, '').replace(/\\/g, '/'));
      }
    }
  };
  walk('');
  return out.sort();
}

export function docsContentRoot() {
  return CONTENT_ROOT;
}
