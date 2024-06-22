import getNoticeListServer from '@/data-access/news/getNoticeList'
import { NoticeList } from '@/model/news/notices'

export default async function getNoticeList(): Promise<NoticeList> {
  try {
    const data = await getNoticeListServer()

    return data
  } catch (e) {
    throw new Error('에러 처리 부탁드립니다.')
  }
}
