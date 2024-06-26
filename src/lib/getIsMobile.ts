import { headers } from 'next/headers'
import { getSelectorsByUserAgent } from 'react-device-detect'

export default function getIsMobile() {
  const { isMobile } = getSelectorsByUserAgent(
    headers().get('user-agent') ?? '',
  )

  return isMobile
}
