import { backendWithAuth } from '@/utils/axios'

export async function PATCH(request: Request) {
  const params = new URL(request.url).searchParams
  const subscriptionId = params.get('subscriptionId')
  const itemId = params.get('itemId')

  if (!subscriptionId || !itemId) {
    return Response.json(
      {
        error: 'Subscription Id and Item Id are required',
      },
      {
        status: 400,
      }
    )
  }

  const body = await request.json()

  try {
    const res = await (
      await backendWithAuth()
    ).patch(`/subscriptions/${subscriptionId}/coverage/${itemId}/coverageType`, body, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = res.data

    return Response.json(data, { status: 200 })
  } catch (error: any) {
    console.log('Error while updating Subscriptions area value', error?.response?.data || error?.response)

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
