import { backendWithAuth } from '@/utils/axios'

export async function PUT() {
  try {
    const res = await (
      await backendWithAuth()
    ).put(
      '/users/accept-terms',
      {},
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    const data = await res.data

    return Response.json(data, {
      status: 200,
    })
  } catch (error: any) {
    console.log('Error in Accept Terms', error?.response?.data || error?.response)

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
