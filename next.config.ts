import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      'fiverr-res.cloudinary.com',
      'files.oaiusercontent.com',
      'i.pinimg.com',
    ],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
