import styles from './CharacterDetailItemLevel.module.scss'

interface Props {
  ItemAvgLevel: string
  ItemMaxLevel: string
}

export default function CharacterDetailItemLevel({
  ItemAvgLevel,
  ItemMaxLevel,
}: Props) {
  return (
    <section className={styles.itemLevel}>
      <div>
        <span>장착 아이템 레벨</span>
        <span>
          <small>Lv.</small>
          {ItemAvgLevel}
        </span>
      </div>
      <div>
        <span>달성 아이템 레벨</span>
        <span>
          <small>Lv.</small>
          {ItemMaxLevel}
        </span>
      </div>
    </section>
  )
}
