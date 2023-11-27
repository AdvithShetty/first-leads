'use client'
import useSubscriptions from '@/hooks/useSubscriptions'
import { Button, Link, Skeleton } from '@nextui-org/react'
import PlanModification from './PlanModification'
import SubscriptionRow from './SubscriptionRow'

const MySubscriptions = () => {
  const { data, isLoading, isError, error } = useSubscriptions()

  const isEmpty = !isLoading && !data?.items.length

  const hasNoSubscription = isError && (error as any).response?.status === 404

  return (
    <div className='flex h-full w-full flex-col px-6 py-8 lg:px-10'>
      <div className='flex flex-col items-start justify-between pb-8 '>
        <h1 className='pb-4 font-sans text-3xl font-bold text-black lg:pb-6 lg:text-[40px] '>Subscription</h1>
        {isEmpty ? (
          <div className='flex w-max items-center justify-end gap-2 rounded-full bg-red-200 px-4 py-1.5 lg:hidden'>
            <div className='h-2 w-2 rounded-full bg-red-400' />
            <h3 className='font-quicksand text-[17px] font-semibold text-black'>No Active Plans</h3>
          </div>
        ) : (
          <div className='flex w-max items-center justify-end gap-2 rounded-full bg-[#DFFFE2] px-4 py-1.5 lg:hidden'>
            <div className='h-2 w-2 rounded-full bg-[#00FF1A]' />
            <h3 className='font-quicksand text-[17px] font-semibold text-black'>Active Plans</h3>
          </div>
        )}
      </div>
      {hasNoSubscription ? (
        <div
          className='my-8 flex w-full flex-wrap items-center justify-between gap-2 rounded-md bg-[#7363F3] p-6 lg:p-10'
          style={{
            boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.10)',
          }}
        >
          <h1 className='text-center font-sans text-lg font-medium text-white lg:text-left lg:text-[32px]'>
            You have no active subscriptions
          </h1>
          <Button
            className={`mx-auto h-12 shrink-0 rounded-lg bg-black font-inter text-base font-medium text-white lg:mx-0`}
          >
            <Link href='/onboarding/select-leads' className='text-white'>
              Start a new subscription
            </Link>
          </Button>
        </div>
      ) : (
        <div
          className='rounded-md px-6 py-6 lg:px-12'
          style={{
            boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.10)',
          }}
        >
          {isLoading ? null : !isEmpty ? (
            <div className='ml-auto hidden w-max items-center justify-end gap-2 rounded-full bg-[#DFFFE2] px-4 py-1.5 lg:flex'>
              <div className='h-2 w-2 rounded-full bg-[#00FF1A]' />
              <h3 className='font-quicksand text-[17px] font-semibold text-black'>Active Plans</h3>
            </div>
          ) : (
            <div className='ml-auto hidden w-max items-center justify-end gap-2 rounded-full bg-red-200 px-4 py-1.5 lg:flex'>
              <div className='h-2 w-2 rounded-full bg-red-400' />
              <h3 className='font-quicksand text-[17px] font-semibold text-black'>No Active Plans</h3>
            </div>
          )}
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
          {isEmpty ? null : <div className='mt-6 h-[1px] w-full bg-[#0000001F]' />}
          {isLoading ? (
            <div className='flex w-full flex-col gap-6 pt-6'>
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton className='h-[100px] w-full rounded-lg' key={i} />
              ))}
            </div>
          ) : data ? (
            <>
              <div className='flex flex-col justify-between pt-4 lg:flex-row lg:items-center'>
                <h1 className='font-sans text-lg font-semibold'>Renewal Date</h1>
                <h2 className='font-sans text-lg font-semibold'>
                  {new Date(data.nextBillingDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </h2>
              </div>
              <div className='flex flex-col justify-between pt-4 lg:flex-row lg:items-center'>
                <h1 className='font-sans text-lg font-semibold'>Tax</h1>
                <h2 className='font-sans text-xl font-bold'>${data.taxAmount}</h2>
              </div>
              <div className='flex flex-col justify-between pt-4 lg:flex-row lg:items-center'>
                <h1 className='font-sans text-lg font-semibold'>Total Amount</h1>
                <h2 className='font-sans text-xl font-bold'>${data.totalPrice}</h2>
              </div>
            </>
          ) : null}
          <PlanModification />
        </div>
      )}
      <div className='mt-auto flex items-center justify-end pb-8 pt-14 lg:pb-0'>
        <p className='font-rubik text-sm font-normal text-black'>
          © 2023 All Rights Reserved by First Leads Generation Inc.
        </p>
      </div>
    </div>
  )
}

export default MySubscriptions
