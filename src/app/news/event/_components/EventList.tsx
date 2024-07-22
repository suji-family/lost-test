import getIsMobile from '@/lib/getIsMobile'
import clsx from 'clsx'
import Link from 'next/link'
import getEventList from '../_actions/getEventList'
import EventItem from './EventItem'
import styles from './EventList.module.scss'

export default async function EventList() {
  const isMobile = getIsMobile()

  const eventList = await getEventList()

  return (
    <section className={clsx([styles.eventList, isMobile && styles.mobile])}>
      {eventList &&
        eventList.map(
          ({ thumbnail, title, startDate, endDate, rewardDate, link }, i) => (
            <Link key={`event-${i}`} href={link}>
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
