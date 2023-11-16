import { backendWithAuth } from '@/utils/axios'

export async function POST(request: Request) {
  const params = new URL(request.url).searchParams
  const search = params.get('search')
  const page = params.get('page')
  const rows = params.get('rows')

  const body = await request.json()

  try {
    const reqParams = search
      ? { search, page, rows }
      : {
          page,
          rows,
        }

    const res = await (
      await backendWithAuth()
    ).post('/reports/search', body, {
      headers: {
        'Content-Type': 'application/json',
      },
      params: reqParams,
    })
    const data = await res.data

    return Response.json(data)
  } catch (error: any) {
    console.log('error', error?.response?.data || error?.response)

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
