import backend from '@/utils/axios'

export async function GET(request: Request) {
  // Get query params
  const params = new URL(request.url).searchParams
  const cartId = params.get('cartId')

  try {
    const res = await backend.get(`/carts/${cartId}`)
    const data = await res.data

    return Response.json(data)
  } catch (error: any) {
    console.log('Error in Get Cart Items', error)

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
