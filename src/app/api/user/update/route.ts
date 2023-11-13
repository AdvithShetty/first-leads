import backend from '@/utils/axios'
import { UserResponse } from '@/utils/interface'
import { cookies } from 'next/headers'

export async function PATCH(request: Request) {
  const refreshCookie = cookies().get('refreshToken')

  const refreshToken = refreshCookie?.value

  if (!refreshToken) {
    return Response.json(
      {
        error: 'Refresh token is required',
      },
      {
        status: 500,
      }
    )
  }

  const body = await request.json()

  try {
    const tokenRes = await backend.post<Promise<UserResponse>>('/auth/refresh-token', {
      refreshToken,
    })

    const tokenData = await tokenRes.data

    backend.interceptors.request.use(
      (config) => {
        if (!config.headers.Authorization) {
          config.headers['Authorization'] = `Bearer ${tokenData.accessToken}`
        }

        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    backend.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config
        if (error.response.status === 401 && !prevRequest?.sent) {
          prevRequest.sent = true
          const newAccessToken = await backend.post<Promise<UserResponse>>('/auth/refresh-token', {
            refreshToken: tokenData.refreshToken,
          })
          prevRequest.headers['Authorization'] = `Bearer ${(await newAccessToken.data).accessToken}`
          return backend(prevRequest)
        }

        return Promise.reject(error)
      }
    )

    const res = await backend.patch('/users', body, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await res.data

    return Response.json(data)
  } catch (error: any) {
    console.log('error', error)

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
