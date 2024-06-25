/**
 * @description 페이지에서 공통으로 사용되는 사이드바 컴포넌트
 */
'use client'

import Link from 'next/link'

export default function SideBar() {
  const categories = [
    { id: 'home', path: '', label: '홈' },
    { id: 'news', path: 'news/notice', label: '공지사항' },
    { id: 'events', path: 'news/event', label: '이벤트' },
  ]

  return (
    <nav>
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
