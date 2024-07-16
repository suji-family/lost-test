import getCharacterInfoServer from '@/data-access/armories/getCharacterInfo'
import { ArmoryProfile } from '@/model/armories/characters'

export default async function getCharacterInfo(
  characterName: string,
): Promise<ArmoryProfile> {
  try {
    const { ArmoryProfile } = await getCharacterInfoServer(characterName)

    return ArmoryProfile
  } catch (e) {
    throw new Error('에러 처리 부탁드립니다.')
  }
}
