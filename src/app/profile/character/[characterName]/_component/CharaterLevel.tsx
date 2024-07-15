import styles from './CharaterLevel.module.scss'

interface Props {
  ExpeditionLevel: number
  CharacterLevel: number
}

export default function CharaterLevel({
  ExpeditionLevel,
  CharacterLevel,
}: Props) {
  return (
    <section className={styles.level}>
      <div className={styles.levelInfoExpedition}>
        <span>원정대 레벨</span>
        <span>
          <small>Lv.</small>
          {ExpeditionLevel}
        </span>
      </div>
      <div className={styles.levelInfoItem}>
        <span>전투 레벨</span>
        <span>
          <small>Lv.</small>
          {CharacterLevel}
        </span>
      </div>
    </section>
  )
}
