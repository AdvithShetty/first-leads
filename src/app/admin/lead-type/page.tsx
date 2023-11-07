'use client'

import Pagination from '@/components/Dashboard/Pagination'
import { Button, useDisclosure } from '@nextui-org/react'
import AddNewLeadsModal from './AddNewLeadsModal'
import LeadTypesTable from './LeadTypesTable'

const Page = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <div className='w-full px-10 pb-14 pt-10'>
      <div className='flex w-full items-center justify-between'>
        <h1 className='font-sans text-[40px] font-bold text-black'>Lead Type</h1>
        <Button
          type='button'
          onClick={onOpen}
          className='h-12 w-max rounded-[10px] border border-[#0000001C] bg-[#7363F3] px-14 font-rubik text-[13px] font-normal text-white'
        >
          Add New
        </Button>
      </div>
      <LeadTypesTable />
      <div className='pt-10'>
        <Pagination />
      </div>
      <AddNewLeadsModal isOpen={isOpen} onClose={onOpenChange} />
    </div>
  )
}

export default Page
