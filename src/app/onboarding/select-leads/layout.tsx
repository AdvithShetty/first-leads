'use client'
import { CartSidebarProvider } from './CartSidebarContext'
import CartWrapper from './CartWrapper'

const Layout = ({ children }: { children: React.ReactNode }) => {
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
