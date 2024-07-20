import Thumbnail from '@/ui/Thumbnail/Thumbnail'
import dayjs from 'dayjs'
import type { EventItem } from '../_models/event'
import styles from './EventItem.module.scss'
import fallbackImg from './fallbackImg.png'

type Props = Pick<
  EventItem,
  'thumbnail' | 'title' | 'startDate' | 'endDate' | 'rewardDate'
>

export default function EventItem({
  thumbnail,
  title,
  startDate,
  endDate,
  rewardDate,
}: Props) {
  const today = new Date()

  const start = dayjs(startDate)
  const end = dayjs(endDate)
  const reward = rewardDate ? dayjs(rewardDate) : null

  const diffDay = end.diff(today, 'day')

  const isOverDDay = diffDay < 0

  return (
    <section className={styles.eventCard}>
      <figure className={styles.thumbnail}>
        <Thumbnail src={thumbnail} fallback={fallbackImg} alt={title} fill />
      </figure>

      <section className={styles.eventDetail}>
        <h3>{title}</h3>

        <p>
          <span className={styles.eventDate}>이벤트 기간</span>
          <span> : {start.format('YYYY.MM.DD HH:mm')} - </span>
          <span>{end.format('MM.DD HH:mm')}</span>
        </p>

        {reward && (
          <p>
            <span className={styles.rewardDate}>보상 수령 기간</span>
            <span> : {reward.format('YYYY.MM.DD HH:mm')}</span>
          </p>
        )}

        <div className={styles.eventDiff}>
          <p className={isOverDDay ? styles.over : styles.ongoing}>
            {isOverDDay ? '종료' : '진행중'}
          </p>

          {!isOverDDay && (
            <div className={styles.day}>{`D-${diffDay + 1}`}</div>
          )}
        </div>
      </section>
    </section>
  )
}
