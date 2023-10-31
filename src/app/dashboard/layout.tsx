import { ReactNode } from 'react'
import Sidebar from './Sidebar'

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='grid h-screen grid-cols-6 bg-[#160042]'>
      <Sidebar />
      {children}
    </div>
  )
}

export default layout
