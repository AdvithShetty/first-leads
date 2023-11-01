'use client'
import Table from './Table'

const RecentlyAdded = () => {
  return (
    <>
      <h2 className='pb-6 pt-8 font-sans text-2xl font-semibold text-black'>Recently Added</h2>
      <Table columns={columns} rows={rows} />
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
    title: 'Status',
    className: 'col-span-2',
  },
]

const rows = [
  {
    fileName: 'October Week 1',
    leadType: 'Lead Type',
    date: '29 Sept 2023',
    status: 'Status',
  },
  {
    fileName: 'October Week 2',
    leadType: 'Lead Type',
    date: '29 Sept 2023',
    status: 'Status',
  },
  {
    fileName: 'October Week 3',
    leadType: 'Lead Type',
    date: '29 Sept 2023',
    status: 'Status',
  },
]
