import { backendWithAuth } from '@/utils/axios'

export async function GET() {
  try {
    const res = await (await backendWithAuth()).get('/users/next-reports')
    const data = await res.data

    return Response.json(data)
  } catch (error: any) {
    console.log('Error in next reports', error?.response?.data || error?.response)

    return Response.json(
      {
        error: 'Something went wrong',
      },
      {
        status: 500,
        statusText: 'Error while fetching next reports',
      }
    )
  }
}
