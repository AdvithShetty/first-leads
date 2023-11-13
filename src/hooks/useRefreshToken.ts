import { useLocalStorage } from 'usehooks-ts'

const useRefreshToken = () => {
  const [refreshToken, setRefreshToken] = useLocalStorage<string>('refreshToken', '')

  return {
    refreshToken,
    setRefreshToken,
  }
}

export default useRefreshToken
