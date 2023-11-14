import { Cart } from '@/utils/interface'
import axios from 'axios'
import { useQuery } from 'react-query'
import useCartId from './useCartId'

const useCart = () => {
  const { cartId } = useCartId()

  return useQuery(
    ['cart', cartId],
    async () => {
      const res = await axios.get<Cart>('/api/cart/get-items', {
        params: {
          cartId,
        },
      })

      return res.data
    },
    {
      enabled: !!cartId,
      // Stale and Cache time of 10 minutes
      staleTime: 1000 * 60 * 10,
      cacheTime: 1000 * 60 * 10,
    }
  )
}

export default useCart
