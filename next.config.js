const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/snap' : '',
  assetPrefix: isProd ? '/snap/' : '',
  trailingSlash: true,
  images: { unoptimized: true },
};

module.exports = nextConfig;
