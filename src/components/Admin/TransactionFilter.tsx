'use client'
import { Input } from '@nextui-org/react'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { CalenderIcon, SearchIcon } from '../Dashboard/icons'

const TransactionFilter = () => {
  const [startDate, setStartDate] = useState<Date>()

  return (
    <div className='flex items-center gap-4'>
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
  )
}

export default TransactionFilter
