'use client'

import { NextUIProvider } from '@nextui-org/react'
import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from 'react-query'

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <Toaster />
        {children}
      </NextUIProvider>
    </QueryClientProvider>
  )
}
