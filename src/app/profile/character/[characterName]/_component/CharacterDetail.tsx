import getCharacterInfo from '@/app/profile/_actions/getCharacterInfo'
import UpdateCharacterNameStorage from './UpdateCharacterNameStorage'
import CharacterDetailContent from './CharacterDetailContent'

/**
 * @description
 * 검색된 캐릭터 정보 보여주는 컴포넌트
 */

interface Props {
  characterName: string
}

export default async function CharacterDetail({ characterName }: Props) {
  const ArmoryProfile = await getCharacterInfo(characterName)

  return (
    <>
      {ArmoryProfile && (
        <UpdateCharacterNameStorage characterName={characterName} />
      )}
      <CharacterDetailContent
        characterName={characterName}
        ArmoryProfile={ArmoryProfile}
      />
    </>
  )
}
