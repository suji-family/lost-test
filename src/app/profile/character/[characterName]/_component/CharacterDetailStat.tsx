'use client'

import { Stats } from '@/model/armories/characters'
import styles from './CharacterDetailStat.module.scss'
import { Tooltip } from 'react-tooltip'
interface Props {
  Stats: Stats[]
}

export default function CharacterDetailStat({ Stats }: Props) {
  return (
    <section className={styles.stat}>
      {Stats.map((stat, index) => (
        <div data-tooltip-id="test" key={`stat-${index}`}>
          <span>{stat.Type}</span>
          <span>{stat.Value}</span>
          <Tooltip id="test" place={'top'}>
            툴팁 테스트
          </Tooltip>
          {/* todo: 툴팁 컴포넌트 따로 빼서 만들고 데이터 내려주기 */}
        </div>
      ))}
    </section>
  )
}
