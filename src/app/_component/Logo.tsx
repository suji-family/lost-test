import getIsMobile from '@/lib/getIsMobile'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Logo.module.scss'
import logo from './logo.png'

export default function Logo() {
  const isMobile = getIsMobile()

  return (
    <Link href={'/'} className={clsx([styles.logo, isMobile && styles.mobile])}>
      <Image src={logo} alt="logo" fill />
    </Link>
  )
}
