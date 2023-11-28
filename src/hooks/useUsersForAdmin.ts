import { UsersForAdmin } from '@/utils/interface'
import axios from 'axios'
import { useQuery } from 'react-query'

interface UserForAdmin {
  page: number
  rows: number
  search: string
}

const useUsersForAdmin = ({ page, rows, search }: Partial<UserForAdmin>) => {
  return useQuery<UsersForAdmin>(
    ['users-admin', page, rows, search],
    async () => {
      const res = await axios.post(
        '/api/admin/users',
        {
          active: true,
        },
        {
          params: {
            page,
            rows,
            search,
          },
        }
      )
      const data = await res.data
      return data
    },
    {
      retry: false,
      staleTime: 1000 * 60 * 60 * 24,
      cacheTime: 1000 * 60 * 60 * 24,
    }
  )
}

export default useUsersForAdmin
