import backend from '@/utils/axios'

export async function GET() {
  try {
    const res = await backend.get(`/blogs/latest`)
    const data = await res.data

    return Response.json(data)
  } catch (error: any) {
    console.log('Error in getting blogs', error?.response?.data || error?.response)

    return Response.json(
      {
        error: 'Something went wrong',
      },
      {
        status: 500,
        statusText: 'Error in getting blogs',
      }
    )
  }
}
