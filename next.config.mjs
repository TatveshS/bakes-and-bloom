/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/bakes-and-bloom',
    assetPrefix: '/bakes-and-bloom',
};

export default nextConfig;
