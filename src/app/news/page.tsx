import { EventList } from '@/model/news/events'
import { NoticeList } from '@/model/news/notices'
import Button from '@/ui/Button/Button'
import getEventList from './_actions/getEventList'
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
      <h1>test</h1>
      <Button>버튼 ui 테스트중입니다. </Button>
      {eventList &&
        eventList.map((event, index) => <div key={index}>{event.Title}</div>)}
      {noticeList &&
        noticeList.map((notice, index) => (
          <div key={index}>{notice.Title}</div>
        ))}
    </section>
  )
}
