import backend from '@/utils/axios'

export async function POST(request: Request) {
  const body = await request.json()

  console.log('body', body)

  try {
    const res = await backend.post('/contact-support', body)
    const data = await res.data

    return Response.json(data)
  } catch (error: any) {
    console.log('error', error)

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
