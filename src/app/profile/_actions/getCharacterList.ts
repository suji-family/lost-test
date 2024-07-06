import getCharacterListServer from '@/data-access/armories/getCharacterList'
import { CharacterList } from '@/model/armories/characters'

export default async function getCharacterList(): Promise<CharacterList> {
  try {
    const data = await getCharacterListServer()

    return data
  } catch (e) {
    throw new Error('에러 처리 부탁드립니다.')
  }
}
