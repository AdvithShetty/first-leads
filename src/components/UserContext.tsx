import { ReactNode, createContext, useContext, useState } from 'react'

type User = {
  id: number
  firstName: string
  lastName: string
  email: string
  refreshToken: string
  accessToken: string
}

interface UserContextType {
  user: User | null
  setUser: (user: User) => void
}

const UserContext = createContext<UserContextType | null>(null)

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)

  const value = {
    user,
    setUser,
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserContext

export const useUserContext = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUserContenxt must be used within a UserContextProvider')
  }
  return context
}
