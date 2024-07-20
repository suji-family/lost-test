/**
 * @description
 * 캐릭터 정보 입력 페이지
 */

import SearchForm from '@/app/profile/_component/SearchForm'
import { Metadata } from 'next'
import RecentSearch from './_component/RecentSearch'
import SearchGuide from './_component/SearchGuide'

export const metadata: Metadata = {
  title: '전투정보실',
}

export default function page() {
  return (
    <>
      <SearchGuide />
      <SearchForm />
      <RecentSearch />
    </>
  )
}
