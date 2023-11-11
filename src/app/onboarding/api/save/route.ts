import backend from '@/utils/axios'

export async function POST(request: Request) {
  const body = await request.json()

  try {
    const res = await backend.post('/auth/sign-up', body)
    const data = await res.data

    return Response.json(data)
  } catch (error: any) {
    if (error.response.status === 409) {
      return Response.json({
        message: 'Email already exists',
      })
    }

    return Response.error()
  }
}
