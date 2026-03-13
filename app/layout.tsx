import type { Metadata } from 'next'
import './globals.css'
import CustomCursor from '@/components/CustomCursor'
import SoundEffects from '@/components/SoundEffects'

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
      <body>
        <CustomCursor />
        <SoundEffects />
        {children}
      </body>
    </html>
  )
}
