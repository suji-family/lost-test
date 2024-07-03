import { EventList } from '@/model/news/events'
import getEventList from '../_actions/getEventList'
import Link from 'next/link'
import styles from './page.module.scss'
import dayjs from 'dayjs'

/**
 * @description
 * 이벤트 테스트 페이지 (임시))
 */
export default async function page() {
  const eventList: EventList = await getEventList()

  return (
    <section className={styles.eventContainer}>
      {eventList &&
        eventList.map((event, index) => (
          <Link key={index} href={event.Link}>
            <div className={styles.eventCard}>
              <img src={event.Thumbnail} alt={event.Title} />
              <h3>{event.Title}</h3>
              <div>
                <span className={styles.eventDate}>이벤트 기간</span>:{' '}
                {dayjs(event.StartDate).format('YYYY.MM.DD HH:mm')} -{' '}
                {dayjs(event.EndDate).format('MM.DD HH:mm')}
              </div>
              <div>
                <span className={styles.rewardDate}>보상 수령 기간</span>:{' '}
                {dayjs(event.RewardDate).format('YYYY.MM.DD HH:mm')}
              </div>
            </div>
          </Link>
        ))}
    </section>
  )
}
