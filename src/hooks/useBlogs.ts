import { Blogs } from '@/utils/interface'
import axios from 'axios'
import { useQuery } from 'react-query'

const useBlogs = () => {
  return useQuery<Blogs>('blogs', async () => {
    const res = await axios.get('/api/blogs')
    return res.data
  })
}

export default useBlogs
