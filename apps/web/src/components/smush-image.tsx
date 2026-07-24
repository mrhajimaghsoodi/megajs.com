import { MediaImage } from '@/components/media-image';

type Props = {
  src: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
};

/** Smush-aware wrapper — prefers next/image optimization pipeline */
export function SmushImage({
  src,
  alt = '',
  className,
  width,
  height,
  priority,
  sizes,
  fill,
}: Props) {
  return (
    <MediaImage
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      priority={priority}
      sizes={sizes}
      fill={fill}
    />
  );
}
