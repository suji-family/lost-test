import clsx from 'clsx'
import type { Metadata } from 'next'

import localFont from 'next/font/local'

import './reset.scss'

// 무료 폰트
const Pretendard = localFont({
  src: './PretendardVariable.woff2',
})

export const metadata: Metadata = {
  title: 'lost-test',
  description: '아직 테스트중입니다',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={clsx([Pretendard.className])}>{children}</body>
    </html>
  )
}
