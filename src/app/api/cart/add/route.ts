import backend from '@/utils/axios'

export async function POST(request: Request) {
  const body = await request.json()
  const params = new URL(request.url).searchParams
  const cartId = params.get('cartId')

  try {
    const res = await backend.post(`/carts/${cartId}/items`, body)
    const data = await res.data

    return Response.json(data)
  } catch (error: any) {
    console.log('Error in Create Cart', error?.response)
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
