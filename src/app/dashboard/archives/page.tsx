import ArchivesFilter from '@/components/Dashboard/ArchivesFilter'
import ArchivesTable from '@/components/Dashboard/ArchivesTable'
import Pagination from '@/components/Dashboard/Pagination'

const Archives = () => {
  return (
    <div className='w-full px-10 py-6'>
      <div className='flex items-center justify-between'>
        <h1 className='font-sans text-[40px] font-bold text-black'>Archives</h1>
        <ArchivesFilter />
      </div>
      <ArchivesTable />
      <div className='flex items-center justify-between pt-8'>
        <Pagination />
        <p className='font-rubik text-sm font-normal text-black'>© 2023 All Right Reserved by First Leads</p>
      </div>
    </div>
  )
}

export default Archives
