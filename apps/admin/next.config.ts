import type { NextConfig } from 'next';
import path from 'node:path';

const monorepoRoot = path.join(__dirname, '../..');

const nextConfig: NextConfig = {
  output: 'standalone',
  transpilePackages: ['@megajs/design-tokens', '@megajs/domain'],
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
