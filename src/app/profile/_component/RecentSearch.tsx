'use client'

import { _getLocalStorage } from '@/lib/Util/localStorageUtil'
import { useEffect, useState } from 'react'
import styles from './RecentSearch.module.scss'
import Link from 'next/link'

export default function RecentSearch() {
  const [recentSearch, setRecentSearch] = useState<string[]>([])
  // .filter((character: string) => character !== characterName)
  useEffect(() => {
    const localStorageData = _getLocalStorage('characterName')
    console.log('localStorageData', localStorageData)

    if (localStorageData) {
      setRecentSearch(localStorageData)
    }
  }, [])

  return (
    <section className={styles.RecentSearchContainer}>
      <h4>최근 검색</h4>
      {recentSearch && recentSearch.length > 0 && (
        <ul>
          {recentSearch.map((character: string, i: number) => (
            <li key={`recentSearch-${i}`}>
              <Link href={`/profile/character/${character}`}>{character}</Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
