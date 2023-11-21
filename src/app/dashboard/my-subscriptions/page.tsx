'use client'
import useSubscriptions from '@/hooks/useSubscriptions'
import { Skeleton } from '@nextui-org/react'
import PlanModification from './PlanModification'
import SubscriptionRow from './SubscriptionRow'

const MySubscriptions = () => {
  const { data, isLoading } = useSubscriptions()

  return (
    <div className='w-full px-6 py-8 lg:px-10'>
      <div className='flex flex-col items-start justify-between pb-8 '>
        <h1 className='pb-4 font-sans text-3xl font-bold text-black lg:pb-6 lg:text-[40px] '>Subscription</h1>
        <div className='flex w-max items-center justify-end gap-2 rounded-full bg-[#DFFFE2] px-4 py-1.5 lg:hidden'>
          <div className='h-2 w-2 rounded-full bg-[#00FF1A]' />
          <h3 className='font-quicksand text-[17px] font-semibold text-black'>Active Plans</h3>
        </div>
      </div>
      <div
        className='rounded-md px-6 py-6 lg:px-12'
        style={{
          boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.10)',
        }}
      >
        <div className='ml-auto hidden w-max items-center justify-end gap-2 rounded-full bg-[#DFFFE2] px-4 py-1.5 lg:flex'>
          <div className='h-2 w-2 rounded-full bg-[#00FF1A]' />
          <h3 className='font-quicksand text-[17px] font-semibold text-black'>Active Plans</h3>
        </div>
        <div className='flex flex-col gap-8 divide-y divide-[#0000001F]'>
          {isLoading ? (
            <div className='flex w-full flex-col gap-6 pt-6'>
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton className='h-[100px] w-full rounded-lg' key={i} />
              ))}
            </div>
          ) : (
            data?.items.map((item, i) => <SubscriptionRow key={i} {...item} subscriptionId={data.id} />)
          )}
        </div>
        <PlanModification />
      </div>
      <div className='flex items-center justify-end pt-14'>
        <p className='font-rubik text-sm font-normal text-black'>© 2023 All Right Reserved by First Leads</p>
      </div>
    </div>
  )
}

export default MySubscriptions
