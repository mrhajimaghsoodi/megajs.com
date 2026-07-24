type Props = {
  src: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
};

/** Smush-aware image: lazy-load + optional WebP query rewrite */
export function SmushImage({ src, alt = '', className, width, height }: Props) {
  const webp =
    src.includes('format=webp') || src.startsWith('data:')
      ? src
      : `${src}${src.includes('?') ? '&' : '?'}format=webp&q=82`;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={webp}
      alt={alt}
      loading="lazy"
      decoding="async"
      width={width}
      height={height}
      className={className}
    />
  );
}
