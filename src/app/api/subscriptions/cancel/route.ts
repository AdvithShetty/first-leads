import { backendWithAuth } from '@/utils/axios'

export async function DELETE(request: Request) {
  const params = new URL(request.url).searchParams
  const subscriptionId = params.get('subscriptionId')

  if (!subscriptionId) {
    return Response.json(
      {
        error: 'Subscription Id is required',
      },
      {
        status: 400,
      }
    )
  }

  try {
    const res = await (
      await backendWithAuth()
    ).delete(`/subscriptions/${subscriptionId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = res.data

    return Response.json(data, { status: 200 })
  } catch (error: any) {
    console.log('Error while cancelling Subscriptions', error?.response?.data || error?.response)

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
