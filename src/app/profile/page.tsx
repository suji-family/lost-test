/**
 * @description
 * 캐릭터 정보 입력 페이지
 */

import SearchGuide from './_component/SearchGuide'
import SearchForm from '@/app/profile/_component/SearchForm'
import RecentSearch from './_component/RecentSearch'

export default function page() {
  return (
    <>
      <SearchGuide />
      <SearchForm />
      <RecentSearch />
    </>
  )
}
