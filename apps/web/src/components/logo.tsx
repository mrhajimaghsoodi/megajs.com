import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type LogoProps = {
  href?: string;
  className?: string;
  markOnly?: boolean;
  priority?: boolean;
};

export function Logo({
  href = '/',
  className,
  markOnly = false,
  priority = false,
}: LogoProps) {
  const content = markOnly ? (
    <Image
      src="/logo-mark.svg"
      alt="MEGA JS"
      width={40}
      height={40}
      priority={priority}
      className="h-10 w-10"
    />
  ) : (
    <Image
      src="/logo.svg"
      alt="MEGA JS"
      width={180}
      height={42}
      priority={priority}
      className="h-10 w-auto"
    />
  );

  return (
    <Link
      href={href}
      className={cn('inline-flex items-center transition-opacity hover:opacity-90', className)}
      aria-label="MEGA JS"
    >
      {content}
    </Link>
  );
}
