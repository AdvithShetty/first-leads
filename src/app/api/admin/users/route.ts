import { backendWithAuth } from '@/utils/axios'

export async function POST(request: Request) {
  const body = await request.json()

  const params = new URL(request.url).searchParams
  const search = params.get('search')
  const page = params.get('page')
  const rows = params.get('rows')

  try {
    const reqParams = search
      ? { search, page, rows }
      : {
          page,
          rows,
        }

    const res = await (
      await backendWithAuth()
    ).post('/users/search', body, {
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
        error: error?.response?.data?.errors,
      },
      {
        status: 500,
      }
    )
  }
}
