import { Tendencies } from '@/model/armories/characters'
import styles from './CharacterDetailTendency.module.scss'

interface Props {
  Tendencies: Tendencies[]
}

export default function CharacterDetailTendency({ Tendencies }: Props) {
  return (
    <section className={styles.stat}>
      {Tendencies.map((tendency, index) => (
        <div key={`tendency-${index}`}>
          <span>{tendency.Type}</span>
          <span>{tendency.Point}</span>
        </div>
      ))}
    </section>
  )
}
