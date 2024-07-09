/**
 * @description
 * 캐릭터 정보 입력 폼
 */

'use client'

import { useState, ChangeEvent, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Input from '@/ui/Input/Input'
import styles from './SearchForm.module.scss'

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
    <section className={styles.searchContiner}>
      <h1>전투 정보실</h1>
      <p className={styles.searchGuide}>캐릭터명을 입력 후 검색해주세요.</p>
      <p>장비 / 아바타 능력치 및 전투스킬을 확인 할 수 있습니다.</p>
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
