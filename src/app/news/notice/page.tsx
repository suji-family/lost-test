import Tab from './_component/Tab'
import clsx from 'clsx'
import styles from './page.module.scss'
import List from './_component/List'
import { Suspense } from 'react'

/**
 * @description
 * 공지사항 페이지
 */

interface Props {
  searchParams: {
    type: string
  }
}

export default function page({ searchParams }: Props) {
  const { type } = searchParams

  return (
    <section className={clsx([styles.page])}>
      <Tab type={type} />
      <Suspense fallback={<div>Loading...</div>}>
        <List type={type} />
      </Suspense>
    </section>
  )
}
