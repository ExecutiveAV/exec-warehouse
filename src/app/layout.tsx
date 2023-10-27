import type { Metadata } from 'next'
import './globals.css'

import { loraFont } from './fonts'

export const metadata: Metadata = {
  title: 'Exec Warehouse',
  description: 'Your trusted Amazon retailer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${loraFont.className}`} >
      <body>
        {children}
      </body>
    </html>
  )
}
