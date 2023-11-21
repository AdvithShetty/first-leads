import axios from 'axios'
import { useQuery } from 'react-query'

const useSubscriptionsById = ({ id }: { id: number }) => {
  return useQuery(
    ['subscriptions', id],
    async () => {
      const res = await axios.get(`/api/subscriptions/get`, {
        params: {
          id: id,
        },
      })
      return await res.data
    },
    {
      enabled: !!id,
    }
  )
}

export default useSubscriptionsById
