import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gerador de Palavras',
  description: 'Gerador de palavras aletórias para oficina de improvisação em teatro',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <nav className="p-4 bg-gray-900">
          <ol className="flex h-8 space-x-8 text-gray-100">
          <li className="flex items-center space-x-1">
              <Link href="/">
                <p className="flex items-center hover:text-red-400 text-xl">Início</p>
              </Link>
            </li>
            <li className="flex items-center space-x-1">
              <Link href="/words">
                <p className="flex items-center hover:text-red-400 text-xl">Gerador de Palavras</p>
              </Link>
            </li>
            <li className="flex items-center space-x-1">
              <Link href="/timer">
                <p className="flex items-center hover:text-red-400 text-xl">Cronômetro</p>
              </Link>
            </li>
          </ol>
        </nav>
        {children}
      </body>
    </html>
  )
}
