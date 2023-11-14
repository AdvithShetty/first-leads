import backend from '@/utils/axios'
import { Picklists } from '@/utils/interface'

export async function GET() {
  try {
    const res = await backend.get<Promise<Picklists>>('/picklists')
    const data = await res.data

    return Response.json(data)
  } catch (error: any) {
    console.log('Error in Picklists', error)

    return Response.json(
      {
        error: 'Something went wrong',
      },
      {
        status: 500,
      }
    )
  }
}
