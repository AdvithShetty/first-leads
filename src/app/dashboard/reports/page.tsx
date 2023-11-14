import Last4Weeks from '@/components/Dashboard/Last4Weeks'
import NeedMoreLeads from '@/components/Dashboard/NeedMoreLeads'

const Reports = () => {
  return (
    <div className='w-full px-10 py-6'>
      <h1 className='font-sans text-[40px] font-bold text-black'>My Report</h1>
      <h2 className='pb-6 pt-10 font-sans text-[32px] font-bold text-black'>Last 4 Week</h2>
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
