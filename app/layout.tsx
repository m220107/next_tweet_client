import type { Metadata } from 'next'
import './globals.css'
import Navber from '@/app/components/Navbar'


export const metadata: Metadata = {
  title: 'Next Tweet',
  description: 'This is tweet app.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <Navber />
        <main className='flex min-h-screen flex-col p-5'>
          {children}
        </main>
      </body>
    </html>
  )
}