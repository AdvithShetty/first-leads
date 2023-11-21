import backend from '@/utils/axios'

export async function GET(request: Request) {
  const params = new URL(request.url).searchParams
  const leadTypeId = params.get('leadTypeId')

  if (!leadTypeId) {
    return Response.json(
      {
        error: 'Lead Type Id is required',
      },
      {
        status: 400,
      }
    )
  }

  try {
    const res = await backend.get(`/lead-types/${leadTypeId}`)
    const data = await res.data

    return Response.json(data)
  } catch (error: any) {
    console.log('Error while fetching lead types by Id', error?.response?.data || error?.response)

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
