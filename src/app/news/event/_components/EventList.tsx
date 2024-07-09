import Link from 'next/link'
import getEventList from '../_actions/getEventList'
import EventItem from './EventItem'
import styles from './EventList.module.scss'

export default async function EventList() {
  const eventList = await getEventList()
  console.log(eventList)

  return (
    <section className={styles.eventList}>
      {eventList &&
        eventList.map(
          ({ thumbnail, title, startDate, endDate, rewardDate, link }, i) => (
            <Link className={styles.eventItem} key={`event-${i}`} href={link}>
              <EventItem
                thumbnail={thumbnail}
                title={title}
                startDate={startDate}
                endDate={endDate}
                rewardDate={rewardDate}
              />
            </Link>
          ),
        )}
    </section>
  )
}
