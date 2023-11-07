import TransactionFilter from '@/components/Admin/TransactionFilter'
import Pagination from '@/components/Dashboard/Pagination'
import TransactionTable from './TransactionTable'

const Transaction = () => {
  return (
    <div className='w-full px-10 py-10'>
      <div className='flex items-center justify-between'>
        <h1 className='font-sans text-[40px] font-bold text-black'>Transaction</h1>
        <TransactionFilter />
      </div>
      <TransactionTable />
      <div className='flex items-center justify-between pt-8'>
        <Pagination />
        <p className='font-rubik text-sm font-normal text-black'>© 2023 All Right Reserved by First Leads</p>
      </div>
    </div>
  )
}

export default Transaction
