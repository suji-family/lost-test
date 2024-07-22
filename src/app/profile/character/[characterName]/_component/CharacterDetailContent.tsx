import styles from './CharacterDetailContent.module.scss'
import CharacterDetailLevel from './CharacterDetailLevel'
import CharacterDetailItemLevel from './CharacterDetailItemLevel'
import CharacterDetailGameInfo from './CharacterDetailGameInfo'
import Image from 'next/image'
import Link from 'next/link'
import { ArmoryProfile } from '@/model/armories/characters'
import CharacterDetailHeader from './CharacterDetailHeader'
import CharacterDetailStat from './CharacterDetailStat'
import CharacterDetailTendency from './CharacterDetailTendency'

/**
 * @description
 * 검색된 캐릭터 정보 컴포넌트
 */

interface Props {
  characterName: string
  ArmoryProfile: ArmoryProfile
}

export default function CharacterDetailContent({
  characterName,
  ArmoryProfile,
}: Props) {
  if (!ArmoryProfile) {
    return (
      <section>
        <h1>캐릭터 정보 페이지</h1>
        <p>{decodeURIComponent(characterName)} 캐릭터 정보가 없습니다.</p>
      </section>
    )
  }

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
    Stats,
    Tendencies,
  } = ArmoryProfile

  return (
    <section className={styles.characterDetailContainer}>
      {/* 캐릭터명, 서버명, 클래스명 */}
      <CharacterDetailHeader
        CharacterName={CharacterName}
        ServerName={ServerName}
        CharacterClassName={CharacterClassName}
      />

      <Link href={`/profile/character/${CharacterName}/card`}>
        <div className={styles.characterModalButton}>캐릭터 카드 보기</div>
      </Link>

      <div className={styles.characterInfoContainer}>
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

          {/* 전투 특성 */}
          <CharacterDetailStat Stats={Stats} />

          {/* 성향 */}
          <CharacterDetailTendency Tendencies={Tendencies} />
        </div>

        {/* 캐릭터 이미지 */}
        <div className={styles.characterImage}>
          <Image
            src={CharacterImage}
            alt="CharacterImage"
            priority={true}
            fill
          />
        </div>
      </div>
    </section>
  )
}
