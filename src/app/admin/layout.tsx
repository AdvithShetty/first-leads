'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import AdminSidebar from './AdminSidebar'

const Layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname()

  if (pathname === '/admin') return <>{children}</>

  return (
    <div className='relative grid h-screen grid-cols-7 bg-[#160042] lg:grid-cols-6'>
      <AdminSidebar />
      <div className='z-[1] col-span-6 w-full lg:col-span-5'>
        <div className='hidden h-[10vh] w-full items-center justify-end px-16 lg:flex'>
          <Image src='/images/LogoWhite.png' width={250} height={100} alt='Logo' />
        </div>
        <div className='h-screen w-full overflow-y-auto bg-white lg:h-[90vh] lg:rounded-tl-[15px]'>{children}</div>
      </div>
    </div>
  )
}

export default Layout
