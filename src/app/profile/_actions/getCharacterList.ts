import getCharacterListServer from '@/data-access/armories/getCharacterList'
import { CharacterList } from '@/model/armories/characters'

export default async function getCharacterList(
  characterName: string,
): Promise<CharacterList> {
  try {
    const data = await getCharacterListServer(characterName)

    return data
  } catch (e) {
    throw new Error('에러 처리 부탁드립니다.')
  }
}
