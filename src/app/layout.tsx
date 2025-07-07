import './globals.css'
import type { Metadata } from 'next'

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
      <body>{children}</body>
    </html>
  )
}