import { Reports } from '@/utils/interface'
import axios from 'axios'
import { useQuery } from 'react-query'

interface UserReport {
  page: number
  rows: number
  search: string
  startDate: string
  leadTypeId: number
}

const useUserReports = ({ page, rows, search, startDate, leadTypeId }: Partial<UserReport>) => {
  return useQuery(
    ['userReports', page, rows, search, startDate, leadTypeId],
    async () => {
      const body =
        startDate && leadTypeId
          ? {
              createdAt: {
                startDate,
              },
              leadTypeId,
            }
          : startDate
          ? {
              createdAt: {
                startDate,
              },
            }
          : leadTypeId
          ? {
              leadTypeId,
            }
          : {}

      const res = await axios.post<Reports>('/api/reports', body, {
        params: {
          page,
          rows,
          search,
        },
      })

      return res.data
    },
    {
      retry: false,
      staleTime: 1000 * 60 * 60 * 24,
      cacheTime: 1000 * 60 * 60 * 24,
    }
  )
}

export default useUserReports
