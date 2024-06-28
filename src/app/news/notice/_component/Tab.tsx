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
          <a className={clsx({ [styles.active]: type === '공지' })}>공지</a>
        </Link>
        <Link
          href={{ pathname: `${url}`, query: { type: '점검' } }}
          legacyBehavior
        >
          <a className={clsx({ [styles.active]: type === '점검' })}>점검</a>
        </Link>
        <Link
          href={{ pathname: `${url}`, query: { type: '상점' } }}
          legacyBehavior
        >
          <a className={clsx({ [styles.active]: type === '상점' })}>상점</a>
        </Link>
        <Link
          href={{ pathname: `${url}`, query: { type: '이벤트' } }}
          legacyBehavior
        >
          <a className={clsx({ [styles.active]: type === '이벤트' })}>이벤트</a>
        </Link>
      </div>
    </div>
  )
}
