import { AreaValues } from '@/utils/interface'
import axios from 'axios'
import { useQuery } from 'react-query'

interface UseAreaValuesProps {
  pageNumber?: number
  rowsNumber?: number
  leadTypeId?: number
  search?: string
}

const useAreaValues = ({ leadTypeId, search, pageNumber = 0, rowsNumber = 20 }: UseAreaValuesProps) => {
  return useQuery(
    ['area-values', leadTypeId, search, pageNumber, rowsNumber],
    async () => {
      const res = await axios.get<Promise<AreaValues>>('/api/area-values', {
        params: {
          leadTypeId,
          search,
          pageNumber,
          rowsNumber,
        },
      })
      return await res.data
    },
    {
      staleTime: 1000 * 60 * 60 * 24,
      cacheTime: 1000 * 60 * 60 * 24,
      retry: false,
    }
  )
}

export default useAreaValues
