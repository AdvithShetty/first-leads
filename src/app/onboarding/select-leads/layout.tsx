'use client'
import Cart from './Cart'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='grid min-h-screen w-full grid-cols-4 bg-white'>
      <div className='col-span-full flex h-full flex-col items-center lg:col-span-3'>{children}</div>
      <div className='relative z-10 col-span-1 hidden w-full bg-[#7363F30D] lg:block'>
        <Cart />
      </div>
    </div>
  )
}

export default Layout
