import FetchApiClient from '../FetchApiClient'

async function getApiClient() {
  'use server'

  const apiClient = new FetchApiClient({
    token: process.env.LOST_API_KEY || '',
    useTs: false,
  })
  return apiClient
}

export default getApiClient
