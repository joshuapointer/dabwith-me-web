import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://dabwith.me'),
  title: 'dabwith.me — a sleepy little co-pilot for your sesh',
  description: 'A gentle web companion for your dab sesh. Pick your banger, pick your concentrate, follow the breathing orb through heat and cool. iOS, Android, and right here in the browser.',
  icons: {
    icon: [
      { url: '/brand-kit/favicon/favicon.ico' },
      { url: '/brand-kit/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/brand-kit/favicon/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/brand-kit/favicon/favicon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/brand-kit/favicon/favicon-180.png', sizes: '180x180' },
    ],
  },
  openGraph: {
    title: 'dabwith.me',
    description: 'A sleepy little co-pilot for your sesh.',
    url: 'https://dabwith.me',
    images: ['/brand-kit/social/og-card-1200x630.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'dabwith.me',
    description: 'A sleepy little co-pilot for your sesh.',
    images: ['/brand-kit/social/og-card-1200x630.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#f7e8eb',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
