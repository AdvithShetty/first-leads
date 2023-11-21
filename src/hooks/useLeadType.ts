import axios from 'axios'
import { useQuery } from 'react-query'

export interface LeadType {
  id: number
  name: string
  description: string
  isActive: boolean
  basicPrice: BasicPrice
  premiumPrice: PremiumPrice
}

export interface BasicPrice {
  id: number
  price: string
}

export interface PremiumPrice {
  id: number
  price: string
}

const useLeadType = ({ id }: { id: string }) => {
  return useQuery<LeadType>(
    ['leadType', id],
    async () => {
      const res = await axios.get(`/api/lead-types`, {
        params: {
          leadTypeId: id,
        },
      })
      return res.data
    },
    {
      enabled: !!id,
      retry: false,
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  )
}

export default useLeadType
