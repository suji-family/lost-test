import { EventList } from '@/model/news/events'
import Button from '@/ui/Button/Button'
import getEventList from './_actions/getEventList'
import { NoticeList } from '@/model/news/notices'
import getNoticeList from './_actions/getNoticeList'

/**
 * @description
 * 이벤트 테스트 페이지 (임시))
 */
export default async function page() {
  const eventList: EventList = await getEventList()
  const noticeList: NoticeList = await getNoticeList()

  return (
    <section>
      <Button>버튼 ui 테스트중입니다. </Button>
      {eventList && eventList.map((event) => <div>{event.Title}</div>)}
      {noticeList && noticeList.map((notice) => <div>{notice.Title}</div>)}
    </section>
  )
}
