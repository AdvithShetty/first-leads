import backend from '@/utils/axios'

export async function POST(request: Request) {
  const body = await request.json()

  try {
    const res = await backend.post('/auth/reset-password', body)
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
