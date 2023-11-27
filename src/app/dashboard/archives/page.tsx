'use client'
import Pagination from '@/components/Dashboard/Pagination'
import Table from '@/components/Dashboard/Table'
import { CalenderIcon, SearchIcon } from '@/components/Dashboard/icons'
import usePicklists from '@/hooks/usePicklists'
import useUserReports from '@/hooks/useUserReports'
import { Input, Select, SelectItem, Spinner } from '@nextui-org/react'
import { useMemo, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const Archives = () => {
  const [searchInput, setSearchInput] = useState<string>('')
  const [startDate, setStartDate] = useState<Date>()
  const { data: picklists, isLoading: isPicklistsLoading } = usePicklists()

  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage)
  }

  const leadTypes = useMemo(() => {
    if (isPicklistsLoading || !picklists) return []
    return picklists.leadTypes.map((leadType) => leadType.name)
  }, [isPicklistsLoading, picklists])

  const [value, setValue] = useState(new Set<string>([]))

  const leadTypeId = useMemo(() => {
    const selectedLeadIndex = Number(Array.from(value)[0])

    if (isPicklistsLoading || !picklists || isNaN(selectedLeadIndex)) return null
    return picklists.leadTypes[selectedLeadIndex].id
  }, [isPicklistsLoading, picklists, value])

  const { data: reports, isLoading: isReportsLoading } = useUserReports({
    startDate: startDate?.toISOString(),
    search: searchInput,
    page: currentPage - 1,
    rows: 10,
    leadTypeId: leadTypeId as number,
  })

  const totalPages = useMemo(() => {
    if (isReportsLoading || !reports) return 0
    return Math.ceil(reports.total / 10)
  }, [isReportsLoading, reports])

  return (
    <div className='flex h-full w-full flex-col px-6 py-8 lg:px-10'>
      <div className='flex flex-col justify-between lg:flex-row lg:items-center'>
        <h1 className='pb-2 font-sans text-3xl font-bold text-black lg:pb-4 lg:text-[40px]'>Archives</h1>
        <div className='flex flex-col gap-4 pt-4 lg:flex-row lg:items-center lg:pt-0'>
          <Select
            label='Filter by Lead Type'
            variant='bordered'
            className='w-full font-inter text-sm font-normal capitalize text-[#686868] outline-none lg:w-[223px]'
            classNames={{
              label: 'font-inter text-sm font-normal text-[#686868] capitalize',
              listboxWrapper: 'font-inter text-sm font-normal text-[#686868] capitalize',
              innerWrapper: 'font-inter text-sm font-normal text-[#686868] capitalize',
            }}
            selectedKeys={value}
            onSelectionChange={setValue as any}
          >
            {leadTypes.map((type, i) => (
              <SelectItem key={i} value={type} className='capitalize'>
                {type}
              </SelectItem>
            ))}
          </Select>
          <div className='flex h-[3.5rem] w-full items-center overflow-hidden rounded-xl border-2 border-default-200 px-4 font-inter text-sm font-normal text-[#686868] shadow-sm lg:w-[223px]'>
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
            className='w-full lg:w-[223px]'
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
      </div>
      <div className='pt-10'>
        {isReportsLoading ? (
          <div className='flex min-h-[20rem] w-full items-center justify-center'>
            <Spinner size='lg' color='secondary' />
          </div>
        ) : reports ? (
          <Table
            columns={columns}
            rows={reports.results?.map((report) => ({
              fileName: report.name,
              leadType: report.leadType,
              date: report.createdAt,
              link: report.url,
            }))}
            responsiveColumns={responsiveColumns}
          />
        ) : null}
      </div>
      <div className='mt-auto flex flex-col items-center justify-between gap-4 py-8 lg:flex-row'>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        <p className='select-none font-rubik text-sm font-normal text-black'>
          © 2023 All Rights Reserved by First Leads Generation Inc.
        </p>
      </div>
    </div>
  )
}

export default Archives

const columns = [
  {
    title: 'File Name',
    className: 'col-span-3',
  },
  {
    title: 'Lead Type',
    className: 'col-span-4',
  },
  {
    title: 'Date',
    className: 'col-span-2',
  },
  {
    title: 'Status',
    className: 'col-span-2',
  },
]

const responsiveColumns = [
  {
    title: 'Lead Type',
    className: 'col-span-2',
  },

  {
    title: 'Download',
    className: 'col-span-2',
  },
]
