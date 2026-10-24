import { Poppins, Space_Grotesk } from 'next/font/google'
import './globals.css'
import './components/loader.css'
import InitialLoader from './components/InitialLoader'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata = {
  title: 'Portfolio - Creative Developer',
  description: 'Modern 3D animated portfolio showcasing projects and skills',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${poppins.variable} ${spaceGrotesk.variable}`} style={{ backgroundColor: '#050508', colorScheme: 'dark' }}>
      <body className="antialiased" style={{ background: '#050508', color: '#f1f5f9' }}>
        <InitialLoader />
        {children}
      </body>
    </html>
  )
}
