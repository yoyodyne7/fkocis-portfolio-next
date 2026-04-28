import type { Metadata } from 'next'
import { Syne, DM_Mono } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne-var',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-dm-mono-var',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Frank Kocis — Marketing Strategist',
  description: 'Senior marketing leader with 15+ years building brands across North America — TV campaigns, influencer strategy, omnichannel activation, content that earns attention and drives measurable growth.',
  authors: [{ name: 'Frank Kocis' }],
  openGraph: {
    title: 'Frank Kocis — Marketing Strategist',
    description: '15+ years building brands across North America.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmMono.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}
