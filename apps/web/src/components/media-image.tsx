import Image from 'next/image';
import { resolveMediaUrl } from '@/lib/media-url';
import { cn } from '@/lib/utils';

type Props = {
  src?: string | null;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
};

function useUnoptimized(url: string) {
  if (url.startsWith('/') || url.startsWith('data:')) return false;
  try {
    const api = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:4000/api';
    const apiHost = new URL(api.replace(/\/api\/?$/, '')).hostname;
    const host = new URL(url).hostname;
    return host !== apiHost && host !== 'localhost' && host !== '127.0.0.1';
  } catch {
    return true;
  }
}

/**
 * Performance-aware media image:
 * - next/image (AVIF/WebP, srcset, lazy) for local/API uploads
 * - unoptimized next/image for arbitrary external URLs (still lazy + sizes)
 */
export function MediaImage({
  src,
  alt = '',
  className,
  width,
  height,
  fill = false,
  priority = false,
  sizes = '(max-width: 768px) 100vw, 50vw',
}: Props) {
  const resolved = resolveMediaUrl(src);
  if (!resolved) return null;

  if (resolved.startsWith('data:')) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={resolved}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={className}
      />
    );
  }

  const unoptimized = useUnoptimized(resolved);

  if (fill) {
    return (
      <Image
        src={resolved}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        unoptimized={unoptimized}
        className={cn('object-cover', className)}
      />
    );
  }

  return (
    <Image
      src={resolved}
      alt={alt}
      width={width ?? 1200}
      height={height ?? 675}
      priority={priority}
      sizes={sizes}
      unoptimized={unoptimized}
      className={className}
    />
  );
}
