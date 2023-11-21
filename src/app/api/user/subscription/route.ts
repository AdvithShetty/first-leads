import { backendWithAuth } from '@/utils/axios'

export async function GET() {
  try {
    const res = await (
      await backendWithAuth()
    ).get('/users/subscription', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await res.data

    return Response.json(data)
  } catch (error: any) {
    console.log('error', error?.response?.data || error?.response)

    if (error?.response?.status === 404) {
      return Response.json(
        {
          error: 'Not found',
        },
        {
          status: 404,
          statusText: 'Subscription not found',
        }
      )
    }

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
