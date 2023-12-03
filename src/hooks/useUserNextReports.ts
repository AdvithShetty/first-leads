import { NextReports } from '@/utils/interface'
import axios from 'axios'
import { useQuery } from 'react-query'
import useUser from './useUser'

const useUserNextReports = () => {
  const { data: user } = useUser()

  return useQuery<NextReports>(
    ['next-reports', user?.id],
    async () => {
      const res = await axios.get('/api/user/next-reports')
      const data = await res.data
      return data
    },
    {
      enabled: !!user,
      refetchOnWindowFocus: false,
    }
  )
}

export default useUserNextReports
