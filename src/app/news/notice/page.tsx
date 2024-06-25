import { NoticeList } from '@/model/news/notices'
import getNoticeList from '../_actions/getNoticeList'
import Tab from './_component/Tab'

/**
 * @description
 * 공지사항 테스트 페이지 (임시))
 */
export default async function page() {
  const noticeList: NoticeList = await getNoticeList()

  return (
    <section>
      <Tab />
      {noticeList && noticeList.map((notice) => <div>{notice.Title}</div>)}
    </section>
  )
}
