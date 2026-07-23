import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@megajs/design-tokens', '@megajs/domain'],
};

export default nextConfig;
