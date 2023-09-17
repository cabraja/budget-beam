/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/dashboard/overview',
            permanent: true,
          },
        ]
      },
}

module.exports = nextConfig
