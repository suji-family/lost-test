import getEventListServer from '@/data-access/news/getEventList'
import { EventList } from '@/model/news/events'

export default async function getEventList(): Promise<EventList> {
  try {
    const data = await getEventListServer()

    return data
  } catch (e) {
    throw new Error('에러 처리 부탁드립니다.')
  }
}
