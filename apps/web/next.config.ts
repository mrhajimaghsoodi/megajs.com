import type { NextConfig } from 'next';
import path from 'node:path';

const monorepoRoot = path.join(__dirname, '../..');

function mediaRemotePatterns(): NonNullable<NextConfig['images']>['remotePatterns'] {
  const patterns: NonNullable<NextConfig['images']>['remotePatterns'] = [
    { protocol: 'http', hostname: 'localhost', pathname: '/**' },
    { protocol: 'http', hostname: '127.0.0.1', pathname: '/**' },
  ];
  const api = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:4000/api';
  try {
    const origin = new URL(api.replace(/\/api\/?$/, ''));
    patterns.push({
      protocol: origin.protocol.replace(':', '') as 'http' | 'https',
      hostname: origin.hostname,
      ...(origin.port ? { port: origin.port } : {}),
      pathname: '/**',
    });
  } catch {
    /* ignore bad env */
  }
  return patterns;
}

const nextConfig: NextConfig = {
  // Docker/VPS images use standalone; Vercel provides its own tracing output.
  ...(process.env.VERCEL ? {} : { output: 'standalone' as const }),
  compress: true,
  poweredByHeader: false,
  transpilePackages: ['@megajs/design-tokens', '@megajs/domain', '@megajs/sdk'],
  outputFileTracingIncludes: {
    '/**': ['./content/docs/**/*'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 7,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: mediaRemotePatterns(),
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'radix-ui'],
  },
  async headers() {
    return [
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*.(svg|jpg|jpeg|png|webp|avif|gif|ico|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },
  turbopack: {
    root: monorepoRoot,
    resolveAlias: {
      'shadcn/tailwind.css': path.join(
        monorepoRoot,
        'node_modules/shadcn/dist/tailwind.css',
      ),
      'tw-animate-css': path.join(
        monorepoRoot,
        'node_modules/tw-animate-css/dist/tw-animate.css',
      ),
    },
  },
};

export default nextConfig;
