import { EventList } from '@/model/news/events'
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
    </section>
  )
}
