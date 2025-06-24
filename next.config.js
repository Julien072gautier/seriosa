/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  // Ignorer le dossier src pendant la migration
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': '/app',
    }
    return config
  },
}

module.exports = nextConfig
