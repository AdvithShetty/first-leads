import axios from 'axios'
import { useQuery } from 'react-query'
import useUser from './useUser'

const useSubscriptions = () => {
  const { data: user } = useUser()

  return useQuery(
    ['subscriptions', user?.id],
    async () => {
      const res = await axios.get(`/api/subscriptions/get`, {
        params: {
          id: user?.id,
        },
      })
      return await res.data
    },
    {
      enabled: !!user?.id,
    }
  )
}

export default useSubscriptions
