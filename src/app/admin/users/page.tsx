'use client'
import Pagination from '@/components/Dashboard/Pagination'
import { SearchIcon } from '@/components/Dashboard/icons'
import useUsersForAdmin from '@/hooks/useUsersForAdmin'
import { Input, Spinner } from '@nextui-org/react'
import { Fragment, useMemo, useState } from 'react'

const Users = () => {
  const [searchInput, setSearchInput] = useState<string>('')

  const [currentPage, setCurrentPage] = useState(1)

  const { data, isLoading } = useUsersForAdmin({
    search: searchInput,
    page: currentPage - 1,
    rows: 10,
  })

  const totalPages = useMemo(() => {
    if (isLoading || !data) return 0
    return Math.ceil(data.total / 10)
  }, [data, isLoading])

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage)
  }

  return (
    <div className='flex h-full w-full flex-col px-6 py-8 lg:px-10'>
      <div className='flex flex-col justify-between lg:flex-row lg:items-center'>
        <h1 className='pb-2 font-sans text-3xl font-bold text-black lg:pb-4 lg:text-[40px]'>Users</h1>
        <Input
          isClearable
          radius='lg'
          startContent={
            <SearchIcon className='pointer-events-none mb-0.5 flex-shrink-0 text-black/50 text-slate-400 dark:text-white/90' />
          }
          variant='bordered'
          classNames={{
            label: 'text-[#667085] font-inter text-base font-normal',
            input: 'font-inter text-base font-normal',
            inputWrapper: 'border border-[#D0D5DD] rounded-lg h-12',
          }}
          placeholder='Search'
          className='mt-6 w-full lg:mt-0 lg:w-[16rem]'
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      {isLoading ? (
        <div className='flex min-h-[20rem] w-full items-center justify-center'>
          <Spinner size='lg' color='secondary' />
        </div>
      ) : (
        data && (
          <div className='w-full pt-10 lg:pt-0'>
            <div
              className='mt-10 hidden w-full grid-cols-10 gap-6 rounded-md bg-white px-6 py-6 lg:grid'
              style={{
                boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.10)',
              }}
            >
              {columns.map((column, i) => (
                <h1 className={`pt-3 font-rubik text-lg font-medium text-black ${column.className}`} key={i}>
                  {column.title}
                </h1>
              ))}
              <div className='col-span-full h-[1px] rounded-full bg-[#F5F5F5]' />
              {data.results.map((user, i) => (
                <Fragment key={i}>
                  <h1 className='col-span-2 py-2 font-rubik text-[15px] font-normal text-[#686868]'>{`${user.firstName} ${user.lastName}`}</h1>
                  <h1 className='col-span-2 py-2 font-rubik text-[15px] font-normal text-[#686868]'>{user.email}</h1>
                  <h1 className='col-span-2 py-2 font-rubik text-[15px] font-normal text-[#686868]'>{user.phone}</h1>
                  <h1 className='col-span-2 py-2 font-rubik text-[15px] font-normal text-[#686868]'>{user.zipCode}</h1>
                  <h1 className='col-span-2 py-2 font-rubik text-[15px] font-normal text-[#686868]'>{user.industry}</h1>
                </Fragment>
              ))}
            </div>
            <div
              className='flex flex-col divide-y divide-[#F5F5F5] rounded-md bg-white px-6 py-2 lg:hidden'
              style={{
                boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.10)',
              }}
            >
              {data.results.map((user, i) => (
                <div className='flex w-full flex-col py-4' key={i}>
                  <h1 className='font-rubik text-lg font-medium text-black'>{`${user.firstName} ${user.lastName}`}</h1>
                  <h1 className='font-rubik text-[15px] font-normal text-[#686868]'>{user.email}</h1>
                  <h1 className='font-rubik text-[15px] font-normal text-[#686868]'>{user.phone}</h1>
                  <h1 className='font-rubik text-[15px] font-normal text-[#686868]'>{user.zipCode}</h1>
                  <h1 className='font-rubik text-[15px] font-normal text-[#686868]'>{user.industry}</h1>
                </div>
              ))}
            </div>
          </div>
        )
      )}
      <div className='mt-auto flex flex-col items-center justify-between gap-4 py-8 lg:flex-row'>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        <p className='select-none font-rubik text-sm font-normal text-black'>
          © 2023 All Rights Reserved by First Leads Generation Inc.
        </p>
      </div>
    </div>
  )
}

const columns = [
  {
    title: 'Name',
    className: 'col-span-2',
  },
  {
    title: 'Email',
    className: 'col-span-2',
  },
  {
    title: 'Phone Number ',
    className: 'col-span-2',
  },
  {
    title: 'Zip Code',
    className: 'col-span-2',
  },
  {
    title: 'Industry',
    className: 'col-span-2',
  },
]

const rows = [
  {
    name: 'Jack Doe',
    email: 'jackdoe@gmail.com',
    phoneNumber: '1234567890',
    zipCode: '12345',
    industry: 'Construction',
  },
  {
    name: 'Jack Doe',
    email: 'jackdoe@gmail.com',
    phoneNumber: '1234567890',
    zipCode: '12345',
    industry: 'Construction',
  },
  {
    name: 'Jack Doe',
    email: 'jackdoe@gmail.com',
    phoneNumber: '1234567890',
    zipCode: '12345',
    industry: 'Construction',
  },
]

export default Users
