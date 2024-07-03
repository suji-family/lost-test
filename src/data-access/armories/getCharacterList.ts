import getApiClient from '@/lib/apiClient/server/getApiClient'
import { CharacterList } from '@/model/armories/characters'

/**
 * @description
 * 캐릭터 리스트 받아오는 api
 */
export default async function getCharacterList() {
  const apiClient = await getApiClient()
  return apiClient.get<CharacterList>(`armories/characters/lemonfrappe`, {
    filters: 'profiles',
  })
}