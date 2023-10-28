'use client'
import { CartContextProvider } from '@/components/Onboarding/SelectLead/CartContext'
import { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
  return <CartContextProvider>{children}</CartContextProvider>
}

export default layout
