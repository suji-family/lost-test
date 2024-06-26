'use client'

import Link from 'next/link'

export default function Tab() {
  const url = 'http://localhost:3000/news/notice?type='

  return (
    <div>
      &nbsp; {/* note: (나중에 제거)구분을 위한 임시용 */}
      <div>공지사항</div>
      &nbsp;
      <div>
        <Link href={`${url}공지`}>공지</Link>
        <Link href={`${url}점검`}>점검</Link>
        <Link href={`${url}상점`}>상점</Link>
        <Link href={`${url}이벤트`}>이벤트</Link>
      </div>
      &nbsp;
    </div>
  )
}
