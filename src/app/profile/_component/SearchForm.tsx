/**
 * @description
 * 캐릭터 정보 입력 폼
 */

'use client'

import { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Input from '@/ui/Input/Input'
import styles from './SearchForm.module.scss'
import { _getLocalStorage, _setLocalStorage } from '@/lib/Util/localStorageUtil'

export default function SearchForm() {
  const [characterName, setCharacterName] = useState<string>('')
  const router = useRouter()

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (characterName) {
      const recentSearch = _getLocalStorage('characterName') || []

      // 중복 검색 제거, 최신 검색어를 제일 앞에 추가, 최근 검색어 갯수 제한
      const updatedSearch = [characterName]
        .concat(
          recentSearch.filter(
            (character: string) => character !== characterName,
          ),
        )
        .slice(0, 4)

      _setLocalStorage('characterName', updatedSearch)

      router.push(`/profile/character/${characterName}`)
    }
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCharacterName(e.target.value)
  }

  return (
    <section>
      <form onSubmit={onSubmit} className={styles.formStyle}>
        <Input
          type={'text'}
          placeholder={'캐릭터명을 입력해주세요.'}
          value={characterName}
          onChange={onChange}
          maxLength={12}
        />
        <button type="submit">검색</button> {/* TODO: 검색아이콘으로 바꾸기 */}
      </form>
      {/* TODO: 최근 검색 결과 넣기 */}
    </section>
  )
}
