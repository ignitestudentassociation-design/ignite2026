import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ignite - Spark Your Passion',
  description: 'Ignite events and community',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
