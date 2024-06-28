import Link from 'next/link'
import clsx from 'clsx'
import styles from './Tab.module.scss'

interface Props {
  searchParams: {
    type: string
  }
}

export default function Tab({ searchParams }: Props) {
  const { type } = searchParams
  const url = '/news/notice'

  return (
    <div>
      <h2>공지사항</h2>
      <div className={clsx([styles.tab])}>
        <Link
          href={{ pathname: `${url}`, query: { type: '공지' } }}
          legacyBehavior
        >
          <div className={clsx([type === '공지' && styles.active])}>공지</div>
        </Link>
        <Link
          href={{ pathname: `${url}`, query: { type: '점검' } }}
          legacyBehavior
        >
          <div className={clsx([type === '점검' && styles.active])}>점검</div>
        </Link>
        <Link
          href={{ pathname: `${url}`, query: { type: '상점' } }}
          legacyBehavior
        >
          <div className={clsx([type === '상점' && styles.active])}>상점</div>
        </Link>
        <Link
          href={{ pathname: `${url}`, query: { type: '이벤트' } }}
          legacyBehavior
        >
          <div className={clsx([type === '이벤트' && styles.active])}>
            이벤트
          </div>
        </Link>
      </div>
    </div>
  )
}
