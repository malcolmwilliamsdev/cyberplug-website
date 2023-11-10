import type { Metadata } from 'next'
import '@fontsource/inter';
import './globals.css'

export const metadata: Metadata = {
  title: 'Cyberplug',
  description: 'Cyberplug: Expert in web, mobile, & software development for businesses. Custom Solutions for your unique needs.',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
