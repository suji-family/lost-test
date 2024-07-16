import getApiClient from '@/lib/apiClient/server/getApiClient'
import { CharacterInfo } from '@/model/armories/characters'

/**
 * @description
 * 캐릭터 리스트 받아오는 api
 */
export default async function getCharacterInfo(characterName: string) {
  const apiClient = await getApiClient()
  return apiClient.get<CharacterInfo>(`armories/characters/${characterName}`, {
    filters: 'profiles',
  })
}
