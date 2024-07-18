'use client'

import Image from 'next/image'
import CharacterDetailLevel from './CharacterDetailLevel'
import CharacterDetailItemLevel from './CharacterDetailItemLevel'
import CharacterDetailGameInfo from './CharacterDetailGameInfo'
import styles from './CharacterCard.module.scss'
import CharacterDetailHeader from './CharacterDetailHeader'
import { ArmoryProfile } from '@/model/armories/characters'
import { useRouter } from 'next/navigation'

interface Props {
  ArmoryProfile: ArmoryProfile
}

export default function CharacterCard({ ArmoryProfile }: Props) {
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

  const router = useRouter()

  const onHandleClose = () => {
    router.back()
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        {/* 캐릭터명, 서버명, 클래스명 */}
        <CharacterDetailHeader
          CharacterName={CharacterName}
          ServerName={ServerName}
          CharacterClassName={CharacterClassName}
        />

        <button
          type="button"
          className={styles.closeButton}
          onClick={onHandleClose}
        >
          X
        </button>

        <div className={styles.characterInfoContainer}>
          <Image
            src={CharacterImage}
            width={200}
            height={220}
            alt="CharacterImage"
            priority={true}
          />

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
        </div>
      </div>
    </div>
  )
}
