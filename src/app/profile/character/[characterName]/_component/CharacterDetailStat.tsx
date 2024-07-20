import { Stats } from '@/model/armories/characters'
import styles from './CharacterDetailStat.module.scss'

interface Props {
  Stats: Stats[]
}

export default function CharacterDetailStat({ Stats }: Props) {
  return (
    <section className={styles.stat}>
      {Stats.map((stat, index) => (
        <div key={`stat-${index}`}>
          <span>{stat.Type}</span>
          <span>{stat.Value}</span>
        </div>
      ))}
    </section>
  )
}
