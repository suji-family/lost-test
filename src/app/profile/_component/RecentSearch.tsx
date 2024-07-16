'use client'

import { _getLocalStorage } from '@/lib/Util/localStorageUtil'
import { useEffect, useState } from 'react'
import styles from './RecentSearch.module.scss'
import Link from 'next/link'

export default function RecentSearch() {
  const [recentSearch, setRecentSearch] = useState<string[]>([])
  useEffect(() => {
    const localStorageData = _getLocalStorage('characterName')

    if (localStorageData) {
      setRecentSearch(localStorageData)
    }
  }, [])

  return (
    <div className={styles.RecentSearchContainer}>
      <h4>최근 검색</h4>
      {recentSearch && recentSearch.length > 0 && (
        <ul className={styles.RecentSearchList}>
          {recentSearch.map((character: string, i: number) => (
            <li key={`recentSearch-${i}`}>
              <Link href={`/profile/character/${character}`}>{character}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
