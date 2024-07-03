import getEventList from '../_actions/getEventList'
import Banner from './Banner'

export default async function BannerWrapper() {
  const eventList = await getEventList()

  if (eventList.length === 0) return <div>no event!!!</div>

  return <Banner eventList={eventList} />
}
