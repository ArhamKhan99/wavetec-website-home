/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'staging.wavetec.com',
        pathname: '/**',
      },
    ],
        unoptimized: true, 

  },
  trailingSlash: true,
};

export default nextConfig;
