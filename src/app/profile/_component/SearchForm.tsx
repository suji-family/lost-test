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
