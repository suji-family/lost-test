import clsx from 'clsx'
import { Metadata } from 'next'
import { Suspense } from 'react'
import List from './_component/List'
import Tab from './_component/Tab'
import styles from './page.module.scss'

/**
 * @description
 * 공지사항 페이지
 */

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const noticeType = decodeURIComponent(searchParams.type)

  return {
    title: searchParams.type ? noticeType : '공지',
  }
}

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
