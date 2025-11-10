import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'New Testament Reader',
  description: 'Read the entire New Testament with a beautiful, modern interface. 27 books, 260 chapters from the World English Bible.',
  keywords: ['Bible', 'New Testament', 'Scripture', 'Christian', 'Reading', 'World English Bible', 'Gospel'],
  authors: [{ name: 'New Testament Reader' }],
  creator: 'New Testament Reader',
  publisher: 'New Testament Reader',
  metadataBase: new URL('https://bible-new-testament.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'New Testament Reader',
    description: 'Read the entire New Testament with a beautiful, modern interface. 27 books, 260 chapters from the World English Bible.',
    url: 'https://bible-new-testament.vercel.app',
    siteName: 'New Testament Reader',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'New Testament Reader - Read the Bible online',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New Testament Reader',
    description: 'Read the entire New Testament with a beautiful, modern interface. 27 books, 260 chapters from the World English Bible.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'New Testament',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
