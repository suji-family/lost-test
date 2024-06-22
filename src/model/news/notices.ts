// Event 정의
export interface Notice {
  Title: string
  Date: string
  Link: string
  Type: '공지' | '점검' | '상점' | '이벤트'
}

// 이벤트 리스트
export type NoticeList = Notice[]
