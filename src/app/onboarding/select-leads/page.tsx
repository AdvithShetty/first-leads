'use client'
import GetCustomPlanCard from '@/components/Onboarding/SelectLead/GetCustomPlanCard'
import LeadTypeCard from '@/components/Onboarding/SelectLead/LeadTypeCard'
import usePicklists from '@/hooks/usePicklists'
import { Skeleton } from '@nextui-org/react'
import Image from 'next/image'
import { useState } from 'react'

const SelectLead = () => {
  const { data: picklists, isLoading } = usePicklists()
  const [cartId, setCartId] = useState<number | null>(null)

  return (
    <div className='flex h-full w-full flex-col overflow-y-hidden p-16 2xl:w-4/5'>
      <Image src='/images/Onboarding/Logo.png' width={250} height={150} alt='Logo' className='object-contain' />
      <h1 className='pt-4 font-sans text-5xl font-bold text-black'>Select your lead type</h1>
      <p className='mt-4 w-3/4 font-outfit text-[21px] font-normal text-[#5F5F5F]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
      <div className='grid grid-cols-4 gap-10 py-10'>
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} className='col-span-2 h-[230px] rounded-lg' />)
          : picklists
          ? picklists.leadTypes.map((picklist, i) => (
              <LeadTypeCard key={i} {...picklist} cartId={cartId} setCartId={setCartId} />
            ))
          : null}
        <GetCustomPlanCard />
      </div>
    </div>
  )
}

export default SelectLead
