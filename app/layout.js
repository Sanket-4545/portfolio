import { Poppins, Space_Grotesk } from 'next/font/google'
import './globals.css'

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
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${poppins.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased" style={{background: 'var(--background)', color: 'var(--foreground)'}}>
        {children}
      </body>
    </html>
  )
}
