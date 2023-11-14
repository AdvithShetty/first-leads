import backend from '@/utils/axios'
import { AreaValues } from '@/utils/interface'

export async function GET(request: Request) {
  // Get query params
  const params = new URL(request.url).searchParams
  const leadTypeId = params.get('leadTypeId')
  const search = params.get('search')
  const page = params.get('pageNumber')
  const rows = params.get('rowsNumber')

  try {
    const res = await backend.get<Promise<AreaValues>>('/lead-types/area-values', {
      params: search
        ? {
            leadTypeId,
            search,
            page,
            rows,
          }
        : {
            leadTypeId,
            page,
            rows,
          },
    })
    const data = await res.data

    return Response.json(data)
  } catch (error: any) {
    console.log('Error in Area Values', error)

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
