import './globals.css'
import type { Metadata } from 'next'
import { Inter} from 'next/font/google'
import { ThemeProvider } from '@/components/ui/theme-provider'
import { ClerkProvider } from '@clerk/nextjs'

import Navbar from '@/components/navbar/Navbar'
import ToastProvider from '@/components/ui/custom/ToastProvider'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'BudgetBeam | Track expenses',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
          <ThemeProvider attribute='class'
          defaultTheme='dark'
          enableSystem={false}
          storageKey='budget-beam' >
            <ToastProvider />
            <Navbar />
            <div className='md:px-10 px-3 max-w-[1600px] mx-auto'>
            {children}
            </div>
          </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  )
}
