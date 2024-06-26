'use client'

import { useMemo } from 'react'
import { UserDeviceCheckContext } from '../_hooks/useUserDeviceCheckContext'

interface Props {
  children: React.ReactNode
  isMobile: boolean
}

export default function UserDeviceCheckProvider({
  children,
  isMobile = false,
}: Props) {
  const value = useMemo(() => ({ isMobile }), [isMobile])

  return (
    <UserDeviceCheckContext.Provider value={value}>
      {children}
    </UserDeviceCheckContext.Provider>
  )
}
