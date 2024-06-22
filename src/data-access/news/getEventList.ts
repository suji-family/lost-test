import getApiClient from '@/lib/apiClient/server/getApiClient'
import { EventList } from '@/model/news/events'

/**
 * @description
 * 이벤트 리스트 받아오는 api
 */
export default async function getEventList() {
  const apiClient = await getApiClient()
  return apiClient.get<EventList>(`news/events`)
}
