import { Suspense } from 'react'
import Skeleton from 'react-loading-skeleton'
import Banner from './_component/BannerWrapper'
import styles from './page.module.scss'

export default function page() {
  return (
    <article className={styles.home}>
      <Suspense fallback={<Skeleton className={styles.bannerSkeleton} />}>
        <Banner />
      </Suspense>
    </article>
  )
}
