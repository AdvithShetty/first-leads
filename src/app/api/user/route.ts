import backend from '@/utils/axios'
import { UserResponse } from '@/utils/interface'

export async function GET(request: Request) {
  // Extract query string params from request
  const url = new URL(request.url)
  const params = Object.fromEntries(url.searchParams) as {
    refreshToken: string
  }

  if (!params.refreshToken) {
    return Response.json(
      {
        error: 'Refresh token is required',
      },
      {
        status: 500,
      }
    )
  }

  try {
    const tokenRes = await backend.post<Promise<UserResponse>>('/auth/refresh-token', {
      refreshToken: params.refreshToken,
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

    const res = await backend.get('/users/me', {
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
