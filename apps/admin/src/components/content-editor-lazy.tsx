'use client';

import dynamic from 'next/dynamic';
import type { ComponentProps } from 'react';

const Editor = dynamic(
  () => import('@/components/content-editor').then((m) => m.ContentEditor),
  {
    ssr: false,
    loading: () => (
      <div className="h-64 animate-pulse rounded-md border border-[var(--mj-border)] bg-[var(--mj-muted)]" />
    ),
  },
);

/** Lazy ContentEditor — keeps media picker / markdown preview out of initial admin chunks. */
export function ContentEditorLazy(props: ComponentProps<typeof Editor>) {
  return <Editor {...props} />;
}
