import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Inter, Playfair_Display, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mandy Coffee — Addis Ababa\'s Favorite Coffee Experience',
  description:
    'Mandy Coffee is a women-owned specialty café on Haile Gebresillassie Road, Addis Ababa. Premium Ethiopian coffee, handcrafted snacks, smoothies & a warm welcome. Rated 4.9★.',
  keywords: [
    'Mandy Coffee',
    'Addis Ababa coffee',
    'Ethiopian coffee',
    'specialty coffee',
    'Bambis Train Station café',
    'women-owned coffee shop',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'Mandy Coffee — Addis Ababa\'s Favorite Coffee Experience',
    description:
      'Premium Ethiopian coffee, handcrafted snacks, smoothies & a warm welcome. Rated 4.9★ near Bambis Train Station.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Mandy Coffee',
    images: [{ url: '/images/hero.png', width: 1200, height: 630, alt: 'Mandy Coffee' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mandy Coffee — Addis Ababa\'s Favorite Coffee Experience',
    description:
      'Premium Ethiopian coffee, handcrafted snacks, smoothies & a warm welcome. Rated 4.9★.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable} ${cormorant.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
