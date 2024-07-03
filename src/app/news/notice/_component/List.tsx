import getNoticeList from '@/data-access/news/getNoticeList'
import { NoticeList } from '@/model/news/notices'
import Link from 'next/link'
import styles from './List.module.scss'
import dayjs from 'dayjs'

interface Props {
  type: string
}

export default async function List({ type }: Props) {
  const noticeList: NoticeList = await getNoticeList(type)

  return (
    <section>
      <ul>
        {noticeList &&
          noticeList.map((item, index) => (
            <li key={index} className={styles.list}>
              <Link href={item.Link}>
                <div>{item.Type}</div>
                <div>{item.Title}</div>
                <div>{dayjs(item.Date).format('YYYY.MM.DD')}</div>
              </Link>
            </li>
          ))}
      </ul>
    </section>
  )
}
