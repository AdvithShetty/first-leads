'use client'
import ArchivesTable from '@/components/Dashboard/ArchivesTable'
import Pagination from '@/components/Dashboard/Pagination'
import { CalenderIcon, SearchIcon } from '@/components/Dashboard/icons'
import usePicklists from '@/hooks/usePicklists'
import { Input, Select, SelectItem } from '@nextui-org/react'
import { useMemo, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const Archives = () => {
  const [startDate, setStartDate] = useState<Date>()
  const { data: picklists, isLoading: isPicklistsLoading } = usePicklists()

  const leadTypes = useMemo(() => {
    if (isPicklistsLoading || !picklists) return []
    return picklists.leadTypes.map((leadType) => leadType.name)
  }, [isPicklistsLoading, picklists])

  return (
    <div className='w-full px-10 py-6'>
      <div className='flex items-center justify-between'>
        <h1 className='font-sans text-[40px] font-bold text-black'>Archives</h1>
        <div className='flex items-center gap-4'>
          <Select
            label='Filter by Lead Type'
            variant='bordered'
            className='w-[223px] font-inter text-sm font-normal capitalize text-[#686868] outline-none'
            classNames={{
              label: 'font-inter text-sm font-normal text-[#686868] capitalize',
              listboxWrapper: 'font-inter text-sm font-normal text-[#686868] capitalize',
            }}
          >
            {leadTypes.map((type, i) => (
              <SelectItem key={i} value={type} className='capitalize'>
                {type}
              </SelectItem>
            ))}
          </Select>
          <div className='flex h-[3.5rem] w-[223px] items-center overflow-hidden rounded-xl border-2 border-default-200 px-4 font-inter text-sm font-normal text-[#686868] shadow-sm'>
            <CalenderIcon className='h-4 w-4 shrink-0' />
            <DatePicker
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
              className='flex h-12 items-center gap-4 px-4 font-rubik text-[13px] outline-none placeholder:text-[#686868]'
              placeholderText='Filter by Date'
            />
          </div>
          <Input
            placeholder='Search'
            variant='bordered'
            type='email'
            startContent={<SearchIcon className='h-3 w-3 shrink-0' />}
            classNames={{
              label: 'text-[#667085] font-inter text-base font-normal',
              input: 'font-inter text-base font-normal h-[3.5rem] pl-2',
              inputWrapper: 'h-[3.5rem]',
            }}
            className='w-[223px]'
          />
        </div>
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
