import getIsMobile from '@/lib/getIsMobile'
import clsx from 'clsx'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import SideBar from './_component/SideBar'
import UserDeviceCheckProvider from './_component/UserDeviceCheckProvider'
import styles from './layout.module.scss'
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
  const isMobile = getIsMobile()

  return (
    <html lang="ko">
      <body
        className={clsx([
          Pretendard.className,
          styles.body,
          isMobile ? styles.mobile : styles.desktop,
        ])}
      >
        <UserDeviceCheckProvider isMobile={isMobile}>
          <SideBar />
          <main>{children}</main>
        </UserDeviceCheckProvider>
      </body>
    </html>
  )
}
