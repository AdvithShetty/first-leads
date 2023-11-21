'use client'
import usePicklists from '@/hooks/usePicklists'
import { Skeleton } from '@nextui-org/react'
import AddLeadCard from './AddLeadCard'

const Add = () => {
  const { data: picklists, isLoading } = usePicklists()

  return (
    <div className='w-full px-4 py-8 lg:p-10'>
      <h1 className='pb-4 font-sans text-3xl font-bold text-black lg:pb-6 lg:text-[40px] '>Add More Leads</h1>
      <div className='grid grid-cols-4 gap-6 py-10 lg:w-4/5 lg:gap-10'>
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className='col-span-full h-[230px] rounded-lg lg:col-span-2' />
            ))
          : picklists
          ? picklists.leadTypes.map((picklist, i) => <AddLeadCard key={i} {...picklist} />)
          : null}
      </div>
    </div>
  )
}

export default Add
