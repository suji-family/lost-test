import getCharacterList from '@/app/profile/_actions/getCharacterList'
import { CharacterList } from '@/model/armories/characters'
import styles from './CharacterDetail.module.scss'
import CharaterLevel from './CharaterLevel'

/**
 * @description
 * 검색된 캐릭터 정보 보여주는 컴포넌트
 */

interface Props {
  characterName: string
}

export default async function CharacterDetail({ characterName }: Props) {
  const characterList: CharacterList = await getCharacterList(characterName)

  if (!characterList) {
    return (
      <section>
        <h1>캐릭터 정보 페이지</h1>
        <p>{decodeURIComponent(characterName)} 캐릭터 정보가 없습니다.</p>
      </section>
    )
  }

  const { ArmoryProfile } = characterList
  const { ExpeditionLevel, CharacterLevel } = ArmoryProfile

  return (
    <section>
      {/* 캐릭터명, 서버명, 클래스명 */}
      <div className={styles.characterHeader}>
        <span>{ArmoryProfile.CharacterName}</span> &nbsp;
        <span>{ArmoryProfile.ServerName}</span> &nbsp;
        <span>{ArmoryProfile.CharacterClassName}</span>
      </div>

      <div className={styles.CharacterInfoContainer}>
        <div className={styles.profileInfo}>
          {/* 원정대, 전투 레벨 */}
          <CharaterLevel
            ExpeditionLevel={ExpeditionLevel}
            CharacterLevel={CharacterLevel}
          />

          {/* 장착 아이템, 달성 아이템 레벨 */}
          <div className={styles.levelInfo2}>
            <div className={styles.levelInfoItemAvg}>
              <span>장착 아이템 레벨</span>
              <span>
                <small>Lv.</small>
                {ArmoryProfile.ItemAvgLevel}
              </span>
            </div>
            <div className={styles.levelInfoItemMax}>
              <span>달성 아이템 레벨</span>
              <span>
                <small>Lv.</small>
                {ArmoryProfile.ItemMaxLevel}
              </span>
            </div>
          </div>

          {/* 칭호, 길드, PVP, 영지 */}
          <div className={styles.gameInfo}>
            <div className={styles.gameInfoTitle}>
              <span>칭호</span>
              <span>{ArmoryProfile.Title}</span>
            </div>
            <div className={styles.gameInfoGuild}>
              <span>길드</span>
              <span>{ArmoryProfile.GuildName}</span>
            </div>
            <div className={styles.levelInfoPvp}>
              <span>PVP</span>
              <span>{ArmoryProfile.PvpGradeName}</span>
            </div>
            <div className={styles.gameInfoTown}>
              <span>영지</span>
              <span>
                <small>Lv.</small>
                {ArmoryProfile.TownLevel}
              </span>
              <span>{ArmoryProfile.TownName}</span>
            </div>
          </div>
        </div>

        {/* 캐릭터 이미지 */}
        <div>
          <img src={ArmoryProfile.CharacterImage} alt="CharacterImage" />
        </div>
      </div>
    </section>
  )
}
