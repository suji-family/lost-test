import styles from './CharacterDetailLevel.module.scss'

interface Props {
  ExpeditionLevel: number
  CharacterLevel: number
}

export default function CharacterDetailLevel({
  ExpeditionLevel,
  CharacterLevel,
}: Props) {
  return (
    <section className={styles.level}>
      <div>
        <span>원정대 레벨</span>
        <span>
          <small>Lv.</small>
          {ExpeditionLevel}
        </span>
      </div>
      <div>
        <span>전투 레벨</span>
        <span>
          <small>Lv.</small>
          {CharacterLevel}
        </span>
      </div>
    </section>
  )
}
