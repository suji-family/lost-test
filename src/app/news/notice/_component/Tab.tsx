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
        <Link href={{ pathname: `${url}`, query: { type: '공지' } }}>
          <div className={clsx({ [styles.active]: type === '공지' })}>공지</div>
        </Link>
        <Link href={{ pathname: `${url}`, query: { type: '점검' } }}>
          <div className={clsx({ [styles.active]: type === '점검' })}>점검</div>
        </Link>
        <Link href={{ pathname: `${url}`, query: { type: '상점' } }}>
          <div className={clsx({ [styles.active]: type === '상점' })}>상점</div>
        </Link>
        <Link href={{ pathname: `${url}`, query: { type: '이벤트' } }}>
          <div className={clsx({ [styles.active]: type === '이벤트' })}>
            이벤트
          </div>
        </Link>
      </div>
    </div>
  )
}
