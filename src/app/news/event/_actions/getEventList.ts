import getEventListServer from '@/data-access/news/getEventList'
import { transformKeys } from '@/lib/toLowercaseObjectKeys'
import { EventItem } from '../_models/event'

export default async function getEventList(): Promise<EventItem[]> {
  try {
    const data = await getEventListServer()

    return data.map(transformKeys)
  } catch (e) {
    throw new Error('Error')
  }
}
