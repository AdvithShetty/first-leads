'use client'
import { CartIcon } from '@/components/Dashboard/icons'
import GetCustomPlanCard from '@/components/Onboarding/SelectLead/GetCustomPlanCard'
import LeadTypeCard from '@/components/Onboarding/SelectLead/LeadTypeCard'
import usePicklists from '@/hooks/usePicklists'
import { Skeleton } from '@nextui-org/react'
import Image from 'next/image'

const SelectLead = () => {
  const { data: picklists, isLoading } = usePicklists()

  return (
    <div className='flex h-full w-full flex-col overflow-y-hidden px-6 py-10 lg:p-16 2xl:w-4/5'>
      <div className='flex items-center justify-between'>
        <div className='relative h-[65px] w-3/5 lg:h-[80px] lg:w-[250px]'>
          <Image src='/images/Onboarding/Logo.png' fill alt='Logo' className='object-contain' />
        </div>
        <button className='block lg:hidden'>
          <CartIcon />
        </button>
      </div>
      <h1 className='pt-4 font-sans text-3xl font-bold text-black lg:text-5xl'>Select your lead type</h1>
      <p className='mt-4 w-full font-outfit text-base font-normal text-[#5F5F5F] lg:w-3/4 lg:text-[21px]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
      <div className='grid grid-cols-4 gap-10 py-10'>
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className='col-span-full h-[230px] rounded-lg lg:col-span-2' />
            ))
          : picklists
          ? picklists.leadTypes.map((picklist, i) => <LeadTypeCard key={i} {...picklist} />)
          : null}
        <GetCustomPlanCard />
      </div>
    </div>
  )
}

export default SelectLead
