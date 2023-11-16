'use client'
import useUserReports from '@/hooks/useUserReports'
import { Spinner } from '@nextui-org/react'
import { useState } from 'react'
import Table from './Table'

const RecentlyAdded = () => {
  const [startDate, setStartDate] = useState(() => {
    const date = new Date()
    date.setDate(date.getDate() - 7)
    return date.toISOString()
  })

  const { data: reports, isLoading } = useUserReports({
    startDate,
  })

  return (
    <>
      <h2 className='pb-6 pt-8 font-sans text-lg font-semibold text-black lg:text-2xl'>Recently Added</h2>
      {isLoading ? (
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
    </>
  )
}

export default RecentlyAdded

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
    title: 'Download',
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
