import backend from '@/utils/axios'
import { UserResponse } from '@/utils/interface'
import { cookies } from 'next/headers'

export async function POST(request: Request) {
  const body = await request.json()

  try {
    const res = await backend.post<Promise<UserResponse>>('/auth/sign-up', body)
    const data = await res.data

    cookies().set('refreshToken', data.refreshToken)

    return Response.json(data)
  } catch (error: any) {
    console.log('error', error?.response?.data || error?.response)
    if (error.response.status === 409) {
      return Response.json(
        {
          error: 'Email already exists',
        },
        {
          status: 409,
        }
      )
    }

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
