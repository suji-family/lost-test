/**
 * @description
 * 모바일 버전 사이드에서 나오는 사이드바
 */

import Link from 'next/link'
import Logo from './Logo'
import styles from './SideBar.module.scss'

export default function SideBar() {
  const categories = [
    { id: 'home', path: '', label: '홈' },
    { id: 'notices', path: 'news/notice', label: '공지사항' },
    { id: 'events', path: 'news/event', label: '이벤트' },
  ]

  return (
    <nav className={styles.nav}>
      <Logo />
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
