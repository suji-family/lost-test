import { Stats } from '@/model/armories/characters'
import styles from './CharacterDetailStat.module.scss'
import CharacterTooltip from './CharacterTooltip'

interface Props {
  Stats: Stats[]
}

export default function CharacterDetailStat({ Stats }: Props) {
  return (
    <section className={styles.stat}>
      {Stats.map((stat, index) => (
        <div data-tooltip-id={`tooltip-${index}`} key={`stat-${index}`}>
          <span>{stat.Type}</span>
          <span>{stat.Value}</span>
          {/* 툴팁 메시지 */}
          <CharacterTooltip
            tooltip={stat.Tooltip}
            tooltipId={`tooltip-${index}`}
          />
        </div>
      ))}
    </section>
  )
}
