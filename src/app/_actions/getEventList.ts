import getEventListServer from '@/data-access/news/getEventList'
import { transformKeys } from '@/lib/toLowercaseObjectKeys'
import { Banner } from '../_models/banner'

export default async function getEventList(): Promise<Banner[]> {
  try {
    const data = await getEventListServer()

    return data.map(transformKeys)
  } catch (e) {
    throw new Error('Error')
  }
}
