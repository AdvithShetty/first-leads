import axios from 'axios'
import { useQuery } from 'react-query'

const useSubscriptions = () => {
  return useQuery(
    'subscriptions',
    async () => {
      const res = await axios.get(`/api/user/subscription`)
      return await res.data
    },
    {
      retry: false,
    }
  )
}

export default useSubscriptions
