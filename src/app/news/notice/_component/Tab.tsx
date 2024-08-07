import Link from 'next/link'
import clsx from 'clsx'
import styles from './Tab.module.scss'

interface Props {
  type: string
}

const tabs = [
  { id: 'notice', label: '공지', query: '공지' },
  { id: 'inspection', label: '점검', query: '점검' },
  { id: 'shop', label: '상점', query: '상점' },
  { id: 'event', label: '이벤트', query: '이벤트' },
]

export default function Tab({ type }: Props) {
  const url = '/news/notice'
  const defaultType = type || '공지'

  return (
    <div>
      <h2>공지사항</h2>
      <div className={styles.tab}>
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            href={{ pathname: `${url}`, query: { type: tab.query } }}
            className={clsx(defaultType === tab.query && styles.active)}
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
