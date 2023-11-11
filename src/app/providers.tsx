'use client'

import { UserContextProvider } from '@/components/UserContext'
import { NextUIProvider } from '@nextui-org/react'
import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from 'react-query'

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <NextUIProvider>
          <Toaster />
          {children}
        </NextUIProvider>
      </UserContextProvider>
    </QueryClientProvider>
  )
}
