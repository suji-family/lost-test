'use client'

import Link from 'next/link'

export default function error() {
  return (
    <section>
      <p>캐릭터 정보가 없습니다.</p>
      <p>캐릭터명을 확인해주세요.</p>
      <Link href="/profile">돌아가기</Link>
    </section>
  )
}
