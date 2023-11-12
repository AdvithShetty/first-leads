import { useUser } from '@/components/UserContext'
import backend, { backendWithAuth } from '@/utils/axios'
import { UserResponse } from '@/utils/interface'
import { useEffect } from 'react'

const useAxiosPrivate = () => {
  const { user } = useUser()

  useEffect(() => {
    const requestInterceptor = backendWithAuth.interceptors.request.use(
      (config) => {
        if (!config.headers.Authorization) {
          config.headers['Authorization'] = `Bearer ${user?.accessToken}`
        }

        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    const responseInterceptor = backendWithAuth.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config
        if (error.response.status === 401 && !prevRequest?.sent) {
          prevRequest.sent = true
          const newAccessToken = await backend.post<UserResponse>('/auth/refresh-token', {
            refreshToken: user?.refreshToken,
          })
          prevRequest.headers['Authorization'] = `Bearer ${newAccessToken.data.accessToken}`
          return backendWithAuth(prevRequest)
        }

        return Promise.reject(error)
      }
    )

    return () => {
      backendWithAuth.interceptors.request.eject(requestInterceptor)
      backendWithAuth.interceptors.response.eject(responseInterceptor)
    }
  }, [])

  return backendWithAuth
}

export default useAxiosPrivate
