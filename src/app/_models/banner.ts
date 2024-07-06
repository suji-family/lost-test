import { Event } from '@/model/news/events'

// Event 타입의 첫 글자를 소문자로 바꾸고 Partial을 적용
export type Banner = {
  [K in keyof Partial<Event> as Uncapitalize<K>]: Partial<Event>[K]
}
