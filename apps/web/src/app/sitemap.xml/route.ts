import { NextResponse } from 'next/server';

/** Google / Rank Math friendly alias → sitemap index */
export async function GET(request: Request) {
  const url = new URL(request.url);
  url.pathname = '/sitemap_index.xml';
  return NextResponse.redirect(url, 301);
}
