import Image from 'next/image'
import Link from 'next/link'
import { Banner } from '../_models/banner'
import styles from './BannerSlide.module.scss'

export default function BannerSlide({
  title,
  thumbnail,
  link = '/',
  startDate,
  endDate,
}: Banner) {
  return (
    <Link target="_blank" href={link} className={styles.bannerSlide}>
      <div>
        {title}
        {startDate}
        {endDate}
      </div>
      <Image
        src={thumbnail || ''}
        alt="banner"
        fill
        className={styles.bannerImg}
      />
    </Link>
  )
}
