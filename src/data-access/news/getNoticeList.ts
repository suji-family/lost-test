import getApiClient from '@/lib/apiClient/server/getApiClient'
import { NoticeList } from '@/model/news/notices'

/**
 * @description
 * 공지사항 리스트 받아오는 api
 */
export default async function getNoticeList(type: string) {
  const apiClient = await getApiClient()

  return apiClient.get<NoticeList>(`news/notices`, { type: type || '공지' })
}
