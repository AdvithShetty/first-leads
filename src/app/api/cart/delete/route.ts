import backend from '@/utils/axios'

export async function DELETE(request: Request) {
  // Fetch the query params
  const params = new URL(request.url).searchParams
  const cartId = params.get('cartId')
  const itemId = params.get('itemId')

  if (!cartId || !itemId) {
    return Response.json(
      {
        error: 'cartId and itemId are required',
      },
      {
        status: 400,
        statusText: 'Bad Request: Missing cartId or itemId',
      }
    )
  }

  try {
    const res = await backend.delete(`/carts/${cartId}/items/${itemId}`)
    const data = await res.data

    return Response.json(data)
  } catch (error: any) {
    console.log('Error while Deleting Cart', error?.response?.data || error?.response)
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
