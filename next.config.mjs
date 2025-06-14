import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
};

export default {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'argus.engineering',
        pathname: '/**',
      },
    ],
  },
  ...withMDX(config),
} 
