'use client';

import dynamic from 'next/dynamic';

export const MediaLibraryLazy = dynamic(
  () => import('@/components/media-library').then((m) => m.MediaLibrary),
  {
    ssr: false,
    loading: () => (
      <div className="h-64 animate-pulse rounded-md border border-[var(--mj-border)] bg-[var(--mj-muted)]" />
    ),
  },
);
