import styles from './CharacterDetailGameInfo.module.scss'

interface Props {
  Title: string
  GuildName: string
  PvpGradeName: string
  TownLevel: number | null
  TownName: string
}

export default function CharacterDetailGameInfo({
  Title,
  GuildName,
  PvpGradeName,
  TownLevel,
  TownName,
}: Props) {
  return (
    <section className={styles.gameInfo}>
      <div>
        <span>칭호</span>
        <span>{Title}</span>
      </div>
      <div>
        <span>길드</span>
        <span>{GuildName}</span>
      </div>
      <div>
        <span>PVP</span>
        <span>{PvpGradeName}</span>
      </div>
      <div>
        <span>영지</span>
        <span>
          <small>Lv.</small>
          {TownLevel}
        </span>
        <span>{TownName}</span>
      </div>
    </section>
  )
}
