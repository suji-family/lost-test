import { createContext, useContext } from 'react'

type UserAgent = {
  isMobile: boolean
}

export const UserDeviceCheckContext = createContext<UserAgent | undefined>(
  undefined,
)

export default function useUserDeviceCheckContext() {
  const context = useContext(UserDeviceCheckContext)
  if (context === undefined) {
    throw new Error('This hook should use in UserDeviceCheckContextProvider')
  }

  return context
}
