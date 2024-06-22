// Event 정의
export interface Event {
  Title: string
  Thumbnail: string
  Link: string
  StartDate: string
  EndDate: string
  RewardDate: string
}

// 이벤트 리스트
export type EventList = Event[]
