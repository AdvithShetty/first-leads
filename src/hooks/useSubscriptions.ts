import axios from 'axios'
import { useQuery } from 'react-query'

export interface Subscriptions {
  items: SubscriptionsItem[]
  taxAmount: number
  totalPrice: number
}

export interface SubscriptionsItem {
  areaType: string
  areaValue: string
  coverageType: string
  id: number
  leadType: string
}

const useSubscriptions = () => {
  return useQuery<Subscriptions>(
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
