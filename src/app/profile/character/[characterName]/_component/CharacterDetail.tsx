import getCharacterList from '@/app/profile/_actions/getCharacterList'
import { CharacterList } from '@/model/armories/characters'

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

  return (
    <section>
      <h1>캐릭터 정보 페이지</h1>
      <div>
        <img src={ArmoryProfile.CharacterImage} alt="Character Image" />
        <p>Character Name: {ArmoryProfile.CharacterName}</p>
        <p>Server Name: {ArmoryProfile.ServerName}</p>
        <p>Character Level: {ArmoryProfile.CharacterLevel}</p>
        <p>Character Class: {ArmoryProfile.CharacterClassName}</p>
        <p>Pvp Grade: {ArmoryProfile.PvpGradeName}</p>
        <p>Town Name: {ArmoryProfile.TownName}</p>
        <p>Guild Name: {ArmoryProfile.GuildName}</p>
        <p>Expedition Level: {ArmoryProfile.ExpeditionLevel}</p>
        <p>Item Avg Level: {ArmoryProfile.ItemAvgLevel}</p>
        <p>Item Max Level: {ArmoryProfile.ItemMaxLevel}</p>
      </div>
    </section>
  )
}
