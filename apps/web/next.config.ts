import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  transpilePackages: ['@megajs/design-tokens', '@megajs/domain', '@megajs/sdk'],
};

export default nextConfig;
