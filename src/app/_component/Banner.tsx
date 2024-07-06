'use client'

import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Banner } from '../_models/banner'
import styles from './Banner.module.scss'
import BannerSlide from './BannerSlide'

interface Props {
  eventList: Banner[]
}

export default function Banner({ eventList }: Props) {
  return (
    <Swiper
      className={styles.banner}
      slidesPerView={1}
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay]}
      loop
      speed={1000}
      autoplay={{
        delay: 4500,
        pauseOnMouseEnter: true,
      }}
    >
      {eventList.map(({ title, thumbnail, link, startDate, endDate }, idx) => (
        <SwiperSlide key={`banner-${idx}`}>
          <BannerSlide
            title={title}
            thumbnail={thumbnail}
            link={link}
            startDate={startDate}
            endDate={endDate}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
