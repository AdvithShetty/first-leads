import { UserAnalytics } from '@/utils/interface'
import axios from 'axios'
import { useQuery } from 'react-query'
import useUser from './useUser'

const useUserAnalytics = () => {
  const { data: user } = useUser()

  return useQuery<UserAnalytics>(
    ['userAnalytics', user?.id],
    async () => {
      const res = await axios.get('/api/user/analytics')
      const data = await res.data
      return data
    },
    {
      enabled: !!user,
      refetchOnWindowFocus: false,
    }
  )
}

export default useUserAnalytics
