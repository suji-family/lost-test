/**
 * @description 페이지에서 공통으로 사용되는 사이드바 컴포넌트
 */

import clsx from 'clsx'
import Link from 'next/link'
import styles from './SideBar.module.scss'

interface Props {
  className?: string
}

export default function SideBar({ className }: Props) {
  const categories = [
    { id: 'home', path: '', label: '홈' },
    { id: 'notices', path: 'news/notice', label: '공지사항' },
    { id: 'events', path: 'news/event', label: '이벤트' },
  ]

  return (
    <nav className={clsx([styles.nav, className ?? null])}>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={`/${category.path}`}>{category.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
