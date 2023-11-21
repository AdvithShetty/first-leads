import axios from 'axios'
import { useQuery } from 'react-query'

export interface Subscriptions {
  items: SubscriptionsItem[]
  taxAmount: string
  totalPrice: string
  id: number
  nextBillingDate: string
}

export interface SubscriptionsItem {
  id: number
  name: string
  price: number
  leadType: string
  leadTypeId: number
  coverageType: string
  areaType: string
  areaValue: string
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
      refetchOnWindowFocus: false,
    }
  )
}

export default useSubscriptions
