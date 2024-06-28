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
      <div className={styles.tab}>
        <Link
          href={{ pathname: `${url}`, query: { type: '공지' } }}
          className={clsx(type === '공지' && styles.active)}
        >
          공지
        </Link>
        <Link
          href={{ pathname: `${url}`, query: { type: '점검' } }}
          className={clsx(type === '점검' && styles.active)}
        >
          점검
        </Link>
        <Link
          href={{ pathname: `${url}`, query: { type: '상점' } }}
          className={clsx(type === '상점' && styles.active)}
        >
          상점
        </Link>
        <Link
          href={{ pathname: `${url}`, query: { type: '이벤트' } }}
          className={clsx(type === '이벤트' && styles.active)}
        >
          이벤트
        </Link>
      </div>
    </div>
  )
}
