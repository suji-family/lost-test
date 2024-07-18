import getCharacterInfo from '@/app/profile/_actions/getCharacterInfo'
import CharacterCard from './CharacterCard'

/**
 * @description
 * 캐릭터 정보 카드 모달 컴포넌트
 */

interface Props {
  characterName: string
}

export default async function CharacterCardModal({ characterName }: Props) {
  const ArmoryProfile = await getCharacterInfo(characterName)

  return <CharacterCard ArmoryProfile={ArmoryProfile} />
}
