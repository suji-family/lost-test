import { NoticeList } from '@/model/news/notices'
import getNoticeList from '../_actions/getNoticeList'
import Tab from './_component/Tab'

import clsx from 'clsx'
import styles from './page.module.scss'

/**
 * @description
 * 공지사항 테스트 페이지 (임시))
 */

interface Props {
  searchParams: {
    type: string
  }
}

export default async function page({ searchParams }: Props) {
  const { type } = searchParams
  console.log('type', type)

  const noticeList: NoticeList = await getNoticeList(type)

  return (
    <section className={clsx([styles.page])}>
      <Tab />
      {noticeList && noticeList.map((notice) => <div>{notice.Title}</div>)}
    </section>
  )
}
