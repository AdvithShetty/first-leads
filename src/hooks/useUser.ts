import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useQuery } from 'react-query'
import useRefreshToken from './useRefreshToken'

const useUser = () => {
  const { refreshToken } = useRefreshToken()
  const router = useRouter()

  // useEffect(() => {
  //   if (!refreshToken) {
  //     router.replace('/signin')
  //   }
  // }, [refreshToken])

  return useQuery(
    ['user', refreshToken],
    async () => {
      const res = await axios.get('/api/user', {
        params: {
          refreshToken,
        },
      })
      return res.data
    },
    {
      enabled: !!refreshToken,
      staleTime: 1000 * 60 * 60 * 24, // 24 hours
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
      retry: false,
      onError: () => {
        console.log('error on Error in useUser.ts')

        router.replace('/signin')
      },
    }
  )
}

export default useUser
