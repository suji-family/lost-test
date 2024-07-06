import { CharacterList } from '@/model/armories/characters'
import getCharacterList from '../_actions/getCharacterList'

/**
 * @description
 * 캐릭터 테스트 페이지 (임시))
 */
export default async function page() {
  const characterList: CharacterList = await getCharacterList()
  console.log('characterList', characterList)
  const { ArmoryProfile } = characterList

  return (
    <section>
      <h1>캐릭터 페이지 테스트</h1>
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
