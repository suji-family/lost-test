import getIsMobile from '@/lib/getIsMobile'
import clsx from 'clsx'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import 'react-loading-skeleton/dist/skeleton.css'
import Navigator from './_component/Navigator'
// import SideBar from './_component/SideBar'
import UserDeviceCheckProvider from './_component/UserDeviceCheckProvider'
import styles from './layout.module.scss'
import './reset.scss'

// 무료 폰트
const Pretendard = localFont({
  src: './PretendardVariable.woff2',
})

export const metadata: Metadata = {
  title: {
    template: '로스트아크 - %s',
    default: '로스트아크',
  },
  description: '시즌3 많은 기대',
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
          <Navigator />

          <article className={styles.contents}>
            {/* <SideBar /> */}
            <main>{children}</main>
          </article>
        </UserDeviceCheckProvider>
      </body>
    </html>
  )
}
