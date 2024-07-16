import getCharacterInfoServer from '@/data-access/armories/getCharacterInfo'
import { CharacterInfo } from '@/model/armories/characters'

export default async function getCharacterInfo(
  characterName: string,
): Promise<CharacterInfo> {
  try {
    const data = await getCharacterInfoServer(characterName)

    return data
  } catch (e) {
    throw new Error('에러 처리 부탁드립니다.')
  }
}
