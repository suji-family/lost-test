import { Metadata } from 'next'
import { Suspense } from 'react'
import Skeleton from 'react-loading-skeleton'
import EventList from './_components/EventList'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: '이벤트',
}

export default async function page() {
  return (
    <article className={styles.event}>
      <h3>이벤트</h3>

      <Suspense fallback={<Skeleton width={200} />}>
        <EventList />
      </Suspense>
    </article>
  )
}
