import backend from '@/utils/axios'
import { UserResponse } from '@/utils/interface'
import { cookies } from 'next/headers'

export async function POST(request: Request) {
  const params = new URL(request.url).searchParams
  const search = params.get('search')
  const page = params.get('page')
  const rows = params.get('rows')

  const refreshCookie = cookies().get('refreshToken')

  const refreshToken = refreshCookie?.value

  if (!refreshToken) {
    return Response.json(
      {
        error: 'Refresh token is required',
      },
      {
        status: 500,
        statusText: 'Refresh token is required',
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

    const reqParams = search
      ? { search, page, rows }
      : {
          page,
          rows,
        }

    const res = await backend.post('/reports/search', body, {
      headers: {
        'Content-Type': 'application/json',
      },
      params: reqParams,
    })
    const data = await res.data

    return Response.json(data)
  } catch (error: any) {
    console.log('error', error?.response?.data || error?.response)

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
