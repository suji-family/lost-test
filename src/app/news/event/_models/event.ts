import { Event } from '@/model/news/events'

// Event 타입의 첫 글자를 소문자로 바꿔줍니다.
export type EventItem = {
  [K in keyof Event as Uncapitalize<K>]: Event[K]
}
