import './globals.css'
import type { Metadata } from 'next'
import { KanaProvider } from '@/contexts/KanaContext'

export const metadata: Metadata = {
  title: 'かな練習プリント生成',
  description: 'ひらがな・カタカナの練習プリントを作成します',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <KanaProvider>
          {children}
        </KanaProvider>
      </body>
    </html>
  )
}