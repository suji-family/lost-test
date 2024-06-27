'use client'

import Link from 'next/link'
import clsx from 'clsx'
import styles from './Tab.module.scss'
import { useState } from 'react'

export default function Tab() {
  const url = '/news/notice'
  const [activeTab, setActiveTab] = useState('공지')
  const onClickTab = (tab: string) => {
    setActiveTab(tab)
  }

  return (
    <div>
      <h2>공지사항</h2>
      <div className={clsx([styles.tab])}>
        <Link
          href={{ pathname: `${url}`, query: { type: '공지' } }}
          legacyBehavior
        >
          <a
            className={clsx({ [styles.active]: activeTab === '공지' })}
            onClick={() => onClickTab('공지')}
          >
            공지
          </a>
        </Link>
        <Link
          href={{ pathname: `${url}`, query: { type: '점검' } }}
          legacyBehavior
        >
          <a
            className={clsx({ [styles.active]: activeTab === '점검' })}
            onClick={() => onClickTab('점검')}
          >
            점검
          </a>
        </Link>
        <Link
          href={{ pathname: `${url}`, query: { type: '상점' } }}
          legacyBehavior
        >
          <a
            className={clsx({ [styles.active]: activeTab === '상점' })}
            onClick={() => onClickTab('상점')}
          >
            상점
          </a>
        </Link>
        <Link
          href={{ pathname: `${url}`, query: { type: '이벤트' } }}
          legacyBehavior
        >
          <a
            className={clsx({ [styles.active]: activeTab === '이벤트' })}
            onClick={() => onClickTab('이벤트')}
          >
            이벤트
          </a>
        </Link>
      </div>
    </div>
  )
}
