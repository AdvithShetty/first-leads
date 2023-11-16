import Last4Weeks from '@/components/Dashboard/Last4Weeks'
import NeedMoreLeads from '@/components/Dashboard/NeedMoreLeads'

const Reports = () => {
  return (
    <div className='w-full px-6 py-8 lg:px-10'>
      <h1 className='pb-2 font-sans text-3xl font-bold text-black lg:pb-4 lg:text-[40px]'>My Report</h1>
      <h2 className='pb-6 pt-6 font-sans text-lg font-semibold text-black lg:pt-10 lg:text-[32px] lg:font-bold'>
        Last 4 Week
      </h2>
      <Last4Weeks />
      <div className='flex gap-20'>
        <NeedMoreLeads />
      </div>
      <div className='flex items-center justify-end pt-6'>
        <p className='font-rubik text-sm font-normal text-black'>© 2023 All Right Reserved by First Leads</p>
      </div>
    </div>
  )
}

export default Reports
