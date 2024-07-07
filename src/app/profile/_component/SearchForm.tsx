/**
 * @description
 * 캐릭터 정보 입력 폼
 */

'use client'

import { useState, ChangeEvent, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import SearchInput from './Input'

export default function SearchForm() {
  const [characterName, setCharacterName] = useState<string>('')
  const router = useRouter()

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (characterName) {
      router.push(`/profile/character/${characterName}`)
    }
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCharacterName(e.target.value)
  }

  return (
    <section>
      <h1>캐릭터 페이지 테스트</h1>
      <form onSubmit={onSubmit}>
        <SearchInput
          type={'text'}
          placeholder={'캐릭터명을 입력해주세요.'}
          value={characterName}
          onChange={onChange}
        />
        <button type="submit">검색</button>
      </form>
    </section>
  )
}
