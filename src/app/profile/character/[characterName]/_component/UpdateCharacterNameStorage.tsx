'use client'

import { useEffect } from 'react'
import { _getLocalStorage, _setLocalStorage } from '@/lib/Util/localStorageUtil'

interface Props {
  characterName: string
}

export default function UpdateCharacterNameStorage({ characterName }: Props) {
  useEffect(() => {
    const recentSearch = _getLocalStorage('characterName') || []

    const decodedCharacterName = decodeURIComponent(characterName)

    // 중복 검색 제거, 최신 검색어를 제일 앞에 추가, 최근 검색어 갯수 제한
    const updatedSearch = [decodedCharacterName]
      .concat(
        recentSearch.filter(
          (character: string) => character !== decodedCharacterName,
        ),
      )
      .slice(0, 4)

    _setLocalStorage('characterName', updatedSearch)
  }, [characterName])

  return null
}
