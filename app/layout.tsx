import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Seu Nome - Fullstack Developer',
  description:
    'Portfólio de Fullstack Developer especializado em Next.js, React e Web3. Projetos de alta qualidade em full stack development.',
  keywords: [
    'fullstack',
    'developer',
    'next.js',
    'react',
    'typescript',
    'portfolio',
  ],
  authors: [{ name: 'Seu Nome' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://seu-portfolio.com',
    siteName: 'Seu Nome - Portfolio',
    title: 'Seu Nome - Fullstack Developer',
    description:
      'Portfólio de Fullstack Developer especializado em Next.js, React e Web3',
  },
 // twitter: {
    //card: 'summary_large_image',
   // title: 'Seu Nome - Fullstack Developer',
    //description:
   //   'Portfólio de Fullstack Developer especializado em Next.js, React e Web3',
 // },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
