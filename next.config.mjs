/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: [], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
};

export default nextConfig;
