import type { NextConfig } from 'next';
import path from 'node:path';

const monorepoRoot = path.join(__dirname, '../..');

const nextConfig: NextConfig = {
  // Docker/VPS images use standalone; Vercel provides its own tracing output.
  ...(process.env.VERCEL ? {} : { output: 'standalone' as const }),
  compress: true,
  poweredByHeader: false,
  transpilePackages: ['@megajs/design-tokens', '@megajs/domain'],
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
