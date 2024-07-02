import getNoticeList from '@/data-access/news/getNoticeList'
import { NoticeList } from '@/model/news/notices'
import Link from 'next/link'
import styles from './List.module.scss'

interface Props {
  type: string
}

export default async function List({ type }: Props) {
  const noticeList: NoticeList = await getNoticeList(type)

  return (
    <section>
      {noticeList &&
        noticeList.map((item, index) => (
          <Link href={item.Link} className={styles.list} key={index}>
            <div>{item.Type}</div>
            <div>{item.Title}</div>
            <div>{item.Date}</div>
          </Link>
        ))}
    </section>
  )
}
