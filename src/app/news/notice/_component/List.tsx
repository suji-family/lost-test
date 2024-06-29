/**
 * 서스펜스 사용
 * item 쪼개서 item으로
 */
import getNoticeList from '@/data-access/news/getNoticeList'
import sleep from '@/lib/sleep'
import { NoticeList } from '@/model/news/notices'
import Link from 'next/link'

interface Props {
  type: string
}

export default async function List({ type }: Props) {
  await sleep(5000)

  console.log('type', type)

  const noticeList: NoticeList = await getNoticeList(type)

  return (
    <section>
      {noticeList &&
        noticeList.map((notice) => (
          <>
            <Link href={notice.Link}>{notice.Title}</Link>
            <div>{notice.Date}</div>
          </>
        ))}
    </section>
  )
}
