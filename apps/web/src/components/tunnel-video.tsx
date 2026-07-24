import { resolveMediaUrl } from '@/lib/media-url';

/** Convert Aparat watch/share URLs to the standard iframe embed URL. */
export function aparatEmbedUrl(input: string): string | null {
  const raw = input.trim();
  if (!raw) return null;
  if (raw.includes('/embed/') || raw.includes('/video/video/embed/')) {
    return raw.startsWith('http') ? raw : `https:${raw}`;
  }
  try {
    const u = new URL(raw.startsWith('http') ? raw : `https://${raw}`);
    const parts = u.pathname.split('/').filter(Boolean);
    // /v/HASH or /video/HASH
    const vIdx = parts.findIndex((p) => p === 'v' || p === 'video');
    const hash = vIdx >= 0 ? parts[vIdx + 1] : parts[parts.length - 1];
    if (!hash) return null;
    return `https://www.aparat.com/video/video/embed/videohash/${hash}/vt/frame`;
  } catch {
    return null;
  }
}

export function TunnelVideoPlayer({
  videoSource,
  aparatUrl,
  vodUrl,
  videoUrl,
  videoPosterUrl,
  title,
}: {
  videoSource?: string | null;
  aparatUrl?: string | null;
  vodUrl?: string | null;
  videoUrl?: string | null;
  videoPosterUrl?: string | null;
  title?: string;
}) {
  const source = videoSource || 'none';
  if (source === 'none') return null;

  if (source === 'aparat' && aparatUrl) {
    const embed = aparatEmbedUrl(aparatUrl);
    if (!embed) return null;
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-md border border-border bg-black">
        <iframe
          src={embed}
          title={title || 'Aparat'}
          className="absolute inset-0 h-full w-full"
          allowFullScreen
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    );
  }

  const stream = source === 'vod' ? vodUrl : videoUrl;
  if (!stream) return null;
  const src = resolveMediaUrl(stream);
  const poster = videoPosterUrl ? resolveMediaUrl(videoPosterUrl) : undefined;

  return (
    <div className="overflow-hidden rounded-md border border-border bg-black">
      <video
        className="aspect-video w-full"
        controls
        playsInline
        poster={poster}
        src={src}
        preload="metadata"
      >
        <source src={src} />
      </video>
    </div>
  );
}
