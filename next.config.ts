import type { NextConfig } from 'next'

const config: NextConfig = {
  output: 'standalone',
  async rewrites() {
    return [
      { source: '/',    destination: '/landing.html' },
      { source: '/app', destination: '/app.html' },
    ]
  },
  async headers() {
    return [
      {
        source: '/tiles/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/brand-kit/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },
}

export default config
