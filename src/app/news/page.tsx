import { EventList } from '@/model/news/events'
import Button from '@/ui/Button/Button'
import getEventList from './_actions/getEventList'

/**
 * @description
 * 이벤트 테스트 페이지 (임시))
 */
export default async function page() {
  const eventList: EventList = await getEventList()

  return (
    <section>
      {eventList && eventList.map((event) => <div>{event.Title}</div>)}
      <Button>버튼 ui 테스트중입니다. </Button>
    </section>
  )
}
