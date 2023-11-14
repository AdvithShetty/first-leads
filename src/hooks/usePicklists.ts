import { Picklists } from '@/utils/interface'
import axios from 'axios'
import { useQuery } from 'react-query'

const usePicklists = () => {
  return useQuery(
    'picklists',
    async () => {
      const res = await axios.get<Promise<Picklists>>('/api/picklists')
      return await res.data
    },
    {
      staleTime: 1000 * 60 * 60 * 24,
      cacheTime: 1000 * 60 * 60 * 24,
      retry: false,
      refetchOnWindowFocus: false,
    }
  )
}

export default usePicklists
