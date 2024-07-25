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
        <div
          key={`stat-${index}`}
          data-tooltip-id="tooltip"
          data-tooltip-content={stat.Tooltip.map((tooltip) =>
            tooltip.replace(/<[^>]*>/g, ''),
          )
            .filter(
              (text) =>
                !text.includes(
                  '카드 도감 누적 효과가 반영된 값으로 전투정보실에서는 별도 수치를 표기하지 않습니다.',
                ),
            )
            .join('\n')}
        >
          <span>{stat.Type}</span>
          <span>{stat.Value}</span>
        </div>
      ))}
      {/* 특성 툴팁 */}
      <CharacterTooltip tooltipId="tooltip" />
    </section>
  )
}
