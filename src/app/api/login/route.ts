import backend from '@/utils/axios'
import { UserResponse } from '@/utils/interface'
import { cookies } from 'next/headers'

export async function POST(request: Request) {
  const body = await request.json()

  try {
    const res = await backend.post<Promise<UserResponse>>('/auth/sign-in', body)
    const data = await res.data

    cookies().set('refreshToken', data.refreshToken)

    return Response.json(data)
  } catch (error: any) {
    console.log('error', error?.response?.data || error?.response)

    return Response.json(
      {
        error: error?.response?.data?.errors,
      },
      {
        status: 500,
      }
    )
  }
}
