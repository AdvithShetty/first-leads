import NeedMoreLeads from '@/components/Dashboard/NeedMoreLeads'
import RecentlyAdded from '@/components/Dashboard/RecentlyAdded'

const Page = () => {
  return (
    <div className='w-full px-6 py-8 lg:px-10'>
      <h1 className='pb-2 font-sans text-3xl font-bold text-black lg:text-[40px]'>Dashboard</h1>
      <h2 className='pb-6 pt-4 font-sans text-lg font-semibold text-black lg:pt-6 lg:text-2xl'>Analytics</h2>
      <div className='flex items-center justify-between lg:justify-start lg:gap-28'>
        <div
          className='flex w-max flex-col rounded-md bg-white p-4 font-quicksand lg:w-[16rem] lg:px-8 lg:py-7'
          style={{
            boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.10)',
          }}
        >
          <h3 className='text-sm font-bold tracking-[0.16px] text-[#343434] lg:pb-2 lg:text-base'>Lifetime Total</h3>

          <h1 className='text-[28px] font-bold tracking-[0.28px] text-[#6A7ADA]'>856</h1>
          <h2 className='text-sm font-medium tracking-[0.14px] text-[#949494] lg:pt-1'>Leads</h2>
        </div>
        <div
          className='flex w-max flex-col rounded-md bg-white p-4 font-quicksand lg:w-[16rem] lg:px-8 lg:py-7'
          style={{
            boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.10)',
          }}
        >
          <h3 className='text-sm font-bold tracking-[0.16px] text-[#343434] lg:pb-2 lg:text-base'>Last 30 Days</h3>

          <h1 className='text-[28px] font-bold tracking-[0.28px] text-[#6A7ADA]'>3,342</h1>
          <h2 className='text-sm font-medium tracking-[0.14px] text-[#949494] lg:pt-1'>Leads</h2>
        </div>
      </div>
      <RecentlyAdded />
      <NeedMoreLeads buttonStyles='px-8' />
      <div className='flex items-center justify-end'>
        <p className='font-rubik text-sm font-normal text-black'>
          © 2023 All Rights Reserved by First Leads Generation Inc.
        </p>
      </div>
    </div>
  )
}

export default Page
