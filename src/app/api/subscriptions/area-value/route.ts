import { backendWithAuth } from '@/utils/axios'

export async function PATCH(request: Request) {
  const params = new URL(request.url).searchParams
  const id = params.get('id')
  const coverageId = params.get('coverageId')

  const body = await request.json()

  try {
    const res = await (await backendWithAuth()).patch(`/subscriptions/${id}/coverage/${coverageId}`, body)
    const data = await res.data

    return Response.json(data)
  } catch (error: any) {
    console.log('Error while updating Subscriptions', error?.response?.data || error?.response)

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
