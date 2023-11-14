'use client'
import useUserReports from '@/hooks/useUserReports'
import { Spinner } from '@nextui-org/react'
import { useState } from 'react'
import Table from './Table'

const Last4Weeks = () => {
  const [startDate, setStartDate] = useState(() => {
    const date = new Date()
    date.setDate(date.getDate() - 28)
    return date.toISOString()
  })

  const { data: reports, isLoading } = useUserReports({
    startDate,
  })
  console.log('🚀 ~ file: Last4Weeks.tsx:7 ~ Last4Weeks ~ data', reports)

  if (isLoading || !reports)
    return (
      <div className='flex min-h-[20rem] w-full items-center justify-center'>
        <Spinner size='lg' color='secondary' />
      </div>
    )

  return (
    <Table
      columns={columns}
      rows={reports.results?.map((report) => ({
        fileName: report.name,
        leadType: String(report.leadTypeId),
        date: report.createdAt,
      }))}
    />
  )
}

export default Last4Weeks

const columns = [
  {
    title: 'File Name',
    className: 'col-span-3',
  },
  {
    title: 'Location',
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
