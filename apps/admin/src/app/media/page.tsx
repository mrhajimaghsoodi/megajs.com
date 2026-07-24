'use client';

import { MediaLibraryLazy as MediaLibrary } from '@/components/media-library-lazy';
import { useAdminLocale } from '@/i18n/locale-context';

export default function MediaAdminPage() {
  const { dict } = useAdminLocale();
  const d = dict.cms;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold">{d.mediaTitle}</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.mediaSubtitle}</p>
      </div>
      <MediaLibrary />
    </div>
  );
}
