import axios from 'axios'
import { cookies } from 'next/headers'
import { UserResponse } from './interface'

const BASE_URL = 'https://firstleads-dev.azurewebsites.net'

const backend = axios.create({
  baseURL: BASE_URL,
})

export const backendWithAuth = async () => {
  const refreshCookie = cookies().get('refreshToken')
  const refreshToken = refreshCookie?.value as string

  if (!refreshToken) {
    throw new Error('No refresh token provided')
  }

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

    return backend
  } catch (error: any) {
    console.log('Error in backendWithAuth', error?.response?.data || error?.response)

    throw new Error(error?.response?.data || error?.response)
  }
}

export default backend
