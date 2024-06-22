import getApiClient from '@/lib/apiClient/server/getApiClient'
import { NoticeList } from '@/model/news/notices'

/**
 * @description
 * 이벤트 리스트 받아오는 api
 */
export default async function getNoticeList() {
  const apiClient = await getApiClient()
  console.log('apiClient', apiClient)

  return apiClient.get<NoticeList>(`news/notices`)
}
