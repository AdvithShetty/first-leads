import { backendWithAuth } from '@/utils/axios'

export async function GET(request: Request) {
  const params = new URL(request.url).searchParams
  const id = params.get('id')

  try {
    const res = await (await backendWithAuth()).get(`/subscriptions/${id}`)
    const data = await res.data

    return Response.json(data)
  } catch (error: any) {
    console.log('Error in Subscriptions', error?.response?.data || error?.response)

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
