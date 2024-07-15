import getCharacterList from '@/app/profile/_actions/getCharacterList'
import { CharacterList } from '@/model/armories/characters'
import styles from './CharacterDetail.module.scss'
import CharacterDetailLevel from './CharacterDetailLevel'
import CharacterDetailItemLevel from './CharacterDetailItemLevel'
import CharacterDetailGameInfo from './CharacterDetailGameInfo'

/**
 * @description
 * 검색된 캐릭터 정보 보여주는 컴포넌트
 *
 * @param characterName 검색창에 입력한 캐릭터명
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
  const {
    CharacterName,
    ServerName,
    CharacterClassName,
    ExpeditionLevel,
    CharacterLevel,
    ItemAvgLevel,
    ItemMaxLevel,
    Title,
    GuildName,
    PvpGradeName,
    TownLevel,
    TownName,
    CharacterImage,
  } = ArmoryProfile

  return (
    <section>
      {/* 캐릭터명, 서버명, 클래스명 */}
      <div className={styles.characterHeader}>
        <span>{CharacterName}</span> &nbsp;
        <span>{ServerName}</span> &nbsp;
        <span>{CharacterClassName}</span>
      </div>

      <div className={styles.CharacterInfoContainer}>
        <div className={styles.profileInfo}>
          {/* 원정대, 전투 레벨 */}
          <CharacterDetailLevel
            ExpeditionLevel={ExpeditionLevel}
            CharacterLevel={CharacterLevel}
          />

          {/* 장착 아이템, 달성 아이템 레벨 */}
          <CharacterDetailItemLevel
            ItemAvgLevel={ItemAvgLevel}
            ItemMaxLevel={ItemMaxLevel}
          />

          {/* 칭호, 길드, PVP, 영지 */}
          <CharacterDetailGameInfo
            Title={Title}
            GuildName={GuildName}
            PvpGradeName={PvpGradeName}
            TownLevel={TownLevel}
            TownName={TownName}
          />
        </div>

        {/* 캐릭터 이미지 */}
        <div>
          <img src={CharacterImage} alt="CharacterImage" />
        </div>
      </div>
    </section>
  )
}
