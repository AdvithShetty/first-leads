import backend from '@/utils/axios'

export async function GET(request: Request) {
  // Get query params
  const params = new URL(request.url).searchParams
  const cartId = params.get('cartId')

  if (!cartId) {
    return Response.json(
      {
        error: 'cartId is required',
      },
      {
        status: 400,
        statusText: 'Bad Request: Missing cartId',
      }
    )
  }

  try {
    const res = await backend.get(`/carts/${cartId}/checkout`)
    const data = await res.data

    return Response.json(data)
  } catch (error: any) {
    console.log('Error while checkout', error?.response?.data || error?.response)

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
