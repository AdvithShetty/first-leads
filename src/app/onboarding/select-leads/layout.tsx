'use client'
import LoadingUi from '@/components/LoadingUi'
import useRefreshToken from '@/hooks/useRefreshToken'
import useUser from '@/hooks/useUser'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useIsClient } from 'usehooks-ts'
import { CartSidebarProvider } from './CartSidebarContext'
import CartWrapper from './CartWrapper'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { data: user, isLoading, isSuccess } = useUser()
  const isClient = useIsClient()
  const router = useRouter()
  const { refreshToken } = useRefreshToken()

  useEffect(() => {
    if (!refreshToken) {
      router.push('/signin')
    }
  }, [refreshToken, router])

  if ((isLoading && !isSuccess) || !isClient) return <LoadingUi />

  return (
    <CartSidebarProvider>
      <div className='relative grid min-h-screen w-full grid-cols-4 bg-white'>
        <div className='col-span-full flex h-full flex-col items-center lg:col-span-3'>{children}</div>
        <CartWrapper />
      </div>
    </CartSidebarProvider>
  )
}

export default Layout
