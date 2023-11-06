import Image from 'next/image'
import { ReactNode } from 'react'
import AdminSidebar from './AdminSidebar'

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='grid h-screen grid-cols-6 bg-[#160042]'>
      <AdminSidebar />
      <div className='col-span-5 w-full'>
        <div className='flex h-[10vh] w-full items-center justify-end px-16'>
          <Image src='/images/LogoWhite.png' width={250} height={100} alt='Logo' />
        </div>
        <div className='h-[90vh] w-full overflow-y-auto rounded-tl-[15px] bg-white'>{children}</div>
      </div>
    </div>
  )
}

export default layout
