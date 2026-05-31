import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata = {
  title: 'Portfolio - Creative Developer',
  description: 'Modern 3D animated portfolio showcasing projects and skills',
  generator: 'v0.app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${geist.className} antialiased bg-slate-950 text-slate-100`}>
        {children}
      </body>
    </html>
  )
}
